import { createFileRoute } from "@tanstack/react-router";
import { Closing, PageHero, QUOTE, Section } from "@/components/maya/page-kit";

const URL_CANONICAL = "https://maya-project.it/come-lavoriamo";
const TITLE = "Come lavoriamo | Maya Project";
const DESCRIPTION =
  "Cosa succede dal primo messaggio alla consegna: ascoltiamo, progettiamo, costruiamo e restiamo al tuo fianco.";

export const Route = createFileRoute("/come-lavoriamo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
  }),
  component: ComeLavoriamoPage,
});

const STEPS = [
  {
    n: "01",
    t: "Analizziamo",
    fatto: "Capiamo come lavori, chi sono i tuoi clienti e cosa vuoi ottenere.",
    chiediamo: "Una conversazione e qualche informazione sulla tua attività e sugli strumenti che usi.",
    ottieni: "Un quadro chiaro di cosa serve davvero e di cosa no.",
  },
  {
    n: "02",
    t: "Progettiamo",
    fatto: "Disegniamo la soluzione giusta per te, prima di costruire qualsiasi cosa.",
    chiediamo: "Di guardare la proposta e dirci cosa ti convince e cosa no.",
    ottieni: "Un progetto chiaro, con scritto cosa faremo e cosa no.",
  },
  {
    n: "03",
    t: "Cuciamo",
    fatto: "Costruiamo e colleghiamo tutto, partendo dagli strumenti che usi già.",
    chiediamo: "Testi, immagini e accessi che servono, e un tuo riscontro mentre lavoriamo.",
    ottieni: "Un sistema che funziona, provato prima di consegnartelo.",
  },
  {
    n: "04",
    t: "Evolviamo",
    fatto: "Dopo la consegna restiamo al tuo fianco e il sistema cresce con la tua attività.",
    chiediamo: "Di dirci come va e cosa cambia nel tuo lavoro.",
    ottieni: "Un sistema che non resta fermo quando la tua attività cresce.",
  },
];

const PRINCIPI = [
  {
    t: "Prima ascoltiamo",
    d: "Non proponiamo nulla finché non abbiamo capito come lavori e cosa ti serve.",
  },
  {
    t: "Ti diciamo la verità",
    d: "Se una cosa non conviene o non serve ancora, te lo diciamo, anche se è un lavoro in meno per noi.",
  },
  {
    t: "Un passo alla volta",
    d: "Si parte da ciò che serve adesso. Il resto si aggiunge quando ha senso, senza rifare da capo.",
  },
];

const FAQ = [
  {
    q: "Quanto costa?",
    a: "Dipende da cosa ti serve: più pagine, più collegamenti, un'app. Dopo averti ascoltato ti diamo una proposta chiara, prima di iniziare.",
  },
  {
    q: "Quanto tempo ci vuole?",
    a: "Dipende dalla complessità del progetto. I tempi te li diciamo dopo l'ascolto, insieme alla proposta.",
  },
  {
    q: "Cosa mi serve per iniziare?",
    a: "Raccontarci la tua attività, gli strumenti che usi e cosa vuoi ottenere. Basta compilare la richiesta: ci vogliono pochi minuti.",
  },
  {
    q: "Posso partire in piccolo?",
    a: "Sì. Si può partire da una base e crescere per passi, in base a come va la tua attività.",
  },
  {
    q: "Cosa succede dopo la consegna?",
    a: "Restiamo al tuo fianco: per le modifiche e per far crescere il sistema insieme alla tua attività.",
  },
];

function ComeLavoriamoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        kicker="Come lavoriamo"
        title={
          <>
            Dal primo messaggio <span className="text-primary">al sistema online.</span>
          </>
        }
        subtitle={
          <p>
            Quattro passi, nessuna sorpresa: sai sempre cosa stiamo facendo, cosa ci serve da te e
            cosa ottieni.
          </p>
        }
      />

      <Section label="01 / I quattro passi">
        <ol className="mt-4 grid gap-5 md:grid-cols-2">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-[28px] bg-card p-8 md:p-10">
              <span className="font-display text-sm text-primary">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.015em] md:text-[1.9rem]">
                {s.t}
              </h3>
              <p className="mt-4 text-base leading-[1.9] text-foreground md:text-lg">{s.fatto}</p>
              <dl className="mt-6 space-y-4 border-t border-border pt-6 text-[15px] leading-[1.8] md:text-base">
                <div>
                  <dt className="font-semibold text-muted-foreground">Cosa ti chiediamo</dt>
                  <dd className="mt-1 text-muted-foreground">{s.chiediamo}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">Cosa ottieni</dt>
                  <dd className="mt-1 text-muted-foreground">{s.ottieni}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        deep
        label="02 / Come ci comportiamo"
        title={
          <>
            Tre cose su cui <span className="text-chrome">puoi contare.</span>
          </>
        }
      >
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {PRINCIPI.map((p) => (
            <li key={p.t} className="rounded-[28px] bg-card p-8 md:p-9">
              <h3 className="font-display text-xl font-semibold tracking-[-0.015em] md:text-2xl">
                {p.t}
              </h3>
              <p className="mt-4 text-base leading-[1.9] text-muted-foreground md:text-[17px]">
                {p.d}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        label="03 / Domande frequenti"
        title={
          <>
            Quello che ci chiedono <span className="text-chrome">più spesso.</span>
          </>
        }
      >
        <dl className="mt-12 max-w-3xl">
          {FAQ.map((f) => (
            <div key={f.q} className="border-t border-border py-7 md:py-8">
              <dt className="font-display text-xl font-semibold tracking-[-0.015em] md:text-2xl">
                {f.q}
              </dt>
              <dd className="mt-3 text-base leading-[1.9] text-muted-foreground md:text-lg">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Closing
        title={
          <>
            Cominciamo da <span className="text-primary">una conversazione.</span>
          </>
        }
        text={<p>Raccontaci la tua attività: ti diciamo da dove conviene partire.</p>}
        cta="Inizia il progetto"
        to={QUOTE}
      />
    </main>
  );
}
