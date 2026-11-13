import { Check, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { PRICING_PLANS, buildWhatsAppUrl } from '@/src/data/agencyData';

export function PricingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="planos"
      className="bg-cement-band py-16 sm:py-24 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent-text">
              Valores e pacotes
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sua presença digital, no seu ritmo.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Pacotes transparentes sem mensalidade obrigatória de agência. Escolha o plano ideal ou peça um escopo personalizado pelo WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isHighlighted = Boolean(plan.highlighted);

            return (
              <motion.article
                key={plan.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  isHighlighted
                    ? 'flex flex-col justify-between rounded-xl border border-border-graphite bg-graphite-gradient p-7 sm:p-8 text-secondary-foreground shadow-elevated-token'
                    : 'flex flex-col justify-between rounded-xl border border-border bg-card p-7 sm:p-8 text-card-foreground shadow-card-token'
                }
              >
                <div>
                  <p
                    className={
                      isHighlighted
                        ? 'text-xs font-semibold text-accent-on-dark'
                        : 'text-xs font-semibold text-accent-text'
                    }
                  >
                    {plan.kicker}
                  </p>

                  <h3
                    className={
                      isHighlighted
                        ? 'mt-2 font-display text-2xl font-bold tracking-tight text-secondary-foreground'
                        : 'mt-2 font-display text-2xl font-bold tracking-tight text-foreground'
                    }
                  >
                    {plan.name}
                  </h3>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span
                      className={
                        isHighlighted
                          ? 'font-display text-4xl font-bold tracking-tight text-secondary-foreground tabular-nums'
                          : 'font-display text-4xl font-bold tracking-tight text-foreground tabular-nums'
                      }
                    >
                      {plan.price}
                    </span>
                    <span
                      className={
                        isHighlighted
                          ? 'text-xs text-secondary-foreground/75'
                          : 'text-xs text-muted-foreground'
                      }
                    >
                      {plan.billingNote}
                    </span>
                  </div>

                  <p
                    className={
                      isHighlighted
                        ? 'mt-2 text-xs font-medium text-secondary-foreground/85 tabular-nums'
                        : 'mt-2 text-xs font-medium text-foreground/80 tabular-nums'
                    }
                  >
                    {plan.delivery}
                  </p>

                  <p
                    className={
                      isHighlighted
                        ? 'mt-4 text-sm leading-relaxed text-secondary-foreground/80'
                        : 'mt-4 text-sm leading-relaxed text-muted-foreground'
                    }
                  >
                    {plan.description}
                  </p>

                  <div
                    className={
                      isHighlighted
                        ? 'my-6 h-px w-full bg-border-graphite'
                        : 'my-6 h-px w-full bg-border'
                    }
                  />

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={
                          isHighlighted
                            ? 'flex items-start gap-2.5 text-sm text-secondary-foreground/90'
                            : 'flex items-start gap-2.5 text-sm text-foreground'
                        }
                      >
                        <Check
                          className={
                            isHighlighted
                              ? 'mt-0.5 h-4 w-4 shrink-0 text-accent-on-dark'
                              : 'mt-0.5 h-4 w-4 shrink-0 text-accent-text'
                          }
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <Button
                    asChild
                    size="lg"
                    variant={isHighlighted ? 'default' : 'secondary'}
                    className="w-full"
                  >
                    <a
                      href={buildWhatsAppUrl(plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Solicitar plano pelo WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
