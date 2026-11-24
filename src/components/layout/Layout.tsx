import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTop from '@/components/shared/BackToTop';
import FreightBand from '@/components/shared/FreightBand';
import Seo from '@/components/shared/Seo';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <FreightBand />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Layout;
