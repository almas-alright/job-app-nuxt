const country_list = [
    {
        "id": 1,
        "name": "Afghanistan",
        "code": "AF",
        "phone_code": "+93"
    },
    {
        "id": 2,
        "name": "Albania",
        "code": "AL",
        "phone_code": "+355"
    },
    {
        "id": 3,
        "name": "Algeria",
        "code": "DZ",
        "phone_code": "+213"
    },
    {
        "id": 4,
        "name": "American Samoa",
        "code": "AS",
        "phone_code": "+1"
    },
    {
        "id": 5,
        "name": "Andorra",
        "code": "AD",
        "phone_code": "+376"
    },
    {
        "id": 6,
        "name": "Angola",
        "code": "AO",
        "phone_code": "+244"
    },
    {
        "id": 7,
        "name": "Anguilla",
        "code": "AI",
        "phone_code": "+1"
    },
    {
        "id": 8,
        "name": "Antigua",
        "code": "AG",
        "phone_code": "+1"
    },
    {
        "id": 9,
        "name": "Argentina",
        "code": "AR",
        "phone_code": "+54"
    },
    {
        "id": 10,
        "name": "Armenia",
        "code": "AM",
        "phone_code": "+374"
    },
    {
        "id": 11,
        "name": "Aruba",
        "code": "AW",
        "phone_code": "+297"
    },
    {
        "id": 12,
        "name": "Australia",
        "code": "AU",
        "phone_code": "+61"
    },
    {
        "id": 13,
        "name": "Austria",
        "code": "AI",
        "phone_code": "+43"
    },
    {
        "id": 14,
        "name": "Azerbaijan",
        "code": "AZ",
        "phone_code": "+994"
    },
    {
        "id": 15,
        "name": "Bahrain",
        "code": "BH",
        "phone_code": "+973"
    },
    {
        "id": 16,
        "name": "Bangladesh",
        "code": "BD",
        "phone_code": "+880"
    },
    {
        "id": 17,
        "name": "Barbados",
        "code": "BB",
        "phone_code": "+1"
    },
    {
        "id": 18,
        "name": "Belarus",
        "code": "BY",
        "phone_code": "+375"
    },
    {
        "id": 19,
        "name": "Belgium",
        "code": "BE",
        "phone_code": "+32"
    },
    {
        "id": 20,
        "name": "Belize",
        "code": "BZ",
        "phone_code": "+501"
    },
    {
        "id": 21,
        "name": "Benin",
        "code": "BJ",
        "phone_code": "+229"
    },
    {
        "id": 22,
        "name": "Bermuda",
        "code": "BM",
        "phone_code": "+1"
    },
    {
        "id": 23,
        "name": "Bhutan",
        "code": "BT",
        "phone_code": "+975"
    },
    {
        "id": 24,
        "name": "Bolivia",
        "code": "BO",
        "phone_code": "+591"
    },
    {
        "id": 25,
        "name": "Bosnia and Herzegovina",
        "code": "BA",
        "phone_code": "+387"
    },
    {
        "id": 26,
        "name": "Botswana",
        "code": "BW",
        "phone_code": "+267"
    },
    {
        "id": 27,
        "name": "Brazil",
        "code": "BR",
        "phone_code": "+55"
    },
    {
        "id": 28,
        "name": "British Indian Ocean Territory",
        "code": "IO",
        "phone_code": "+246"
    },
    {
        "id": 29,
        "name": "British Virgin Islands",
        "code": "VG",
        "phone_code": "+1"
    },
    {
        "id": 30,
        "name": "Brunei",
        "code": "BN",
        "phone_code": "+673"
    },
    {
        "id": 31,
        "name": "Bulgaria",
        "code": "BG",
        "phone_code": "+359"
    },
    {
        "id": 32,
        "name": "Burkina Faso",
        "code": "BF",
        "phone_code": "+226"
    },
    {
        "id": 33,
        "name": "Burma Myanmar",
        "code": "MM",
        "phone_code": "+95"
    },
    {
        "id": 34,
        "name": "Burundi",
        "code": "BI",
        "phone_code": "+257"
    },
    {
        "id": 35,
        "name": "Cambodia",
        "code": "KH",
        "phone_code": "+855"
    },
    {
        "id": 36,
        "name": "Cameroon",
        "code": "CM",
        "phone_code": "+237"
    },
    {
        "id": 37,
        "name": "Canada",
        "code": "CA",
        "phone_code": "+1"
    },
    {
        "id": 38,
        "name": "Cape Verde",
        "code": "CV",
        "phone_code": "+238"
    },
    {
        "id": 39,
        "name": "Cayman Islands",
        "code": "KY",
        "phone_code": "+1"
    },
    {
        "id": 40,
        "name": "Central African Republic",
        "code": "CF",
        "phone_code": "+236"
    },
    {
        "id": 41,
        "name": "Chad",
        "code": "ID",
        "phone_code": "+235"
    },
    {
        "id": 42,
        "name": "Chile",
        "code": "CL",
        "phone_code": "+56"
    },
    {
        "id": 43,
        "name": "China",
        "code": "CN",
        "phone_code": "+86"
    },
    {
        "id": 44,
        "name": "Colombia",
        "code": "CO",
        "phone_code": "+57"
    },
    {
        "id": 45,
        "name": "Comoros",
        "code": "KM",
        "phone_code": "+269"
    },
    {
        "id": 46,
        "name": "Cook Islands",
        "code": "CK",
        "phone_code": "+682"
    },
    {
        "id": 47,
        "name": "Costa Rica",
        "code": "CR",
        "phone_code": "+506"
    },
    {
        "id": 48,
        "name": "Côte dIvoire",
        "code": "CI",
        "phone_code": "+225"
    },
    {
        "id": 49,
        "name": "Croatia",
        "code": "HR",
        "phone_code": "+385"
    },
    {
        "id": 50,
        "name": "Cuba",
        "code": "CU",
        "phone_code": "+53"
    },
    {
        "id": 51,
        "name": "Cyprus",
        "code": "CY",
        "phone_code": "+357"
    },
    {
        "id": 52,
        "name": "Czech Republic",
        "code": "CZ",
        "phone_code": "+420"
    },
    {
        "id": 53,
        "name": "Democratic Republic of Congo",
        "code": "CD",
        "phone_code": "+243"
    },
    {
        "id": 54,
        "name": "Denmark",
        "code": "DK",
        "phone_code": "+45"
    },
    {
        "id": 55,
        "name": "Djibouti",
        "code": "DJ",
        "phone_code": "+253"
    },
    {
        "id": 56,
        "name": "Dominica",
        "code": "DM",
        "phone_code": "+1"
    },
    {
        "id": 57,
        "name": "Dominican Republic",
        "code": "DO",
        "phone_code": "+1"
    },
    {
        "id": 58,
        "name": "Ecuador",
        "code": "EC",
        "phone_code": "+593"
    },
    {
        "id": 59,
        "name": "Egypt",
        "code": "EG",
        "phone_code": "+20"
    },
    {
        "id": 60,
        "name": "El Salvador",
        "code": "SV",
        "phone_code": "+503"
    },
    {
        "id": 61,
        "name": "Equatorial Guinea",
        "code": "GQ",
        "phone_code": "+240"
    },
    {
        "id": 62,
        "name": "Eritrea",
        "code": "ER",
        "phone_code": "+291"
    },
    {
        "id": 63,
        "name": "Estonia",
        "code": "EE",
        "phone_code": "+372"
    },
    {
        "id": 197,
        "name": "Eswatini",
        "code": "SZ",
        "phone_code": "+268"
    },
    {
        "id": 64,
        "name": "Ethiopia",
        "code": "ET",
        "phone_code": "+251"
    },
    {
        "id": 65,
        "name": "Falkland Islands",
        "code": "FK",
        "phone_code": "+500"
    },
    {
        "id": 66,
        "name": "Faroe Islands",
        "code": "FO",
        "phone_code": "+298"
    },
    {
        "id": 67,
        "name": "Federated States of Micronesia",
        "code": "FM",
        "phone_code": "+691"
    },
    {
        "id": 68,
        "name": "Fiji",
        "code": "FJ",
        "phone_code": "+679"
    },
    {
        "id": 69,
        "name": "Finland",
        "code": "FI",
        "phone_code": "+358"
    },
    {
        "id": 70,
        "name": "France",
        "code": "FR",
        "phone_code": "+33"
    },
    {
        "id": 71,
        "name": "French Guiana",
        "code": "GF",
        "phone_code": "+594"
    },
    {
        "id": 72,
        "name": "French Polynesia",
        "code": "PF",
        "phone_code": "+689"
    },
    {
        "id": 73,
        "name": "Gabon",
        "code": "GA",
        "phone_code": "+241"
    },
    {
        "id": 74,
        "name": "Georgia",
        "code": "GE",
        "phone_code": "+995"
    },
    {
        "id": 75,
        "name": "Germany",
        "code": "DE",
        "phone_code": "+49"
    },
    {
        "id": 76,
        "name": "Ghana",
        "code": "GH",
        "phone_code": "+233"
    },
    {
        "id": 77,
        "name": "Gibraltar",
        "code": "GI",
        "phone_code": "+350"
    },
    {
        "id": 78,
        "name": "Greece",
        "code": "GR",
        "phone_code": "+30"
    },
    {
        "id": 79,
        "name": "Greenland",
        "code": "GL",
        "phone_code": "+299"
    },
    {
        "id": 80,
        "name": "Grenada",
        "code": "GD",
        "phone_code": "+1"
    },
    {
        "id": 81,
        "name": "Guadeloupe",
        "code": "GP",
        "phone_code": "+590"
    },
    {
        "id": 82,
        "name": "Guam",
        "code": "GU",
        "phone_code": "+1"
    },
    {
        "id": 83,
        "name": "Guatemala",
        "code": "GT",
        "phone_code": "+502"
    },
    {
        "id": 84,
        "name": "Guinea",
        "code": "GN",
        "phone_code": "+224"
    },
    {
        "id": 85,
        "name": "Guinea-Bissau",
        "code": "GW",
        "phone_code": "+245"
    },
    {
        "id": 86,
        "name": "Guyana",
        "code": "GY",
        "phone_code": "+592"
    },
    {
        "id": 87,
        "name": "Haiti",
        "code": "HT",
        "phone_code": "+509"
    },
    {
        "id": 88,
        "name": "Honduras",
        "code": "HN",
        "phone_code": "+504"
    },
    {
        "id": 89,
        "name": "Hong Kong",
        "code": "HK",
        "phone_code": "+852"
    },
    {
        "id": 90,
        "name": "Hungary",
        "code": "HU",
        "phone_code": "+36"
    },
    {
        "id": 91,
        "name": "Iceland",
        "code": "IS",
        "phone_code": "+354"
    },
    {
        "id": 92,
        "name": "India",
        "code": "IN",
        "phone_code": "+91"
    },
    {
        "id": 93,
        "name": "Indonesia",
        "code": "ID",
        "phone_code": "+62"
    },
    {
        "id": 94,
        "name": "Iran",
        "code": "IR",
        "phone_code": "+98"
    },
    {
        "id": 95,
        "name": "Iraq",
        "code": "IQ",
        "phone_code": "+964"
    },
    {
        "id": 96,
        "name": "Ireland",
        "code": "IE",
        "phone_code": "+353"
    },
    {
        "id": 97,
        "name": "Israel",
        "code": "IL",
        "phone_code": "+972"
    },
    {
        "id": 98,
        "name": "Italy",
        "code": "IT",
        "phone_code": "+39"
    },
    {
        "id": 99,
        "name": "Jamaica",
        "code": "JM",
        "phone_code": "+1"
    },
    {
        "id": 100,
        "name": "Japan",
        "code": "JP",
        "phone_code": "+81"
    },
    {
        "id": 101,
        "name": "Jordan",
        "code": "JO",
        "phone_code": "+962"
    },
    {
        "id": 102,
        "name": "Kazakhstan",
        "code": "KZ",
        "phone_code": "+7"
    },
    {
        "id": 103,
        "name": "Kenya",
        "code": "KE",
        "phone_code": "+254"
    },
    {
        "id": 104,
        "name": "Kiribati",
        "code": "KI",
        "phone_code": "+686"
    },
    {
        "id": 105,
        "name": "Kosovo",
        "code": "XK",
        "phone_code": "+383"
    },
    {
        "id": 106,
        "name": "Kuwait",
        "code": "KW",
        "phone_code": "+965"
    },
    {
        "id": 107,
        "name": "Kyrgyzstan",
        "code": "KG",
        "phone_code": "+996"
    },
    {
        "id": 108,
        "name": "Laos",
        "code": "LA",
        "phone_code": "+856"
    },
    {
        "id": 109,
        "name": "Latvia",
        "code": "LV",
        "phone_code": "+371"
    },
    {
        "id": 110,
        "name": "Lebanon",
        "code": "LB",
        "phone_code": "+961"
    },
    {
        "id": 111,
        "name": "Lesotho",
        "code": "LS",
        "phone_code": "+266"
    },
    {
        "id": 112,
        "name": "Liberia",
        "code": "LR",
        "phone_code": "+231"
    },
    {
        "id": 113,
        "name": "Libya",
        "code": "LY",
        "phone_code": "+218"
    },
    {
        "id": 114,
        "name": "Liechtenstein",
        "code": "LI",
        "phone_code": "+423"
    },
    {
        "id": 115,
        "name": "Lithuania",
        "code": "LT",
        "phone_code": "+370"
    },
    {
        "id": 116,
        "name": "Luxembourg",
        "code": "LU",
        "phone_code": "+352"
    },
    {
        "id": 117,
        "name": "Macau",
        "code": "MO",
        "phone_code": "+853"
    },
    {
        "id": 118,
        "name": "Macedonia",
        "code": "MK",
        "phone_code": "+389"
    },
    {
        "id": 119,
        "name": "Madagascar",
        "code": "MG",
        "phone_code": "+261"
    },
    {
        "id": 120,
        "name": "Malawi",
        "code": "MW",
        "phone_code": "+265"
    },
    {
        "id": 121,
        "name": "Malaysia",
        "code": "MY",
        "phone_code": "+60"
    },
    {
        "id": 122,
        "name": "Maldives",
        "code": "MV",
        "phone_code": "+960"
    },
    {
        "id": 123,
        "name": "Mali",
        "code": "ML",
        "phone_code": "+223"
    },
    {
        "id": 124,
        "name": "Malta",
        "code": "MT",
        "phone_code": "+356"
    },
    {
        "id": 125,
        "name": "Marshall Islands",
        "code": "MH",
        "phone_code": "+692"
    },
    {
        "id": 126,
        "name": "Martinique",
        "code": "MQ",
        "phone_code": "+596"
    },
    {
        "id": 127,
        "name": "Mauritania",
        "code": "MR",
        "phone_code": "+222"
    },
    {
        "id": 128,
        "name": "Mauritius",
        "code": "MU",
        "phone_code": "+230"
    },
    {
        "id": 129,
        "name": "Mayotte",
        "code": "YT",
        "phone_code": "+262"
    },
    {
        "id": 130,
        "name": "Mexico",
        "code": "MX",
        "phone_code": "+52"
    },
    {
        "id": 131,
        "name": "Moldova",
        "code": "MD",
        "phone_code": "+373"
    },
    {
        "id": 132,
        "name": "Monaco",
        "code": "MC",
        "phone_code": "+377"
    },
    {
        "id": 133,
        "name": "Mongolia",
        "code": "MN",
        "phone_code": "+976"
    },
    {
        "id": 134,
        "name": "Montenegro",
        "code": "ME",
        "phone_code": "+382"
    },
    {
        "id": 135,
        "name": "Montserrat",
        "code": "MS",
        "phone_code": "+1"
    },
    {
        "id": 136,
        "name": "Morocco",
        "code": "MA",
        "phone_code": "+212"
    },
    {
        "id": 137,
        "name": "Mozambique",
        "code": "MZ",
        "phone_code": "+258"
    },
    {
        "id": 138,
        "name": "Namibia",
        "code": "NA",
        "phone_code": "+264"
    },
    {
        "id": 139,
        "name": "Nauru",
        "code": "NR",
        "phone_code": "+674"
    },
    {
        "id": 140,
        "name": "Nepal",
        "code": "NP",
        "phone_code": "+977"
    },
    {
        "id": 141,
        "name": "Netherlands",
        "code": "NL",
        "phone_code": "+31"
    },
    {
        "id": 142,
        "name": "Netherlands Antilles",
        "code": "AN",
        "phone_code": "+599"
    },
    {
        "id": 143,
        "name": "New Caledonia",
        "code": "NC",
        "phone_code": "+687"
    },
    {
        "id": 144,
        "name": "New Zealand",
        "code": "NZ",
        "phone_code": "+64"
    },
    {
        "id": 145,
        "name": "Nicaragua",
        "code": "NI",
        "phone_code": "+505"
    },
    {
        "id": 146,
        "name": "Niger",
        "code": "NE",
        "phone_code": "+227"
    },
    {
        "id": 147,
        "name": "Nigeria",
        "code": "NG",
        "phone_code": "+234"
    },
    {
        "id": 148,
        "name": "Niue",
        "code": "NU",
        "phone_code": "+683"
    },
    {
        "id": 149,
        "name": "Norfolk Island",
        "code": "NF",
        "phone_code": "+672"
    },
    {
        "id": 150,
        "name": "North Korea",
        "code": "KP",
        "phone_code": "+850"
    },
    {
        "id": 151,
        "name": "Northern Mariana Islands",
        "code": "MP",
        "phone_code": "+1"
    },
    {
        "id": 152,
        "name": "Norway",
        "code": "NO",
        "phone_code": "+47"
    },
    {
        "id": 153,
        "name": "Oman",
        "code": "OM",
        "phone_code": "+968"
    },
    {
        "id": 154,
        "name": "Pakistan",
        "code": "PK",
        "phone_code": "+92"
    },
    {
        "id": 155,
        "name": "Palau",
        "code": "PW",
        "phone_code": "+680"
    },
    {
        "id": 156,
        "name": "Palestine",
        "code": "PS",
        "phone_code": "+970"
    },
    {
        "id": 157,
        "name": "Panama",
        "code": "PA",
        "phone_code": "+507"
    },
    {
        "id": 158,
        "name": "Papua New Guinea",
        "code": "PG",
        "phone_code": "+675"
    },
    {
        "id": 159,
        "name": "Paraguay",
        "code": "PY",
        "phone_code": "+595"
    },
    {
        "id": 160,
        "name": "Peru",
        "code": "PE",
        "phone_code": "+51"
    },
    {
        "id": 161,
        "name": "Philippines",
        "code": "PH",
        "phone_code": "+63"
    },
    {
        "id": 162,
        "name": "Poland",
        "code": "PL",
        "phone_code": "+48"
    },
    {
        "id": 163,
        "name": "Portugal",
        "code": "PT",
        "phone_code": "+351"
    },
    {
        "id": 164,
        "name": "Puerto Rico",
        "code": "PR",
        "phone_code": "+1"
    },
    {
        "id": 165,
        "name": "Qatar",
        "code": "QA",
        "phone_code": "+974"
    },
    {
        "id": 166,
        "name": "Republic of the Congo",
        "code": "CG",
        "phone_code": "+242"
    },
    {
        "id": 167,
        "name": "Réunion",
        "code": "RE",
        "phone_code": "+262"
    },
    {
        "id": 168,
        "name": "Romania",
        "code": "RO",
        "phone_code": "+40"
    },
    {
        "id": 169,
        "name": "Russia",
        "code": "RU",
        "phone_code": "+7"
    },
    {
        "id": 170,
        "name": "Rwanda",
        "code": "RW",
        "phone_code": "+250"
    },
    {
        "id": 171,
        "name": "Saint Barthélemy",
        "code": "BL",
        "phone_code": "+590"
    },
    {
        "id": 172,
        "name": "Saint Helena",
        "code": "SH",
        "phone_code": "+290"
    },
    {
        "id": 173,
        "name": "Saint Kitts and Nevis",
        "code": "KN",
        "phone_code": "+1"
    },
    {
        "id": 174,
        "name": "Saint Martin",
        "code": "MF",
        "phone_code": "+590"
    },
    {
        "id": 175,
        "name": "Saint Pierre and Miquelon",
        "code": "PM",
        "phone_code": "+508"
    },
    {
        "id": 176,
        "name": "Saint Vincent and the Grenadines",
        "code": "VC",
        "phone_code": "+1"
    },
    {
        "id": 177,
        "name": "Samoa",
        "code": "WS",
        "phone_code": "+685"
    },
    {
        "id": 178,
        "name": "San Marino",
        "code": "SM",
        "phone_code": "+378"
    },
    {
        "id": 179,
        "name": "São Tomé and Príncipe",
        "code": "ST",
        "phone_code": "+239"
    },
    {
        "id": 180,
        "name": "Saudi Arabia",
        "code": "SA",
        "phone_code": "+966"
    },
    {
        "id": 181,
        "name": "Senegal",
        "code": "SN",
        "phone_code": "+221"
    },
    {
        "id": 182,
        "name": "Serbia",
        "code": "RS",
        "phone_code": "+381"
    },
    {
        "id": 183,
        "name": "Seychelles",
        "code": "SC",
        "phone_code": "+248"
    },
    {
        "id": 184,
        "name": "Sierra Leone",
        "code": "SL",
        "phone_code": "+232"
    },
    {
        "id": 185,
        "name": "Singapore",
        "code": "SG",
        "phone_code": "+65"
    },
    {
        "id": 186,
        "name": "Slovakia",
        "code": "SK",
        "phone_code": "+421"
    },
    {
        "id": 187,
        "name": "Slovenia",
        "code": "SI",
        "phone_code": "+386"
    },
    {
        "id": 188,
        "name": "Solomon Islands",
        "code": "SB",
        "phone_code": "+677"
    },
    {
        "id": 189,
        "name": "Somalia",
        "code": "SO",
        "phone_code": "+252"
    },
    {
        "id": 190,
        "name": "South Africa",
        "code": "ZA",
        "phone_code": "+27"
    },
    {
        "id": 191,
        "name": "South Korea",
        "code": "KR",
        "phone_code": "+82"
    },
    {
        "id": 192,
        "name": "Spain",
        "code": "ES",
        "phone_code": "+34"
    },
    {
        "id": 193,
        "name": "Sri Lanka",
        "code": "LK",
        "phone_code": "+94"
    },
    {
        "id": 194,
        "name": "St. Lucia",
        "code": "LC",
        "phone_code": "+1"
    },
    {
        "id": 195,
        "name": "Sudan",
        "code": "SD",
        "phone_code": "+249"
    },
    {
        "id": 196,
        "name": "Suriname",
        "code": "SR",
        "phone_code": "+597"
    },
    {
        "id": 198,
        "name": "Sweden",
        "code": "SE",
        "phone_code": "+46"
    },
    {
        "id": 199,
        "name": "Switzerland",
        "code": "CH",
        "phone_code": "+41"
    },
    {
        "id": 200,
        "name": "Syria",
        "code": "SY",
        "phone_code": "+963"
    },
    {
        "id": 201,
        "name": "Taiwan",
        "code": "TW",
        "phone_code": "+886"
    },
    {
        "id": 202,
        "name": "Tajikistan",
        "code": "TJ",
        "phone_code": "+992"
    },
    {
        "id": 203,
        "name": "Tanzania",
        "code": "TZ",
        "phone_code": "+255"
    },
    {
        "id": 204,
        "name": "Thailand",
        "code": "TH",
        "phone_code": "+66"
    },
    {
        "id": 205,
        "name": "The Bahamas",
        "code": "BS",
        "phone_code": "+1"
    },
    {
        "id": 206,
        "name": "The Gambia",
        "code": "GM",
        "phone_code": "+220"
    },
    {
        "id": 207,
        "name": "Timor-Leste",
        "code": "TL",
        "phone_code": "+670"
    },
    {
        "id": 208,
        "name": "Togo",
        "code": "TG",
        "phone_code": "+228"
    },
    {
        "id": 209,
        "name": "Tokelau",
        "code": "TK",
        "phone_code": "+690"
    },
    {
        "id": 210,
        "name": "Tonga",
        "code": "TO",
        "phone_code": "+676"
    },
    {
        "id": 211,
        "name": "Trinidad and Tobago",
        "code": "TT",
        "phone_code": "+1"
    },
    {
        "id": 212,
        "name": "Tunisia",
        "code": "TN",
        "phone_code": "+216"
    },
    {
        "id": 213,
        "name": "Turkey",
        "code": "TR",
        "phone_code": "+90"
    },
    {
        "id": 214,
        "name": "Turkmenistan",
        "code": "TM",
        "phone_code": "+993"
    },
    {
        "id": 215,
        "name": "Turks and Caicos Islands",
        "code": "TC",
        "phone_code": "+1"
    },
    {
        "id": 216,
        "name": "Tuvalu",
        "code": "TV",
        "phone_code": "+688"
    },
    {
        "id": 217,
        "name": "Uganda",
        "code": "UG",
        "phone_code": "+256"
    },
    {
        "id": 218,
        "name": "Ukraine",
        "code": "UA",
        "phone_code": "+380"
    },
    {
        "id": 219,
        "name": "United Arab Emirates",
        "code": "AE",
        "phone_code": "+971"
    },
    {
        "id": 220,
        "name": "United Kingdom",
        "code": "GB",
        "phone_code": "+44"
    },
    {
        "id": 221,
        "name": "United States",
        "code": "US",
        "phone_code": "+1"
    },
    {
        "id": 222,
        "name": "Uruguay",
        "code": "UY",
        "phone_code": "+598"
    },
    {
        "id": 223,
        "name": "US Virgin Islands",
        "code": "VI",
        "phone_code": "+1"
    },
    {
        "id": 224,
        "name": "Uzbekistan",
        "code": "UZ",
        "phone_code": "+998"
    },
    {
        "id": 225,
        "name": "Vanuatu",
        "code": "VU",
        "phone_code": "+678"
    },
    {
        "id": 226,
        "name": "Vatican City",
        "code": "VA",
        "phone_code": "+39"
    },
    {
        "id": 227,
        "name": "Venezuela",
        "code": "VE",
        "phone_code": "+58"
    },
    {
        "id": 228,
        "name": "Vietnam",
        "code": "VN",
        "phone_code": "+84"
    },
    {
        "id": 229,
        "name": "Wallis and Futuna",
        "code": "WF",
        "phone_code": "+681"
    },
    {
        "id": 230,
        "name": "Yemen",
        "code": "YE",
        "phone_code": "+967"
    },
    {
        "id": 231,
        "name": "Zambia",
        "code": "ZM",
        "phone_code": "+260"
    },
    {
        "id": 232,
        "name": "Zimbabwe",
        "code": "ZW",
        "phone_code": "+263"
    }
]
export default country_list;
