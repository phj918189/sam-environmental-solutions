import { useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import PageHero from '@/components/common/PageHero';
import IconList from '@/components/common/IconList';
import ProcessSteps from '@/components/common/ProcessSteps';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { serviceData, isValidServiceType } from '@/data/services';
import { processStepsData } from '@/data/home';
import NotFound from '@/pages/NotFound';
import styles from '@/styles/pages/ServiceDetailPage.module.css';

const ServiceDetailPage = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const { lang, t } = useLanguage();

  if (!isValidServiceType(serviceType)) {
    return <NotFound />;
  }

  const service = serviceData[serviceType];
  const ServiceIcon = service.icon;
  const processSteps = processStepsData.map((step) => ({
    icon: step.icon,
    title: step.title[lang],
    description: step.description[lang],
  }));

  return (
    <>
      {/* Hero */}
      <PageHero
        title={service.title[lang]}
        subtitle={service.subtitle[lang]}
        // icon={<ServiceIcon className={`h-8 w-8 ${service.color}`} />}
        // iconContainerClassName={service.bgColor}
      />

      {/* Who It's For */}
      <Section>
        <div className={styles.contentGrid}>
          <div>
            <h2 className={styles.sectionTitle}>{t('serviceDetail.whoNeeds')}</h2>
            <IconList items={service.audience[lang]} icon={CheckCircle} iconClassName="text-primary" />
          </div>
          <div>
            <h2 className={styles.sectionTitle}>{t('serviceDetail.useCases')}</h2>
            <IconList items={service.useCases[lang]} icon={ArrowRight} iconClassName="text-accent" />
          </div>
        </div>
      </Section>

      {/* Scope & Deliverables */}
      <Section variant="dark">
        <div className={styles.scopeGrid}>
          <Card>
            <CardHeader>
              <CardTitle>{t('serviceDetail.scope')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className={styles.scopeList}>
                {service.scope[lang].map((item, i) => (
                  <li key={i} className={styles.scopeItem}>
                    <div className={styles.scopeIndexWrap}>
                      <span className={styles.scopeIndex}>{i + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t('serviceDetail.deliverables')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className={styles.scopeList}>
                {service.deliverables[lang].map((item, i) => (
                  <li key={i} className={styles.deliverableItem}>
                    <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          title={t('serviceDetail.process')}
          subtitle={t('serviceDetail.processDesc')}
        />
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* FAQ */}
      <Section variant="dark">
        <SectionHeader
          title={t('serviceDetail.faq')}
        />
        <div className={styles.faqWrap}>
          <Accordion type="single" collapsible className="w-full">
            {service.faq[lang].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  );
};

export default ServiceDetailPage;
