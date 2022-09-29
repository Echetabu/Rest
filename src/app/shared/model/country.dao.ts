export type Country = {
    name: { common: string, official: string, nativeName: {spa: {official: string}}}
    tld: string[],
    capital : string[],
    region: string,
    subregion: string,
    population: number,
    currencies: any,
    flags : { png: string, svg: string }
    borders: string[]
    languages: {spa: string}
};