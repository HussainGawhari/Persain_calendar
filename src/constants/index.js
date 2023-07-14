
 const navLinks = [
  {
    id: "about",
    title: "درباره ما",
  },
  {
    id: "other_years",
    title: "سال های دیگر",
  },
  {
    id: "contact",
    title: "ارتباط با ما",
  },


 {
  id: "calendar",
  title: " تقویم شمسی",
 }
];




const months = [{
    "January": [
      {
        "date": "2023-01-01",
        "name": "New Year's Day"
      }
    ],
    "February": [
      {
        "date": "2023-02-14",
        "name": "Valentine's Day"
      }
    ],
    "April": [
      {
        "date": "2023-04-01",
        "name": "April Fools' Day"
      }
    ],
    "July": [
      {
        "date": "2023-07-04",
        "name": "Independence Day"
      }
    ],
    "October": [
      {
        "date": "2023-10-31",
        "name": "Halloween"
      }
    ],
    "December": [
      {
        "date": "2023-12-25",
        "name": "Christmas"
      }
    ]
  }
];



// const holidays = {
//   January: {
//     1: "New Year's Day",
//     26: "Republic Day"
//   },
//   February: {
//     14: "Valentine's Day"
//   },
//   April: {
//     1: "April Fools' Day"
//   },
//   May: {
//     1: "Labour Day",
//     9: "Mother's Day"
//   },
//   October: {
//     31: "Halloween"
//   },
//   December: {
//     25: "Christmas Day",
//     31: "New Year's Eve"
//   }
// };
const holidays = {
  "Farvardin": {
    1: "جشن نوروز",
    2: "عید نوروز",
    3: "عید نوروز",
    4: "عید نوروز",
    13: "روز طبیعت",
    14: "جشن سیزده بدر"
  },
  "Ordibehesht": {
    1: "روز کار و کارگر",
    4: "جشن چهارم فروردین",
    12: "روز جمهوری اسلامی ایران"
  },
  "Khordad": {
    28: "قیام خونین 15 خرداد"
  },
  "Tir": {
    7: "شهادت امام جعفر صادق (ع)"
  },
  "Mordad": {
    28: "شهادت امام محمد تقی (ع)"
  },
  "Shahrivar": {
    5: "روز جهانی جوان",
    11: "روز صنعت چاپ"
  },
  "Mehr": {
    17: "روز سرباز"
  },
  "Aban": {
    13: "روز دانشجو"
  },
  "Azar": {
    9: "آغاز هفته وحدت",
    29: "روز ملی کمک به سالمندان"
  },
  "Dey": {
    22: "پیروزی انقلاب اسلامی ایران"
  },
  "Bahman": {
    12: "روز دیپلماسی"
  },
  "Esfand": {
    29: "روز ملی شدن صنعت نفت"
  }
};





export {navLinks, months, holidays};