"use client";

import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { ArrowLeftRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import ClickAwayListener from "react-click-away-listener";

export interface Currency {
  code: string;
  name: string;
  country: string;
  countryCode: string;
  symbol: string;
}

interface ConverterCardProps {
  rate: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  fromCurrencies: Currency[];
  toCurrencies: Currency[];
  amount: number;
  convertedAmount: number;
  // isConverting: boolean;
  transferFees: number | string;

  estimatedTime: number | string;
  onFromChange: (currency: Currency) => void;
  onToChange: (currency: Currency) => void;
  onAmountChange: (value: number) => void;
}

export function ConverterCard({
  rate,
  fromCurrency,
  toCurrency,
  fromCurrencies,
  toCurrencies,
  amount,
  convertedAmount,
  onFromChange,
  onToChange,
  onAmountChange,
  estimatedTime,
  transferFees,
}: ConverterCardProps) {
  const handleSwap = () => {
    onFromChange(toCurrency);
    onToChange(fromCurrency);
  };

  console.log({ convertedAmount });

  return (
    <div className="rounded-[40px] border-8 border-[#46654F] w-full p-6">
      <div className="flex flex-col ">
        <div className="space-y-2">
          <Typography as="span" size="body-sm" color="charcoal" weight="medium">
            You send
          </Typography>
          <div className="w-full border border-[#E5E7EB] rounded-2xl px-4 py-3">
            <input
              type="text"
              value={amount.toLocaleString()}
              onChange={(e) =>
                onAmountChange(Number(e.target.value.replace(/,/g, "")))
              }
              className="bg-transparent border-none outline-none text-3xl font-bold w-full"
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:gap-4 relative my-4">
          <CurrencySelect
            label="From"
            selected={fromCurrency}
            options={fromCurrencies}
            onChange={onFromChange}
          />

          <button
            onClick={handleSwap}
            className="bg-[#1F2933] text-white p-2 rounded-full z-10 hover:scale-110 transition-transform mt-3.5 xl:mb-0"
          >
            <ArrowLeftRight size={20} />
          </button>

          <CurrencySelect
            label="To"
            selected={toCurrency}
            options={toCurrencies}
            onChange={onToChange}
          />
        </div>

        <div className="w-fit mx-auto bg-[#BDE1BE] flex items-center gap-x-2 rounded-xl justify-center py-1.5 px-3 mt-5 xl:mt-0">
          <TrendingUp size={16} strokeWidth={2} />
          <Typography size="body-md" color="charcoal" className="font-medium">
            1 {fromCurrency.code}
          </Typography>
          =
          <Typography size="body-md" color="charcoal" className="font-medium">
            {rate.toLocaleString()} {toCurrency.code}
          </Typography>
        </div>
        <div className="my-4">
          <Typography as="span" size="body-sm" color="charcoal" weight="medium">
            They recieve
          </Typography>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl flex flex-col items-start justify-start text-center py-3 px-3">
            <div className="flex items-start gap-1 flex-wrap justify-start">
              <Typography size="display-sm" weight="bold" align={"left"}>
                {toCurrency.symbol}
              </Typography>
              <Typography size="display-sm" weight="bold" align={"left"}>
                {convertedAmount?.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3 my-2">
        <div className="flex items-center justify-between w-full">
          <Typography size="body-md" weight="regular" align={"left"}>
            Transfer fees
          </Typography>
          <Typography size="body-md" weight="bold" align={"left"}>
            {transferFees === 0 ? "Zero" : transferFees}
          </Typography>
        </div>
        <div className="flex items-center justify-between w-full ">
          <Typography size="body-md" weight="regular" align={"left"}>
            Funds will arrive
          </Typography>
          <Typography size="body-md" weight="bold" align={"left"}>
            {estimatedTime}
          </Typography>
        </div>
      </div>

      <Link href="#waitlist" className="full">
        <Button variant={"forest"} className="font-semibold">
          Transfer
        </Button>
      </Link>
    </div>
  );
}

interface CurrencySelectProps {
  label: string;
  selected: Currency;
  options: Currency[];
  onChange: (currency: Currency) => void;
}

function CurrencySelect({
  label,
  selected,
  options,
  onChange,
}: CurrencySelectProps) {
  const [open, setOpen] = useState(false);
  const hasOptions =
    options.filter((curr) => curr.code !== selected.code).length > 0;
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative w-full flex-1 space-y-2 cursor-pointer">
        <Typography
          as="span"
          size="body-sm"
          color="charcoal"
          weight="bold"
          className="uppercase"
        >
          {label}
        </Typography>

        <div
          onClick={() => hasOptions && setOpen((prev) => !prev)}
          className={`border border-[#E5E7EB] bg-white rounded-2xl px-3 py-1.5 flex items-center justify-between ${hasOptions ? "cursor-pointer hover:bg-gray-50" : "cursor-default"}`}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100">
              <ReactCountryFlag
                countryCode={selected.countryCode}
                svg
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex flex-col">
              <Typography size="body-sm" weight="bold" className="leading-none">
                {selected.code}
              </Typography>
              <Typography size="body-xs" color="charcoal">
                {selected.country}
              </Typography>
            </div>
          </div>
          {hasOptions && (
            <ChevronDown size={16} className="text-black text-2xl" />
          )}{" "}
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-white border border-[#E5E7EB] rounded-xl mt-2 z-50 shadow-lg overflow-hidden ${
            open ? "block" : "hidden"
          }`}
        >
          {options
            .filter((curr) => curr.code !== selected.code)
            .map((curr) => (
              <div
                key={curr.code}
                onClick={() => {
                  onChange(curr);
                  setOpen(false);
                }}
                className="py-1.5 px-3 flex items-center gap-1 hover:bg-gray-100 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100">
                  <ReactCountryFlag
                    countryCode={curr.countryCode}
                    svg
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Typography size="body-md">{curr.code}</Typography>
              </div>
            ))}
        </div>
      </div>
    </ClickAwayListener>
  );
}
