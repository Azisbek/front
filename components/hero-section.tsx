"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  Scale,
  SearchCheck,
  Leaf,
  TrendingUp,
  Users,
  Award,
  Building2,
  Calculator,
  Target,
  Briefcase,
  Globe,
  Shield,
  PieChart,
  FileText,
  Handshake,
} from "lucide-react";
import { HeroSection as HeroSectionType } from "@/lib/api";

interface HeroSectionProps {
  heroData: HeroSectionType[];
}

export function HeroSection({ heroData }: HeroSectionProps) {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Иконки для блоков
  const iconMap: Record<string, any> = {
    Scale,
    SearchCheck,
    Leaf,
    TrendingUp,
    Users,
    Award,
    Building2,
    Calculator,
    Target,
    Briefcase,
    Globe,
    Shield,
    PieChart,
    FileText,
    Handshake,
  };

  // Используем данные с бэкенда или fallback
  const mainHero = heroData?.[0] || {
    id: 0,
    title: "Правовое сопровождение",
    subtitle: "инвестиций",
    description:
      "Комплексное юридическое сопровождение на всех этапах инвестиционного процесса",
    cta_text: "Подробнее",
    background_image:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200",
  };

  const otherHeroes = heroData?.slice(1, 5) || [];

  // Функция для получения полного URL изображения
  const getImageUrl = (
    imagePath: string | undefined | null,
    fallback: string
  ): string => {
    if (!imagePath) return fallback;
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    const backendBaseUrl =
      process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ||
      "http://localhost:8000";
    return `${backendBaseUrl}${imagePath}`;
  };

  const heroBlocks = {
    main: {
      id: mainHero.id.toString(),
      title: mainHero.title,
      subtitle: mainHero.subtitle,
      description: mainHero.description,
      buttonText: mainHero.cta_text || "Подробнее",
      action: scrollToServices,
      image: getImageUrl(
        mainHero.background_image,
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ),
    },
    cards: otherHeroes.map((hero, index) => ({
      id: hero.id.toString(),
      title: hero.title,
      description: hero.description,
      icon:
        index === 0
          ? "SearchCheck"
          : index === 1
          ? "Users"
          : index === 2
          ? "TrendingUp"
          : "Target",
      image: getImageUrl(
        hero.background_image,
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
      ),
      subtitle: hero.subtitle,
      stats: index === 2 ? "98%" : undefined,
    })),
  };

  // Если нет дополнительных карточек, используем дефолтные
  if (heroBlocks.cards.length === 0) {
    heroBlocks.cards = [
      {
        id: "due-diligence",
        title: "Due Diligence",
        description: "Комплексная проверка объектов инвестирования",
        icon: "SearchCheck",
        image:
          "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
        subtitle: undefined,
        stats: undefined,
      },
      {
        id: "team-experts",
        title: "Наша команда",
        description: "Эксперты с мировым опытом",
        icon: "Users",
        image:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        subtitle: undefined,
        stats: undefined,
      },
      {
        id: "success-rate",
        title: "Успешность",
        description: "проектов",
        stats: "98%",
        icon: "TrendingUp",
        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        subtitle: undefined,
      },
      {
        id: "contact-cta",
        title: "Бесплатная консультация",
        subtitle: "по вашему проекту",
        description: "Обсудим стратегию и возможности",
        icon: "Target",
        image:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        stats: undefined,
      },
    ];
  }

  // Функция для получения размеров блока - все блоки теперь большие
  const getBlockSize = (size: string) => {
    switch (size) {
      case "large":
        return "lg:col-span-6";
      case "wide":
        return "lg:col-span-12";
      default:
        return "lg:col-span-6";
    }
  };

  // Функция для получения цвета блока
  const getBlockColor = (color: string, type: string) => {
    if (type === "cta" && color === "blue") {
      return "bg-blue-600 text-white";
    }
    return "bg-white border-2 border-gray-100";
  };

  return (
    <section className="relative bg-white pt-20 pb-12 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Main Large Block - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.45, 0.27, 0.9],
              delay: 0.2,
            }}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-2 border-gray-100 hover:border-blue-200 relative overflow-hidden cursor-pointer transition-all duration-300 group"
            onClick={heroBlocks.main.action}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={heroBlocks.main.image}
                alt={heroBlocks.main.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-all duration-300" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between min-h-[400px] p-8 lg:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-4 leading-tight transition-colors duration-300">
                  {heroBlocks.main.title}
                </h1>
                <p className=" text-xl lg:text-2xl font-medium text-white mb-2 transition-colors duration-300">
                  {heroBlocks.main.subtitle}
                </p>
                <p className="font-body text-lg text-gray-100 mb-8 max-w-lg transition-colors duration-300 leading-relaxed">
                  {heroBlocks.main.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-0 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    heroBlocks.main.action();
                  }}
                >
                  {heroBlocks.main.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Cards Grid */}
          <div className="space-y-6">
            {heroBlocks.cards.map((card, index) => {
              const Icon = card.icon ? iconMap[card.icon] : null;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                    ease: [0.21, 0.45, 0.27, 0.9],
                  }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] border-2 border-gray-100 hover:border-blue-200 relative overflow-hidden cursor-pointer transition-all duration-300 group"
                  onClick={
                    card.id === "contact-cta"
                      ? scrollToContact
                      : scrollToServices
                  }
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/25 transition-all duration-300" />
                  </div>

                  <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[180px]">
                    <motion.div
                      className="flex items-start justify-between mb-4 relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    >
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-bold text-white mb-1 transition-colors duration-300">
                          {card.title}
                        </h3>
                        {card.subtitle && (
                          <p className="font-serif text-sm font-semibold text-white mb-1 transition-colors duration-300">
                            {card.subtitle}
                          </p>
                        )}
                        <p className="font-body text-sm text-gray-100 transition-colors duration-300">
                          {card.description}
                        </p>
                      </div>

                      {/* Icon */}
                      {Icon && (
                        <div className="ml-4 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:bg-white/30 transition-all duration-300">
                          <Icon className="w-5 h-5 text-white drop-shadow-sm" />
                        </div>
                      )}
                    </motion.div>

                    {/* Large stats display */}
                    {card.stats && (
                      <div className="mt-auto relative z-10">
                        <div className="font-heading text-3xl font-bold text-white transition-colors duration-300">
                          {card.stats}
                        </div>
                      </div>
                    )}

                    {/* CTA Button for contact card */}
                    {card.id === "contact-cta" && (
                      <motion.div
                        className="mt-4 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToContact();
                            }}
                          >
                            Получить
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut",
                              }}
                              className="ml-2"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
