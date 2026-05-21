"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ConverterCard } from "./converter-card";
import { currencies, supportedPairs } from "@/lib/constants";
import { debounce } from "lodash";

export type FxRateResponse = {
  from_currency: string;
  to_currency: string;
  currency_pair_direction: string;
  customer_rate: number;
  transfer_fee: number;
  estimated_arrival: string;
  published_at: string;
  expires_at: string;
};

type ConverterProps = {
  data: FxRateResponse;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function Converter({ data }: ConverterProps) {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [rate, setRate] = useState<number>(data?.customer_rate ?? 0);
  const [amount, setAmount] = useState<number>(100);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isConverting, setIsConverting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clears any existing expiry timer
  const clearExpiryTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Schedules a re-fetch when the rate expires
  const scheduleExpiry = (expiresAt: string, callback: () => void) => {
    clearExpiryTimer();
    const msUntilExpiry = new Date(expiresAt).getTime() - Date.now();
    if (msUntilExpiry > 0) {
      timerRef.current = setTimeout(callback, msUntilExpiry);
    }
  };

  // Fetches rate for current currency pair
  const fetchRate = useCallback(async () => {
    const res = await fetch(
      `${BASE_URL}/public/fx-rates?from_currency=${fromCurrency.code}&to_currency=${toCurrency.code}`,
    );
    const json = await res.json();
    const newRate: number = json?.customer_rate ?? 0;
    setRate(newRate);
    // scheduleExpiry(json?.expires_at, fetchRate);
  }, [fromCurrency, toCurrency]);

  // POST — calculates converted amount
  const handleConvert = useCallback(
    async (currentAmount: number) => {
      if (!currentAmount) return;
      setIsConverting(true);
      try {
        const res = await fetch(`${BASE_URL}/public/customer-quotes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fromCurrency: fromCurrency.code,
            toCurrency: toCurrency.code,
            sourceAmount: currentAmount,
          }),
        });
        const json = await res.json();
        console.log({ json });
        setConvertedAmount(json?.recipient_gets ?? currentAmount * rate);
        setRate(json?.customer_rate ?? rate);
      } catch {
        setConvertedAmount(0);
        // setConvertedAmount(currentAmount * rate);
      } finally {
        setIsConverting(false);
      }
    },
    [fromCurrency, toCurrency, rate],
  );

  // Ref to always hold latest handleConvert — fixes stale closure after swap
  const handleConvertRef = useRef(handleConvert);
  useEffect(() => {
    handleConvertRef.current = handleConvert;
  }, [handleConvert]);

  // Debounced convert using ref so it never goes stale
  const debouncedConvert = useCallback(
    debounce((currentAmount: number) => {
      handleConvertRef.current(currentAmount);
    }, 500),
    [],
  );

  const onAmountChange = (value: number) => {
    setAmount(value);
    debouncedConvert(value);
  };

  // Fires on mount with default amount
  useEffect(() => {
    handleConvert(100);
  }, []);

  // Fires when currencies change
  useEffect(() => {
    fetchRate();
    handleConvertRef.current(amount);
    return () => clearExpiryTimer();
  }, [fromCurrency, toCurrency]);

  const allowedFromCurrencies = currencies.filter((curr) =>
    supportedPairs.some((p) => p.from === curr.code),
  );

  const allowedToCurrencies = currencies.filter((curr) =>
    supportedPairs.some(
      (p) => p.from === fromCurrency.code && p.to === curr.code,
    ),
  );

  return (
    <div className="flex-1 w-full flex flex-col items-center z-10 sm:max-w-[60%] sm:mx-auto xl:max-w-full">
      <ConverterCard
        fromCurrencies={allowedFromCurrencies}
        toCurrencies={allowedToCurrencies}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        onFromChange={setFromCurrency}
        onToChange={setToCurrency}
        rate={rate}
        amount={amount}
        onAmountChange={onAmountChange}
        convertedAmount={convertedAmount}
        isConverting={isConverting}
        transferFees={data?.transfer_fee}
        estimatedTime={data?.estimated_arrival}
      />
    </div>
  );
}

export default Converter;
