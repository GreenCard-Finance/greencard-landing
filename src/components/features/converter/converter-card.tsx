// "use client";

// import React, { useState } from "react";
// import { Typography } from "@/components/ui/typography";
// import { ArrowLeftRight, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// interface Currency {
//   code: string;
//   name: string;
//   country: string;
//   flag: string;
// }

// interface ConverterCardProps {
//   rate: number;
//   fromCurrency: Currency;
//   toCurrency: Currency;
//   fromCurrencies: Currency[];
//   toCurrencies: Currency[];
//   amount: number;
//   convertedAmount: number;
//   isConverting: boolean;
//   onFromChange: (currency: Currency) => void;
//   onToChange: (currency: Currency) => void;
//   onAmountChange: (value: number) => void;
// }

// export function ConverterCard({
//   rate,
//   fromCurrency,
//   toCurrency,
//   fromCurrencies,
//   toCurrencies,
//   amount,
//   convertedAmount,
//   isConverting,
//   onFromChange,
//   onToChange,
//   onAmountChange,
// }: ConverterCardProps) {
//   const handleSwap = () => {
//     onFromChange(toCurrency);
//     onToChange(fromCurrency);
//   };

//   return (
//     <div className="rounded-[40px] p-2 bg-linear-to-b from-[#7A9A84] to-[#46654F] w-full">
//       <div className="bg-white rounded-4xl p-6 flex flex-col gap-3 shadow-xl">
//         <div className="space-y-2">
//           <Typography
//             as="span"
//             size="body-sm"
//             color="charcoal"
//             weight="bold"
//             className="uppercase tracking-wider"
//           >
//             Amount
//           </Typography>
//           <div className="w-full bg-[#F2F4F5] rounded-2xl px-4 py-3">
//             <input
//               type="text"
//               value={amount.toLocaleString()}
//               onChange={(e) =>
//                 onAmountChange(Number(e.target.value.replace(/,/g, "")))
//               }
//               className="bg-transparent border-none outline-none text-3xl font-bold w-full"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col xl:flex-row items-center xl:gap-4 relative">
//           <CurrencySelect
//             label="From"
//             selected={fromCurrency}
//             options={fromCurrencies}
//             onChange={onFromChange}
//           />

//           <button
//             onClick={handleSwap}
//             className="bg-[#1F2933] text-white p-3 rounded-full z-10 hover:scale-110 transition-transform lg:mt-6 -mb-4 xl:mb-0"
//           >
//             <ArrowLeftRight size={20} />
//           </button>

//           <CurrencySelect
//             label="To"
//             selected={toCurrency}
//             options={toCurrencies}
//             onChange={onToChange}
//           />
//         </div>

//         <div className="bg-[#F2F4F5] border border-[#E5E7EB] rounded-2xl flex flex-col items-center justify-center text-center h-20">
//           <Typography size="body-sm" color="charcoal" className="opacity-60">
//             1 {fromCurrency.code} = {rate.toLocaleString()} {toCurrency.code}
//           </Typography>
//           <div className="flex items-baseline gap-1 flex-wrap justify-center">
//             <Typography size="display-sm" weight="bold">
//               {isConverting
//                 ? "..."
//                 : convertedAmount.toLocaleString("en-US", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}
//             </Typography>
//             <Typography size="display-sm" weight="bold" className="opacity-70">
//               {toCurrency.code}
//             </Typography>
//           </div>
//         </div>

//         <Link href="#waitlist" className="full">
//           <Button variant={"forest"}>Transfer</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { ArrowLeftRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveHorizontal } from "lucide-react";

interface Currency {
  code: string;
  name: string;
  country: string;
  flag: string;
}

interface ConverterCardProps {
  rate: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  fromCurrencies: Currency[];
  toCurrencies: Currency[];
  amount: number;
  convertedAmount: number;
  isConverting: boolean;
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
  isConverting,
  onFromChange,
  onToChange,
  onAmountChange,
}: ConverterCardProps) {
  const handleSwap = () => {
    onFromChange(toCurrency);
    onToChange(fromCurrency);
  };

  return (
    <div className="rounded-[40px] p-2 border-8 border-[#46654F] w-full">
      <div className="bg-white rounded-4xl p-6 flex flex-col gap-3 shadow-xl">
        <div className="space-y-2">
          <Typography
            as="span"
            size="body-sm"
            color="charcoal"
            weight="medium"
            className=" tracking-wider"
          >
            you send
          </Typography>
          <div className="w-full bg-[#D9D9D9] rounded-2xl px-4 py-3">
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

        <div className="flex flex-col xl:flex-row items-center xl:gap-4 relative xl:my-4">
          <CurrencySelect
            label="From"
            selected={fromCurrency}
            options={fromCurrencies}
            onChange={onFromChange}
          />

          <button
            onClick={handleSwap}
            className="bg-[#1F2933] text-white p-3 rounded-full z-10 hover:scale-110 transition-transform lg:mt-6 -mb-4 xl:mb-0"
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

        <div className="w-fit mx-auto bg-[#BDE1BE] flex items-center gap-x-2 rounded-xl justify-center py-2 px-3">
          <Typography size="body-sm" color="charcoal" className="font-medium">
            1 {fromCurrency.code}
          </Typography>
          <MoveHorizontal className="text-white" />
          <Typography size="body-sm" color="charcoal" className="font-medium">
            {rate.toLocaleString()} {toCurrency.code}
          </Typography>
        </div>
        <div className="my-4">
          <Typography
            as="span"
            size="body-sm"
            color="charcoal"
            weight="medium"
            className=" tracking-wider"
          >
            They recieve
          </Typography>
          <div className="bg-[#D9D9D9] border border-[#E5E7EB] rounded-2xl flex flex-col items-start justify-start text-center py-2 px-3">
            <div className="flex items-start gap-1 flex-wrap justify-start">
              <Typography size="display-sm" weight="medium" align={"left"}>
                {isConverting
                  ? "..."
                  : convertedAmount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
              </Typography>
              <Typography size="display-sm" weight="medium" align={"left"}>
                {toCurrency.code}
              </Typography>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Typography size="display-sm" weight="medium" align={"left"}>
              Transfer fees
            </Typography>

            <Typography size="display-sm" weight="medium" align={"left"}>
              {data}
            </Typography>
          </div>
        </div>

        <Link href="#waitlist" className="full">
          <Button variant={"forest"}>Transfer</Button>
        </Link>
      </div>
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
        className={`border border-[#E5E7EB] bg-[#D9D9D9] rounded-2xl px-3 py-1.5 flex items-center justify-between ${hasOptions ? "cursor-pointer hover:bg-gray-50" : "cursor-default"}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">{selected.flag}</span>
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
              <span>{curr.flag}</span>
              <Typography size="body-md">{curr.code}</Typography>
            </div>
          ))}
      </div>
    </div>
  );
}

// interface CurrencySelectProps {
//   label: string;
//   selected: Currency;
//   options: Currency[];
//   onChange: (currency: Currency) => void;
// }

// function CurrencySelect({
//   label,
//   selected,
//   options,
//   onChange,
// }: CurrencySelectProps) {
//   const [open, setOpen] = useState(false);
//   const hasOptions =
//     options.filter((curr) => curr.code !== selected.code).length > 0;
//   return (
//     <div className="relative w-full flex-1 space-y-2 cursor-pointer">
//       <Typography
//         as="span"
//         size="body-sm"
//         color="charcoal"
//         weight="bold"
//         className="uppercase"
//       >
//         {label}
//       </Typography>

//       <div
//         onClick={() => hasOptions && setOpen((prev) => !prev)}
//         className={`border border-[#E5E7EB] bg-[#F2F4F5] rounded-xl px-3 py-1.5 flex items-center justify-between ${hasOptions ? "cursor-pointer hover:bg-gray-50" : "cursor-default"}`}
//       >
//         <div className="flex items-center gap-2">
//           <span className="text-xl">{selected.flag}</span>
//           <div className="flex flex-col">
//             <Typography size="body-sm" weight="bold" className="leading-none">
//               {selected.code}
//             </Typography>
//             <Typography size="body-xs" color="charcoal">
//               {selected.country}
//             </Typography>
//           </div>
//         </div>
//         {hasOptions && <ChevronDown size={16} className="text-gray-400" />}{" "}
//       </div>

//       <div
//         className={`absolute top-full left-0 w-full bg-white border border-[#E5E7EB] rounded-xl mt-2 z-50 shadow-lg overflow-hidden ${
//           open ? "block" : "hidden"
//         }`}
//       >
//         {options
//           .filter((curr) => curr.code !== selected.code)
//           .map((curr) => (
//             <div
//               key={curr.code}
//               onClick={() => {
//                 onChange(curr);
//                 setOpen(false);
//               }}
//               className="py-1.5 px-3 flex items-center gap-1 hover:bg-gray-100 cursor-pointer"
//             >
//               <span>{curr.flag}</span>
//               <Typography size="body-md">{curr.code}</Typography>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
