import type { Country } from "../types.ts";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <article className="rounded-card border border-sage bg-white p-5 shadow-card">
      <div className="text-5xl" aria-hidden="true">
        {country.flag}
      </div>

      <h2 className="mt-4 text-xl font-bold">{country.name}</h2>

      <dl className="mt-3 space-y-1 text-sm">
        <div className="flex justify-between gap-2">
          <dt className="text-charcoal/60">Capital</dt>
          <dd>{country.capital}</dd>
        </div>

        <div className="flex justify-between gap-2">
          <dt className="text-charcoal/60">Region</dt>
          <dd>{country.continent}</dd>
        </div>

        <div className="flex justify-between gap-2">
          <dt className="text-charcoal/60">Population</dt>
          <dd>{country.population.toLocaleString("en-US")}</dd>
        </div>
      </dl>
    </article>
  );
}
