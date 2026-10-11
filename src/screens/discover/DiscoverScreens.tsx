import {
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  FilterIcon,
  FlameIcon,
  GridIcon,
  HeartIcon,
  InfoIcon,
  ListIcon,
  MessageIcon,
  PlusIcon,
  SparklesIcon,
  StarIcon,
  TrendingIcon,
} from '../../ui/icons'
import { CtaBanner, OutlinePill, Pill, Poster } from '../../ui/blocks'
import {
  Badge,
  Chip,
  IconButton,
  Overline,
  PageHeader,
  Photo,
  Rail,
  Rating,
  Screen,
  SearchField,
  SectionTitle,
  TopBar,
} from '../../ui/kit'

/* ---------- Séries TV (hub de l'onglet Découvrir) ---------- */

const moment = [
  { t: 'Wednesday', p: 'Netflix' },
  { t: 'Landman', p: 'Paramount+' },
  { t: 'The Bear', p: 'Disney+' },
  { t: 'Pluribus', p: 'Apple TV+' },
  { t: 'The Beast in Me', p: 'Netflix' },
]
const smallCollections = [
  { t: 'Post-apocalyptiques', n: 18, more: 15 },
  { t: 'Adaptées de jeux vidéo', n: 8, more: 5 },
  { t: 'Dystopie', n: 12, more: 9 },
  { t: 'LGBTQIA+', n: 31, more: 48 },
]
const added = [
  { t: 'CIA', when: 'À l’instant' },
  { t: 'Rivals', when: 'Il y a 47 min' },
  { t: 'Rooster', when: 'Il y a 1 h' },
  { t: 'Strip Law', when: 'Il y a 2 h' },
  { t: 'Grace House', when: 'Il y a 3 h' },
]
const genresWheel = [
  { g: 'Drame', n: 2156 },
  { g: 'Comédie', n: 301 },
  { g: 'Thriller', n: 1089 },
]
const crushes = [
  { t: 'The Boys', m: '2019 · Action · Satire', text: 'Des super-héros corrompus face à une bande de justiciers déterminés à les faire tomber.' },
  { t: 'House of the Dragon', m: '2022 · Fantasy · Drame', text: 'La guerre de succession des Targaryen, deux siècles avant Game of Thrones.' },
  { t: 'Broad City', m: '2014 · Comédie', text: 'Deux amies new-yorkaises transforment chaque journée banale en aventure absurde.' },
]

export function DiscoverScreen() {
  return (
    <Screen tab="discover">
      <TopBar />
      <div className="flex flex-col gap-3 px-5 pt-2">
        <h1 className="text-[28px] font-black uppercase">Séries TV</h1>
        <p className="text-[13px] leading-relaxed text-white/70">
          Un hub éditorial moderne : tendances, collections, nouveautés… et exploration rapide.
        </p>
        <span className="flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[11px] text-link">
          <TrendingIcon size={13} /> Mis à jour en temps réel
        </span>
        <SearchField placeholder="Rechercher une série…" />
      </div>
      <div className="mt-3">
        <Rail gap="gap-2">
          <Chip active icon={<TrendingIcon size={14} />}>Tendances</Chip>
          <Chip icon={<SparklesIcon size={14} />}>Nouveautés</Chip>
          <Chip icon={<StarIcon size={13} />}>Mieux notées</Chip>
        </Rail>
      </div>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Séries du moment" action="Toutes les tendances" />
        <Rail>
          {moment.map((m) => (
            <Poster key={m.t} seed={`hub-${m.t}`} title={m.t} badge={m.p} />
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Collections" action="Toutes" />
        <article className="relative mx-5 h-[200px] overflow-hidden rounded-[24px]">
          <Photo seed="coll-power" />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1.5">
            <Badge tone="magenta">4 séries</Badge>
            <h3 className="text-[22px] font-black uppercase">Séries Power</h3>
            <p className="text-[12px] text-white/75">Personnages charismatiques, jeux de pouvoir et ambitions dévorantes.</p>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-white/70">+20 séries associées</span>
              <span className="flex items-center gap-0.5 text-[12px] font-bold text-link">Voir <ChevronRightIcon size={14} /></span>
            </div>
          </div>
        </article>
        <div className="grid grid-cols-2 gap-3 px-5">
          {smallCollections.map((c) => (
            <article key={c.t} className="relative h-[120px] overflow-hidden rounded-[20px]">
              <Photo seed={`coll-${c.t}`} />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="text-[12.5px] leading-tight font-extrabold uppercase">{c.t}</p>
                <p className="text-[10.5px] text-white/70">{c.n} séries · +{c.more}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-5 flex flex-col rounded-[20px] border border-line bg-surface">
          <p className="px-4 pt-3.5 text-[11px] font-bold tracking-wider text-muted uppercase">Explorer / Voir plus</p>
          {['Collections populaires', 'Sélections thématiques', 'Listes de la communauté', 'Événements & sorties'].map((l) => (
            <span key={l} className="flex h-12 items-center justify-between border-b border-white/5 px-4 text-[13px] font-semibold last:border-0">
              {l} <ChevronRightIcon size={15} className="text-muted" />
            </span>
          ))}
        </div>
        <OutlinePill className="mx-5">Voir toutes les collections</OutlinePill>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Dernières séries ajoutées" action="Tous les ajouts" />
        <div className="flex flex-col gap-2 px-5">
          {added.map((a) => (
            <div key={a.t} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
              <div className="h-14 w-11 shrink-0 overflow-hidden rounded-lg">
                <Photo seed={`added-${a.t}`} />
              </div>
              <div className="flex-1">
                <p className="text-[13.5px] font-bold">{a.t}</p>
                <p className="flex items-center gap-1 text-[11px] text-link">
                  <ClockIcon size={11} /> {a.when}
                </p>
              </div>
              <IconButton>
                <PlusIcon size={17} />
              </IconButton>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Genres" action="Tous les genres" />
        <div className="flex items-center justify-center gap-3 px-5">
          {genresWheel.map((g, i) => (
            <div
              key={g.g}
              className={`relative overflow-hidden rounded-[20px] ${i === 1 ? 'h-[190px] w-[160px] border border-magenta' : 'h-[150px] w-[80px] opacity-50'}`}
            >
              <Photo seed={`genre-${g.g}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-linear-to-t from-ink to-transparent p-3 text-center">
                <p className="text-[14px] font-black uppercase">{g.g}</p>
                {i === 1 && <p className="text-[11px] text-white/70">{g.n} séries · touchez pour explorer</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-5 flex items-center justify-between rounded-2xl border border-line bg-surface p-3">
          <div>
            <Overline>Genre sélectionné</Overline>
            <p className="text-[14px] font-extrabold uppercase">Comédie</p>
          </div>
          <Pill>Explorer</Pill>
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Coups de cœur" action="Tous" />
        <div className="flex flex-col gap-2.5 px-5">
          {crushes.map((c) => (
            <article key={c.t} className="flex gap-3 rounded-[20px] border border-line bg-surface p-3">
              <div className="h-[110px] w-[78px] shrink-0 overflow-hidden rounded-xl">
                <Photo seed={`crush-${c.t}`} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="text-[14px] font-extrabold uppercase">{c.t}</h3>
                <p className="text-[11px] text-link">{c.m}</p>
                <p className="line-clamp-2 text-[11.5px] text-white/65">{c.text}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-link">Lire la fiche ›</span>
                  <span className="flex gap-1.5">
                    <HeartIcon size={17} className="text-white/70" />
                    <BookmarkIcon size={17} className="text-white/70" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Nouvelles séries" action="Toutes" />
        <Rail>
          {['Rivals', 'Grace House', 'Strip Law', 'Rooster', 'CIA'].map((t) => (
            <Poster key={t} seed={`new-${t}`} title={t} />
          ))}
        </Rail>
      </section>
    </Screen>
  )
}

/* ---------- Nouveautés du mois ---------- */

const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
const unseen = [
  { t: 'The Silent Witness', g: 'Thriller', p: 'HBO Max', d: '12 fév · 10 ép', note: '4.2', text: 'Une adolescente muette devient la seule témoin d’un crime. Sa capacité à lire sur les lèvres va la mettre en danger.' },
  { t: 'Kitchen Confidential', g: 'Drame', p: 'Apple TV+', d: '19 fév · 6 ép', isNew: true, text: 'Les coulisses d’un restaurant étoilé où la passion, la trahison et l’ambition s’entremêlent dans un ballet effréné.' },
  { t: 'Echoes of the Past', g: 'Fantasy', p: 'Prime Video', d: '26 fév · 12 ép', isNew: true, text: 'Un archéologue découvre un artefact qui lui permet de revivre les souvenirs de ses ancêtres.' },
]
const back = [
  { t: 'The Crown', s: 'Saison 7', g: 'Drame', p: 'Netflix', d: '8 fév · 10 ép', note: '4.8', text: 'La saga royale continue avec l’ère post-Diana et l’émergence d’une nouvelle génération.' },
  { t: 'Succession', s: 'Saison 5', g: 'Drame', p: 'HBO Max', d: '15 fév · 9 ép', note: '4.9', text: 'Les Roys sont de retour, et les luttes de pouvoir familiales n’ont jamais été aussi féroces.' },
]

type MonthCardProps = { t: string; s?: string; g: string; p: string; d: string; note?: string; isNew?: boolean; text: string }

function MonthCard({ t, s, g, p, d, note, isNew, text }: MonthCardProps) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-line bg-surface">
      <div className="relative h-[140px]">
        <Photo seed={`month-${t}`} />
        <span className="absolute top-3 right-3"><Badge>{p}</Badge></span>
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-extrabold">{t}</h3>
          <Chip small>{g}</Chip>
        </div>
        {s && <p className="-mt-1 text-[11px] text-link">{s}</p>}
        <p className="line-clamp-2 text-[12px] text-white/65">{text}</p>
        <div className="mt-1 flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1 text-muted"><CalendarIcon size={12} /> {d}</span>
          {note ? <Rating value={note} /> : isNew && <span className="rounded-full bg-link/15 px-2 py-0.5 text-[10px] font-semibold text-link">Nouveau</span>}
        </div>
      </div>
    </article>
  )
}

export function MonthScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Agenda" title="Nouveautés du mois" />
      <div className="mt-4 flex items-center justify-between px-5">
        <span className="flex items-center gap-3">
          <IconButton><ChevronLeftIcon size={18} /></IconButton>
          <span className="text-[20px] font-black">2026</span>
          <IconButton><ChevronRightIcon size={18} /></IconButton>
        </span>
        <span className="text-[12px] text-muted">5 sorties en février</span>
      </div>
      <div className="mt-3">
        <Rail gap="gap-2">
          {months.map((m) => (
            <Chip key={m} active={m === 'Février'}>{m}</Chip>
          ))}
        </Rail>
      </div>

      <article className="relative mx-5 mt-5 h-[330px] overflow-hidden rounded-[24px]">
        <Photo seed="last-frontier-space" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
        <span className="absolute top-3 left-3"><Badge><TrendingIcon size={10} className="mr-1" />Tendance</Badge></span>
        <span className="absolute top-3 right-3"><Badge tone="magenta">Original</Badge></span>
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2">
          <Overline className="text-white/70">Sortie du mois</Overline>
          <h2 className="text-[24px] font-black uppercase">The Last Frontier</h2>
          <p className="flex flex-wrap gap-2 text-[11px] text-white/80">
            <span>5 fév</span>·<span>Netflix</span>·<span>Science-Fiction</span>·<span>8 épisodes</span>
          </p>
          <p className="line-clamp-2 text-[12px] text-white/70">
            Dans un futur proche où l’humanité a colonisé Mars, une enquêtrice terrienne doit résoudre un meurtre qui pourrait
            déclencher une guerre interplanétaire.
          </p>
          <div className="mt-1 flex gap-2">
            <Pill light className="flex-1"><PlusIcon size={14} /> Ma liste</Pill>
            <OutlinePill className="bg-ink/50"><InfoIcon size={14} /> Détails</OutlinePill>
          </div>
        </div>
      </article>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Séries inédites · février 2026" />
        <div className="flex flex-col gap-3 px-5">
          {unseen.map((u) => (
            <MonthCard key={u.t} {...u} />
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Séries de retour · février 2026" />
        <div className="flex flex-col gap-3 px-5">
          {back.map((u) => (
            <MonthCard key={u.t} {...u} />
          ))}
        </div>
      </section>

      <div className="mt-7">
        <CtaBanner
          icon={<CalendarIcon size={26} />}
          title="Ne manquez aucune nouveauté"
          text="Activez les notifications pour être alerté dès que vos séries préférées arrivent."
          action="Activer les alertes"
        />
      </div>
    </Screen>
  )
}

/* ---------- Genres & tags ---------- */

const genres = [
  { g: 'Science-Fiction', n: '1 247', nv: 15, hot: true },
  { g: 'Horreur', n: '892', nv: 8, hot: true },
  { g: 'Drame', n: '2 156', nv: 21 },
  { g: 'Thriller', n: '1 089', nv: 10, hot: true },
  { g: 'Mystère', n: '756', nv: 7 },
  { g: 'Comédie', n: '1 834', nv: 18 },
  { g: 'Action', n: '1 432', nv: 14 },
  { g: 'Romance', n: '967', nv: 9 },
  { g: 'Fantasy', n: '623', nv: 5, hot: true },
  { g: 'Documentaire', n: '445', nv: 4 },
  { g: 'Anime', n: '889', nv: 8, hot: true },
  { g: 'Crime', n: '1 123', nv: 11 },
]
export const trendingTags: [string, number][] = [
  ['Netflix Original', 456], ['Basé sur un livre', 342], ['Adolescents', 289], ['Année 80', 156],
  ['Super-pouvoirs', 198], ['Psychologique', 267], ['Famille', 423], ['Enquête', 312],
  ['Post-apo', 134], ['Voyage temporel', 89], ['Monstres', 145], ['École', 270],
]
const sfPicks = [
  { t: 'Stranger Things', r: '4.7', m: 'Science-fiction · Horreur · Mystère' },
  { t: 'The X-Files', r: '4.5', m: 'Science-fiction · Mystère · Thriller' },
  { t: 'Black Mirror', r: '4.6', m: 'Science-fiction · Thriller · Drame' },
  { t: 'Westworld', r: '4.3', m: 'Science-fiction · Western · Thriller' },
]

export function GenresScreen() {
  return (
    <Screen tab="discover">
      <PageHeader
        overline="Explorer"
        title="Genres & tags"
        right={
          <span className="flex gap-2">
            <IconButton className="border-white/30"><GridIcon size={16} /></IconButton>
            <IconButton><ListIcon size={16} /></IconButton>
          </span>
        }
      />
      <div className="mt-4 flex gap-2 px-5">
        <div className="min-w-0 flex-1"><SearchField placeholder="Rechercher un genre ou un tag…" /></div>
        <IconButton className="size-12"><FilterIcon size={17} /></IconButton>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Genres populaires" action="Tous les genres" />
        <div className="grid grid-cols-2 gap-2.5 px-5">
          {genres.map((g) => (
            <div key={g.g} className="flex flex-col gap-2 rounded-[18px] border border-line bg-surface p-3.5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[14px] font-bold">{g.g}</p>
                  <p className="text-[11px] text-muted">{g.n} séries</p>
                </div>
                {g.hot && (
                  <span className="flex size-7 items-center justify-center rounded-full bg-magenta/20">
                    <TrendingIcon size={13} className="text-magenta" />
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="flex -space-x-1.5">
                  {[1, 2, 3].map((n) => (
                    <span key={n} className="size-5 overflow-hidden rounded-full border border-surface"><Photo seed={`g-${g.g}-${n}`} /></span>
                  ))}
                </span>
                <span className="text-[10px] text-muted">+{g.nv} nouveautés</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Tags tendance" />
        <div className="flex flex-wrap gap-2 px-5">
          {trendingTags.map(([t, n]) => (
            <Chip key={t} small count={n}>{t}</Chip>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Science-fiction : à découvrir" action="Voir tout" />
        <Rail>
          {sfPicks.map((s) => (
            <Poster key={s.t} seed={`sf-${s.t}`} title={s.t} meta={s.m} rating={s.r} className="w-[150px]" height="h-[110px]" />
          ))}
        </Rail>
      </section>

      <section className="brand-card mx-5 mt-7 flex items-center gap-3 rounded-[22px] border border-magenta/30 p-4">
        <div className="flex-1">
          <Overline className="flex items-center gap-1 text-link"><SparklesIcon size={11} /> Nouveau</Overline>
          <p className="mt-1 text-[14px] font-bold">Trouvez votre prochaine série préférée</p>
          <p className="mt-0.5 text-[11.5px] text-white/65">Utilisez notre outil de recommandation basé sur vos goûts et votre historique.</p>
        </div>
        <Pill light>Découvrir</Pill>
      </section>
    </Screen>
  )
}

/* ---------- Genre / Tag : mêmes briques ---------- */

type SeriesItem = { t: string; r: string; p: string; y: string; e: string; tags: string[] }

function SeriesGrid({ items, prefix }: { items: SeriesItem[]; prefix: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 px-5">
      {items.map((s) => (
        <article key={s.t} className="overflow-hidden rounded-[18px] border border-line bg-surface">
          <div className="relative h-[190px]">
            <Photo seed={`${prefix}-${s.t}`} />
            <span className="absolute top-2 left-2 rounded-full bg-ink/70 px-1.5 py-0.5"><Rating value={s.r} className="text-[10px]" /></span>
            <span className="absolute top-2 right-2"><Badge>{s.p}</Badge></span>
          </div>
          <div className="flex flex-col gap-1 p-3">
            <p className="truncate text-[13px] font-bold">{s.t}</p>
            <p className="text-[10.5px] text-muted">{s.y} · {s.e}</p>
            <div className="flex flex-wrap gap-1">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-1.5 py-0.5 text-[9.5px] text-white/70">{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

function GridToolbar({ placeholder }: { placeholder: string }) {
  return (
    <div className="mt-5 flex gap-2 px-5">
      <div className="min-w-0 flex-1"><SearchField placeholder={placeholder} /></div>
      <IconButton className="size-12"><FilterIcon size={17} /></IconButton>
      <IconButton className="size-12"><GridIcon size={16} /></IconButton>
    </div>
  )
}

const sfSeries: SeriesItem[] = [
  { t: 'Stranger Things', r: '4.7', p: 'Netflix', y: '2016', e: '42 ép.', tags: ['Horreur', 'Années 80'] },
  { t: 'The X-Files', r: '4.5', p: 'FOX', y: '1993', e: '218 ép.', tags: ['Mystère', 'Enquête'] },
  { t: 'Black Mirror', r: '4.6', p: 'Netflix', y: '2011', e: '33 ép.', tags: ['Anthologie', 'Tech'] },
  { t: 'Westworld', r: '4.3', p: 'HBO', y: '2016', e: '36 ép.', tags: ['Western', 'IA'] },
  { t: 'The Expanse', r: '4.6', p: 'Prime Video', y: '2015', e: '62 ép.', tags: ['Espace', 'Politique'] },
  { t: 'Doctor Who', r: '4.4', p: 'BBC', y: '2005', e: '170 ép.', tags: ['Voyage temporel'] },
  { t: 'Altered Carbon', r: '4.1', p: 'Netflix', y: '2018', e: '18 ép.', tags: ['Cyberpunk'] },
  { t: 'Firefly', r: '4.7', p: 'FOX', y: '2002', e: '14 ép.', tags: ['Espace', 'Culte'] },
]

export function GenreScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Genre" title="Science-fiction" />
      <section className="brand-card mx-5 mt-4 flex flex-col gap-3 rounded-[24px] border border-magenta/30 p-5">
        <Badge tone="magenta"><FlameIcon size={10} className="mr-1" />Tendance</Badge>
        <h1 className="text-[26px] leading-none font-black uppercase">Science-fiction</h1>
        <p className="text-[12.5px] leading-relaxed text-white/70">
          Voyages dans l’espace, futurs dystopiques, intelligences artificielles et mondes parallèles.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[['1 247', 'Séries'], ['4.3', 'Note moyenne'], ['+12', 'Nouveautés']].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-ink/30 p-2.5">
              <p className="text-[18px] font-black">{v}</p>
              <p className="text-[9.5px] tracking-wide text-white/60 uppercase">{l}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-ink/40 p-3">
          <p className="text-[11px] font-bold tracking-wide uppercase">Tendances du genre</p>
          {[['Stranger Things', '+12 %'], ['Black Mirror', '+8 %'], ['The Expanse', '+5 %']].map(([t, v], i) => (
            <div key={t} className="flex items-center gap-3 border-b border-white/5 py-2 last:border-0">
              <span className="brand-text w-4 text-[15px] font-black">{i + 1}</span>
              <span className="flex-1 text-[12.5px] font-semibold">{t}</span>
              <span className="text-[11px] text-link">{v} cette semaine</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Pill light className="flex-1">Découvrir</Pill>
          <OutlinePill className="flex-1 bg-ink/40"><HeartIcon size={14} /> Suivre le genre</OutlinePill>
          <IconButton className="size-10"><BookmarkIcon size={15} /></IconButton>
          <IconButton className="size-10"><MessageIcon size={15} /></IconButton>
        </div>
      </section>
      <GridToolbar placeholder="Rechercher dans Science-fiction…" />
      <section className="mt-5 flex flex-col gap-3">
        <SectionTitle title="Séries science-fiction" action="Toutes les séries" />
        <SeriesGrid items={sfSeries} prefix="sfgrid" />
      </section>
      <div className="mt-7">
        <CtaBanner title="Vous ne trouvez pas votre série ?" text="Parcourez nos collections thématiques pour élargir votre recherche." action="Explorer les collections" />
      </div>
    </Screen>
  )
}

const netflixSeries: SeriesItem[] = [
  { t: 'Stranger Things', r: '4.7', p: 'Netflix', y: '2016', e: '42 ép.', tags: ['SF', 'Années 80'] },
  { t: 'The Crown', r: '4.8', p: 'Netflix', y: '2016', e: '60 ép.', tags: ['Drame', 'Histoire'] },
  { t: 'Wednesday', r: '4.4', p: 'Netflix', y: '2022', e: '16 ép.', tags: ['Comédie', 'École'] },
  { t: 'Squid Game', r: '4.7', p: 'Netflix', y: '2021', e: '22 ép.', tags: ['Thriller', 'Survie'] },
  { t: 'Dark', r: '4.9', p: 'Netflix', y: '2017', e: '26 ép.', tags: ['Mystère', 'Temps'] },
  { t: 'Mindhunter', r: '4.7', p: 'Netflix', y: '2017', e: '19 ép.', tags: ['Crime', 'Enquête'] },
  { t: 'Black Mirror', r: '4.6', p: 'Netflix', y: '2011', e: '33 ép.', tags: ['Anthologie'] },
  { t: 'The Witcher', r: '4.3', p: 'Netflix', y: '2019', e: '24 ép.', tags: ['Fantasy', 'Livre'] },
]

export function TagScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Tag" title="#Netflix Original" />
      <section className="brand-gradient mx-5 mt-4 flex flex-col gap-3 rounded-[24px] p-5">
        <Overline className="text-white/80">Tag tendance</Overline>
        <h1 className="text-[26px] leading-none font-black uppercase">Netflix Original</h1>
        <p className="text-[12.5px] text-white/85">Les séries produites exclusivement pour Netflix.</p>
        <p className="flex gap-4 text-[12px] font-semibold">
          <span>456 séries</span>
          <span className="flex items-center gap-1"><TrendingIcon size={13} /> +9 cette semaine</span>
        </p>
        <div className="flex gap-2">
          <Pill light className="flex-1">Explorer</Pill>
          <span className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-ink/30 text-[12.5px] font-semibold"><HeartIcon size={14} /> Suivre</span>
          <span className="flex size-10 items-center justify-center rounded-full bg-ink/30"><BookmarkIcon size={15} /></span>
          <span className="flex size-10 items-center justify-center rounded-full bg-ink/30"><BellIcon size={15} /></span>
        </div>
      </section>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Tags associés" />
        <Rail gap="gap-2">
          {trendingTags.slice(1, 9).map(([t, n]) => (
            <Chip key={t} small count={n}>{t}</Chip>
          ))}
        </Rail>
      </section>
      <GridToolbar placeholder="Rechercher dans ce tag…" />
      <section className="mt-5 flex flex-col gap-3">
        <SectionTitle title="Séries avec #NetflixOriginal" />
        <SeriesGrid items={netflixSeries} prefix="nfgrid" />
      </section>
      <div className="mt-7">
        <CtaBanner title="D’autres tags à explorer ?" text="Plus de 300 tags pour trouver exactement l’ambiance que vous cherchez." action="Voir tous les tags" />
      </div>
    </Screen>
  )
}
