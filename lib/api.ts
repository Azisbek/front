// API клиент для взаимодействия с Django бэкендом

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Типы данных, соответствующие Django моделям
export interface HeroSection {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  background_image?: string;
  cta_text?: string;
  cta_link?: string;
  order: number;
}

export interface AboutSection {
  id: number;
  title: string;
  description: string;
  image?: string;
  mission?: string;
  vision?: string;
  values?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo?: string;
  website?: string;
  description?: string;
  order: number;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio?: string;
  photo?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  order: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  short_description?: string;
  icon?: string;
  price?: string;
  features?: string;
  features_list: string[];
  is_featured: boolean;
  order: number;
}

export interface InsightCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Insight {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featured_image?: string;
  category: InsightCategory;
  author: string;
  tags: string[];
  published_date: string;
  updated_date?: string;
  is_featured: boolean;
  views: number;
}

export interface ContactInfo {
  id: number;
  company_name: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  working_hours?: string;
  map_embed?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface WebsiteData {
  hero: HeroSection[];
  about: AboutSection | null;
  partners: Partner[];
  team: TeamMember[];
  services: Service[];
  insights: Insight[];
  contact: ContactInfo | null;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}

export interface ApplicationForm {
  full_name: string;
  phone: string;
  message: string;
}

// Функции для работы с API
class ApiClient {
  private baseUrl: string;
  private backendBaseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    // Получаем базовый URL бэкенда (без /api)
    this.backendBaseUrl = baseUrl.replace('/api', '');
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        cache: 'no-store', // Отключаем кеширование для получения свежих данных
        ...options,
      });

      if (!response.ok) {
        // Пытаемся получить детали ошибки из ответа
        let errorMessage = `API request failed: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.json();
          if (errorData.detail || errorData.message || errorData.error) {
            errorMessage = errorData.detail || errorData.message || errorData.error;
          }
        } catch (e) {
          // Если не удалось распарсить JSON, используем стандартное сообщение
        }
        throw new Error(errorMessage);
      }

      return response.json();
    } catch (error) {
      console.error('API Request Error:', {
        url,
        method: options?.method || 'GET',
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }

  // Утилита для получения полного URL изображения
  getImageUrl(imagePath: string | undefined | null): string {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    return `${this.backendBaseUrl}${imagePath}`;
  }

  // Получение всех данных сайта одним запросом
  async getWebsiteData(): Promise<WebsiteData> {
    return this.request<WebsiteData>('/website-data/');
  }

  // Отдельные эндпоинты
  async getHeroSections(): Promise<HeroSection[]> {
    return this.request<HeroSection[]>('/hero/');
  }

  async getAboutSection(): Promise<AboutSection> {
    return this.request<AboutSection>('/about/');
  }

  async getPartners(): Promise<Partner[]> {
    return this.request<Partner[]>('/partners/');
  }

  async getTeam(): Promise<TeamMember[]> {
    return this.request<TeamMember[]>('/team/');
  }

  async getServices(): Promise<Service[]> {
    return this.request<Service[]>('/services/');
  }

  async getFeaturedServices(): Promise<Service[]> {
    return this.request<Service[]>('/services/featured/');
  }

  async getInsightCategories(): Promise<InsightCategory[]> {
    return this.request<InsightCategory[]>('/insights/categories/');
  }

  async getInsightTags(): Promise<string[]> {
    const response = await this.request<{ tags: string[] }>('/insights/tags/');
    return response.tags;
  }

  async getInsights(params?: { category?: string; tag?: string; search?: string; featured?: boolean }): Promise<Insight[]> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.tag) searchParams.append('tag', params.tag);
    if (params?.search) searchParams.append('search', params.search);
    if (params?.featured) searchParams.append('featured', 'true');
    
    const query = searchParams.toString();
    return this.request<Insight[]>(`/insights/${query ? `?${query}` : ''}`);
  }

  async getInsightBySlug(slug: string): Promise<Insight> {
    return this.request<Insight>(`/insights/${slug}/`);
  }

  async getContactInfo(): Promise<ContactInfo> {
    return this.request<ContactInfo>('/contact/');
  }

  // Отправка сообщений
  async sendContactMessage(data: ContactMessage): Promise<{ message: string }> {
    return this.request<{ message: string }>('/contact/message/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async sendApplicationForm(data: ApplicationForm): Promise<{ message: string; id: number }> {
    return this.request<{ message: string; id: number }>('/application/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

// Экспортируем экземпляр клиента
export const apiClient = new ApiClient();

// Хуки для использования в React компонентах
export const useWebsiteData = () => {
  return apiClient.getWebsiteData();
};

// Утилиты для преобразования данных
export const mapServiceToFrontendFormat = (service: Service) => ({
  id: service.id.toString(),
  title: service.title,
  description: service.description,
  icon: 'Scale', // Можно добавить маппинг иконок
  benefits: service.features_list || [],
});

// Утилита для получения полного URL изображения
const getImageUrl = (imagePath: string | undefined | null, fallback: string): string => {
  if (!imagePath) return fallback;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  const backendBaseUrl = API_BASE_URL.replace('/api', '');
  return `${backendBaseUrl}${imagePath}`;
};

export const mapTeamMemberToFrontendFormat = (member: TeamMember) => {
  return {
    id: member.id.toString(),
    name: member.name,
    role: member.position,
    bio: member.bio || '',
    expertise: [], // Можно добавить поле expertise в Django модель
    linkedin: member.linkedin,
    image: getImageUrl(member.photo, 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800'),
  };
};

export const mapPartnerToFrontendFormat = (partner: Partner) => {
  return {
    id: partner.id.toString(),
    name: partner.name,
    logo: getImageUrl(partner.logo, 'https://via.placeholder.com/200x100'),
    category: 'partner' as const,
  };
};

export const mapInsightToFrontendFormat = (insight: Insight) => {
  return {
    id: insight.slug,
    slug: insight.slug,
    title: insight.title,
    excerpt: insight.excerpt,
    date: insight.published_date.split('T')[0], // Преобразуем ISO дату в YYYY-MM-DD
    tags: insight.tags || [insight.category.name], // Используем теги с бэкенда или категорию как fallback
    image: getImageUrl(insight.featured_image, 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  };
};

export const mapArticleToFrontendFormat = (insight: Insight) => ({
  id: insight.slug,
  slug: insight.slug,
  title: insight.title,
  excerpt: insight.excerpt,
  content: insight.content || '',
  date: insight.published_date.split('T')[0],
  readTime: Math.ceil((insight.content?.length || 0) / 1000), // Примерная оценка времени чтения
  tags: insight.tags || [],
  image: getImageUrl(insight.featured_image, 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  author: {
    name: insight.author,
    role: 'Консультант',
    avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  category: insight.category.name,
  featured: insight.is_featured,
});
