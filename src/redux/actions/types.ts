import { Country } from "./interfaces";
export type Action = { type: string; payload?: Country[] | Country | string};
