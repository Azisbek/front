# Шрифты и типографика проекта

## Установленные шрифты

### 1. **Inter** (`font-sans`) - Основной шрифт
- **Использование**: Основной текст, интерфейс
- **Поддержка**: Latin, Cyrillic
- **CSS класс**: `font-sans`
- **CSS переменная**: `--font-inter`

### 2. **Playfair Display** (`font-serif`) - Элегантный serif
- **Использование**: Акцентные заголовки, цитаты
- **Поддержка**: Latin, Cyrillic  
- **CSS класс**: `font-serif`
- **CSS переменная**: `--font-playfair`

### 3. **Poppins** (`font-display`) - Дисплейный шрифт
- **Использование**: Кнопки, акценты
- **Поддержка**: Latin
- **Веса**: 300, 400, 500, 600, 700
- **CSS класс**: `font-display`
- **CSS переменная**: `--font-poppins`

### 4. **Montserrat** (`font-heading`) - Заголовки
- **Использование**: Основные заголовки
- **Поддержка**: Latin, Cyrillic
- **Веса**: 300, 400, 500, 600, 700, 800
- **CSS класс**: `font-heading`
- **CSS переменная**: `--font-montserrat`

### 5. **Source Sans 3** (`font-body`) - Текст тела
- **Использование**: Основной текст, параграфы
- **Поддержка**: Latin, Cyrillic
- **Веса**: 300, 400, 500, 600, 700
- **CSS класс**: `font-body`
- **CSS переменная**: `--font-source-sans`

### 6. **JetBrains Mono** (`font-mono`) - Моноширинный
- **Использование**: Код, технические данные
- **Поддержка**: Latin, Cyrillic
- **Веса**: 300, 400, 500, 600, 700
- **CSS класс**: `font-mono`
- **CSS переменная**: `--font-jetbrains-mono`

## Типографические утилиты

### Базовые стили заголовков
```css
h1 { @apply text-4xl md:text-5xl lg:text-6xl font-bold; }
h2 { @apply text-3xl md:text-4xl lg:text-5xl font-bold; }
h3 { @apply text-2xl md:text-3xl lg:text-4xl font-semibold; }
h4 { @apply text-xl md:text-2xl lg:text-3xl font-semibold; }
h5 { @apply text-lg md:text-xl lg:text-2xl font-medium; }
h6 { @apply text-base md:text-lg lg:text-xl font-medium; }
```

### Специальные утилиты

#### Текстовые обертки
- `.text-balance` - Балансированный перенос строк
- `.text-pretty` - Красивый перенос строк

#### Настройки шрифтов
- `.font-feature-default` - Стандартные возможности шрифта
- `.font-feature-numbers` - Табличные цифры
- `.font-feature-oldstyle` - Старостильные цифры

#### Межбуквенные интервалы
- `.letter-spacing-tight` - Сжатый (-0.05em)
- `.letter-spacing-snug` - Плотный (-0.025em)
- `.letter-spacing-relaxed` - Свободный (0.025em)
- `.letter-spacing-loose` - Широкий (0.05em)

#### Эффекты
- `.text-gradient` - Анимированный градиентный текст
- `.text-shadow-sm` - Малая тень
- `.text-shadow` - Обычная тень
- `.text-shadow-lg` - Большая тень

## Примеры использования

### Заголовки
```jsx
<h1 className="font-heading text-balance letter-spacing-snug">
  Основной заголовок
</h1>

<h2 className="font-heading text-gradient">
  Заголовок с градиентом
</h2>
```

### Текст
```jsx
<p className="font-body text-pretty leading-relaxed">
  Основной текст параграфа
</p>

<p className="font-serif text-lg">
  Элегантный текст
</p>
```

### Акценты
```jsx
<span className="font-display font-semibold">
  Акцентный текст
</span>

<code className="font-mono font-feature-numbers">
  Код или числа
</code>
```

### Кнопки
```jsx
<button className="font-heading font-semibold letter-spacing-snug">
  Кнопка
</button>
```

## Рекомендации по использованию

1. **Заголовки**: Используйте `font-heading` (Montserrat) для всех заголовков
2. **Основной текст**: Используйте `font-body` (Source Sans 3) для параграфов
3. **Навигация**: Используйте `font-body` для навигационных элементов
4. **Акценты**: Используйте `font-serif` (Playfair Display) для элегантных акцентов
5. **Кнопки**: Используйте `font-display` (Poppins) или `font-heading` для кнопок
6. **Код**: Используйте `font-mono` (JetBrains Mono) для всего кода

## Настройки производительности

Все шрифты загружаются с:
- `display: 'swap'` - для быстрого отображения
- Поддержка кириллицы где необходимо
- Оптимизированные веса шрифтов
- Font feature settings для лучшей типографики
