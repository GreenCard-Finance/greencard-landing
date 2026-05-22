"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CountryPreference = {
  countryCode: "GB" | "NG" | "US" | "CA";
  countryName: string;
  currencyCode: "GBP" | "NGN" | "USD" | "CAD";
};

export const countryPreferences: CountryPreference[] = [
  {
    countryCode: "GB",
    countryName: "United Kingdom",
    currencyCode: "GBP",
  },
  {
    countryCode: "NG",
    countryName: "Nigeria",
    currencyCode: "NGN",
  },
  {
    countryCode: "US",
    countryName: "United States",
    currencyCode: "USD",
  },
  {
    countryCode: "CA",
    countryName: "Canada",
    currencyCode: "CAD",
  },
];

const storageKey = "greencard-country-preference";
const defaultCountryPreference = countryPreferences[0];

type CountryPreferenceContextValue = {
  selectedCountry: CountryPreference;
  setSelectedCountry: (country: CountryPreference) => void;
};

const CountryPreferenceContext =
  createContext<CountryPreferenceContextValue | null>(null);

function findCountryPreference(countryCode: string | null) {
  return (
    countryPreferences.find((country) => country.countryCode === countryCode) ??
    defaultCountryPreference
  );
}

export function CountryPreferenceProvider({
  children,
  initialCountryCode,
}: {
  children: React.ReactNode;
  initialCountryCode?: string;
}) {
  const initialCountryPreference = findCountryPreference(initialCountryCode ?? null);
  const [selectedCountry, setSelectedCountryState] = useState(
    initialCountryPreference,
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedCountryCode = window.localStorage.getItem(storageKey);

      if (savedCountryCode) {
        setSelectedCountryState(findCountryPreference(savedCountryCode));
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const setSelectedCountry = (country: CountryPreference) => {
    setSelectedCountryState(country);
    window.localStorage.setItem(storageKey, country.countryCode);
  };

  const value = useMemo(
    () => ({
      selectedCountry,
      setSelectedCountry,
    }),
    [selectedCountry],
  );

  return (
    <CountryPreferenceContext.Provider value={value}>
      {children}
    </CountryPreferenceContext.Provider>
  );
}

export function useCountryPreference() {
  const context = useContext(CountryPreferenceContext);

  if (!context) {
    throw new Error(
      "useCountryPreference must be used inside CountryPreferenceProvider",
    );
  }

  return context;
}
