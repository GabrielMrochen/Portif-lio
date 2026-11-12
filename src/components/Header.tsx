import { useState } from 'react';
import { Instagram, Menu, MessageCircle, X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import {
  BRAND_LOGO_PATH,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_ITEMS,
  buildWhatsAppUrl,
} from '@/src/data/agencyData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryWhatsAppUrl = buildWhatsAppUrl(
    'Olá, Vyronix Tech! Gostaria de solicitar um orçamento para criação de site.',
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface-elevated/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark with official logo */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground whitespace-nowrap shrink-0"
          aria-label="Vyronix Tech — Início"
        >
          <img
            src={BRAND_LOGO_PATH}
            alt="Logo Vyronix Tech"
            className="h-9 w-9 rounded-full object-cover border border-border-strong shrink-0"
          />
          <span>Vyronix Tech</span>
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-foreground underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Instagram + Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram da Vyronix Tech (${INSTAGRAM_HANDLE})`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground py-2 px-2 rounded-md"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            <span className="hidden lg:inline">{INSTAGRAM_HANDLE}</span>
          </a>

          <Button asChild size="sm">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap shrink-0"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Solicitar orçamento</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="menu-mobile"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-elevated text-foreground transition-colors hover:bg-surface-subtle md:hidden cursor-pointer"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="menu-mobile"
          className="border-t border-border bg-surface-elevated px-4 py-5 md:hidden"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-foreground transition-colors hover:bg-surface-subtle"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-foreground transition-colors hover:bg-surface-subtle"
            >
              Contato
            </a>
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>Instagram {INSTAGRAM_HANDLE}</span>
            </a>

            <Button asChild size="default" className="w-full">
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
