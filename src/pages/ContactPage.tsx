import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Section, SectionHeader } from '@/components/ui/section';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    type: '',
    message: '',
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        title: t('개인정보 처리방침에 동의해주세요', 'Please agree to the privacy policy'),
        variant: 'destructive',
      });
      return;
    }
    // Simulate form submission
    setSubmitted(true);
    toast({
      title: t('문의가 접수되었습니다', 'Your inquiry has been submitted'),
      description: t('빠른 시일 내에 연락드리겠습니다.', 'We will contact you shortly.'),
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('전화', 'Phone'),
      value: '042-000-0000',
      description: t('평일 09:00 - 18:00', 'Mon-Fri 09:00 - 18:00'),
    },
    {
      icon: Mail,
      title: t('이메일', 'Email'),
      value: 'info@samyang-env.co.kr',
      description: t('24시간 접수 가능', 'Available 24/7'),
    },
    {
      icon: MapPin,
      title: t('주소', 'Address'),
      value: t('대전광역시 유성구 (상세주소)', 'Yuseong-gu, Daejeon, South Korea'),
      description: t('(지도 상세 위치)', '(Detailed location on map)'),
    },
    {
      icon: Clock,
      title: t('영업시간', 'Business Hours'),
      value: t('월-금 09:00 - 18:00', 'Mon-Fri 09:00 - 18:00'),
      description: t('토/일/공휴일 휴무', 'Closed on weekends/holidays'),
    },
  ];

  const inquiryTypes = [
    { value: 'air', label: t('대기 환경', 'Air Quality') },
    { value: 'water', label: t('수질 환경', 'Water Quality') },
    { value: 'odor', label: t('악취 환경', 'Odor Control') },
    { value: 'consulting', label: t('환경 컨설팅', 'Environmental Consulting') },
    { value: 'other', label: t('기타 문의', 'Other') },
  ];

  if (submitted) {
    return (
      <>
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('문의하기', 'Contact Us')}
            </h1>
          </div>
        </section>
        <Section>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              {t('문의가 접수되었습니다', 'Your Inquiry Has Been Submitted')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                '담당자가 확인 후 빠른 시일 내에 연락드리겠습니다. 감사합니다.',
                'Our team will review and contact you shortly. Thank you.'
              )}
            </p>
            <Link to={prefix || '/'}>
              <Button>{t('홈으로 돌아가기', 'Back to Home')}</Button>
            </Link>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('문의하기', 'Contact Us')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t(
              '환경 문제에 대한 전문 상담을 받아보세요.',
              'Get expert consultation on your environmental challenges.'
            )}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactInfo.map((info) => (
            <Card key={info.title}>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-foreground font-medium">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('문의 양식', 'Inquiry Form')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('성함', 'Name')} *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('홍길동', 'John Doe')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t('회사명', 'Company')}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t('(주)회사명', 'Company Inc.')}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('연락처', 'Phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('이메일', 'Email')} *</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="type">{t('문의 유형', 'Inquiry Type')} *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('선택해주세요', 'Please select')} />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('문의 내용', 'Message')} *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t(
                      '문의하실 내용을 자세히 적어주세요.',
                      'Please describe your inquiry in detail.'
                    )}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, privacy: checked as boolean })
                    }
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                    {t(
                      '개인정보 처리방침에 동의합니다.',
                      'I agree to the privacy policy.'
                    )}{' '}
                    <Link to={`${prefix}/privacy`} className="text-primary underline">
                      {t('보기', 'View')}
                    </Link>
                  </Label>
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  {t('문의 접수하기', 'Submit Inquiry')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <div>
            <h3 className="font-semibold mb-4">{t('오시는 길', 'Location')}</h3>
            <div className="aspect-square md:aspect-auto md:h-[500px] bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>{t('지도가 표시될 영역입니다', 'Map will be displayed here')}</p>
                <p className="text-sm mt-2">
                  {t('대전광역시 유성구 (상세주소)', 'Yuseong-gu, Daejeon, South Korea')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
