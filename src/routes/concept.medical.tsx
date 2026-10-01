import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

/* Concept dimostrativo "Medical Premium".
   Attività NON reale: nessun nome, recapito, persona o dato clinico è vero.
   Nessun modulo che raccoglie dati: la richiesta di visita è solo mostrata.
   Non indicizzato: non deve essere scambiato per lo studio di qualcuno. */

const URL_CANONICAL = "https://maya-project.it/concept/medical";
const TITLE = "Medical Premium | Concept dimostrativo Maya Project";
const DESC =
  "Concept dimostrativo di una presenza digitale per uno studio con più professionisti. Attività non reale.";

export const Route = createFileRoute("/concept/medical")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL_CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
  }),
  component: MedicalConcept,
});

const AREE = [
  {
    t: "Medicina generale",
    d: "Visite di controllo e percorsi di prevenzione, con un unico referente per ogni paziente.",
  },
  {
    t: "Nutrizione",
    d: "Percorsi alimentari costruiti sulla persona, con incontri di verifica programmati.",
  },
  {
    t: "Fisioterapia",
    d: "Valutazione e trattamento, con indicazioni chiare su durata e frequenza degli incontri.",
  },
  {
    t: "Psicologia",
    d: "Colloqui individuali in un ambiente riservato, con orari concordati insieme.",
  },
];

const EQUIPE = [
  { i: "MG", r: "Medicina generale" },
  { i: "NU", r: "Nutrizione" },
  { i: "FT", r: "Fisioterapia" },
  { i: "PS", r: "Psicologia" },
];

const PASSI = [
  ["Scegli l'area", "Trovi le prestazioni raccolte per ambito, con una descrizione semplice."],
  ["Richiedi una visita", "Indichi l'area e il momento che preferisci, dal telefono o dal computer."],
  ["Ricevi conferma", "Lo studio risponde con giorno e orario, nel canale che già usa."],
];

const ink = "text-[#1d2b2a]";
const muted = "text-[#5b6866]";
const accent = "text-[#1f4d4a]";
const eyebrow = `text-[11px] font-semibold uppercase tracking-[0.22em] ${accent}`;

function MedicalConcept() {
  return (
    <div className={`min-h-screen bg-[#f6f3ee] font-sans ${ink} antialiased`}>
      {/* Dichiarazione: visibile, fissa, non rimovibile */}
      <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-3 bg-[#1d2b2a] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f6f3ee]">
        <span>Concept dimostrativo — attività non reale. Progetto di Maya Project.</span>
        <Link to="/portfolio" className="underline underline-offset-4">
          Torna al portfolio
        </Link>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 md:px-10">
        <p className="font-serif text-xl tracking-wide">Studio Meridiana</p>
        <nav aria-label="Concept" className={`hidden gap-8 text-sm md:flex ${muted}`}>
          <a href="#aree" className="hover:text-[#1f4d4a]">
            Aree
          </a>
          <a href="#equipe" className="hover:text-[#1f4d4a]">
            Équipe
          </a>
          <a href="#visita" className="hover:text-[#1f4d4a]">
            Richiedi una visita
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-14 md:px-10 md:pb-36 md:pt-24">
          <p className={eyebrow}>Studio medico e della persona</p>
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.06]">
            Un luogo di cui fidarsi, <span className={accent}>prima ancora di entrarci.</span>
          </h1>
          <p className={`mt-8 max-w-xl text-lg leading-[1.8] ${muted}`}>
            Più professionisti, un unico percorso. Qui trovi chi siamo, di cosa ci occupiamo e come
            arrivare alla tua visita.
          </p>
          <a
            href="#visita"
            className="mt-10 inline-flex items-center gap-2 bg-[#1f4d4a] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#f6f3ee] transition-colors hover:bg-[#1d2b2a]"
          >
            Richiedi una visita <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </section>

        <section id="aree" className="border-t border-[#dcd6cb] bg-[#efeae1]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <p className={eyebrow}>Aree di cura</p>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-[1.15] md:text-5xl">
              Le prestazioni, raccolte per area.
            </h2>
            <ul className="mt-14 grid gap-x-14 md:grid-cols-2">
              {AREE.map((a) => (
                <li key={a.t} className="border-t border-[#cfc8ba] py-8">
                  <h3 className="font-serif text-2xl">{a.t}</h3>
                  <p className={`mt-3 max-w-md leading-[1.8] ${muted}`}>{a.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="equipe" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className={eyebrow}>L'équipe</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-[1.15] md:text-5xl">
            Persone, non solo prestazioni.
          </h2>
          <ul className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {EQUIPE.map((e) => (
              <li key={e.r}>
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/5] items-center justify-center bg-[#e3ddd0] font-serif text-4xl text-[#1f4d4a]/70"
                >
                  {e.i}
                </div>
                <p className="mt-4 font-serif text-lg">{e.r}</p>
                <p className={`text-sm ${muted}`}>Profilo di esempio</p>
              </li>
            ))}
          </ul>
          <p className={`mt-8 max-w-xl text-sm leading-[1.8] ${muted}`}>
            In un progetto reale qui compaiono i professionisti dello studio, con nome, ruolo e
            percorso. In questo concept nessuna persona è vera.
          </p>
        </section>

        <section id="visita" className="bg-[#1d2b2a] text-[#f6f3ee]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9fc4bf]">
              Richiedi una visita
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-[1.15] md:text-5xl">
              Tre passi, sempre raggiungibili anche da smartphone.
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {PASSI.map(([t, d], i) => (
                <li key={t} className="border-t border-[#f6f3ee]/25 pt-6">
                  <span className="font-serif text-sm text-[#9fc4bf]">0{i + 1}</span>
                  <h3 className="mt-2 font-serif text-2xl">{t}</h3>
                  <p className="mt-3 max-w-xs leading-[1.8] text-[#f6f3ee]/75">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-16 max-w-2xl border border-[#f6f3ee]/20 p-6 md:p-8">
              <p className="font-serif text-xl">Dove si apre la prenotazione</p>
              <p className="mt-3 leading-[1.8] text-[#f6f3ee]/75">
                Se lo studio usa già un calendario o una piattaforma di prenotazione, resta dov'è:
                questa pagina lo presenta con l'identità dello studio e porta il paziente al punto
                giusto. In questo concept non c'è nessun modulo e nessun dato viene raccolto.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={`mx-auto max-w-6xl px-6 py-10 text-sm leading-[1.8] md:px-10 ${muted}`}>
        <p>
          Concept dimostrativo di Maya Project. Studio, nome, équipe e testi sono inventati e non
          descrivono un'attività reale né offrono prestazioni sanitarie.
        </p>
        <p className="mt-3">
          <Link to="/contatti" className="underline underline-offset-4 hover:text-[#1f4d4a]">
            Vuoi qualcosa di simile per la tua attività? Parlane con noi
          </Link>
        </p>
      </footer>
    </div>
  );
}
