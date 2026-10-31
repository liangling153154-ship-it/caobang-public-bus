/* ============================================================
   Cao Bang bus guide — all editable data.
   Change times, fares, stops or the drawn route lines here.

   geometry[] = the road the bus drives, as [lat, lng].
   Plotted by hand from landmarks, not a GPS trace. If a stretch
   looks wrong on the map, edit the numbers and it redraws.
   ============================================================ */
window.BG = {

  lastVerified: "2026-10-31",
  lastVerifiedLabel: "31 Oct 2026",

  operator: "Hoa Binh Transport",
  operatorPhone: "1900 561 562",

  /* Replace with your own address before publishing. */
  contactEmail: "you@example.com",

  fare: {
    perLegLabel: "80.000\u20AB",
    perLegRange: "70.000\u201385.000\u20AB",
    roundTripLabel: "160.000\u20AB",
    motorbikeTaxiLabel: "150.000\u20AB"
  },

  rideMinutes: 120,
  safetyBufferMinutes: 40,

  routes: {
    "03": {
      code: "03",
      colour: "#0B6E5F",
      title: "Cao B\u1EB1ng \u2014 B\u1EA3n Gi\u1ED1c",
      short: "To the waterfall",
      roads: "QL3, then \u0110T206",
      roadNote: "QL3 to Qu\u1EA3ng Uy\u00EAn, then \u0110T206 to the falls.",
      km: 86.8,
      hours: "~2 hrs",
      outLabel: "From Cao B\u1EB1ng",
      backLabel: "From the falls",
      outDirection: "Stand where cars go <b>away from the city</b>.",
      backDirection: "Stand where cars go <b>towards Cao B\u1EB1ng</b>.",
      out: ["5:05","5:35","6:10","6:45","7:25","8:00","8:35","9:15","9:55","10:30",
            "11:05","11:45","12:30","13:10","13:50","14:30","15:10","15:45","16:20","17:00"],
      back:["5:05","5:35","6:10","6:45","7:25","8:00","8:35","9:15","9:55","10:30",
            "11:05","11:45","12:30","13:10","13:50","14:30","15:10","15:45","16:20","17:00"],
      towns: [
        { name: "\u0110\u01B0\u1EDDng Tr\u00F2n Ng\u1ECDc Xu\u00E2n", note: "By the bus station. Easiest start.", anchor: true, road: "the station road" },
        { name: "Cao B\u1EB1ng centre", note: "The bus passes through town.", road: "QL3" },
        { name: "Qu\u1EA3ng Uy\u00EAn", note: "Turns north onto \u0110T206.", road: "\u0110T206" },
        { name: "Th\u00F4ng H\u1EC1", note: "Village on \u0110T206.", road: "\u0110T206" },
        { name: "Tr\u00F9ng Kh\u00E1nh", note: "Last town before the falls.", road: "\u0110T206" },
        { name: "B\u1EA3n Gi\u1ED1c falls", note: "End of the line. Entrance gate.", terminus: true }
      ],
      geometry: [
        [22.6799,106.2528],[22.6760,106.2560],[22.6700,106.2588],[22.6657,106.2581],
        [22.6612,106.2640],[22.6560,106.2790],[22.6520,106.2980],[22.6490,106.3180],
        [22.6520,106.3390],[22.6580,106.3620],[22.6650,106.3880],[22.6700,106.4080],
        [22.6744,106.4306],[22.6900,106.4480],[22.7120,106.4680],[22.7380,106.4870],
        [22.7620,106.5050],[22.7880,106.5230],[22.8080,106.5400],[22.8243,106.5595],
        [22.8320,106.5830],[22.8380,106.6080],[22.8420,106.6350],[22.8470,106.6620],
        [22.8500,106.6900],[22.8536,106.7236]
      ]
    },
    "02": {
      code: "02",
      colour: "#1D4E89",
      title: "Cao B\u1EB1ng \u2014 S\u00F3c Giang",
      short: "H\u00F2a An line",
      roads: "\u0110T203",
      roadNote: "T\u1EC9nh l\u1ED9 203 north-west through N\u01B0\u1EDBc Hai to S\u00F3c Giang.",
      km: 53,
      hours: "~1 hr 15",
      outLabel: "From Cao B\u1EB1ng",
      backLabel: "From S\u00F3c Giang",
      outDirection: "Stand where cars go <b>away from the city</b>.",
      backDirection: "Stand where cars go <b>towards Cao B\u1EB1ng</b>.",
      out: ["5:10","6:25","7:10","7:50","8:30","9:15","10:00","10:40","11:20",
            "13:00","13:45","14:30","15:10","15:50","16:30","17:10"],
      back:["5:10","5:45","6:25","7:10","7:50","8:30","9:15","10:00","10:40","11:20",
            "12:15","13:00","13:45","14:30","15:10","15:50","16:30","17:10"],
      towns: [
        { name: "\u0110\u01B0\u1EDDng Tr\u00F2n Ng\u1ECDc Xu\u00E2n", note: "Same roundabout, other side.", anchor: true },
        { name: "N\u01B0\u1EDBc Hai", note: "Main town of H\u00F2a An." },
        { name: "H\u00E0 Qu\u1EA3ng", note: "District centre." },
        { name: "S\u00F3c Giang", note: "End of the line. Border gate.", terminus: true }
      ],
      geometry: [
        [22.6799,106.2528],[22.6880,106.2420],[22.7020,106.2300],[22.7180,106.2160],
        [22.7350,106.2000],[22.7520,106.1770],[22.7700,106.1550],[22.7900,106.1330],
        [22.8080,106.1130],[22.8180,106.1000],[22.8380,106.0800],[22.8600,106.0620],
        [22.8800,106.0450],[22.8980,106.0300]
      ]
    }
  },

  /* Confirmed waiting points. */
  stops: {
    ngocxuan: {
      id: "ngocxuan",
      name: "Ng\u1ECDc Xu\u00E2n \u2014 to the falls",
      short: "To the falls",
      note: "Roadside by Ph\u1EDF S\u00E0nh, next to the bus station.",
      lat: 22.679869, lng: 106.252763,
      photo: "assets/photos/transfer-point.png",
      photoW: 1024, photoH: 514
    },
    ngocxuanReturn: {
      id: "ngocxuanReturn",
      name: "Ng\u1ECDc Xu\u00E2n \u2014 to H\u00F2a An",
      short: "To H\u00F2a An",
      note: "Far side of the roundabout, by the bridge.",
      lat: 22.679867, lng: 106.251701,
      photo: "assets/photos/return-stop.jpg",
      photoW: 1384, photoH: 832
    }
  },

  /* Show these to the conductor. */
  phrases: [
    { vi: "T\u00F4i mu\u1ED1n \u0111i Th\u00E1c B\u1EA3n Gi\u1ED1c.",
      en: "I want to go to Ban Gioc Waterfall.",
      say: "toy moo-on dee tahk bahn zok" },
    { vi: "Xe n\u00E0y c\u00F3 \u0111i Th\u00E1c B\u1EA3n Gi\u1ED1c kh\u00F4ng?",
      en: "Does this bus go to Ban Gioc?",
      say: "seh nye koh dee tahk bahn zok khom" },
    { vi: "Xin cho t\u00F4i xu\u1ED1ng \u1EDF \u0110\u01B0\u1EDDng Tr\u00F2n Ng\u1ECDc Xu\u00E2n.",
      en: "Let me off at Ngoc Xuan roundabout.",
      say: "sin cho toy soo-ong er duong tron ngok swun" },
    { vi: "T\u00F4i mu\u1ED1n v\u1EC1 Cao B\u1EB1ng.",
      en: "I want to go back to Cao Bang.",
      say: "toy moo-on veh kao bahng" },
    { vi: "Bao nhi\u00EAu ti\u1EC1n?",
      en: "How much?",
      say: "bow nyew tee-en" },
    { vi: "Chuy\u1EBFn xe cu\u1ED1i m\u1EA5y gi\u1EDD?",
      en: "What time is the last bus?",
      say: "chwee-en seh koo-oy may zer" },
    { vi: "Xin d\u1EEBng \u1EDF \u0111\u00E2y.",
      en: "Please stop here.",
      say: "sin zung er day" }
  ]
};
