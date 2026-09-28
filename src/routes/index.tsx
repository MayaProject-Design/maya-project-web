import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, MoveDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShowroomSection, ManifestoSection, MetodoSection, EcosistemaSection, SoluzioniSection, FinalCta } from "@/components/maya/home";
import mayaLogo from "@/assets/maya-logo-hero.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maya Project — Trasformiamo la tua attività in un ecosistema digitale" },
      { name: "description", content: "Maya Project progetta siti web, applicazioni e sistemi digitali su misura. Cuciamo il digitale intorno al tuo brand." },
      { property: "og:title", content: "Maya Project — Trasformiamo la tua attività in un ecosistema digitale" },
      { property: "og:description", content: "Cuciamo il digitale intorno al tuo brand. Siti web, applicazioni e sistemi digitali su misura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    { to: "/maya-web", label: "MAYA WEB" },
    { to: "/maya-connect", label: "MAYA CONNECT" },
    { to: "/maya-app", label: "MAYA APP" },
  ] as const;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-[min(800px,94svh)] flex-col overflow-hidden border-b border-border bg-background max-md:min-h-[min(710px,80svh)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-ambient [animation:none]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-vignette" />
        <header className="relative z-20 mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-6 md:px-12 md:py-6 lg:px-16">
          <a href="#inizio" aria-label="Maya Project, torna all'inizio" className="group inline-flex min-w-0 items-center gap-2 font-display text-[13px] font-semibold tracking-[0.1em] sm:gap-3 sm:text-sm sm:tracking-[0.12em] md:text-base">
            <span className="inline-block size-2 shrink-0 rotate-45 border border-primary bg-primary transition-transform group-hover:rotate-[135deg]" />
            MAYA<span className="text-muted-foreground">/</span>PROJECT
          </a>
          <nav aria-label="Navigazione principale" className="hidden items-center gap-5 font-sans text-[10px] font-semibold uppercase text-muted-foreground lg:flex xl:gap-7 xl:text-[11px]">
            {nav.map((item) => <Link key={item.to} to={item.to} className="whitespace-nowrap transition-colors hover:text-foreground">{item.label}</Link>)}
            <a href="https://www.maya-project.it/contatti/" className="whitespace-nowrap transition-colors hover:text-foreground">CONTATTI</a>
            <Button asChild variant="link" className="group h-auto shrink-0 rounded-none border-b border-border p-0 pb-1 font-sans text-[10px] font-semibold uppercase text-foreground no-underline hover:border-primary hover:text-primary hover:no-underline xl:text-[11px]">
              <a href="https://www.maya-project.it/contatti/">INIZIA UN PROGETTO <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            </Button>
          </nav>
          <Button type="button" variant="ghost" size="icon" aria-label={menuOpen ? "Chiudi menu" : "Apri menu"} aria-expanded={menuOpen} aria-controls="home-mobile-nav" onClick={() => setMenuOpen((open) => !open)} className="shrink-0 text-foreground hover:text-primary lg:hidden">
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
          {menuOpen && <nav id="home-mobile-nav" aria-label="Navigazione mobile" className="absolute inset-x-0 top-full grid gap-1 border-b border-border bg-background px-6 py-5 font-sans text-xs font-semibold uppercase text-muted-foreground shadow-lg lg:hidden">
            {nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="py-3 transition-colors hover:text-foreground">{item.label}</Link>)}
            <a href="https://www.maya-project.it/contatti/" className="py-3 transition-colors hover:text-foreground">CONTATTI</a>
            <Button asChild variant="link" className="h-auto justify-start rounded-none p-0 py-3 text-xs font-semibold uppercase text-primary no-underline hover:no-underline"><a href="https://www.maya-project.it/contatti/">INIZIA UN PROGETTO <ArrowUpRight aria-hidden="true" /></a></Button>
          </nav>}
        </header>

        <div id="inizio" className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center justify-center px-6 pb-16 pt-2 text-center md:px-12 md:pb-10 lg:px-16">
          <p className="reveal-in font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-primary md:text-xs">Studio digitale indipendente <span className="mx-2 text-muted-foreground">/</span> Italia</p>
          <div className="reveal-in logo-integrated relative mt-4 w-full max-w-[1000px] [animation-delay:100ms] md:mt-4 md:max-w-[min(700px,62vw)] md:[@media(max-height:750px)]:max-w-[min(550px,50vw)]">
            <div aria-hidden="true" className="logo-halo absolute inset-[-14%]" />
            <img src={mayaLogo.url} alt="Logo Maya Project cromato con ago e filo digitale blu" className="mx-auto w-full object-contain" fetchPriority="high" />
          </div>
          <div className="reveal-in mt-6 max-w-[1000px] [animation-delay:210ms] md:mt-2">
            <h1 className="font-display text-[clamp(2.15rem,4.1vw,3.8rem)] font-medium leading-[1.08] text-foreground">
              Trasformiamo la tua attività<br className="hidden sm:block" /> in un <span className="text-primary">ecosistema digitale.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[680px] font-sans text-sm leading-[1.85] text-muted-foreground md:mt-5 md:text-base">
              Siti web, applicazioni e sistemi connessi progettati intorno al tuo business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-7">
              <Button asChild variant="maya" size="lg" className="h-12 px-6 text-xs font-bold uppercase tracking-[0.1em] md:h-13 md:px-8">
                <a href="#concept">Esplora i concept <ArrowDownRight aria-hidden="true" /></a>
              </Button>
              <Button asChild variant="mayaOutline" size="lg" className="h-12 px-6 text-xs font-bold uppercase tracking-[0.1em] md:h-13 md:px-8">
                <a href="https://www.maya-project.it/contatti/">Parla con noi <ArrowUpRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 pb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:px-12 md:pb-8 lg:px-16">
          <span className="hidden sm:inline">Design <span className="px-2 text-primary">·</span> Tecnologia <span className="px-2 text-primary">·</span> Connessioni</span>
          <span className="sm:hidden">Maya Project / 01</span>
          <a href="#concept" className="flex items-center gap-3 transition-colors hover:text-primary">Esplora <MoveDown aria-hidden="true" className="size-3.5" /></a>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-px w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70" />
      </section>

      <ShowroomSection />
      <ManifestoSection />
      <MetodoSection />
      <EcosistemaSection />
      <SoluzioniSection />
      <FinalCta />
    </main>
  );
}