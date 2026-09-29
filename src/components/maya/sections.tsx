import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const QUOTE = "/preventivo";

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="relative flex size-2.5 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary/30 node-pulse" />
        <span className="size-1.5 rounded-full bg-primary" />
      </span>
      {index} / {children}
    </div>
  );
}

/* Filo verticale che collega le sezioni */
function ThreadConnector() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-24 w-px md:h-32">
      <div className="absolute inset-0 thread-vertical" />
      <div className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-primary thread-travel" />
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    t: "Analizziamo",
    d: [
      "Studiamo il tuo business, i tuoi clienti, gli strumenti che utilizzi e gli obiettivi che vuoi raggiungere.",
    ],
  },
  {
    n: "02",
    t: "Progettiamo",
    d: [
      "Trasformiamo esigenze e idee in una soluzione digitale concreta.",
      "Ogni progetto nasce da una strategia, non da un modello standard.",
    ],
  },
  {
    n: "03",
    t: "Curiamo le connessioni",
    d: [
      "Colleghiamo strumenti, dati e processi creando un ecosistema digitale capace di evolvere nel tempo.",
    ],
  },
];

export function MetodoSection() {
  return (
    <section id="metodo" className="relative px-6 py-20 md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1390px]">
        <SectionLabel index="02">Metodo Maya</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.75rem)] font-medium leading-[1.05]">
            Il nostro <span className="text-chrome">metodo</span>
          </h2>
          <div className="space-y-4 self-end text-base leading-[1.95] text-muted-foreground md:text-lg">
            <p className="text-foreground">
              Ogni progetto nasce dalla comprensione della tua realtà.
            </p>
            <p>
              Analizziamo, progettiamo e colleghiamo ogni elemento digitale per creare una soluzione
              costruita intorno alla tua attività.
            </p>
          </div>
        </div>

        <div className="relative mt-16 md:mt-24">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[7px] hidden h-px thread-line md:block"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px thread-vertical md:hidden"
          />
          <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
            {STEPS.map((s, i) => (
              <li key={s.n} className="relative pl-10 md:pl-0 md:pt-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex size-[15px] items-center justify-center rounded-full border border-primary/60 bg-background"
                >
                  <span
                    className="size-[5px] rounded-full bg-primary node-pulse"
                    style={{ animationDelay: `${(i * 16) / 3}s` }}
                  />
                </span>
                <span className="font-display text-sm text-muted-foreground">{s.n}</span>
                <h3 className="mt-3 font-display text-2xl font-medium uppercase tracking-[0.04em] md:text-[1.7rem]">
                  {s.t}
                </h3>
                <div className="mt-5 max-w-sm space-y-3 text-base leading-[1.9] text-muted-foreground md:text-[17px]">
                  {s.d.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const SOLUTIONS = [
  {
    to: "/maya-web" as const,
    k: "Maya Web",
    t: "La tua identità digitale.",
    d: "Costruiamo siti web progettati per raccontare il valore del tuo brand e creare un'esperienza digitale capace di trasformare visitatori in clienti.",
    p: ["Design personalizzato", "Esperienza utente studiata", "Struttura orientata alla crescita"],
  },
  {
    to: "/maya-connect" as const,
    k: "Maya Connect",
    t: "Il digitale che lavora insieme.",
    d: "Colleghiamo il tuo sito, i tuoi strumenti e i tuoi processi creando un sistema digitale più semplice, efficiente e indipendente.",
    p: [
      "Integrazioni tra piattaforme",
      "Collegamento con gestionali esistenti",
      "Automazioni e flussi personalizzati",
    ],
    core: true,
  },
  {
    to: "/maya-app" as const,
    k: "Maya App",
    t: "La tua esperienza digitale proprietaria.",
    d: "Progettiamo applicazioni dedicate per offrire ai tuoi clienti servizi più semplici, veloci e personalizzati.",
    p: ["Applicazioni mobile", "Area clienti", "Esperienze digitali dedicate"],
  },
];

export function SoluzioniSection() {
  return (
    <section
      id="soluzioni"
      className="relative overflow-hidden bg-deep px-6 py-20 md:px-12 md:py-32 lg:px-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 solutions-glow" />
      <div className="relative mx-auto max-w-[1390px]">
        <SectionLabel index="03">Ecosistema</SectionLabel>
        <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.75rem)] font-medium leading-[1.05]">
          Le nostre <span className="text-chrome">soluzioni</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-[1.95] text-muted-foreground md:text-lg">
          Tre parti dello stesso sistema, cucite insieme da un unico filo.
        </p>

        <div className="relative mt-16 md:mt-24">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[11px] top-6 w-px thread-vertical lg:left-[calc(33%-1px)]"
          />
          {SOLUTIONS.map((s) => (
            <article
              key={s.k}
              className={`relative grid gap-6 border-t py-12 pl-10 lg:grid-cols-[33%_1fr_0.8fr] lg:gap-12 lg:pl-0 ${s.core ? "solution-core border-primary/40 py-16 md:py-24 lg:py-28" : "border-border lg:py-16"}`}
            >
              {s.core && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px thread-line"
                />
              )}
              <span
                aria-hidden="true"
                className={`absolute flex items-center justify-center rounded-full border bg-deep ${s.core ? "left-[-8px] top-[4.1rem] size-10 border-primary shadow-[0_0_32px_var(--primary)] md:top-[6.1rem] lg:left-[calc(33%-20px)] lg:top-[7.1rem]" : "left-0 top-[3.4rem] size-6 border-primary/50 lg:left-[calc(33%-12px)] lg:top-[4.4rem]"}`}
              >
                {s.core && (
                  <span className="absolute -inset-3 rounded-full border border-primary/30 node-ring" />
                )}
                {s.core && (
                  <span className="absolute -inset-7 rounded-full border border-primary/15 node-ring [animation-delay:8s]" />
                )}
                <span
                  className={`rounded-full bg-primary ${s.core ? "size-3 node-pulse" : "size-1.5"}`}
                />
              </span>
              <div className="lg:pr-16">
                <p
                  className={`font-display font-semibold uppercase tracking-[0.22em] ${s.core ? "text-base text-primary md:text-lg" : "text-sm text-muted-foreground"}`}
                >
                  {s.k}
                </p>
                {s.core && (
                  <p className="mt-4 block w-fit border border-primary/40 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Il cuore del sistema
                  </p>
                )}
                {s.core && (
                  <p className="mt-8 max-w-xs font-display text-2xl leading-snug text-chrome md:text-[1.7rem]">
                    Il filo che unisce il tuo ecosistema digitale.
                  </p>
                )}
                <Link
                  to={s.to}
                  className={`mt-6 inline-flex items-center gap-2 border-b pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary ${s.core ? "border-primary text-primary" : "border-border"}`}
                >
                  Scopri {s.k} <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </Link>
              </div>
              <div className="lg:pl-8">
                <h3
                  className={`font-display font-medium leading-[1.1] ${s.core ? "text-[clamp(2.3rem,4.4vw,4rem)]" : "text-[clamp(1.6rem,2.6vw,2.4rem)]"}`}
                >
                  {s.t}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-[1.95] text-muted-foreground md:text-lg">
                  {s.d}
                </p>
                {s.core && (
                  <blockquote className="mt-8 border-l border-primary pl-5 font-display text-lg leading-relaxed text-foreground md:text-xl">
                    Non sostituiamo necessariamente gli strumenti che utilizzi.
                    <br />
                    <span className="text-primary">Costruiamo connessioni intorno ad essi.</span>
                  </blockquote>
                )}
              </div>
              <ul className="space-y-3 self-start lg:pt-2">
                {s.p.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 border-b border-border/60 pb-3 text-[15px] text-foreground/90 md:text-base"
                  >
                    <span aria-hidden="true" className="h-px w-5 bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "Studio professionale",
    ctx: "Uno studio con appuntamenti gestiti tra telefono, email e fogli di calcolo.",
    goal: "Ridurre il lavoro manuale e offrire ai clienti una prenotazione semplice.",
    sol: "Sito su misura collegato al gestionale esistente, con prenotazioni e promemoria automatici.",
    tech: "Maya Web · Maya Connect",
  },
  {
    name: "Attività retail locale",
    ctx: "Un negozio con clienti fidelizzati ma nessun canale digitale diretto.",
    goal: "Creare un rapporto continuo con i clienti oltre il punto vendita.",
    sol: "App dedicata con area clienti, programma fedeltà e comunicazioni personalizzate.",
    tech: "Maya App · Maya Connect",
  },
];

export function EsigenzaSection() {
  return (
    <section className="relative overflow-hidden bg-deep px-6 py-24 md:px-12 md:py-40 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-ambient opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 thread-vertical"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(2.1rem,4.6vw,4rem)] font-medium leading-[1.1]">
          Dietro ogni progetto c'è <span className="text-chrome">un'esigenza reale.</span>
        </h2>
        <div className="mx-auto mt-10 max-w-xl space-y-5 text-lg leading-[1.9] text-muted-foreground md:text-xl">
          <p>Ogni attività ha problemi, obiettivi e strumenti diversi.</p>
          <p className="font-display text-2xl text-foreground md:text-[1.7rem]">
            Prima della tecnologia viene la comprensione.
          </p>
          <p>
            Analizziamo ciò che serve davvero e costruiamo la soluzione più adatta alla tua realtà.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProgettiSection() {
  return (
    <section id="progetti" className="relative px-6 py-20 md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1390px]">
        <SectionLabel index="04">Casi studio</SectionLabel>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.75rem)] font-medium leading-[1.05]">
            Progetti <span className="text-chrome">costruiti</span>
          </h2>
          <div className="space-y-4 self-end text-base leading-[1.95] text-muted-foreground md:text-lg">
            <p className="text-foreground">Ogni progetto nasce da un'esigenza reale.</p>
            <p>
              Analizziamo il problema, progettiamo la soluzione e costruiamo strumenti digitali su
              misura.
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          {PROJECTS.map((p, i) => (
            <article key={p.name} className="group border-t border-border py-10 md:py-14">
              <div className="flex items-baseline gap-5">
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-medium transition-colors group-hover:text-primary md:text-4xl">
                  {p.name}
                </h3>
              </div>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                {(
                  [
                    ["Contesto", p.ctx],
                    ["Obiettivo", p.goal],
                    ["Soluzione", p.sol],
                    ["Tecnologia utilizzata", p.tech],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-3 text-[15px] leading-[1.85] text-foreground/90 md:text-base">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section
      id="contatti"
      className="relative isolate overflow-hidden px-6 pb-16 pt-28 text-center md:px-12 md:pt-48 lg:px-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-ambient" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-28 w-px -translate-x-1/2 thread-vertical"
      />
      <div className="relative mx-auto max-w-5xl">
        <h2 className="font-display text-[clamp(2.6rem,6.8vw,6.5rem)] font-medium leading-[1.02]">
          Il tuo business è unico.
          <br />
          <span className="text-chrome">Il tuo digitale dovrebbe esserlo.</span>
        </h2>
        <div className="mx-auto mt-10 max-w-xl space-y-3 text-lg leading-[1.9] text-muted-foreground md:text-xl">
          <p className="text-foreground">Raccontaci il tuo progetto.</p>
          <p>Costruiamo insieme una soluzione digitale progettata intorno alla tua crescita.</p>
        </div>
        <div className="relative mt-14 inline-block">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-primary/20 blur-2xl thread-pulse"
          />
          <Button
            asChild
            variant="maya"
            size="lg"
            className="relative h-16 px-10 text-sm font-bold uppercase tracking-[0.14em] md:h-[4.5rem] md:px-14 md:text-base"
          >
            <Link to={QUOTE}>
              Inizia il progetto <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto mt-28 h-px w-[min(82vw,820px)] thread-line" />
      <p className="relative mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        © Maya Project <span className="px-2 text-primary">·</span> Cuciamo il digitale intorno al
        tuo brand
      </p>
    </section>
  );
}

export { ThreadConnector };
