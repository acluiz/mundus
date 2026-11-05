import type { Continent, Country } from "../types.ts";

export const continents: Continent[] = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

export const mockCountries: Country[] = [
  { code: "BRA", name: "Brazil", flag: "🇧🇷", capital: "Brasília", continent: "Americas", population: 212559409, currency: "Brazilian real" },
  { code: "CAN", name: "Canada", flag: "🇨🇦", capital: "Ottawa", continent: "Americas", population: 38005238, currency: "Canadian dollar" },
  { code: "PRT", name: "Portugal", flag: "🇵🇹", capital: "Lisbon", continent: "Europe", population: 10305564, currency: "Euro" },
  { code: "FRA", name: "France", flag: "🇫🇷", capital: "Paris", continent: "Europe", population: 67391582, currency: "Euro" },
  { code: "JPN", name: "Japan", flag: "🇯🇵", capital: "Tokyo", continent: "Asia", population: 125836021, currency: "Japanese yen" },
  { code: "IND", name: "India", flag: "🇮🇳", capital: "New Delhi", continent: "Asia", population: 1380004385, currency: "Indian rupee" },
  { code: "EGY", name: "Egypt", flag: "🇪🇬", capital: "Cairo", continent: "Africa", population: 102334403, currency: "Egyptian pound" },
  { code: "KEN", name: "Kenya", flag: "🇰🇪", capital: "Nairobi", continent: "Africa", population: 53771300, currency: "Kenyan shilling" },
  { code: "AUS", name: "Australia", flag: "🇦🇺", capital: "Canberra", continent: "Oceania", population: 25687041, currency: "Australian dollar" },
  { code: "NZL", name: "New Zealand", flag: "🇳🇿", capital: "Wellington", continent: "Oceania", population: 5084300, currency: "New Zealand dollar" },
];
