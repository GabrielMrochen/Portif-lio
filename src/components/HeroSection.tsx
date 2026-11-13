import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { ResilientImage } from '@/src/components/ResilientImage';
import { HERO_METRICS, buildWhatsAppUrl } from '@/src/data/agencyData';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Olá, Vyronix Tech! Quero solicitar um orçamento para o site da minha empresa.',
  );

  return (
    <section
      id="inicio"
      className="bg-hero-gradient border-b border-border pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero Split (items-stretch for symmetrical editorial framing) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Vyronix Tech <span aria-hidden="true">·</span> Agência Digital no Brasil
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-foreground">
                Sites profissionais que transformam visitas em novos clientes.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Criatividade, tecnologia e resultados em cada projeto. Criamos sites modernos, landing pages estratégicas e identidades visuais para pequenas e médias empresas conquistarem mais clientes pela internet.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Button asChild size="lg">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Solicitar orçamento pelo WhatsApp</span>
                </a>
              </Button>

              <a
                href="#planos"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 px-2 text-sm font-semibold text-foreground transition-colors duration-150 hover:text-accent-text whitespace-nowrap shrink-0"
              >
                <span>Conhecer planos e valores</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-border bg-surface-graphite shadow-elevated-token">
              <ResilientImage
                src="/src/assets/images/hero_vscode_dark_1794528326979.jpg"
                alt="Monitor ultrawide exibindo código de programação React e TypeScript no Visual Studio Code em fundo preto com sintaxe colorida"
                fallbackTitle="Vyronix Tech — Engenharia e Design Web"
                loading="eager"
                containerClassName="aspect-[16/10] lg:aspect-auto lg:h-full w-full"
                className="transition-transform duration-300 ease-out hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Proof & Guarantee Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-border rounded-xl border border-border bg-surface-elevated sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:mt-16 lg:grid-cols-4">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="p-5 sm:p-6">
              <p className="font-display text-2xl font-bold tracking-tight text-foreground tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-accent-text">
                {metric.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
