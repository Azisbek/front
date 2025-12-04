'use client';

import { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/animated-section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { apiClient, mapArticleToFrontendFormat } from '@/lib/api';
import { Article } from '@/content/articles';
import { Calendar, ArrowRight, Clock, Search, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const cardGradients = [
  'from-blue-600 to-blue-400',
  'from-slate-700 to-slate-500',
  'from-purple-600 to-purple-400',
  'from-green-600 to-green-400',
  'from-amber-600 to-amber-400',
  'from-red-600 to-red-400',
];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Array<{ name: string; slug: string }>>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загрузка категорий и тегов один раз при монтировании
  useEffect(() => {
    const loadCategoriesAndTags = async () => {
      try {
        const [categoriesData, tagsData] = await Promise.all([
          apiClient.getInsightCategories(),
          apiClient.getInsightTags(),
        ]);

        setCategories(categoriesData);
        setTags(tagsData);
      } catch (err) {
        console.error('Ошибка загрузки категорий и тегов:', err);
      }
    };

    loadCategoriesAndTags();
  }, []);

  // Загрузка статей при изменении фильтров и поискового запроса
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        // Находим slug категории по названию
        const categorySlug = selectedCategory 
          ? categories.find(cat => cat.name === selectedCategory)?.slug 
          : undefined;

        const insightsData = await apiClient.getInsights({
          category: categorySlug,
          tag: selectedTag || undefined,
          search: searchQuery || undefined,
        });

        // Преобразуем insights в формат статей
        const mappedArticles = insightsData.map(mapArticleToFrontendFormat);
        setArticles(mappedArticles);
      } catch (err) {
        console.error('Ошибка загрузки статей:', err);
        setError('Не удалось загрузить статьи. Пожалуйста, попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    // Добавляем небольшую задержку для поиска, чтобы не делать запрос при каждом символе
    const timeoutId = setTimeout(() => {
      loadArticles();
    }, searchQuery ? 500 : 0); // Задержка только для поиска

    return () => clearTimeout(timeoutId);
  }, [selectedCategory, selectedTag, searchQuery, categories]);

  // Все фильтрация происходит на бэкенде, просто используем загруженные статьи
  const filteredArticles = articles;

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTag('');
  };

  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-blue-200/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-slate-400/10 to-slate-200/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-6 px-6 py-3 bg-blue-50 rounded-full">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                    Экспертные материалы
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-blue-600">Статьи</span>
                  <br />
                  <span className="text-foreground">и аналитика</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                  Глубокая аналитика, экспертные мнения и практические рекомендации 
                  от ведущих специалистов в области инвестиционного консалтинга
                </p>

                {/* Search and Filters */}
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col lg:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        placeholder="Поиск по статьям..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-2xl"
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="h-14 px-6 border-2 border-gray-200 hover:border-blue-500 rounded-2xl"
                    >
                      <Filter className="h-5 w-5 mr-2" />
                      Сбросить фильтры
                    </Button>
                  </div>

                  {/* Category and Tag Filters */}
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Категория
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full h-12 px-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-gray-700"
                      >
                        <option value="">Все категории</option>
                        {categories.map(category => (
                          <option key={category.slug} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Тег
                      </label>
                      <select
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className="w-full h-12 px-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-gray-700"
                      >
                        <option value="">Все теги</option>
                        {tags.map(tag => (
                          <option key={tag} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Results Info */}
            <div className="mb-12 text-center">
              <p className="text-lg text-muted-foreground">
                Найдено статей: <span className="font-bold text-blue-600">{filteredArticles.length}</span>
              </p>
            </div>

            {loading ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Загрузка статей...
                  </h3>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ошибка загрузки
                  </h3>
                  <p className="text-gray-600 mb-8">{error}</p>
                  <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
                    Попробовать снова
                  </Button>
                </div>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Статьи не найдены
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Попробуйте изменить параметры поиска или сбросить фильтры
                  </p>
                  <Button onClick={clearFilters} className="bg-blue-600 hover:bg-blue-700">
                    Сбросить фильтры
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => {
                  const gradient = cardGradients[index % cardGradients.length];
                  return (
                    <AnimatedSection key={article.id} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ y: -12, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="h-full"
                      >
                        <Card className="group overflow-hidden bg-white/90 backdrop-blur-sm border-2 hover:border-transparent hover:shadow-2xl h-full flex flex-col relative transition-all duration-500">
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                          <div className="relative h-64 overflow-hidden">
                            <div className={`absolute -inset-4 bg-gradient-to-br ${gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} from-black/50 via-transparent to-transparent opacity-60`} />

                            {/* Featured Badge */}
                            {article.featured && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-amber-500 text-white border-0 shadow-lg">
                                  Рекомендуем
                                </Badge>
                              </div>
                            )}

                            {/* Date and Read Time */}
                            <div className="absolute top-4 right-4">
                              <div className="flex flex-col gap-2">
                                <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                                  <Calendar className="h-3 w-3 inline mr-1 text-gray-700" />
                                  <time className="text-xs font-medium text-gray-700">
                                    {new Date(article.date).toLocaleDateString('ru-RU')}
                                  </time>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                                  <Clock className="h-3 w-3 inline mr-1 text-gray-700" />
                                  <span className="text-xs font-medium text-gray-700">
                                    {article.readTime} мин
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="p-8 flex flex-col flex-grow relative z-10">
                            {/* Category */}
                            <div className="mb-3">
                              <Badge variant="outline" className="text-blue-600 border-blue-200">
                                {article.category}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-blue-600 transition-all duration-300 line-clamp-2">
                              {article.title}
                            </h3>

                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow line-clamp-3">
                              {article.excerpt}
                            </p>

                            {/* Author */}
                            <div className="flex items-center mb-6">
                              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={article.author.avatar}
                                  alt={article.author.name}
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  {article.author.name}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {article.author.role}
                                </p>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {article.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} className="bg-blue-600 text-white border-0 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {article.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{article.tags.length - 3}
                                </Badge>
                              )}
                            </div>

                            <Link href={`/articles/${article.slug || article.id}`}>
                              <Button
                                className="w-full justify-between bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn"
                              >
                                Читать статью
                                <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                              </Button>
                            </Link>
                          </div>
                        </Card>
                      </motion.div>
                    </AnimatedSection>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
