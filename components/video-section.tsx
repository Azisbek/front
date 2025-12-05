"use client";

import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "./animated-section";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Замените YOUR_YOUTUBE_VIDEO_ID на реальный ID видео с YouTube
  const youtubeVideoId = "VVCr-PGcpiY"; // Пример ID, замените на реальный
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 bg-primary/10 rounded-full">
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                Обращение CEO
              </span>
            </div>
            {/* <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-balance letter-spacing-snug">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Слово от
              </span>
              <br />
              <span className="text-foreground">Красова</span>
            </h2> */}
            <p className="text-xl font-body text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Личное обращение основателя компании о нашей миссии, ценностях и
              подходе к работе с клиентами
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <AnimatedSection delay={0.2}>
            <div className="relative group">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                {!isPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${thumbnailUrl})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
                    </div>

                    {/* Play Button */}
                    <motion.button
                      onClick={handlePlayVideo}
                      className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-all duration-300"
                        animate={{
                          boxShadow: [
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                            "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Play
                          className="w-8 h-8 text-primary ml-1"
                          fill="currentColor"
                        />
                      </motion.div>
                    </motion.button>

                    {/* Video Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
                      3:45
                    </div>
                  </>
                ) : (
                  /* YouTube Embed */
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Обращение владельца компании"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Decorative elements around video */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-accent/20 rounded-full blur-sm" />
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/30 rounded-full blur-sm" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <blockquote className="text-2xl lg:text-3xl font-serif italic text-foreground leading-relaxed pl-6">
                  Создавая консалтинговую компанию ICP (Investment Consulting
                  Projects) мы хотели внести свой вклад в создание и развитие
                  счастливых и многогранно реализованных лидеров в Кыргызстане
                  через партнерство и глубокого уровня поддержку, экспертность и
                  стратегичность, опережая изменчивость мира
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pl-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-foreground">
                    Айнура Чекирова
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    Соучредитель и управляющий партнер
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="space-y-4 pl-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">30+ лет опыта</strong> в
                    сфере инвестиционного права и корпоративных финансов
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      Более 200 проектов
                    </strong>{" "}
                    успешно реализованных инвестиционных сделок
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      Международная практика
                    </strong>{" "}
                    работы с внутренними и зарубежными инвестиционными группами
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 backdrop-blur-sm border border-primary/20">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg font-medium text-foreground">
                Готовы обсудить ваш проект?
                <span className="text-primary font-semibold ml-2">
                  Свяжитесь с нами для консультации
                </span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
