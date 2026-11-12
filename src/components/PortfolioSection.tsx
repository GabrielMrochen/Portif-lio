import { useState, type KeyboardEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null,
  );

  const filteredProjects =
    selectedCategory === 'Todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const totalSlides = filteredProjects.length;
  const safeIndex = totalSlides > 0 ? currentIndex % totalSlides : 0;
  const currentProject = filteredProjects[safeIndex] ?? filteredProjects[0];

  function handleCategoryChange(category: PortfolioCategory) {
    setSelectedCategory(category);
    setDirection(1);
    setCurrentIndex(0);
  }

  function goToPrevious() {
    if (totalSlides <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }

  function goToNext() {
    if (totalSlides <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }

  function goToSlide(index: number) {
    if (index === safeIndex) return;
    setDirection(index > safeIndex ? 1 : -1);
    setCurrentIndex(index);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }
  }

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
                  onClick={() => handleCategoryChange(category)}
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

        {/* Interactive Projects Carousel */}
        {currentProject && (
          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label="Carrossel de projetos da Vyronix Tech"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="mt-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-background shadow-card-token">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.article
                  key={currentProject.id}
                  custom={direction}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: direction * 28 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: direction * -28 }
                  }
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch"
                >
                  {/* Visual Showcase */}
                  <div className="lg:col-span-7 flex">
                    <ResilientImage
                      src={currentProject.image}
                      alt={currentProject.imageAlt}
                      fallbackTitle={currentProject.client}
                      containerClassName="aspect-[16/10] lg:aspect-auto lg:h-full w-full border-b lg:border-b-0 lg:border-r border-border"
                    />
                  </div>

                  {/* Project Summary & Result */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {currentProject.category}{' '}
                        <span aria-hidden="true">·</span> Entrega em{' '}
                        <span className="tabular-nums">
                          {currentProject.deliveryTime}
                        </span>
                      </p>

                      <h3 className="mt-2.5 font-display text-2xl font-bold leading-snug text-foreground">
                        {currentProject.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-foreground/85">
                        {currentProject.client}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {currentProject.summary}
                      </p>

                      <div className="mt-6 border-t border-border pt-5">
                        <p className="font-display text-lg font-bold text-accent-text tabular-nums">
                          {currentProject.metricValue}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {currentProject.metricContext}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                      <Button
                        type="button"
                        onClick={() => setActiveProject(currentProject)}
                      >
                        <span>Ver detalhes do projeto</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Button>

                      <a
                        href={buildWhatsAppUrl(
                          `Olá, Vyronix Tech! Vi o projeto "${currentProject.title}" no portfólio e gostaria de solicitar um orçamento.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-foreground transition-colors hover:text-accent-text whitespace-nowrap"
                      >
                        Quero um site assim
                      </a>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Carousel Controls Bar */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-medium text-muted-foreground tabular-nums">
                  {String(safeIndex + 1).padStart(2, '0')} /{' '}
                  {String(totalSlides).padStart(2, '0')}
                </span>

                {/* Segmented Slide Selectors */}
                <div
                  className="flex items-center gap-1.5"
                  role="tablist"
                  aria-label="Selecionar projeto do carrossel"
                >
                  {filteredProjects.map((project, idx) => {
                    const isActive = idx === safeIndex;
                    return (
                      <button
                        key={project.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Mostrar projeto ${idx + 1}: ${project.client}`}
                        onClick={() => goToSlide(idx)}
                        className={
                          isActive
                            ? 'h-2.5 w-8 rounded-full bg-primary transition-all duration-200 cursor-pointer'
                            : 'h-2.5 w-2.5 rounded-full bg-border-strong hover:bg-foreground/60 transition-all duration-200 cursor-pointer'
                        }
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  disabled={totalSlides <= 1}
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  disabled={totalSlides <= 1}
                  aria-label="Próximo projeto"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        )}
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
