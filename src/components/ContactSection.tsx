import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Textarea } from '@/src/components/ui/textarea';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '@/src/data/agencyData';

const SERVICE_OPTIONS = [
  'Site Simples (Essencial)',
  'Site Qualificado (Avançado)',
  'Site Premium (Completo)',
  'Design e Identidade Visual',
] as const;

interface FormValues {
  name: string;
  contact: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  message?: string;
}

export function ContactSection() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    contact: '',
    company: '',
    service: 'Site Simples (Essencial)',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  function validate(data: FormValues): FormErrors {
    const nextErrors: FormErrors = {};
    if (data.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo para identificarmos seu pedido.';
    }

    const contactTrimmed = data.contact.trim();
    const digitsOnly = contactTrimmed.replace(/\D/g, '');
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactTrimmed);
    const looksLikePhone = digitsOnly.length >= 10 && digitsOnly.length <= 13;

    if (!looksLikeEmail && !looksLikePhone) {
      nextErrors.contact =
        'Informe um WhatsApp válido com DDD (ex: 11 99999-9999) ou um e-mail válido.';
    }

    if (data.message.trim().length < 10) {
      nextErrors.message =
        'Descreva brevemente o objetivo do projeto (mínimo de 10 caracteres).';
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedData({ ...values });
  }

  function handleReset() {
    setSubmittedData(null);
    setErrors({});
    setValues({
      name: '',
      contact: '',
      company: '',
      service: 'Site Simples (Essencial)',
      message: '',
    });
  }

  const composedWhatsAppUrl = submittedData
    ? buildWhatsAppUrl(
        `Olá, Vyronix Tech! Me chamo ${submittedData.name.trim()}${
          submittedData.company.trim()
            ? ` (${submittedData.company.trim()})`
            : ''
        }.\nContato: ${submittedData.contact.trim()}\nServiço de interesse: ${
          submittedData.service
        }\n\nDetalhes do projeto:\n${submittedData.message.trim()}`,
      )
    : buildWhatsAppUrl(
        'Olá, Vyronix Tech! Gostaria de solicitar um orçamento para meu projeto.',
      );

  return (
    <section
      id="contato"
      className="bg-cement-band py-16 sm:py-24 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Agency Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-accent-text">
                Solicite seu orçamento
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Conte o que sua empresa precisa e receba um retorno ágil.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Preencha o formulário ao lado para estruturar seu pedido ou fale diretamente pelo WhatsApp com nossa equipe. Atendemos empresas e empreendedores de todo o Brasil.
              </p>

              <dl className="mt-8 space-y-5 border-t border-border pt-7">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      WhatsApp comercial
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={buildWhatsAppUrl(
                          'Olá, Vyronix Tech! Gostaria de conversar sobre a criação de um site.',
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-base font-semibold text-foreground hover:text-accent-text transition-colors tabular-nums"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      Instagram oficial
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-base font-semibold text-foreground hover:text-accent-text transition-colors"
                      >
                        {INSTAGRAM_HANDLE}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-subtle text-foreground">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      Prazo de produção
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-foreground">
                      Entrega inicial em até 24 horas após o briefing
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-subtle text-foreground">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      Área de atendimento
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-foreground">
                      Atendimento 100% digital para todo o Brasil
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-background p-6 sm:p-8 shadow-card-token">
              {submittedData ? (
                <div className="py-4" role="status" aria-live="polite">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-success-border bg-success-surface text-success">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Solicitação preparada com sucesso, {submittedData.name}.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Organizamos os dados do seu projeto de{' '}
                    <strong className="font-semibold text-foreground">
                      {submittedData.service}
                    </strong>
                    . Clique no botão abaixo para enviar esta mensagem diretamente no WhatsApp da Vyronix Tech e iniciar seu atendimento imediato.
                  </p>

                  <div className="mt-6 rounded-lg border border-border bg-surface-elevated p-4 text-sm">
                    <p className="font-medium text-foreground">
                      Resumo enviado:
                    </p>
                    <p className="mt-1.5 text-muted-foreground">
                      Contato: {submittedData.contact}
                      {submittedData.company ? ` · Empresa: ${submittedData.company}` : ''}
                    </p>
                    <p className="mt-2 text-foreground/90 whitespace-pre-line">
                      {submittedData.message}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button asChild size="lg">
                      <a
                        href={composedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
                        <span>Enviar agora no WhatsApp</span>
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handleReset}
                    >
                      Editar ou enviar nova mensagem
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Descreva seu projeto
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Campos marcados com * são obrigatórios.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Nome completo *</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Ex: Mariana Oliveira"
                        value={values.name}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) {
                            setErrors((prev) => ({ ...prev, name: undefined }));
                          }
                        }}
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          role="alert"
                          className="text-xs font-medium text-destructive"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-channel">WhatsApp ou E-mail *</Label>
                      <Input
                        id="contact-channel"
                        name="contact"
                        type="text"
                        placeholder="(11) 99999-9999 ou nome@empresa.com.br"
                        value={values.contact}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={
                          errors.contact ? 'error-contact' : undefined
                        }
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev,
                            contact: e.target.value,
                          }));
                          if (errors.contact) {
                            setErrors((prev) => ({
                              ...prev,
                              contact: undefined,
                            }));
                          }
                        }}
                      />
                      {errors.contact && (
                        <p
                          id="error-contact"
                          role="alert"
                          className="text-xs font-medium text-destructive"
                        >
                          {errors.contact}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-company">
                      Nome da empresa ou negócio (opcional)
                    </Label>
                    <Input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Ex: Studio Prime Odontologia"
                      value={values.company}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, company: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Qual serviço você procura?</Label>
                    <div
                      role="radiogroup"
                      aria-label="Serviço de interesse"
                      className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                    >
                      {SERVICE_OPTIONS.map((option) => {
                        const selected = values.service === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() =>
                              setValues((prev) => ({ ...prev, service: option }))
                            }
                            className={
                              selected
                                ? 'min-h-[44px] rounded-lg border border-primary bg-accent px-3.5 py-2 text-left text-sm font-semibold text-accent-foreground transition-colors cursor-pointer'
                                : 'min-h-[44px] rounded-lg border border-border bg-surface-elevated px-3.5 py-2 text-left text-sm font-medium text-foreground transition-colors hover:bg-surface-subtle cursor-pointer'
                            }
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">
                      Como podemos ajudar sua empresa? *
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Conte qual é o ramo do seu negócio, se já possui domínio ou referências que gosta..."
                      value={values.message}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'error-message' : undefined
                      }
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message) {
                          setErrors((prev) => ({ ...prev, message: undefined }));
                        }
                      }}
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        role="alert"
                        className="text-xs font-medium text-destructive"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      Retorno rápido em horário comercial sem compromisso.
                    </p>
                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Solicitar orçamento</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
