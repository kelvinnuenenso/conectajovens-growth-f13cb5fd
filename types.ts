import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BenefitProps {
  text: string;
}

export interface PricingPlanProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  image: string;
}
