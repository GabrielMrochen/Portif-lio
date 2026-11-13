export const WHATSAPP_NUMBER = '5511971653788';
export const WHATSAPP_DISPLAY = '(11) 97165-3788';
export const INSTAGRAM_HANDLE = '@vyronix.tech';
export const INSTAGRAM_URL = 'https://instagram.com/vyronix.tech';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
];

export interface HeroMetric {
  value: string;
  label: string;
  detail: string;
}

export const HERO_METRICS: HeroMetric[] = [
  {
    value: 'Até 24h',
    label: 'Entrega ágil',
    detail: 'Primeira versão publicada com agilidade para não travar suas vendas.',
  },
  {
    value: '100%',
    label: 'Responsivo',
    detail: 'Experiência fluida em celulares, tablets e computadores.',
  },
  {
    value: 'SEO + AA',
    label: 'Padrão técnico',
    detail: 'Estrutura preparada para o Google e leitura com contraste acessível.',
  },
  {
    value: 'Brasil',
    label: 'Atendimento direto',
    detail: 'Suporte próximo pelo WhatsApp para empresas de qualquer estado.',
  },
];

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
  whatsappMessage: string;
  featured?: boolean;
  fullWidth?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'sites',
    index: '01',
    title: 'Criação de Sites',
    summary:
      'Desenvolvimento de sites modernos, responsivos e personalizados para empresas, profissionais liberais e empreendedores que precisam gerar confiança e receber contatos todos os dias.',
    deliverables: [
      'Arquitetura pensada para converter visitantes no WhatsApp',
      'Velocidade otimizada e estrutura preparada para buscas no Google',
      'Layout exclusivo alinhado ao posicionamento da sua empresa',
    ],
    whatsappMessage:
      'Olá, Vyronix Tech! Gostaria de solicitar um orçamento para Criação de Sites.',
    featured: true,
  },
  {
    id: 'identidade',
    index: '02',
    title: 'Design e Identidade Visual',
    summary:
      'Criação de layouts, banners e elementos visuais estratégicos para fortalecer a identidade da sua marca e diferenciar seu negócio da concorrência.',
    deliverables: [
      'Direção visual consistente para site, redes sociais e campanhas',
      'Banners comerciais e peças de apresentação institucional',
      'Sistema de cores e tipografia com padrão profissional',
    ],
    whatsappMessage:
      'Olá, Vyronix Tech! Gostaria de solicitar um orçamento para Design e Identidade Visual.',
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  outcome: string;
  name: string;
  role: string;
  company: string;
  projectType: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'Antes da Vyronix Tech, nossos clientes pediam informações no Instagram e desistiam antes de ver nossos serviços. Em 24 horas recebemos o site pronto, organizado e com botão direto para o nosso WhatsApp.',
    outcome: 'Dobrou os atendimentos qualificados já no primeiro mês.',
    name: 'Rafael Mendes',
    role: 'Sócio-Diretor',
    company: 'Mendes Climatização Comercial',
    projectType: 'Site Simples',
  },
  {
    id: 't2',
    quote:
      'Precisávamos tirar nosso site institucional do papel sem burocracia e sem esperar meses por uma agência tradicional. O layout ficou limpo, funciona muito bem no celular e passou confiança imediata para quem pede orçamento.',
    outcome: 'Mais de 40 novos pedidos de orçamento recebidos nas 3 semanas iniciais.',
    name: 'Camila Vasconcelos',
    role: 'Fundadora',
    company: 'Casa Nobre Interiores',
    projectType: 'Site Qualificado',
  },
  {
    id: 't3',
    quote:
      'A combinação de visual profissional com comunicação objetiva mudou a forma como nossa empresa é percebida em reuniões comerciais. Hoje enviamos o link do site e o cliente já entende o nível do nosso trabalho.',
    outcome: 'Aumento de 35% na aprovação de propostas enviadas.',
    name: 'Eduardo Nogueira',
    role: 'Gerente Comercial',
    company: 'Nogueira & Associados Contabilidade',
    projectType: 'Site + Identidade Visual',
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  kicker: string;
  price: string;
  billingNote: string;
  delivery: string;
  description: string;
  highlighted?: boolean;
  features: string[];
  whatsappMessage: string;
}

export const BRAND_LOGO_PATH =
  '/assets/aistudio/WhatsApp_Image_2026-11-12_at_20.41.12_2caf758d.jpeg';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'site-simples',
    name: 'Site Simples',
    kicker: 'Pacote Essencial',
    price: 'R$ 300',
    billingNote: 'valor único do pacote',
    delivery: 'Entrega em até 24 horas',
    description:
      'Ideal para profissionais e negócios locais que precisam marcar presença online rápida com foco em contato pelo WhatsApp.',
    features: [
      'Design Moderno',
      'Página Única (One-Page)',
      'Adaptação Mobile',
      'Botão WhatsApp',
      'Formulário Simples',
    ],
    whatsappMessage:
      'Olá, Vyronix Tech! Tenho interesse no pacote Site Simples — Pacote Essencial (R$ 300) e gostaria de iniciar meu projeto.',
  },
  {
    id: 'site-qualificado',
    name: 'Site Qualificado',
    kicker: 'Pacote Avançado · Mais escolhido',
    price: 'R$ 600',
    billingNote: 'valor único do pacote',
    delivery: 'Sua presença digital no seu ritmo',
    description:
      'Perfeito para empresas em crescimento que precisam apresentar serviços em múltiplas páginas e fortalecer a imagem nas redes e no Google.',
    highlighted: true,
    features: [
      'Design Personalizado',
      'Até 5 Páginas',
      'Adaptação Mobile Premium',
      'SEO Básico',
      'Integração Redes Sociais',
      'Galeria de Fotos',
    ],
    whatsappMessage:
      'Olá, Vyronix Tech! Tenho interesse no pacote Site Qualificado — Pacote Avançado (R$ 600) e gostaria de solicitar um orçamento.',
  },
  {
    id: 'site-premium',
    name: 'Site Premium',
    kicker: 'Pacote Completo',
    price: 'R$ 1.000',
    billingNote: 'valor único do pacote',
    delivery: 'Projeto sob medida com atendimento prioritário',
    description:
      'Solução completa para empresas que buscam posicionamento de alto nível, produção de conteúdo, captura de leads e escalabilidade total.',
    features: [
      'Design Exclusivo e Interativo',
      'Páginas Ilimitadas',
      'Design Ultra Mobile-First',
      'SEO Avançado + Análise',
      'Blog Integrado',
      'Ferramenta de Newsletter',
      'Atendimento Prioritário',
    ],
    whatsappMessage:
      'Olá, Vyronix Tech! Tenho interesse no pacote Site Premium — Pacote Completo (R$ 1.000) e gostaria de conversar sobre meu projeto.',
  },
];
