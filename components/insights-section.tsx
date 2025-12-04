"use client";

import { AnimatedSection } from "./animated-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { insights as fallbackInsights } from "@/content/insights";
import { Insight, mapInsightToFrontendFormat } from "@/lib/api";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardGradients = [
  "from-blue-600 to-blue-400",
  "from-slate-700 to-slate-500",
];

interface InsightsSectionProps {
  insightsData: Insight[];
}

export function InsightsSection({ insightsData }: InsightsSectionProps) {
  // Преобразуем данные с бэкенда
  const insights =
    insightsData.length > 0
      ? insightsData.map((insight) => mapInsightToFrontendFormat(insight))
      : fallbackInsights;
  return (
    <section
      id="insights"
      className="py-32 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-blue-200/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-slate-400/10 to-slate-200/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 bg-blue-50 rounded-full">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Экспертное мнение
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-600">Аналитика</span>
              <br />
              <span className="text-foreground">и обзоры</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Актуальные материалы от наших экспертов о трендах инвестиционного
              рынка и правовом регулировании
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => {
            const gradient = cardGradients[index % cardGradients.length];
            return (
              <AnimatedSection key={insight.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <Card className="group overflow-hidden bg-white/90 backdrop-blur-sm border-2 hover:border-transparent hover:shadow-2xl h-full flex flex-col relative transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative h-64 overflow-hidden">
                      <div
                        className={`absolute -inset-4 bg-gradient-to-br ${gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                      />
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${gradient} from-black/50 via-transparent to-transparent opacity-60`}
                      />

                      <div className="absolute top-4 right-4">
                        <div
                          className={`px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg`}
                        >
                          <Calendar className="h-4 w-4 inline mr-2 text-gray-700" />
                          <time className="text-sm font-medium text-gray-700">
                            {new Date(insight.date).toLocaleDateString("ru-RU")}
                          </time>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow relative z-10">
                      <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-blue-600 transition-all duration-300">
                        {insight.title}
                      </h3>

                      <p className="text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {insight.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {insight.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-blue-600 text-white border-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        className="w-full justify-between bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn"
                        onClick={() =>
                          (window.location.href = `/articles/${
                            insight?.slug || insight.id
                          }`)
                        }
                      >
                        Читать статью
                        <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.8}>
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/articles")}
            >
              Все статьи
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
