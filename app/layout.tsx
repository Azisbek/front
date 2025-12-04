import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Poppins, Montserrat, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Investment Consulting Projects | Профессиональный инвестиционный консалтинг',
  description: 'Комплексное сопровождение инвестиций: правовое консультирование, финансовый анализ, управление проектами. Снижаем риски и повышаем эффективность на каждом этапе.',
  keywords: 'инвестиционный консалтинг, правовое сопровождение, due diligence, ESG, управление проектами, корпоративное право',
  openGraph: {
    title: 'Investment Consulting Projects',
    description: 'Комплексное сопровождение инвестиций от стратегии до реализации',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/main-logo.png',
        width: 1200,
        height: 630,
        alt: 'Investment Consulting Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Consulting Projects',
    description: 'Комплексное сопровождение инвестиций от стратегии до реализации',
    images: ['/main-logo.png'],
  },
  icons: {
    icon: '/main-logo.png',
    apple: '/main-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${montserrat.variable} ${sourceSans.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
        <Toaster />
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.4/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/11/23/19/20251123194343-JG7IRZ5P.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
