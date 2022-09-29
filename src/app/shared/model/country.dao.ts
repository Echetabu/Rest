export type Country = {
    name: { common: string, official: string, nativeName: any}
    tld: string[],
    capital : string[],
    region: string,
    subregion: string,
    population: number,
    currencies: any,
    flags : { png: string, svg: string }
    borders: string[]
    languages: any
};