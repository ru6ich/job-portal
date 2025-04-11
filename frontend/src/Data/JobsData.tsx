import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
    { title: "Вакансия", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Локация", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Опыт", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
    { title: "Тип работы", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
];

const jobList = [
    {
      jobTitle: "Дизайнер продукта",
      company: "Meta",
      applicants: 25,
      experience: "Начальный уровень",
      jobType: "Фуллтайм",
      location: "Самара",
      package: "250 тыс. руб.",
      postedDaysAgo: 12,
      description: "Компания Meta ищет дизайнера продуктов в нашу команду. Вы будете работать над созданием ориентированных на пользователя интерфейсов для нашей платформы блокчейн-кошельков. Это отличная возможность для дизайнеров начального уровня повысить свою квалификацию в динамичной среде.."
    },
    {
      jobTitle: "UX Дизайнер",
      company: "Netflix",
      applicants: 14,
      experience: "Эксперт",
      jobType: "Частичная занятость",
      location: "Москва",
      package: "320 тыс.руб.",
      postedDaysAgo: 5,
      description: "Компания Netflix ищет старшего UX-дизайнера для улучшения пользовательского опыта на платформах потокового вещания. Идеальные кандидаты будут обладать обширным опытом в области исследования пользователей и проектирования взаимодействия, помогая нам предоставлять увлекательный контент для нашей глобальной аудитории."
    },
    {
      jobTitle: "Дизайнер продукта",
      company: "Microsoft",
      applicants: 58,
      experience: "Уверенный",
      jobType: "Фуллтайм",
      location: "Удаленная работа",
      package: "350 тыс. руб.",
      postedDaysAgo: 4,
      description: "Присоединяйтесь к Microsoft в качестве дизайнера продуктов и участвуйте в работе нашей новой студии Lightspeed LA. Мы ищем дизайнеров, способных создавать интуитивно понятные и убедительные игровые решения. Это удаленная должность, обеспечивающая гибкость и возможность работать с ведущей технологической компанией."
    },
    {
      jobTitle: "Дизайнер продукта",
      company: "Adobe",
      applicants: 23,
      experience: "Эксперт",
      jobType: "Частичная занятость",
      location: "Москва",
      package: "330 тыс. руб.",
      postedDaysAgo: 22,
      description: "Компания Adobe ищет дизайнера продуктов на неполный рабочий день, чтобы помочь нам улучшить пользовательский опыт. Вы будете работать в тесном сотрудничестве с нашей командой над разработкой функций, которые сделают нашу платформу более увлекательной и удобной для пользователей. Эта роль идеально подходит для опытных дизайнеров, которым нужен гибкий график работы."
    },
    {
      jobTitle: "Бэкенд разработчик",
      company: "Google",
      applicants: 21,
      experience: "Начальный уровень",
      jobType: "Фуллтайм",
      location: "Санкт-Петербург",
      package: "380 тыс. руб.",
      postedDaysAgo: 8,
      description: "Компания Google приглашает на работу разработчика бэкенда, который присоединится к нашей команде в Санкт-Петербурге. Вы будете отвечать за разработку масштабируемых бэкенд-систем, которые обеспечивают работу наших сервисов. Эта роль требует сильных навыков решения проблем и опыта работы с современными технологиями бэкенда."
    },
    {
      jobTitle: "SMM Менеджер",
      company: "Spotify",
      applicants: 73,
      experience: "Уверенный",
      jobType: "Фуллтайм",
      location: "Москва",
      package: "340 тыс. руб.",
      postedDaysAgo: 8,
      description: "Spotify ищет SMM-менеджера для руководства маркетинговой деятельностью в социальных сетях в Дели. Вы будете создавать и управлять кампаниями по продвижению нашего сервиса потокового вещания музыки, взаимодействовать с аудиторией и стимулировать рост. Эта роль идеально подходит для креативных маркетологов, увлеченных музыкой."
    },
    {
      jobTitle: "Фронтенд Разработчик",
      company: "Amazon",
      applicants: 50,
      experience: "Уверенный",
      jobType: "Фуллтайм",
      location: "Самара",
      package: "360 тыс. руб.",
      postedDaysAgo: 10,
      description: "Компания Amazon ищет разработчика фронтенда для создания и поддержки наших приложений, ориентированных на клиентов. Вы будете работать в динамичной команде над созданием удобных и отзывчивых веб-приложений."
    },
    {
      jobTitle: "iOS Разработчик",
      company: "Apple",
      applicants: 30,
      experience: "Эксперт",
      jobType: "Фуллтайм",
      location: "Москва",
      package: "420 тыс. руб.",
      postedDaysAgo: 7,
      description: "Компания Apple ищет iOS-разработчика в нашу команду в Москве. Вы будете заниматься разработкой передовых приложений для устройств на базе iOS, обеспечивая высокую производительность и исключительный пользовательский опыт."
    }
  ];

  export {dropdownData,jobList};