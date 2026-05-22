"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ConverterCard, Currency } from "./converter-card";
import type {
  PublicBootstrapResponse,
  SupportedDirection,
} from "@/lib/service/fx";
import { debounce } from "lodash";

type ConverterProps = {
  bootstrap: PublicBootstrapResponse | null;
};

type CustomerQuoteResponse = {
  customer_rate?: number;
  recipient_gets?: number;
  transfer_fee?: number;
  estimated_arrival?: string;
  expires_at?: string;
  message?: string;
};

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

function Converter({ bootstrap }: ConverterProps) {
  const directions = useMemo(
    () => bootstrap?.supportedDirections ?? [],
    [bootstrap],
  );

  const initialDirection = useMemo(
    () => bootstrap?.defaultDirection ?? directions[0] ?? null,
    [bootstrap, directions],
  );

  const [selectedDirection, setSelectedDirection] =
    useState<SupportedDirection | null>(initialDirection);
  const [rate, setRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(100);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [transferFee, setTransferFee] = useState<number | string>("--");
  const [estimatedArrival, setEstimatedArrival] = useState<number | string>(
    "--",
  );
  const [isConverting, setIsConverting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const amountRef = useRef(amount);

  const fromCurrency = selectedDirection
    ? toCurrency(selectedDirection.fromCurrency)
    : null;
  const toCurrencyOption = selectedDirection
    ? toCurrency(selectedDirection.toCurrency)
    : null;

  const fromCurrencies = useMemo(
    () =>
      uniqueCurrencies(
        directions.map((direction) => direction.fromCurrency),
      ),
    [directions],
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

  useEffect(() => {
    setSelectedDirection(initialDirection);
  }, [initialDirection]);

  const handleConvert = useCallback(
    async (currentAmount: number) => {
      if (!BASE_URL || !selectedDirection || currentAmount <= 0) {
        setConvertedAmount(0);
        return;
      }

      setIsConverting(true);
      setErrorMessage("");

      try {
        const res = await fetch(`${BASE_URL}/public/customer-quotes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fromCurrency: selectedDirection.fromCurrency,
            toCurrency: selectedDirection.toCurrency,
            sourceAmount: currentAmount,
          }),
        });
        const json = (await res.json()) as CustomerQuoteResponse;

        if (!res.ok) {
          throw new Error(json.message ?? "Unable to create quote");
        }

        if (typeof json.recipient_gets !== "number") {
          throw new Error("Quote response is missing recipient amount");
        }

        setConvertedAmount(json.recipient_gets);
        setRate(json.customer_rate ?? 0);
        setTransferFee(json.transfer_fee ?? "--");
        setEstimatedArrival(json.estimated_arrival ?? "--");
      } catch (error) {
        setConvertedAmount(0);
        setRate(0);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Unable to create quote right now",
        );
      } finally {
        setIsConverting(false);
      }
    },
    [selectedDirection],
  );

  const handleConvertRef = useRef(handleConvert);
  useEffect(() => {
    handleConvertRef.current = handleConvert;
  }, [handleConvert]);

  const debouncedConvert = useMemo(
    () =>
      debounce((currentAmount: number) => {
        handleConvertRef.current(currentAmount);
      }, 500),
    [],
  );

  useEffect(() => {
    return () => debouncedConvert.cancel();
  }, [debouncedConvert]);

  const onAmountChange = (value: number) => {
    setAmount(value);
    amountRef.current = value;
    debouncedConvert(value);
  };

  useEffect(() => {
    if (!selectedDirection) return;

    handleConvertRef.current(amountRef.current);
  }, [selectedDirection]);

  const handleFromChange = (currency: Currency) => {
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
        convertedAmount={convertedAmount}
        transferFees={transferFee}
        estimatedTime={estimatedArrival}
        isConverting={isConverting}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Converter;
