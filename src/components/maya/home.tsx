import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CONTACT, QUOTE } from "./page-kit";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import barber from "@/assets/concept-barber.jpg";
import medical from "@/assets/concept-medical.jpg";
import beauty from "@/assets/concept-beauty.jpg";
import corporate from "@/assets/concept-corporate.jpg";
import { LegalLinks } from "./legal-links";

const EASE = "cubic-bezier(.45,0,.55,1)";

/* Fade ingresso sezioni, una sola volta */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "none" : "translateY(24px)",
        transition: `opacity 1200ms ${EASE}, transform 1200ms ${EASE}`,
      }}
    >
      {children}
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-base font-semibold tracking-[-0.01em] text-primary md:text-lg">
      <span className="h-px w-7 bg-primary" /> {children}
    </div>
  );
}

const CONCEPTS = [
  {
    n: "01",
    name: "Barber Noir",
    cat: "Barber di alto livello",
    img: barber,
    d: "Prenotare diventa l'ultimo gesto del rito, con il tuo stile e non quello di una piattaforma.",
    /* Unico concept già navigabile. Gli altri sono anteprime: senza `url` il
       pulsante cambia parola e porta ai contatti, invece di promettere una
       demo che non esiste. */
    url: "https://barbernoir.maya-project.it",
  },
  {
    n: "02",
    name: "Medical Premium",
    cat: "Studi e professionisti",
    img: medical,
    url: "/concept/medical",
    d: "Uno studio che ispira fiducia prima ancora della prima visita.",
  },
  {
    n: "03",
    name: "Beauty Luxury",
    cat: "Estetica e benessere",
    img: beauty,
    d: "Pochi percorsi, molto spazio e un solo passo chiaro: chiedere una consulenza.",
  },
  {
    n: "04",
    name: "Corporate System",
    cat: "Aziende",
    img: corporate,
    d: "Tanti servizi, un unico posto dove trovare tutto.",
  },
];

/* 2. Showroom: cambio solo su click, nessun hover/parallax/drift */
export function ShowroomSection() {
  const [active, setActive] = useState(0);
  const c = CONCEPTS[active]!;
  const L = CONCEPTS.length;
  return (
    <section
      id="concept"
      className="relative overflow-hidden px-6 py-28 md:px-12 md:py-44 lg:px-16"
    >
      <div className="relative mx-auto max-w-[1390px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.75rem)] font-semibold tracking-[-0.02em] leading-[1.05]">
            Guarda come potrebbe diventare <span className="text-chrome">il tuo brand online.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.95] text-muted-foreground md:text-lg">
            Sono concept dimostrativi, non lavori per clienti: servono a farti vedere che aspetto può avere il tuo digitale.{" "}
            <Link
              to="/portfolio"
              className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Scopri come ragioniamo.
            </Link>
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 aspect-[16/9] w-full md:mt-24 lg:aspect-[12/5.5]">
          {CONCEPTS.map((k, i) => {
            const d = (i - active + L) % L;
            const pos = d === 0 ? "c" : d === 1 ? "r" : d === L - 1 ? "l" : "b";
            const t = {
              c: { x: "0%", s: 1, o: 1, b: 1, bl: 0, z: 30 },
              r: { x: "78%", s: 0.55, o: 0.5, b: 0.35, bl: 3, z: 20 },
              l: { x: "-78%", s: 0.55, o: 0.5, b: 0.35, bl: 3, z: 20 },
              b: { x: "0%", s: 0.45, o: 0, b: 0.4, bl: 3, z: 10 },
            }[pos];
            return (
              <button
                key={k.n}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Mostra il concept ${k.name}`}
                aria-current={d === 0}
                tabIndex={pos === "b" ? -1 : 0}
                className="absolute left-[9%] top-0 w-[82%] lg:left-[15%] lg:w-[70%]"
                style={{
                  transform: `translateX(${t.x}) scale(${t.s})`,
                  opacity: t.o,
                  filter: `brightness(${t.b}) blur(${t.bl}px)`,
                  zIndex: t.z,
                  transformOrigin: "center top",
                  transition: `transform 1200ms ${EASE}, opacity 1200ms ${EASE}, filter 1200ms ${EASE}`,
                }}
              >
                <div
                  className="relative overflow-hidden rounded-2xl bg-deep ring-1 ring-primary/15 md:rounded-3xl"
                  style={{
                    boxShadow:
                      d === 0
                        ? "0 40px 110px -60px var(--background)"
                        : "0 20px 60px -40px var(--background)",
                    transition: `box-shadow 1200ms ${EASE}`,
                  }}
                >
                  <img
                    src={k.img}
                    alt={`Anteprima del concept digitale ${k.name}`}
                    width={1600}
                    height={1008}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="block w-full"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {CONCEPTS.map((k, i) => (
            <button
              key={k.n}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`py-1 font-display text-sm transition-colors duration-700 md:text-base ${i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <span className={i === active ? "text-primary" : ""}>{k.n}</span> {k.name}
            </button>
          ))}
        </div>

        <div key={c.n} className="reveal-in mx-auto mt-12 max-w-2xl text-center">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.015em] md:text-3xl">{c.name}</h3>
          <p className="mt-3 text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
            {c.cat}
          </p>
          <p className="mt-4 text-base leading-[1.95] text-muted-foreground md:text-lg">{c.d}</p>
          {"url" in c && c.url ? (
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-1 text-base md:text-lg font-semibold tracking-[-0.01em] text-primary transition-colors hover:text-foreground"
            >
              Apri il concept <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          ) : (
            <Link
              to={CONTACT}
              className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-1 text-base md:text-lg font-semibold tracking-[-0.01em] text-primary transition-colors hover:text-foreground"
            >
              Parlane con noi <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* 3. Manifesto: spazio negativo, statico */
export function ManifestoSection() {
  return (
    <section id="manifesto" className="bg-deep px-6 py-32 md:px-12 md:py-52 lg:px-16">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold tracking-[-0.02em] leading-[1.12]">
          Ogni attività ha la sua identità.
          <br />
          <span className="text-chrome">Il digitale dovrebbe farla vedere.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-base leading-[1.95] text-muted-foreground md:text-lg">
          Siti e app che somigliano a te, non a un modello uguale per tutti.
        </p>
      </Reveal>
    </section>
  );
}

/* 4. Metodo: solo tipografia */
const STEPS = [
  {
    n: "01",
    t: "Analizziamo",
    d: "Capiamo come lavori, chi sono i tuoi clienti e cosa vuoi ottenere.",
  },
  {
    n: "02",
    t: "Progettiamo",
    d: "Disegniamo la soluzione giusta per te, prima di costruire qualsiasi cosa.",
  },
  {
    n: "03",
    t: "Cuciamo",
    d: "Costruiamo e colleghiamo tutto, partendo dagli strumenti che usi già.",
  },
  {
    n: "04",
    t: "Evolviamo",
    d: "Dopo la consegna restiamo al tuo fianco e il sistema cresce con la tua attività.",
  },
];

export function MetodoSection() {
  return (
    <section id="metodo" className="px-6 py-24 md:px-12 md:py-36 lg:px-16">
      <Reveal className="mx-auto max-w-[1390px]">
        <Kicker>Metodo</Kicker>
        <h2 className="mt-8 font-display text-[clamp(2.4rem,5vw,4.75rem)] font-semibold tracking-[-0.02em] leading-[1.05]">
          Come <span className="text-chrome">lavoriamo</span>
        </h2>
        <ol className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-[28px] bg-card p-8 md:p-9">
              <span className="font-display text-sm text-primary">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.015em] md:text-[1.7rem]">
                {s.t}
              </h3>
              <p className="mt-4 max-w-sm text-base leading-[1.9] text-muted-foreground md:text-[17px]">
                {s.d}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* 5. Ecosistema: diagramma semplice, una sola luce lenta */
export function EcosistemaSection() {
  const path = "M160 300 L500 90 L840 300";
  return (
    <section id="ecosistema" className="bg-deep px-6 py-24 md:px-12 md:py-36 lg:px-16">
      <Reveal className="mx-auto max-w-[1100px] text-center">
        <div className="flex justify-center">
          <Kicker>Ecosistema Maya</Kicker>
        </div>
        <h2 className="mt-8 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-semibold tracking-[-0.02em] leading-[1.08]">
          Tre strumenti che <span className="text-chrome">funzionano meglio insieme.</span>
        </h2>
        <div className="relative mx-auto mt-16 w-full max-w-[900px]">
          <svg viewBox="0 0 1000 380" className="w-full" aria-hidden="true">
            <path
              id="eco-path"
              d={path}
              fill="none"
              stroke="var(--primary)"
              strokeOpacity=".35"
              strokeWidth="1"
            />
            <circle cx="500" cy="90" r="8" fill="var(--primary)" />
            <circle cx="160" cy="300" r="5" fill="var(--primary)" fillOpacity=".7" />
            <circle cx="840" cy="300" r="5" fill="var(--primary)" fillOpacity=".7" />
          </svg>
          <Link
            to="/maya-connect"
            className="absolute left-1/2 top-[34%] -translate-x-1/2 font-display text-lg font-semibold tracking-[-0.01em] text-primary transition-colors hover:text-primary/80 md:text-2xl"
          >
            Maya Connect
          </Link>
          <Link
            to="/maya-web"
            className="absolute left-[16%] top-[88%] -translate-x-1/2 font-display text-base md:text-lg tracking-[-0.01em] text-foreground hover:text-primary md:text-lg"
          >
            Maya Web
          </Link>
          <Link
            to="/maya-app"
            className="absolute left-[84%] top-[88%] -translate-x-1/2 font-display text-base md:text-lg tracking-[-0.01em] text-foreground hover:text-primary md:text-lg"
          >
            Maya App
          </Link>
        </div>
        <p className="mt-10 text-base leading-[1.95] text-muted-foreground md:text-lg">
          Maya Connect fa parlare tra loro il sito, gli strumenti che usi ogni giorno e l'app dei tuoi clienti.
        </p>

        <div className="mx-auto mt-16 max-w-2xl border-t border-primary/40 pt-10">
          <p className="text-base font-semibold tracking-[-0.01em] text-primary md:text-lg">
            Maya Suite
          </p>
          <p className="mt-5 text-base leading-[1.95] text-muted-foreground md:text-lg">
            È tutto insieme dal primo giorno: sito, app, accessi, prenotazioni, clienti, notifiche e
            pannello di gestione, pensati per lavorare come un unico sistema.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* 6. Soluzioni */
const SOLUTIONS = [
  { to: "/maya-web" as const, k: "Maya Web", d: "Il tuo sito, fatto su misura. Per farti trovare, farti capire e far partire i contatti." },
  {
    to: "/maya-connect" as const,
    k: "Maya Connect",
    d: "Gli strumenti che usi già, collegati. La piattaforma resta dov'è, davanti c'è il tuo brand.",
    core: true,
  },
  { to: "/maya-app" as const, k: "Maya App", d: "L'app con il tuo nome. I clienti prenotano, ricevono promemoria e restano in contatto." },
];

export function SoluzioniSection() {
  return (
    <section id="soluzioni" className="px-6 py-24 md:px-12 md:py-36 lg:px-16">
      <Reveal className="mx-auto max-w-[1390px]">
        <Kicker>Soluzioni</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.75rem)] font-semibold tracking-[-0.02em] leading-[1.05]">
          Cosa possiamo <span className="text-chrome">costruire per te.</span>
        </h2>
        <div className="mt-16 grid gap-5 md:mt-20 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.k}
              to={s.to}
              className={`group rounded-[28px] bg-card p-8 transition-colors md:p-10 ${s.core ? "ring-1 ring-primary/40" : "hover:bg-secondary"}`}
            >
              <p
                className={`font-display text-2xl font-semibold tracking-[-0.015em] md:text-3xl ${s.core ? "text-primary" : ""}`}
              >
                {s.k}
              </p>
              <p className="mt-4 max-w-xs text-base leading-[1.9] text-muted-foreground md:text-lg">
                {s.d}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                Scopri {s.k} <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* 8. CTA finale */
export function FinalCta() {
  return (
    <section
      id="contatti"
      className="relative isolate overflow-hidden px-6 pb-16 pt-32 text-center md:px-12 md:pt-48 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
      />
      <Reveal className="relative mx-auto max-w-5xl">
        <h2 className="font-display text-[clamp(2.6rem,6.4vw,6rem)] font-semibold tracking-[-0.02em] leading-[1.04]">
          Costruiamo insieme il tuo <span className="text-chrome">spazio digitale.</span>
        </h2>
        <div className="mx-auto mt-10 max-w-xl space-y-2 text-lg leading-[1.9] text-muted-foreground md:text-xl">
          <p className="text-foreground">Raccontaci la tua attività.</p>
          <p>Ti diciamo da dove conviene partire.</p>
        </div>
        <div className="relative mt-14 inline-block">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-primary/15 blur-2xl"
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
      </Reveal>
      <div aria-hidden="true" className="mx-auto mt-28 h-0.5 w-[min(82vw,820px)] thread-line" />
      <p className="relative mt-8 text-sm font-semibold text-muted-foreground">
        © Maya Project <span className="px-2 text-primary">·</span> Cuciamo il digitale intorno al
        tuo brand
      </p>
      <LegalLinks />
    </section>
  );
}
