"use client";

import { useState } from "react";
import { ConverterCard } from "./converter-card";
import { RateCard } from "./rate-card";
import { exchangeRates, currencies } from "@/lib/constants";

function Converter() {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);

  return (
    <div className="flex-1 w-full flex flex-col items-center z-10 sm:max-w-[60%] sm:mx-auto xl:max-w-full">
      <ConverterCard
        currencies={currencies}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        onFromChange={setFromCurrency}
        onToChange={setToCurrency}
      />

      <div className="flex justify-between mt-5 w-full ">
        {exchangeRates.map((item: any, index: number) => (
          <RateCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Converter;
