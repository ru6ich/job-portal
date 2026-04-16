# Job Portal

Учебный full-stack проект портала вакансий с разделением на frontend и backend.

Проект объединяет клиентское приложение на **React + TypeScript** и серверное приложение на **Spring Boot + MongoDB**. Основная идея — реализовать базовые сценарии для соискателей и работодателей: регистрацию, вход, подтверждение email через OTP, работу с профилем, а также интерфейсы для поиска вакансий, поиска кандидатов и взаимодействия с публикациями.

## Что это за проект

`job-portal` — это учебный pet-проект, в котором я практиковался в:

- разработке full-stack приложения;
- построении frontend на React;
- создании backend на Spring Boot;
- работе с MongoDB;
- проектировании DTO, сущностей, сервисов и REST API;
- разделении приложения по ролям пользователя и бизнес-сценариям.

## Основные возможности

### Backend
На текущий момент в backend реализованы следующие сценарии:

- регистрация пользователя;
- вход в систему;
- смена пароля;
- отправка OTP-кода на email;
- проверка OTP-кода;
- получение профиля пользователя;
- обновление профиля пользователя.

В проекте предусмотрены два типа аккаунтов:

- `APPLICANT` — соискатель;
- `EMPLOYER` — работодатель.

При регистрации создается пользователь и связанный с ним профиль.

### Frontend
Во frontend-проекте подготовлены отдельные модули и страницы для основных пользовательских сценариев:

- главная страница;
- регистрация и вход;
- поиск вакансий;
- поиск кандидатов;
- профиль пользователя;
- страница компании;
- страница кандидата;
- публикация вакансии;
- просмотр опубликованных вакансий;
- отклик на вакансию;
- история откликов / активности.

## Технологии

### Frontend
- React
- TypeScript
- Mantine
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS

### Backend
- Java 21
- Spring Boot 3
- Spring Web
- Spring Data MongoDB
- Spring Validation
- Spring Security
- Spring Mail
- Lombok
- Maven

### База данных
- MongoDB

## Структура репозитория

```text
job-portal/
├── backend/   # серверная часть на Spring Boot
└── frontend/  # клиентская часть на React + TypeScript
```

### Структура backend

```text
backend/src/main/java/com/jobportal/backend/
├── api/
├── dto/
├── entity/
├── exception/
├── repository/
├── service/
├── utility/
├── BackendApplication.java
└── SecurityConfig.java
```

Кратко по слоям:

- `api` — REST API контроллеры;
- `dto` — объекты для передачи данных между слоями;
- `entity` — сущности MongoDB;
- `repository` — слой доступа к данным;
- `service` — бизнес-логика;
- `exception` — обработка ошибок;
- `utility` — вспомогательные классы и служебная логика.

### Структура frontend

```text
frontend/src/
├── ApplyJob/
├── CompanyProfile/
├── Data/
├── FindJobs/
├── FindTalent/
├── Footer/
├── Header/
├── JobDesc/
├── JobHistory/
├── LandingPage/
├── Pages/
├── PostJob/
├── PostedJob/
├── Profile/
├── Services/
├── SignUpLogin/
├── Slices/
├── TalentProfile/
├── App.tsx
└── Store.tsx
```

Такое разбиение позволяет держать UI и бизнес-сценарии по отдельным директориям, а состояние приложения — в Redux slices.

## API

### Пользователи

- `POST /users/register` — регистрация пользователя;
- `POST /users/login` — вход в систему;
- `POST /users/changePass` — смена пароля;
- `POST /users/sendOtp/{email}` — отправка OTP-кода на email;
- `GET /users/verifyOtp/{email}/{otp}` — проверка OTP-кода.

### Профили

- `GET /profiles/get/{id}` — получить профиль по id;
- `PUT /profiles/update` — обновить профиль.

## Модель данных

### Пользователь
Пользователь содержит:

- `id`
- `name`
- `email`
- `password`
- `accountType`
- `profileId`

### Профиль
Профиль пользователя содержит:

- `id`
- `email`
- `jobTitle`
- `company`
- `location`
- `about`
- `picture`
- `skills`
- `experiences`
- `certifications`

## Запуск проекта

### Требования

Для запуска понадобятся:

- **Java 21**
- **Node.js** и **npm**
- **MongoDB**

## Запуск backend

Перейдите в папку backend:

```bash
cd backend
```

Запустите приложение:

```bash
./mvnw spring-boot:run
```

По умолчанию backend запускается на порту `8080`.

## Запуск frontend

В отдельном терминале:

```bash
cd frontend
npm install
npm start
```

По умолчанию frontend запускается на порту `3000`.

## Конфигурация backend

Сейчас backend использует настройки MongoDB и SMTP через `application.properties`.

Для нормальной рабочей версии проекта лучше хранить конфигурацию через **переменные окружения** или локальный конфигурационный файл, который не попадает в Git.

Пример безопасной конфигурации:

```properties
spring.application.name=backend
spring.data.mongodb.auto-index-creation=true
spring.data.mongodb.uri=${MONGODB_URI}
server.port=8080

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=${MAIL_USERNAME}
spring.mail.password=${MAIL_PASSWORD}
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

## Что можно улучшить дальше

Следующие шаги по развитию проекта:

- добавить JWT-аутентификацию и полноценную авторизацию;
- ограничить доступ к endpoint'ам по ролям;
- завершить и связать backend-сценарии вакансий и откликов;
- добавить валидацию на все ключевые сценарии;
- покрыть backend тестами;
- вынести конфигурацию и секреты в environment variables;
- добавить Docker / Docker Compose для локального запуска;
- добавить CI для сборки frontend и backend.

## Что я отрабатывал в этом проекте

В этом проекте я практиковался в следующих вещах:

- full-stack разработка;
- организация монорепозитория с frontend и backend;
- проектирование REST API;
- работа с MongoDB через Spring Data;
- валидация входных данных;
- отправка email и OTP-подтверждение;
- построение frontend-интерфейсов под разные пользовательские роли;
- работа с глобальным состоянием через Redux Toolkit.

## Статус проекта

Проект учебный и находится в стадии развития. Уже реализована базовая пользовательская логика и структура приложения, а часть сценариев можно расширять дальше до более полноценного production-like решения.
