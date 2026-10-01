import { Link } from "@tanstack/react-router";

/* Rimandi alle pagine informative. Compaiono sotto la riga di copyright in
   fondo a ogni pagina: senza di questi la casella di consenso del modulo
   preventivo rimanderebbe a un'informativa non raggiungibile.
   Vive in un file a sé perché page-kit e sections si importano a vicenda. */
export function LegalLinks({ className = "" }: { className?: string }) {
  const links = [
    { to: "/privacy-policy", label: "Privacy" },
    { to: "/cookie-policy", label: "Cookie" },
    { to: "/note-legali", label: "Note legali" },
  ] as const;
  return (
    <nav
      aria-label="Informazioni legali"
      className={`relative mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-semibold text-muted-foreground/70 ${className}`}
    >
      {links.map((l) => (
        <Link key={l.to} to={l.to} className="transition-colors hover:text-primary">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
