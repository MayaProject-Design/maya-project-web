import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/maya/page-kit";
import { LegalLinks } from "@/components/maya/legal-links";

export const Route = createFileRoute("/grazie-preventivo")({
  head: () => ({
    meta: [
      { title: "Richiesta ricevuta | Maya Project" },
      { name: "description", content: "Abbiamo ricevuto la tua richiesta di preventivo." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: GraziePreventivoPage,
});

function GraziePreventivoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-ambient [animation:none]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
        />
        <SiteHeader />
        <div className="mx-auto flex w-full max-w-[1390px] flex-1 flex-col items-center justify-center px-6 py-20 text-center md:px-12 lg:px-16">
          <p className="font-display text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
            Richiesta ricevuta
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,5.4vw,5rem)] font-semibold tracking-[-0.02em] leading-[1.04]">
            Grazie, abbiamo <span className="text-primary">la tua richiesta.</span>
          </h1>
          <div className="mt-7 max-w-xl space-y-2 text-base leading-[1.9] text-muted-foreground md:text-lg">
            <p>La leggiamo con attenzione e ti ricontattiamo ai recapiti che ci hai lasciato.</p>
          </div>
          <Button
            asChild
            variant="mayaOutline"
            size="lg"
            className="mt-10 h-12 px-7 text-xs font-bold uppercase tracking-[0.1em]"
          >
            <Link to="/">
              Torna alla home <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-0.5 w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
        />
      </section>
      <footer className="px-6 pb-14 md:px-12 lg:px-16">
        <div aria-hidden="true" className="mx-auto h-0.5 w-[min(82vw,820px)] thread-line opacity-70" />
        <p className="mt-8 text-center text-sm font-semibold text-muted-foreground">
          © Maya Project <span className="px-2 text-primary">·</span> Cuciamo il digitale intorno al
          tuo brand
        </p>
        <LegalLinks />
      </footer>
    </main>
  );
}
