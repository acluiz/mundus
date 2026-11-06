import { useEffect, useState } from "react";

import ContinentFilter from "../components/ContinentFilter.tsx";
import CountryCard from "../components/CountryCard.tsx";
import SearchBar from "../components/SearchBar.tsx";

import { get } from "../services/api.ts";

import { continents } from "../types.ts";
import type { Continent, Country } from "../types.ts";

interface ApiCountry {
  uuid: string;
  names: { common: string };
  flag: { url_svg: string; url_png: string };
  capitals: { name: string }[];
  region: Continent;
  population: number;
  currencies: { name: string }[];
}

interface ApiResponse {
  data: { objects: ApiCountry[]; meta: { more: boolean } };
}

const PAGE_SIZE = 100;

function toCountry(data: ApiCountry): Country {
  return {
    code: data.uuid,
    name: data.names.common,
    flag: data.flag.url_svg || data.flag.url_png,
    capital: data.capitals[0]?.name ?? "—",
    continent: data.region,
    population: data.population,
    currency: data.currencies[0]?.name ?? "—",
  };
}

async function fetchAllCountries(signal: AbortSignal): Promise<Country[]> {
  const countries: Country[] = [];

  for (let offset = 0, more = true; more; offset += PAGE_SIZE) {
    const { data } = await get<ApiResponse>(
      "",
      { limit: String(PAGE_SIZE), offset: String(offset) },
      signal,
    );
    countries.push(...data.objects.map(toCountry));
    more = data.meta.more;
  }

  return countries;
}

export default function Home() {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState<Continent | "">("");

  useEffect(() => {
    const controller = new AbortController();

    fetchAllCountries(controller.signal)
      .then(setAllCountries)
      .catch((err) => {
        if (err.name !== "AbortError") setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const countries = allCountries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.trim().toLowerCase()) &&
      (!continent || country.continent === continent),
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Explore beyond borders.
      </h1>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <SearchBar value={search} onChange={setSearch} />
        <ContinentFilter
          continents={continents}
          value={continent}
          onChange={setContinent}
        />
      </div>

      {loading && (
        <p className="mt-12 text-center text-charcoal/70">Loading countries…</p>
      )}

      {error && (
        <p className="mt-12 text-center text-charcoal/70">
          Something went wrong while loading countries. Please try again later.
        </p>
      )}

      {!loading && !error && countries.length === 0 && (
        <p className="mt-12 text-center text-charcoal/70">
          No countries found.
        </p>
      )}

      {countries.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>
      )}
    </main>
  );
}
