import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./page-kit";
import { TITOLARE } from "@/lib/legal";

/* Impaginazione condivisa delle pagine informative (privacy, cookie, note legali).
   Stessa struttura dell'hero usato nelle altre pagine, con il corpo in colonna
   stretta per la leggibilità di testi lunghi. */
export function LegalPage({
  kicker,
  title,
  intro,
  updated,
  children,
}: {
  kicker: string;
  title: ReactNode;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
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
        <div className="mx-auto max-w-[1390px] px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-16 lg:px-16">
     <p className="reveal-in font-display text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
            {kicker}
          </p>
          <h1 className="reveal-in mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[1.04] [animation-delay:100ms]">
            {title}
          </h1>
          <p className="reveal-in mt-7 max-w-2xl text-base leading-[1.9] text-muted-foreground [animation-delay:200ms] md:text-lg">
            {intro}
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-0.5 w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
        />
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[760px]">
     <p className="text-sm font-semibold text-muted-foreground">
            Ultimo aggiornamento: {updated}
          </p>
          <div className="mt-12 space-y-12">{children}</div>

          <div
            aria-hidden="true"
            className="mt-20 h-0.5 w-full thread-line opacity-70"
          />

     <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link to="/cookie-policy" className="transition-colors hover:text-primary">
              Cookie
            </Link>
            <Link to="/note-legali" className="transition-colors hover:text-primary">
              Note legali
            </Link>
            <Link to="/contatti" className="transition-colors hover:text-primary">
              Contatti
            </Link>
          </div>

     <p className="mt-10 text-sm font-semibold text-muted-foreground">
            © Maya Project <span className="px-2 text-primary">·</span> Cuciamo il
            digitale intorno al tuo brand
          </p>
        </div>
      </section>
    </main>
  );
}

export function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-[-0.015em] md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-[1.9] text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function Mail() {
  return (
    <a
      href={`mailto:${TITOLARE.email}`}
      className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
    >
      {TITOLARE.email}
    </a>
  );
}
