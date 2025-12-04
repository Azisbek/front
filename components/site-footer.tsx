'use client';

import { Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/main-logo.png"
                alt="Investment Consulting Projects"
                width={400}
                height={150}
                className="h-28 md:h-32 lg:h-36 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm font-body text-background/80 leading-relaxed">
              Investment Consulting Projects — надежный партнер в инвестициях
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#team');
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Команда
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#insights');
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Экспертное мнение
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a
                  href="tel:+996XXXXXXXXX"
                  className="hover:text-background transition-colors"
                >
                  +996 (XXX) XXX-XXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@investment-consulting.pro"
                  className="hover:text-background transition-colors"
                >
                  info@investment-consulting.pro
                </a>
              </li>
              <li>г. Бишкек, ул. Примерная, 123</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/996XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-sm text-background/60 text-center">
          <p>© {new Date().getFullYear()} Investment Consulting Projects. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
