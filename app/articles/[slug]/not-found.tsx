'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export default function ArticleNotFound() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="py-32 bg-gradient-to-b from-blue-50/50 via-white to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <FileText className="h-12 w-12 text-gray-400" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Статья не найдена
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                К сожалению, запрашиваемая статья не существует или была удалена. 
                Возможно, вы перешли по устаревшей ссылке.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/articles">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Все статьи
                  </Button>
                </Link>
                
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg rounded-2xl font-semibold border-2 border-gray-200 hover:border-blue-500 transition-all duration-300"
                  >
                    На главную
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
