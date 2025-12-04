import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { VideoSection } from '@/components/video-section';
import { AboutSection } from '@/components/about-section';
import { PartnersSection } from '@/components/partners-section';
import { TeamSection } from '@/components/team-section';
import { ServicesSection } from '@/components/services-section';
import { InsightsSection } from '@/components/insights-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import {
  getOrganizationSchema,
  getServicesSchema,
  getBreadcrumbSchema,
} from '@/lib/json-ld';
import { apiClient, WebsiteData } from '@/lib/api';

async function fetchWebsiteData(): Promise<{
  data: WebsiteData | null;
  error: string | null;
}> {
  try {
    const websiteData = await apiClient.getWebsiteData();
    return { data: websiteData, error: null };
  } catch (err) {
    console.error('Ошибка загрузки данных сайта:', err);
    const message =
      err instanceof Error ? err.message : 'Не удалось загрузить данные сайта';
    return { data: null, error: message };
  }
}

export default async function Home() {
  const { data, error } = await fetchWebsiteData();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-destructive font-semibold">
            Ошибка загрузки данных: {error}
          </p>
          <p className="text-muted-foreground text-sm">
            Проверьте, что бэкенд запущен и доступен по адресу{' '}
            {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServicesSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema()),
        }}
      />

      <SiteHeader />
      <main>
        <HeroSection heroData={data?.hero || []} />
        <VideoSection />
        <AboutSection aboutData={data?.about || null} />
        <PartnersSection partnersData={data?.partners || []} />
        <TeamSection teamData={data?.team || []} />
        <ServicesSection servicesData={data?.services || []} />
        <InsightsSection insightsData={data?.insights || []} />
        <ContactSection contactData={data?.contact || null} />
      </main>
      <SiteFooter />
    </>
  );
}
