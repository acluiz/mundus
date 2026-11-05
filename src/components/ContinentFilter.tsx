import type { Continent } from "../types.ts";

interface ContinentFilterProps {
  continents: Continent[];
  value: Continent | "";
  onChange: (value: Continent | "") => void;
}

export default function ContinentFilter({
  continents,
  value,
  onChange,
}: ContinentFilterProps) {
  return (
    <div className="relative w-full sm:w-56">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Continent | "")}
        aria-label="Filter by continent"
        className="w-full appearance-none rounded-card border border-sage bg-white py-3 pr-10 pl-4 shadow-card outline-none focus:border-forest"
      >
        <option value="">All continents</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-forest"
      >
        <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
