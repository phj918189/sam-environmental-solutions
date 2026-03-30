import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'primary' | 'dark';
}

const Section = ({ children, className, variant = 'default' }: SectionProps) => {
  const isDark = variant === 'dark';
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        {
          'bg-background': variant === 'default',
          'bg-muted': variant === 'muted',
          'bg-primary text-primary-foreground': variant === 'primary',
        },
        className
      )}
      style={isDark ? {
        background: 'linear-gradient(150deg, hsl(215 55% 13%) 0%, hsl(210 65% 18%) 60%, hsl(205 60% 14%) 100%)',
        color: 'hsl(0 0% 98%)',
      } : undefined}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ title, subtitle, centered = true, className }: SectionHeaderProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 inherit-color">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            'text-md mx-auto leading-relaxed break-keep opacity-80',
            'text-center'
            // centered ? 'text-center md:text-justify' : 'text-left md:text-justify'
          )}
          style={{ textJustify: 'inter-word' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { Section, SectionHeader };
