/* Dati anagrafici usati nelle pagine legali.
 *
 * ⚠️ DA COMPLETARE PRIMA DI ANDARE ONLINE
 * Il Regolamento (UE) 2016/679, art. 13, richiede che il titolare del
 * trattamento sia identificabile. Finché `ragioneSociale` e `partitaIva`
 * restano vuote le pagine mostrano il solo nome commerciale: sufficiente per
 * pubblicare, da completare con i dati fiscali reali appena disponibili.
 */
export const TITOLARE = {
  nome: "Maya Project",
  ragioneSociale: "",
  partitaIva: "",
  indirizzo: "Portici (NA), Italia",
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
