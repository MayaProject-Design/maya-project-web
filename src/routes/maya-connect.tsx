import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Closing, PageHero, QUOTE, Section, ThreadRow } from "@/components/maya/page-kit";

const TITLE = "Maya Connect | Integrazioni e automazioni digitali";
const URL_CANONICAL = "https://maya-project.it/maya-connect";
const DESC =
  "Colleghiamo strumenti, dati e processi per creare un sistema digitale unico intorno al tuo business.";

export const Route = createFileRoute("/maya-connect")({
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
  component: MayaConnectPage,
});

/* Sistemi del cliente disposti attorno al nodo Maya Connect */
const NAMES = [
  "Maya Web",
  "Clienti",
  "Prenotazioni",
  "Dati",
  "Maya App",
  "Automazioni",
  "Strumenti aziendali",
];
const SYSTEMS = NAMES.map((n, i) => {
  const t = -Math.PI / 2 + (i * 2 * Math.PI) / NAMES.length;
  return { n, x: Math.round(500 + 360 * Math.cos(t)), y: Math.round(270 + 190 * Math.sin(t)) };
});

function ConnectDiagram() {
  const cx = 500,
    cy = 270;
  return (
    <div className="relative mx-auto mt-16 w-full max-w-[1000px] md:mt-20">
      <svg
        viewBox="0 0 1000 560"
        className="w-full"
        role="img"
        aria-label="Maya Web, Maya App, clienti, prenotazioni, dati, automazioni e strumenti aziendali coordinati da Maya Connect"
      >
        <defs>
          <radialGradient id="cn-spark">
            <stop offset="0" stopColor="var(--foreground)" />
            <stop offset=".35" stopColor="var(--primary)" stopOpacity=".8" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cn-core">
            <stop offset="0" stopColor="var(--primary)" stopOpacity=".35" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r="200" fill="url(#cn-core)" />
        <ellipse
          cx={cx}
          cy={cy}
          rx="360"
          ry="190"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity=".08"
        />
        {SYSTEMS.map((s, i) => {
          const d = `M${s.x} ${s.y} Q ${(s.x + cx) / 2 + (s.y - cy) * 0.25} ${(s.y + cy) / 2 - (s.x - cx) * 0.12} ${cx} ${cy}`;
          return (
            <g key={s.n}>
              <path
                id={`cn-${i}`}
                d={d}
                fill="none"
                stroke="var(--primary)"
                strokeOpacity=".35"
                strokeWidth="1"
              />
              <circle r="8" fill="url(#cn-spark)" opacity="0">
                <set attributeName="opacity" to="1" begin={`${i * 4}s`} />
                <animateMotion
                  dur="24s"
                  begin={`${i * 4}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="spline"
                  keySplines=".65 0 .35 1"
                >
                  <mpath href={`#cn-${i}`} />
                </animateMotion>
              </circle>
              <circle
                cx={s.x}
                cy={s.y}
                r="5"
                fill="var(--primary)"
                className="node-pulse"
                style={{ animationDelay: `${i * 4}s` }}
              />
              <circle
                cx={s.x}
                cy={s.y}
                r="12"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity=".3"
              />
              <text
                x={s.x}
                y={s.y < cy - 40 ? s.y - 26 : s.y + 38}
                textAnchor="middle"
                fill={s.n.startsWith("Maya") ? "var(--primary)" : "var(--foreground)"}
                style={{
                  font: "500 15px var(--font-display)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                {s.n}
              </text>
            </g>
          );
        })}
        <circle
          cx={cx}
          cy={cy}
          r="46"
          fill="var(--background)"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r="62"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity=".25"
          className="node-ring"
        />
        <text
          x={cx}
          y={cy - 2}
          textAnchor="middle"
          fill="var(--foreground)"
          style={{ font: "600 10px var(--font-display)", letterSpacing: "0.18em" }}
        >
          MAYA
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fill="var(--primary)"
          style={{ font: "600 11px var(--font-display)", letterSpacing: "0.14em" }}
        >
          CONNECT
        </text>
      </svg>
    </div>
  );
}

function Nodes({ items, connected }: { items: string[]; connected?: boolean }) {
  return (
    <div className="relative">
      {connected && (
        <div
          aria-hidden="true"
          className="absolute bottom-3 left-[7px] top-3 w-px thread-vertical"
        />
      )}
      <ul className="space-y-5">
        {items.map((n) => (
          <li key={n} className="relative flex items-center gap-5">
            <span
              aria-hidden="true"
              className={`flex size-[15px] shrink-0 items-center justify-center rounded-full border bg-background ${connected ? "border-primary/60" : "border-border"}`}
            >
              <span
                className={`size-[5px] rounded-full ${connected ? "bg-primary" : "bg-muted-foreground/50"}`}
              />
            </span>
            <span
              className={`font-display text-lg md:text-xl ${connected ? "text-foreground" : "text-muted-foreground"}`}
            >
              {n}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const TOOLS = ["Sito web", "Gestione clienti", "Prenotazioni", "Applicazioni"];

function MayaConnectPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        kicker="MAYA CONNECT"
        title={
          <>
            Il filo che unisce il tuo <span className="text-primary">ecosistema digitale.</span>
          </>
        }
        subtitle={
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chrome">
              Il cuore dell'ecosistema Maya
            </p>
            <p className="mt-6 font-display text-xl text-foreground md:text-2xl">
              Colleghiamo strumenti, dati e processi per creare un sistema digitale unico intorno al
              tuo business.
            </p>
            <p className="mt-5">
              Non un prodotto singolo, ma l'infrastruttura che permette ai tuoi elementi digitali di
              comunicare tra loro: un sistema più semplice, efficiente e costruito intorno al tuo
              modo di lavorare.
            </p>
          </>
        }
      >
        <Button
          asChild
          variant="maya"
          size="lg"
          className="reveal-in mt-12 h-13 px-8 text-xs font-bold uppercase tracking-[0.1em] [animation-delay:300ms]"
        >
          <Link to={QUOTE}>
            Inizia il progetto <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section
        label="01 / Il problema"
        title={
          <>
            Ogni attività cresce.{" "}
            <span className="text-chrome">Anche il digitale dovrebbe farlo.</span>
          </>
        }
      >
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-5 text-base leading-[1.95] text-muted-foreground md:text-lg">
            <p className="font-display text-xl text-foreground md:text-2xl">
              Molti strumenti lavorano separatamente.
            </p>
            <p>
              Sito web, gestione clienti, prenotazioni e applicazioni spesso non comunicano tra
              loro.
            </p>
            <p className="border-l border-primary pl-5 text-foreground">
              Maya Connect nasce per creare un collegamento tra questi elementi.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Prima
              </p>
              <Nodes items={TOOLS} />
            </div>
            <div>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Dopo
              </p>
              <Nodes items={TOOLS} connected />
            </div>
          </div>
        </div>
      </Section>

      <Section
        deep
        label="02 / Cos'è Maya Connect"
        title={
          <>
            Non sostituiamo <span className="text-primary">ciò che utilizzi.</span>
          </>
        }
      >
        <p className="mt-8 max-w-2xl text-base leading-[1.95] text-muted-foreground md:text-lg">
          Costruiamo connessioni intorno agli strumenti che già utilizzi, creando un ecosistema
          digitale più ordinato e intelligente.
        </p>
        <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
          {[
            ["Integrazioni", "Colleghiamo servizi e piattaforme già presenti."],
            ["Automazioni", "Riduciamo attività ripetitive attraverso flussi personalizzati."],
            ["Dati", "Organizziamo informazioni per renderle più utili."],
            ["Esperienza cliente", "Creiamo percorsi digitali più semplici per i tuoi clienti."],
          ].map(([t, d]) => (
            <li key={t} className="border-t border-border py-8">
              <h3 className="font-display text-2xl font-medium md:text-3xl">{t}</h3>
              <p className="mt-3 text-base leading-[1.9] text-muted-foreground md:text-lg">{d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-2xl border-l border-primary pl-5 text-base leading-[1.9] text-foreground md:text-lg">
          Maya Connect si aggancia a qualsiasi livello: a una base{" "}
          <Link
            to="/maya-web"
            hash="livelli"
            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Maya Start
          </Link>
          , a un sito Maya Web o Maya Web Business, a un'app. Chi parte in piccolo non deve
          rifare nulla per collegarsi dopo agli strumenti che usa già.
        </p>
      </Section>

      <Section
        label="03 / Come funziona"
        title={
          <>
            Dal collegamento <span className="text-chrome">al sistema.</span>
          </>
        }
      >
        <ThreadRow
          items={[
            { t: "Analisi", d: "Comprendiamo strumenti, processi e obiettivi della tua attività." },
            {
              t: "Architettura",
              d: "Definiamo come ogni elemento deve comunicare all'interno del sistema.",
            },
            { t: "Integrazione", d: "Colleghiamo piattaforme, strumenti e flussi digitali." },
            { t: "Connessione", d: "Creiamo un ecosistema unico e pronto a evolvere." },
          ]}
        />
      </Section>

      <section className="relative overflow-hidden bg-deep px-6 py-20 text-center md:px-12 md:py-32 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 solutions-glow" />
        <div className="relative mx-auto max-w-[1390px]">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            04 / Cosa collega
          </p>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-[1.06]">
            Un ecosistema costruito intorno{" "}
            <span className="text-chrome">al tuo modo di lavorare.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-[1.95] text-muted-foreground md:text-lg">
            Ogni attività utilizza strumenti diversi.
            <br />
            <span className="text-foreground">
              Maya Connect crea il collegamento tra questi elementi per renderli parte di un unico
              sistema.
            </span>
          </p>
          <ConnectDiagram />
        </div>
      </section>

      <Section
        label="05 / L'ecosistema Maya"
        title={
          <>
            Tre elementi. <span className="text-primary">Un unico sistema digitale.</span>
          </>
        }
      >
        <div className="mt-10 max-w-2xl space-y-5 text-base leading-[1.95] text-muted-foreground md:text-lg">
          <p className="text-foreground">Ogni elemento nasce per funzionare insieme agli altri.</p>
          <p>Dalla presenza online fino all'esperienza quotidiana dei tuoi clienti.</p>
        </div>
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[7px] hidden h-px thread-line md:block"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px thread-vertical md:hidden"
          />
          <ol className="grid gap-10 md:grid-cols-3">
            {[
              { n: "Maya Web", d: "Crea la presenza digitale.", to: "/maya-web" as const },
              { n: "Maya Connect", d: "Il cuore che collega tutto il sistema.", to: null },
              {
                n: "Maya App",
                d: "Porta l'esperienza nelle mani dei clienti.",
                to: "/maya-app" as const,
              },
            ].map((p) => (
              <li
                key={p.n}
                className={`relative pl-10 md:pl-0 md:text-center ${p.to ? "md:pt-12" : "md:-mt-5 md:pt-16"}`}
              >
                {p.to ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex size-[15px] items-center justify-center rounded-full border border-primary/60 bg-background md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="size-[5px] rounded-full bg-primary" />
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute -left-2 -top-2 flex size-[31px] items-center justify-center rounded-full border border-primary bg-background shadow-[0_0_40px_color-mix(in_oklab,var(--primary)_45%,transparent)] md:left-1/2 md:top-[-8px] md:-translate-x-1/2"
                  >
                    <span className="absolute inset-[-8px] rounded-full border border-primary/25" />
                    <span className="size-[9px] rounded-full bg-primary" />
                  </span>
                )}
                {p.to ? (
                  <Link
                    to={p.to}
                    className="inline-flex items-center gap-2 font-display text-2xl transition-colors hover:text-primary"
                  >
                    {p.n} <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                ) : (
                  <p className="font-display text-3xl text-primary md:text-4xl">{p.n}</p>
                )}
                <p className="mt-2 text-[15px] text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Closing
        title={
          <>
            Costruiamo connessioni che fanno crescere{" "}
            <span className="text-primary">il tuo business.</span>
          </>
        }
        text={
          <>
            <p>Raccontaci come lavori oggi.</p>
            <p>Progettiamo il sistema digitale più adatto alla tua realtà.</p>
          </>
        }
        cta="Inizia il progetto"
        to={QUOTE}
      />
    </main>
  );
}
