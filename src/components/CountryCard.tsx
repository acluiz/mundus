import type { Country } from "../types.ts";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <article className="overflow-hidden rounded-card border border-sage bg-white shadow-card">
      {country.flag ? (
        <img
          src={country.flag}
          alt={`Flag of ${country.name}`}
          loading="lazy"
          className="aspect-3/2 w-full border-b border-sage object-cover"
        />
      ) : (
        <div className="flex aspect-3/2 w-full items-center justify-center border-b border-sage bg-sage/40 text-sm text-charcoal/60">
          Flag unavailable
        </div>
      )}

      <div className="p-5">
        <h2 className="text-xl font-bold">{country.name}</h2>

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
      </div>
    </article>
  );
}
