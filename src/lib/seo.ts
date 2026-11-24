export const SITE_URL = 'https://www.hafcobigmovers.com';

export type SeoEntry = { title: string; description: string };
export type SeoPage = 'home' | 'about' | 'services' | 'fleet' | 'work' | 'contact' | 'privacy' | 'terms';

export const ROUTES: Record<string, SeoPage> = {
  '/': 'home', '/about': 'about', '/services': 'services', '/fleet': 'fleet',
  '/work': 'work', '/contact': 'contact', '/privacy': 'privacy', '/terms': 'terms',
};

export const SEO: Record<'en' | 'ar', Record<SeoPage, SeoEntry>> = {
  en: {
    home: { title: 'HAFCO Big Movers | Heavy Transport & Cranes in Dammam', description: 'HAFCO Big Movers provides heavy equipment transport, petroleum pipe transport & crane services in Dammam & Eastern Province since 1984. 40+ years of hauling.' },
    about: { title: 'About HAFCO Big Movers | Dammam Heavy Transport Since 1984', description: 'Founded in 1984, HAFCO Big Movers operates from Safwa, serving Dammam and the Eastern Province with heavy equipment, pipe transport & crane services.' },
    services: { title: 'HAFCO Services | Heavy Haulage, Pipe Transport & Cranes', description: 'Explore HAFCO Big Movers services: heavy equipment transport, 30m petroleum pipe transport & mobile crane services in Dammam, serving KSA since 1984.' },
    fleet: { title: 'HAFCO Fleet | Lowbeds, Extendables & Mobile Cranes', description: 'HAFCO Big Movers fleet: lowbed trailers, extendables for petroleum pipes & mobile cranes for heavy equipment transport across Dammam & KSA since 1984.' },
    work: { title: 'HAFCO Projects | Heavy Transport Work in Saudi Arabia', description: 'HAFCO Big Movers projects: heavy equipment transport, petroleum pipe hauling & crane lifts for leading energy and industrial contractors in KSA since 1984.' },
    contact: { title: 'Contact HAFCO Big Movers | Heavy Transport Quote Dammam', description: 'Get a free quote from HAFCO Big Movers for heavy equipment transport, petroleum pipe transport or crane services in Dammam & Eastern Province, since 1984.' },
    privacy: { title: 'HAFCO Big Movers | Privacy Policy', description: 'Privacy Policy of HAFCO Big Movers, providing heavy equipment transport, petroleum pipe transport and crane services in Dammam, Eastern Province since 1984.' },
    terms: { title: 'HAFCO Big Movers | Terms of Service', description: 'Terms of Service for HAFCO Big Movers heavy equipment transport, petroleum pipe transport and crane services in Dammam and the Eastern Province since 1984.' },
  },
  ar: {
    home: { title: 'HAFCO هافكو للنقل الثقيل | النقل الثقيل والرافعات بالدمام', description: 'شركة هافكو للنقل الثقيل: نقل المعدات الثقيلة، أنابيب البترول، وخدمات الرافعات بالدمام والمنطقة الشرقية منذ 1984. موثوقية وأمان على مدار 40 عاماً بالمملكة.' },
    about: { title: 'عن HAFCO هافكو | النقل الثقيل في الدمام منذ 1984', description: 'تأسست هافكو عام 1984 وتعمل من صفوى لخدمة الدمام والمنطقة الشرقية، وتقدم حلول النقل الثقيل ونقل أنابيب البترول وتأجير الرافعات بخبرة تتجاوز 40 عاماً.' },
    services: { title: 'خدمات HAFCO هافكو | نقل المعدات والأنابيب والرافعات', description: 'خدمات هافكو للنقل الثقيل: نقل المعدات والآلات الكبيرة، نقل أنابيب البترول بطول 30 متراً، وخدمات الرافعات المتنقلة في الدمام والمنطقة الشرقية منذ 1984.' },
    fleet: { title: 'أسطول HAFCO هافكو | لوبد، تلسكوبية ورافعات متنقلة', description: 'استكشف أسطول هافكو المتطور: سطحات هيدروليكية، مقطورات تلسكوبية لنقل أنابيب البترول، ورافعات متنقلة جاهزة للمشاريع الكبرى بالمنطقة الشرقية منذ 1984.' },
    work: { title: 'مشاريع HAFCO هافكو | النقل الثقيل في السعودية', description: 'سجل مشاريع هافكو: نقل المعدات الثقيلة وأنابيب البترول ورفع الهياكل لكبرى شركات الطاقة والمقاولات الصناعية في المملكة، انطلاقاً من الدمام منذ عام 1984.' },
    contact: { title: 'اتصل بـ HAFCO هافكو | عرض سعر للنقل الثقيل بالدمام', description: 'تواصل مع هافكو للنقل الثقيل لطلب عرض سعر لنقل المعدات وأنابيب البترول أو خدمات الرافعات بالدمام والمنطقة الشرقية. فريقنا في خدمتكم منذ عام 1984.' },
    privacy: { title: 'HAFCO هافكو | سياسة الخصوصية', description: 'سياسة الخصوصية لشركة هافكو للنقل الثقيل، المتخصصة في نقل المعدات الثقيلة وأنابيب البترول وخدمات الرافعات في الدمام والمنطقة الشرقية منذ عام 1984.' },
    terms: { title: 'HAFCO هافكو | شروط الخدمة', description: 'شروط الخدمة لشركة هافكو للنقل الثقيل في نقل المعدات الثقيلة وأنابيب البترول وخدمات الرافعات في الدمام والمنطقة الشرقية بالمملكة منذ عام 1984.' },
  },
};

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'MovingCompany'],
  '@id': `${SITE_URL}/#organization`,
  name: 'HAFCO Big Movers',
  legalName: 'Hadi & Saeed Fazaan Al-Qahtani Company',
  alternateName: ['HAFCO', 'هافكو', 'شركة هادي وسعيد فزعان القحطاني'],
  foundingDate: '1984',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/hafco-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  email: 'info@hafcobigmovers.com',
  telephone: '+966535557874',
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+966560676302', contactType: 'customer service', areaServed: 'SA', availableLanguage: ['English', 'Arabic'] },
    { '@type': 'ContactPoint', telephone: '+966504826306', contactType: 'customer service', areaServed: 'SA', availableLanguage: ['English', 'Arabic'] },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2837 Al Qatif 800 St',
    addressLocality: 'Safwa',
    addressRegion: 'Eastern Province',
    postalCode: '32733',
    addressCountry: 'SA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 26.7852, longitude: 49.8450 },
  areaServed: ['Dammam', 'Eastern Province', 'Saudi Arabia'],
  serviceType: ['Heavy equipment transport', 'Petroleum pipe transport', 'Crane services'],
};
