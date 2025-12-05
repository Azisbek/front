'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './animated-section';
import { partners as fallbackPartners, clients as fallbackClients } from '@/content/partners';
import { Partner, mapPartnerToFrontendFormat } from '@/lib/api';
import Image from 'next/image';

interface PartnersSectionProps {
  partnersData: Partner[];
}

export function PartnersSection({ partnersData }: PartnersSectionProps) {
  // Преобразуем данные с бэкенда
  const partners = partnersData.length > 0
    ? partnersData.map(partner => mapPartnerToFrontendFormat(partner))
    : fallbackPartners;
  
  // Клиенты пока используем из статики, так как на бэкенде нет отдельной модели
  const clients = fallbackClients;
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Партнеры
            </h2>
            {/* <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Нам доверяют ведущие мировые компании и организации
            </p> */}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-slate-300 flex-1 max-w-xs" />
              <div className="px-6">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Технологические партнеры
                </span>
              </div>
              <div className="h-px bg-slate-300 flex-1 max-w-xs" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="flex items-center justify-center h-32 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 group-hover:border-blue-300">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                        style={{ maxHeight: '60px', width: 'auto' }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* <AnimatedSection delay={0.2}>
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-slate-300 flex-1 max-w-xs" />
              <div className="px-6">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Наши клиенты
                </span>
              </div>
              <div className="h-px bg-slate-300 flex-1 max-w-xs" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="flex items-center justify-center h-32 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 group-hover:border-blue-300">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                        style={{ maxHeight: '60px', width: 'auto' }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection> */}

        {/* <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 bg-white rounded-2xl px-6 md:px-12 py-6 md:py-8 shadow-lg border border-slate-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-slate-600 font-medium">Успешных проектов</div>
              </div>
              <div className="w-12 h-px md:w-px md:h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-slate-600 font-medium">Международных клиентов</div>
              </div>
              <div className="w-12 h-px md:w-px md:h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm text-slate-600 font-medium">Удовлетворённость</div>
              </div>
            </div>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
}
