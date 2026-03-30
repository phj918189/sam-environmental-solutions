import VisualSection from '@/components/ui/Home/VisualSection';
import DataSection from '@/components/ui/Home/DataSection';
import ProcessSection from '@/components/ui/Home/ProcessSection';
import EquipmentSection from '@/components/ui/Home/EquipmentSection';
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
      <EquipmentSection />
      <CertificationsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
