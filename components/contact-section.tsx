'use client';

import { AnimatedSection } from './animated-section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validation';
import { useState } from 'react';
import { toast } from 'sonner';
import { ContactInfo, apiClient } from '@/lib/api';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';

interface ContactSectionProps {
  contactData: ContactInfo | null;
}

export function ContactSection({ contactData }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: '',
      consent: false
    }
  });

  const consent = watch('consent');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Отправляем заявку (ApplicationForm)
      await apiClient.sendApplicationForm({
        full_name: data.name,
        phone: data.phone,
        message: data.message,
      });

      toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
      reset();
    } catch (error) {
      console.error('Ошибка отправки заявки:', error);
      toast.error('Произошла ошибка. Попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Контакты
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Готовы обсудить ваш проект? Оставьте заявку или свяжитесь удобным способом
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection delay={0.1}>
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Напишите нам
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input
                  type="text"
                  {...register('honeypot')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Иван Иванов"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Название компании"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="ivanov@example.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    {...register('phone')}
                    placeholder="+996 XXX XXX XXX"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Расскажите о вашем проекте или вопросе..."
                    rows={5}
                    className="mt-1"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setValue('consent', checked as boolean)}
                  />
                  <Label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Я согласен на обработку персональных данных в соответствии с политикой
                    конфиденциальности
                  </Label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-destructive">{errors.consent.message}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </form>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                    <a
                      href={`tel:${contactData?.phone || '+996XXXXXXXXX'}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactData?.phone || '+996 (XXX) XXX-XXX'}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href={`mailto:${contactData?.email || 'info@investment-consulting.pro'}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactData?.email || 'info@investment-consulting.pro'}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      {contactData?.address || 'г. Бишкек, ул. Примерная, 123\nБЦ «Деловой центр», офис 456'}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-4">Мы в соцсетях</h4>
                <div className="flex gap-4">
                  {contactData?.phone && (
                    <a
                      href={`https://wa.me/${contactData.phone.replace(/\D/g, '')}?text=Здравствуйте!%20Хочу%20получить%20консультацию`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </a>
                  )}
                  {contactData?.linkedin && (
                    <a
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                  )}
                  {contactData?.facebook && (
                    <a
                      href={contactData.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                    </a>
                  )}
                  {contactData?.instagram && (
                    <a
                      href={contactData.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                  )}
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
