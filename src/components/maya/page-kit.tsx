import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreadConnector } from "./sections";

export const CONTACT = "https://www.maya-project.it/contatti/";

export function SiteHeader() {
  const nav = [
    { to: "/maya-web", label: "Web" },
    { to: "/maya-connect", label: "Connect" },
    { to: "/maya-app", label: "App" },
  ] as const;
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-6 py-6 md:px-12 md:py-9 lg:px-16">
      <Link to="/" aria-label="Maya Project, homepage" className="group inline-flex items-center gap-3 font-display text-sm font-semibold tracking-[0.12em] md:text-base">
        <span className="inline-block size-2 rotate-45 border border-primary bg-primary transition-transform group-hover:rotate-[135deg]" />
        MAYA<span className="text-muted-foreground">/</span>PROJECT
      </Link>
      <nav className="flex items-center gap-4 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] md:gap-8 md:text-xs">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "!text-primary" }}>
            {n.label}
          </Link>
        ))}
        <a href={CONTACT} className="hidden items-center gap-2 border-b border-border pb-1 transition-colors hover:border-primary hover:text-primary sm:inline-flex">
          Contatti <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </nav>
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

export function PageHero({ kicker, title, subtitle, children }: { kicker: string; title: React.ReactNode; subtitle: React.ReactNode; children?: React.ReactNode }) {
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

export function Closing({ title, cta, text }: { title: React.ReactNode; cta: string; text?: React.ReactNode }) {
  return (
    <>
      <ThreadConnector />
      <section className="relative overflow-hidden px-6 pb-24 pt-8 text-center md:px-12 md:pb-36 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-ambient" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-[clamp(2.1rem,4.8vw,4.5rem)] font-medium leading-[1.08]">{title}</h2>
          {text && <div className="mx-auto mt-8 max-w-xl text-lg leading-[1.9] text-muted-foreground">{text}</div>}
          <Button asChild variant="maya" size="lg" className="mt-12 h-13 px-8 text-xs font-bold uppercase tracking-[0.1em]">
            <a href={CONTACT}>{cta} <ArrowUpRight aria-hidden="true" /></a>
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
