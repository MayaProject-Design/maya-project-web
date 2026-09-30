import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalBlock, LegalPage, Mail } from "@/components/maya/legal-page";
import { LEGAL_UPDATED, TITOLARE, titolareLabel } from "@/lib/legal";

const URL_CANONICAL = "https://maya-project.it/privacy-policy";
const TITLE = "Privacy Policy | Maya Project";
const DESCRIPTION =
  "Come Maya Project tratta i dati personali di chi visita il sito o richiede un preventivo.";

export const Route = createFileRoute("/privacy-policy")({
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
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPage
      kicker="PRIVACY"
      title={
        <>
          I tuoi dati, <span className="text-primary">senza sorprese.</span>
        </>
      }
      intro="Questa informativa spiega quali dati raccogliamo, perché, per quanto tempo li conserviamo e come puoi chiederne la cancellazione. È scritta per essere letta, non per essere archiviata."
      updated={LEGAL_UPDATED}
    >
      <LegalBlock title="1. Chi tratta i tuoi dati">
        <p>
          Il titolare del trattamento è {titolareLabel()}. Per qualsiasi questione relativa
          ai tuoi dati personali puoi scrivere a <Mail />.
        </p>
        <p>
          Maya Project non ha nominato un Responsabile della protezione dei dati (DPO), non
          essendo tenuta a farlo ai sensi dell'art. 37 del Regolamento (UE) 2016/679.
        </p>
      </LegalBlock>

      <LegalBlock title="2. Quali dati raccogliamo">
        <p>
          <strong className="font-medium text-foreground">
            Quando richiedi un preventivo.
          </strong>{" "}
          Il modulo di{" "}
          <Link
            to="/preventivo"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            richiesta preventivo
          </Link>{" "}
          raccoglie: il tipo di progetto che ti interessa, il settore della tua attività,
          l'obiettivo che vuoi raggiungere, gli strumenti digitali che usi già, la tempistica e
          la fascia di budget indicativa, oltre a nome, indirizzo email, numero di telefono e
          nome dell'attività. Nessuno di questi dati è raccolto di nascosto: sono esattamente i
          campi che compili.
        </p>
        <p>
          <strong className="font-medium text-foreground">
            Quando ci scrivi direttamente.
          </strong>{" "}
          Se ci contatti via email o tramite Instagram, trattiamo i dati che scegli di
          comunicarci in quel messaggio.
        </p>
        <p>
          <strong className="font-medium text-foreground">Dati tecnici di navigazione.</strong>{" "}
          L'infrastruttura che ospita il sito registra, come qualsiasi server web, dati tecnici
          quali indirizzo IP, data e ora della richiesta, pagina richiesta, tipo di browser e
          sistema operativo. Servono al funzionamento e alla sicurezza del sito e non vengono
          usati per identificarti né per costruire profili.
        </p>
        <p>
          <strong className="font-medium text-foreground">
            Il sito non usa strumenti di analisi o di tracciamento.
          </strong>{" "}
          Non sono installati Google Analytics, pixel pubblicitari o sistemi di profilazione. Per
          i dettagli sui cookie vedi la{" "}
          <Link
            to="/cookie-policy"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </LegalBlock>

      <LegalBlock title="3. Perché li trattiamo">
        <p>
          <strong className="font-medium text-foreground">
            Per rispondere alla tua richiesta e preparare un preventivo.
          </strong>{" "}
          Base giuridica: esecuzione di misure precontrattuali adottate su tua richiesta (art. 6,
          par. 1, lett. b del Regolamento) e il consenso che presti spuntando la casella nel
          modulo (art. 6, par. 1, lett. a). Senza questi dati non possiamo ricontattarti: il
          conferimento è quindi necessario per ottenere una risposta, ma resta del tutto
          facoltativo compilare il modulo.
        </p>
        <p>
          <strong className="font-medium text-foreground">
            Per far funzionare il sito in sicurezza.
          </strong>{" "}
          Base giuridica: nostro legittimo interesse a garantire la continuità del servizio e a
          prevenire abusi, come l'invio automatizzato di messaggi indesiderati (art. 6, par. 1,
          lett. f).
        </p>
        <p>
          <strong className="font-medium text-foreground">
            Per adempiere a obblighi di legge,
          </strong>{" "}
          contabili e fiscali, se la richiesta diventa un incarico (art. 6, par. 1, lett. c).
        </p>
        <p>
          Non inviamo newsletter o comunicazioni commerciali a chi ci ha solo chiesto un
          preventivo, e non cediamo né vendiamo i dati a terzi per finalità di marketing. Non
          adottiamo processi decisionali automatizzati né di profilazione.
        </p>
      </LegalBlock>

      <LegalBlock title="4. Per quanto tempo li conserviamo">
        <p>
          Le richieste di preventivo che non si trasformano in un incarico sono conservate per{" "}
          <strong className="font-medium text-foreground">24 mesi</strong> dall'ultimo contatto
          utile, dopodiché vengono cancellate. Il termine ci permette di riprendere una
          conversazione lasciata in sospeso senza chiederti di ripartire da zero.
        </p>
        <p>
          Se la richiesta diventa un progetto, i dati sono conservati per la durata del rapporto e
          per i dieci anni successivi previsti dalla normativa civilistica e fiscale.
        </p>
        <p>
          I dati tecnici di navigazione sono conservati per il tempo necessario alla sicurezza
          dell'infrastruttura, in genere non superiore a pochi mesi.
        </p>
      </LegalBlock>

      <LegalBlock title="5. Chi altro vede i tuoi dati">
        <p>
          Non diffondiamo i tuoi dati. Per far funzionare il sito e la posta ci affidiamo a
          fornitori che li trattano come responsabili del trattamento (art. 28 del Regolamento),
          limitatamente a quanto necessario:
        </p>
        <ul className="ml-1 list-none space-y-3">
          <li className="border-l border-border pl-4">
            <strong className="font-medium text-foreground">Cloudflare, Inc.</strong> — hosting e
            distribuzione del sito, protezione da attacchi e da traffico automatizzato.
          </li>
          <li className="border-l border-border pl-4">
            <strong className="font-medium text-foreground">Resend (Plus Five Five, Inc.)</strong>{" "}
            — recapito tecnico delle email generate dal modulo di preventivo, che vengono
            consegnate alla casella {TITOLARE.emailPreventivi}.
          </li>
          <li className="border-l border-border pl-4">
            <strong className="font-medium text-foreground">
              Il fornitore della casella di posta del dominio maya-project.it
            </strong>{" "}
            — conservazione dei messaggi ricevuti.
          </li>
          <li className="border-l border-border pl-4">
            <strong className="font-medium text-foreground">Google Ireland Limited</strong> — i
            caratteri tipografici del sito sono richiesti ai server Google Fonts, che per
            consegnarli ricevono l'indirizzo IP del visitatore. Non vengono installati cookie.
          </li>
        </ul>
        <p>
          Possiamo inoltre comunicare i dati a consulenti contabili e legali, o all'autorità
          giudiziaria, quando la legge lo impone.
        </p>
      </LegalBlock>

      <LegalBlock title="6. Trasferimenti fuori dall'Unione Europea">
        <p>
          Alcuni dei fornitori indicati sopra hanno sede negli Stati Uniti o possono trattare i
          dati su infrastrutture extra UE. In questi casi il trasferimento avviene sulla base
          delle garanzie previste dal Capo V del Regolamento: decisione di adeguatezza della
          Commissione europea relativa al quadro UE-USA per la privacy dei dati, ove applicabile,
          oppure clausole contrattuali tipo approvate dalla Commissione. Puoi chiederci copia
          delle garanzie in essere scrivendo a <Mail />.
        </p>
      </LegalBlock>

      <LegalBlock title="7. I tuoi diritti">
        <p>
          Puoi in qualsiasi momento chiederci l'accesso ai tuoi dati, la loro rettifica o
          cancellazione, la limitazione del trattamento, la portabilità in un formato leggibile,
          e opporti al trattamento fondato sul legittimo interesse (artt. 15–22 del Regolamento).
          Dove il trattamento si basa sul consenso, puoi revocarlo in ogni momento senza che
          questo pregiudichi la liceità di quanto trattato prima.
        </p>
        <p>
          Per esercitare questi diritti è sufficiente un'email a <Mail />: rispondiamo entro
          trenta giorni e la richiesta è gratuita. Se ritieni che la risposta non sia
          soddisfacente, puoi proporre reclamo al Garante per la protezione dei dati personali
          (
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            garanteprivacy.it
          </a>
          ) o ricorrere all'autorità giudiziaria.
        </p>
      </LegalBlock>

      <LegalBlock title="8. Aggiornamenti">
        <p>
          Se cambiamo gli strumenti che usiamo, aggiorniamo questa informativa e la data indicata
          in cima alla pagina. Ti invitiamo a rileggerla prima di inviarci una nuova richiesta.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
