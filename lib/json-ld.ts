export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Investment Consulting Projects',
    description: 'Комплексное сопровождение инвестиций: право, финансы, управление проектами',
    url: 'https://investment-consulting.pro',
    telephone: '+996XXXXXXXXX',
    email: 'info@investment-consulting.pro',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Примерная, 123, БЦ «Деловой центр», офис 456',
      addressLocality: 'Бишкек',
      addressCountry: 'KG'
    },
    sameAs: [
      'https://linkedin.com/company/icp',
      'https://facebook.com/icp',
      'https://instagram.com/icp'
    ]
  };
}

export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Правовое сопровождение инвестиций',
        description: 'Комплексное юридическое сопровождение инвестиционных проектов на всех этапах',
        provider: {
          '@type': 'Organization',
          name: 'Investment Consulting Projects'
        }
      },
      {
        '@type': 'Service',
        name: 'Due Diligence',
        description: 'Комплексная проверка объектов инвестирования и контрагентов',
        provider: {
          '@type': 'Organization',
          name: 'Investment Consulting Projects'
        }
      },
      {
        '@type': 'Service',
        name: 'ESG консалтинг',
        description: 'Внедрение стандартов устойчивого развития и корпоративной ответственности',
        provider: {
          '@type': 'Organization',
          name: 'Investment Consulting Projects'
        }
      }
    ]
  };
}

export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'О нас',
        item: 'https://investment-consulting.pro#about'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Команда',
        item: 'https://investment-consulting.pro#team'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Услуги',
        item: 'https://investment-consulting.pro#services'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Экспертное мнение',
        item: 'https://investment-consulting.pro#insights'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Контакты',
        item: 'https://investment-consulting.pro#contact'
      }
    ]
  };
}
