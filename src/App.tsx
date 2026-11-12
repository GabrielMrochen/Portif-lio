/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from '@/src/components/Header';
import { HeroSection } from '@/src/components/HeroSection';
import { AboutSection } from '@/src/components/AboutSection';
import { ServicesSection } from '@/src/components/ServicesSection';
import { PortfolioSection } from '@/src/components/PortfolioSection';
import { TestimonialsSection } from '@/src/components/TestimonialsSection';
import { ContactSection } from '@/src/components/ContactSection';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { PricingSection } from '@/src/components/PricingSection';
import { Footer } from '@/src/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal" className="flex-1">
        {/* 1. Seção inicial impactante */}
        <HeroSection />

        {/* 2. Sobre / Quem sou */}
        <AboutSection />

        {/* 3. Serviços */}
        <ServicesSection />

        {/* 4. Portfólio / Projetos */}
        <PortfolioSection />

        {/* 5. Depoimentos */}
        <TestimonialsSection />

        {/* 6. Formulário de contato */}
        <ContactSection />

        {/* 8. Preços / Planos */}
        <PricingSection />
      </main>

      {/* 7. WhatsApp flutuante */}
      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}
