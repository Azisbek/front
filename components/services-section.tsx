"use client";

import { useState } from "react";
import { AnimatedSection } from "./animated-section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { services as fallbackServices } from "@/content/services";
import { Service, mapServiceToFrontendFormat } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Building2,
  Wallet,
  SearchCheck,
  Handshake,
  Leaf,
  Landmark,
  Users,
  Calculator,
  Target,
  Globe,
  ChevronRight,
  CircleCheck as CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Scale,
  Building2,
  Wallet,
  SearchCheck,
  HandshakeIcon: Handshake,
  Leaf,
  Landmark,
  Users,
  Calculator,
  Target,
  Globe,
};

const gradientColors = [
  "from-blue-600 to-blue-400",
  "from-slate-700 to-slate-500",
];

interface ServicesSectionProps {
  servicesData: Service[];
}

export function ServicesSection({ servicesData }: ServicesSectionProps) {
  // Преобразуем данные с бэкенда в формат фронтенда
  const services =
    servicesData.length > 0
      ? servicesData.map((service) => mapServiceToFrontendFormat(service))
      : fallbackServices;

  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='services'
      className='py-32 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden'
    >
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 to-pink-400/10 rounded-full blur-3xl' />
        <div className='absolute bottom-40 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-400/20 to-orange-400/10 rounded-full blur-3xl' />
        <div className='absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-400/20 to-teal-400/10 rounded-full blur-3xl animate-pulse' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <AnimatedSection>
          <div className='max-w-3xl mx-auto text-center mb-20'>
            <div className='inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full'>
              <span className='text-primary font-heading font-semibold text-sm uppercase tracking-wider'>
                Услуги
              </span>
            </div>
            <h2 className='text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-balance letter-spacing-snug'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient'>
                Полный спектр
              </span>
              <br />
              <span className='bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent'>
                консалтинговых услуг
              </span>
            </h2>
            <p className='text-xl font-body text-muted-foreground leading-relaxed text-pretty'>
              От правового сопровождения до управления проектами — комплексное
              решение для вашего бизнеса
            </p>
          </div>
        </AnimatedSection>

        <div className='max-w-7xl mx-auto space-y-6'>
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const gradient = gradientColors[index % gradientColors.length];
            const isHovered = hoveredIndex === index;

            return (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedService(service)}
                  className='relative cursor-pointer'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden'>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <div
                      className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${gradient} transform origin-left transition-transform duration-500 ${
                        isHovered ? "scale-x-100" : "scale-x-0"
                      }`}
                    />

                    <div className='flex flex-col md:flex-row relative z-10  md:items-center gap-8'>
                      <div
                        className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        <div className='absolute inset-0 rounded-3xl bg-white/20 backdrop-blur-sm' />
                        {Icon && (
                          <Icon
                            className='h-12 w-12 text-white relative z-10'
                            strokeWidth={1.5}
                          />
                        )}
                        <div
                          className={`absolute -inset-3 bg-gradient-to-br ${gradient} rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
                        />
                      </div>

                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-3 mb-2'>
                          <h3 className='text-3xl font-bold text-foreground group-hover:text-blue-600 transition-all duration-300'>
                            {service.title}
                          </h3>
                          <motion.div
                            animate={{ x: isHovered ? 8 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronRight
                              className={`h-8 w-8 text-gray-400 group-hover:text-primary transition-colors duration-300`}
                            />
                          </motion.div>
                        </div>
                        <p className='text-lg text-muted-foreground leading-relaxed mb-4'>
                          {service.description}
                        </p>
                        <div className='flex flex-wrap gap-2'>
                          {service.benefits.slice(0, 4).map((benefit, idx) => (
                            <span
                              key={idx}
                              className='
                              inline-block         
                              break-words           
                              px-4 py-2
                              rounded-2xl           
                              text-sm font-medium
                              bg-blue-50 text-blue-700
                              border border-blue-200
                             '
                            >
                              {benefit}
                            </span>
                          ))}
                          {service.benefits.length > 4 && (
                            <span className='px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600'>
                              +{service.benefits.length - 4} еще
                            </span>
                          )}
                        </div>
                      </div>

                      <div className='hidden lg:block'>
                        <Button
                          size='lg'
                          className='bg-blue-600 text-white hover:bg-blue-700 hover:shadow-2xl hover:scale-110 transition-all duration-300'
                        >
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <Dialog
          open={!!selectedService}
          onOpenChange={() => setSelectedService(null)}
        >
          <DialogContent className='max-w-3xl max-h-[90vh] overflow-y-auto'>
            {selectedService && (
              <>
                <DialogHeader>
                  <div className='flex items-center gap-4 mb-4'>
                    {(() => {
                      const Icon = iconMap[selectedService.icon];
                      const gradient =
                        gradientColors[
                          services.indexOf(selectedService) %
                            gradientColors.length
                        ];
                      return (
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}
                        >
                          {Icon && <Icon className='h-8 w-8 text-white' />}
                        </div>
                      );
                    })()}
                    <DialogTitle className='text-3xl'>
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className='text-lg'>
                    {selectedService.description}
                  </DialogDescription>
                </DialogHeader>

                <div className='mt-6'>
                  <h4 className='text-xl font-bold mb-4'>Преимущества:</h4>
                  <div className='grid gap-4'>
                    {selectedService.benefits.map((benefit, idx) => {
                      const gradient =
                        gradientColors[
                          services.indexOf(selectedService) %
                            gradientColors.length
                        ];
                      return (
                        <div
                          key={idx}
                          className='flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors'
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                          >
                            <CheckCircle2 className='h-5 w-5 text-white' />
                          </div>
                          <span className='text-base text-foreground leading-relaxed pt-1'>
                            {benefit}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className='mt-8'>
                    <Button
                      onClick={() => {
                        setSelectedService(null);
                        scrollToContact();
                      }}
                      size='lg'
                      className='w-full bg-blue-600 text-white hover:bg-blue-700 hover:shadow-2xl transition-all duration-300'
                    >
                      Обсудить проект
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
