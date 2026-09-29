import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreadConnector } from "./sections";

export const CONTACT = "/contatti";
export const QUOTE = "/preventivo" as const;

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    { to: "/maya-web", label: "MAYA WEB" },
    { to: "/maya-connect", label: "MAYA CONNECT" },
    { to: "/maya-app", label: "MAYA APP" },
  ] as const;
  const brandContents = (
    <>
      <span aria-hidden="true" className="relative inline-flex h-px w-4 shrink-0 bg-foreground/60 transition-colors duration-300 group-hover:bg-foreground/80 sm:w-5">
        <span className="absolute -right-px top-1/2 size-[3px] -translate-y-1/2 rounded-full bg-primary" />
      </span>
      <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-foreground md:text-[13px]">
        MAYA <span className="text-foreground/75">PROJECT</span>
      </span>
    </>
  );
  const brandClass = "group inline-flex min-w-0 items-center gap-2.5";
  const renderNavLinks = (variant: "nav" | "mobile") =>
    nav.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        onClick={variant === "mobile" ? () => setMenuOpen(false) : undefined}
        className={`site-nav-link ${variant === "mobile" ? "py-3" : "whitespace-nowrap"}`}
        activeProps={{ className: "site-nav-link-active" }}
      >
        {item.label}
      </Link>
    ));

  return (
    <header className={`relative z-20 mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:px-12 lg:px-16 ${home ? "px-5 py-5 sm:px-6 md:py-6" : "px-6 py-6 md:py-9"}`}>
      {home ? (
        <a href="#inizio" aria-label="Maya Project, torna all'inizio" className={brandClass}>{brandContents}</a>
      ) : (
        <Link to="/" aria-label="Maya Project, homepage" className={brandClass}>{brandContents}</Link>
      )}
      <nav aria-label="Navigazione principale" className="hidden items-center gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground lg:flex xl:gap-6 xl:text-[11px]">
        {renderNavLinks("nav")}
        <Link to={CONTACT} className="site-nav-link whitespace-nowrap">CONTATTI</Link>
        <Button asChild variant="link" className="group h-auto shrink-0 rounded-none border-b border-border p-0 pb-1 font-sans text-[10px] font-semibold uppercase text-foreground no-underline hover:border-primary hover:text-primary hover:no-underline xl:text-[11px]">
              <Link to={QUOTE}>INIZIA UN PROGETTO <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </Button>
      </nav>
      <Button type="button" variant="ghost" size="icon" aria-label={menuOpen ? "Chiudi menu" : "Apri menu"} aria-expanded={menuOpen} aria-controls="home-mobile-nav" onClick={() => setMenuOpen((open) => !open)} className="shrink-0 text-foreground hover:text-primary lg:hidden">
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      {menuOpen && (
        <nav id="home-mobile-nav" aria-label="Navigazione mobile" className="absolute inset-x-0 top-full z-20 grid gap-1 border-b border-border bg-background px-6 py-5 font-sans text-xs font-semibold uppercase text-muted-foreground shadow-lg lg:hidden">
          {renderNavLinks("mobile")}
          <Link to={CONTACT} onClick={() => setMenuOpen(false)} className="py-3 transition-colors hover:text-foreground">CONTATTI</Link>
          <Button asChild variant="link" className="h-auto justify-start rounded-none p-0 py-3 text-xs font-semibold uppercase text-primary no-underline hover:no-underline">
            <Link to={QUOTE} onClick={() => setMenuOpen(false)}>INIZIA UN PROGETTO <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="relative flex size-2.5 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary/30 node-pulse" />
        <span className="size-1.5 rounded-full bg-primary" />
      </span>
      {children}
    </div>
  );
}

export function PageHero({ kicker, title, subtitle, children }: { kicker: React.ReactNode; title: React.ReactNode; subtitle: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-ambient" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-grain" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-vignette" />
      <SiteHeader />
      <div className="mx-auto max-w-[1390px] px-6 pb-24 pt-14 md:px-12 md:pb-36 md:pt-24 lg:px-16">
        <p className="reveal-in font-display text-sm font-semibold uppercase tracking-[0.4em] text-primary">{kicker}</p>
        <h1 className="reveal-in mt-6 max-w-5xl font-display text-[clamp(2.6rem,6.4vw,6rem)] font-medium leading-[1.02] [animation-delay:100ms]">{title}</h1>
        <div className="reveal-in mt-8 max-w-2xl text-lg leading-[1.85] text-muted-foreground [animation-delay:200ms] md:text-xl">{subtitle}</div>
        {children}
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-px w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70" />
    </section>
  );
}

export function Section({ label, title, children, deep }: { label: string; title?: React.ReactNode; children: React.ReactNode; deep?: boolean }) {
  return (
    <section className={`relative px-6 py-20 md:px-12 md:py-32 lg:px-16 ${deep ? "bg-deep" : ""}`}>
      <div className="mx-auto max-w-[1390px]">
        <Label>{label}</Label>
        {title && <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-[1.06]">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

/* Elementi uniti da un filo orizzontale (desktop) / verticale (mobile) */
export function ThreadRow({ items }: { items: { t: string; d: string }[] }) {
  const cols = items.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className="relative mt-16 md:mt-24">
      <div aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px thread-line lg:block" />
      <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px thread-vertical lg:hidden" />
      <ol className={`grid gap-12 ${cols} md:gap-10`}>
        {items.map((s, i) => (
          <li key={s.t} className="relative pl-10 lg:pl-0 lg:pt-12">
            <span aria-hidden="true" className="absolute left-0 top-0 flex size-[15px] items-center justify-center rounded-full border border-primary/60 bg-background">
              <span className="size-[5px] rounded-full bg-primary node-pulse" style={{ animationDelay: `${i * 4}s` }} />
            </span>
            <span className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-2xl font-medium md:text-[1.6rem]">{s.t}</h3>
            <p className="mt-4 max-w-xs text-base leading-[1.9] text-muted-foreground md:text-[17px]">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Closing({ title, cta, text, to }: { title: React.ReactNode; cta: string; text?: React.ReactNode; to?: typeof QUOTE }) {
  return (
    <>
      <ThreadConnector />
      <section className="relative overflow-hidden px-6 pb-24 pt-8 text-center md:px-12 md:pb-36 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-ambient" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-[clamp(2.1rem,4.8vw,4.5rem)] font-medium leading-[1.08]">{title}</h2>
          {text && <div className="mx-auto mt-8 max-w-xl text-lg leading-[1.9] text-muted-foreground">{text}</div>}
          <Button asChild variant="maya" size="lg" className="mt-12 h-13 px-8 text-xs font-bold uppercase tracking-[0.1em]">
            {to ? <Link to={to}>{cta} <ArrowUpRight aria-hidden="true" /></Link> : <Link to={CONTACT}>{cta} <ArrowUpRight aria-hidden="true" /></Link>}
          </Button>
        </div>
        <p className="relative mt-24 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">© Maya Project <span className="px-2 text-primary">·</span> Cuciamo il digitale intorno al tuo brand</p>
      </section>
    </>
  );
}

export function EcosystemNav({ current }: { current: "web" | "connect" | "app" }) {
  const all = [
    { k: "web", to: "/maya-web", n: "Maya Web", d: "La tua identità digitale." },
    { k: "connect", to: "/maya-connect", n: "Maya Connect", d: "Il digitale che lavora insieme." },
    { k: "app", to: "/maya-app", n: "Maya App", d: "La tua esperienza digitale proprietaria." },
  ] as const;
  return (
    <section className="border-t border-border px-6 py-14 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1390px] gap-8 md:grid-cols-3">
        {all.map((p) => p.k === current ? (
          <div key={p.k} className="border-l border-primary pl-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Sei qui</p>
            <p className="mt-2 font-display text-xl">{p.n}</p>
          </div>
        ) : (
          <Link key={p.k} to={p.to} className="group border-l border-border pl-5 transition-colors hover:border-primary">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Ecosistema</p>
            <p className="mt-2 flex items-center gap-2 font-display text-xl transition-colors group-hover:text-primary">{p.n} <ArrowUpRight aria-hidden="true" className="size-4" /></p>
            <p className="mt-1 text-[15px] text-muted-foreground">{p.d}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
