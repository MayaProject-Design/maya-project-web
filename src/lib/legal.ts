/* Dati anagrafici usati nelle pagine legali.
 *
 * Ragione sociale e partita IVA restano vuote per scelta: verranno inserite
 * dopo la prima vendita. Finché lo sono, le pagine identificano il titolare
 * con nome commerciale, sede ed email — sufficiente per l'art. 13 del
 * Regolamento (UE) 2016/679, che chiede l'identità e i recapiti del titolare,
 * non i dati fiscali. Compilare i due campi qui sotto li propaga ovunque.
 */
export const TITOLARE = {
  nome: "Maya Project",
  ragioneSociale: "",
  partitaIva: "",
  indirizzo: "Napoli, Italia",
  email: "info@maya-project.it",
  emailPreventivi: "preventivi@maya-project.it",
  instagram: "https://www.instagram.com/_maya_project_/",
};

export const LEGAL_UPDATED = "30 settembre 2026";

/* Come il titolare viene nominato nel testo: nome commerciale, ragione sociale
   e partita IVA quando ci sono, sede sempre. */
export function titolareLabel() {
  const parts: string[] = [];
  parts.push(
    TITOLARE.ragioneSociale
      ? `${TITOLARE.nome} (${TITOLARE.ragioneSociale})`
      : TITOLARE.nome,
  );
  if (TITOLARE.partitaIva) parts.push(`P.IVA ${TITOLARE.partitaIva}`);
  parts.push(TITOLARE.indirizzo);
  return parts.join(", ");
}
