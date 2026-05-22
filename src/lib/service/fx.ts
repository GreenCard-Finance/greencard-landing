const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type SupportedDirection = {
  fromCurrency: string;
  toCurrency: string;
  label: string;
};

export type PublicBootstrapResponse = {
  countryCode: string;
  countryName: string;
  flag: string;
  language: string;
  fromCurrency: string;
  supportedDirections: SupportedDirection[];
  defaultDirection: SupportedDirection | null;
};

type ApiDirection = {
  fromCurrency?: string;
  toCurrency?: string;
  from_currency?: string;
  to_currency?: string;
  label?: string;
};

type ApiBootstrap = Omit<
  Partial<PublicBootstrapResponse>,
  "supportedDirections" | "defaultDirection"
> & {
  country_code?: string;
  country_name?: string;
  from_currency?: string;
  supportedDirections?: ApiDirection[];
  supported_directions?: ApiDirection[];
  defaultDirection?: ApiDirection | null;
  default_direction?: ApiDirection | null;
};

function normalizeDirection(direction?: ApiDirection | null) {
  if (!direction) return null;

  const fromCurrency = direction.fromCurrency ?? direction.from_currency;
  const toCurrency = direction.toCurrency ?? direction.to_currency;

  if (!fromCurrency || !toCurrency) return null;

  return {
    fromCurrency,
    toCurrency,
    label: direction.label ?? `${fromCurrency} -> ${toCurrency}`,
  };
}

function normalizeBootstrap(data: ApiBootstrap): PublicBootstrapResponse {
  const supportedDirections = (
    data.supportedDirections ??
    data.supported_directions ??
    []
  )
    .map(normalizeDirection)
    .filter((direction): direction is SupportedDirection => Boolean(direction));

  const defaultDirection =
    normalizeDirection(data.defaultDirection ?? data.default_direction) ??
    supportedDirections[0] ??
    null;

  return {
    countryCode: data.countryCode ?? data.country_code ?? "",
    countryName: data.countryName ?? data.country_name ?? "",
    flag: data.flag ?? "",
    language: data.language ?? "",
    fromCurrency: data.fromCurrency ?? data.from_currency ?? "",
    supportedDirections,
    defaultDirection,
  };
}

export async function fetchPublicBootstrap(headers?: HeadersInit) {
  if (!BASE_URL) return null;

  try {
    const res = await fetch(`${BASE_URL}/public/bootstrap`, {
      cache: "no-store",
      headers,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch FX bootstrap");
    }

    return normalizeBootstrap(await res.json());
  } catch {
    return null;
  }
}
