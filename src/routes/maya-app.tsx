import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AppPhone, AppShowcase } from "@/components/maya/app-showcase";
import {
  Closing,
  EcosystemNav,
  QUOTE,
  Section,
  SiteHeader,
  ThreadRow,
} from "@/components/maya/page-kit";

const TITLE = "Maya App | Il tuo brand nelle mani dei clienti";
const URL_CANONICAL = "https://maya-project.it/maya-app";
const DESC =
  "Un'app con il tuo nome, per prenotare, restare in contatto e offrire i tuoi servizi in modo semplice.";

export const Route = createFileRoute("/maya-app")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL_CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
  }),
  component: MayaAppPage,
});

const MODULES = [
  {
    title: "Prenotazioni",
    description: "Gestisci disponibilità, appuntamenti e richieste direttamente dall'app.",
  },
  {
    title: "Area cliente",
    description: "Uno spazio personale per servizi, dati, appuntamenti e comunicazioni.",
  },
  { title: "Notifiche", description: "Aggiornamenti e conferme su prenotazioni e spostamenti, nel momento giusto." },
  {
    title: "Servizi",
    description: "Permetti ai clienti di scoprire e richiedere i tuoi servizi.",
  },
  {
    title: "Storico e preferenze",
    description: "Il cliente ritrova nell'app le sue prenotazioni e i servizi, ogni volta che gli servono.",
  },
  {
    title: "Spostamenti",
    description: "Tu approvi, rifiuti o proponi un altro orario; il cliente lo vede subito.",
  },
];

const TOUCHPOINTS = [
  { title: "Prenotazioni", position: "md:col-start-1 md:row-start-1" },
  { title: "Comunicazioni", position: "md:col-start-3 md:row-start-1" },
  { title: "Servizi", position: "md:col-start-1 md:row-start-2" },
  { title: "Profilo cliente", position: "md:col-start-3 md:row-start-2" },
];

const SCENARIOS = [
  {
    title: "Beauty & Wellness",
    services: "Prenotazioni · servizi · spostamenti · conferme · profilo cliente",
  },
  {
    title: "Professionisti & Studi",
    services: "Appuntamenti · documenti · comunicazioni · area personale",
  },
  { title: "Servizi & Retail", services: "Catalogo · richieste · acquisti · notifiche · storico" },
];

function MayaAppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-[min(800px,94svh)] flex-col overflow-hidden border-b border-border bg-background max-md:min-h-[min(710px,80svh)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-ambient [animation:none]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
        />
        <SiteHeader />
        <div className="mx-auto grid w-full max-w-[1390px] flex-1 items-center gap-12 px-6 pb-16 pt-10 md:px-12 md:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(290px,0.9fr)] lg:gap-14 lg:px-16 lg:py-12">
          <div className="max-w-2xl">
            <p className="reveal-in font-display text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
              MAYA APP
            </p>
            <h1 className="reveal-in mt-6 font-display text-[clamp(2.7rem,5.4vw,5rem)] font-semibold tracking-[-0.02em] leading-[1.03] [animation-delay:100ms]">
              La tua app, <span className="text-primary">con il tuo nome.</span>
            </h1>
            <p className="reveal-in mt-7 max-w-xl text-base leading-[1.9] text-muted-foreground [animation-delay:200ms] md:text-lg">
              I tuoi clienti prenotano, chiedono di spostare un appuntamento e restano aggiornati su ogni conferma, da un'app che porta il tuo brand.
            </p>
            <div className="reveal-in mt-9 flex flex-wrap gap-3 [animation-delay:300ms]">
              <Button
                asChild
                variant="maya"
                size="lg"
                className="h-12 px-5 text-[11px] font-bold uppercase tracking-[0.1em] md:px-7 md:text-xs"
              >
                <Link to={QUOTE}>
                  Parliamo della tua app <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="mayaOutline"
                size="lg"
                className="h-12 px-5 text-[11px] font-bold uppercase tracking-[0.1em] md:px-7 md:text-xs"
              >
                <a href="#come-funziona">
                  Scopri come funziona <ArrowDownRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="reveal-in relative mx-auto w-full max-w-[350px] [animation-delay:180ms] lg:max-w-none">
            <AppPhone screen="home" caption="CONCEPT INTERFACE" />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-0.5 w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
        />
      </section>

      <section id="come-funziona" className="relative px-6 py-20 md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1390px]">
          <p className="font-sans text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
            01 / CLIENTI
          </p>
          <h2 className="mt-7 max-w-5xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-semibold tracking-[-0.02em] leading-[1.06]">
            I tuoi clienti usano già il telefono.
            <br className="hidden md:block" />{" "}
            <span className="text-chrome">La domanda è: per fare cosa?</span>
          </h2>
          <div className="relative mx-auto mt-14 max-w-[1060px] md:mt-20">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            >
              <path
                d="M230 55 C320 55 350 110 415 110"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity=".32"
                strokeWidth="1"
              />
              <path
                d="M230 165 C320 165 350 110 415 110"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity=".32"
                strokeWidth="1"
              />
              <path
                d="M770 55 C680 55 650 110 585 110"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity=".32"
                strokeWidth="1"
              />
              <path
                d="M770 165 C680 165 650 110 585 110"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity=".32"
                strokeWidth="1"
              />
            </svg>
            <div
              aria-hidden="true"
              className="absolute bottom-14 left-[7px] top-2 w-px bg-primary/25 md:hidden"
            />
            <ul className="relative grid gap-x-8 gap-y-1 md:min-h-[220px] md:grid-cols-[minmax(0,1fr)_10rem_minmax(0,1fr)] md:grid-rows-2 md:gap-y-0">
              {TOUCHPOINTS.map((item) => (
                <li
                  key={item.title}
                  className={`relative z-10 flex min-h-16 items-center gap-4 border-t border-border py-4 md:min-h-0 md:border-0 md:py-3 ${item.position}`}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-[15px] shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background"
                  >
                    <span className="size-[5px] rounded-full bg-primary" />
                  </span>
                  <span className="font-display text-lg text-foreground/90 md:text-xl">
                    {item.title}
                  </span>
                </li>
              ))}
              <li className="relative z-10 flex items-center gap-4 border-t border-primary/30 py-5 md:col-start-2 md:row-span-2 md:row-start-1 md:flex-col md:justify-center md:border-0 md:py-0 md:text-center">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary bg-background"
                >
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <span className="font-display text-xl font-semibold tracking-[-0.01em] text-primary md:absolute md:inset-x-0 md:top-1/2 md:mt-6">
                  Maya App
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Section
        deep
        label="02 / MODULI"
        title={
          <>
            Non un'app standard.
            <br />
            <span className="text-chrome">La tua app.</span>
          </>
        }
      >
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((module, index) => (
            <li
              key={module.title}
              className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-[28px] bg-card p-7 md:p-8"
            >
              <span className="font-display text-sm text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.015em] md:text-2xl">{module.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-[1.85] text-muted-foreground md:text-base">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-deep px-6 py-20 md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1390px]">
          <p className="text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
            03 / Esempi di schermate
          </p>
          <h2 className="mt-7 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-semibold tracking-[-0.02em] leading-[1.06]">
            Un'esperienza costruita <span className="text-chrome">intorno al cliente.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.9] text-muted-foreground md:text-lg">
            Tre schermate di esempio dello stesso prodotto, una per ogni momento del servizio.
          </p>
          <div className="mt-14 md:mt-20">
            <AppShowcase />
          </div>
        </div>
      </section>

      <Section
        label="04 / PROCESSO"
        title={
          <>
            Dall'idea <span className="text-chrome">all'esperienza.</span>
          </>
        }
      >
        <ThreadRow
          items={[
            { t: "IDEA", d: "Partiamo dai tuoi servizi, dai tuoi clienti e da ciò che vuoi ottenere." },
            {
              t: "PROGETTAZIONE",
              d: "Disegniamo le schermate e il percorso del cliente nell'app.",
            },
            { t: "SVILUPPO", d: "Costruiamo l'app e la proviamo con te." },
            {
              t: "CONNESSIONE",
              d: "Colleghiamo l'app agli strumenti che usi già, dove lo strumento lo permette.",
            },
          ]}
        />
      </Section>

      <Section
        deep
        label="05 / ECOSISTEMA"
        title={
          <>
            Un'app diventa realmente utile quando{" "}
            <span className="text-chrome">comunica con il resto del sistema.</span>
          </>
        }
      >
        <div className="mt-12 grid items-center justify-items-center gap-5 md:grid-cols-[1fr_auto_1.2fr_auto_1fr] md:gap-4">
          <Link
            to="/maya-web"
            className="font-display text-base md:text-lg font-semibold tracking-[-0.01em] text-foreground/90 transition-colors hover:text-primary md:text-base"
          >
            MAYA WEB
          </Link>
          <ArrowRight aria-hidden="true" className="size-4 rotate-90 text-primary md:rotate-0" />
          <Link
            to="/maya-connect"
            className="font-display text-base md:text-lg font-semibold tracking-[-0.01em] text-foreground/90 transition-colors hover:text-primary md:text-base"
          >
            MAYA CONNECT
          </Link>
          <ArrowRight aria-hidden="true" className="size-4 rotate-90 text-primary md:rotate-0" />
          <Link
            to="/maya-app"
            className="font-display text-base md:text-lg font-semibold tracking-[-0.01em] text-foreground/90 transition-colors hover:text-primary md:text-base"
          >
            MAYA APP
          </Link>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-[1.9] text-muted-foreground md:text-lg">
          Con Maya Connect l'app può collegarsi agli strumenti che già fanno parte del tuo lavoro.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            variant="mayaOutline"
            size="lg"
            className="h-12 px-7 text-xs font-bold uppercase tracking-[0.1em]"
          >
            <Link to="/maya-connect">
              Scopri Maya Connect <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section
        label="DUE LIVELLI"
        title={
          <>
            Un'attività, <span className="text-chrome">o più persone da coordinare.</span>
          </>
        }
      >
        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            [
              "Maya App Booking",
              "Per un'attività",
              "Prenotazione, area cliente, notifiche e gestione dei servizi, intorno a una sede.",
            ],
            [
              "Maya App Business",
              "Per più persone o più sedi",
              "Tutto ciò che c'è in Booking, per un'attività con più persone o più sedi da coordinare.",
            ],
          ].map(([t, s, d]) => (
            <li key={t} className="rounded-[28px] bg-card p-8 md:p-9 ring-1 ring-primary/30">
              <p className="text-sm font-semibold text-muted-foreground">
                {s}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.015em] md:text-[1.7rem]">{t}</h3>
              <p className="mt-4 text-base leading-[1.9] text-muted-foreground md:text-[17px]">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        label="ESEMPI DI APPLICAZIONE"
        title={
          <>
            Un'app può adattarsi ad <span className="text-chrome">attività molto diverse.</span>
          </>
        }
      >
        <div className="mt-10">
          {SCENARIOS.map((scenario, index) => (
            <article
              key={scenario.title}
              className="grid gap-4 border-t border-border py-7 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8 md:py-9"
            >
              <span className="font-display text-sm text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold tracking-[-0.015em] md:text-2xl">
                {scenario.title}
              </h3>
              <p className="text-[15px] leading-[1.8] text-muted-foreground md:text-base">
                {scenario.services}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <EcosystemNav current="app" />
      <Closing
        title={
          <>
            Costruiamo l'app <span className="text-primary">della tua attività.</span>
          </>
        }
        text={
          <>
            Raccontaci come lavori oggi: progettiamo un'app sui tuoi servizi e sui tuoi clienti.
          </>
        }
        cta="Parliamo del progetto"
        to={QUOTE}
      />
    </main>
  );
}
