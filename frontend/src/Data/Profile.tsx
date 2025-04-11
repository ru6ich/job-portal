import { IconBriefcase,  IconMapPin } from "@tabler/icons-react";

const fields=[
    {label:"Вакансия",placeholder:"Введите название вакансии", options:['Дизайнер', 'Разработчик', 'Продакт менеджер', 'Маркетолог', 'Big Data Специалист', 'Менеджер по продажам', 'Автор контента', 'Поддержка пользователей'], value:"Разработчик ПО", leftSection:IconBriefcase},
    {label:"Компания",placeholder:"Введите название компании", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'],value:"Google", leftSection:IconBriefcase},
    {label:"Локация",placeholder:"Введите локацию", options:['Самара', 'Москва', 'Санкт-Петербург', 'Краснодар', 'Лондон', 'Токио', 'Сидней', 'Торонто'], leftSection:IconMapPin}
]
export default fields;