import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreadConnector } from "./sections";
import { LegalLinks } from "./legal-links";
import { MayaMark } from "./maya-mark";

export const CONTACT = "/contatti";
export const QUOTE = "/preventivo" as const;

export { LegalLinks };

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    { to: "/maya-web", label: "MAYA WEB" },
    { to: "/maya-connect", label: "MAYA CONNECT" },
    { to: "/maya-app", label: "MAYA APP" },
  ] as const;
  const brandContents = (
    <>
      <MayaMark className="h-[7px] w-auto shrink-0 text-foreground/70 transition-colors duration-300 group-hover:text-foreground sm:h-2 md:h-[9px]" />
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
    <header
      className={`relative z-20 mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:px-12 lg:px-16 ${home ? "px-5 py-5 sm:px-6 md:py-6" : "px-6 py-6 md:py-9"}`}
    >
      {home ? (
        <a href="#inizio" aria-label="Maya Project, torna all'inizio" className={brandClass}>
          {brandContents}
        </a>
      ) : (
        <Link to="/" aria-label="Maya Project, homepage" className={brandClass}>
          {brandContents}
        </Link>
      )}
      <nav
        aria-label="Navigazione principale"
        className="hidden items-center gap-4 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground lg:flex xl:gap-6 xl:text-[11px]"
      >
        {renderNavLinks("nav")}
        <Link to={CONTACT} className="site-nav-link whitespace-nowrap">
          CONTATTI
        </Link>
        <Button
          asChild
          variant="link"
          className="group h-auto shrink-0 rounded-none border-b border-border px-0 py-1 font-sans text-[10px] font-semibold uppercase leading-none text-foreground no-underline hover:border-primary hover:text-primary hover:no-underline xl:text-[11px]"
        >
          <Link to={QUOTE}>
            INIZIA UN PROGETTO{" "}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Button>
      </nav>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={menuOpen}
        aria-controls="home-mobile-nav"
        onClick={() => setMenuOpen((open) => !open)}
        className="shrink-0 text-foreground hover:text-primary lg:hidden"
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      {menuOpen && (
        <nav
          id="home-mobile-nav"
          aria-label="Navigazione mobile"
          className="absolute inset-x-0 top-full z-20 grid gap-1 border-b border-border bg-background px-6 py-5 font-sans text-xs font-semibold uppercase text-muted-foreground shadow-lg lg:hidden"
        >
          {renderNavLinks("mobile")}
          <Link
            to={CONTACT}
            onClick={() => setMenuOpen(false)}
            className="py-3 transition-colors hover:text-foreground"
          >
            CONTATTI
          </Link>
          <Button
            asChild
            variant="link"
            className="h-auto justify-start rounded-none p-0 py-3 text-xs font-semibold uppercase text-primary no-underline hover:no-underline"
          >
            <Link to={QUOTE} onClick={() => setMenuOpen(false)}>
              INIZIA UN PROGETTO <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-sans text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
      <span className="relative flex size-2.5 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary/30 node-pulse" />
        <span className="size-1.5 rounded-full bg-primary" />
      </span>
      {children}
    </div>
  );
}

/* Sfondo multimediale condiviso dagli hero delle pagine prodotto.
   - kind "video": poster sempre presente + video in loop che parte solo se l'utente
     non ha chiesto "riduci animazioni" (stesso comportamento dell'hero home).
   - kind "image": immagine fissa con uno zoom lentissimo in CSS (fermo con "riduci animazioni").
   Uno schermo scuro tiene il testo leggibile: uniforme su mobile, sfumato da sinistra su desktop. */
export type HeroMediaProps =
  | { kind: "video"; src: string; poster: string; position?: string }
  | { kind: "image"; src: string; position?: string };

export function HeroMedia(props: HeroMediaProps) {
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (props.kind !== "video") return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(!calm.matches);
    update();
    calm.addEventListener("change", update);
    return () => calm.removeEventListener("change", update);
  }, [props.kind]);
  const pos = props.position ?? "object-[75%_center] md:object-right";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {props.kind === "image" ? (
        <img
          src={props.src}
          alt=""
          width={1600}
          height={905}
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover hero-media-zoom ${pos}`}
        />
      ) : (
        <>
          <img
            src={props.poster}
            alt=""
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${pos}`}
          />
          {playVideo && (
            <video
              src={props.src}
              poster={props.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              tabIndex={-1}
              className={`absolute inset-0 h-full w-full object-cover ${pos}`}
            />
          )}
        </>
      )}
      <div className="absolute inset-0 bg-background/60 lg:hidden" />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, var(--background) 0%, color-mix(in oklab, var(--background) 72%, transparent) 34%, transparent 68%)",
        }}
      />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
  media,
  children,
}: {
  kicker: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  media?: HeroMediaProps;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden border-b border-border">
      {media && <HeroMedia {...media} />}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-ambient" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hero-grain" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
      />
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-[1390px] flex-1 flex-col justify-center px-6 pb-16 pt-8 md:px-12 md:pb-20 md:pt-10 lg:px-16">
        <p className="reveal-in font-display text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
          {kicker}
        </p>
        <h1 className="reveal-in mt-6 max-w-5xl font-display text-[clamp(2.6rem,6.4vw,6rem)] font-semibold tracking-[-0.02em] leading-[1.02] [animation-delay:100ms]">
          {title}
        </h1>
        <div className="reveal-in mt-8 max-w-2xl text-lg leading-[1.85] text-muted-foreground [animation-delay:200ms] md:text-xl">
          {subtitle}
        </div>
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-0.5 w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
      />
    </section>
  );
}

export function Section({
  label,
  title,
  children,
  deep,
}: {
  label: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  deep?: boolean;
}) {
  return (
    <section className={`relative px-6 py-20 md:px-12 md:py-32 lg:px-16 ${deep ? "bg-deep" : ""}`}>
      <div className="mx-auto max-w-[1390px]">
        <Label>{label}</Label>
        {title && (
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-semibold tracking-[-0.02em] leading-[1.06]">
            {title}
          </h2>
        )}
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
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[7px] hidden h-px thread-line lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[7px] top-0 w-px thread-vertical lg:hidden"
      />
      <ol className={`grid gap-12 ${cols} md:gap-10`}>
        {items.map((s, i) => (
          <li key={s.t} className="relative pl-10 lg:pl-0 lg:pt-12">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex size-[15px] items-center justify-center rounded-full border border-primary/60 bg-background"
            >
              <span
                className="size-[5px] rounded-full bg-primary node-pulse"
                style={{ animationDelay: `${i * 4}s` }}
              />
            </span>
            <span className="font-display text-sm text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.015em] md:text-[1.6rem]">{s.t}</h3>
            <p className="mt-4 max-w-xs text-base leading-[1.9] text-muted-foreground md:text-[17px]">
              {s.d}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Closing({
  title,
  cta,
  text,
  to,
}: {
  title: React.ReactNode;
  cta: string;
  text?: React.ReactNode;
  to?: typeof QUOTE;
}) {
  return (
    <>
      <ThreadConnector />
      <section className="relative overflow-hidden px-6 pb-24 pt-8 text-center md:px-12 md:pb-36 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-ambient" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-[clamp(2.1rem,4.8vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[1.08]">
            {title}
          </h2>
          {text && (
            <div className="mx-auto mt-8 max-w-xl text-lg leading-[1.9] text-muted-foreground">
              {text}
            </div>
          )}
          <Button
            asChild
            variant="maya"
            size="lg"
            className="mt-12 h-13 px-8 text-xs font-bold uppercase tracking-[0.1em]"
          >
            {to ? (
              <Link to={to}>
                {cta} <ArrowUpRight aria-hidden="true" />
              </Link>
            ) : (
              <Link to={CONTACT}>
                {cta} <ArrowUpRight aria-hidden="true" />
              </Link>
            )}
          </Button>
        </div>
        <p className="relative mt-24 text-sm font-semibold text-muted-foreground">
          © Maya Project <span className="px-2 text-primary">·</span> Cuciamo il digitale intorno al
          tuo brand
        </p>
        <LegalLinks />
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
        {all.map((p) =>
          p.k === current ? (
            <div key={p.k} className="border-l border-primary pl-5">
              <p className="text-base md:text-lg font-semibold tracking-[-0.01em] text-primary">
                Sei qui
              </p>
              <p className="mt-2 font-display text-xl">{p.n}</p>
            </div>
          ) : (
            <Link
              key={p.k}
              to={p.to}
              className="group border-l border-border pl-5 transition-colors hover:border-primary"
            >
              <p className="text-sm font-semibold text-muted-foreground">
                Ecosistema
              </p>
              <p className="mt-2 flex items-center gap-2 font-display text-xl transition-colors group-hover:text-primary">
                {p.n} <ArrowUpRight aria-hidden="true" className="size-4" />
              </p>
              <p className="mt-1 text-[15px] text-muted-foreground">{p.d}</p>
            </Link>
          ),
        )}
      </div>
    </section>
  );
}
