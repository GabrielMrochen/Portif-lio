import { Clock, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ResilientImage } from '@/src/components/ResilientImage';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sobre" className="bg-cement-band py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          {/* Left Studio Photograph */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full overflow-hidden rounded-xl border border-border shadow-card-token">
              <ResilientImage
                src="/src/assets/images/about_vscode_craft_1794528327810.jpg"
                alt="Notebook exibindo código TypeScript e CSS no Visual Studio Code em fundo preto com letras coloridas"
                fallbackTitle="Vyronix Tech — Estratégia e Execução"
                containerClassName="aspect-[4/3] lg:aspect-auto lg:h-full w-full"
              />
            </div>
          </motion.div>

          {/* Right Agency Story + Differentials */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-sm font-semibold text-accent-text">
              Sobre a Vyronix Tech
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Presença digital estratégica para empresas que precisam crescer com consistência.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A Vyronix Tech é uma agência especializada na criação e desenvolvimento de sites modernos, profissionais e estratégicos. Nosso objetivo é transformar ideias em soluções digitais, ajudando empresas e empreendedores em todo o Brasil a fortalecer sua presença online, conquistar novos clientes e impulsionar seus negócios.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Unimos tecnologia, criatividade e inovação para desenvolver projetos que geram resultados reais, sem processos demorados ou linguagens complicadas.
            </p>

            {/* Competitive Differentials — Clean Editorial Hairline Grid (No thick left accent borders) */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-6 transition-colors duration-150 hover:border-border-strong">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Entrega em até 24 horas
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Agilidade e eficiência para tirar seu projeto do papel sem longas esperas, com fluxo direto de aprovação.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6 transition-colors duration-150 hover:border-border-strong">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Design profissional
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Sites modernos, elegantes e desenvolvidos para transmitir credibilidade imediata à sua marca.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
