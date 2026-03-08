import { HeroSection } from './components/hero-section';
import { HowItWorks } from './components/how-it-works';
import { BenefitsSection } from './components/benefits-section';
import { StatisticsSection } from './components/statistics-section';
import { VisualDemoSection } from './components/visual-demo-section';
import { TestimonialsSection } from './components/testimonials-section';
import { CtaSection } from './components/cta-section';
import { FaqSection } from './components/faq-section';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <HeroSection />
      <HowItWorks />
      <BenefitsSection />
      <StatisticsSection />
      <VisualDemoSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
