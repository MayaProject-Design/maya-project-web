import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalBlock, LegalPage, Mail } from "@/components/maya/legal-page";
import { LEGAL_UPDATED, titolareLabel } from "@/lib/legal";

const URL_CANONICAL = "https://maya-project.it/note-legali";
const TITLE = "Note legali | Maya Project";
const DESCRIPTION =
  "Titolarità del sito, proprietà intellettuale dei progetti, natura dei concept di portfolio e condizioni d'uso.";

export const Route = createFileRoute("/note-legali")({
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
  component: NoteLegaliPage,
});

function NoteLegaliPage() {
  return (
    <LegalPage
      kicker="NOTE LEGALI"
      title={
        <>
          Le regole <span className="text-primary">della casa.</span>
        </>
      }
      intro="Chi pubblica questo sito, a chi appartiene quello che vedi, che valore hanno i progetti mostrati nel portfolio e cosa vale quando ci chiedi un preventivo."
      updated={LEGAL_UPDATED}
    >
      <LegalBlock title="1. Titolarità del sito">
        <p>
          Il sito maya-project.it è pubblicato e gestito da {titolareLabel()}. Per ogni
          comunicazione: <Mail />.
        </p>
      </LegalBlock>

      <LegalBlock title="2. Proprietà intellettuale">
        <p>
          Testi, immagini, elementi grafici, interfacce, concept, codice sorgente e struttura di
          questo sito sono opera di Maya Project e sono protetti dalla normativa italiana ed
          europea sul diritto d'autore. Ne è consentita la consultazione personale; non sono consentiti il riutilizzo, la
          riproduzione, la modifica o la ridistribuzione a fini commerciali senza
          autorizzazione scritta.
        </p>
        <p>
          I marchi, i nomi commerciali e i loghi eventualmente citati o rappresentati all'interno
          dei progetti appartengono ai rispettivi titolari e sono usati solo a fini
          descrittivi e illustrativi.
        </p>
      </LegalBlock>

      <LegalBlock title="3. Natura dei progetti mostrati">
        <p>
          Alcuni dei lavori presentati sul sito sono{" "}
          <strong className="font-medium text-foreground">
            concept e progetti dimostrativi
          </strong>{" "}
          realizzati da Maya Project per illustrare il proprio metodo di lavoro. Quando un progetto
          non deriva da un incarico realmente conferito da un committente, lo indichiamo: la sua
          presenza non implica alcun rapporto commerciale, in corso o passato, con le attività o
          i marchi eventualmente richiamati.
        </p>
        <p>
          I contenuti che compaiono nelle dimostrazioni interattive, compresi eventuali listini,
          orari, servizi o dati anagrafici, sono inventati a titolo di esempio per rendere
          leggibile il progetto e non costituiscono informazioni reali su alcuna attività.
        </p>
      </LegalBlock>

      <LegalBlock title="4. Preventivi e proposte">
        <p>
          Questo sito{" "}
          <strong className="font-medium text-foreground">non pubblica un listino prezzi.</strong>{" "}
          Ogni progetto viene quotato in base all'analisi dell'attività, all'ampiezza dell'intervento
          e agli strumenti già in uso.
        </p>
        <p>
          L'invio del{" "}
          <Link
            to="/preventivo"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            modulo di richiesta
          </Link>{" "}
          non costituisce ordine, proposta contrattuale o impegno per nessuna delle due parti: è
          l'avvio di una conversazione. Le descrizioni dei servizi presenti sul sito hanno finalità
          informativa e non costituiscono offerta al pubblico ai sensi dell'art. 1336 del Codice
          civile. Ogni rapporto si perfeziona esclusivamente con un preventivo scritto accettato da
          entrambe le parti.
        </p>
      </LegalBlock>

      <LegalBlock title="5. Limitazione di responsabilità">
        <p>
          I contenuti del sito sono curati con la massima attenzione, ma sono forniti a scopo
          informativo e possono essere aggiornati o modificati in qualsiasi momento senza
          preavviso. Maya Project non risponde di eventuali errori, imprecisioni od omissioni, né
          di decisioni assunte sulla base delle sole informazioni pubblicate qui.
        </p>
        <p>
          Ci impegniamo a mantenere il sito raggiungibile e funzionante, senza però garantirne la
          disponibilità continua e ininterrotta, che dipende anche da infrastrutture di terzi.
        </p>
      </LegalBlock>

      <LegalBlock title="6. Collegamenti a siti esterni">
        <p>
          Il sito può contenere collegamenti verso risorse esterne, indicati a titolo di
          riferimento. Maya Project non controlla tali risorse e non risponde dei loro contenuti,
          della loro disponibilità né delle pratiche di trattamento dei dati che vi si applicano.
        </p>
      </LegalBlock>

      <LegalBlock title="7. Dati personali">
        <p>
          Il trattamento dei dati di chi visita il sito o invia una richiesta è descritto nella{" "}
          <Link
            to="/privacy-policy"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Privacy Policy
          </Link>
          ; l'uso dei cookie nella{" "}
          <Link
            to="/cookie-policy"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </LegalBlock>

      <LegalBlock title="8. Legge applicabile">
        <p>
          L'uso di questo sito è regolato dalla legge italiana. Per le controversie con
          consumatori resta competente il foro di residenza o domicilio elettivo del consumatore,
          ai sensi dell'art. 66-bis del Codice del consumo. Nei rapporti tra professionisti è
          competente in via esclusiva il foro di Napoli.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
