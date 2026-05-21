const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchInitialRate() {
  try {
    const res = await fetch(
      `${BASE_URL}/public/fx-rates?from_currency=NGN&to_currency=GBP`,
    );

    console.log("STATUS", res.status);

    if (!res.ok) {
      throw new Error("Failed to fetch rate");
    }

    const data = await res.json();

    console.log("DATA from api", data);

    return data;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
