import {
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  EyeIcon,
  FilterIcon,
  HeartIcon,
  ListIcon,
  PlayIcon,
  SparklesIcon,
  TvIcon,
  UserIcon,
} from '../../ui/icons'
import { Badge, Chip, Overline, Photo, Rail, Screen, SearchField, TopBar } from '../../ui/kit'
import { days, kindDot } from './CalendarScreen'

/* ---------- Calendrier des sorties — vue Liste ---------- */

export function CalendarListScreen() {
  return (
    <Screen tab="calendar">
      <TopBar />
      <div className="flex flex-col gap-3 px-5 pt-2">
        <h1 className="text-[24px] leading-tight font-black uppercase">Calendrier des sorties</h1>
        <p className="text-[12.5px] text-muted">Semaine du 16 au 22 février 2026 — épisodes, saisons, nouvelles séries.</p>
        <SearchField placeholder="Rechercher une série, une plateforme…" />
        <div className="flex items-center justify-between">
          <span className="flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-[12.5px] font-semibold whitespace-nowrap">
            <FilterIcon size={14} /> Toutes plateformes <ChevronDownIcon size={14} />
          </span>
          <div className="flex rounded-full border border-line bg-surface p-0.5 text-[12px] font-semibold">
            <span className="flex h-8 items-center gap-1 px-3 text-muted"><CalendarIcon size={13} /> Semaine</span>
            <span className="brand-gradient flex h-8 items-center gap-1 rounded-full px-3"><ListIcon size={13} /> Liste</span>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Rail gap="gap-2">
          <Chip active>Cette semaine</Chip>
          <Chip>À venir</Chip>
          <Chip>Nouveautés</Chip>
          <Chip>Netflix</Chip>
          <Chip>HBO</Chip>
          <Chip>Apple TV+</Chip>
          <Chip>Prime Video</Chip>
        </Rail>
      </div>

      {/* Liste compacte, en-têtes de jour collants */}
      <div className="mt-5 flex flex-col">
        {days.map((day) => (
          <section key={day.label}>
            <div className="flex items-center justify-between border-y border-line bg-surface px-5 py-2">
              <span className="text-[12px] font-extrabold uppercase">{day.label}</span>
              <span className="text-[11px] text-muted">{day.releases.length}</span>
            </div>
            {day.releases.map((r) => (
              <div key={r.title} className="flex items-center gap-3 border-b border-white/5 px-5 py-3">
                <span className="w-11 text-[13px] font-bold text-link">{r.time}</span>
                <span className={`size-2 shrink-0 rounded-full ${kindDot[r.kind]}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13.5px] font-bold">{r.title}</p>
                  <p className="truncate text-[11px] text-muted">{r.meta} · {r.kind}</p>
                </div>
                <BellIcon size={17} className="text-white/50" />
              </div>
            ))}
          </section>
        ))}
      </div>
      <section className="brand-card mx-5 mt-6 flex items-center gap-3 rounded-[20px] border border-magenta/30 p-4">
        <SparklesIcon size={20} className="text-magenta" />
        <div>
          <Overline>Cette semaine</Overline>
          <p className="text-[13px] font-bold">Résumé des sorties</p>
          <p className="text-[12px] text-white/70"><b>14 sorties</b> programmées sur <b>9 plateformes</b>.</p>
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Mon calendrier (personnel) ---------- */

type MyDay = { d: string; n: number; today?: boolean; habit?: boolean; items: { t: string; m: string; h: string; fav?: boolean }[] }

const myWeek: MyDay[] = [
  { d: 'Lun', n: 13, today: true, habit: true, items: [{ t: 'The Last of Us', m: 'HBO · S2E03', h: '20:00', fav: true }] },
  { d: 'Mar', n: 14, items: [{ t: 'The Bear', m: 'Disney+ · S3E05', h: '20:30' }] },
  { d: 'Mer', n: 15, habit: true, items: [{ t: 'House of the Dragon', m: 'HBO · S3E01', h: '21:00', fav: true }] },
  { d: 'Jeu', n: 16, items: [] },
  { d: 'Ven', n: 17, items: [{ t: 'Severance', m: 'Apple TV+ · S2E08', h: '00:00' }, { t: 'Silo', m: 'Apple TV+ · S2E06', h: '00:00', fav: true }] },
  { d: 'Sam', n: 18, habit: true, items: [{ t: 'Andor', m: 'Disney+ · S2E10', h: '18:00', fav: true }] },
  { d: 'Dim', n: 19, items: [{ t: 'The Boys', m: 'Prime Video · S5E02', h: '22:00' }] },
]

export function MyCalendarScreen() {
  return (
    <Screen tab="profile">
      <TopBar />
      <div className="flex flex-col gap-2 px-5 pt-2">
        <h1 className="text-[24px] font-black uppercase">Mon calendrier</h1>
        <p className="text-[12.5px] text-muted">Semaine du 13 au 19 juil. 2026 — vos sorties, vos habitudes, votre rythme.</p>
      </div>
      <div className="mt-3 flex gap-2 px-5">
        <Chip active icon={<EyeIcon size={14} />}>Tout</Chip>
        <Chip icon={<UserIcon size={14} />}>Suivies</Chip>
        <Chip icon={<HeartIcon size={14} />}>Favoris</Chip>
      </div>

      <article className="relative mx-5 mt-5 overflow-hidden rounded-[24px] border border-magenta/30">
        <div className="absolute inset-0"><Photo seed="tlou-hero" className="opacity-40" /></div>
        <div className="relative flex flex-col gap-2 bg-linear-to-r from-magenta-deep/90 to-ink/60 p-5">
          <div className="flex flex-wrap gap-1.5">
            <Badge tone="magenta"><SparklesIcon size={10} className="mr-1" />Prochain épisode</Badge>
            <Badge>Aujourd’hui</Badge>
            <Badge>♥ Favori</Badge>
          </div>
          <h2 className="text-[24px] font-black uppercase">The Last of Us</h2>
          <p className="text-[14px] font-semibold">Saison 2 · Épisode 03</p>
          <p className="text-[12px] text-white/70">Disponible 20:00 sur <b>HBO</b>. Durée estimée : 55 min.</p>
          <div className="mt-1 flex gap-2">
            <span className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-white text-[12px] font-bold text-ink uppercase"><PlayIcon size={12} /> Voir la fiche</span>
            <span className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/25 text-[12.5px] font-semibold"><BellIcon size={14} /> Rappel</span>
          </div>
        </div>
      </article>

      <div className="mx-5 mt-5 flex items-center justify-between rounded-2xl border border-line bg-surface p-3">
        <div>
          <Overline>Vue semaine</Overline>
          <p className="text-[13px] font-bold">13 juil. → 19 juil. 2026</p>
        </div>
        <span className="flex gap-1.5">
          <span className="flex size-10 items-center justify-center rounded-full border border-line"><ChevronLeftIcon size={16} /></span>
          <span className="flex size-10 items-center justify-center rounded-full border border-line"><ChevronRightIcon size={16} /></span>
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2.5 px-5">
        {myWeek.map((d) => (
          <div key={d.n} className={`flex gap-3 rounded-[18px] border p-3 ${d.today ? 'border-magenta/60 bg-magenta-deep/30' : 'border-line bg-surface'}`}>
            <div className="flex w-11 shrink-0 flex-col items-center">
              <span className="text-[10px] font-semibold text-muted uppercase">{d.d}</span>
              <span className={`text-[20px] font-black ${d.today ? 'text-link' : ''}`}>{d.n}</span>
              {d.today && <span className="text-[9px] font-bold text-magenta uppercase">Auj.</span>}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              {d.habit && <span className="w-fit rounded-full bg-magenta/20 px-2 py-0.5 text-[9.5px] font-semibold text-magenta">Habitude</span>}
              {d.items.length === 0 && <p className="py-2 text-[12px] text-muted">Aucune sortie — soirée libre</p>}
              {d.items.map((i) => (
                <div key={i.t} className="flex items-center gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-extrabold uppercase">{i.t}</p>
                    <p className="text-[11px] text-muted">{i.m} · {i.h}</p>
                  </div>
                  {i.fav && <HeartIcon size={15} className="text-magenta" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="brand-card mx-5 mt-6 flex flex-col gap-3 rounded-[24px] border border-line p-4">
        <Overline className="flex items-center gap-1"><TvIcon size={11} /> Mode binge watching</Overline>
        <h3 className="text-[15px] font-extrabold uppercase">Suggestion du week-end</h3>
        <p className="text-[12.5px] text-white/70">Vous avez <b className="text-white">3 heures</b> libres samedi. Voici comment en profiter.</p>
        <div className="rounded-2xl border border-white/10 bg-ink/40 p-3">
          <p className="text-[10.5px] text-link">Série en cours</p>
          <p className="text-[13px]"><b>4 épisodes</b> de The Last of Us</p>
          <p className="text-[11px] text-muted">S2 · Ép. 3 à 6</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink/40 p-3">
          <p className="text-[10.5px] text-white/60">Alternative</p>
          <p className="text-[13px] font-bold">House of the Dragon</p>
          <p className="text-[11px] text-muted">S3E01 · 60 min</p>
        </div>
        <div className="flex gap-2">
          <span className="brand-gradient flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full text-[12.5px] font-bold"><CheckIcon size={14} /> Marquer comme vu</span>
          <span className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-line text-[12.5px] font-semibold"><CalendarIcon size={14} /> Planifier</span>
        </div>
      </section>
    </Screen>
  )
}
