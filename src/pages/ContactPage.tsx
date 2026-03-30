import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT, CONTACT_MAP_URL, CONTACT_MAP_EMBED_URL } from '@/data/contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Section } from '@/components/ui/section';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import PageHero from '@/components/common/PageHero';
import styles from '@/styles/pages/ContactPage.module.css';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const ContactPage = () => {
  const { language, prefix, t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    type: '',
    message: '',
    privacy: false,
  });

  const inquiryTypes = [
    { value: 'air', labelKo: '대기환경', labelEn: 'Air Quality' },
    { value: 'water', labelKo: '수질환경', labelEn: 'Water Quality' },
    { value: 'odor', labelKo: '악취환경', labelEn: 'Odor Control' },
    { value: 'design', labelKo: '시설 설계·시공', labelEn: 'Facility Design & Construction' },
    { value: 'other', labelKo: '기타 문의', labelEn: 'Other' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        title: t('contact.agreePrivacy'),
        variant: 'destructive',
      });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast({
        title: t('contact.formConfigError'),
        description: t(
          'VITE_WEB3FORMS_ACCESS_KEY를 .env에 설정해주세요.',
          'Please set VITE_WEB3FORMS_ACCESS_KEY in .env.'
        ),
        variant: 'destructive',
      });
      return;
    }

    setSubmitting(true);

    try {
      const typeLabel = inquiryTypes.find((i) => i.value === formData.type);
      const inquiryTypeLabel = typeLabel
        ? language === 'ko'
          ? typeLabel.labelKo
          : typeLabel.labelEn
        : formData.type;

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[웹사이트 문의] ${formData.name} - ${inquiryTypeLabel || '문의 유형 미선택'}`,
          email: formData.email,
          from_name: formData.name,
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          inquiryType: inquiryTypeLabel,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        throw new Error(data.message || data.error || `HTTP ${response.status}`);
      }

      setSubmitted(true);
      toast({
        title: t('contact.submitSuccess'),
        description: t('contact.submittedDesc'),
      });
    } catch (err) {
      toast({
        title: t('contact.submitFail'),
        description:
          err instanceof Error
            ? err.message
            : t('contact.tryAgain'),
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo: Array<{
    icon: typeof Phone;
    title: string;
    value: string;
    href?: string;
    description: string;
  }> = [
    {
      icon: Phone,
      title: t('contact.phoneLabel'),
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      description: t('contact.phoneDesc'),
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      description: t('contact.emailDesc'),
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: t(CONTACT.addressKo, CONTACT.addressEn),
      description: t('contact.mapLocation'),
    },
    {
      icon: Clock,
      title: t('footer.businessHours'),
      value: t(CONTACT.businessHoursKo, CONTACT.businessHoursEn),
      description: t(CONTACT.closedDaysKo, CONTACT.closedDaysEn),
    },
  ];

  if (submitted) {
    return (
      <>
        <PageHero title={t('contact.title')} />
        <Section>
          <div className={styles.successWrap}>
            <div className={styles.successIconWrap}>
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h2 className={styles.successTitle}>
              {t('contact.submitSuccessFull')}
            </h2>
            <p className={styles.successDesc}>
              {t('contact.successThankYou')}
            </p>
            <Link to={prefix || '/'}>
              <Button>{t('common.backToHome')}</Button>
            </Link>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <PageHero
        title={t('contact.contactUs')}
        subtitle={t('contact.subtitleShort')}
      />

      {/* Contact Info Cards — dark */}
      <Section variant="dark">
        <div className={styles.infoGrid}>
          {contactInfo.map((info) => (
            <div key={info.title} className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <info.icon className="h-6 w-6" style={{ color: 'hsl(160 65% 60%)' }} />
              </div>
              <h3 className={styles.infoTitle}>{info.title}</h3>
              {info.href ? (
                <a href={info.href} className={styles.infoLink}>
                  {info.value}
                </a>
              ) : (
                <p className={styles.infoValue}>{info.value}</p>
              )}
              <p className={styles.infoDesc}>{info.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Form + Map */}
      <Section>
        <div className={styles.contentGrid}>
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.formTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldGrid}>
                  <div className={styles.fieldStack}>
                    <Label htmlFor="name">{t('contact.name')} *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  <div className={styles.fieldStack}>
                    <Label htmlFor="company">{t('contact.company')}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t('contact.companyPlaceholder')}
                    />
                  </div>
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.fieldStack}>
                    <Label htmlFor="phone">{t('contact.phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div className={styles.fieldStack}>
                    <Label htmlFor="email">{t('contact.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className={styles.fieldStack}>
                  <Label htmlFor="type">{t('contact.inquiryType')} *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('common.selectPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {language === 'ko' ? type.labelKo : type.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className={styles.fieldStack}>
                  <Label htmlFor="message">{t('contact.message')} *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <div className={styles.checkboxRow}>
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacy: checked as boolean })
                    }
                  />
                  <Label htmlFor="privacy" className={styles.privacyLabel}>
                    {t('contact.privacyAgree')}{' '}
                    <Link to={`${prefix}/privacy`} className={styles.privacyLink}>
                      {t('common.view')}
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className={styles.submitButton}
                  disabled={submitting}
                >
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {submitting
                    ? t('common.sending')
                    : t('contact.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map / Location */}
          <div className={styles.mapWrapper}>
            <h3 className={styles.mapTitle}>{t('contact.location')}</h3>
            <div className={styles.mapBox}>
              <iframe
                title={t('contact.location')}
                src={CONTACT_MAP_EMBED_URL}
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={CONTACT_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <MapPin className="h-4 w-4" />
              {t(CONTACT.addressKo, CONTACT.addressEn)} — {t('contact.viewOnMap')}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
