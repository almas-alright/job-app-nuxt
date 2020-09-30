const visa_list = [
  {
    "id": 1,
    "subclass": "601",
    "type": "Electronic Travel Authority"
  },
  {
    "id": 2,
    "subclass": "651",
    "type": "eVisitor"
  },
  {
    "id": 3,
    "subclass": "771",
    "type": "Transit visa"
  },
  {
    "id": 4,
    "subclass": "600",
    "type": "Visitor"
  },
  {
    "id": 5,
    "subclass": "462",
    "type": "Work and Holiday visa"
  },
  {
    "id": 6,
    "subclass": "417",
    "type": "Working Holiday visa"
  },
  {
    "id": 7,
    "subclass": "500",
    "type": "Student visa"
  },
  {
    "id": 8,
    "subclass": "590",
    "type": "Student Guardian visa"
  },
  {
    "id": 9,
    "subclass": "407",
    "type": "Certificate visa"
  },
  {
    "id": 10,
    "subclass": "102",
    "type": "Adoption visa"
  },
  {
    "id": 11,
    "subclass": "114",
    "type": "Aged Dependent Relative visa"
  },
  {
    "id": 12,
    "subclass": "838",
    "type": "Aged Dependent Relative visa"
  },
  {
    "id": 13,
    "subclass": "804",
    "type": "Aged Parent visa"
  },
  {
    "id": 14,
    "subclass": "836",
    "type": "Carer visa"
  },
  {
    "id": 15,
    "subclass": "116",
    "type": "Carer visa"
  },
  {
    "id": 16,
    "subclass": "101",
    "type": "Child visa"
  },
  {
    "id": 17,
    "subclass": "802",
    "type": "Child visa"
  },
  {
    "id": 18,
    "subclass": "884",
    "type": "Contributory Aged Parent (Temporary) visa"
  },
  {
    "id": 19,
    "subclass": "864",
    "type": "Contributory Aged Parent visa"
  },
  {
    "id": 20,
    "subclass": "173",
    "type": "Contributory Parent (Temporary) visa"
  },
  {
    "id": 21,
    "subclass": "143",
    "type": "Contributory Parent visa"
  },
  {
    "id": 22,
    "subclass": "445",
    "type": "Dependent Child visa"
  },
  {
    "id": 23,
    "subclass": "461",
    "type": "New Zealand Citizen Family Relationship (temporary) visa"
  },
  {
    "id": 24,
    "subclass": "117",
    "type": "Orphan Relative"
  },
  {
    "id": 25,
    "subclass": "837",
    "type": "Orphan Relative"
  },
  {
    "id": 26,
    "subclass": "103",
    "type": "Parent visa"
  },
  {
    "id": 27,
    "subclass": "309",
    "type": "Partner (Provisional and Migrant) visa"
  },
  {
    "id": 28,
    "subclass": "100",
    "type": "Partner (Provisional and Migrant) visa"
  },
  {
    "id": 29,
    "subclass": "820",
    "type": "Partner visa"
  },
  {
    "id": 30,
    "subclass": "801",
    "type": "Partner visa"
  },
  {
    "id": 31,
    "subclass": "300",
    "type": "Prospective Marriage visa"
  },
  {
    "id": 32,
    "subclass": "115",
    "type": "Remaining Relative visa"
  },
  {
    "id": 33,
    "subclass": "835",
    "type": "Remaining Relative visa"
  },
  {
    "id": 34,
    "subclass": "870",
    "type": "Sponsored Parent (Temporary) visa"
  },
  {
    "id": 35,
    "subclass": "888",
    "type": "Business Innovation and Investment (permanent) visa"
  },
  {
    "id": 36,
    "subclass": "188",
    "type": "Business Innovation and Investment (provisional) visa"
  },
  {
    "id": 37,
    "subclass": "890",
    "type": "Business Owner"
  },
  {
    "id": 38,
    "subclass": "132",
    "type": "Business Talent (Permanent) visa"
  },
  {
    "id": 39,
    "subclass": "124",
    "type": "Distinguished Talent visa"
  },
  {
    "id": 40,
    "subclass": "858",
    "type": "Distinguished Talent visa"
  },
  {
    "id": 41,
    "subclass": "186",
    "type": "Employer Nomination Scheme"
  },
  {
    "id": 42,
    "subclass": "891",
    "type": "Investor visa"
  },
  {
    "id": 43,
    "subclass": "191",
    "type": "Permanent Residence (Skilled Regional) visa"
  },
  {
    "id": 44,
    "subclass": "187",
    "type": "Regional Sponsored Migration Scheme"
  },
  {
    "id": 45,
    "subclass": "494",
    "type": "Skilled Employer Sponsored Regional (provisional) visa"
  },
  {
    "id": 46,
    "subclass": "189",
    "type": "Skilled Independent visa"
  },
  {
    "id": 47,
    "subclass": "190",
    "type": "Skilled Nominated visa"
  },
  {
    "id": 48,
    "subclass": "476",
    "type": "Skilled-Recognised Graduate visa"
  },
  {
    "id": 49,
    "subclass": "489",
    "type": "Skilled Regional (provisional) visa"
  },
  {
    "id": 50,
    "subclass": "887",
    "type": "Skilled Regional visa"
  },
  {
    "id": 51,
    "subclass": "491",
    "type": "Skilled Work Regional (Provisional) visa"
  },
  {
    "id": 52,
    "subclass": "892",
    "type": "State or Territory Sponsored Business Owner visa"
  },
  {
    "id": 53,
    "subclass": "893",
    "type": "State or Territory Sponsored Investor visa"
  },
  {
    "id": 54,
    "subclass": "408",
    "type": "Temporary Activity visa"
  },
  {
    "id": 55,
    "subclass": "485",
    "type": "Temporary Graduate visa"
  },
  {
    "id": 56,
    "subclass": "403",
    "type": "Temporary Work (International Relations) visa"
  },
  {
    "id": 57,
    "subclass": "400",
    "type": "Temporary Work (Short Stay Specialist) visa"
  },
  {
    "id": 58,
    "subclass": "482",
    "type": "Temporary Skill Shortage visa"
  },
  {
    "id": 59,
    "subclass": "202",
    "type": "Global Special Humanitarian"
  },
  {
    "id": 60,
    "subclass": "866",
    "type": "Protection visa"
  },
  {
    "id": 61,
    "subclass": "200",
    "type": "Refugee visas"
  },
  {
    "id": 62,
    "subclass": "201",
    "type": "Refugee visas"
  },
  {
    "id": 63,
    "subclass": "203",
    "type": "Refugee visas"
  },
  {
    "id": 64,
    "subclass": "204",
    "type": "Refugee visas"
  },
  {
    "id": 65,
    "subclass": "785",
    "type": "Temporary Protection visa"
  },
  {
    "id": 66,
    "subclass": "790",
    "type": "Safe Haven Enterprise visa"
  },
  {
    "id": 67,
    "subclass": "010",
    "type": "Bridging visa A – BVA -"
  },
  {
    "id": 68,
    "subclass": "020",
    "type": "Bridging visa B – BVB –"
  },
  {
    "id": 69,
    "subclass": "030",
    "type": "Bridging visa C – BVC –"
  },
  {
    "id": 70,
    "subclass": "050",
    "type": "Bridging visa E – BVE –"
  },
  {
    "id": 71,
    "subclass": "051",
    "type": "Bridging visa E – BVE –"
  },
  {
    "id": 72,
    "subclass": "942",
    "type": "Crew Travel Authority visa"
  },
  {
    "id": 73,
    "subclass": "151",
    "type": "Former Resident visa"
  },
  {
    "id": 74,
    "subclass": "988",
    "type": "Maritime Crew visa"
  },
  {
    "id": 75,
    "subclass": "602",
    "type": "Medical Treatment visa"
  },
  {
    "id": 76,
    "subclass": "155 157",
    "type": "Resident Return visa"
  },
  {
    "id": 77,
    "subclass": "444",
    "type": "Special Category visa"
  },
  {
    "id": 78,
    "subclass": "405",
    "type": "Investor Retirement visa"
  },
  {
    "id": 79,
    "subclass": "808",
    "type": "Confirmatory (Residence) visa"
  },
  {
    "id": 80,
    "subclass": "456",
    "type": "Business (Short Stay) visa"
  },
  {
    "id": 81,
    "subclass": "160",
    "type": "Business Skills (Provisional) visa"
  },
  {
    "id": 82,
    "subclass": "165",
    "type": "Business Skills (Provisional) visa"
  },
  {
    "id": 83,
    "subclass": "426",
    "type": "Domestic Worker (Temporary) Diplomatic and Consular visa"
  },
  {
    "id": 84,
    "subclass": "427",
    "type": "Domestic Worker (Temporary) Executive visa"
  },
  {
    "id": 85,
    "subclass": "956",
    "type": "Electronic Travel Authority (Business Entrant) visa"
  },
  {
    "id": 86,
    "subclass": "977",
    "type": "Electronic Travel Authority (Business Entrant) visa"
  },
  {
    "id": 87,
    "subclass": "976",
    "type": "Electronic Travel Authority (Visitor) visa"
  },
  {
    "id": 88,
    "subclass": "856",
    "type": "Employer Nomination Scheme"
  },
  {
    "id": 89,
    "subclass": "121",
    "type": "Employer Nomination Scheme"
  },
  {
    "id": 90,
    "subclass": "845",
    "type": "Established Business in Australia visa"
  },
  {
    "id": 91,
    "subclass": "411",
    "type": "Exchange visa"
  },
  {
    "id": 92,
    "subclass": "415",
    "type": "Foreign Government Agency"
  },
  {
    "id": 93,
    "subclass": "406",
    "type": "Government Agreement visa"
  },
  {
    "id": 94,
    "subclass": "120",
    "type": "Labour Agreement visa"
  },
  {
    "id": 95,
    "subclass": "855",
    "type": "Labour Agreement visa"
  },
  {
    "id": 96,
    "subclass": "423",
    "type": "Media and Film Staff visa"
  },
  {
    "id": 97,
    "subclass": "422",
    "type": "Medical Practitioner visa"
  },
  {
    "id": 98,
    "subclass": "675",
    "type": "Medical Treatment (Short Stay) visa"
  },
  {
    "id": 99,
    "subclass": "685",
    "type": "Medical Treatment Long Stay visa"
  },
  {
    "id": 100,
    "subclass": "119",
    "type": "Regional Sponsor Migration Scheme"
  },
  {
    "id": 101,
    "subclass": "857",
    "type": "Regional Sponsor Migration Scheme"
  },
  {
    "id": 102,
    "subclass": "428",
    "type": "Religious Worker visa"
  },
  {
    "id": 103,
    "subclass": "410",
    "type": "Retirement visa"
  },
  {
    "id": 104,
    "subclass": "496",
    "type": "Skilled Designated Area Sponsored visa"
  },
  {
    "id": 105,
    "subclass": "495",
    "type": "Skilled Independent Regional (Provisional) visa"
  },
  {
    "id": 106,
    "subclass": "175",
    "type": "Skilled Independent visa"
  },
  {
    "id": 107,
    "subclass": "885",
    "type": "Skilled Independent visa"
  },
  {
    "id": 108,
    "subclass": "475",
    "type": "Skilled Regional Sponsored visa"
  },
  {
    "id": 109,
    "subclass": "487",
    "type": "Skilled Regional Sponsored"
  },
  {
    "id": 110,
    "subclass": "176",
    "type": "Skilled Sponsored visa"
  },
  {
    "id": 111,
    "subclass": "416",
    "type": "Special Program visa"
  },
  {
    "id": 112,
    "subclass": "886",
    "type": "Sponsored visa"
  },
  {
    "id": 113,
    "subclass": "421",
    "type": "Sport visa"
  },
  {
    "id": 114,
    "subclass": "488",
    "type": "Superyacht Crew visa"
  },
  {
    "id": 115,
    "subclass": "846",
    "type": "State or Territory Sponsored Regional Established Business in Australia visa"
  },
  {
    "id": 116,
    "subclass": "420",
    "type": "Temporary Work (Entertainment) visa"
  },
  {
    "id": 117,
    "subclass": "457",
    "type": "Temporary Work (Skilled) visa"
  },
  {
    "id": 118,
    "subclass": "676",
    "type": "Tourist visa"
  },
  {
    "id": 119,
    "subclass": "401",
    "type": "Temporary Work (long Stay Activity) visa"
  },
  {
    "id": 120,
    "subclass": "402",
    "type": "Certificate and Research visa"
  },
  {
    "id": 121,
    "subclass": "419",
    "type": "Visiting Academic visa"
  },
  {
    "id": 122,
    "subclass": "576",
    "type": "Foreign Affairs or Defence sector visa"
  },
  {
    "id": 123,
    "subclass": "573",
    "type": "Higher Education Sector visa"
  },
  {
    "id": 124,
    "subclass": "570",
    "type": "Independent ELICOS Sector visa"
  },
  {
    "id": 125,
    "subclass": "575",
    "type": "Non Award Sector visa"
  },
  {
    "id": 126,
    "subclass": "574",
    "type": "Postgraduate Research Sector visa"
  },
  {
    "id": 127,
    "subclass": "571",
    "type": "School Sector visa"
  },
  {
    "id": 128,
    "subclass": "580",
    "type": "Student Guardian visa"
  },
  {
    "id": 129,
    "subclass": "572",
    "type": "Vocational Education and Certificate Sector visa"
  }
]

export default visa_list;
