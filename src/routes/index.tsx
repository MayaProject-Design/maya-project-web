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
      { title: "Maya Project | Siti web e applicazioni su misura" },
      {
        name: "description",
        content:
          "Maya Project progetta siti web, applicazioni e sistemi digitali su misura. Cuciamo il digitale intorno al tuo brand.",
      },
      {
        property: "og:title",
        content: "Maya Project | Siti web e applicazioni su misura",
      },
      {
        property: "og:description",
        content:
          "Cuciamo il digitale intorno al tuo brand. Siti web, applicazioni e sistemi digitali su misura.",
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

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-svh flex-col overflow-hidden border-b border-border bg-background max-md:min-h-[min(710px,80svh)]">
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
          className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center justify-center px-6 pb-16 pt-2 text-center md:px-12 md:pb-10 lg:px-16"
        >
          <p className="reveal-in font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-primary md:text-xs">
            Studio digitale indipendente <span className="mx-2 text-muted-foreground">/</span>{" "}
            Italia
          </p>
          <div className="reveal-in mt-8 max-w-[1180px] [animation-delay:210ms]">
            <h1 className="font-display text-[clamp(2.15rem,4.6vw,5.25rem)] font-medium leading-[1.08] text-foreground">
              Trasformiamo la tua attività
              <br className="hidden sm:block" /> in un{" "}
              <span className="text-primary">ecosistema digitale.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[760px] font-sans text-sm leading-[1.85] text-muted-foreground md:mt-5 md:text-lg">
              Siti web, applicazioni e sistemi connessi progettati intorno al tuo business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-7">
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

        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 pb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:px-12 md:pb-8 lg:px-16">
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
          className="absolute bottom-0 left-1/2 h-px w-[min(82vw,820px)] -translate-x-1/2 thread-line opacity-70"
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
