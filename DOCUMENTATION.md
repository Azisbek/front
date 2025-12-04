# Документация проекта Investment Consulting Projects

## Обзор проекта

**Investment Consulting Projects (ICP)** — это корпоративный веб-сайт консалтинговой компании, специализирующейся на инвестиционном консультировании. Проект представляет собой современное одностраничное приложение (SPA), построенное на Next.js 13 с использованием App Router.

### Основные характеристики
- **Тип проекта**: Корпоративный лендинг
- **Технологический стек**: Next.js 13, React 18, TypeScript, Tailwind CSS
- **Архитектура**: Статический экспорт (Static Site Generation)
- **UI Framework**: Radix UI + shadcn/ui
- **Анимации**: Framer Motion
- **Валидация форм**: React Hook Form + Zod

## Архитектура проекта

### Структура файлов

```
/Users/azamat/Desktop/site/
├── app/                          # Next.js App Router
│   ├── api/contact/route.ts      # API endpoint для контактной формы
│   ├── globals.css               # Глобальные стили
│   ├── layout.tsx                # Корневой layout
│   └── page.tsx                  # Главная страница
├── components/                   # React компоненты
│   ├── ui/                       # UI компоненты (shadcn/ui)
│   ├── about-section.tsx         # Секция "О нас"
│   ├── animated-section.tsx      # Компонент анимации
│   ├── contact-section.tsx       # Секция контактов
│   ├── hero-section.tsx          # Главная секция
│   ├── insights-section.tsx      # Секция экспертных материалов
│   ├── partners-section.tsx      # Секция партнеров
│   ├── services-section.tsx      # Секция услуг
│   ├── site-footer.tsx           # Подвал сайта
│   ├── site-header.tsx           # Шапка сайта
│   └── team-section.tsx          # Секция команды
├── content/                      # Контентные данные
│   ├── insights.ts               # Данные экспертных материалов
│   ├── partners.ts               # Данные партнеров и клиентов
│   ├── services.ts               # Данные услуг
│   └── team.ts                   # Данные команды
├── hooks/                        # Пользовательские хуки
│   └── use-toast.ts              # Хук для уведомлений
├── lib/                          # Утилиты и библиотеки
│   ├── json-ld.ts                # Структурированные данные
│   ├── utils.ts                  # Общие утилиты
│   └── validation.ts             # Схемы валидации
└── [конфигурационные файлы]
```

## Технологический стек

### Основные технологии

#### Frontend Framework
- **Next.js 13.5.1** - React фреймворк с App Router
- **React 18.2.0** - Библиотека для создания пользовательских интерфейсов
- **TypeScript 5.2.2** - Типизированный JavaScript

#### Стилизация
- **Tailwind CSS 3.3.3** - Utility-first CSS фреймворк
- **tailwindcss-animate** - Анимации для Tailwind
- **class-variance-authority** - Управление вариантами классов

#### UI Компоненты
- **Radix UI** - Набор доступных UI примитивов
- **shadcn/ui** - Переиспользуемые компоненты на базе Radix UI
- **Lucide React** - Иконки

#### Анимации и взаимодействие
- **Framer Motion 12.23.22** - Библиотека анимаций
- **Embla Carousel** - Карусель

#### Формы и валидация
- **React Hook Form 7.53.0** - Управление формами
- **Zod 3.23.8** - Схемы валидации
- **@hookform/resolvers** - Интеграция с валидаторами

#### Дополнительные библиотеки
- **date-fns** - Работа с датами
- **sonner** - Уведомления
- **clsx + tailwind-merge** - Условные классы CSS

### Конфигурация

#### Next.js Configuration (`next.config.js`)
```javascript
const nextConfig = {
  output: "export",           // Статический экспорт
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ESLint при сборке
  },
  images: { unoptimized: true }, // Неоптимизированные изображения
};
```

#### TypeScript Configuration
- Строгий режим включен
- Поддержка JSX
- Алиасы путей: `@/*` → `./*`

#### Tailwind Configuration
- Темная тема через класс
- Кастомная цветовая палитра
- Анимации аккордеона
- Градиентные фоны

## Структура приложения

### App Router (Next.js 13)

#### Root Layout (`app/layout.tsx`)
- Настройка метаданных для SEO
- Подключение шрифта Inter с поддержкой кириллицы
- Интеграция компонента уведомлений (Toaster)
- Open Graph и Twitter метатеги

#### Главная страница (`app/page.tsx`)
Одностраничное приложение, состоящее из секций:
1. **SiteHeader** - Навигационная шапка
2. **HeroSection** - Главная секция с призывом к действию
3. **AboutSection** - О компании
4. **PartnersSection** - Партнеры и клиенты
5. **TeamSection** - Команда экспертов
6. **ServicesSection** - Услуги компании
7. **InsightsSection** - Экспертные материалы
8. **ContactSection** - Контактная форма
9. **SiteFooter** - Подвал сайта

### API Integration

#### Прямые запросы к Django бэкенду

Фронтенд использует прямой API клиент (`lib/api.ts`) для всех запросов к бэкенду.

- **API Base URL**: Настраивается через `NEXT_PUBLIC_API_URL` (по умолчанию `http://localhost:8000/api`)
- **Контактная форма**: Отправляет данные напрямую на `/api/contact/message/` через `apiClient.sendContactMessage()`
- **Валидация**: Zod на клиенте + Django на бэкенде
- **CORS**: Настроен на бэкенде для разрешения запросов с фронтенда

## Компоненты

### Основные секции

#### 1. SiteHeader
- **Файл**: `components/site-header.tsx`
- **Функциональность**:
  - Адаптивная навигация
  - Эффект прокрутки (изменение фона)
  - Мобильное меню
  - Плавная прокрутка к секциям

#### 2. HeroSection
- **Файл**: `components/hero-section.tsx`
- **Особенности**:
  - Анимации Framer Motion
  - Статистические показатели
  - Призывы к действию
  - Адаптивный дизайн

#### 3. AboutSection
- **Файл**: `components/about-section.tsx`
- **Содержание**:
  - Миссия и подход компании
  - Корпоративные ценности
  - Анимированные карточки

#### 4. ServicesSection
- **Файл**: `components/services-section.tsx`
- **Функциональность**:
  - Интерактивные карточки услуг
  - Модальные окна с подробностями
  - Hover эффекты
  - Динамические градиенты

#### 5. TeamSection
- **Файл**: `components/team-section.tsx`
- **Особенности**:
  - Карточки сотрудников
  - Ссылки на LinkedIn
  - Анимации при наведении

#### 6. ContactSection
- **Файл**: `components/contact-section.tsx`
- **Функциональность**:
  - Валидируемая контактная форма
  - Honeypot защита
  - Контактная информация
  - Социальные сети

### Утилитарные компоненты

#### AnimatedSection
- **Файл**: `components/animated-section.tsx`
- **Назначение**: Анимация появления секций при прокрутке
- **Технология**: Framer Motion + Intersection Observer

### UI Компоненты (shadcn/ui)
Полный набор переиспользуемых компонентов:
- **Формы**: Button, Input, Textarea, Checkbox, Label
- **Навигация**: Dialog, Sheet, Popover
- **Отображение данных**: Card, Badge, Avatar
- **Обратная связь**: Toast, Alert

## Контентная модель

### Услуги (`content/services.ts`)
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}
```

**Услуги компании** (11 направлений):
1. Правовое сопровождение инвестиций
2. Корпоративное право
3. Финансово-кредитные правоотношения
4. Due Diligence
5. Кредитный брокер
6. ESG консалтинг
7. Коммуникации с государственными органами
8. Управление человеческим капиталом
9. Управление налоговыми обязательствами
10. Управление инвестиционными проектами
11. Управление международными проектами

### Команда (`content/team.ts`)
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  image: string;
}
```

**Состав команды**: 4 ключевых эксперта с опытом в различных областях

### Партнеры (`content/partners.ts`)
- **Технологические партнеры**: Microsoft, AWS, Google Cloud, IBM, Oracle, SAP
- **Клиенты**: Siemens, Deutsche Bank, Volkswagen, Coca-Cola, Mercedes-Benz, BMW

### Экспертные материалы (`content/insights.ts`)
```typescript
interface Insight {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
}
```

**Тематики**: ESG, Due Diligence, налоги, корпоративное управление, IP, финансирование

## Библиотеки и утилиты

### Утилиты (`lib/utils.ts`)
- **cn()** - Функция для объединения CSS классов (clsx + tailwind-merge)

### Валидация (`lib/validation.ts`)
- **contactFormSchema** - Zod схема для контактной формы
- Валидация полей: имя, email, телефон, сообщение, согласие
- Honeypot защита

### SEO и структурированные данные (`lib/json-ld.ts`)
- **getOrganizationSchema()** - Schema.org разметка организации
- **getServicesSchema()** - Разметка услуг
- **getBreadcrumbSchema()** - Навигационные цепочки

### Хуки (`hooks/use-toast.ts`)
- Система уведомлений на базе Radix UI Toast
- Управление состоянием через reducer
- Автоматическое удаление уведомлений

## Стилизация и дизайн

### Цветовая палитра
- **Primary**: Синий (#3B82F6)
- **Accent**: Янтарный (#F59E0B)
- **Фон**: Белый/Темно-серый
- **Текст**: Slate оттенки

### Типографика
- **Шрифт**: Inter (Google Fonts)
- **Поддержка**: Latin + Cyrillic
- **Размеры**: От text-sm до text-7xl

### Анимации
- **Библиотека**: Framer Motion
- **Типы**: Появление, hover эффекты, переходы
- **Производительность**: Оптимизированные анимации

### Адаптивность
- **Подход**: Mobile-first
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Компоненты**: Полностью адаптивные

## API и бэкенд

### Contact API
- **Endpoint**: `/api/contact`
- **Метод**: POST
- **Rate Limiting**: 3 запроса/час с IP
- **Валидация**: Zod схемы
- **Безопасность**: Honeypot, CORS

### Обработка форм
- **Frontend**: React Hook Form
- **Валидация**: Zod
- **UX**: Мгновенная валидация, уведомления

## SEO и производительность

### SEO оптимизация
- **Метатеги**: Title, description, keywords
- **Open Graph**: Полная поддержка
- **Twitter Cards**: Summary large image
- **Структурированные данные**: JSON-LD разметка
- **Языковая поддержка**: ru-RU

### Производительность
- **Статический экспорт**: Быстрая загрузка
- **Оптимизация изображений**: Next.js Image (отключена для экспорта)
- **Code splitting**: Автоматическое разделение кода
- **CSS**: Tailwind с purging неиспользуемых стилей

## Развертывание

### Конфигурация сборки
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

### Статический экспорт
- **Режим**: `output: "export"`
- **Результат**: Статические HTML/CSS/JS файлы
- **Хостинг**: Любой статический хостинг (Netlify, Vercel, GitHub Pages)

## Безопасность

### Защита от спама
- **Rate Limiting**: Ограничение запросов по IP
- **Honeypot**: Скрытое поле для ботов
- **Валидация**: Строгая проверка данных

### Конфиденциальность
- **GDPR**: Согласие на обработку данных
- **Логирование**: Минимальное логирование пользовательских данных

## Поддержка и расширение

### Добавление нового контента

#### Новая услуга
1. Добавить объект в `content/services.ts`
2. Добавить соответствующую иконку в `iconMap`
3. Обновить JSON-LD схему при необходимости

#### Новый член команды
1. Добавить объект в `content/team.ts`
2. Загрузить изображение
3. Указать LinkedIn профиль

#### Новый экспертный материал
1. Добавить объект в `content/insights.ts`
2. Загрузить изображение статьи
3. Указать теги и дату

### Кастомизация дизайна
- **Цвета**: Изменить в `tailwind.config.ts` и `globals.css`
- **Шрифты**: Обновить в `layout.tsx`
- **Анимации**: Настроить в компонентах с Framer Motion

### Добавление новых секций
1. Создать компонент в `components/`
2. Добавить в `app/page.tsx`
3. Обновить навигацию в `site-header.tsx`
4. Добавить в `site-footer.tsx` при необходимости

## Заключение

Проект представляет собой современное, высокопроизводительное веб-приложение с отличным пользовательским опытом. Архитектура позволяет легко масштабировать и поддерживать проект, а использование современных технологий обеспечивает высокую производительность и SEO-оптимизацию.

### Ключевые преимущества:
- ✅ Современный технологический стек
- ✅ Полная типизация TypeScript
- ✅ Адаптивный дизайн
- ✅ SEO оптимизация
- ✅ Высокая производительность
- ✅ Безопасность
- ✅ Легкость поддержки и расширения

---

*Документация создана на основе анализа кодовой базы проекта Investment Consulting Projects*
