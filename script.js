window.onload = function() {
  alert("Yangi o'quv yili uchun dars jadvallari hali mavjud emas. Barcha dars jadvallari dars vaqtlari o'zgarishlari stabil holatga o'tganidan so'ng yuklanadi. Biz bilan ekanligingizdan minnatdormiz.");
};

const schedule = {
    "5-A": {
        "Dushanba": [
            {
                "subject": "San'at (Art)",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Informatika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ona tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Rus tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Matematika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Robotatexnika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Adabiyot",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Matematika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ona tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "San'at (Art)",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Jismoniy tarbiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Matematika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Tabiiy fan",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Matematika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Tarbiya",
                "time": "13:05 - 13:50"
            }
        ],
        "Payshanba": [
            {
                "subject": "O'zbekiston tarixi",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Adabiyot",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Matematika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Shaxmat",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Rus tili",
                "time": "13:05 - 13:50"
            }
        ],
        "Juma": [
            {
                "subject": "Matematika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Matematika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Tabiiy fan",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Informatika",
                "time": "13:05 - 13:50"
            }
        ]
    },
    "6-A": {
        "Dushanba": [
            {
                "subject": "Tarbiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Tabiiy fan",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Matematika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Matematika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Informatika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ona tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Jismoniy tarbiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Matematika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "San'at (Art)",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Robotatexnika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Rus tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Shaxmat",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Adabiyot",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ona tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "San'at (Art)",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Matematika",
                "time": "13:05 - 13:50"
            }
        ],
        "Payshanba": [
            {
                "subject": "Matematika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Informatika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Tabiiy fan",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Rus tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Matematika",
                "time": "13:05 - 13:50"
            }
        ],
        "Juma": [
            {
                "subject": "Jismoniy tarbiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Adabiyot",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Matematika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Tabiiy fan",
                "time": "13:05 - 13:50"
            }
        ]
    },
    "6-B": {
        "Dushanba": [
            {
                "subject": "Tabiiy fan",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Matematika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Rus tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Tarbiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "San'at (Art)",
                "time": "13:05 - 13:50"
            }
        ],
        "Seshanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Matematika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Adabiyot",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Shaxmat",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Robotatexnika",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "San'at (Art)",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Tabiiy fan",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Informatika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ona tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Matematika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Matematika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Rus tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Matematika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Adabiyot",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Informatika",
                "time": "13:05 - 13:50"
            }
        ],
        "Juma": [
            {
                "subject": "Tabiiy fan",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Matematika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ona tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Matematika",
                "time": "13:05 - 13:50"
            }
        ]
    },
    "7-A": {
        "Dushanba": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Informatika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Adabiyot",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Biologiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "San'at (Art)",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "San'at (Art)",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Kimyo",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Rus tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Adabiyot",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geografiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Fizika",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Kimyo",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Fizika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Biologiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Algebra",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ona tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Ona tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geometriya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Jahon tarixi",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Tarbiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "Informatika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Rus tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Algebra",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Fizika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Shaxmat",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "7-B": {
        "Dushanba": [
            {
                "subject": "O'zbekiston tarixi",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Biologiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "San'at (Art)",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geometriya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Informatika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Algebra",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Ona tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "San'at (Art)",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Kimyo",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Jahon tarixi",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Rus tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Ona tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Kimyo",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Algebra",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Adabiyot",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Fizika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Tarbiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Geografiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Algebra",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Adabiyot",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Geometriya",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "Rus tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Biologiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Informatika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Shaxmat",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Geometriya",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "7-D": {
        "Dushanba": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Geometriya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "San'at (Art)",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Adabiyot",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "San'at (Art)",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Tarbiya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Biologiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geografiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Algebra",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geometriya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Kimyo",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Jahon tarixi",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Rus tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Algebra",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Informatika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Rus tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Fizika",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Jismoniy tarbiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Kimyo",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ona tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Adabiyot",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Fizika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Algebra",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ona tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Geometriya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Shaxmat",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Biologiya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Informatika",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "8-A": {
        "Dushanba": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Rus tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Kimyo",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geometriya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Algebra",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Informatika",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Jahon tarixi",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geometriya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Fizika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Algebra",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Geografiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Biologiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "San'at (Art)",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Geometriya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ona tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Algebra",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Adabiyot",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Kimyo",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Rus tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geografiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Tarbiya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Shaxmat",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "Ona tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Adabiyot",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Informatika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Biologiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Fizika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Algebra",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "8-B": {
        "Dushanba": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Jahon tarixi",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Adabiyot",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Geometriya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Rus tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "O'zbekiston tarixi",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geometriya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Geografiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Informatika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Fizika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Ona tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Adabiyot",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "San'at (Art)",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Kimyo",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Biologiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Tarbiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Rus tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Kimyo",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Shaxmat",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Geografiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "O'zbekiston tarixi",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Informatika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Fizika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ona tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Algebra",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Biologiya",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "9-A": {
        "Dushanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ona tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Algebra",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Shaxmat",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Biologiya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Kimyo",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Geografiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Algebra",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Kimyo",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Adabiyot",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Fizika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Informatika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Rus tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Tarbiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Informatika",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Biologiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Fizika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Adabiyot",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geometriya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geografiya",
                "time": "13:05 - 13:50"
            }
        ],
        "Juma": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Jahon tarixi",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Rus tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geometriya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Ona tili",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "9-B": {
        "Dushanba": [
            {
                "subject": "Kimyo",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Shaxmat",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Algebra",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Biologiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Adabiyot",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Geografiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Rus tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Fizika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ona tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Algebra",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Kimyo",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Tarbiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Informatika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Informatika",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Algebra",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Geografiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ona tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Fizika",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "O'zbekiston tarixi",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Biologiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geometriya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Adabiyot",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Rus tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Jahon tarixi",
                "time": "13:05 - 13:50"
            }
        ]
    },
    "9-D": {
        "Dushanba": [
            {
                "subject": "O'zbekiston tarixi",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Biologiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Shaxmat",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Kimyo",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Rus tili",
                "time": "13:05 - 13:50"
            }
        ],
        "Seshanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Informatika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ona tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Geometriya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Fizika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geografiya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Algebra",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Tarbiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Kimyo",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Fizika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Jahon tarixi",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Adabiyot",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Biologiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geografiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Fizika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Adabiyot",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "Geometriya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Informatika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Algebra",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ona tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Rus tili",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "10-A": {
        "Dushanba": [
            {
                "subject": "Jismoniy tarbiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Geometriya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Algebra",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Ona tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Seshanba": [
            {
                "subject": "Geometriya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Informatika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ona tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Fizika",
                "time": "13:05 - 13:50"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Tarbiya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Algebra",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Shaxmat",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Fizika",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Rus tili",
                "time": "13:05 - 13:50"
            }
        ],
        "Payshanba": [
            {
                "subject": "Rus tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Fizika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Adabiyot",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "CHQBT",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Informatika",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Adabiyot",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Fizika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Jahon tarixi",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "13:55 - 14:40"
            }
        ]
    },
    "10-B": {
        "Dushanba": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Geometriya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Adabiyot",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "13:05 - 13:50"
            }
        ],
        "Seshanba": [
            {
                "subject": "Informatika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ingliz tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Tarbiya",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Algebra",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Ona tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Jahon tarixi",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Rus tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Fizika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ona tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Shaxmat",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Rus tili",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Informatika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Adabiyot",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Algebra",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "13:55 - 14:40"
            }
        ],
        "Juma": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Algebra",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geometriya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "CHQBT",
                "time": "13:05 - 13:50"
            }
        ]
    },
    "11-A": {
        "Dushanba": [
            {
                "subject": "Algebra",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Ona tili",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Informatika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Geometriya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Fizika",
                "time": "13:05 - 13:50"
            }
        ],
        "Seshanba": [
            {
                "subject": "Rus tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Adabiyot",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Fizika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Algebra",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Geometriya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Tarbiya",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Adabiyot",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Jahon tarixi",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "CHQBT",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Shaxmat",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geometriya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Informatika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Algebra",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            }
        ],
        "Juma": [
            {
                "subject": "Fizika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ingliz tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ona tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Rus tili",
                "time": "13:05 - 13:50"
            }
        ]
    },
    "11-B": {
        "Dushanba": [
            {
                "subject": "Informatika",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Fizika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Geometriya",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ona tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Ingliz tili",
                "time": "13:05 - 13:50"
            }
        ],
        "Seshanba": [
            {
                "subject": "Geometriya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Algebra",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Fizika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "CHQBT",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Tarbiya",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Adabiyot",
                "time": "13:55 - 14:40"
            }
        ],
        "Chorshanba": [
            {
                "subject": "Rus tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Shaxmat",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Ingliz tili",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Adabiyot",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Algebra",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Rus tili",
                "time": "13:05 - 13:50"
            },
            {
                "subject": "Fizika",
                "time": "13:55 - 14:40"
            }
        ],
        "Payshanba": [
            {
                "subject": "Geometriya",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "O'zbekiston tarixi",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Informatika",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Fizika",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Ingliz tili",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Algebra",
                "time": "13:05 - 13:50"
            }
        ],
        "Juma": [
            {
                "subject": "Ingliz tili",
                "time": "08:30 - 09:15"
            },
            {
                "subject": "Fizika",
                "time": "09:20 - 10:05"
            },
            {
                "subject": "Jahon tarixi",
                "time": "10:10 - 10:55"
            },
            {
                "subject": "Ona tili",
                "time": "11:00 - 11:45"
            },
            {
                "subject": "Jismoniy tarbiya",
                "time": "12:15 - 13:00"
            },
            {
                "subject": "Algebra",
                "time": "13:05 - 13:50"
            }
        ]
    }
};

document.getElementById("showSchedule").addEventListener("click", function () {
    const selectedClass = document.getElementById("classSelect").value;
    const selectedDay = document.getElementById("daySelect").value;

    const resultDiv = document.getElementById("result");
    const scheduleInfo = document.getElementById("scheduleInfo");

    if (!selectedClass || !selectedDay) {
        scheduleInfo.textContent = "Iltimos, sinf va kunni tanlang!";
        resultDiv.classList.remove("hidden");
        return;
    }

    if (schedule[selectedClass] && schedule[selectedClass][selectedDay]) {
        const daySchedule = schedule[selectedClass][selectedDay];
        let scheduleContent = `<div class="schedule">`;

        daySchedule.forEach(item => {
            scheduleContent += `
                <div class="schedule-item">
                    <span>${item.subject}:</span> ${item.time}
                </div>
            `;
        });

        scheduleContent += `</div>`;
        scheduleInfo.innerHTML = scheduleContent;
    } else {
        scheduleInfo.textContent = "Xatolik yuz berdi, bu sinf mavjud emas yoki dars jadvali hali yuklanmagan!";
    }

    resultDiv.classList.remove("hidden");
});
