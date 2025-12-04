export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Иван Петров',
    role: 'Руководитель практики корпоративного права',
    bio: '12+ лет опыта в корпоративном праве, специализация на M&A, интеллектуальной собственности и судебных спорах',
    expertise: ['M&A', 'Интеллектуальная собственность', 'Судебные споры', 'Корпоративное управление'],
    linkedin: '#',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Елена Соколова',
    role: 'Партнер, практика инвестиций',
    bio: 'Эксперт в структурировании инвестиционных сделок и международном финансировании',
    expertise: ['Инвестиции', 'Due Diligence', 'Финансовое право', 'Международное право'],
    linkedin: '#',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Дмитрий Волков',
    role: 'Руководитель направления ESG',
    bio: 'Специалист по устойчивому развитию и корпоративной ответственности, опыт работы с международными стандартами',
    expertise: ['ESG', 'Устойчивое развитие', 'Корпоративная ответственность', 'Международные стандарты'],
    linkedin: '#',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Анна Михайлова',
    role: 'Руководитель практики налогов',
    bio: 'Специалист по налоговому планированию и оптимизации налоговых обязательств в международных структурах',
    expertise: ['Налоговое планирование', 'Международное налогообложение', 'Налоговые споры', 'Трансфертное ценообразование'],
    linkedin: '#',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
