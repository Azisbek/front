# Investment Consulting Projects

Современный лендинг для консалтинговой компании Investment Consulting Projects. Полнофункциональный одностраничный сайт с премиальным дизайном, анимациями и SEO-оптимизацией.

## Технологии

- **Next.js 13** (App Router) с TypeScript
- **Tailwind CSS** для стилизации
- **shadcn/ui** для UI компонентов
- **Framer Motion** для анимаций
- **React Hook Form + Zod** для валидации форм
- **Sonner** для уведомлений

## Начало работы

### Установка

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
npm run start
```

## Структура проекта

```
├── app/
│   ├── api/contact/        # API роут для обработки формы
│   ├── layout.tsx          # Корневой layout с мета-данными
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили и CSS переменные
├── components/
│   ├── ui/                 # Переиспользуемые UI компоненты (shadcn/ui)
│   ├── animated-section.tsx    # Компонент для scroll-reveal анимаций
│   ├── site-header.tsx         # Навигационный header
│   ├── hero-section.tsx        # Герой-блок
│   ├── about-section.tsx       # Секция "О нас"
│   ├── partners-section.tsx    # Партнеры и клиенты
│   ├── team-section.tsx        # Команда
│   ├── services-section.tsx    # Услуги
│   ├── insights-section.tsx    # Экспертное мнение
│   ├── contact-section.tsx     # Контакты и форма
│   └── site-footer.tsx         # Footer
├── content/
│   ├── team.ts             # Данные о членах команды
│   ├── services.ts         # Список услуг
│   ├── insights.ts         # Статьи экспертного мнения
│   └── partners.ts         # Партнеры и клиенты
├── lib/
│   ├── validation.ts       # Zod схемы для валидации
│   ├── json-ld.ts         # Генераторы JSON-LD для SEO
│   └── utils.ts           # Утилиты (cn helper)
└── public/                # Статические файлы
```

## Редактирование контента

### Команда

Отредактируйте файл `content/team.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ваше Имя',
    role: 'Должность',
    bio: 'Краткое описание',
    expertise: ['Навык 1', 'Навык 2'],
    linkedin: 'https://linkedin.com/in/yourprofile',
    image: 'URL изображения из Pexels'
  }
];
```

### Услуги

Отредактируйте файл `content/services.ts`:

```typescript
export const services: Service[] = [
  {
    id: 'service-id',
    title: 'Название услуги',
    description: 'Краткое описание',
    icon: 'Scale', // Имя иконки из lucide-react
    benefits: ['Преимущество 1', 'Преимущество 2']
  }
];
```

### Статьи и обзоры

Отредактируйте файл `content/insights.ts`:

```typescript
export const insights: Insight[] = [
  {
    id: '1',
    title: 'Заголовок статьи',
    excerpt: 'Краткое описание',
    date: '2025-09-30',
    tags: ['Тег 1', 'Тег 2'],
    image: 'URL изображения'
  }
];
```

### Контактная информация

Обновите контакты в компонентах:
- `components/contact-section.tsx` — форма и контактная информация
- `components/site-footer.tsx` — footer с контактами

## Настройка формы обратной связи

Форма обратной связи использует прямой API клиент (`lib/api.ts`) для отправки данных на Django бэкенд.

### Текущая конфигурация

Форма имеет встроенную защиту:
- **Honeypot** поле для защиты от ботов
- **Валидация** с помощью Zod на клиенте
- **Прямые запросы** к Django бэкенду через `apiClient.sendContactMessage()`

### Настройка API URL

Фронтенд обращается к бэкенду напрямую. Настройте переменную окружения:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

В продакшене укажите URL вашего Django бэкенда:

```bash
NEXT_PUBLIC_API_URL=https://your-backend-domain.com/api
```

### Обработка на бэкенде

Все запросы обрабатываются Django бэкендом через эндпоинт `/api/contact/message/`. 
Настройте обработку сообщений в `back/website/views.py` (ContactMessageCreateView).

## SEO

### Мета-теги

Обновите мета-данные в `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Ваш заголовок',
  description: 'Ваше описание',
  keywords: 'ключевые слова',
  // ...
};
```

### JSON-LD структурированные данные

Обновите схемы в `lib/json-ld.ts`:
- `getOrganizationSchema()` — данные компании
- `getServicesSchema()` — список услуг
- `getBreadcrumbSchema()` — навигационные хлебные крошки

## Цветовая схема

Цвета настраиваются через CSS переменные в `app/globals.css`:

```css
:root {
  --primary: 217 91% 60%;      /* Синий */
  --accent: 43 96% 56%;        /* Золотой */
  --background: 0 0% 100%;     /* Белый */
  --foreground: 222 47% 11%;   /* Темно-синий */
}
```

Контейнер настроен на максимальную ширину **1320px** в `tailwind.config.ts`.

## Анимации

Все анимации реализованы с помощью Framer Motion:
- **Scroll-reveal** — элементы появляются при прокрутке
- **Parallax** — фоновые эффекты в Hero секции
- **Hover эффекты** — на карточках команды и услуг
- **Smooth scroll** — плавная прокрутка к секциям

Анимации учитывают `prefers-reduced-motion` для доступности.

## Изображения

Все изображения загружаются с [Pexels](https://pexels.com) и оптимизируются через `next/image`.

Для замены изображений:
1. Найдите качественное фото на Pexels
2. Скопируйте URL в формате `https://images.pexels.com/photos/.../...?auto=compress&cs=tinysrgb&w=1200`
3. Обновите ссылки в контент-файлах

## Производительность

Проект оптимизирован для высокой производительности:
- ✅ Lighthouse Score ≥ 95
- ✅ Оптимизация изображений
- ✅ Code splitting
- ✅ Минимизация JavaScript
- ✅ Предзагрузка критических ресурсов

## Доступность

- ✅ Семантическая разметка HTML
- ✅ ARIA метки для интерактивных элементов
- ✅ Клавиатурная навигация
- ✅ Контрастность текста WCAG AA
- ✅ Alt-тексты для изображений
- ✅ Поддержка `prefers-reduced-motion`

## Браузерная совместимость

- ✅ Chrome (последние 2 версии)
- ✅ Firefox (последние 2 версии)
- ✅ Safari (последние 2 версии)
- ✅ Edge (последние 2 версии)

## Поддержка

Для вопросов и предложений обращайтесь:
- Email: info@investment-consulting.pro
- Телефон: +996 (XXX) XXX-XXX

## Лицензия

Все права защищены © 2025 Investment Consulting Projects
