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
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Planos', href: '#planos' },
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

export type PortfolioCategory =
  | 'Todos'
  | 'Criação de Sites'
  | 'Identidade Visual';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: Exclude<PortfolioCategory, 'Todos'>;
  year: string;
  metricValue: string;
  metricContext: string;
  deliveryTime: string;
  image: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'Todos',
  'Criação de Sites',
  'Identidade Visual',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'construtora-horizonte',
    title: 'Portal Institucional e Captação de Obras',
    client: 'Axis Estruturas & Engenharia',
    category: 'Criação de Sites',
    year: '2026',
    metricValue: '+148% em solicitações de orçamento',
    metricContext: 'nos primeiros 90 dias após a publicação',
    deliveryTime: '24 horas',
    image: '/src/assets/images/portfolio_site_institucional_1794526331898.jpg',
    imageAlt:
      'Notebook sobre pedra escura exibindo o site institucional desenvolvido pela Vyronix Tech para empresa de engenharia',
    summary:
      'Site corporativo de alta credibilidade com foco em apresentação de obras executadas e solicitação rápida de propostas via WhatsApp.',
    challenge:
      'A empresa dependia apenas de indicações e possuía um site desatualizado que não transmitia o porte técnico dos projetos realizados.',
    solution:
      'Estruturamos uma vitrine de portfólio técnico com carregamento instantâneo, provas de execução e botões diretos de orçamento integrados ao WhatsApp comercial.',
    deliverables: [
      'Site responsivo completo',
      'Catálogo de obras e serviços',
      'Formulário com roteamento para WhatsApp',
      'SEO técnico inicial',
    ],
  },
  {
    id: 'aurora-identidade',
    title: 'Sistema de Marca e Direção Visual Digital',
    client: 'Aurora Dynamics Consultoria',
    category: 'Identidade Visual',
    year: '2026',
    metricValue: '14 pontos de contato padronizados',
    metricContext: 'entre site, propostas comerciais e banners digitais',
    deliveryTime: '48 horas',
    image: '/src/assets/images/portfolio_identidade_visual_1794526332615.jpg',
    imageAlt:
      'Apresentação editorial de sistema de identidade visual com papelaria corporativa, paleta laranja e tablet com guia de marca',
    summary:
      'Reestruturação completa da linguagem visual da marca para alinhar apresentações comerciais, banners de anúncios e presença web.',
    challenge:
      'A marca utilizava peças desconexas em cada canal, reduzindo a percepção de valor durante negociações com novos clientes.',
    solution:
      'Criamos uma identidade visual coesa com paleta grafite e violeta corporativo, tipografia padronizada e kit de banners prontos para campanhas.',
    deliverables: [
      'Guia visual e paleta corporativa',
      'Templates para banners e redes sociais',
      'Sistema tipográfico para web',
      'Aplicação em landing page institucional',
    ],
  },
  {
    id: 'vertice-consultoria',
    title: 'Landing Page de Alta Conversão B2B',
    client: 'Vértice Consultoria Empresarial',
    category: 'Criação de Sites',
    year: '2026',
    metricValue: '+92% em reuniões agendadas via WhatsApp',
    metricContext: 'em comparação ao site antigo da consultoria',
    deliveryTime: '24 horas',
    image: '/src/assets/images/hero_vyronix_studio_1794526330552.jpg',
    imageAlt:
      'Monitor widescreen e notebook exibindo landing page corporativa moderna desenvolvida pela Vyronix Tech',
    summary:
      'Página estratégica desenvolvida no formato Site Qualificado para transformar visitas de anúncios em conversas diretas com o time comercial.',
    challenge:
      'Os anúncios geravam cliques, mas a página anterior tinha navegação confusa e carregamento lento no celular.',
    solution:
      'Criamos uma arquitetura direta com prova social logo abaixo da dobra, apresentação clara dos serviços e CTA fixo para agendamento pelo WhatsApp.',
    deliverables: [
      'Design personalizado mobile-first',
      'Estrutura até 5 seções estratégicas',
      'Integração direta com WhatsApp',
      'SEO técnico e Open Graph',
    ],
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
