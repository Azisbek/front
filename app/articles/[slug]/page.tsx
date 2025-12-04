import { notFound } from 'next/navigation';
import { apiClient, mapArticleToFrontendFormat } from '@/lib/api';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ArticleContent } from './article-content';
import { Article } from '@/content/articles';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// Отключаем кеширование для динамического контента
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ArticlePage({ params }: ArticlePageProps) {
  try {
    // Загружаем статью с бэкенда
    const insight = await apiClient.getInsightBySlug(params.slug);
    const article = mapArticleToFrontendFormat(insight);

    // Загружаем связанные статьи (из той же категории, исключая текущую)
    const relatedInsights = await apiClient.getInsights({
      category: insight.category.slug,
    });
    
    const relatedArticles = relatedInsights
      .filter(i => i.slug !== insight.slug)
      .slice(0, 3)
      .map(mapArticleToFrontendFormat);

      

    return (
      <>
        <SiteHeader />
        <ArticleContent article={article} relatedArticles={relatedArticles} />
        <SiteFooter />
      </>
    );
  } catch (error) {
    console.error('Ошибка загрузки статьи:', error);
    notFound();
  }
}
