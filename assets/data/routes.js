/* ============================================================
   Cao Bang bus guide — all editable data.
   Change times, the fare and the phrases here; the page follows.
   ============================================================ */
window.BG = {

  lastVerifiedLabel: "1 Nov 2026",
  operatorPhone: "1900 561 562",

  /* One way, city to the falls gate. */
  fare: "110.000₫",

  /* The owner's Google My Maps ids: one map per route. */
  maps: {
    "03": "1GPL_-kdiNvrdkv0_iJ8QQd9Ul59MlLM",
    "02": "1VqIww3Oqt2cMy54fN9d-G665mQ3-uoc",
    both: "1vBD9SN7zH7b8JOHUm4lGtgujpUxFvTQ"
  },

  routes: {
    /* Falls line. out = from the hospital, back = from the falls. */
    "03": {
      out: ["5:05","5:35","6:10","6:45","7:25","8:00","8:35","9:15","9:55","10:30",
            "11:05","11:45","12:30","13:10","13:50","14:30","15:10","15:45","16:20","17:00"],
      back:["5:05","5:35","6:10","6:45","7:25","8:00","8:35","9:15","9:55","10:30",
            "11:05","11:45","12:30","13:10","13:50","14:30","15:10","15:45","16:20","17:00"]
    },
    /* Hoa An line. out = from the hospital, back = from Soc Giang. */
    "02": {
      out: ["5:10","6:25","7:10","7:50","8:30","9:15","10:00","10:40","11:20",
            "13:00","13:45","14:30","15:10","15:50","16:30","17:10"],
      back:["5:10","5:45","6:25","7:10","7:50","8:30","9:15","10:00","10:40","11:20",
            "12:15","13:00","13:45","14:30","15:10","15:50","16:30","17:10"]
    }
  },

  /* Show these to the conductor. */
  phrases: [
    { vi: "Tôi đứng bên này đường để bắt xe đi Thác Bản Giốc có đúng không?",
      en: "Is this the right side for the bus to Ban Gioc?" },
    { vi: "Tôi muốn đi Thác Bản Giốc.",
      en: "I want to go to Ban Gioc Waterfall." },
    { vi: "Xe này có đi Thác Bản Giốc không?",
      en: "Does this bus go to Ban Gioc?" },
    { vi: "Xin dừng ở đây.",
      en: "Please stop here." },
    { vi: "Tôi muốn về Cao Bằng.",
      en: "I want to go back to Cao Bang." },
    { vi: "Cho tôi xuống ở Đường Tròn Ngọc Xuân.",
      en: "Let me off at Ngoc Xuan roundabout." }
  ]
};
