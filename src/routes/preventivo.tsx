import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/maya/quote-form";
import { SiteHeader } from "@/components/maya/page-kit";
import { LegalLinks } from "@/components/maya/legal-links";

const URL_CANONICAL = "https://maya-project.it/preventivo";
const TITLE = "Richiedi un preventivo | Maya Project";
const DESCRIPTION =
  "Raccontaci cosa vuoi costruire. Partiamo dalla tua attività, dai tuoi obiettivi e dagli strumenti che utilizzi già.";

export const Route = createFileRoute("/preventivo")({
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
  component: PreventivoPage,
});

function PreventivoPage() {
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
        <div className="mx-auto grid max-w-[1390px] gap-8 px-6 pb-14 pt-10 md:px-12 md:pb-20 md:pt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16 lg:px-16">
          <div>
            <p className="reveal-in font-display text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              RICHIEDI UN PREVENTIVO
            </p>
            <h1 className="reveal-in mt-6 max-w-4xl font-display text-[clamp(2.7rem,5.4vw,5rem)] font-medium leading-[1.03] [animation-delay:100ms]">
              Raccontaci cosa <span className="text-primary">vuoi costruire.</span>
            </h1>
            <p className="reveal-in mt-6 max-w-2xl text-base leading-[1.9] text-muted-foreground [animation-delay:200ms] md:text-lg">
              Partiamo dalla tua attività, dai tuoi obiettivi e dagli strumenti che utilizzi già. Ti
              ricontatteremo per costruire una proposta intorno al tuo progetto.
            </p>
          </div>
          <p className="reveal-in border-l border-primary pl-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground [animation-delay:300ms] lg:mb-2 lg:whitespace-nowrap">
            <span className="text-primary">3 PASSAGGI</span> · CIRCA 2 MINUTI
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-0.5 w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
        />
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <QuoteForm />
      </section>
      <footer className="px-6 pb-14 md:px-12 lg:px-16">
        <div aria-hidden="true" className="mx-auto h-0.5 w-[min(82vw,820px)] thread-line opacity-70" />
        <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          © Maya Project <span className="px-2 text-primary">·</span> Cuciamo il digitale intorno al
          tuo brand
        </p>
        <LegalLinks />
      </footer>
    </main>
  );
}
