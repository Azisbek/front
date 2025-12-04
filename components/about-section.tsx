'use client';

import { AnimatedSection } from './animated-section';
import { Card } from '@/components/ui/card';
import { CircleCheck as CheckCircle2 } from 'lucide-react';
import { AboutSection as AboutSectionType } from '@/lib/api';

interface AboutSectionProps {
  aboutData: AboutSectionType | null;
}

export function AboutSection({ aboutData }: AboutSectionProps) {
  // Получаем ценности из данных или используем дефолтные
  const values = aboutData?.values 
    ? aboutData.values.split('\n').filter(v => v.trim())
    : [
        'Профессиональная ответственность',
        'Прозрачность и конфиденциальность',
        'Практический результат',
        'Долгосрочное партнерство',
        'Индивидуальный подход',
        'Инновационные решения'
      ];
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                О нас
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-balance letter-spacing-snug">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                {aboutData?.title || 'Ваш надежный'}
              </span>
              <br />
              <span className="text-foreground">{aboutData?.title ? '' : 'партнер в инвестициях'}</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground leading-relaxed text-pretty">
              {aboutData?.description || 'Помогаем компаниям уверенно инвестировать и масштабироваться, снижая риски и повышая эффективность на каждом этапе проекта.'}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedSection delay={0.1}>
            <Card className="group p-10 h-full bg-white/80 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Наша миссия</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutData?.mission || 'Обеспечивать успешную реализацию инвестиционных проектов через комплексное профессиональное сопровождение, объединяя правовую экспертизу, финансовое консультирование и управление проектами.'}
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="group p-10 h-full bg-white/80 backdrop-blur-sm border-2 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Наш подход</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutData?.vision || 'Мы не просто консультируем — мы становимся частью вашей команды, разделяя ответственность за результат и применяя проверенные методологии для достижения ваших бизнес-целей.'}
              </p>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-amber-50 rounded-3xl p-12 lg:p-16 border border-primary/10 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Наши ценности
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-lg leading-tight">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
