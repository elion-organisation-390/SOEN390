// MAKE THIS A JSON FILE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const buildings = [
    {
      Campus: "LOY",
      Building: "AD",
      BuildingName: "AD Building",
      BuildingLongName: "Administration Building",
      Address: "7141, Sherbrooke West",
      Latitude: 45.457984,
      Longitude: -73.639834,
    },
    {
      Campus: "SGW",
      Building: "B",
      BuildingName: "B Building",
      BuildingLongName: "B Annex",
      Address: "2160 Bishop Street",
      Latitude: 45.497856,
      Longitude: -73.579588,
    },
    {
      Campus: "LOY",
      Building: "BB",
      BuildingName: "BB Building",
      BuildingLongName: "BB-BH Annex",
      Address: "3502 Bermore Avenue",
      Latitude: 45.459793,
      Longitude: -73.639174,
    },
    {
      Campus: "LOY",
      Building: "BH",
      BuildingName: "BH Building",
      BuildingLongName: "BB-BH Annex",
      Address: "3500 Bermore Avenue",
      Latitude: 45.459819,
      Longitude: -73.639152,
    },
    {
      Campus: "LOY",
      Building: "CC",
      BuildingName: "CC Building",
      BuildingLongName: "Central Building",
      Address: "7141 Sherbrooke West",
      Latitude: 45.458204,
      Longitude: -73.640300,
    },
    {
      Campus: "SGW",
      Building: "CI",
      BuildingName: "CI Building",
      BuildingLongName: "CI Annex",
      Address: "2149 Mackay Street",
      Latitude: 45.497467,
      Longitude: -73.579925,
    },
    {
      Campus: "LOY",
      Building: "CJA",
      BuildingName: "CJ Building - wing A",
      BuildingLongName: "Communication Studies and Journalism Building",
      Address: "7141, Sherbrooke Wes",
      Latitude: 45.457478,
      Longitude: -73.640354,
    },
    {
      Campus: "LOY",
      Building: "CJN",
      BuildingName: "CJ Building - wing N",
      BuildingLongName: "Communication Studies and Journalism Building",
      Address: "7141, Sherbrooke Wes",
      Latitude: 45.457478,
      Longitude: -73.640354,
    },
    {
      Campus: "LOY",
      Building: "CJS",
      BuildingName: "CJ Building - wing S",
      BuildingLongName: "Communication Studies and Journalism Building",
      Address: "7141, Sherbrooke Wes",
      Latitude: 45.457478,
      Longitude: -73.640354,
    },
    {
      Campus: "SGW",
      Building: "CL",
      BuildingName: "CL Building",
      BuildingLongName: "CL Annex",
      Address: "1665 Ste-Catherine W",
      Latitude: 45.494259,
      Longitude: -73.579007,
    },
    {
      Campus: "SGW",
      Building: "D",
      BuildingName: "D Building",
      BuildingLongName: "D Annex",
      Address: "2140 Bishop Street",
      Latitude: 45.497827,
      Longitude: -73.579409,
    },
    {
      Campus: "SGW",
      Building: "EN",
      BuildingName: "EN Building",
      BuildingLongName: "EN Annex",
      Address: "2070 Mackay Street",
      Latitude: 45.496944,
      Longitude: -73.579555,
    },
    {
      Campus: "SGW",
      Building: "ER",
      BuildingName: "ER Building",
      BuildingLongName: "ER Building",
      Address: "2155 Guy Street",
      Latitude: 45.496428,
      Longitude: -73.579990,
    },
    {
      Campus: "SGW",
      Building: "ES",
      BuildingName: "ES Building",
      BuildingLongName: "ES Building",
      Address: "2135 Guy Street",
      Latitude: 45.496172,
      Longitude: -73.579922,
    },
    {
      Campus: "SGW",
      Building: "ET",
      BuildingName: "ET Building",
      BuildingLongName: "ET Building",
      Address: "2125-2127 Guy Street",
      Latitude: 45.496163,
      Longitude: -73.579904,
    },
    {
      Campus: "SGW",
      Building: "EV",
      BuildingName: "EV Building",
      BuildingLongName: "Engineering, Computer Science and Visual Arts Integrated Complex",
      Address: "1515 Ste-Catherine W",
      Latitude: 45.495376,
      Longitude: -73.577997,
    },
    {
      Campus: "SGW",
      Building: "FA",
      BuildingName: "FA Building",
      BuildingLongName: "FA Annex",
      Address: "2060 Mackay Street",
      Latitude: 45.496874,
      Longitude: -73.579468,
    },
    {
      Campus: "SGW",
      Building: "FB",
      BuildingName: "FB Building",
      BuildingLongName: "Faubourg Building",
      Address: "1250 Guy Street",
      Latitude: 45.494666,
      Longitude: -73.577603,
    },
    {
      Campus: "LOY",
      Building: "FC",
      BuildingName: "FC Building",
      BuildingLongName: "F.C. Smith Building",
      Address: "7141 Sherbrooke West",
      Latitude: 45.458493,
      Longitude: -73.639287,
    },
    {
      Campus: "SGW",
      Building: "FG",
      BuildingName: "FG Building",
      BuildingLongName: "Faubourg Ste-Catherine Building",
      Address: "1610 Ste-Catherine",
      Latitude: 45.494381,
      Longitude: -73.578425,
    },
    {
      Campus: "SGW",
      Building: "GA",
      BuildingName: "GA Building",
      BuildingLongName: "Grey Nuns Annex",
      Address: "1211-1215 St-Mathieu",
      Latitude: 45.494123,
      Longitude: -73.577870,
    },
    {
      Campus: "LOY",
      Building: "GE",
      BuildingName: "GE Building",
      BuildingLongName: "Centre for Structural and Functional Genomics",
      Address: "7141 Sherbrooke W",
      Latitude: 45.457017,
      Longitude: -73.640432,
    },
    {
      Campus: "SGW",
      Building: "GM",
      BuildingName: "GM Building",
      BuildingLongName: "Guy-De Maisonneuve Building",
      Address: "1550 DeMaisonneuve W",
      Latitude: 45.495983,
      Longitude: -73.578824,
    },
    {
      Campus: "SGW",
      Building: "GNA",
      BuildingName: "GN Building - wing A",
      BuildingLongName: "Grey Nuns Building",
      Address: "1190 Guy Street",
      Latitude: 45.493622,
      Longitude: -73.577003,
    },
    {
      Campus: "SGW",
      Building: "GNB",
      BuildingName: "GN Building - wings B, C, D, E, F, G, P",
      BuildingLongName: "Grey Nuns Building",
      Address: "1190 Guy Street",
      Latitude: 45.493622,
      Longitude: -73.577003,
    },
    {
      Campus: "SGW",
      Building: "GNH",
      BuildingName: "GN Building - wings H, I, J, K",
      BuildingLongName: "Grey Nuns Building",
      Address: "1190 Guy Street",
      Latitude: 45.493622,
      Longitude: -73.577003,
    },
    {
      Campus: "SGW",
      Building: "GNL",
      BuildingName: "GN Building - wings L, M, N",
      BuildingLongName: "Grey Nuns Building",
      Address: "1190 Guy Street",
      Latitude: 45.493622,
      Longitude: -73.577003,
    },
    {
      Campus: "SGW",
      Building: "GS",
      BuildingName: "GS Building",
      BuildingLongName: "Guy-Sherbrooke Building",
      Address: "1538, Sherbrooke W",
      Latitude: 45.496673,
      Longitude: -73.581409,
    },
    {
      Campus: "SGW",
      Building: "H",
      BuildingName: "H Building",
      BuildingLongName: "Henry F. Hall Building",
      Address: "1455 DeMaisonneuve W",
      Latitude: 45.497092,
      Longitude: -73.578800,
    },
    {
      Campus: "LOY",
      Building: "HA",
      BuildingName: "HA Building",
      BuildingLongName: "Hingston Hall, wing HA",
      Address: "7141 Sherbrooke West",
      Latitude: 45.459356,
      Longitude: -73.641270,
    },
    {
      Campus: "LOY",
      Building: "HB",
      BuildingName: "HB Building",
      BuildingLongName: "Hingston Hall, wing HB",
      Address: "7141 Sherbrooke West",
      Latitude: 45.459308,
      Longitude: -73.641849,
    },
    {
      Campus: "LOY",
      Building: "HC",
      BuildingName: "HC Building",
      BuildingLongName: "Hingston Hall, wing HC",
      Address: "7141 Sherbrooke West",
      Latitude: 45.459663,
      Longitude: -73.642080,
    },
    {
      Campus: "LOY",
      Building: "HU",
      BuildingName: "HU Building",
      BuildingLongName: "Applied Science Hub",
      Address: "7141, Sherbrooke W",
      Latitude: 45.458513,
      Longitude: -73.641921,
    },
    {
      Campus: "LOY",
      Building: "JR",
      BuildingName: "JR Building",
      BuildingLongName: "Jesuit Residence",
      Address: "7141 Sherbrooke West",
      Latitude: 45.458432,
      Longitude: -73.643235,
    },
    {
      Campus: "SGW",
      Building: "K",
      BuildingName: "K Building",
      BuildingLongName: "K Annex",
      Address: "2150 Bishop Street",
      Latitude: 45.497777,
      Longitude: -73.579531,
    },
    {
      Campus: "SGW",
      Building: "LB",
      BuildingName: "LB Building",
      BuildingLongName: "J.W. McConnell Building",
      Address: "1400 DeMaisonneuve W",
      Latitude: 45.497050,
      Longitude: -73.578009,
    },
    {
      Campus: "SGW",
      Building: "LC",
      BuildingName: "LC Building",
      BuildingLongName: "LC Building",
      Address: "1426 Bishop Street",
      Latitude: 45.496782,
      Longitude: -73.577358,
    },
    {
      Campus: "SGW",
      Building: "LD",
      BuildingName: "LD Building",
      BuildingLongName: "LD Building",
      Address: "1424 Bishop Street",
      Latitude: 45.496697,
      Longitude: -73.577312,
    },
    {
      Campus: "SGW",
      Building: "M",
      BuildingName: "M Building",
      BuildingLongName: "M Annex",
      Address: "2135 Mackay Street",
      Latitude: 45.497368,
      Longitude: -73.579777,
    },
    {
      Campus: "SGW",
      Building: "MB",
      BuildingName: "MB Building",
      BuildingLongName: "John Molson Building",
      Address: "1450 Guy Street",
      Latitude: 45.495304,
      Longitude: -73.579044,
    },
    {
      Campus: "SGW",
      Building: "MI",
      BuildingName: "MI Building",
      BuildingLongName: "MI Annex",
      Address: "2130 Bishop Street",
      Latitude: 45.497807,
      Longitude: -73.579261,
    },
    {
      Campus: "SGW",
      Building: "MK",
      BuildingName: "MK Building",
      BuildingLongName: "MK Annex",
      Address: "2000-20002 Mackay St",
      Latitude: 45.496606,
      Longitude: -73.579025,
    },
    {
      Campus: "SGW",
      Building: "MM",
      BuildingName: "MM Building",
      BuildingLongName: "MM Annex",
      Address: "1209 Guy Street",
      Latitude: 45.494665,
      Longitude: -73.576365,
    },
    {
      Campus: "SGW",
      Building: "MN",
      BuildingName: "MN Building",
      BuildingLongName: "MN Annex",
      Address: "1205-1207 Guy Street",
      Latitude: 45.494568,
      Longitude: -73.576315,
    },
    {
      Campus: "SGW",
      Building: "MT",
      BuildingName: "MT Building",
      BuildingLongName: "Montefiore Building",
      Address: "1195 Guy Street",
      Latitude: 45.494442,
      Longitude: -73.576108,
    },
    {
      Campus: "SGW",
      Building: "MU",
      BuildingName: "MU Building",
      BuildingLongName: "MU Annex",
      Address: "2170 Bishop Street",
      Latitude: 45.497963,
      Longitude: -73.579506,
    },
    {
      Campus: "SGW",
      Building: "P",
      BuildingName: "P Building",
      BuildingLongName: "P Annex",
      Address: "2020 Mackay Street",
      Latitude: 45.496745,
      Longitude: -73.579113,
    },
    {
      Campus: "LOY",
      Building: "PB",
      BuildingName: "PB Building",
      BuildingLongName: "PB Building",
      Address: "7200 Sherbrooke W",
      Latitude: 45.456534,
      Longitude: -73.638106,
    },
    {
      Campus: "LOY",
      Building: "PC",
      BuildingName: "PC Building",
      BuildingLongName: "PERFORM centre",
      Address: "7200 Sherbrooke W",
      Latitude: 45.457088,
      Longitude: -73.637683,
    },
    {
      Campus: "SGW",
      Building: "PR",
      BuildingName: "PR Building",
      BuildingLongName: "PR Annex",
      Address: "2100 Mackay Street",
      Latitude: 45.497066,
      Longitude: -73.579790,
    },
    {
      Campus: "LOY",
      Building: "PS",
      BuildingName: "PS Building",
      BuildingLongName: "Physical Services Building",
      Address: "7141 Sherbrooke W",
      Latitude: 45.459636,
      Longitude: -73.639758,
    },
    {
      Campus: "LOY",
      Building: "PT",
      BuildingName: "PT Building",
      BuildingLongName: "Oscar Peterson Concert Hall",
      Address: "7141 Sherbrooke W",
      Latitude: 45.459308,
      Longitude: -73.638941,
    },
    {
      Campus: "LOY",
      Building: "PY",
      BuildingName: "PY Building",
      BuildingLongName: "Psychology Building",
      Address: "7141 Sherbrooke W",
      Latitude: 45.458938,
      Longitude: -73.640467,
    },
    {
      Campus: "SGW",
      Building: "Q",
      BuildingName: "Q Building",
      BuildingLongName: "Q Annex",
      Address: "2010 Mackay Street",
      Latitude: 45.496648,
      Longitude: -73.579094,
    },
    {
      Campus: "SGW",
      Building: "R",
      BuildingName: "R Building",
      BuildingLongName: "R Annex",
      Address: "2050 Mackay Street",
      Latitude: 45.496826,
      Longitude: -73.579389,
    },
    {
      Campus: "LOY",
      Building: "RA",
      BuildingName: "RA Building",
      BuildingLongName: "Recreation and Athletics Complex",
      Address: "7200 Sherbrooke W",
      Latitude: 45.456774,
      Longitude: -73.637610,
    },
    {
      Campus: "LOY",
      Building: "RF",
      BuildingName: "RF Building",
      BuildingLongName: "Loyola Jesuit Hall and Conference Centre",
      Address: "7141 Sherbrooke W",
      Latitude: 45.458489,
      Longitude: -73.641028,
    },
    {
      Campus: "SGW",
      Building: "RR",
      BuildingName: "RR Building",
      BuildingLongName: "RR Annex",
      Address: "2040 Mackay Street",
      Latitude: 45.496796,
      Longitude: -73.579259,
    },
    {
      Campus: "SGW",
      Building: "S",
      BuildingName: "S Building",
      BuildingLongName: "S Annex",
      Address: "2145 Mackay Street",
      Latitude: 45.497423,
      Longitude: -73.579851,
    },
    {
      Campus: "SGW",
      Building: "SB",
      BuildingName: "SB Building",
      BuildingLongName: "Samuel Bronfman Building",
      Address: "1590 Doctor Penfield",
      Latitude: 45.496600,
      Longitude: -73.586090,
    },
    {
      Campus: "LOY",
      Building: "SC",
      BuildingName: "SC Building",
      BuildingLongName: "Student Centre",
      Address: "7141 Sherbrooke W",
      Latitude: 45.459131,
      Longitude: -73.639251,
    },
    {
      Campus: "LOY",
      Building: "SH",
      BuildingName: "SH Building",
      BuildingLongName: "Solar House",
      Address: "7141 Sherbrooke W",
      Latitude: 45.459298,
      Longitude: -73.642478,
    },
    {
      Campus: "LOY",
      Building: "SP",
      BuildingName: "SP Building",
      BuildingLongName: "Richard J. Renaud Science Complex",
      Address: "7141 Sherbrooke W",
      Latitude: 45.457881,
      Longitude: -73.641565,
    },
    {
      Campus: "SGW",
      Building: "T",
      BuildingName: "T Building",
      BuildingLongName: "T Annex",
      Address: "2030 Mackay Street",
      Latitude: 45.496710,
      Longitude: -73.579270,
    },
    {
      Campus: "LOY",
      Building: "TA",
      BuildingName: "TA Building",
      BuildingLongName: "Terrebonne Building",
      Address: "7079 Terrebonne",
      Latitude: 45.459992,
      Longitude: -73.640897,
    },
    {
      Campus: "LOY",
      Building: "TB",
      BuildingName: "TB Building",
      BuildingLongName: "TB Annex",
      Address: "7075 Terrebonne",
      Latitude: 45.460051,
      Longitude: -73.640842,
    },
    {
      Campus: "SGW",
      Building: "TD",
      BuildingName: "TD Building",
      BuildingLongName: "Toronto-Dominion Building",
      Address: "1410 Guy Street",
      Latitude: 45.495103,
      Longitude: -73.578375,
    },
    {
      Campus: "SGW",
      Building: "TU",
      BuildingName: "TU Building",
      BuildingLongName: "TU Tunnel",
      Address: "1550 DeMaisonneuve",
      Latitude: 45.496480,
      Longitude: -73.578918,
    },
    {
      Campus: "SGW",
      Building: "V",
      BuildingName: "V Building",
      BuildingLongName: "V Annex",
      Address: "2110 Mackay Street",
      Latitude: 45.497101,
      Longitude: -73.579907,
    },
    {
      Campus: "SGW",
      Building: "VA",
      BuildingName: "VA Building",
      BuildingLongName: "Visual Arts Building",
      Address: "1395 Rene Levesque W",
      Latitude: 45.495543,
      Longitude: -73.573795,
    },
    {
      Campus: "LOY",
      Building: "VE",
      BuildingName: "VE Building",
      BuildingLongName: "Vanier Extension",
      Address: "7141 Sherbrooke W",
      Latitude: 45.459026,
      Longitude: -73.638606,
    },
    {
      Campus: "LOY",
      Building: "VL",
      BuildingName: "VL Building",
      BuildingLongName: "Vanier Library Building",
      Address: "7141 Sherbrooke W",
      Latitude: 45.459026,
      Longitude: -73.638606,
    },
    {
      Campus: "SGW",
      Building: "X",
      BuildingName: "X Building",
      BuildingLongName: "X Annex",
      Address: "2080 Mackay Street",
      Latitude: 45.496940,
      Longitude: -73.579593,
    },
    {
      Campus: "SGW",
      Building: "Z",
      BuildingName: "Z Building",
      BuildingLongName: "Z Annex",
      Address: "2090 Mackay Street",
      Latitude: 45.496981,
      Longitude: -73.579705,
    },
  ];
  
  export default buildings;
  