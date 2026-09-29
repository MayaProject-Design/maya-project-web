import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QUOTE, SiteHeader } from "@/components/maya/page-kit";

const TITLE = "Contatti | Maya Project";
const DESCRIPTION =
  "Parliamo del tuo prossimo progetto. Raccontaci la tua attività e troviamo insieme il punto da cui partire.";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-ambient [animation:none]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
        />
        <SiteHeader />
        <div className="mx-auto max-w-[1390px] px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16 lg:px-16 lg:pb-32">
          <p className="reveal-in font-display text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            CONTATTI
          </p>
          <h1 className="reveal-in mt-6 max-w-5xl font-display text-[clamp(2.7rem,5.6vw,5.25rem)] font-medium leading-[1.03] [animation-delay:100ms]">
            Parliamo del tuo <span className="text-primary">prossimo progetto.</span>
          </h1>
          <p className="reveal-in mt-7 max-w-2xl text-base leading-[1.9] text-muted-foreground [animation-delay:200ms] md:text-lg">
            Che tu abbia già un'idea precisa o voglia capire da dove partire, raccontaci la tua
            attività.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
        />
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:gap-16">
          <article className="border-t border-primary/60 pt-6 md:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              01 / HAI UN PROGETTO?
            </p>
            <h2 className="mt-5 font-display text-2xl font-medium md:text-3xl">
              Richiedi un preventivo
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.9] text-muted-foreground md:text-lg">
              Raccontaci cosa vuoi realizzare attraverso il nostro percorso guidato.
            </p>
            <Button
              asChild
              variant="maya"
              size="lg"
              className="mt-8 h-12 px-6 text-xs font-bold uppercase tracking-[0.1em] md:px-7"
            >
              <Link to={QUOTE}>
                Richiedi un preventivo <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </article>

          <article className="border-t border-border pt-6 md:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              02 / VUOI PARLARCI?
            </p>
            <h2 className="mt-5 font-display text-2xl font-medium md:text-3xl">
              Contattaci direttamente
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.9] text-muted-foreground md:text-lg">
              Stiamo configurando i nuovi canali di contatto.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
