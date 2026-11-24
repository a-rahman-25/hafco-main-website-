import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ORG_SCHEMA, ROUTES, SEO, SITE_URL } from '@/lib/seo';

const Seo = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const page = ROUTES[pathname];
  if (!page) {
    return (<Helmet><title>Page not found | HAFCO Big Movers</title><meta name="robots" content="noindex" /></Helmet>);
  }
  const { title, description } = SEO[language][page];
  const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
  const image = `${SITE_URL}/og-image.png`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {page === 'home' && <script type="application/ld+json">{JSON.stringify(ORG_SCHEMA)}</script>}
    </Helmet>
  );
};

export default Seo;
