import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/maya/page-kit";

export const Route = createFileRoute("/grazie-preventivo")({
  head: () => ({
    meta: [
      { title: "Richiesta ricevuta | Maya Project" },
      { name: "description", content: "Abbiamo ricevuto la tua richiesta di preventivo." },
    ],
  }),
  component: GraziePreventivoPage,
});

function GraziePreventivoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-ambient [animation:none]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-vignette" />
        <SiteHeader />
        <div className="mx-auto flex w-full max-w-[1390px] flex-1 flex-col items-center justify-center px-6 py-20 text-center md:px-12 lg:px-16">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-primary">RICHIESTA RICEVUTA</p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,5.4vw,5rem)] font-medium leading-[1.04]">
            Il primo filo è stato <span className="text-primary">collegato.</span>
          </h1>
          <div className="mt-7 max-w-xl space-y-2 text-base leading-[1.9] text-muted-foreground md:text-lg">
            <p>Abbiamo ricevuto la tua richiesta.</p>
            <p>La analizzeremo e ti ricontatteremo utilizzando i dati che ci hai lasciato.</p>
          </div>
          <Button asChild variant="mayaOutline" size="lg" className="mt-10 h-12 px-7 text-xs font-bold uppercase tracking-[0.1em]">
            <Link to="/">Torna alla home <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-px w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70" />
      </section>
    </main>
  );
}
