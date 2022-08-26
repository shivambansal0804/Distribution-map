import React from "react";
import "./App.css";


import DistributionMap from "./components/DistributionMap";

const sampleData = [
  {
      "x": "UN",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 274628
  },
  {
      "x": "IN",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 180927
  },
  {
      "x": "US",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 10676
  },
  {
      "x": "PK",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 4872
  },
  {
      "x": "GB",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 4517
  },
  {
      "x": "CA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 1679
  },
  {
      "x": "AE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 1257
  },
  {
      "x": "AU",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 1150
  },
  {
      "x": "LK",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 945
  },
  {
      "x": "FR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 860
  },
  {
      "x": "NP",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 743
  },
  {
      "x": "DE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 684
  },
  {
      "x": "BR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 679
  },
  {
      "x": "ID",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 677
  },
  {
      "x": "ES",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 673
  },
  {
      "x": "MY",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 632
  },
  {
      "x": "NG",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 520
  },
  {
      "x": "SA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 477
  },
  {
      "x": "MX",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 475
  },
  {
      "x": "JP",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 461
  },
  {
      "x": "CO",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 400
  },
  {
      "x": "ZA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 392
  },
  {
      "x": "PH",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 390
  },
  {
      "x": "TH",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 386
  },
  {
      "x": "BD",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 360
  },
  {
      "x": "SG",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 353
  },
  {
      "x": "KM",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 324
  },
  {
      "x": "NL",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 289
  },
  {
      "x": "AR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 283
  },
  {
      "x": "VE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 275
  },
  {
      "x": "NZ",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 273
  },
  {
      "x": "IT",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 259
  },
  {
      "x": "MV",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 224
  },
  {
      "x": "CH",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 221
  },
  {
      "x": "QA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 214
  },
  {
      "x": "CL",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 199
  },
  {
      "x": "TZ",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 188
  },
  {
      "x": "KE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 180
  },
  {
      "x": "CN",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 175
  },
  {
      "x": "IE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 171
  },
  {
      "x": "CF",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 164
  },
  {
      "x": "TR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 163
  },
  {
      "x": "RU",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 148
  },
  {
      "x": "AT",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 147
  },
  {
      "x": "BA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 147
  },
  {
      "x": "PE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 139
  },
  {
      "x": "KP",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 124
  },
  {
      "x": "VC",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 124
  },
  {
      "x": "KR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 123
  },
  {
      "x": "EC",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 116
  },
  {
      "x": "SE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 114
  },
  {
      "x": "KW",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 108
  },
  {
      "x": "PL",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 106
  },
  {
      "x": "CW",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 105
  },
  {
      "x": "UG",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 105
  },
  {
      "x": "BE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 103
  },
  {
      "x": "HK",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 100
  },
  {
      "x": "OM",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 100
  },
  {
      "x": "IL",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 88
  },
  {
      "x": "UA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 88
  },
  {
      "x": "NO",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 84
  },
  {
      "x": "SL",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 83
  },
  {
      "x": "FI",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 80
  },
  {
      "x": "PT",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 80
  },
  {
      "x": "GH",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 77
  },
  {
      "x": "TW",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 76
  },
  {
      "x": "BH",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 71
  },
  {
      "x": "MK",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 62
  },
  {
      "x": "GR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 61
  },
  {
      "x": "UY",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 59
  },
  {
      "x": "AD",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 57
  },
  {
      "x": "ZW",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 57
  },
  {
      "x": "AF",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 56
  },
  {
      "x": "DK",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 55
  },
  {
      "x": "EG",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 55
  },
  {
      "x": "AM",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 54
  },
  {
      "x": "CZ",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 54
  },
  {
      "x": "IS",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 54
  },
  {
      "x": "SV",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 53
  },
  {
      "x": "PA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 48
  },
  {
      "x": "GE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 47
  },
  {
      "x": "BY",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 46
  },
  {
      "x": "MM",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 45
  },
  {
      "x": "CU",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 43
  },
  {
      "x": "EE",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 43
  },
  {
      "x": "GN",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 43
  },
  {
      "x": "TT",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 43
  },
  {
      "x": "VN",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 41
  },
  {
      "x": "PR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 38
  },
  {
      "x": "TN",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 38
  },
  {
      "x": "PG",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 34
  },
  {
      "x": "IM",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 33
  },
  {
      "x": "MU",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 33
  },
  {
      "x": "CD",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 29
  },
  {
      "x": "BW",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 28
  },
  {
      "x": "MA",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 28
  },
  {
      "x": "CI",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 27
  },
  {
      "x": "LY",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 27
  },
  {
      "x": "PY",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 27
  },
  {
      "x": "CR",
      "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": 26
  }
]

const sampleLookUp = {
  "UN": {
      "label": "Unknown"
  },
  "M_SPRINKSIGHTS_MENTIONS_COUNT_SUM": {
      "label": "Mentions"
  },
  "IN": {
      "label": "India"
  },
  "US": {
      "label": "United States"
  },
  "PK": {
      "label": "Pakistan"
  },
  "GB": {
      "label": "United Kingdom"
  },
  "CA": {
      "label": "Canada"
  },
  "AE": {
      "label": "United Arab Emirates"
  },
  "AU": {
      "label": "Australia"
  },
  "LK": {
      "label": "Sri Lanka"
  },
  "FR": {
      "label": "France"
  },
  "NP": {
      "label": "Nepal"
  },
  "DE": {
      "label": "Germany"
  },
  "BR": {
      "label": "Brazil"
  },
  "ID": {
      "label": "Indonesia"
  },
  "ES": {
      "label": "Spain"
  },
  "MY": {
      "label": "Malaysia"
  },
  "NG": {
      "label": "Nigeria"
  },
  "SA": {
      "label": "Saudi Arabia"
  },
  "MX": {
      "label": "Mexico"
  },
  "JP": {
      "label": "Japan"
  },
  "CO": {
      "label": "Colombia"
  },
  "ZA": {
      "label": "South Africa"
  },
  "PH": {
      "label": "Philippines"
  },
  "TH": {
      "label": "Thailand"
  },
  "BD": {
      "label": "Bangladesh"
  },
  "SG": {
      "label": "Singapore"
  },
  "KM": {
      "label": "Comoros"
  },
  "NL": {
      "label": "Netherlands"
  },
  "AR": {
      "label": "Argentina"
  },
  "VE": {
      "label": "Venezuela"
  },
  "NZ": {
      "label": "New Zealand"
  },
  "IT": {
      "label": "Italy"
  },
  "MV": {
      "label": "Maldives"
  },
  "CH": {
      "label": "Switzerland"
  },
  "QA": {
      "label": "Qatar"
  },
  "CL": {
      "label": "Chile"
  },
  "TZ": {
      "label": "Tanzania"
  },
  "KE": {
      "label": "Kenya"
  },
  "CN": {
      "label": "China"
  },
  "IE": {
      "label": "Ireland"
  },
  "CF": {
      "label": "Central African Republic"
  },
  "TR": {
      "label": "Turkey"
  },
  "RU": {
      "label": "Russia"
  },
  "AT": {
      "label": "Austria"
  },
  "BA": {
      "label": "Bosnia and Herzegovina"
  },
  "PE": {
      "label": "Peru"
  },
  "KP": {
      "label": "North Korea"
  },
  "VC": {
      "label": "Saint Vincent and the Grenadines"
  },
  "KR": {
      "label": "South Korea"
  },
  "EC": {
      "label": "Ecuador"
  },
  "SE": {
      "label": "Sweden"
  },
  "KW": {
      "label": "Kuwait"
  },
  "PL": {
      "label": "Poland"
  },
  "CW": {
      "label": "Curacao"
  },
  "UG": {
      "label": "Uganda"
  },
  "BE": {
      "label": "Belgium"
  },
  "HK": {
      "label": "Hong Kong"
  },
  "OM": {
      "label": "Oman"
  },
  "IL": {
      "label": "Israel"
  },
  "UA": {
      "label": "Ukraine"
  },
  "NO": {
      "label": "Norway"
  },
  "SL": {
      "label": "Sierra Leone"
  },
  "FI": {
      "label": "Finland"
  },
  "PT": {
      "label": "Portugal"
  },
  "GH": {
      "label": "Ghana"
  },
  "TW": {
      "label": "Taiwan"
  },
  "BH": {
      "label": "Bahrain"
  },
  "MK": {
      "label": "Macedonia"
  },
  "GR": {
      "label": "Greece"
  },
  "UY": {
      "label": "Uruguay"
  },
  "AD": {
      "label": "Andorra"
  },
  "ZW": {
      "label": "Zimbabwe"
  },
  "AF": {
      "label": "Afghanistan"
  },
  "DK": {
      "label": "Denmark"
  },
  "EG": {
      "label": "Egypt"
  },
  "AM": {
      "label": "Armenia"
  },
  "CZ": {
      "label": "Czech Republic"
  },
  "IS": {
      "label": "Iceland"
  },
  "SV": {
      "label": "El Salvador"
  },
  "PA": {
      "label": "Panama"
  },
  "GE": {
      "label": "Georgia"
  },
  "BY": {
      "label": "Belarus"
  },
  "MM": {
      "label": "Myanmar"
  },
  "CU": {
      "label": "Cuba"
  },
  "EE": {
      "label": "Estonia"
  },
  "GN": {
      "label": "Guinea"
  },
  "TT": {
      "label": "Trinidad and Tobago"
  },
  "VN": {
      "label": "Vietnam"
  },
  "PR": {
      "label": "Puerto Rico"
  },
  "TN": {
      "label": "Tunisia"
  },
  "PG": {
      "label": "Papua New Guinea"
  },
  "IM": {
      "label": "Isle of Man"
  },
  "MU": {
      "label": "Mauritius"
  },
  "CD": {
      "label": "Democratic Republic of the Congo"
  },
  "BW": {
      "label": "Botswana"
  },
  "MA": {
      "label": "Morocco"
  },
  "CI": {
      "label": "Ivory Coast"
  },
  "LY": {
      "label": "Libya"
  },
  "PY": {
      "label": "Paraguay"
  },
  "CR": {
      "label": "Costa Rica"
  }
}
export default function App() {

  return (
    <div className="outerContainer">
      
      {/* <CountryDist data={CountryFormatedData} />
      <CountrySubDivision country="IN" data={SubCountryINDIAFormatedData} />
      <CountrySubDivision country="US" data={SubCountryUSAFormatedData} />
      <CountryDistributionView data={SubCountryViewFormatedData} country="IN" /> */}
      <DistributionMap lookupMap={sampleLookUp} data={sampleData} xKey={"x"} yKey={["M_SPRINKSIGHTS_MENTIONS_COUNT_SUM"]} region="world" />
     
    </div>
  );
}

