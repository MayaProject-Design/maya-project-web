import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalBlock, LegalPage, Mail } from "@/components/maya/legal-page";
import { LEGAL_UPDATED, titolareLabel } from "@/lib/legal";

const URL_CANONICAL = "https://maya-project.it/cookie-policy";
const TITLE = "Cookie Policy | Maya Project";
const DESCRIPTION =
  "Questo sito non usa cookie di profilazione né strumenti di analisi. Qui trovi cosa viene effettivamente usato.";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <LegalPage
      kicker="COOKIE"
      title={
        <>
          Nessun banner, <span className="text-primary">perché non serve.</span>
        </>
      }
      intro="Questo sito non ti profila. Non ci sono cookie pubblicitari, né strumenti di analisi del comportamento: per questo non troverai una finestra che ti chiede di accettare qualcosa."
      updated={LEGAL_UPDATED}
    >
      <LegalBlock title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che un sito salva sul dispositivo di chi lo visita,
          per ricordare informazioni tra una pagina e l'altra. Alcuni sono indispensabili al
          funzionamento del sito; altri servono a misurare le visite o a mostrare pubblicità, e
          questi ultimi richiedono il consenso preventivo dell'utente.
        </p>
      </LegalBlock>

      <LegalBlock title="2. Cosa fa questo sito">
        <p>
          Il sito di Maya Project{" "}
          <strong className="font-medium text-foreground">
            non installa cookie di profilazione, non usa sistemi di analisi statistica e non
            ospita pixel pubblicitari.
          </strong>{" "}
          Non sono presenti Google Analytics, tag di Google Ads, pixel di Meta o strumenti
          analoghi. Non registriamo la tua navigazione e non costruiamo profili di interesse.
        </p>
        <p>
          Per questo non compare alcun banner di consenso: non c'è nulla per cui chiedertelo. Le
          preferenze che compili nel modulo di richiesta preventivo restano nella memoria
          temporanea del browser fino all'invio e non vengono salvate in alcun cookie.
        </p>
      </LegalBlock>

      <LegalBlock title="3. Cookie tecnici dell'infrastruttura">
        <p>
          Il sito è distribuito attraverso la rete di Cloudflare, che per proteggere
          l'infrastruttura da traffico automatizzato e da attacchi può impostare cookie tecnici di
          brevissima durata, legati esclusivamente alla sicurezza della connessione. Questi
          cookie non profilano l'utente e, in quanto strettamente necessari all'erogazione del
          servizio, non richiedono consenso ai sensi dell'art. 122 del Codice in materia di
          protezione dei dati personali.
        </p>
        <p>
          Puoi in ogni caso bloccare o cancellare qualsiasi cookie dalle impostazioni del tuo
          browser. Il sito continua a funzionare normalmente.
        </p>
      </LegalBlock>

      <LegalBlock title="4. Contenuti richiesti a terze parti">
        <p>
          I caratteri tipografici del sito sono richiesti ai server di Google Fonts nel momento in
          cui la pagina viene caricata. Google Fonts{" "}
          <strong className="font-medium text-foreground">non installa cookie</strong>, ma per
          consegnare il file riceve necessariamente l'indirizzo IP del visitatore, come qualsiasi
          server contattato da un browser. Il trattamento è descritto nella{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            privacy policy di Google
          </a>
          .
        </p>
        <p>
          Se dalle pagine del sito apri un collegamento verso Instagram o verso un altro servizio
          esterno, da quel momento valgono le regole sui cookie di quel servizio, su cui non
          abbiamo controllo.
        </p>
      </LegalBlock>

      <LegalBlock title="5. Titolare e contatti">
        <p>
          Il titolare del trattamento è {titolareLabel()}. Per qualsiasi domanda su questa pagina
          puoi scrivere a <Mail />. Il trattamento dei dati personali è descritto nella{" "}
          <Link
            to="/privacy-policy"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
