import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  House,
  UserRound,
} from "lucide-react";

type AppScreen = "home" | "booking" | "account";

const SERVICES = ["Consulenza", "Trattamento", "Percorso"];
const WEEKDAYS = ["L", "M", "M", "G", "V", "S", "D"];
const DATES = ["", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-1 text-[10px] font-medium text-foreground/90">
      <span>09:41</span>
      <span aria-hidden="true" className="flex items-end gap-[2px]">
        <span className="h-1 w-[3px] rounded-[1px] bg-foreground/60" />
        <span className="h-1.5 w-[3px] rounded-[1px] bg-foreground/70" />
        <span className="h-2 w-[3px] rounded-[1px] bg-foreground/80" />
        <span className="ml-1 h-2 w-3 rounded-[2px] border border-foreground/60 p-[1px]">
          <span className="block h-full w-2/3 rounded-[1px] bg-primary" />
        </span>
      </span>
    </div>
  );
}

function AppNavigation({ active }: { active: AppScreen }) {
  const items = [
    { key: "home", label: "Home", Icon: House },
    { key: "booking", label: "Servizi", Icon: CalendarDays },
    { key: "account", label: "Profilo", Icon: UserRound },
  ] as const;

  return (
    <div aria-hidden="true" className="mt-3 grid grid-cols-3 border-t border-border/70 pt-3">
      {items.map(({ key, label, Icon }) => (
        <div
          key={key}
          className={`flex flex-col items-center gap-1 text-[9px] ${active === key ? "text-primary" : "text-muted-foreground"}`}
        >
          <Icon className="size-3.5" strokeWidth={1.6} />
          {label}
        </div>
      ))}
    </div>
  );
}

function ServiceRow({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/70 py-2.5 last:border-0">
      <span className="text-[11px] text-foreground/90">{name}</span>
      <ChevronRight aria-hidden="true" className="size-3.5 text-muted-foreground" />
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">Buongiorno</p>
      <h2 className="mt-1 font-display text-[19px] font-medium leading-tight">Il tuo spazio</h2>
      <div className="mt-4 border border-primary/30 bg-primary/5 p-3">
        <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          <CalendarDays aria-hidden="true" className="size-3.5 text-primary" />
          Prossimo appuntamento
        </div>
        <p className="mt-2 font-display text-[13px] font-medium">Trattamento viso</p>
        <p className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
          <Clock3 aria-hidden="true" className="size-3" /> 18 giugno · 10:30
        </p>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            I tuoi servizi
          </p>
          <span className="text-[9px] text-primary">Scopri tutti</span>
        </div>
        <div className="mt-1">
          {SERVICES.map((service) => (
            <ServiceRow key={service} name={service} />
          ))}
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between bg-primary px-3.5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground">
        Prenota un servizio
        <ArrowRight aria-hidden="true" className="size-3.5" />
      </div>
    </div>
  );
}

function BookingScreen() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
        Prenotazione
      </p>
      <h2 className="mt-1 font-display text-[19px] font-medium leading-tight">Scegli il momento</h2>
      <div className="mt-4 border-l border-primary pl-3">
        <p className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          Servizio selezionato
        </p>
        <p className="mt-1 font-display text-[13px]">Trattamento viso</p>
      </div>
      <div className="mt-4 border-t border-border/70 pt-3">
        <div className="flex items-center justify-between">
          <p className="font-display text-[13px]">Giugno</p>
          <CalendarDays aria-hidden="true" className="size-4 text-primary" />
        </div>
        <div className="mt-3 grid grid-cols-7 gap-y-2 text-center">
          {WEEKDAYS.map((day, index) => (
            <span key={`${day}-${index}`} className="text-[9px] text-muted-foreground">
              {day}
            </span>
          ))}
          {DATES.map((date, index) => (
            <span
              key={`${date}-${index}`}
              className={`mx-auto flex size-6 items-center justify-center rounded-full text-[9px] ${date === "18" ? "border border-primary text-primary" : date ? "text-foreground/80" : ""}`}
            >
              {date}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Orari disponibili
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {["09:30", "11:00", "14:30"].map((time) => (
            <span
              key={time}
              className={`py-2 text-center text-[9px] ${time === "11:00" ? "bg-primary text-primary-foreground" : "border border-border text-foreground/80"}`}
            >
              {time}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between bg-primary px-3.5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground">
        Conferma
        <Check aria-hidden="true" className="size-3.5" />
      </div>
    </div>
  );
}

function AccountScreen() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
        Area cliente
      </p>
      <div className="mt-3 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/5"
        >
          <UserRound className="size-5 text-primary" strokeWidth={1.4} />
        </span>
        <div>
          <h2 className="font-display text-[16px] font-medium">Il tuo profilo</h2>
          <p className="mt-0.5 text-[10px] text-muted-foreground">Dati e preferenze</p>
        </div>
      </div>
      <div className="mt-5 border-t border-border/70">
        <div className="border-b border-border/70 py-3">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Prossimo appuntamento
          </p>
          <p className="mt-1.5 font-display text-[13px]">Trattamento viso</p>
          <p className="mt-1 text-[10px] text-muted-foreground">18 giugno · 10:30</p>
        </div>
        {["Storico servizi", "Preferenze", "Comunicazioni"].map((item) => (
          <ServiceRow key={item} name={item} />
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between border border-border px-3.5 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-foreground/90">
        Gestisci il profilo
        <ArrowRight aria-hidden="true" className="size-3.5 text-primary" />
      </div>
    </div>
  );
}

export function AppPhone({ screen, caption }: { screen: AppScreen; caption: string }) {
  return (
    <figure className="mx-auto w-full max-w-[260px]">
      <div className="rounded-[2.3rem] border border-white/15 bg-[#080a0b] p-[7px] shadow-[0_30px_80px_-56px_rgba(0,0,0,.95)]">
        <div className="flex aspect-[9/18] flex-col overflow-hidden rounded-[1.85rem] border border-white/5 bg-background px-4 pb-3 pt-3">
          <StatusBar />
          <div className="mt-4 flex items-center justify-between border-b border-border/70 pb-2.5">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/90">
              MAYA APP
            </span>
            <Bell aria-hidden="true" className="size-3.5 text-muted-foreground" strokeWidth={1.6} />
          </div>
          <div className="mt-4 flex min-h-0 flex-1 flex-col">
            {screen === "home" && <HomeScreen />}
            {screen === "booking" && <BookingScreen />}
            {screen === "account" && <AccountScreen />}
          </div>
          <AppNavigation active={screen} />
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

const SHOWCASE_SCREENS = [
  { screen: "home", caption: "HOME" },
  { screen: "booking", caption: "PRENOTAZIONE" },
  { screen: "account", caption: "AREA CLIENTE" },
] as const;

export function AppShowcase() {
  return (
    <div className="grid grid-cols-1 items-start justify-items-center gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
      {SHOWCASE_SCREENS.map(({ screen, caption }) => (
        <AppPhone key={screen} screen={screen} caption={caption} />
      ))}
    </div>
  );
}
