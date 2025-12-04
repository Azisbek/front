export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
}

export const insights: Insight[] = [
  {
    id: '1',
    title: 'ESG-факторы: как влияют на стоимость капитала в регионе',
    excerpt: 'Анализ влияния ESG-критериев на оценку инвестиционной привлекательности компаний в странах Центральной Азии',
    date: '2025-09-15',
    tags: ['ESG', 'Инвестиции', 'Устойчивое развитие'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '2',
    title: 'Due Diligence 2.0: что реально проверяют инвесторы',
    excerpt: 'Современные подходы к комплексной проверке объектов инвестирования: от финансов до киберрисков',
    date: '2025-09-10',
    tags: ['Due Diligence', 'Риск-менеджмент', 'Инвестиции'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '3',
    title: 'Управление налоговыми рисками при международной экспансии',
    excerpt: 'Ключевые аспекты налогового планирования при выходе на новые рынки и организации трансграничных операций',
    date: '2025-09-05',
    tags: ['Налоги', 'Международный бизнес', 'Риски'],
    image: 'https://images.pexels.com/photos/7688165/pexels-photo-7688165.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '4',
    title: 'Тренды корпоративного управления 2025',
    excerpt: 'Как меняются подходы к корпоративному управлению в условиях цифровизации и глобальных вызовов',
    date: '2025-08-28',
    tags: ['Корпоративное управление', 'Тренды', 'Цифровизация'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '5',
    title: 'Защита интеллектуальной собственности в цифровую эпоху',
    excerpt: 'Новые вызовы и инструменты защиты IP в условиях развития AI и цифровых технологий',
    date: '2025-08-20',
    tags: ['IP', 'Цифровизация', 'Право'],
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '6',
    title: 'Альтернативные источники финансирования для стартапов',
    excerpt: 'Обзор современных инструментов привлечения капитала: от венчура до краудфандинга',
    date: '2025-08-12',
    tags: ['Финансирование', 'Стартапы', 'Инвестиции'],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];
