import { useState } from 'react';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { ResilientImage } from '@/src/components/ResilientImage';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
  type PortfolioProject,
  buildWhatsAppUrl,
} from '@/src/data/agencyData';

export function PortfolioSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>('Todos');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null,
  );

  const filteredProjects =
    selectedCategory === 'Todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="bg-cement-band py-16 sm:py-24 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent-text">
              Portfólio e resultados
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projetos desenvolvidos para gerar autoridade e vendas reais.
            </h2>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="tablist"
            aria-label="Filtrar projetos por categoria"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-surface-subtle p-1 border border-border self-start"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    isSelected
                      ? 'min-h-[40px] rounded-md bg-surface-elevated px-3.5 py-2 text-xs font-semibold text-foreground shadow-card-token transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer'
                      : 'min-h-[40px] rounded-md px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground whitespace-nowrap shrink-0 cursor-pointer'
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-card-token transition-all duration-200 hover:border-border-strong hover:-translate-y-0.5"
            >
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="flex flex-1 flex-col text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              >
                <ResilientImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackTitle={project.client}
                  containerClassName="aspect-[4/3] w-full border-b border-border"
                  className="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Zero-pill unboxed metadata */}
                    <p className="text-xs font-medium text-muted-foreground">
                      {project.category} <span aria-hidden="true">·</span> Entrega em{' '}
                      <span className="tabular-nums">{project.deliveryTime}</span>
                    </p>

                    <h3 className="mt-2 font-display text-xl font-bold leading-snug text-foreground group-hover:text-accent-text transition-colors duration-150">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {project.client}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-display text-base font-bold text-accent-text tabular-nums">
                      {project.metricValue}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {project.metricContext}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-accent-text transition-colors">
                      <span>Ver detalhes do projeto</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <Dialog
        open={Boolean(activeProject)}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        {activeProject && (
          <DialogContent>
            <DialogHeader>
              <p className="text-xs font-medium text-muted-foreground">
                {activeProject.category} <span aria-hidden="true">·</span>{' '}
                {activeProject.client} <span aria-hidden="true">·</span>{' '}
                <span className="tabular-nums">{activeProject.year}</span>
              </p>
              <DialogTitle>{activeProject.title}</DialogTitle>
              <DialogDescription>{activeProject.summary}</DialogDescription>
            </DialogHeader>

            <ResilientImage
              src={activeProject.image}
              alt={activeProject.imageAlt}
              fallbackTitle={activeProject.client}
              containerClassName="aspect-[16/10] w-full rounded-lg border border-border"
            />

            <div className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-background p-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Resultado obtido
                </p>
                <p className="mt-1 font-display text-lg font-bold text-accent-text tabular-nums">
                  {activeProject.metricValue}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activeProject.metricContext}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Prazo de execução
                </p>
                <p className="mt-1 font-display text-lg font-bold text-foreground tabular-nums">
                  {activeProject.deliveryTime}
                </p>
                <p className="text-xs text-muted-foreground">
                  Do briefing à publicação inicial
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground">
                  Cenário anterior
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {activeProject.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground">
                  Solução aplicada
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold text-foreground">
                Entregáveis do projeto
              </h4>
              <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {activeProject.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-accent-text"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Quer uma estrutura semelhante para sua empresa?
              </p>
              <Button asChild>
                <a
                  href={buildWhatsAppUrl(
                    `Olá, Vyronix Tech! Vi o projeto "${activeProject.title}" no portfólio e gostaria de um orçamento similar.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Solicitar projeto similar</span>
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
