import HeroSection from '@/components/ui/Home/HeroSection';
import ServicesSection from '@/components/ui/Home/ServicesSection';
import ProcessSection from '@/components/ui/Home/ProcessSection';
import TrustSignalsSection from '@/components/ui/Home/TrustSignalsSection';
import CertificationsSection from '@/components/ui/Home/CertificationsSection';
import CtaSection from '@/components/ui/Home/CtaSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TrustSignalsSection />
      <CertificationsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
