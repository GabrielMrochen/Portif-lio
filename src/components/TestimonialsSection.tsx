import { Quote } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { TESTIMONIALS } from '@/src/data/agencyData';

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="depoimentos"
      className="bg-background py-16 sm:py-24 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent-text">
            Depoimentos de clientes
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quem confiou na Vyronix Tech para profissionalizar sua presença digital.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-card-token"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <Quote
                    className="h-5 w-5 text-accent-text"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.projectType}
                  </span>
                </div>

                <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-semibold text-accent-text">
                  {item.outcome}
                </p>

                <figcaption className="mt-3">
                  <p className="font-display text-base font-bold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.role} <span aria-hidden="true">·</span> {item.company}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
