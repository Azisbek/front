"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Article } from "@/content/articles";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ArticleContentProps {
  article: Article;
  relatedArticles: Article[];
}

export function ArticleContent({
  article,
  relatedArticles,
}: ArticleContentProps) {
  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: копируем ссылку в буфер обмена
      navigator.clipboard.writeText(window.location.href);
    }
  };

  console.log(article);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-blue-200/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-slate-400/10 to-slate-200/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <div className="mb-8">
                <Link href="/articles">
                  <Button variant="outline" className="group">
                    <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Назад к статьям
                  </Button>
                </Link>
              </div>

              {/* Article Header */}
              <div className="text-center mb-12">
                <div className="inline-block mb-6 px-6 py-3 bg-blue-50 rounded-full">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
                  {article.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <time>
                      {new Date(article.date).toLocaleDateString("ru-RU")}
                    </time>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{article.readTime} мин чтения</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>Экспертная статья</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      {article.author.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {article.author.role}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-blue-600 text-white border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Share Button */}
                <Button
                  onClick={shareArticle}
                  variant="outline"
                  className="group"
                >
                  <Share2 className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                  Поделиться
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Нужна консультация по вашему проекту?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Наши эксперты готовы обсудить специфику вашего бизнеса и
                предложить индивидуальные решения
              </p>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                    Похожие статьи
                  </h2>
                  <p className="text-xl text-gray-600">
                    Другие материалы по теме "{article.category}"
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedArticles.map((relatedArticle, index) => (
                    <AnimatedSection
                      key={relatedArticle.id}
                      delay={index * 0.1}
                    >
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <Card className="group overflow-hidden bg-white hover:shadow-xl h-full flex flex-col transition-all duration-300">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={relatedArticle.image}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            <div className="absolute top-4 right-4">
                              <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                                <Clock className="h-3 w-3 inline mr-1 text-gray-700" />
                                <span className="text-xs font-medium text-gray-700">
                                  {relatedArticle.readTime} мин
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedArticle.title}
                            </h3>

                            <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                              {relatedArticle.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                                  <Image
                                    src={relatedArticle.author.avatar}
                                    alt={relatedArticle.author.name}
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                  />
                                </div>
                                <span className="text-xs text-gray-600">
                                  {relatedArticle.author.name}
                                </span>
                              </div>

                              <Link
                                href={`/articles/${
                                  relatedArticle.slug || relatedArticle.id
                                }`}
                              >
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="group/btn"
                                >
                                  Читать
                                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Link href="/articles">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Все статьи
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </main>
  );
}
