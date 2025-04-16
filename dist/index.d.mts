type CountryData = {
    country: string;
    phoneNumberLengthByCountry_phLengthMax: number | null;
    phoneNumberLengthByCountry_phLengthMin: number | null;
    phoneNumberLengthByCountry_phLength: string | number;
    phoneNumberLengthByCountry_CountryCode: number | null;
    phoneNumberLengthByCountry_phLength_InternationalPrefix: number | null;
    phoneNumberLengthByCountry_phLength_NationalPrefix: number | null;
    phoneNumberLengthByCountry_Notes: string | null;
};
type requestParams = {
    countryCode: number | string;
    mobileNumber?: string;
    internationalValidation?: boolean;
};
type NumberValidationData = {
    country: string;
    phLengthMax: number | null;
    phLengthMin: number | null;
    phExample?: string | number;
    validNumber?: string | null;
};
type CommonApiReturnType<T> = {
    IsError: boolean;
    Message: string | null;
    ReturnObj: T | null;
};

declare function getCountryDataByCode({ countryCode, mobileNumber, internationalValidation, }: requestParams): CommonApiReturnType<NumberValidationData>;

export { type CommonApiReturnType, type CountryData, type NumberValidationData, getCountryDataByCode, type requestParams };
