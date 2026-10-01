import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, QUOTE, SiteHeader } from "@/components/maya/page-kit";
import { Reveal } from "@/components/maya/home";
import barber from "@/assets/concept-barber.jpg";
import medical from "@/assets/concept-medical.jpg";
import beauty from "@/assets/concept-beauty.jpg";
import corporate from "@/assets/concept-corporate.jpg";
import { LegalLinks } from "@/components/maya/legal-links";

const TITLE = "Maya Web | Presenza digitale su misura per il tuo brand";
const LIVELLI = [
  {
    n: "01",
    t: "Maya Start",
    s: "L'ingresso",
    d: "Una base professionale personalizzata, per dare all'attività una presenza credibile e coerente senza costruire subito un ecosistema completo.",
  },
  {
    n: "02",
    t: "Maya Web",
    s: "Il progetto",
    d: "Una presenza digitale progettata intorno al brand: identità, percorso cliente, contenuti e integrazioni con gli strumenti già in uso.",
  },
  {
    n: "03",
    t: "Maya Web Business",
    s: "L'azienda",
    d: "La presenza digitale di un'azienda, non di una singola attività: più pagine, più servizi o sedi, contenuti strutturati e integrazioni più articolate.",
  },
];

const URL_CANONICAL = "https://maya-project.it/maya-web";
const DESC =
  "Siti web progettati per raccontare il valore del tuo brand. Un percorso di progettazione digitale su misura, primo filo del tuo ecosistema.";

export const Route = createFileRoute("/maya-web")({
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
  component: MayaWebPage,
});

const CONCEPTS = [
  { name: "Barber Noir", img: barber },
  { name: "Medical Premium", img: medical },
  { name: "Beauty Luxury", img: beauty },
  { name: "Corporate System", img: corporate },
];

const WHATS = [
  { n: "01", t: "Identità digitale", d: "Una direzione visiva coerente con il tuo brand." },
  { n: "02", t: "Esperienza utente", d: "Percorsi semplici, chiari e progettati per le persone." },
  { n: "03", t: "Performance", d: "Esperienze veloci, responsive e curate su ogni dispositivo." },
  {
    n: "04",
    t: "Integrazioni",
    d: "Il sito può collegarsi agli strumenti e ai servizi che utilizzi già.",
  },
];

const STEPS = [
  { n: "01", t: "Analizziamo", d: "Comprendiamo identità, attività, pubblico e obiettivi." },
  { n: "02", t: "Progettiamo", d: "Definiamo struttura, linguaggio visivo ed esperienza." },
  { n: "03", t: "Sviluppiamo", d: "Trasformiamo il progetto in una presenza digitale reale." },
];

function scrollToConcepts() {
  document.getElementById("concept-web")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function MayaWebPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. Apertura */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-ambient"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
        />
        <SiteHeader />
        <div className="mx-auto max-w-[1390px] px-6 pb-16 pt-8 md:px-12 md:pb-20 md:pt-10 lg:px-16">
          <p className="reveal-in font-display text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            Maya Web
          </p>
          <h1 className="reveal-in mt-5 max-w-5xl font-display text-[clamp(2.4rem,5.4vw,5.1rem)] font-medium leading-[1.04] [animation-delay:100ms]">
            Costruiamo la presenza digitale del <span className="text-primary">tuo brand.</span>
          </h1>
          <p className="reveal-in mt-6 max-w-2xl text-lg leading-[1.85] text-muted-foreground [animation-delay:200ms] md:text-xl">
            Progettiamo siti web su misura, costruiti per raccontare la tua identità e creare
            connessioni reali con le persone.
          </p>
          <div className="reveal-in mt-9 flex flex-wrap items-center gap-4 [animation-delay:300ms]">
            <Button
              asChild
              variant="maya"
              size="lg"
              className="h-13 px-8 text-xs font-bold uppercase tracking-[0.1em]"
            >
              <Link to={CONTACT}>
                Parla con noi <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="mayaOutline"
              size="lg"
              onClick={scrollToConcepts}
              className="h-13 px-8 text-xs font-bold uppercase tracking-[0.1em]"
            >
              Scopri i concept
            </Button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-0.5 w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
        />
      </section>

      {/* 2. Manifesto */}
      <section className="bg-deep px-6 py-28 md:px-12 md:py-44 lg:px-16">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-medium leading-[1.12]">
            Ogni brand ha una propria identità.
            <br />
            <span className="text-chrome">Il digitale dovrebbe raccontarla.</span>
          </h2>
          <p className="mx-auto mt-12 max-w-2xl text-base leading-[1.95] text-muted-foreground md:text-lg">
            Un sito non dovrebbe essere soltanto bello. Deve rappresentare il brand, guidare le
            persone e diventare il punto di partenza di un ecosistema digitale.
          </p>
        </Reveal>
      </section>

      {/* 3. Cosa costruiamo */}
      <section className="px-6 py-28 md:px-12 md:py-40 lg:px-16">
        <Reveal className="mx-auto max-w-[1390px]">
          <h2 className="max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-[1.06]">
            Una presenza digitale costruita intorno{" "}
            <span className="text-chrome">alla tua attività.</span>
          </h2>
          <div className="mt-16 grid gap-14 md:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            <div>
              <span className="font-display text-sm text-primary">{WHATS[0]!.n}</span>
              <h3 className="mt-4 font-display text-[clamp(2rem,3.2vw,3rem)] font-medium leading-[1.08]">
                {WHATS[0]!.t}
              </h3>
              <p className="mt-5 max-w-md text-base leading-[1.95] text-muted-foreground md:text-lg">
                {WHATS[0]!.d}
              </p>
            </div>
            <div>
              {WHATS.slice(1).map((w, i) => (
                <div
                  key={w.n}
                  className={`border-t border-border py-9 md:py-10 ${i === 0 ? "pt-0 md:border-t-0" : ""}`}
                >
                  <span className="font-display text-sm text-primary">{w.n}</span>
                  <h3 className="mt-3 font-display text-2xl font-medium md:text-[1.7rem]">{w.t}</h3>
                  <p className="mt-3 max-w-md text-base leading-[1.9] text-muted-foreground md:text-[17px]">
                    {w.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Il metodo Maya Web */}
      <section className="px-6 pb-28 md:px-12 md:pb-40 lg:px-16">
        <Reveal className="mx-auto max-w-[1390px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Processo Maya Web
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-[1.06]">
            Dal brand <span className="text-chrome">all'esperienza digitale.</span>
          </h2>
          <ol className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-12">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t border-border pt-8">
                <span className="font-display text-sm text-primary">{s.n}</span>
                <h3 className="mt-3 font-display text-2xl font-medium md:text-[1.7rem]">{s.t}</h3>
                <p className="mt-4 max-w-sm text-base leading-[1.9] text-muted-foreground md:text-[17px]">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* 4bis. I tre livelli */}
      <section id="livelli" className="bg-deep px-6 py-28 md:px-12 md:py-40 lg:px-16">
        <Reveal className="mx-auto max-w-[1390px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Tre livelli
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-[1.06]">
            Stessa cura, <span className="text-chrome">ampiezza diversa.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-[1.9] text-muted-foreground md:text-lg">
            Non tutte le attività partono dallo stesso punto. Il livello si sceglie insieme, in
            base a quanto c'è da raccontare e a quanto deve crescere nel tempo.
          </p>
          <ol className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
            {LIVELLI.map((l) => (
              <li key={l.n} className="border-t border-primary/40 pt-8">
                <span className="font-display text-sm text-primary">{l.n}</span>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {l.s}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium md:text-[1.7rem]">{l.t}</h3>
                <p className="mt-4 text-base leading-[1.9] text-muted-foreground md:text-[17px]">
                  {l.d}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-14 max-w-2xl text-base leading-[1.9] text-muted-foreground md:text-lg">
            Ogni livello può collegarsi in seguito agli strumenti che usi già attraverso{" "}
            <Link
              to="/maya-connect"
              className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Maya Connect
            </Link>
            : il punto di partenza non chiude nessuna porta.
          </p>
        </Reveal>
      </section>

      {/* 5. Concept applicati */}
      <section
        id="concept-web"
        className="bg-deep px-6 pb-24 pt-28 md:px-12 md:pb-32 md:pt-40 lg:px-16"
      >
        <Reveal className="mx-auto max-w-[1390px]">
          <h2 className="max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-[1.06]">
            Una stessa tecnologia.{" "}
            <span className="text-chrome">Identità completamente diverse.</span>
          </h2>
          <ul className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-10 lg:gap-12">
            {CONCEPTS.map((c) => (
              <li key={c.name} className="group">
                <div className="overflow-hidden rounded-2xl bg-background ring-1 ring-primary/15">
                  <img
                    src={c.img}
                    alt={`Anteprima del concept digitale ${c.name}`}
                    width={1600}
                    height={1008}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.45,0,.55,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Direzioni progettuali
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium md:text-3xl">{c.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 6. Ponte verso Maya Connect */}
      <section className="px-6 pb-28 pt-24 md:px-12 md:pb-40 md:pt-28 lg:px-16">
        <Reveal className="mx-auto max-w-[1390px]">
          <h2 className="max-w-3xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-[1.06]">
            Un sito può diventare <span className="text-primary">un sistema.</span>
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.95] text-muted-foreground md:text-lg">
            <p>Maya Web è il primo livello dell'ecosistema.</p>
            <p>
              Quando l'attività cresce, il sito può collegarsi a strumenti, dati, automazioni e
              nuovi servizi attraverso Maya Connect.
            </p>
          </div>
          <Button
            asChild
            variant="maya"
            size="lg"
            className="mt-10 h-13 px-8 text-xs font-bold uppercase tracking-[0.1em]"
          >
            <Link to="/maya-connect">
              Scopri Maya Connect <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <div className="relative mt-20 md:mt-24">
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
                { n: "Maya Web", to: null },
                { n: "Maya Connect", to: "/maya-connect" as const },
                { n: "Maya App", to: "/maya-app" as const },
              ].map((p) => (
                <li key={p.n} className="relative pl-10 md:pl-0 md:pt-12 md:text-center">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex size-[15px] items-center justify-center rounded-full border border-primary/60 bg-background md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="size-[5px] rounded-full bg-primary" />
                  </span>
                  {p.to ? (
                    <Link
                      to={p.to}
                      className="group inline-flex items-center gap-2 font-display text-2xl transition-colors hover:text-primary"
                    >
                      {p.n} <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  ) : (
                    <p className="font-display text-2xl text-primary">{p.n}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* 7. Chiusura */}
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-24 text-center md:px-12 md:pt-36 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-ambient"
        />
        <Reveal className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-[clamp(2.4rem,5.4vw,5rem)] font-medium leading-[1.05]">
            Costruiamo la tua <span className="text-chrome">presenza digitale.</span>
          </h2>
          <div className="mx-auto mt-10 max-w-xl space-y-2 text-lg leading-[1.9] text-muted-foreground md:text-xl">
            <p className="text-foreground">Raccontaci la tua attività.</p>
            <p>Progettiamo insieme uno spazio digitale costruito intorno al tuo brand.</p>
          </div>
          <Button
            asChild
            variant="maya"
            size="lg"
            className="mt-12 h-13 px-8 text-xs font-bold uppercase tracking-[0.1em]"
          >
            <Link to={QUOTE}>
              Inizia il progetto <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
        <div aria-hidden="true" className="mx-auto mt-24 h-0.5 w-[min(82vw,820px)] thread-line" />
        <p className="relative mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          © Maya Project <span className="px-2 text-primary">·</span> Cuciamo il digitale intorno al
          tuo brand
        </p>
        <LegalLinks />
      </section>
    </main>
  );
}
