import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Step = 0 | 1 | 2;

type QuoteValues = {
  projectType: string;
  activity: string;
  goals: string;
  digitalTools: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  privacy: boolean;
  website: string;
};

const PROJECT_TYPES = [
  { value: "MAYA WEB", description: "Sito web e presenza digitale" },
  { value: "MAYA CONNECT", description: "Integrazioni, automazioni e sistemi" },
  { value: "MAYA APP", description: "Applicazione dedicata" },
  { value: "ECOSISTEMA COMPLETO", description: "Web, sistemi e applicazione" },
  { value: "NON SO ANCORA", description: "Definiamolo insieme" },
];

const DIGITAL_TOOLS = ["Sì", "In parte", "No"];
const TIMELINES = ["Appena possibile", "Entro 1 mese", "1–3 mesi", "Più avanti", "Da definire"];
const BUDGETS = ["Meno di €1.000", "€1.000 – €2.500", "€2.500 – €5.000", "Oltre €5.000", "Da definire"];
const STEPS = ["Progetto", "Dettagli", "Contatti"];

const INITIAL_VALUES: QuoteValues = {
  projectType: "",
  activity: "",
  goals: "",
  digitalTools: "",
  timeline: "",
  budget: "",
  name: "",
  email: "",
  phone: "",
  businessName: "",
  privacy: false,
  website: "",
};

const CONTROL_CLASS = "mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70";

function Progress({ activeStep }: { activeStep: Step }) {
  return (
    <nav aria-label="Avanzamento richiesta preventivo" className="relative">
      <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-[9px] h-px thread-line opacity-50" />
      <ol className="relative grid grid-cols-3 gap-2">
        {STEPS.map((label, index) => {
          const current = index === activeStep;
          const complete = index < activeStep;
          return (
            <li key={label} aria-current={current ? "step" : undefined} className="flex flex-col items-center gap-2 text-center">
              <span className={`flex size-[19px] items-center justify-center rounded-full border bg-background ${current || complete ? "border-primary" : "border-border"}`}>
                <span className={`size-1.5 rounded-full ${current || complete ? "bg-primary" : "bg-muted-foreground/40"}`} />
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs ${current ? "text-foreground" : "text-muted-foreground"}`}>
                <span className={current || complete ? "text-primary" : ""}>0{index + 1}</span> — {label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} role="alert" className="mt-2 text-sm text-destructive">{message}</p>;
}

export function QuoteForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(0);
  const [values, setValues] = useState<QuoteValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reviewing, setReviewing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const submissionInFlight = useRef(false);

  function updateField<Key extends keyof QuoteValues>(field: Key, value: QuoteValues[Key]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validateCurrentStep() {
    const nextErrors: Record<string, string> = {};

    if (step === 0 && !values.projectType) {
      nextErrors.projectType = "Seleziona da dove vuoi partire.";
    }

    if (step === 1) {
      if (!values.activity.trim()) nextErrors.activity = "Indica di cosa si occupa la tua attività.";
      if (!values.goals.trim()) nextErrors.goals = "Descrivi cosa vorresti migliorare o realizzare.";
      if (!values.digitalTools) nextErrors.digitalTools = "Seleziona una risposta.";
      if (!values.timeline) nextErrors.timeline = "Seleziona quando vorresti iniziare.";
    }

    if (step === 2) {
      if (!values.name.trim()) nextErrors.name = "Inserisci nome e cognome.";
      if (!values.email.trim()) {
        nextErrors.email = "Inserisci un indirizzo email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        nextErrors.email = "Controlla il formato dell'indirizzo email.";
      }
      if (!values.privacy) nextErrors.privacy = "Per proseguire è necessario il consenso privacy.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleContinue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (reviewing || submitting || !validateCurrentStep()) return;
    if (step < 2) {
      setStep((current) => (current + 1) as Step);
    } else {
      setReviewing(true);
    }
  }

  function handleBack() {
    setErrors({});
    setSubmitError("");
    if (reviewing) {
      setReviewing(false);
    } else if (step > 0) {
      setStep((current) => (current - 1) as Step);
    }
  }

  async function handleSendRequest() {
    if (!reviewing || submissionInFlight.current) return;
    submissionInFlight.current = true;
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/preventivo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project: values.projectType,
          activity: values.activity,
          objective: values.goals,
          digitalTools: values.digitalTools,
          timing: values.timeline,
          budget: values.budget,
          name: values.name,
          email: values.email,
          phone: values.phone,
          businessName: values.businessName,
          privacy: values.privacy,
          website: values.website,
        }),
      });

      if (!response.ok) throw new Error("Quote request failed");
      await navigate({ to: "/grazie-preventivo" });
    } catch {
      setSubmitError("Non siamo riusciti a inviare la richiesta. Riprova tra qualche istante.");
    } finally {
      submissionInFlight.current = false;
      setSubmitting(false);
    }
  }

  const selectedProject = PROJECT_TYPES.find((project) => project.value === values.projectType)?.value ?? "";
  const summaryRows = [
    ["Progetto", selectedProject],
    ["Attività", values.activity],
    ["Obiettivo", values.goals],
    ["Strumenti digitali", values.digitalTools],
    ["Quando", values.timeline],
    ["Budget indicativo", values.budget || "Non indicato"],
    ["Nome", values.name],
    ["Email", values.email],
    ["Telefono", values.phone || "Non indicato"],
    ["Nome attività", values.businessName || "Non indicato"],
  ];

  return (
    <div className="mx-auto w-full max-w-[960px]">
      <Progress activeStep={step} />
      <form noValidate onSubmit={handleContinue} className="mt-10 border-t border-border pt-8 md:mt-14 md:pt-10">
        {reviewing ? (
          <section aria-labelledby="quote-review-title">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">RIEPILOGO</p>
            <h2 id="quote-review-title" className="mt-4 font-display text-3xl font-medium leading-tight md:text-4xl">
              Il progetto è pronto per essere inviato.
            </h2>
            <dl className="mt-8 grid gap-x-12 md:grid-cols-2">
              {summaryRows.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-4 border-t border-border py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
                  <dd className="break-words text-sm leading-[1.7] text-foreground">{value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] gap-4 border-t border-border py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Privacy</dt>
                <dd className="flex items-center gap-2 text-sm text-foreground"><Check aria-hidden="true" className="size-4 text-primary" /> Consenso registrato</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" onClick={handleBack} className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-6 text-xs font-bold uppercase tracking-[0.1em] text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <ArrowLeft aria-hidden="true" className="size-4" /> Modifica i dati
              </button>
              <div className="flex flex-col gap-2 sm:items-end">
                <button type="button" onClick={handleSendRequest} disabled={submitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-6 text-xs font-bold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-wait disabled:opacity-50 sm:w-auto">
                  {submitting ? "Invio in corso..." : "Invia la richiesta"} <ArrowRight aria-hidden="true" className="size-4" />
                </button>
                {submitError && <p role="alert" className="max-w-sm text-center text-sm text-destructive sm:text-right">{submitError}</p>}
              </div>
            </div>
          </section>
        ) : (
          <>
            {step === 0 && (
              <section aria-labelledby="quote-project-title">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 / PROGETTO</p>
                <h2 id="quote-project-title" className="mt-4 font-display text-3xl font-medium md:text-4xl">Da dove vuoi partire?</h2>
                <fieldset className="mt-7">
                  <legend className="sr-only">Seleziona il tipo di progetto</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {PROJECT_TYPES.map((project) => (
                      <label key={project.value} className={`flex min-h-[76px] cursor-pointer items-start gap-4 border p-4 transition-colors focus-within:ring-2 focus-within:ring-primary ${values.projectType === project.value ? "border-primary" : "border-border hover:border-primary/50"}`}>
                        <input
                          type="radio"
                          name="projectType"
                          value={project.value}
                          checked={values.projectType === project.value}
                          onChange={() => updateField("projectType", project.value)}
                          aria-invalid={Boolean(errors.projectType)}
                          aria-describedby={errors.projectType ? "projectType-error" : undefined}
                          className="mt-1 size-4 shrink-0 accent-primary"
                        />
                        <span>
                          <span className="block font-display text-base font-semibold uppercase tracking-[0.08em] text-foreground">{project.value}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{project.description}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                  <FieldError id="projectType-error" message={errors.projectType} />
                </fieldset>
              </section>
            )}

            {step === 1 && (
              <section aria-labelledby="quote-details-title">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">02 / DETTAGLI</p>
                <h2 id="quote-details-title" className="mt-4 font-display text-3xl font-medium md:text-4xl">Il tuo progetto</h2>
                <div className="mt-7 grid gap-x-12 gap-y-7 md:grid-cols-2">
                  <label className="block md:col-span-2">
                    <span className="text-sm font-medium text-foreground">Di cosa si occupa la tua attività? *</span>
                    <textarea value={values.activity} onChange={(event) => updateField("activity", event.target.value)} rows={2} aria-invalid={Boolean(errors.activity)} aria-describedby={errors.activity ? "activity-error" : undefined} className={`${CONTROL_CLASS} resize-y`} />
                    <FieldError id="activity-error" message={errors.activity} />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="text-sm font-medium text-foreground">Cosa vorresti migliorare o realizzare? *</span>
                    <textarea value={values.goals} onChange={(event) => updateField("goals", event.target.value)} rows={3} aria-invalid={Boolean(errors.goals)} aria-describedby={errors.goals ? "goals-error" : undefined} className={`${CONTROL_CLASS} resize-y`} />
                    <FieldError id="goals-error" message={errors.goals} />
                  </label>
                  <fieldset>
                    <legend className="text-sm font-medium text-foreground">Hai già un sito, un'app o strumenti digitali? *</legend>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                      {DIGITAL_TOOLS.map((option) => (
                        <label key={option} className="flex min-h-10 cursor-pointer items-center gap-2 text-sm text-foreground">
                          <input type="radio" name="digitalTools" value={option} checked={values.digitalTools === option} onChange={() => updateField("digitalTools", option)} aria-invalid={Boolean(errors.digitalTools)} aria-describedby={errors.digitalTools ? "digitalTools-error" : undefined} className="size-4 accent-primary" />
                          {option}
                        </label>
                      ))}
                    </div>
                    <FieldError id="digitalTools-error" message={errors.digitalTools} />
                  </fieldset>
                  <label className="block">
                    <span className="text-sm font-medium text-foreground">Quando vorresti iniziare? *</span>
                    <select value={values.timeline} onChange={(event) => updateField("timeline", event.target.value)} aria-invalid={Boolean(errors.timeline)} aria-describedby={errors.timeline ? "timeline-error" : undefined} className={CONTROL_CLASS}>
                      <option value="" className="bg-background">Seleziona un periodo</option>
                      {TIMELINES.map((option) => <option key={option} value={option} className="bg-background">{option}</option>)}
                    </select>
                    <FieldError id="timeline-error" message={errors.timeline} />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="text-sm font-medium text-foreground">Budget indicativo <span className="text-muted-foreground">(opzionale)</span></span>
                    <select value={values.budget} onChange={(event) => updateField("budget", event.target.value)} className={CONTROL_CLASS}>
                      <option value="" className="bg-background">Preferisco non indicarlo</option>
                      {BUDGETS.map((option) => <option key={option} value={option} className="bg-background">{option}</option>)}
                    </select>
                  </label>
                </div>
              </section>
            )}

            {step === 2 && (
              <section aria-labelledby="quote-contact-title">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">03 / CONTATTI</p>
                <h2 id="quote-contact-title" className="mt-4 font-display text-3xl font-medium md:text-4xl">Dove possiamo ricontattarti?</h2>
                <div className="mt-7 grid gap-x-12 gap-y-6 md:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-foreground">Nome e cognome *</span>
                    <input type="text" autoComplete="name" value={values.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={CONTROL_CLASS} />
                    <FieldError id="name-error" message={errors.name} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-foreground">Email *</span>
                    <input type="email" autoComplete="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={CONTROL_CLASS} />
                    <FieldError id="email-error" message={errors.email} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-foreground">Telefono</span>
                    <input type="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateField("phone", event.target.value)} className={CONTROL_CLASS} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-foreground">Nome attività</span>
                    <input type="text" autoComplete="organization" value={values.businessName} onChange={(event) => updateField("businessName", event.target.value)} className={CONTROL_CLASS} />
                  </label>
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden opacity-0">
                  <label htmlFor="quote-website">Website</label>
                  <input id="quote-website" name="website" type="text" autoComplete="off" tabIndex={-1} value={values.website} onChange={(event) => updateField("website", event.target.value)} />
                </div>
                <label className="mt-8 flex cursor-pointer items-start gap-3 border-t border-border pt-5 text-sm leading-[1.7] text-muted-foreground">
                  <input type="checkbox" checked={values.privacy} onChange={(event) => updateField("privacy", event.target.checked)} aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} className="mt-1 size-4 shrink-0 accent-primary" />
                  <span>Ho letto l'informativa privacy e acconsento al trattamento dei dati necessari per essere ricontattato. *</span>
                </label>
                <FieldError id="privacy-error" message={errors.privacy} />
              </section>
            )}

            <div className="mt-9 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              {step > 0 ? (
                <button type="button" onClick={handleBack} className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-6 text-xs font-bold uppercase tracking-[0.1em] text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <ArrowLeft aria-hidden="true" className="size-4" /> Indietro
                </button>
              ) : <span />}
              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-7 text-xs font-bold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto">
                {step === 2 ? "Prepara riepilogo" : "Continua"}
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}