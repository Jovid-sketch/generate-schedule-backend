export type Lesson = {
    lessons: {
        name: string;
        timeInterval: string;
        place: string;
        rooms?: string[];
        teachers?: string[];
        groups?: string;
        dateInterval: string;
        link?: string | null;
    }[];
};

export type TSchedule = {
    [key: string]: {
        Monday: Lesson;
        Tuesday: Lesson;
        Wednesday: Lesson;
        Thursday: Lesson;
        Friday: Lesson;
        Saturday: Lesson;
    };
};

export const Schedule: TSchedule = {
    "221-371": {
        Monday: {
            lessons: [
                {
                    name: "Проектная деятельность (Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: [""],
                    dateInterval: "05 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Управление проектами (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["ПД_1"],
                    teachers: [""],
                    dateInterval: "06 Фев - 03 Июн",
                    link: null
                },
                {
                    name: "Управление проектами (Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: [""],
                    dateInterval: "05 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Проектная деятельность (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["ПД_1"],
                    teachers: [""],
                    dateInterval: "06 Фев - 03 Июн",
                    link: null
                }
            ]
        },
        Tuesday: {
            lessons: [
                {
                    name: "Численные методы в компьютерных вычислениях (Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Рудяк Юрий Владимирович"],
                    dateInterval: "06 Фев - 09 Апр",
                    link:
                        "https://events.webinar.ru/19401949/2040727204/session/1982670476"
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "9:00 - 10:30",
                    place: "Павла Корчагина",
                    rooms: ["ПК318"],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "16 Апр - 24 Апр",
                    link: null
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "9:00 - 10:30",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "26 Апр - 07 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "9:00 - 10:30",
                    place: "Павла Корчагина",
                    rooms: ["ПК318"],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "09 Май - 21 Май",
                    link: null
                },
                {
                    name: "Тайм-менеджмент (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "06 Фев - 09 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Павла Корчагина",
                    rooms: ["ПК318"],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "16 Апр - 24 Апр",
                    link: null
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "26 Апр - 07 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Павла Корчагина",
                    rooms: ["ПК318"],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "09 Май - 21 Май",
                    link: null
                },
                {
                    name: "Философия (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Плужникова Наталья Николаевна"],
                    dateInterval: "06 Фев - 09 Апр",
                    link:
                        "https://events.webinar.ru/19403925/2096675871/session/1313482180"
                },
                {
                    name: "Операционные системы (Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Попов Дмитрий Иванович"],
                    dateInterval: "06 Фев - 09 Апр",
                    link: "https://events.webinar.ru/19404753/568368809/session/240352287"
                },
                {
                    name: "Численные методы в компьютерных вычислениях (Зачет)",
                    timeInterval: "16:10 - 17:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Рудяк Юрий Владимирович"],
                    dateInterval: "11 Апр",
                    link:
                        "https://events.webinar.ru/19401995/1844276027/session/693154737"
                },
                {
                    name: "Тайм-менеджмент (Зачет)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "23 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Тайм-менеджмент (Зачет)",
                    timeInterval: "17:50 - 19:20",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "23 Май",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Wednesday: {
            lessons: [
                {
                    name: "Операционные системы (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2662", "Пр2668"],
                    teachers: [
                        "Лещенкова Екатерина Олеговна",
                        "Байрамов  Эльмин  Вагифович"
                    ],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Иностранный язык (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр1014", "Пр2815 в"],
                    teachers: [
                        "Володина Елена  Владимировна",
                        "Калитина Марина Николаевна"
                    ],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Математический анализ (Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр2609"],
                    teachers: ["Малова Наталья Николаевна"],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Общая физическая подготовка (см. график кафедры) (Практика)",
                    timeInterval: "17:50 - 19:20",
                    place: "Михалковская ",
                    rooms: ["_МСпортзал"],
                    teachers: [""],
                    dateInterval: "20 Фев - 11 Июн",
                    link: null
                }
            ]
        },
        Thursday: {
            lessons: [
                {
                    name: "Математический анализ (Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Спиридонов Михаил Яковлевич"],
                    dateInterval: "03 Апр - 28 Май",
                    link:
                        "https://events.webinar.ru/19399433/2116070837/session/641220624"
                },
                {
                    name: "Технологии прикладного программирования (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Арсентьев Дмитрий Андреевич"],
                    dateInterval: "03 Апр - 11 Июн",
                    link:
                        "https://events.webinar.ru/19396587/1035100730/session/852182929"
                },
                {
                    name: "Математический анализ (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Спиридонов Михаил Яковлевич"],
                    dateInterval: "06 Фев - 02 Апр",
                    link:
                        "https://events.webinar.ru/19404011/2068522527/session/206261290"
                },
                {
                    name: "Проектирование интерфейсов информационных систем (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Евсеев Илья Владимирович"],
                    dateInterval: "06 Апр",
                    link:
                        "https://events.webinar.ru/19401173/2111407236/session/1937110466"
                },
                {
                    name: "Математический анализ (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Спиридонов Михаил Яковлевич"],
                    dateInterval: "30 Май - 11 Июн",
                    link:
                        "https://events.webinar.ru/19399433/2116070837/session/641220624"
                },
                {
                    name: "Проектирование интерфейсов информационных систем (Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Евсеев Илья Владимирович"],
                    dateInterval: "06 Фев - 02 Апр",
                    link:
                        "https://events.webinar.ru/19404071/261830913/session/1755961416"
                },
                {
                    name: "Технологии прикладного программирования (Лекция)",
                    timeInterval: "16:10 - 17:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Арсентьев Дмитрий Андреевич"],
                    dateInterval: "06 Фев - 02 Апр",
                    link:
                        "https://events.webinar.ru/19401995/1035680138/session/1266410075"
                }
            ]
        },
        Friday: {
            lessons: [
                {
                    name: "Проектирование интерфейсов информационных систем (Практика)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2609"],
                    teachers: ["Евсеев Илья Владимирович"],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Технологии прикладного программирования (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2662", "Пр2668"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Гуляева  Виктория  Сергеевна"
                    ],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Численные методы в компьютерных вычислениях (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2802", "Пр2814"],
                    teachers: ["Норин Владимир Павлович", "Рудяк Юрий Владимирович"],
                    dateInterval: "06 Фев - 09 Апр",
                    link: null
                },
                {
                    name: "Операционные системы (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2802", "Пр2814"],
                    teachers: [
                        "Лещенкова Екатерина Олеговна",
                        "Байрамов  Эльмин  Вагифович"
                    ],
                    dateInterval: "10 Апр - 11 Июн",
                    link: null
                },
                {
                    name: "Философия (Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр1011"],
                    teachers: ["Плужникова Наталья Николаевна"],
                    dateInterval: "10 Апр - 11 Июн",
                    link: null
                }
            ]
        },
        Saturday: {
            lessons: [
                {
                    name: "Общая физическая подготовка (см. график кафедры) (Практика)",
                    timeInterval: "17:50 - 19:20",
                    place: "Михалковская ",
                    rooms: ["_М Спортзал"],
                    teachers: [""],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                }
            ]
        }
    },
    "221-372": {
        Monday: {
            lessons: [
                {
                    name: "Иностранный язык (Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: [
                        "Володина Елена  Владимировна",
                        "Морозова Наталия Юрьевна"
                    ],
                    dateInterval: "24 Апр",
                    link:
                        "https://events.webinar.ru/57009101/1826954867/session/2006091262"
                },
                {
                    name: "Проектная деятельность (Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: [""],
                    dateInterval: "05 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Управление проектами (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["ПД_1"],
                    teachers: [""],
                    dateInterval: "06 Фев - 03 Июн",
                    link: null
                },
                {
                    name: "Управление проектами (Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: [""],
                    dateInterval: "05 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Проектная деятельность (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["ПД_1"],
                    teachers: [""],
                    dateInterval: "06 Фев - 03 Июн",
                    link: null
                }
            ]
        },
        Tuesday: {
            lessons: [
                {
                    name: "Математический анализ (Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Спиридонов Михаил Яковлевич"],
                    dateInterval: "06 Фев - 11 Июн",
                    link:
                        "https://events.webinar.ru/19401177/355889785/session/1734368945"
                },
                {
                    name: "Операционные системы (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Попов Дмитрий Иванович"],
                    dateInterval: "06 Фев - 09 Апр",
                    link:
                        "https://events.webinar.ru/19401873/1986302743/session/151474055"
                },
                {
                    name: "Технологии прикладного программирования (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Арсентьев Дмитрий Андреевич"],
                    dateInterval: "10 Апр - 11 Июн",
                    link:
                        "https://events.webinar.ru/19399433/1381887341/session/1962656321"
                },
                {
                    name: "Технологии прикладного программирования (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Арсентьев Дмитрий Андреевич"],
                    dateInterval: "06 Фев - 09 Апр",
                    link: "https://events.webinar.ru/19404171/645674098/session/177630943"
                },
                {
                    name: "Численные методы в компьютерных вычислениях (Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Рудяк Юрий Владимирович"],
                    dateInterval: "16 Май",
                    link:
                        "https://events.webinar.ru/19400763/2096144967/session/156212772"
                },
                {
                    name: "Проектирование интерфейсов информационных систем (Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Евсеев Илья Владимирович"],
                    dateInterval: "06 Фев - 09 Апр",
                    link:
                        "https://events.webinar.ru/19404715/1226129488/session/1642349778"
                },
                {
                    name: "Иностранный язык (Консультация)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: [
                        "Володина Елена  Владимировна",
                        "Морозова Наталия Юрьевна"
                    ],
                    dateInterval: "18 Апр",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Wednesday: {
            lessons: [
                {
                    name: "Численные методы в компьютерных вычислениях (Лаб. работа)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2815 б", "Пр2802"],
                    teachers: ["Норин Владимир Павлович", "Рудяк Юрий Владимирович"],
                    dateInterval: "10 Апр - 07 Май",
                    link: null
                },
                {
                    name: "Численные методы в компьютерных вычислениях (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2815 б", "Пр2802"],
                    teachers: ["Норин Владимир Павлович", "Рудяк Юрий Владимирович"],
                    dateInterval: "10 Апр - 07 Май",
                    link: null
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр1012"],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "10 Апр - 24 Апр",
                    link: null
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "26 Апр - 07 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр1012"],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "10 Апр - 24 Апр",
                    link: null
                },
                {
                    name: "Тайм-менеджмент (Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "26 Апр - 07 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Общая физическая подготовка (см. график кафедры) (Практика)",
                    timeInterval: "17:50 - 19:20",
                    place: "Михалковская ",
                    rooms: ["_МСпортзал"],
                    teachers: [""],
                    dateInterval: "20 Фев - 11 Июн",
                    link: null
                }
            ]
        },
        Thursday: {
            lessons: [
                {
                    name: "Тайм-менеджмент (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Бородачева Любовь Викторовна"],
                    dateInterval: "06 Фев - 09 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Проектирование интерфейсов информационных систем (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2609"],
                    teachers: ["Евсеев Илья Владимирович"],
                    dateInterval: "10 Апр - 11 Июн",
                    link: null
                },
                {
                    name: "Философия (Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Плужникова Наталья Николаевна"],
                    dateInterval: "06 Фев - 09 Апр",
                    link:
                        "https://events.webinar.ru/19401173/718114697/session/1371301544"
                },
                {
                    name: "Операционные системы (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр2662"],
                    teachers: [
                        "Лещенкова Екатерина Олеговна",
                        "Байрамов  Эльмин  Вагифович"
                    ],
                    dateInterval: "10 Апр - 11 Июн",
                    link: null
                },
                {
                    name: "Численные методы в компьютерных вычислениях (Лекция)",
                    timeInterval: "16:10 - 17:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Рудяк Юрий Владимирович"],
                    dateInterval: "06 Фев - 09 Апр",
                    link:
                        "https://events.webinar.ru/19401779/1232415533/session/1438496126"
                }
            ]
        },
        Friday: {
            lessons: [
                {
                    name: "Операционные системы (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2610"],
                    teachers: [
                        "Лещенкова Екатерина Олеговна",
                        "Байрамов  Эльмин  Вагифович"
                    ],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Технологии прикладного программирования (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2662"],
                    teachers: [
                        "Полубояринова Анастасия Сергеевна",
                        "Худайбердиева Гулшат"
                    ],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Проектирование интерфейсов информационных систем (Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр2609"],
                    teachers: ["Евсеев Илья Владимирович"],
                    dateInterval: "06 Фев - 02 Апр",
                    link: null
                }
            ]
        },
        Saturday: {
            lessons: [
                {
                    name: "Математический анализ (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2411"],
                    teachers: ["Малова Наталья Николаевна"],
                    dateInterval: "06 Фев - 11 Июн",
                    link: null
                },
                {
                    name: "Иностранный язык (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр1430", "Пр2307"],
                    teachers: [
                        "Володина Елена  Владимировна",
                        "Морозова Наталия Юрьевна"
                    ],
                    dateInterval: "06 Фев - 09 Апр",
                    link: null
                },
                {
                    name: "Философия (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр1402"],
                    teachers: ["Плужникова Наталья Николаевна"],
                    dateInterval: "10 Апр - 11 Июн",
                    link: null
                },
                {
                    name: "Иностранный язык (Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр1430", "Пр2307"],
                    teachers: [
                        "Володина Елена  Владимировна",
                        "Морозова Наталия Юрьевна"
                    ],
                    dateInterval: "06 Фев - 09 Апр",
                    link: null
                },
                {
                    name: "Общая физическая подготовка (см. график кафедры) (Практика)",
                    timeInterval: "17:50 - 19:20",
                    place: "Михалковская ",
                    rooms: ["_М Спортзал"],
                    teachers: [""],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                }
            ]
        }
    },
    "201-291": {
        Monday: {
            lessons: [
                {
                    name: "Проектная деятельность (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Большая Семеновская",
                    rooms: ["_ПД_"],
                    teachers: [""],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                }
            ]
        },
        Tuesday: {
            lessons: [
                {
                    name: "Проектирование систем управления (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Кириличев Борис Владимирович"],
                    dateInterval: "06 Фев - 01 Апр",
                    link: "https://events.webinar.ru/19403759/105796516/session/990001280"
                },
                {
                    name:
                        "Технические средства автоматизации и управления (1 подгруппа) (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Предприятия",
                    rooms: ["-Техноград_ "],
                    teachers: ["Пикалов Евгений Викторович"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name: "Проектирование систем управления (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Кириличев Борис Владимирович"],
                    dateInterval: "06 Фев - 02 Апр",
                    link:
                        "https://events.webinar.ru/19404071/1940137346/session/1992896196"
                },
                {
                    name:
                        "Технические средства автоматизации и управления (1 подгруппа) (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Предприятия",
                    rooms: ["-Техноград_ "],
                    teachers: ["Пикалов Евгений Викторович"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name: "Моделирование систем управления (Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Кириличев Борис Владимирович"],
                    dateInterval: "06 Фев - 02 Апр",
                    link:
                        "https://events.webinar.ru/19404285/1205322455/session/267112319"
                },
                {
                    name:
                        "Технические средства автоматизации и управления (2 подгуппа) (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Предприятия",
                    rooms: ["-Техноград_ "],
                    teachers: ["Пикалов Евгений Викторович"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Технические средства автоматизации и управления (2 подгуппа) (Лаб. работа)",
                    timeInterval: "16:10 - 17:40",
                    place: "Предприятия",
                    rooms: ["-Техноград_ "],
                    teachers: ["Пикалов Евгений Викторович"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                }
            ]
        },
        Wednesday: {
            lessons: [
                {
                    name: "Технические средства автоматизации и управления (Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Гасияров Вадим Рашитович"],
                    dateInterval: "06 Фев - 02 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы цифровой обработки сигналов (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Чернокозов Владимир Васильевич"],
                    dateInterval: "06 Фев - 02 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Проектирование систем управления (2 подгруппа) (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав2602"],
                    teachers: ["Березин Евгений Сергеевич"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Основы цифровой обработки сигналов (1 подгруппа) (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав2619"],
                    teachers: ["Чернокозов Владимир Васильевич"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name: "Проектирование систем управления (1 подгруппа) (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав2619"],
                    teachers: ["Березин Евгений Сергеевич"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Основы цифровой обработки сигналов (2 подгруппа) (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав2618"],
                    teachers: ["Пикалов Евгений Викторович"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Элективные курсы по физической культуре и спорту (см. график кафедры) (Практика)",
                    timeInterval: "17:50 - 19:20",
                    place: "Михалковская ",
                    rooms: ["МСпорт зал"],
                    teachers: [""],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                }
            ]
        },
        Thursday: {
            lessons: [
                {
                    name: "Моделирование систем управления (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав2615"],
                    teachers: ["Березин Евгений Сергеевич"],
                    dateInterval: "06 Фев - 05 Мар",
                    link: null
                },
                {
                    name: "Схемотехника электронных устройств автоматики (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав2610"],
                    teachers: ["Оськин Святослав Павлович"],
                    dateInterval: "06 Мар - 02 Апр",
                    link: null
                },
                {
                    name:
                        "Компьютерные системы обработки экспериментальных данных (2 подгруппа) (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав2610"],
                    teachers: ["Оськин Святослав Павлович"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                },
                {
                    name: "Моделирование систем управления (1 подгруппа) (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав2614"],
                    teachers: ["Березин Евгений Сергеевич"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Компьютерные системы обработки экспериментальных данных (1 подгруппа) (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Автозаводская",
                    rooms: ["ав2610"],
                    teachers: ["Оськин Святослав Павлович"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                },
                {
                    name: "Моделирование систем управления (2 подгруппа) (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Автозаводская",
                    rooms: ["ав2602"],
                    teachers: ["Березин Евгений Сергеевич"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                }
            ]
        },
        Friday: {
            lessons: [
                {
                    name: "Проектирование систем управления (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав2615"],
                    teachers: ["Березин Евгений Сергеевич"],
                    dateInterval: "03 Апр - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Автоматизация технологических процессов и производств (1 подгруппа) (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав2610"],
                    teachers: ["Матросова Владлена Валентиновна"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Современные технические средства измерения (2 подгруппа) (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав2507"],
                    teachers: ["Рачков Михаил Юрьевич"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Автоматизация технологических процессов и производств (2 подгруппа) (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Автозаводская",
                    rooms: ["ав2610"],
                    teachers: ["Матросова Владлена Валентиновна"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Современные технические средства измерения (1 подгруппа) (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Автозаводская",
                    rooms: ["ав2507"],
                    teachers: ["Рачков Михаил Юрьевич"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                },
                {
                    name:
                        "Элективные курсы по физической культуре и спорту (см. график кафедры) (Практика)",
                    timeInterval: "17:50 - 19:20",
                    place: "Автозаводская",
                    rooms: ["_Спортзал"],
                    teachers: [""],
                    dateInterval: "06 Фев - 04 Июн",
                    link: null
                }
            ]
        },
        Saturday: {
            lessons: [
                {
                    name:
                        "Автоматизация технологических процессов и производств (Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Матросова Владлена Валентиновна"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name:
                        "Компьютерные системы обработки экспериментальных данных (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Оськин Святослав Павлович"],
                    dateInterval: "06 Фев - 04 Июн",
                    link:
                        "https://events.webinar.ru/19401637/1738644602/session/729701428"
                },
                {
                    name: "Современные технические средства измерения (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Рачков Михаил Юрьевич"],
                    dateInterval: "06 Фев - 04 Июн",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        }
    },
    "201-222": {
        Monday: {
            lessons: [
                {
                    name: "Проектная деятельность (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Большая Семеновская",
                    rooms: ["__ПД___"],
                    teachers: [""],
                    dateInterval: "30 Янв - 28 Май",
                    link: null
                }
            ]
        },
        Tuesday: {
            lessons: [
                {
                    name: "Основы проектирования деталей и узлов машин (Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Петракова Екатерина Алексеевна"],
                    dateInterval: "03 Апр - 09 Апр",
                    link:
                        "https://events.webinar.ru/19401461/1485915404/session/1245496195"
                },
                {
                    name: "Основы проектирования деталей и узлов машин (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Петракова Екатерина Алексеевна"],
                    dateInterval: "30 Янв - 11 Фев",
                    link:
                        "https://events.webinar.ru/19401649/628814713/session/1031122470"
                },
                {
                    name: "Основы проектирования деталей и узлов машин (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Петракова Екатерина Алексеевна"],
                    dateInterval: "20 Фев - 02 Апр",
                    link:
                        "https://events.webinar.ru/19401173/985916893/session/1819236307"
                },
                {
                    name: "Теория и технология горячей объёмной штамповки (Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Гневашев Денис Александрович"],
                    dateInterval: "03 Апр - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы триботехники (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Дмитриева Людмила Александровна"],
                    dateInterval: "30 Янв - 02 Апр",
                    link:
                        "https://events.webinar.ru/19401423/1979658393/session/1321819460"
                },
                {
                    name: "Теория и технология листовой штамповки (Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шпунькин Николай Фомич"],
                    dateInterval: "03 Апр - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологические покрытия и смазки в процессах ОМД (Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Петров Александр Николаевич"],
                    dateInterval: "30 Янв - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы решения инженерных задач в ОМД (Лекция)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Матвеев Алексей Григорьевич"],
                    dateInterval: "30 Янв - 02 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name:
                        "Основы математического моделирования технологических процессов (Лекция)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Матвеев Алексей Григорьевич"],
                    dateInterval: "03 Апр - 28 Май",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Wednesday: {
            lessons: [
                {
                    name: "Основы проектирования деталей и узлов машин (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав5108"],
                    teachers: ["Петракова Екатерина Алексеевна"],
                    dateInterval: "30 Янв - 11 Фев",
                    link: null
                },
                {
                    name: "Основы проектирования деталей и узлов машин (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав5108"],
                    teachers: ["Петракова Екатерина Алексеевна"],
                    dateInterval: "20 Фев - 01 Апр",
                    link: null
                },
                {
                    name: "Основы проектирования деталей и узлов машин (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Автозаводская",
                    rooms: ["ав5108"],
                    teachers: ["Петракова Екатерина Алексеевна"],
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name: "Иностранный язык в профессиональной сфере (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав4510"],
                    teachers: ["Клименко Ирина Леонтьевна"],
                    dateInterval: "30 Янв - 11 Фев",
                    link: null
                },
                {
                    name: "Иностранный язык в профессиональной сфере (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав4510"],
                    teachers: ["Алёнин Илья Александрович"],
                    dateInterval: "13 Фев - 28 Май",
                    link: null
                },
                {
                    name:
                        "Технологический инжиниринг процессов ОМД с применением CAE-систем (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Автозаводская",
                    rooms: ["ав2514"],
                    teachers: ["Куминова Надежда Игоревна"],
                    dateInterval: "30 Янв - 30 Апр",
                    link: null
                },
                {
                    name:
                        "Технологический инжиниринг процессов ОМД с применением CAE-систем (Лаб. работа)",
                    timeInterval: "16:10 - 17:40",
                    place: "Автозаводская",
                    rooms: ["ав2514"],
                    teachers: ["Матвеев Алексей Григорьевич"],
                    dateInterval: "30 Янв - 30 Апр",
                    link: null
                }
            ]
        },
        Thursday: {
            lessons: [
                {
                    name: "Основы триботехники (Практика)",
                    timeInterval: "10:40 - 12:10",
                    place: "Павла Корчагина",
                    rooms: ["ПК522"],
                    teachers: ["Дмитриева Людмила Александровна"],
                    dateInterval: "30 Янв - 05 Мар",
                    link: null
                },
                {
                    name: "Теория и технология листовой штамповки (Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Большая Семеновская",
                    rooms: ["А-ОМД"],
                    teachers: ["Козлечков Александр Владимирович"],
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name: "Основы триботехники (Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Павла Корчагина",
                    rooms: ["ПК521"],
                    teachers: ["Дмитриева Людмила Александровна"],
                    dateInterval: "30 Янв - 05 Мар",
                    link: null
                },
                {
                    name: "Теория и технология горячей объёмной штамповки (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Большая Семеновская",
                    rooms: ["А-ОМД"],
                    teachers: ["Козлечков Александр Владимирович"],
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name: "Метрологическое обеспечение качества продукции (Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Вячеславова Ольга Федоровна"],
                    dateInterval: "06 Мар - 02 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name:
                        "Технологические покрытия и смазки в процессах ОМД (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Большая Семеновская",
                    rooms: ["А-ОМД"],
                    teachers: ["Козлечков Александр Владимирович"],
                    dateInterval: "01 Май - 28 Май",
                    link: null
                },
                {
                    name: "Метрологическое обеспечение качества продукции (Лекция)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Вячеславова Ольга Федоровна"],
                    dateInterval: "06 Мар - 02 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name:
                        "Технологические покрытия и смазки в процессах ОМД (Лаб. работа)",
                    timeInterval: "16:10 - 17:40",
                    place: "Большая Семеновская",
                    rooms: ["А-ОМД"],
                    teachers: ["Петров Александр Николаевич"],
                    dateInterval: "01 Май - 28 Май",
                    link: null
                },
                {
                    name: "Основы триботехники (Зачет)",
                    timeInterval: "17:50 - 19:20",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Дмитриева Людмила Александровна"],
                    dateInterval: "30 Мар",
                    link: "https://events.webinar.ru/19404071/504248604/session/721772048"
                }
            ]
        },
        Friday: {
            lessons: [
                {
                    name:
                        "Основы математического моделирования технологических процессов (Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Автозаводская",
                    rooms: ["ав2514"],
                    teachers: ["Куминова Надежда Игоревна"],
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name: "Основы решения инженерных задач в ОМД (Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Автозаводская",
                    rooms: ["ав2514"],
                    teachers: ["Матвеев Алексей Григорьевич"],
                    dateInterval: "30 Янв - 01 Апр",
                    link: null
                },
                {
                    name: "Метрологическое обеспечение качества продукции (Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Автозаводская",
                    rooms: ["ав3106"],
                    teachers: ["Вячеславова Ольга Федоровна"],
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name: "Основы решения инженерных задач в ОМД (Лаб. работа)",
                    timeInterval: "16:10 - 17:40",
                    place: "Автозаводская",
                    rooms: ["ав2514"],
                    teachers: ["Куминова Надежда Игоревна"],
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                },
                {
                    name: "Метрологическое обеспечение качества продукции (Лаб. работа)",
                    timeInterval: "16:10 - 17:40",
                    place: "Автозаводская",
                    rooms: ["ав1706"],
                    teachers: ["Греку Максим Васильевич"],
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name:
                        "Элективные курсы по физической культуре и спорту (см. график кафедры) (Практика)",
                    timeInterval: "17:50 - 19:20",
                    place: "Михалковская ",
                    rooms: ["-спорт. зал-"],
                    teachers: [""],
                    dateInterval: "30 Янв - 28 Май",
                    link: null
                }
            ]
        },
        Saturday: {
            lessons: []
        }
    }
};

export const TeacherSchedule: TSchedule = {
    Булатников: {
        Monday: {
            lessons: [
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724, 201-725, 201-726",
                    dateInterval: "15 Май - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "19 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(КП)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-725",
                    dateInterval: "10 Апр",
                    link:
                        "https://events.webinar.ru/19401637/1707803458/session/900988253"
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724",
                    dateInterval: "29 Май",
                    link: null
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "19 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(Консультация)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-725, 191-726",
                    dateInterval: "10 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724",
                    dateInterval: "29 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "19 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(КП)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-726",
                    dateInterval: "10 Апр",
                    link:
                        "https://events.webinar.ru/19403759/1764299810/session/558098875"
                }
            ]
        },
        Tuesday: {
            lessons: [
                {
                    name: "Разработка онлайн игр(Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-725, 191-726",
                    dateInterval: "30 Янв - 26 Фев",
                    link:
                        "https://events.webinar.ru/19404071/628485520/session/1396595827"
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2611"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-726",
                    dateInterval: "03 Апр - 22 Апр",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-725",
                    dateInterval: "30 Май",
                    link: null
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "20 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-725, 191-726",
                    dateInterval: "30 Янв - 26 Фев",
                    link:
                        "https://events.webinar.ru/19403429/1471522920/session/1555386623"
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2611"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-726",
                    dateInterval: "03 Апр - 22 Апр",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-725",
                    dateInterval: "30 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "20 Июн",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2611"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-725",
                    dateInterval: "03 Апр - 22 Апр",
                    link: null
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "20 Июн",
                    link: null
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр2611"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Хуснулина Дария Рашитовна"
                    ],
                    groups: "201-726",
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                }
            ]
        },
        Wednesday: {
            lessons: [
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724, 201-725, 201-726",
                    dateInterval: "30 Янв - 02 Апр",
                    link:
                        "https://events.webinar.ru/19401575/1000218454/session/257940913"
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724, 201-725, 201-726",
                    dateInterval: "03 Апр - 28 Май",
                    link:
                        "https://events.webinar.ru/57009101/2095179583/session/1581620826"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "21 Июн",
                    link: null
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724, 201-725, 201-726",
                    dateInterval: "30 Янв - 02 Апр",
                    link:
                        "https://events.webinar.ru/19404071/448865381/session/1407614140"
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724, 201-725, 201-726",
                    dateInterval: "03 Апр - 28 Май",
                    link:
                        "https://events.webinar.ru/19396587/1158908581/session/1385020964"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "21 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(Экзамен)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-725",
                    dateInterval: "12 Апр",
                    link: "https://events.webinar.ru/19401575/959259577/session/150351928"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "21 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(Экзамен)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-725",
                    dateInterval: "12 Апр",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Thursday: {
            lessons: [
                {
                    name: "Разработка онлайн игр(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-726",
                    dateInterval: "13 Апр",
                    link:
                        "https://events.webinar.ru/19401261/396465021/session/1391493593"
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724",
                    dateInterval: "20 Апр",
                    link: "https://events.webinar.ru/19401461/293793176/session/567670288"
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-725",
                    dateInterval: "27 Апр",
                    link:
                        "https://events.webinar.ru/19396587/110467346/session/1837939830"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "22 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "191-726",
                    dateInterval: "13 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-724",
                    dateInterval: "20 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-725",
                    dateInterval: "27 Апр",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "22 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2507"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Худайбердиева Гулшат"
                    ],
                    groups: "191-725",
                    dateInterval: "30 Янв - 26 Мар",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-724",
                    dateInterval: "22 Май - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "22 Июн",
                    link: null
                },
                {
                    name: "Разработка онлайн игр(Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр2559"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Худайбердиева Гулшат"
                    ],
                    groups: "191-726",
                    dateInterval: "30 Янв - 26 Мар",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-724",
                    dateInterval: "22 Май - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Информационные технологии(Зачет)",
                    timeInterval: "19:50 - 21:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "192-721",
                    dateInterval: "02 Мар",
                    link:
                        "https://events.webinar.ru/19404285/870853419/session/1273691818"
                }
            ]
        },
        Friday: {
            lessons: [
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2558"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Хуснулина Дария Рашитовна"
                    ],
                    groups: "201-724",
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2558"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-724",
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "23 Июн",
                    link: null
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2558"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Хуснулина Дария Рашитовна"
                    ],
                    groups: "201-724",
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2558"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-724",
                    dateInterval: "03 Апр - 28 Май",
                    link: null
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "23 Июн",
                    link: null
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2507"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Хуснулина Дария Рашитовна"
                    ],
                    groups: "201-725",
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр ВЦ 3 (2555)"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Суслов  Михаил Вадимович"
                    ],
                    groups: "201-725",
                    dateInterval: "03 Апр - 22 Апр",
                    link: null
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "23 Июн",
                    link: null
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр2558"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Хуснулина Дария Рашитовна"
                    ],
                    groups: "201-725",
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Лаб. работа)",
                    timeInterval: "16:10 - 17:40",
                    place: "Прянишникова",
                    rooms: ["Пр ВЦ 1 (2553)"],
                    teachers: [
                        "Булатников Евгений Владиславович",
                        "Хуснулина Дария Рашитовна"
                    ],
                    groups: "201-726",
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                }
            ]
        },
        Saturday: {
            lessons: [
                {
                    name: "ВКР(Другое)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "24 Июн",
                    link: null
                },
                {
                    name: "Моделирование в игровой компьютерной индустрии(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-726",
                    dateInterval: "27 Май",
                    link:
                        "https://events.webinar.ru/19399433/1239390276/session/1805397976"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "24 Июн",
                    link: null
                },
                {
                    name:
                        "Инструментальные средства игровой компьютерной индустрии(Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Булатников Евгений Владиславович"],
                    groups: "201-726",
                    dateInterval: "27 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "ВКР(Другое)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2557"],
                    teachers: [
                        "Арсентьев Дмитрий Андреевич",
                        "Булатников Евгений Владиславович",
                        "Рябчикова Анна Валерьевна"
                    ],
                    groups: "",
                    dateInterval: "24 Июн",
                    link: null
                }
            ]
        }
    },
    Шурыгин: {
        Monday: {
            lessons: [
                {
                    name: "Информационные системы в медиаиндустрии(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721",
                    dateInterval: "10 Апр",
                    link: "https://events.webinar.ru/57009101/1730772937/session/1342018899"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-728",
                    dateInterval: "29 Май",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-728",
                    dateInterval: "29 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-724",
                    dateInterval: "29 Май",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-724",
                    dateInterval: "29 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лаб. работа)",
                    timeInterval: "18:20 - 19:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "192-721",
                    dateInterval: "15 Май - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лаб. работа)",
                    timeInterval: "19:50 - 21:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "192-721",
                    dateInterval: "15 Май - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Консультация)",
                    timeInterval: "19:50 - 21:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "202-721",
                    dateInterval: "05 Июн",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Tuesday: {
            lessons: [
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-722",
                    dateInterval: "30 Май",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-725",
                    dateInterval: "06 Июн",
                    link: null
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721",
                    dateInterval: "13 Июн",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-722",
                    dateInterval: "30 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-725",
                    dateInterval: "06 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721",
                    dateInterval: "13 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Инфокоммуникационные системы и сети(Лаб. работа)",
                    timeInterval: "12:20 - 13:50",
                    place: "Прянишникова",
                    rooms: ["Пр2815 а"],
                    teachers: [
                        "Шурыгин Владимир Николаевич",
                        "Байрамов  Эльмин  Вагифович"
                    ],
                    groups: "201-721",
                    dateInterval: "27 Мар - 28 Май",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-726",
                    dateInterval: "06 Июн",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Лаб. работа)",
                    timeInterval: "14:30 - 16:00",
                    place: "Прянишникова",
                    rooms: ["Пр2609"],
                    teachers: [
                        "Шурыгин Владимир Николаевич",
                        "Байрамов  Эльмин  Вагифович"
                    ],
                    groups: "201-721",
                    dateInterval: "27 Мар - 28 Май",
                    link: null
                },
                {
                    name: "Основы современных алгоритмов(Практика)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-371",
                    dateInterval: "30 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-726",
                    dateInterval: "06 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Практика эор)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-371",
                    dateInterval: "23 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Практика)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-371",
                    dateInterval: "30 Май",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Wednesday: {
            lessons: [
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-721",
                    dateInterval: "31 Май",
                    link: null
                },
                {
                    name: "Основы современных алгоритмов(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "221-721",
                    dateInterval: "07 Июн",
                    link: null
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-724",
                    dateInterval: "14 Июн",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-721",
                    dateInterval: "31 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-724",
                    dateInterval: "14 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Лекция)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721, 201-722, 201-723, 201-724, 201-725, 201-726",
                    dateInterval: "30 Янв - 28 Май",
                    link:
                        "https://events.webinar.ru/19396587/361237401/session/1114333057"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-727",
                    dateInterval: "31 Май",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721",
                    dateInterval: "07 Июн",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721, 201-722, 201-723, 201-724, 201-725, 201-726",
                    dateInterval: "30 Янв - 28 Май",
                    link:
                        "https://events.webinar.ru/19396587/1647758013/session/237248586"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-727",
                    dateInterval: "31 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721",
                    dateInterval: "07 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-726",
                    dateInterval: "14 Июн",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Консультация)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721, 201-722, 201-723, 201-724, 201-725, 201-726",
                    dateInterval: "31 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Консультация)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721, 201-722, 201-723, 201-724, 201-725, 201-726",
                    dateInterval: "07 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-726",
                    dateInterval: "14 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Лекция)",
                    timeInterval: "17:50 - 19:20",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-371, 223-372",
                    dateInterval: "17 Май",
                    link:
                        "https://events.webinar.ru/57009101/1568467521/session/1071661359"
                },
                {
                    name: "Основы современных алгоритмов(Лекция эор)",
                    timeInterval: "19:30 - 21:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-371, 223-372",
                    dateInterval: "17 Май",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Thursday: {
            lessons: [
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-724",
                    dateInterval: "08 Июн",
                    link: null
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-725",
                    dateInterval: "15 Июн",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-724",
                    dateInterval: "08 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-725",
                    dateInterval: "15 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-372",
                    dateInterval: "18 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Практика)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-372",
                    dateInterval: "25 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Экзамен)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-372",
                    dateInterval: "01 Июн",
                    link: null
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721",
                    dateInterval: "30 Янв - 02 Апр",
                    link: "https://events.webinar.ru/19404155/984419031/session/885240827"
                },
                {
                    name: "Основы современных алгоритмов(Экзамен)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-372",
                    dateInterval: "01 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лекция)",
                    timeInterval: "16:10 - 17:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-721",
                    dateInterval: "30 Янв - 02 Апр",
                    link:
                        "https://events.webinar.ru/19402063/2051035312/session/1830319184"
                },
                {
                    name: "Основы современных алгоритмов(Экзамен)",
                    timeInterval: "16:10 - 17:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-371",
                    dateInterval: "01 Июн",
                    link: null
                },
                {
                    name: "Технологии обработки информации(Лекция)",
                    timeInterval: "18:20 - 19:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "202-721",
                    dateInterval: "30 Янв - 26 Фев",
                    link:
                        "https://events.webinar.ru/19403825/1285628668/session/724344336"
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лекция)",
                    timeInterval: "18:20 - 19:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "192-721",
                    dateInterval: "06 Мар - 06 Май",
                    link:
                        "https://events.webinar.ru/57009101/545053200/session/1789370872"
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лаб. работа)",
                    timeInterval: "18:20 - 19:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "192-721",
                    dateInterval: "08 Май - 28 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Экзамен)",
                    timeInterval: "17:50 - 19:20",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-371",
                    dateInterval: "01 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "18:20 - 19:40",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "202-721",
                    dateInterval: "08 Июн",
                    link: null
                },
                {
                    name: "Технологии обработки информации(Лекция эор)",
                    timeInterval: "19:50 - 21:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "202-721",
                    dateInterval: "30 Янв - 26 Фев",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лаб. работа)",
                    timeInterval: "19:50 - 21:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "192-721",
                    dateInterval: "06 Мар - 20 Май",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Информационные системы в медиаиндустрии(Зачет)",
                    timeInterval: "19:50 - 21:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "192-721",
                    dateInterval: "25 Май",
                    link:
                        "https://events.webinar.ru/19399433/488669171/session/1826273709"
                }
            ]
        },
        Friday: {
            lessons: [
                {
                    name: "Информационные системы в медиаиндустрии(Лаб. работа)",
                    timeInterval: "9:00 - 10:30",
                    place: "Прянишникова",
                    rooms: ["Пр2815 б", "Пр2817 а"],
                    teachers: [
                        "Шурыгин Владимир Николаевич",
                        "Колодочкин Александр Алексеевич"
                    ],
                    groups: "201-721",
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-729",
                    dateInterval: "02 Июн",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-723",
                    dateInterval: "09 Июн",
                    link: null
                },
                {
                    name: "Объектно-ориентированное программирование(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "221-721",
                    dateInterval: "16 Июн",
                    link: null
                },
                {
                    name: "Информационные системы в медиаиндустрии(Лаб. работа)",
                    timeInterval: "10:40 - 12:10",
                    place: "Прянишникова",
                    rooms: ["Пр2815 б", "Пр2817 а"],
                    teachers: [
                        "Шурыгин Владимир Николаевич",
                        "Колодочкин Александр Алексеевич"
                    ],
                    groups: "201-721",
                    dateInterval: "30 Янв - 02 Апр",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-729",
                    dateInterval: "02 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-723",
                    dateInterval: "09 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-723",
                    dateInterval: "02 Июн",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-723",
                    dateInterval: "02 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-725",
                    dateInterval: "09 Июн",
                    link: null
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-723",
                    dateInterval: "16 Июн",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-725",
                    dateInterval: "09 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-723",
                    dateInterval: "16 Июн",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        },
        Saturday: {
            lessons: [
                {
                    name: "Технология кроссплатформенного программирования(Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups:
                        "211-721, 211-722, 211-723, 211-724, 211-725, 211-726, 211-727, 211-728, 211-729, 211-7210",
                    dateInterval: "30 Янв - 28 Май",
                    link: "https://events.webinar.ru/19399433/680944670/session/874640306"
                },
                {
                    name: "Основы современных алгоритмов(Лекция)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "221-721",
                    dateInterval: "29 Май - 04 Июн",
                    link: "https://events.webinar.ru/19402163/972619092/session/741406497"
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "9:00 - 10:30",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-722",
                    dateInterval: "10 Июн",
                    link: null
                },
                {
                    name: "Объектно-ориентированное программирование(Лекция)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "221-721",
                    dateInterval: "06 Фев - 04 Июн",
                    link:
                        "https://events.webinar.ru/19401177/1409992699/session/1291666384"
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-722",
                    dateInterval: "10 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "10:40 - 12:10",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-722",
                    dateInterval: "17 Июн",
                    link: null
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "12:20 - 13:50",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-7210",
                    dateInterval: "03 Июн",
                    link: null
                },
                {
                    name: "Объектно-ориентированное программирование(Консультация)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "221-721",
                    dateInterval: "10 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Технологии обработки информации(Экзамен)",
                    timeInterval: "12:20 - 13:50",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-722",
                    dateInterval: "17 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Лекция)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "221-721",
                    dateInterval: "06 Фев - 27 Май",
                    link:
                        "https://events.webinar.ru/19401177/1195025315/session/233265941"
                },
                {
                    name: "Технология кроссплатформенного программирования(Зачет)",
                    timeInterval: "14:30 - 16:00",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "211-7210",
                    dateInterval: "03 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "14:30 - 16:00",
                    place: "Webinar",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-726",
                    dateInterval: "10 Июн",
                    link: null
                },
                {
                    name: "Инфокоммуникационные системы и сети(Экзамен)",
                    timeInterval: "16:10 - 17:40",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "201-726",
                    dateInterval: "10 Июн",
                    link: "https://online.mospolytech.ru/"
                },
                {
                    name: "Основы современных алгоритмов(Практика эор)",
                    timeInterval: "17:50 - 19:20",
                    place: "Обучение LMS",
                    rooms: [],
                    teachers: ["Шурыгин Владимир Николаевич"],
                    groups: "223-372",
                    dateInterval: "20 Май",
                    link: "https://online.mospolytech.ru/"
                }
            ]
        }
    }
};
