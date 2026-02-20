import VisualSection from '@/components/ui/Home/VisualSection';
import DataSection from '@/components/ui/Home/DataSection';
import ProcessSection from '@/components/ui/Home/ProcessSection';
import CertificationsSection from '@/components/ui/Home/CertificationsSection';
import CtaSection from '@/components/ui/Home/CtaSection';
// import ServicesSection from '@/components/ui/Home/ServicesSection';

const HomePage = () => {
  return (
    <>
      <VisualSection />
      {/* <ServicesSection /> */}
      <DataSection />
      <ProcessSection />
      <CertificationsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
