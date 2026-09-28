import { createFileRoute } from "@tanstack/react-router";
import { Closing, EcosystemNav, PageHero, Section, ThreadRow } from "@/components/maya/page-kit";

const TITLE = "Maya App — Applicazioni dedicate | Maya Project";
const DESC = "La tua esperienza digitale proprietaria. Applicazioni dedicate per offrire servizi più semplici, veloci e personalizzati.";

export const Route = createFileRoute("/maya-app")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MayaAppPage,
});

const STEPS = ["Idea", "Progettazione", "Sviluppo", "Connessione"];

function MayaAppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        kicker="Maya App"
        title={<>La tua esperienza digitale <span className="text-primary">proprietaria.</span></>}
        subtitle={<p>Un'applicazione dedicata permette alla tua attività di offrire servizi più semplici, veloci e personalizzati.</p>}
      />

      <Section label="Perché una app">
        <ThreadRow items={[
          { t: "Esperienza cliente", d: "Un rapporto diretto con i tuoi utenti." },
          { t: "Servizi personalizzati", d: "Funzioni costruite sulle tue esigenze." },
          { t: "Connessione", d: "Integrata con il tuo ecosistema digitale." },
        ]} />
      </Section>

      <Section deep label="Dal concetto al prodotto" title={<>Dal concetto <span className="text-chrome">al prodotto.</span></>}>
        <ol className="relative mt-16 md:mt-24">
          <div aria-hidden="true" className="absolute bottom-8 left-[11px] top-8 w-px thread-vertical" />
          {STEPS.map((s, i) => (
            <li key={s} className="relative flex items-center gap-8 border-t border-border py-8 pl-12 md:py-10">
              <span aria-hidden="true" className={`absolute left-0 flex size-6 items-center justify-center rounded-full border bg-deep ${i === STEPS.length - 1 ? "border-primary shadow-[0_0_18px_var(--primary)]" : "border-primary/50"}`}>
                <span className="size-1.5 rounded-full bg-primary node-pulse" style={{ animationDelay: `${i * 4}s` }} />
              </span>
              <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span className={`font-display text-[clamp(1.8rem,4vw,3.5rem)] font-medium ${i === STEPS.length - 1 ? "text-primary" : ""}`}>{s}</span>
            </li>
          ))}
        </ol>
      </Section>

      <EcosystemNav current="app" />
      <Closing title={<>La tecnologia diventa parte della tua <span className="text-primary">esperienza cliente.</span></>} cta="Parliamo del tuo progetto" />
    </main>
  );
}
