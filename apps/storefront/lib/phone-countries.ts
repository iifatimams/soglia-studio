export interface PhoneCountry {
  iso: string;
  name: string;
  callingCode: string;
  placeholder: string;
  pattern?: string;
}

const gccCountries: PhoneCountry[] = [
  {
    iso: "AE",
    name: "United Arab Emirates",
    callingCode: "+971",
    placeholder: "5x-xxxxxxx",
    pattern: "5[0-9]-[0-9]{7}"
  },
  {
    iso: "SA",
    name: "Saudi Arabia",
    callingCode: "+966",
    placeholder: "5x-xxxxxxx",
    pattern: "5[0-9]-[0-9]{7}"
  },
  {
    iso: "KW",
    name: "Kuwait",
    callingCode: "+965",
    placeholder: "xxxx-xxxx",
    pattern: "[0-9]{4}-[0-9]{4}"
  },
  {
    iso: "QA",
    name: "Qatar",
    callingCode: "+974",
    placeholder: "xxxx-xxxx",
    pattern: "[0-9]{4}-[0-9]{4}"
  },
  {
    iso: "BH",
    name: "Bahrain",
    callingCode: "+973",
    placeholder: "xxxx-xxxx",
    pattern: "[0-9]{4}-[0-9]{4}"
  },
  {
    iso: "OM",
    name: "Oman",
    callingCode: "+968",
    placeholder: "xxxx-xxxx",
    pattern: "[0-9]{4}-[0-9]{4}"
  }
];

const otherCountries: PhoneCountry[] = [
  { iso: "AF", name: "Afghanistan", callingCode: "+93", placeholder: "xxx-xxx-xxx" },
  { iso: "AL", name: "Albania", callingCode: "+355", placeholder: "xx-xxx-xxxx" },
  { iso: "DZ", name: "Algeria", callingCode: "+213", placeholder: "xxx-xx-xx-xx" },
  { iso: "AD", name: "Andorra", callingCode: "+376", placeholder: "xxx-xxx" },
  { iso: "AO", name: "Angola", callingCode: "+244", placeholder: "xxx-xxx-xxx" },
  { iso: "AR", name: "Argentina", callingCode: "+54", placeholder: "xx-xxxx-xxxx" },
  { iso: "AM", name: "Armenia", callingCode: "+374", placeholder: "xx-xxx-xxx" },
  { iso: "AU", name: "Australia", callingCode: "+61", placeholder: "4xx-xxx-xxx" },
  { iso: "AT", name: "Austria", callingCode: "+43", placeholder: "xxx-xxxxxxx" },
  { iso: "AZ", name: "Azerbaijan", callingCode: "+994", placeholder: "xx-xxx-xx-xx" },
  { iso: "BS", name: "Bahamas", callingCode: "+1", placeholder: "xxx-xxx-xxxx" },
  { iso: "BD", name: "Bangladesh", callingCode: "+880", placeholder: "1xxx-xxxxxx" },
  { iso: "BE", name: "Belgium", callingCode: "+32", placeholder: "xxx-xx-xx-xx" },
  { iso: "BR", name: "Brazil", callingCode: "+55", placeholder: "xx-xxxxx-xxxx" },
  { iso: "BN", name: "Brunei", callingCode: "+673", placeholder: "xxx-xxxx" },
  { iso: "BG", name: "Bulgaria", callingCode: "+359", placeholder: "xxx-xxx-xxx" },
  { iso: "KH", name: "Cambodia", callingCode: "+855", placeholder: "xx-xxx-xxx" },
  { iso: "CA", name: "Canada", callingCode: "+1", placeholder: "xxx-xxx-xxxx" },
  { iso: "CN", name: "China", callingCode: "+86", placeholder: "1xx-xxxx-xxxx" },
  { iso: "CO", name: "Colombia", callingCode: "+57", placeholder: "xxx-xxx-xxxx" },
  { iso: "HR", name: "Croatia", callingCode: "+385", placeholder: "xx-xxx-xxxx" },
  { iso: "CY", name: "Cyprus", callingCode: "+357", placeholder: "xx-xxxxxx" },
  { iso: "CZ", name: "Czechia", callingCode: "+420", placeholder: "xxx-xxx-xxx" },
  { iso: "DK", name: "Denmark", callingCode: "+45", placeholder: "xx-xx-xx-xx" },
  { iso: "EG", name: "Egypt", callingCode: "+20", placeholder: "1xx-xxx-xxxx" },
  { iso: "FI", name: "Finland", callingCode: "+358", placeholder: "xx-xxx-xxxx" },
  { iso: "FR", name: "France", callingCode: "+33", placeholder: "x-xx-xx-xx-xx" },
  { iso: "GE", name: "Georgia", callingCode: "+995", placeholder: "xxx-xxx-xxx" },
  { iso: "DE", name: "Germany", callingCode: "+49", placeholder: "xxx-xxxxxxx" },
  { iso: "GR", name: "Greece", callingCode: "+30", placeholder: "xxx-xxx-xxxx" },
  { iso: "HK", name: "Hong Kong", callingCode: "+852", placeholder: "xxxx-xxxx" },
  { iso: "HU", name: "Hungary", callingCode: "+36", placeholder: "xx-xxx-xxxx" },
  { iso: "IN", name: "India", callingCode: "+91", placeholder: "xxxxx-xxxxx" },
  { iso: "ID", name: "Indonesia", callingCode: "+62", placeholder: "8xx-xxx-xxxx" },
  { iso: "IR", name: "Iran", callingCode: "+98", placeholder: "9xx-xxx-xxxx" },
  { iso: "IQ", name: "Iraq", callingCode: "+964", placeholder: "xxx-xxx-xxxx" },
  { iso: "IE", name: "Ireland", callingCode: "+353", placeholder: "xx-xxx-xxxx" },
  { iso: "IT", name: "Italy", callingCode: "+39", placeholder: "xxx-xxx-xxxx" },
  { iso: "JP", name: "Japan", callingCode: "+81", placeholder: "xx-xxxx-xxxx" },
  { iso: "JO", name: "Jordan", callingCode: "+962", placeholder: "7x-xxxxxxx" },
  { iso: "KZ", name: "Kazakhstan", callingCode: "+7", placeholder: "xxx-xxx-xxxx" },
  { iso: "KE", name: "Kenya", callingCode: "+254", placeholder: "xxx-xxx-xxx" },
  { iso: "LB", name: "Lebanon", callingCode: "+961", placeholder: "xx-xxx-xxx" },
  { iso: "MY", name: "Malaysia", callingCode: "+60", placeholder: "xx-xxx-xxxx" },
  { iso: "MV", name: "Maldives", callingCode: "+960", placeholder: "xxx-xxxx" },
  { iso: "MA", name: "Morocco", callingCode: "+212", placeholder: "xxx-xxxxxx" },
  { iso: "NL", name: "Netherlands", callingCode: "+31", placeholder: "x-xxxxxxxx" },
  { iso: "NZ", name: "New Zealand", callingCode: "+64", placeholder: "xx-xxx-xxxx" },
  { iso: "NG", name: "Nigeria", callingCode: "+234", placeholder: "xxx-xxx-xxxx" },
  { iso: "NO", name: "Norway", callingCode: "+47", placeholder: "xxx-xx-xxx" },
  { iso: "PK", name: "Pakistan", callingCode: "+92", placeholder: "3xx-xxxxxxx" },
  { iso: "PS", name: "Palestine", callingCode: "+970", placeholder: "xxx-xx-xxxx" },
  { iso: "PH", name: "Philippines", callingCode: "+63", placeholder: "9xx-xxx-xxxx" },
  { iso: "PL", name: "Poland", callingCode: "+48", placeholder: "xxx-xxx-xxx" },
  { iso: "PT", name: "Portugal", callingCode: "+351", placeholder: "xxx-xxx-xxx" },
  { iso: "RO", name: "Romania", callingCode: "+40", placeholder: "xxx-xxx-xxx" },
  { iso: "RU", name: "Russia", callingCode: "+7", placeholder: "xxx-xxx-xxxx" },
  { iso: "SG", name: "Singapore", callingCode: "+65", placeholder: "xxxx-xxxx" },
  { iso: "ZA", name: "South Africa", callingCode: "+27", placeholder: "xx-xxx-xxxx" },
  { iso: "KR", name: "South Korea", callingCode: "+82", placeholder: "xx-xxxx-xxxx" },
  { iso: "ES", name: "Spain", callingCode: "+34", placeholder: "xxx-xxx-xxx" },
  { iso: "LK", name: "Sri Lanka", callingCode: "+94", placeholder: "xx-xxx-xxxx" },
  { iso: "SD", name: "Sudan", callingCode: "+249", placeholder: "xx-xxx-xxxx" },
  { iso: "SE", name: "Sweden", callingCode: "+46", placeholder: "xx-xxx-xxxx" },
  { iso: "CH", name: "Switzerland", callingCode: "+41", placeholder: "xx-xxx-xxxx" },
  { iso: "SY", name: "Syria", callingCode: "+963", placeholder: "xxx-xxx-xxx" },
  { iso: "TW", name: "Taiwan", callingCode: "+886", placeholder: "xxx-xxx-xxx" },
  { iso: "TH", name: "Thailand", callingCode: "+66", placeholder: "xx-xxx-xxxx" },
  { iso: "TN", name: "Tunisia", callingCode: "+216", placeholder: "xx-xxx-xxx" },
  { iso: "TR", name: "Turkiye", callingCode: "+90", placeholder: "xxx-xxx-xxxx" },
  { iso: "GB", name: "United Kingdom", callingCode: "+44", placeholder: "xxxx-xxxxxx" },
  { iso: "US", name: "United States", callingCode: "+1", placeholder: "xxx-xxx-xxxx" },
  { iso: "VN", name: "Vietnam", callingCode: "+84", placeholder: "xx-xxxx-xxx" },
  { iso: "YE", name: "Yemen", callingCode: "+967", placeholder: "xxx-xxx-xxx" }
];

export const defaultPhoneCountry = gccCountries[0] as PhoneCountry;
export const phoneCountries = [...gccCountries, ...otherCountries] as const;
