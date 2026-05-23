"use client";

import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
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
  errorMessage?: string;
  transferFees: number | string;

  estimatedTime: number | string;
  onFromChange: (currency: Currency) => void;
  onToChange: (currency: Currency) => void;
  onAmountChange: (value: number) => void;
  onRecipientAmountChange: (value: number) => void;
}

function formatRecipientAmount(value: number, currencyCode: string) {
  const fixedDecimalCurrencies = new Set(["CAD", "EUR", "GBP", "USD"]);
  const usesFixedDecimals = fixedDecimalCurrencies.has(currencyCode);

  return value.toLocaleString("en-US", {
    minimumFractionDigits: usesFixedDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  });
}

function formatAmount(value: number) {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

function formatInputAmount(value: number) {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

function formatDirectionalRate(value: number) {
  if (value <= 0 || !Number.isFinite(value)) return "0";

  if (value >= 1) {
    return value.toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
  }

  if (value < 0.01) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    });
  }

  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
}

function getDirectionalRateSummary(
  rate: number,
  fromCurrency: Currency,
  toCurrency: Currency,
) {
  if (rate <= 0) return "";

  const isNgnToForeign =
    fromCurrency.code === "NGN" && toCurrency.code !== "NGN";
  const displayRate = isNgnToForeign ? 1 / rate : rate;

  return `1 ${fromCurrency.code} = ${formatDirectionalRate(displayRate)} ${toCurrency.code}`;
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
  onRecipientAmountChange,
  estimatedTime,
  transferFees,
  errorMessage = "",
}: ConverterCardProps) {
  const rateSummary = getDirectionalRateSummary(rate, fromCurrency, toCurrency);
  const formattedRecipientText = errorMessage
    ? "0"
    : formatRecipientAmount(convertedAmount, toCurrency.code);
  const [recipientDraft, setRecipientDraft] = useState<string | null>(null);

  return (
    <div className="w-full rounded-[34px] border-[7px] border-[#7DAE8A] bg-[#DFF3E5] shadow-[0_18px_50px_rgba(69,121,82,0.16)]">
      <div className="rounded-3xl bg-white px-7 py-8 sm:px-9">
        <div className="flex items-start justify-between gap-4">
          <label className="min-w-0 flex-1">
            <Typography
              as="span"
              size="body-sm"
              color="charcoal"
              weight="medium"
            >
              You send
            </Typography>
            <input
              type="text"
              inputMode="decimal"
              aria-label="Amount to send"
              value={formatInputAmount(amount)}
              onChange={(e) => {
                const nextAmount = parseMoneyInput(e.target.value);

                onAmountChange(Number.isFinite(nextAmount) ? nextAmount : 0);
              }}
              className="mt-3 block w-full bg-transparent text-[2rem] font-extrabold leading-none text-black outline-none sm:text-[2.4rem]"
            />
          </label>

          <CurrencySelect
            selected={fromCurrency}
            options={fromCurrencies}
            onChange={onFromChange}
            ariaLabel="Select currency to send"
          />
        </div>

        <div className="relative py-7">
          <div className="h-px w-full bg-[#DFE4E2]" />
          <div className="absolute left-1/2 top-1/2 w-max max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#DDF8E6] px-4 py-2 shadow-[0_10px_24px_rgba(53,142,75,0.12)]">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp size={16} strokeWidth={2.2} />
              {rateSummary ? (
                <Typography
                  size="body-sm"
                  color="charcoal"
                  className="font-semibold"
                >
                  {rateSummary}
                </Typography>
              ) : (
                <span className="block h-5 w-28" aria-hidden="true" />
              )}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <label className="min-w-0 flex-1">
            <Typography
              as="span"
              size="body-sm"
              color="charcoal"
              weight="medium"
            >
              Recipient gets
            </Typography>
            <input
              type="text"
              inputMode="decimal"
              aria-label="Amount recipient gets"
              value={recipientDraft ?? formattedRecipientText}
              onFocus={() => {
                setRecipientDraft(errorMessage ? "" : formattedRecipientText);
              }}
              onChange={(e) => {
                setRecipientDraft(e.target.value);
                const nextAmount = parseMoneyInput(e.target.value);

                onRecipientAmountChange(
                  Number.isFinite(nextAmount) ? nextAmount : 0,
                );
              }}
              onBlur={() => {
                setRecipientDraft(null);
              }}
              className="mt-3 block w-full bg-transparent text-[2rem] font-extrabold leading-none text-black outline-none sm:text-[2.4rem]"
            />
          </label>

          <CurrencySelect
            selected={toCurrency}
            options={toCurrencies}
            onChange={onToChange}
            ariaLabel="Select currency to receive"
          />
        </div>

        {errorMessage && (
          <Typography
            size="body-sm"
            color="charcoal"
            className="mt-4 text-red-600"
          >
            {errorMessage}
          </Typography>
        )}
      </div>

      <div className="w-full space-y-3 px-7 py-5 sm:px-9">
        <div className="flex items-center justify-between w-full">
          <Typography
            size="body-md"
            weight="regular"
            align={"left"}
            className="text-[#254333]"
          >
            Transfer fees
          </Typography>
          <Typography
            size="body-md"
            weight="bold"
            align={"left"}
            className="text-[#254333]"
          >
            {transferFees === 0 ? "Zero" : transferFees}
          </Typography>
        </div>
        <div className="flex items-center justify-between w-full">
          <Typography
            size="body-md"
            weight="regular"
            align={"left"}
            className="text-[#254333]"
          >
            We&apos;ll convert
          </Typography>
          <Typography
            size="body-md"
            weight="bold"
            align={"left"}
            className="text-[#254333]"
          >
            {errorMessage
              ? "--"
              : `${formatAmount(amount)} ${fromCurrency.code}`}
          </Typography>
        </div>
        <div className="flex items-center justify-between w-full">
          <Typography
            size="body-md"
            weight="regular"
            align={"left"}
            className="text-[#254333]"
          >
            We&apos;ll charge you
          </Typography>
          <Typography
            size="body-md"
            weight="bold"
            align={"left"}
            className="text-[#254333]"
          >
            {errorMessage
              ? "--"
              : `${formatAmount(amount)} ${fromCurrency.code}`}
          </Typography>
        </div>
        <div className="flex items-center justify-between w-full ">
          <Typography
            size="body-md"
            weight="regular"
            align={"left"}
            className="text-[#254333]"
          >
            Funds will arrive
          </Typography>
          <Typography
            size="body-md"
            weight="bold"
            align={"left"}
            className="text-[#254333]"
          >
            {estimatedTime}
          </Typography>
        </div>
      </div>

      <div className="px-7 pb-7 sm:px-9">
        <Link href="#waitlist" className="block">
          <Button variant={"forest"} className="font-semibold">
            Send money
          </Button>
        </Link>
      </div>
    </div>
  );
}

function parseMoneyInput(value: string) {
  const cleaned = value.replace(/,/g, "").replace(/[^\d.]/g, "");
  const [whole, ...decimals] = cleaned.split(".");
  const normalized =
    decimals.length > 0 ? `${whole}.${decimals.join("")}` : whole;

  return Number(normalized);
}

interface CurrencySelectProps {
  selected: Currency;
  options: Currency[];
  onChange: (currency: Currency) => void;
  ariaLabel: string;
}

function CurrencySelect({
  selected,
  options,
  onChange,
  ariaLabel,
}: CurrencySelectProps) {
  const [open, setOpen] = useState(false);
  const menuOptions = [
    selected,
    ...options.filter((curr) => curr.code !== selected.code),
  ];

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative shrink-0 cursor-pointer">
        <button
          type="button"
          aria-label={ariaLabel}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex min-w-31 cursor-pointer items-center justify-between gap-2 rounded-full border-2 border-[#66676C] bg-white px-2.5 py-2 text-black transition-colors hover:border-[#46654F]"
        >
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-100 ring-1 ring-black/10">
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
            <Typography size="body-md" weight="bold" className="leading-none">
              {selected.code}
            </Typography>
          </div>
          <ChevronDown size={18} className="shrink-0 text-black" />
        </button>

        <div
          className={`absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          {menuOptions.map((curr) => {
            const isSelected = curr.code === selected.code;

            return (
              <button
                type="button"
                key={curr.code}
                onClick={() => {
                  onChange(curr);
                  setOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 ${
                  isSelected ? "bg-[#EFF8F1]" : "bg-white"
                }`}
                aria-current={isSelected ? "true" : undefined}
              >
                <div className="h-7 w-7 overflow-hidden rounded-full bg-gray-100">
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
                <Typography
                  size="body-md"
                  weight={isSelected ? "bold" : "regular"}
                >
                  {curr.code}
                </Typography>
              </button>
            );
          })}
        </div>
      </div>
    </ClickAwayListener>
  );
}
