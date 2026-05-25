"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ConverterCard, Currency } from "./converter-card";
import {
  fetchPublicBootstrap,
  fetchPublicFxRate,
  type PublicBootstrapResponse,
  type PublicFxRateResponse,
  type SupportedDirection,
} from "@/lib/service/fx";
import {
  countryPreferences,
  useCountryPreference,
} from "../country/country-preference";

type ConverterProps = {
  bootstrap: PublicBootstrapResponse | null;
};

type CustomerQuoteResponse = {
  code?: string;
  customer_rate?: number;
  recipient_gets?: number;
  rate_description?: string;
  transfer_fee?: number;
  estimated_arrival?: string;
  expires_at?: string;
  message?: string;
};

function isTinyAmountQuoteError(response: CustomerQuoteResponse) {
  return (
    response.code === "VALIDATION_ERROR" &&
    response.message?.toLowerCase().includes("too small")
  );
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const currencyDetails: Record<string, Omit<Currency, "code">> = {
  NGN: {
    name: "Nigerian Naira",
    country: "Nigeria",
    countryCode: "NG",
    symbol: "₦",
  },
  GBP: {
    name: "British Pound Sterling",
    country: "United Kingdom",
    countryCode: "GB",
    symbol: "£",
  },
  USD: {
    name: "United States Dollar",
    country: "United States",
    countryCode: "US",
    symbol: "$",
  },
  EUR: {
    name: "Euro",
    country: "European Union",
    countryCode: "EU",
    symbol: "€",
  },
  CAD: {
    name: "Canadian Dollar",
    country: "Canada",
    countryCode: "CA",
    symbol: "C$",
  },
};

function toCurrency(code: string): Currency {
  const details = currencyDetails[code] ?? {
    name: code,
    country: code,
    countryCode: "",
    symbol: code,
  };

  return {
    code,
    ...details,
  };
}

function findDirection(
  directions: SupportedDirection[],
  fromCurrency: string,
  toCurrency?: string,
) {
  return directions.find(
    (direction) =>
      direction.fromCurrency === fromCurrency &&
      (!toCurrency || direction.toCurrency === toCurrency),
  );
}

function uniqueCurrencies(codes: string[]) {
  return Array.from(new Set(codes)).map(toCurrency);
}

function getDirectionKey(direction: SupportedDirection) {
  return `${direction.fromCurrency}-${direction.toCurrency}`;
}

function calculateSourceAmountFromRecipient(
  recipientAmount: number,
  customerRate: number,
  direction: SupportedDirection,
) {
  if (recipientAmount <= 0 || customerRate <= 0) return 0;

  const isNgnToForeign =
    direction.fromCurrency === "NGN" && direction.toCurrency !== "NGN";

  const sourceAmount = isNgnToForeign
    ? recipientAmount * customerRate
    : recipientAmount / customerRate;

  return Math.round(sourceAmount * 100) / 100;
}

function Converter({ bootstrap }: ConverterProps) {
  const { selectedCountry, setSelectedCountry } = useCountryPreference();
  const [bootstrapData, setBootstrapData] =
    useState<PublicBootstrapResponse | null>(bootstrap);

  const directions = useMemo(
    () => bootstrapData?.supportedDirections ?? [],
    [bootstrapData],
  );

  const initialDirection = useMemo(
    () => bootstrapData?.defaultDirection ?? directions[0] ?? null,
    [bootstrapData, directions],
  );

  const [selectedDirection, setSelectedDirection] =
    useState<SupportedDirection | null>(initialDirection);
  const [rateCache, setRateCache] = useState<
    Record<string, PublicFxRateResponse>
  >({});
  const [amount, setAmount] = useState<number>(100);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState("");
  const amountRef = useRef(amount);
  const activeQuoteRequestRef = useRef(0);
  const selectedDirectionKeyRef = useRef("");
  const convertDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCountryBootstrap() {
      const nextBootstrap = await fetchPublicBootstrap({
        countryCode: selectedCountry.countryCode,
      });

      if (cancelled) return;

      if (!nextBootstrap) {
        setErrorMessage("Unable to load currency options for this country.");
        return;
      }

      const nextDirection =
        nextBootstrap.defaultDirection ??
        nextBootstrap.supportedDirections[0] ??
        null;

      setBootstrapData(nextBootstrap);
      setSelectedDirection(nextDirection);
      setConvertedAmount(0);
      setErrorMessage("");
    }

    void loadCountryBootstrap();

    return () => {
      cancelled = true;
    };
  }, [selectedCountry.countryCode]);

  const fromCurrency = selectedDirection
    ? toCurrency(selectedDirection.fromCurrency)
    : null;
  const toCurrencyOption = selectedDirection
    ? toCurrency(selectedDirection.toCurrency)
    : null;

  const fromCurrencies = useMemo(
    () =>
      uniqueCurrencies(
        countryPreferences.map((country) => country.currencyCode),
      ),
    [],
  );

  const toCurrencies = useMemo(() => {
    if (!selectedDirection) return [];

    return uniqueCurrencies(
      directions
        .filter(
          (direction) =>
            direction.fromCurrency === selectedDirection.fromCurrency,
        )
        .map((direction) => direction.toCurrency),
    );
  }, [directions, selectedDirection]);

  const selectedDirectionKey = selectedDirection
    ? getDirectionKey(selectedDirection)
    : "";
  const selectedPublicRate = selectedDirectionKey
    ? rateCache[selectedDirectionKey]
    : undefined;
  const rate = selectedPublicRate?.customer_rate ?? 0;
  const transferFee = selectedPublicRate?.transfer_fee ?? "--";
  const estimatedArrival = selectedPublicRate
    ? (selectedPublicRate.estimated_arrival ?? "Usually within minutes")
    : "--";

  useEffect(() => {
    selectedDirectionKeyRef.current = selectedDirectionKey;
  }, [selectedDirectionKey]);

  const cachePublicRate = useCallback(
    (direction: SupportedDirection, publicRate: PublicFxRateResponse) => {
      setRateCache((currentCache) => ({
        ...currentCache,
        [getDirectionKey(direction)]: publicRate,
      }));
    },
    [],
  );

  const cacheQuoteRate = useCallback(
    (direction: SupportedDirection, quote: CustomerQuoteResponse) => {
      if (typeof quote.customer_rate !== "number") return;

      const customerRate = quote.customer_rate;

      setRateCache((currentCache) => {
        const key = getDirectionKey(direction);
        const existingRate = currentCache[key];

        return {
          ...currentCache,
          [key]: {
            from_currency: direction.fromCurrency,
            to_currency: direction.toCurrency,
            currency_pair_direction: `${direction.fromCurrency} -> ${direction.toCurrency}`,
            customer_rate: customerRate,
            transfer_fee:
              typeof quote.transfer_fee === "number"
                ? quote.transfer_fee
                : (existingRate?.transfer_fee ?? 0),
            estimated_arrival:
              quote.estimated_arrival ?? existingRate?.estimated_arrival,
            published_at: existingRate?.published_at ?? "",
            expires_at: quote.expires_at ?? existingRate?.expires_at ?? "",
          },
        };
      });
    },
    [],
  );

  const removeCachedRate = useCallback((direction: SupportedDirection) => {
    setRateCache((currentCache) => {
      const nextCache = { ...currentCache };

      delete nextCache[getDirectionKey(direction)];

      return nextCache;
    });
  }, []);

  const applyPublicRate = useCallback(
    async (
      direction: SupportedDirection,
      options?: { clearError?: boolean },
    ) => {
      const publicRate = await fetchPublicFxRate(
        direction.fromCurrency,
        direction.toCurrency,
      );

      if (!publicRate) return null;

      cachePublicRate(direction, publicRate);

      if (
        options?.clearError &&
        selectedDirectionKeyRef.current === getDirectionKey(direction)
      ) {
        setErrorMessage("");
      }

      return publicRate;
    },
    [cachePublicRate],
  );

  useEffect(() => {
    let cancelled = false;

    directions.forEach((direction) => {
      void (async () => {
        const publicRate = await fetchPublicFxRate(
          direction.fromCurrency,
          direction.toCurrency,
        );

        if (!cancelled && publicRate) {
          cachePublicRate(direction, publicRate);
        }
      })();
    });

    return () => {
      cancelled = true;
    };
  }, [cachePublicRate, directions]);

  const handleConvert = useCallback(
    async (currentAmount: number) => {
      const direction = selectedDirection;

      if (!BASE_URL || !direction) {
        setConvertedAmount(0);
        return;
      }

      const directionKey = getDirectionKey(direction);
      const requestId = activeQuoteRequestRef.current + 1;

      activeQuoteRequestRef.current = requestId;

      if (currentAmount <= 0) {
        setConvertedAmount(0);
        setErrorMessage("");

        await applyPublicRate(direction, { clearError: true });

        return;
      }

      setErrorMessage("");

      try {
        const res = await fetch(`${BASE_URL}/public/customer-quotes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fromCurrency: direction.fromCurrency,
            toCurrency: direction.toCurrency,
            sourceAmount: currentAmount,
          }),
        });
        const json = (await res.json()) as CustomerQuoteResponse;

        if (
          activeQuoteRequestRef.current !== requestId ||
          selectedDirectionKeyRef.current !== directionKey
        ) {
          return;
        }

        if (!res.ok) {
          if (isTinyAmountQuoteError(json)) {
            if (await applyPublicRate(direction, { clearError: true })) {
              setConvertedAmount(0);
              return;
            }
          }

          if (json.code === "RATE_UNAVAILABLE") {
            removeCachedRate(direction);
          }

          throw new Error(
            json.code === "RATE_UNAVAILABLE"
              ? "Rate unavailable for this direction right now."
              : (json.message ?? "Unable to create quote"),
          );
        }

        if (typeof json.recipient_gets !== "number") {
          throw new Error("Quote response is missing recipient amount");
        }

        setConvertedAmount(json.recipient_gets);
        cacheQuoteRate(direction, json);
      } catch (error) {
        if (
          activeQuoteRequestRef.current !== requestId ||
          selectedDirectionKeyRef.current !== directionKey
        ) {
          return;
        }

        setConvertedAmount(0);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Unable to create quote right now",
        );
      }
    },
    [applyPublicRate, cacheQuoteRate, removeCachedRate, selectedDirection],
  );

  const scheduleConvert = useCallback(
    (nextAmount: number) => {
      if (convertDelayRef.current) {
        clearTimeout(convertDelayRef.current);
      }

      convertDelayRef.current = setTimeout(() => {
        void handleConvert(nextAmount);
      }, 500);
    },
    [handleConvert],
  );

  useEffect(() => {
    return () => {
      if (convertDelayRef.current) {
        clearTimeout(convertDelayRef.current);
      }
    };
  }, [handleConvert]);

  const onAmountChange = (value: number) => {
    setAmount(value);
    amountRef.current = value;
    scheduleConvert(value);
  };

  const onRecipientAmountChange = async (value: number) => {
    setConvertedAmount(value);
    setErrorMessage("");

    if (!selectedDirection) return;

    let currentRate: number | undefined = rate;
    let publicRate: PublicFxRateResponse | null = null;

    if (!currentRate || currentRate <= 0) {
      publicRate = await applyPublicRate(selectedDirection);
      currentRate = publicRate?.customer_rate;
    }

    const nextAmount = calculateSourceAmountFromRecipient(
      value,
      currentRate ?? 0,
      selectedDirection,
    );

    setAmount(nextAmount);
    amountRef.current = nextAmount;
    scheduleConvert(nextAmount);
  };

  useEffect(() => {
    if (!selectedDirection) return;

    let cancelled = false;
    const direction = selectedDirection;

    void (async () => {
      const publicRate = await fetchPublicFxRate(
        direction.fromCurrency,
        direction.toCurrency,
      );

      if (!cancelled && publicRate) {
        cachePublicRate(direction, publicRate);
        setErrorMessage("");
      }
    })();

    void handleConvert(amountRef.current);

    return () => {
      cancelled = true;
    };
  }, [cachePublicRate, handleConvert, selectedDirection]);

  const handleFromChange = (currency: Currency) => {
    const matchingCountry = countryPreferences.find(
      (country) => country.currencyCode === currency.code,
    );

    if (
      matchingCountry &&
      matchingCountry.currencyCode !== selectedDirection?.fromCurrency
    ) {
      setSelectedCountry(matchingCountry);
      return;
    }

    const nextDirection =
      findDirection(directions, currency.code, selectedDirection?.toCurrency) ??
      findDirection(directions, currency.code);

    if (nextDirection) setSelectedDirection(nextDirection);
  };

  const handleToChange = (currency: Currency) => {
    if (!selectedDirection) return;

    const nextDirection = findDirection(
      directions,
      selectedDirection.fromCurrency,
      currency.code,
    );

    if (nextDirection) setSelectedDirection(nextDirection);
  };

  if (!fromCurrency || !toCurrencyOption || directions.length === 0) {
    return (
      <div className="flex-1 w-full z-10 sm:max-w-[60%] sm:mx-auto xl:max-w-full">
        <div className="rounded-[40px] border-8 border-[#46654F] w-full p-6 bg-white">
          <p className="text-sm font-semibold text-[#1F2933]">
            Currency conversion is not available right now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center z-10 sm:max-w-[60%] sm:mx-auto xl:max-w-full">
      <ConverterCard
        fromCurrencies={fromCurrencies}
        toCurrencies={toCurrencies}
        fromCurrency={fromCurrency}
        toCurrency={toCurrencyOption}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        rate={rate}
        amount={amount}
        onAmountChange={onAmountChange}
        onRecipientAmountChange={(value) => {
          void onRecipientAmountChange(value);
        }}
        convertedAmount={convertedAmount}
        transferFees={transferFee}
        estimatedTime={estimatedArrival}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Converter;
