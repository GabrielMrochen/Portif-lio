import { Instagram, MessageCircle } from 'lucide-react';
import {
  BRAND_LOGO_PATH,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '@/src/data/agencyData';

export function Footer() {
  const footerWhatsAppUrl = buildWhatsAppUrl(
    'Olá, Vyronix Tech! Gostaria de falar sobre a criação de um site.',
  );

  return (
    <footer className="bg-surface-graphite-deep text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 font-display text-xl font-bold tracking-tight text-secondary-foreground"
            >
              <img
                src={BRAND_LOGO_PATH}
                alt="Logo Vyronix Tech"
                className="h-10 w-10 rounded-full object-cover border border-border-graphite shrink-0"
              />
              <span>Vyronix Tech</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary-foreground/75">
              Criatividade, tecnologia e resultados em cada projeto. Desenvolvimento de sites profissionais, landing pages e identidade visual para negócios em todo o Brasil.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold text-secondary-foreground">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-secondary-foreground/75 transition-colors hover:text-secondary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold text-secondary-foreground">
              Atendimento direto
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-secondary-foreground/85 transition-colors hover:text-accent-on-dark"
                >
                  <MessageCircle className="h-4 w-4 text-accent-on-dark" aria-hidden="true" />
                  <span className="tabular-nums">WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-secondary-foreground/85 transition-colors hover:text-accent-on-dark"
                >
                  <Instagram className="h-4 w-4 text-accent-on-dark" aria-hidden="true" />
                  <span>Instagram: {INSTAGRAM_HANDLE}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border-graphite pt-7 text-xs text-secondary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vyronix Tech. Todos os direitos reservados.</p>
          <p>Atendimento digital para pequenas e médias empresas no Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
