interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by country name"
      aria-label="Search by country name"
      className="w-full rounded-card border border-sage bg-white px-4 py-3 shadow-card outline-none placeholder:text-charcoal/50 focus:border-forest"
    />
  );
}
