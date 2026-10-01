import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Closing, PageHero, QUOTE, Section, ThreadRow } from "@/components/maya/page-kit";

const TITLE = "Maya Connect | Costruiamo intorno a ciò che usi già";
const URL_CANONICAL = "https://maya-project.it/maya-connect";
const DESC =
  "La piattaforma con cui gestisci gli appuntamenti continua a lavorare. Davanti, i tuoi clienti trovano un'esperienza tutta tua: sito, app e strumenti collegati.";

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
            Il filo che collega gli strumenti che usi già{" "}
            <span className="text-primary">al tuo brand.</span>
          </>
        }
        subtitle={
          <>
            <p className="text-sm font-semibold text-chrome">
              Il cuore di Maya
            </p>
            <p className="mt-6 font-display text-xl text-foreground md:text-2xl">
              La piattaforma con cui gestisci gli appuntamenti continua a lavorare dietro le quinte.
              Davanti, i tuoi clienti trovano un'esperienza tutta tua.
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
            Sito, agenda, prenotazioni, WhatsApp:{" "}
            <span className="text-chrome">ognuno va per conto suo.</span>
          </>
        }
      >
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-5 text-base leading-[1.95] text-muted-foreground md:text-lg">
            <p className="font-display text-xl text-foreground md:text-2xl">
              Ogni strumento fa il suo lavoro, ma nessuno parla con gli altri.
            </p>
            <p>
              Così le informazioni si perdono, si ripetono le stesse operazioni a mano e il cliente
              vede un percorso a pezzi.
            </p>
            <p className="border-l border-primary pl-5 text-foreground">
              Maya Connect nasce per mettere in collegamento tutto questo, senza stravolgere come lavori.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <p className="mb-8 text-sm font-semibold text-muted-foreground">
                Prima
              </p>
              <Nodes items={TOOLS} />
            </div>
            <div>
              <p className="mb-8 text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
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
            Non ti facciamo cambiare{" "}
            <span className="text-primary">ciò che usi già.</span>
          </>
        }
      >
        <p className="mt-8 max-w-2xl text-base leading-[1.95] text-muted-foreground md:text-lg">
          Se la piattaforma che usi funziona, resta dov'è. Noi costruiamo intorno: su una piattaforma
          di prenotazione i professionisti finiscono per assomigliarsi, con Maya Connect il cliente
          vede il tuo brand, non quello della piattaforma.
        </p>
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            ["Integrazioni", "Facciamo parlare tra loro sito, agenda e piattaforme che usi già, dove lo strumento lo permette (verificare)."],
            ["Automazioni", "Meno lavoro ripetitivo: conferme, promemoria e richieste partono da sole, dove lo strumento lo permette (verificare)."],
            ["Dati", "Le informazioni sui clienti non restano sparse: le mettiamo in ordine perché ti servano davvero."],
            ["Esperienza cliente", "Il tuo cliente trova, prenota e ti ricontatta in modo semplice, con il tuo stile."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-[28px] bg-card p-8 md:p-9">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.015em] md:text-3xl">{t}</h3>
              <p className="mt-3 text-base leading-[1.9] text-muted-foreground md:text-lg">{d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-2xl border-l border-primary pl-5 text-base leading-[1.9] text-foreground md:text-lg">
          Maya Connect si aggancia a qualsiasi livello: a una base Maya Start, a un sito Maya Web
          o Maya Web Business, a un'app. Chi parte in piccolo non deve rifare nulla per collegarsi
          dopo agli strumenti che usa già.
        </p>
        <Button
          asChild
          variant="mayaOutline"
          size="lg"
          className="mt-8 h-12 px-7 text-xs font-bold uppercase tracking-[0.1em]"
        >
          <Link to="/maya-web" hash="livelli">
            Scopri i livelli <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </Section>

      <Section
        label="03 / Come funziona"
        title={
          <>
            Dagli strumenti sparsi{" "}
            <span className="text-chrome">a un unico percorso.</span>
          </>
        }
      >
        <ThreadRow
          items={[
            { t: "Ascoltiamo", d: "Capiamo quali strumenti usi, come lavori e cosa vuoi ottenere." },
            {
              t: "Progettiamo",
              d: "Decidiamo cosa deve parlare con cosa, e come.",
            },
            { t: "Colleghiamo", d: "Facciamo i collegamenti tra le piattaforme e li proviamo." },
            { t: "Consegniamo", d: "Un sistema che funziona e può crescere con te." },
          ]}
        />
      </Section>

      <section className="relative overflow-hidden bg-deep px-6 py-20 text-center md:px-12 md:py-32 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 solutions-glow" />
        <div className="relative mx-auto max-w-[1390px]">
          <p className="font-sans text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
            04 / Cosa collega
          </p>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-semibold tracking-[-0.02em] leading-[1.06]">
            Ogni attività ha i suoi strumenti.{" "}
            <span className="text-chrome">Noi li colleghiamo.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-[1.95] text-muted-foreground md:text-lg">
            Ogni attività lavora con strumenti diversi.
            <br />
            <span className="text-foreground">
              Maya Connect li fa lavorare insieme, come un unico sistema.
            </span>
          </p>
          <ConnectDiagram />
        </div>
      </section>

      <Section
        label="05 / L'ecosistema Maya"
        title={
          <>
            Tre strumenti. <span className="text-primary">Un unico sistema.</span>
          </>
        }
      >
        <div className="mt-10 max-w-2xl space-y-5 text-base leading-[1.95] text-muted-foreground md:text-lg">
          <p className="text-foreground">Ogni strumento Maya è pensato per funzionare insieme agli altri.</p>
          <p>Dal sito che ti fa trovare all'app che i tuoi clienti usano ogni giorno.</p>
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
              { n: "Maya Web", d: "Il sito che ti fa trovare.", to: "/maya-web" as const },
              { n: "Maya Connect", d: "Collega tutto il resto.", to: null },
              {
                n: "Maya App",
                d: "L'app con il tuo nome.",
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
            Facciamo parlare i tuoi strumenti{" "}
            <span className="text-primary">tra loro.</span>
          </>
        }
        text={
          <>
            <p>Raccontaci come lavori oggi: ti diciamo cosa si può collegare e cosa conviene collegare.</p>
          </>
        }
        cta="Inizia il progetto"
        to={QUOTE}
      />
    </main>
  );
}
