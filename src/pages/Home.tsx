import { useState } from "react";

import ContinentFilter from "../components/ContinentFilter.tsx";
import CountryCard from "../components/CountryCard.tsx";
import SearchBar from "../components/SearchBar.tsx";

import { continents, mockCountries } from "../data/mockCountries.ts";

import type { Continent } from "../types.ts";

export default function Home() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState<Continent | "">("");

  const countries = mockCountries.filter(
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

      {countries.length === 0 && (
        <p className="mt-12 text-center text-charcoal/70">
          No countries found.
        </p>
      )}

      {countries.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>
      )}
    </main>
  );
}
