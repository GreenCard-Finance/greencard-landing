import { currencies } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ReactCountryFlag from "react-country-flag";

export function CountrySelector() {
  const [selected, setSelected] = useState(currencies[0]);
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl px-5 py-3 bg-white hover:bg-gray-50"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <ReactCountryFlag
              countryCode={selected.countryCode}
              svg
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span className="text-sm font-semibold">{selected.code}</span>
          <ChevronDown size={14} className="text-gray-400" />
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[#E5E7EB] rounded-xl shadow-lg overflow-hidden z-50">
            {currencies
              .filter((c) => c.code !== selected.code)
              .map((currency) => (
                <div
                  key={currency.code}
                  onClick={() => {
                    setSelected(currency);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <ReactCountryFlag
                      countryCode={currency.countryCode}
                      svg
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <span className="text-sm font-semibold">{currency.code}</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
