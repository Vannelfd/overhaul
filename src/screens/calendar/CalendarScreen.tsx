import {
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  CalendarPlusIcon,
  ChevronDownIcon,
  ClockIcon,
  FilterIcon,
  FlameIcon,
  ListIcon,
  PlayIcon,
  TrendingIcon,
} from '../../ui/icons'
import { Chip, Overline, Rail, Screen, SearchField, SectionTitle, TopBar } from '../../ui/kit'

export type Kind = 'Nouvel épisode' | 'Nouvelle saison' | 'Nouvelle série'
export type Release = { title: string; meta: string; time: string; kind: Kind }

export const kindDot: Record<Kind, string> = {
  'Nouvel épisode': 'bg-link',
  'Nouvelle saison': 'bg-magenta',
  'Nouvelle série': 'bg-white',
}

export const days: { d: string; n: number; label: string; releases: Release[] }[] = [
  {
    d: 'Lun', n: 16, label: 'Lundi 16 février',
    releases: [
      { title: 'Best Medicine', meta: 'FOX · S1E1', time: '21:00', kind: 'Nouvel épisode' },
      { title: 'School Spirits', meta: 'HBO · S2E3', time: '22:00', kind: 'Nouvel épisode' },
    ],
  },
  {
    d: 'Mar', n: 17, label: 'Mardi 17 février',
    releases: [{ title: 'Will Trent', meta: 'ABC · S3E7', time: '20:30', kind: 'Nouvel épisode' }],
  },
  {
    d: 'Mer', n: 18, label: 'Mercredi 18 février',
    releases: [
      { title: 'The Beauty', meta: 'FX · S1E2', time: '21:00', kind: 'Nouvel épisode' },
      { title: 'Tell Me Lies', meta: 'Hulu · S2E4', time: '22:00', kind: 'Nouvel épisode' },
    ],
  },
  {
    d: 'Jeu', n: 19, label: 'Jeudi 19 février',
    releases: [
      { title: 'Love Story', meta: 'Netflix · S1E1', time: '00:00', kind: 'Nouvel épisode' },
      { title: 'The Night…', meta: 'Netflix · S2 (complet)', time: '00:00', kind: 'Nouvelle saison' },
      { title: 'Strip Law', meta: 'Prime Video · S1 (complet)', time: '00:00', kind: 'Nouvelle saison' },
    ],
  },
  {
    d: 'Ven', n: 20, label: 'Vendredi 20 février',
    releases: [
      { title: 'Stumble', meta: 'HBO · S1E6', time: '21:00', kind: 'Nouvel épisode' },
      { title: 'Death in…', meta: 'BBC · S14E3', time: '20:00', kind: 'Nouvel épisode' },
    ],
  },
  {
    d: 'Sam', n: 21, label: 'Samedi 21 février',
    releases: [{ title: 'The Pitt', meta: 'Max · S1E2', time: '21:00', kind: 'Nouvel épisode' }],
  },
  {
    d: 'Dim', n: 22, label: 'Dimanche 22 février',
    releases: [
      { title: 'Industry', meta: 'HBO · S4E1', time: '21:00', kind: 'Nouvel épisode' },
      { title: 'American Dad!', meta: 'FOX · S22E2', time: '20:30', kind: 'Nouvel épisode' },
      { title: 'Vanished (2026)', meta: 'Netflix · Nouvelle série', time: '00:00', kind: 'Nouvelle série' },
    ],
  },
]

const today = days[6]

function ReleaseRow({ r }: { r: Release }) {
  return (
    <article className="flex items-center gap-3 rounded-[18px] border border-line bg-surface p-3">
      <span className="flex w-12 shrink-0 flex-col items-center rounded-xl bg-ink/60 py-2">
        <ClockIcon size={13} className="text-link" />
        <span className="mt-0.5 text-[12px] font-bold">{r.time}</span>
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[14px] font-extrabold uppercase">{r.title}</h4>
        <p className="truncate text-[11.5px] text-muted">{r.meta}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-white/80">
          <span className={`size-1.5 rounded-full ${kindDot[r.kind]}`} />
          {r.kind}
        </span>
      </div>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line">
        <ArrowRightIcon size={16} className="text-magenta" />
      </span>
    </article>
  )
}

export function CalendarScreen() {
  const total = days.reduce((s, d) => s + d.releases.length, 0)
  return (
    <Screen tab="calendar">
      <TopBar vip />

      {/* En-tête */}
      <div className="flex flex-col gap-4 px-5 pt-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-[24px] leading-tight font-black uppercase">Calendrier des sorties</h1>
            <p className="mt-1 text-[12.5px] leading-snug text-muted">
              Semaine du 16 au 22 février 2026 — épisodes, saisons, nouvelles séries.
            </p>
          </div>
        </div>
        <span className="flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[11px] text-link">
          <TrendingIcon size={13} /> Mis à jour en temps réel
        </span>
        <SearchField placeholder="Rechercher une série, une plateforme…" />
      </div>

      {/* Filtres */}
      <div className="mt-3 flex flex-col gap-2.5">
        <Rail gap="gap-2">
          <Chip active icon={<CalendarIcon size={15} />}>Cette semaine</Chip>
          <Chip icon={<TrendingIcon size={15} />}>À venir</Chip>
          <Chip icon={<FlameIcon size={15} />}>Nouveautés</Chip>
        </Rail>
        <div className="flex items-center justify-between px-5">
          <span className="flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-[12.5px] font-semibold whitespace-nowrap">
            <FilterIcon size={14} /> Toutes plateformes <ChevronDownIcon size={14} />
          </span>
          <div className="flex rounded-full border border-line bg-surface p-0.5 text-[12px] font-semibold">
            <span className="brand-gradient flex h-8 items-center gap-1 rounded-full px-3">
              <CalendarIcon size={13} /> Semaine
            </span>
            <span className="flex h-8 items-center gap-1 px-3 text-muted">
              <ListIcon size={13} /> Liste
            </span>
          </div>
        </div>
      </div>

      {/* Prochaine sortie */}
      <section className="brand-card mx-5 mt-5 flex flex-col gap-2 rounded-[22px] border border-magenta/30 p-5">
        <span className="w-fit rounded-full bg-magenta px-2.5 py-1 text-[10px] font-bold uppercase">Prochaine sortie</span>
        <h2 className="text-[24px] leading-tight font-black uppercase">Best Medicine</h2>
        <p className="text-[13px] font-semibold text-white/80">FOX · S1E1</p>
        <p className="text-[12.5px] text-white/65">Disponible 21:00 cette semaine.</p>
        <div className="mt-2 flex gap-2">
          <span className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white text-[12.5px] font-bold text-ink uppercase">
            <PlayIcon size={13} /> Voir la fiche
          </span>
          <span className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/25 text-[13px] font-semibold">
            <BellIcon size={16} /> Rappel
          </span>
        </div>
      </section>

      {/* Focus aujourd'hui */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Focus aujourd’hui" action="Voir en mode liste" />
        <div className="flex flex-col gap-2 px-5">
          {today.releases.map((r) => (
            <ReleaseRow key={r.title} r={r} />
          ))}
        </div>
      </section>

      {/* Sélecteur de jour */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Vue semaine" />
        <div className="mx-5 flex justify-between rounded-[20px] border border-line bg-surface p-1.5">
          {days.map((w, i) => {
            const on = i === 0
            return (
              <span
                key={w.n}
                className={`flex w-11 flex-col items-center gap-0.5 rounded-2xl py-2 ${on ? 'brand-gradient' : ''}`}
              >
                <span className={`text-[10px] font-semibold uppercase ${on ? '' : 'text-muted'}`}>{w.d}</span>
                <span className="text-[16px] font-extrabold">{w.n}</span>
                <span className={`text-[9.5px] font-bold ${on ? 'text-white' : 'text-magenta'}`}>{w.releases.length}</span>
              </span>
            )
          })}
        </div>
        <p className="px-5 text-[11px] text-muted">
          {total} sorties cette semaine · la semaine se lit de haut en bas
        </p>
      </section>

      {/* Sorties par jour */}
      <div className="mt-4 flex flex-col gap-6 px-5">
        {days.map((day) => (
          <section key={day.label} className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2.5 text-[13px] font-bold uppercase">
                <span className="h-3.5 w-px bg-white/40" />
                {day.label}
              </h3>
              <span className="text-[11.5px] text-muted">
                {day.releases.length} sortie{day.releases.length > 1 ? 's' : ''}
              </span>
            </div>
            {day.releases.map((r) => (
              <ReleaseRow key={r.title} r={r} />
            ))}
          </section>
        ))}
      </div>

      {/* Astuce agenda */}
      <section className="brand-card mx-5 mt-8 flex flex-col gap-2 rounded-[22px] border border-line p-5">
        <Overline>Astuce</Overline>
        <h3 className="flex items-center gap-2 text-[15px] font-extrabold uppercase">
          <CalendarPlusIcon size={18} className="text-magenta" /> Ajouter à mon agenda
        </h3>
        <p className="text-[12.5px] leading-relaxed text-white/70">
          Exportez les sorties de la semaine vers iCal ou Google Calendar pour ne rien manquer.
        </p>
        <span className="mt-2 flex h-11 items-center justify-center rounded-full bg-white text-[12.5px] font-bold text-ink uppercase">
          Ajouter la semaine
        </span>
      </section>

      {/* Légende */}
      <section className="mx-5 mt-5 flex flex-col gap-2.5 rounded-[22px] border border-line bg-surface p-4">
        <Overline>Légende</Overline>
        {(Object.keys(kindDot) as Kind[]).map((k) => (
          <span key={k} className="flex items-center gap-2.5 text-[12.5px]">
            <span className={`size-2 rounded-full ${kindDot[k]}`} />
            {k}
          </span>
        ))}
      </section>
    </Screen>
  )
}
