'use client';

import { AnimatedSection } from './animated-section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers as fallbackTeamMembers } from '@/content/team';
import { TeamMember, mapTeamMemberToFrontendFormat } from '@/lib/api';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamSectionProps {
  teamData: TeamMember[];
}

export function TeamSection({ teamData }: TeamSectionProps) {
  // Преобразуем данные с бэкенда
  const teamMembers = teamData.length > 0
    ? teamData.map(member => mapTeamMemberToFrontendFormat(member))
    : fallbackTeamMembers;
  return (
    <section id="team" className="py-32 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Команда
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Эксперты
              </span>
              <br />
              <span className="text-foreground">с мировым опытом</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Наша команда объединяет профессионалов с глубокой экспертизой
              в праве, финансах и управлении проектами
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.21, 0.45, 0.27, 0.9] }}
                className="h-full"
              >
                <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl h-full">
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <h3 className="text-xl font-bold text-white mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm text-white/90 leading-snug">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill} className="bg-primary/10 text-primary border-0 hover:bg-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-all group-hover:translate-x-1 duration-300"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
