import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, SiteHeader } from "@/components/maya/page-kit";
import {
  ShowroomSection,
  ManifestoSection,
  MetodoSection,
  EcosistemaSection,
  SoluzioniSection,
  FinalCta,
} from "@/components/maya/home";

const SITE = "https://maya-project.it/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maya Project — Cuciamo il digitale intorno al tuo brand" },
      {
        name: "description",
        content:
          "Studio digitale indipendente a Napoli. Progettiamo esperienze e sistemi digitali su misura, costruiti intorno al tuo brand e agli strumenti che usi già.",
      },
      {
        property: "og:title",
        content: "Maya Project — Cuciamo il digitale intorno al tuo brand",
      },
      {
        property: "og:description",
        content:
          "Progettiamo esperienze e sistemi digitali su misura, costruiti intorno al tuo brand e agli strumenti che usi già.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE}#organization`,
              name: "Maya Project",
              url: SITE,
              slogan: "Cuciamo il digitale intorno al tuo brand",
              email: "info@maya-project.it",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Napoli",
                addressRegion: "NA",
                addressCountry: "IT",
              },
              sameAs: ["https://www.instagram.com/_maya_project_/"],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE}#website`,
              url: SITE,
              name: "Maya Project",
              inLanguage: "it-IT",
              publisher: { "@id": `${SITE}#organization` },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const HERO_VIDEO = "/media/maya-hero.mp4";
const HERO_POSTER = "/media/maya-hero-poster.webp";

/* Sfondo dell'hero: l'immagine fissa c'è sempre (anche su mobile e con "riduci animazioni"),
   il video parte (anche su mobile, pesa 660 KB) se l'utente non ha chiesto meno movimento. */
function HeroMedia() {
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(!calm.matches);
    update();
    calm.addEventListener("change", update);
    return () => calm.removeEventListener("change", update);
  }, []);
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <img
        src={HERO_POSTER}
        alt=""
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-right"
      />
      {playVideo && (
        <video
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-right"
        />
      )}
      {/* Schermo scuro per tenere leggibile il testo: uniforme su mobile, da sinistra su desktop */}
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

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-svh flex-col overflow-hidden border-b border-border bg-background max-md:min-h-[min(710px,80svh)]">
        <HeroMedia />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-ambient [animation:none]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hero-vignette"
        />
        <SiteHeader home />

        <div
          id="inizio"
          className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center justify-center px-6 pb-16 pt-2 text-center md:px-12 md:pb-10 lg:items-start lg:text-left lg:px-16"
        >
          <p className="reveal-in font-sans text-base md:text-lg font-semibold tracking-[-0.01em] text-primary md:text-xs">
            Studio digitale indipendente <span className="mx-2 text-muted-foreground">/</span>{" "}
            Italia
          </p>
          <div className="reveal-in mt-8 max-w-[1180px] [animation-delay:210ms] lg:max-w-[760px]">
            <h1 className="font-display text-[clamp(2.15rem,4.6vw,5.25rem)] font-semibold tracking-[-0.02em] leading-[1.08] text-foreground lg:text-[clamp(2.15rem,3.9vw,4.4rem)]">
              Cuciamo il digitale
              <br className="hidden sm:block" /> intorno al{" "}
              <span className="text-primary">tuo brand.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[760px] font-sans text-sm leading-[1.85] text-muted-foreground md:mt-5 md:text-lg lg:mx-0">
              Siti web, applicazioni e sistemi connessi, progettati su misura per la tua attività.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-7 lg:justify-start">
              <Button
                asChild
                variant="maya"
                size="lg"
                className="h-12 px-6 text-xs font-bold uppercase tracking-[0.1em] md:h-13 md:px-8"
              >
                <a href="#concept">
                  Esplora i concept <ArrowDownRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="mayaOutline"
                size="lg"
                className="h-12 px-6 text-xs font-bold uppercase tracking-[0.1em] md:h-13 md:px-8"
              >
                <Link to={CONTACT}>
                  Parla con noi <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 pb-6 text-sm font-semibold text-muted-foreground md:px-12 md:pb-8 lg:px-16">
          <span className="hidden sm:inline">
            Design <span className="px-2 text-primary">·</span> Tecnologia{" "}
            <span className="px-2 text-primary">·</span> Connessioni
          </span>
          <span className="sm:hidden">Maya Project / 01</span>
          <a
            href="#concept"
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            Esplora <MoveDown aria-hidden="true" className="size-3.5" />
          </a>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-0.5 w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
        />
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
