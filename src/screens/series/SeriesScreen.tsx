import {
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  CartIcon,
  ChevronLeftIcon,
  EyeIcon,
  HeartIcon,
  MessageIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
  UsersIcon,
  VolumeIcon,
} from '../../ui/icons'
import {
  AdSlot,
  Avatar,
  Badge,
  Chip,
  IconButton,
  Overline,
  Photo,
  PrimaryButton,
  Progress,
  Rail,
  Screen,
  SecondaryButton,
  SectionTitle,
} from '../../ui/kit'
import { CastCard, SeriesTabs, cast } from './shared'

const lastEpisodes = [
  { code: 'S04E09', title: 'The Piggyback' },
  { code: 'S04E08', title: 'Papa' },
  { code: 'S04E07', title: 'The Massacre at Hawkins Lab' },
]
const nextEpisodes = [
  { code: 'S05E01', title: 'Le commencement de la fin', date: '26/11/2025' },
  { code: 'S05E02', title: 'The Crawl', date: '26/11/2025' },
  { code: 'S05E03', title: 'Turnbow Trap', date: '26/11/2025' },
]
const seasons = [
  { n: 1, name: 'L’Étrange', progress: 100 },
  { n: 2, name: 'La Menace', progress: 100 },
  { n: 3, name: 'L’Été', progress: 62 },
  { n: 4, name: 'L’Éloignement', progress: 0 },
  { n: 5, name: 'Saison finale', progress: 0 },
]
const news = [
  { tag: 'Production', title: 'La saison 5 dévoile sa première affiche officielle', date: '10 juillet 2026' },
  { tag: 'Trailer', title: 'Nouveau trailer final : la guerre approche', date: '8 juillet 2026' },
  { tag: 'Interview', title: 'Les créateurs teasent un retour inattendu', date: '5 juillet 2026' },
  { tag: 'Récompenses', title: 'Stranger Things nominée aux Emmy Awards', date: '2 juillet 2026' },
]
const products = [
  { kind: 'Collector', univers: 'Poster collector', name: 'Poster collector Upside Down', price: '29,90 €', note: '4.8' },
  { kind: 'Best seller', univers: 'Doctor Who', name: 'Mug Tardis', price: '19,90 €', note: '4.7' },
  { kind: 'Édition limitée', univers: 'The Walking Dead', name: 'Lucille replica', price: '149,90 €', note: '4.9' },
]
const similar = ['Dark', 'The OA', 'Locke & Key', 'Yellowjackets', 'Bodies', 'From']
const reviews = [
  {
    who: 'Charlotte', when: 'il y a 2 jours', note: '4.8', likes: 14,
    text: 'La série garde une énergie feuilletonnante rare. Même quand l’univers grandit, le cœur émotionnel du groupe reste lisible et c’est ce qui porte vraiment la fiche.',
  },
  {
    who: 'Nadia', when: 'il y a 5 jours', note: '4.4', likes: 9,
    text: 'Saison 4 très généreuse visuellement, avec une ambiance bien plus noire. J’attends surtout que la dernière salve revienne à quelque chose de plus resserré.',
  },
  {
    who: 'Luca', when: 'la semaine dernière', note: '4.6', likes: 17,
    text: 'Le mélange pop culture, horreur et coming-of-age reste redoutable. Peu de séries grand public tiennent aussi bien la mythologie et l’attachement aux personnages.',
  },
]

export function SeriesScreen() {
  return (
    <Screen tab="discover">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[440px]">
          <Photo seed="stranger-backdrop" className="opacity-55" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/30 to-ink" />
          <div className="absolute inset-0 bg-linear-to-tr from-magenta/30 via-transparent to-transparent" />
        </div>
        <div className="relative px-5 pt-4">
          <div className="flex items-center justify-between">
            <IconButton className="bg-ink/50">
              <ChevronLeftIcon size={20} />
            </IconButton>
            <div className="flex gap-2">
              <IconButton className="bg-ink/50">
                <ShareIcon size={18} />
              </IconButton>
              <IconButton className="bg-ink/50">
                <BookmarkIcon size={18} />
              </IconButton>
            </div>
          </div>

          <div className="mt-[150px] flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2 text-[10.5px] font-bold uppercase">
              <Badge tone="magenta">Netflix</Badge>
              <span>2016 - 2025</span>
              <span className="text-link">● En cours</span>
              <span className="text-white/70">16+ · 52 min</span>
            </div>
            <h1 className="text-[42px] leading-[0.95] font-black">Stranger Things</h1>
            <p className="text-[13px] text-white/70 italic">L’été 1985 ne sera jamais le même.</p>
            <p className="-mt-2 text-[12px] text-muted">(Les choses étranges)</p>
            <div className="flex items-center gap-4 text-[12px] font-semibold">
              <span className="flex items-center gap-1.5 text-link">
                <EyeIcon size={15} /> 145 320
              </span>
              <span className="flex items-center gap-1.5">
                <StarIcon size={14} className="text-magenta" /> 9.2 <span className="text-muted">· 15 000 votes</span>
              </span>
              <span className="flex -space-x-2">
                {['a', 'b', 'c'].map((s) => (
                  <span key={s} className="size-6 overflow-hidden rounded-full border-2 border-ink">
                    <Photo seed={`fan-${s}`} />
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Infos + actions */}
      <section className="mt-5 flex flex-col gap-4 px-5">
        <p className="text-[12px] text-muted">
          Créée par <span className="font-semibold text-white">Matt Duffer, Ross Duffer</span> · Série américaine
        </p>
        <p className="text-[13.5px] leading-relaxed text-white/80">
          À Hawkins, dans l’Indiana, un jeune garçon de 12 ans disparaît mystérieusement. Ses amis, sa famille et le chef
          de police vont vivre une enquête haletante qui les mène vers des expériences gouvernementales secrètes…{' '}
          <span className="font-semibold text-link">Lire plus</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {['Science-fiction', 'Drame', 'Horreur', 'Mystère'].map((g) => (
            <Chip key={g} small>
              {g}
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11.5px] font-semibold text-link">
          <span>#Conflit familial</span>
          <span>#Série culte</span>
          <span>#Années 80</span>
          <span>#Surnaturel</span>
        </div>
        <PrimaryButton>
          <PlayIcon size={15} /> Regarder la série
        </PrimaryButton>
        <div className="grid grid-cols-4 gap-2">
          {[
            { Icon: PlusIcon, label: 'Ma liste' },
            { Icon: CalendarIcon, label: 'Agenda' },
            { Icon: MessageIcon, label: 'Discuter' },
            { Icon: PencilIcon, label: 'Noter' },
          ].map(({ Icon, label }) => (
            <span key={label} className="flex flex-col items-center gap-1.5 text-[11px] font-semibold text-white/80">
              <IconButton>
                <Icon size={18} />
              </IconButton>
              {label}
            </span>
          ))}
        </div>
        <SecondaryButton>
          <UsersIcon size={16} /> Recommander à un ami
        </SecondaryButton>
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: '9', l: 'Membres', s: '3 456 votes' },
            { v: '3', l: 'Ma note', s: 'Modifier' },
            { v: '7', l: 'Note SA', s: 'Rédaction' },
          ].map((n) => (
            <div key={n.l} className="flex flex-col items-center rounded-2xl border border-line bg-surface py-3">
              <span className="brand-text text-[26px] font-black">{n.v}</span>
              <span className="text-[11px] font-bold uppercase">{n.l}</span>
              <span className="text-[10px] text-muted">{n.s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Onglets de la fiche */}
      <div className="mt-6">
        <SeriesTabs active="Saisons" />
      </div>

      {/* Derniers épisodes diffusés */}
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Derniers épisodes diffusés" />
        <div className="flex flex-col gap-2 px-5">
          {lastEpisodes.map((e) => (
            <div key={e.code} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl">
                <Photo seed={`ep-${e.code}`} />
                <span className="absolute top-1 left-1">
                  <Badge tone="magenta">New</Badge>
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-link">{e.code}</p>
                <p className="truncate text-[13px] font-bold">{e.title}</p>
              </div>
              <IconButton>
                <EyeIcon size={17} />
              </IconButton>
            </div>
          ))}
        </div>
      </section>

      {/* Prochains épisodes */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Prochains épisodes" />
        <div className="flex flex-col gap-2 px-5">
          {nextEpisodes.map((e) => (
            <div key={e.code} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-link">{e.code}</p>
                <p className="truncate text-[13px] font-bold">{e.title}</p>
                <p className="text-[11px] text-muted">Diffusion le {e.date}</p>
              </div>
              <IconButton>
                <BellIcon size={17} />
              </IconButton>
              <IconButton>
                <CalendarIcon size={17} />
              </IconButton>
            </div>
          ))}
        </div>
      </section>

      {/* Saisons */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Saisons" action="Toutes les saisons" />
        <Rail>
          {seasons.map((s) => (
            <div key={s.n} className="w-[150px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="h-[90px]">
                <Photo seed={`season-${s.n}`} />
              </div>
              <div className="flex flex-col gap-1.5 p-3">
                <p className="text-[13px] font-extrabold uppercase">Saison {s.n}</p>
                <p className="truncate text-[11px] text-link">{s.name}</p>
                <Progress value={s.progress} />
              </div>
            </div>
          ))}
        </Rail>
      </section>

      {/* Casting principal */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Casting principal" action="Tout voir" />
        <Rail>
          {cast.map((c) => (
            <CastCard key={c.name} {...c} />
          ))}
        </Rail>
      </section>

      <div className="mt-8">
        <AdSlot />
      </div>

      {/* Vidéos */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Vidéos de la série" action="Toutes" />
        <div className="relative mx-5 h-[200px] overflow-hidden rounded-[22px] border border-line">
          <Photo seed="featured-trailer" className="opacity-60" />
          <div className="absolute inset-x-3 top-3 flex justify-between">
            <span className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-ink/60">
                <VolumeIcon size={14} />
              </span>
              <Badge>Featured</Badge>
            </span>
            <span className="flex gap-1.5">
              <span className="flex size-8 items-center justify-center rounded-full bg-ink/60">
                <HeartIcon size={14} />
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-ink/60">
                <BookmarkIcon size={14} />
              </span>
            </span>
          </div>
          <span className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-white text-ink">
            <PlayIcon size={20} />
          </span>
          <div className="absolute inset-x-3 bottom-3 flex flex-col gap-1.5">
            <span className="flex gap-1.5">
              <Badge>New drop</Badge>
              <Badge>Saison 5</Badge>
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase">Trailer saison 5 · Netflix · 3:02</span>
          </div>
        </div>
        <Rail>
          {[
            { t: 'Teaser', s: 'Saison 5', d: '2:14' },
            { t: 'Making of', s: 'Making of Stranger Things', d: '1:44' },
            { t: 'Interview', s: 'Le casting en interview', d: '2:21' },
          ].map((v) => (
            <div key={v.t} className="relative h-[110px] w-[180px] shrink-0 overflow-hidden rounded-2xl">
              <Photo seed={`vid-${v.t}`} className="opacity-70" />
              <span className="absolute top-2 right-2">
                <Badge>{v.d}</Badge>
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink to-transparent p-2.5">
                <p className="text-[12.5px] font-bold">{v.t}</p>
                <p className="truncate text-[10.5px] text-white/60">{v.s}</p>
              </div>
            </div>
          ))}
        </Rail>
      </section>

      {/* Collections */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Collections" />
        <div className="brand-card mx-5 flex items-center gap-3 rounded-[22px] border border-magenta/30 p-4">
          <div className="flex -space-x-5">
            {[1, 2, 3].map((n) => (
              <span key={n} className="h-16 w-11 overflow-hidden rounded-lg border-2 border-surface">
                <Photo seed={`coll-st-${n}`} />
              </span>
            ))}
          </div>
          <div className="min-w-0 flex-1">
            <Overline>Collection</Overline>
            <p className="text-[14px] font-extrabold uppercase">Monstres et mondes parallèles</p>
          </div>
        </div>
        <div className="mx-5 flex items-center gap-3 rounded-[22px] border border-line bg-surface p-4">
          <span className="h-16 w-11 shrink-0 overflow-hidden rounded-lg"><Photo seed="coll-univers-st" /></span>
          <div className="min-w-0 flex-1">
            <Overline>Collection</Overline>
            <p className="text-[14px] font-extrabold uppercase">Univers Stranger Things</p>
          </div>
        </div>
      </section>

      {/* Dernières actus */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Dernières actus de la série" action="Toutes les actus" />
        <Rail>
          {news.map((n) => (
            <article key={n.title} className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="relative h-[110px]">
                <Photo seed={`news-${n.tag}`} />
                <span className="absolute bottom-2 left-2">
                  <Badge>{n.tag}</Badge>
                </span>
              </div>
              <div className="p-3">
                <p className="line-clamp-2 text-[13px] leading-snug font-bold">{n.title}</p>
                <p className="mt-1.5 text-[10.5px] text-muted">{n.date}</p>
              </div>
            </article>
          ))}
        </Rail>
      </section>

      {/* Shopping */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Shopping" action="Tout le shop" />
        <Rail>
          {products.map((p) => (
            <article key={p.name} className="relative h-[250px] w-[200px] shrink-0 overflow-hidden rounded-[22px]">
              <Photo seed={`shop-${p.name}`} />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
              <span className="absolute top-3 left-3">
                <Badge tone="light">{p.kind}</Badge>
              </span>
              <span className="absolute top-3 right-3">
                <Badge>{p.note} ★</Badge>
              </span>
              <div className="absolute inset-x-3 bottom-3 flex flex-col gap-2">
                <Overline className="text-white/70">{p.univers}</Overline>
                <p className="text-[13px] leading-tight font-extrabold uppercase">{p.name}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold">{p.price}</span>
                  <span className="flex h-9 items-center gap-1.5 rounded-full bg-white px-3 text-[11px] font-bold text-ink uppercase">
                    <CartIcon size={13} /> Acheter
                  </span>
                </div>
              </div>
            </article>
          ))}
        </Rail>
      </section>

      {/* Séries similaires */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Séries similaires à la série" action="Toutes les recos" />
        <Rail>
          {similar.map((s) => (
            <div key={s} className="w-[108px] shrink-0">
              <div className="h-[150px] overflow-hidden rounded-2xl">
                <Photo seed={`similar-${s}`} />
              </div>
              <p className="mt-2 truncate text-[11px] font-bold tracking-wide uppercase">{s}</p>
            </div>
          ))}
        </Rail>
      </section>

      {/* Avis */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Avis des SeriesAddict" action="Tous les avis" />
        <div className="flex flex-col gap-2.5 px-5">
          {reviews.map((r) => (
            <article key={r.who} className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-4">
              <div className="flex items-center gap-2.5">
                <Avatar initials={r.who[0]} />
                <div className="flex-1">
                  <p className="text-[13px] font-bold">{r.who}</p>
                  <p className="text-[10.5px] tracking-wide text-muted uppercase">{r.when}</p>
                </div>
                <span className="rounded-full border border-link/40 px-2 py-0.5 text-[11px] font-bold text-link">
                  {r.note}/5
                </span>
              </div>
              <p className="text-[12.5px] leading-relaxed text-white/80">{r.text}</p>
              <div className="flex gap-2">
                <Chip small icon={<ThumbUpIcon size={12} />}>J’aime ({r.likes})</Chip>
                <Chip small>Répondre</Chip>
                <Chip small>Signaler</Chip>
              </div>
            </article>
          ))}
          <PrimaryButton className="mt-1">
            <PencilIcon size={15} /> Donner mon avis
          </PrimaryButton>
        </div>
      </section>
    </Screen>
  )
}
