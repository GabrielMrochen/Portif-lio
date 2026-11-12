import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/src/data/agencyData';

export function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá, Vyronix Tech! Estou no site e gostaria de solicitar um orçamento.',
  );

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-floating-token transition-transform duration-150 ease-out hover:scale-[1.03] hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">Orçamento no WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
