import { ArrowUpRight, Check, Globe, Palette } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SERVICES, buildWhatsAppUrl } from '@/src/data/agencyData';

const SERVICE_ICONS: Record<string, typeof Globe> = {
  sites: Globe,
  identidade: Palette,
};

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="servicos" className="bg-background py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent-text">
              Soluções sob medida
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Serviços desenhados para gerar confiança e pedidos pelo WhatsApp.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cada projeto combina clareza visual, carregamento rápido no celular e chamadas estratégicas para o seu atendimento comercial.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.id] ?? Globe;
            const isFeatured = Boolean(service.featured);
            const isFullWidth = Boolean(service.fullWidth);

            return (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  isFullWidth
                    ? 'lg:col-span-12 rounded-xl border border-border bg-warm-surface-gradient p-7 sm:p-9 shadow-card-token'
                    : isFeatured
                      ? 'lg:col-span-6 rounded-xl border border-border-graphite bg-graphite-gradient p-7 sm:p-9 text-secondary-foreground shadow-elevated-token flex flex-col justify-between'
                      : 'lg:col-span-6 rounded-xl border border-border bg-card p-7 sm:p-9 text-card-foreground shadow-card-token flex flex-col justify-between'
                }
              >
                <div
                  className={
                    isFullWidth
                      ? 'grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center'
                      : 'flex flex-col h-full justify-between'
                  }
                >
                  <div className={isFullWidth ? 'lg:col-span-7' : ''}>
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={
                          isFeatured
                            ? 'font-mono text-sm font-medium text-accent-on-dark tabular-nums'
                            : 'font-mono text-sm font-medium text-muted-foreground tabular-nums'
                        }
                      >
                        {service.index}. Serviço
                      </span>
                      <div
                        className={
                          isFeatured
                            ? 'flex h-10 w-10 items-center justify-center rounded-lg bg-surface-graphite-soft text-accent-on-dark border border-border-graphite'
                            : 'flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground'
                        }
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3
                      className={
                        isFeatured
                          ? 'mt-5 font-display text-2xl font-bold tracking-tight text-secondary-foreground'
                          : 'mt-5 font-display text-2xl font-bold tracking-tight text-foreground'
                      }
                    >
                      {service.title}
                    </h3>

                    <p
                      className={
                        isFeatured
                          ? 'mt-3 text-base leading-relaxed text-secondary-foreground/80'
                          : 'mt-3 text-base leading-relaxed text-muted-foreground'
                      }
                    >
                      {service.summary}
                    </p>
                  </div>

                  <div
                    className={
                      isFullWidth
                        ? 'lg:col-span-5 lg:border-l lg:border-border lg:pl-8'
                        : 'mt-7 pt-6 border-t ' +
                          (isFeatured ? 'border-border-graphite' : 'border-border')
                    }
                  >
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className={
                            isFeatured
                              ? 'flex items-start gap-2.5 text-sm text-secondary-foreground/90'
                              : 'flex items-start gap-2.5 text-sm text-foreground'
                          }
                        >
                          <Check
                            className={
                              isFeatured
                                ? 'mt-0.5 h-4 w-4 shrink-0 text-accent-on-dark'
                                : 'mt-0.5 h-4 w-4 shrink-0 text-accent-text'
                            }
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <a
                        href={buildWhatsAppUrl(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          isFeatured
                            ? 'inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta-token transition-all duration-150 hover:bg-primary-hover whitespace-nowrap'
                            : 'inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border-strong bg-surface-elevated px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-150 hover:bg-surface-subtle whitespace-nowrap'
                        }
                      >
                        <span>Solicitar orçamento</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
