import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, Closing, Label, PageHero, QUOTE } from "@/components/maya/page-kit";
import { Reveal } from "@/components/maya/home";
import barber from "@/assets/concept-barber.jpg";
import medical from "@/assets/concept-medical.jpg";
import beauty from "@/assets/concept-beauty.jpg";
import corporate from "@/assets/concept-corporate.jpg";

const URL_CANONICAL = "https://maya-project.it/portfolio";
const TITLE = "Portfolio | Maya Project";
const DESC =
  "Quattro concept che mostrano come ragioniamo: dal contesto al beneficio, un sistema digitale costruito intorno all'attività.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL_CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
  }),
  component: PortfolioPage,
});

type Caso = {
  n: string;
  name: string;
  cat: string;
  img: string;
  url?: string;
  steps: { k: string; v: string }[];
};

const CASI: Caso[] = [
  {
    n: "01",
    name: "Barber Noir",
    cat: "Barber di alto livello",
    img: barber,
    url: "https://barbernoir.maya-project.it",
    steps: [
      {
        k: "Contesto",
        v: "Un barber di fascia alta, con una clientela affezionata e le prenotazioni che passano da un gestionale o da WhatsApp.",
      },
      {
        k: "Problema",
        v: "In negozio il brand è forte; online è indistinguibile. Chi prenota lo fa su una pagina di terzi, che porta l'identità dello strumento al posto della sua.",
      },
      {
        k: "Idea",
        v: "Far diventare la prenotazione l'ultimo gesto del rito, non un modulo esterno.",
      },
      {
        k: "Soluzione",
        v: "Un sito proprietario con listino leggibile, lavori in evidenza e prenotazione dentro la pagina. Il gestionale resta dietro le quinte, collegato con Maya Connect.",
      },
      {
        k: "Beneficio",
        v: "Il cliente vive un'unica esperienza con il brand, dall'arrivo alla prenotazione. Il barber non deve cambiare gli strumenti che usa già.",
      },
    ],
  },
  {
    n: "02",
    name: "Medical Premium",
    cat: "Studi e professionisti",
    img: medical,
    url: "/concept/medical",
    steps: [
      {
        k: "Contesto",
        v: "Uno studio con più professionisti e più prestazioni, che deve trasmettere competenza e fiducia.",
      },
      {
        k: "Problema",
        v: "Le informazioni sono disperse: prestazioni, équipe, orari e contatti si trovano in punti diversi e chi cerca una visita non capisce subito come procedere.",
      },
      {
        k: "Idea",
        v: "Organizzare la fiducia: prima chi siamo e cosa facciamo, poi come si arriva allo studio.",
      },
      {
        k: "Soluzione",
        v: "Prestazioni raccolte per area, presentazione dell'équipe, informazioni pratiche e richiesta di visita sempre raggiungibile, anche da smartphone.",
      },
      {
        k: "Beneficio",
        v: "Chi visita il sito trova in pochi secondi ciò che cerca e sa qual è il passo successivo.",
      },
    ],
  },
  {
    n: "03",
    name: "Beauty Luxury",
    cat: "Estetica e benessere",
    img: beauty,
    steps: [
      {
        k: "Contesto",
        v: "Un centro che offre trattamenti e percorsi di benessere, dove contano atmosfera e cura.",
      },
      {
        k: "Problema",
        v: "I servizi sono tanti e una pagina sovraccarica rischia di non rassicurare: chi arriva si perde prima di chiedere una consulenza.",
      },
      {
        k: "Idea",
        v: "Togliere, non aggiungere: pochi percorsi, molto spazio, un'unica azione chiara.",
      },
      {
        k: "Soluzione",
        v: "Percorsi presentati con una gerarchia editoriale, immagini luminose e la consulenza iniziale come azione principale, ripetuta nei punti giusti.",
      },
      {
        k: "Beneficio",
        v: "Chi arriva capisce a colpo d'occhio cosa viene offerto e compie il primo passo senza sentirsi spinto.",
      },
    ],
  },
  {
    n: "04",
    name: "Corporate System",
    cat: "Aziende",
    img: corporate,
    steps: [
      {
        k: "Contesto",
        v: "Un'azienda con più servizi, più interlocutori e strumenti digitali diversi.",
      },
      {
        k: "Problema",
        v: "La presenza online è frammentata: pagine, contenuti e strumenti non comunicano tra loro e ogni aggiornamento richiede un intervento.",
      },
      {
        k: "Idea",
        v: "Una sola struttura che organizza la complessità, invece di aggiungere pagine una sull'altra.",
      },
      {
        k: "Soluzione",
        v: "Contenuti ordinati per servizio e per tipo di cliente, percorsi chiari verso il contatto e integrazione con gli strumenti già in uso.",
      },
      {
        k: "Beneficio",
        v: "Una presenza ordinata, che può crescere e aggiornarsi senza ricostruire il sito ogni volta.",
      },
    ],
  },
];

function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        kicker="PORTFOLIO"
        title={
          <>
            Idee costruite intorno a <span className="text-primary">un'attività.</span>
          </>
        }
        subtitle="Quattro concept che mostrano come ragioniamo: dal contesto al beneficio. Sono progetti dimostrativi, non lavori per clienti pubblicati."
      />

      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1390px] space-y-24 md:space-y-40">
          {CASI.map((c, i) => (
            <Reveal key={c.n}>
              <article className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-2xl bg-deep ring-1 ring-primary/15 md:rounded-3xl">
                    <img
                      src={c.img}
                      alt={`Concept ${c.name}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-muted-foreground">
                    Concept dimostrativo
                  </p>
                </div>

                <div>
                  <Label>
                    {c.n} · {c.cat}
                  </Label>
                  <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold tracking-[-0.02em] leading-[1.06]">
                    {c.name}
                  </h2>
                  <dl className="mt-10 space-y-6">
                    {c.steps.map((s) => (
                      <div key={s.k} className="border-l border-border pl-5">
                        <dt className="text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
                          {s.k}
                        </dt>
                        <dd className="mt-2 text-base leading-[1.85] text-muted-foreground md:text-[17px]">
                          {s.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Button
                    asChild
                    variant="link"
                    className="group mt-10 h-auto rounded-none border-b border-border p-0 pb-1 text-base md:text-lg font-semibold tracking-[-0.01em] text-foreground no-underline hover:border-primary hover:text-primary hover:no-underline"
                  >
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noopener noreferrer">
                        Apri il concept <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </a>
                    ) : (
                      <Link to={CONTACT}>
                        Parlane con noi <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </Link>
                    )}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Closing
        title={
          <>
            Il prossimo potrebbe essere <span className="text-primary">il tuo.</span>
          </>
        }
        text="Raccontaci la tua attività e gli strumenti che usi già: partiamo da lì."
        cta="Inizia un progetto"
        to={QUOTE}
      />
    </main>
  );
}
