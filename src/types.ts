export const continents = [
  "Africa",
  "Americas",
  "Antarctic",
  "Asia",
  "Europe",
  "Oceania",
] as const;

export type Continent = (typeof continents)[number];

export interface Country {
  code: string;
  name: string;
  flag: string;
  capital: string;
  continent: Continent;
  population: number;
  currency: string;
}
