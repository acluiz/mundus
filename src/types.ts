export type Continent =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania";

export interface Country {
  code: string;
  name: string;
  flag: string;
  capital: string;
  continent: Continent;
  population: number;
  currency: string;
}
