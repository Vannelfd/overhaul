import {
  ArrowRightIcon,
  BookmarkIcon,
  ChevronLeftIcon,
  FilmIcon,
  NewsIcon,
  PlayIcon,
  SlidersIcon,
  SortIcon,
  SparklesIcon,
  TvIcon,
  UsersIcon,
  XIcon,
} from '../../ui/icons'
import { Badge, Chip, IconButton, Overline, Photo, Rail, Screen } from '../../ui/kit'

type Result = {
  title: string
  origin: string
  network: string
  genres: string[]
  counts: string
  text: string
  trailer?: string
}

const results: Result[] = [
  {
    title: 'Arrow',
    origin: 'Série américaine',
    network: 'CW',
    genres: ['Drame', 'Action', 'Aventure'],
    counts: '8 saisons · 170 épisodes',
    text: 'La série Arrow est l’adaptation d’un comic américain. On suivra un super héros la nuit, qui est aussi un riche playboy le jour.',
    trailer: '1:42',
  },
  {
    title: 'Harrow',
    origin: 'Série australienne',
    network: 'ABC',
    genres: ['Drame', 'Médical'],
    counts: '3 saisons · 30 épisodes',
    text: 'La vie du médecin légiste Dr. Daniel Harrow. Son mépris de l’autorité et son empathie pour les morts l’aident à résoudre des cas.',
  },
]

function ResultCard({ r }: { r: Result }) {
  return (
    <article className="flex flex-col gap-3 rounded-[22px] border border-line bg-surface p-3">
      <div className="flex gap-3.5">
        <div className="relative h-[156px] w-[106px] shrink-0 overflow-hidden rounded-2xl">
          <Photo seed={`result-${r.title}`} />
          <span className="absolute top-2 left-2">
            <Badge>{r.network}</Badge>
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5 py-0.5">
          <h3 className="text-[17px] font-black uppercase">{r.title}</h3>
          <p className="text-[11.5px] text-muted">{r.origin}</p>
          <div className="flex flex-wrap gap-1.5">
            {r.genres.map((g) => (
              <Chip key={g} small>
                {g}
              </Chip>
            ))}
          </div>
          <p className="text-[11.5px] font-semibold text-magenta">{r.counts}</p>
          <p className="line-clamp-3 text-[12px] leading-snug text-white/75">{r.text}</p>
        </div>
      </div>

      {/* Bloc trailer */}
      {r.trailer ? (
        <div className="relative h-[92px] overflow-hidden rounded-2xl">
          <Photo seed={`trailer-${r.title}`} className="opacity-60" />
          <div className="absolute inset-0 flex items-center gap-3 bg-linear-to-r from-ink/80 to-transparent px-4">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-ink">
              <PlayIcon size={15} />
            </span>
            <div>
              <p className="text-[12.5px] font-bold">Trailer</p>
              <p className="text-[11px] text-white/70">Ajouté récemment · {r.trailer}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-11 items-center justify-center rounded-2xl border border-dashed border-line text-[11px] font-bold tracking-widest text-muted uppercase">
          No trailer
        </div>
      )}

      <div className="flex items-center gap-2">
        <span className="brand-gradient flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-[13px] font-bold">
          Ouvrir la fiche <ArrowRightIcon size={15} />
        </span>
        <IconButton>
          <BookmarkIcon size={18} />
        </IconButton>
      </div>
    </article>
  )
}

export function SearchScreen() {
  return (
    <Screen tab="discover">
      {/* Barre de recherche active */}
      <div className="flex items-center gap-2.5 px-5 pt-4">
        <IconButton>
          <ChevronLeftIcon size={20} />
        </IconButton>
        <div className="brand-gradient flex-1 rounded-full p-px">
          <div className="flex h-11 items-center gap-3 rounded-full bg-surface px-4">
            <span className="flex-1 text-[16px]">arrow</span>
            <XIcon size={18} className="text-muted" />
          </div>
        </div>
      </div>

      <div className="mt-4 px-5">
        <Overline>SerieAddict / Recherche</Overline>
        <h1 className="mt-1 text-[20px] font-black uppercase">
          Résultats de la recherche : <span className="hero-text">arrow</span>
        </h1>
      </div>

      {/* Types de résultats */}
      <div className="mt-4">
        <Rail gap="gap-2">
          <Chip active icon={<TvIcon size={15} />} count={2}>Séries</Chip>
          <Chip icon={<UsersIcon size={15} />}>Stars</Chip>
          <Chip icon={<NewsIcon size={15} />}>News</Chip>
          <Chip icon={<FilmIcon size={15} />}>Trailers</Chip>
          <Chip icon={<SparklesIcon size={15} />}>SA Daily</Chip>
        </Rail>
      </div>

      {/* Tri + filtres */}
      <div className="mt-4 flex items-center justify-between border-y border-line px-5 py-2.5">
        <p className="text-[13px] text-muted">
          <b className="text-white">2</b> résultats
        </p>
        <div className="flex gap-2">
          <Chip small icon={<SortIcon size={13} />}>Pertinence</Chip>
          <Chip small active icon={<SlidersIcon size={13} />}>Filtres · 2</Chip>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 px-5">
        {results.map((r) => (
          <ResultCard key={r.title} r={r} />
        ))}
      </div>
    </Screen>
  )
}
