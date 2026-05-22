"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import ClickAwayListener from "react-click-away-listener";
import {
  countryPreferences,
  useCountryPreference,
} from "./country-preference";
import { cn } from "@/lib/utils";

export function CountrySelector({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const { selectedCountry, setSelectedCountry } = useCountryPreference();

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative z-40">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-full border border-[#9AA7A0] bg-white/85 px-3 text-sm font-semibold text-[#1F2933] shadow-sm backdrop-blur transition hover:border-[#145932] hover:bg-white",
            compact && "h-9 px-2.5 text-xs",
          )}
          aria-expanded={open}
          aria-label="Select country and currency"
        >
          <span className="flex size-6 items-center justify-center overflow-hidden rounded-full bg-white">
            <ReactCountryFlag
              countryCode={selectedCountry.countryCode}
              svg
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </span>
          <span className={compact ? "hidden sm:inline" : ""}>
            {selectedCountry.countryName} · {selectedCountry.currencyCode}
          </span>
          <span className={compact ? "sm:hidden" : "hidden"}>
            {selectedCountry.countryCode} · {selectedCountry.currencyCode}
          </span>
          <ChevronDown
            size={16}
            className={cn("transition-transform", open && "rotate-180")}
          />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-[#D8E0DC] bg-white shadow-xl">
            {countryPreferences.map((country) => {
              const selected =
                country.countryCode === selectedCountry.countryCode;

              return (
                <button
                  key={country.countryCode}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(country);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-[#1F2933] transition hover:bg-[#F2F8F4]",
                    selected && "bg-[#E9F5EF] text-[#145932]",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center overflow-hidden rounded-full bg-white">
                      <ReactCountryFlag
                        countryCode={country.countryCode}
                        svg
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                    <span>
                      {country.countryName} · {country.currencyCode}
                    </span>
                  </span>
                  {selected && <span className="text-xs">Active</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
