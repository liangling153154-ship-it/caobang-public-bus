/* ============================================================
   Cao Bang bus guide — all editable data.
   Change times, fares, stops and town pins here.

   The road lines drawn on the map live in roads.js. They were
   precomputed from OSRM routing, so they follow the real tarmac
   and should not be hand-edited.

   Town and stop coordinates come from their Google Maps pins.
   ============================================================ */
window.BG = {

  lastVerified: "2026-10-31",
  lastVerifiedLabel: "31 Oct 2026",

  operator: "Hoa Binh Transport",
  operatorPhone: "1900 561 562",

  /* Replace with your own address before publishing. */
  contactEmail: "you@example.com",

  cityCenter: [22.666, 106.2575],

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
      roadNote: "Starts at the provincial hospital, crosses town, then QL3 to Qu\u1EA3ng Uy\u00EAn and \u0110T206 to the falls. No change of bus.",
      km: 86.8,
      hours: "~2 hrs",
      outLabel: "From the hospital",
      backLabel: "From the falls",
      outDirection: "Stand where cars go <b>away from the city</b>.",
      backDirection: "Stand where cars go <b>towards Cao B\u1EB1ng</b>.",
      out: ["5:05","5:35","6:10","6:45","7:25","8:00","8:35","9:15","9:55","10:30",
            "11:05","11:45","12:30","13:10","13:50","14:30","15:10","15:45","16:20","17:00"],
      back:["5:05","5:35","6:10","6:45","7:25","8:00","8:35","9:15","9:55","10:30",
            "11:05","11:45","12:30","13:10","13:50","14:30","15:10","15:45","16:20","17:00"],
      towns: [
        { name: "Provincial hospital", note: "Start of the line. Board here for a seat.",
          lat: 22.652462, lng: 106.269364, anchor: true, road: "city streets" },
        { name: "\u0110\u01B0\u1EDDng Tr\u00F2n Ng\u1ECDc Xu\u00E2n", note: "Second pickup, by the bus station.",
          lat: 22.679869, lng: 106.252763, anchor: true, road: "QL3" },
        { name: "Qu\u1EA3ng Uy\u00EAn", note: "Turns north onto \u0110T206.",
          lat: 22.6966395, lng: 106.4412868, road: "\u0110T206" },
        { name: "Tr\u00F9ng Kh\u00E1nh", note: "Last town before the falls.",
          lat: 22.8351068, lng: 106.5247732, road: "\u0110T206" },
        { name: "B\u1EA3n Gi\u1ED1c \u2014 main gate", note: "End of the line. Buses wait in the car park.",
          lat: 22.8510852, lng: 106.7280468, terminus: true }
      ]
    },
    "02": {
      code: "02",
      colour: "#1D4E89",
      title: "Cao B\u1EB1ng \u2014 S\u00F3c Giang",
      short: "H\u00F2a An line",
      roads: "\u0110T203",
      roadNote: "T\u1EC9nh l\u1ED9 203 north-west through N\u01B0\u1EDBc Hai to S\u00F3c Giang. Only useful if you stay out that way.",
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
        { name: "N\u01B0\u1EDBc Hai", note: "Main town of H\u00F2a An.",
          lat: 22.7377463, lng: 106.1527843 },
        { name: "H\u00E0 Qu\u1EA3ng", note: "District seat at Xu\u00E2n H\u00F2a.",
          lat: 22.9017851, lng: 106.0777214 },
        { name: "S\u00F3c Giang", note: "End of the line. Border gate.", terminus: true }
      ]
    }
  },

  /* Confirmed boarding points, from Google Maps pins. */
  stops: {
    hospital: {
      id: "hospital",
      name: "Provincial hospital \u2014 start of the line",
      short: "Hospital (start)",
      note: "The falls bus starts here, so you get a seat. Ask for Th\u00E1c B\u1EA3n Gi\u1ED1c.",
      lat: 22.652462, lng: 106.269364
    },
    ngocxuan: {
      id: "ngocxuan",
      name: "Ng\u1ECDc Xu\u00E2n \u2014 second pickup",
      short: "Ng\u1ECDc Xu\u00E2n",
      note: "Roadside by Ph\u1EDF S\u00E0nh, next to the bus station.",
      lat: 22.679869, lng: 106.252763,
      photo: "assets/photos/transfer-point.png"
    },
    ngocxuanReturn: {
      id: "ngocxuanReturn",
      name: "Ng\u1ECDc Xu\u00E2n \u2014 to H\u00F2a An",
      short: "To H\u00F2a An",
      note: "Far side of the roundabout, by the bridge. Route 02 only.",
      lat: 22.679867, lng: 106.251701,
      photo: "assets/photos/return-stop.jpg"
    },
    gate: {
      id: "gate",
      name: "B\u1EA3n Gi\u1ED1c \u2014 main gate",
      short: "Main gate",
      note: "End of the line. Buses back to the city leave from this car park.",
      lat: 22.8510852, lng: 106.7280468
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
