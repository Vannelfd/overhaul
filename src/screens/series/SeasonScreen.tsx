import {
  CalendarIcon,
  CheckIcon,
  ChevronLeftIcon,
  ClockIcon,
  EyeIcon,
  FilterIcon,
  HeartIcon,
  MessageIcon,
  PencilIcon,
  PlayIcon,
  StarIcon,
  TrendingIcon,
} from '../../ui/icons'
import { Chip, IconButton, Overline, Photo, Progress, Rail, Screen, SectionTitle } from '../../ui/kit'

type Episode = {
  n: number; title: string; min: number; date: string; pop: number; note: string; talks: number; text: string; perso?: number
}

const episodes: Episode[] = [
  { n: 1, title: 'The Hellfire Club', min: 76, date: '27 mai 2022', pop: 92, note: '8.7', talks: 156, perso: 4,
    text: 'Après une tragédie à Hawkins, les enfants tentent de reprendre une vie normale. Eleven et Will déménagent en Californie tandis qu’un nouveau club de jeu vidéo attire l’attention.' },
  { n: 2, title: 'Vecna’s Curse', min: 65, date: '27 mai 2022', pop: 88, note: '8.5', talks: 134, perso: 5,
    text: 'Un étrange meurtre à Hawkins réveille de vieilles peurs. Dustin et ses amis font face à une nouvelle menace dans leurs jeux de rôle.' },
  { n: 3, title: 'The Monster and the Superhero', min: 63, date: '27 mai 2022', pop: 85, note: '8.3', talks: 112, perso: 4,
    text: 'Eleven est confrontée à son passé à travers des visions troublantes. La police enquête sur les événements surnaturels de Hawkins.' },
  { n: 4, title: 'Dear Billy', min: 78, date: '27 mai 2022', pop: 96, note: '9.2', talks: 245, perso: 5,
    text: 'Max se retrouve en danger et ses amis doivent affronter leurs pires souvenirs pour la sauver. Un épisode émotionnellement intense.' },
  { n: 5, title: 'The Nina Project', min: 74, date: '27 mai 2022', pop: 94, note: '9', talks: 198, perso: 5,
    text: 'Eleven découvre un projet secret qui pourrait lui permettre de retrouver ses pouvoirs. Joyce et Murray poursuivent leur mission en Russie.' },
  { n: 6, title: 'The Dive', min: 73, date: '27 mai 2022', pop: 90, note: '8.8', talks: 176, perso: 4,
    text: 'Les amis tentent de comprendre l’origine du Monde à l’Envers. Eleven replonge dans ses souvenirs les plus douloureux.' },
  { n: 7, title: 'The Massacre at Hawkins Lab', min: 98, date: '1 juil. 2022', pop: 98, note: '9.4', talks: 312,
    text: 'Les secrets du laboratoire d’Hawkins sont enfin révélés. Eleven doit affronter la vérité sur ce qui s’est passé réellement.' },
  { n: 8, title: 'Papa', min: 85, date: '1 juil. 2022', pop: 89, note: '8.6', talks: 203,
    text: 'Eleven se retrouve face à son créateur et doit choisir son camp. À Hawkins, la bataille finale approche.' },
  { n: 9, title: 'The Piggyback', min: 142, date: '1 juil. 2022', pop: 99, note: '9.3', talks: 428,
    text: 'La confrontation finale entre Hawkins et le Monde à l’Envers. Tous les personnages principaux unissent leurs forces dans un épisode marathon.' },
]

function Stars({ value }: { value?: number }) {
  if (!value) return <span className="text-[11px] text-muted">Non noté</span>
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} size={12} className={i <= value ? 'text-yellow-400' : 'text-white/20'} />
      ))}
    </span>
  )
}

function EpisodeCard({ e }: { e: Episode }) {
  const seen = e.perso !== undefined
  return (
    <article className="flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-3">
      <div className="flex gap-3">
        <div className="relative h-[112px] w-[84px] shrink-0 overflow-hidden rounded-xl">
          <Photo seed={`s4e${e.n}`} />
          <span className="absolute top-1.5 left-1.5 flex size-6 items-center justify-center rounded-full bg-magenta text-[11px] font-bold">
            {e.n}
          </span>
          <span className="absolute right-1.5 bottom-1.5 rounded-md bg-ink/75 px-1.5 text-[9.5px] font-bold">
            {e.min} min
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-[10.5px] font-bold text-link uppercase">Épisode {String(e.n).padStart(2, '0')}</span>
            <span
              className={`flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                seen ? 'border-link/40 text-link' : 'border-line text-white/80'
              }`}
            >
              {seen ? <CheckIcon size={11} /> : <ClockIcon size={11} />}
              {seen ? 'Vu' : 'À voir'}
            </span>
          </div>
          <h3 className="text-[14.5px] leading-tight font-extrabold">{e.title}</h3>
          <div className="flex flex-wrap gap-x-2.5 gap-y-0.5 text-[10.5px] text-muted">
            <span className="flex items-center gap-1"><CalendarIcon size={11} /> {e.date}</span>
            <span className="flex items-center gap-1"><TrendingIcon size={11} /> Popularité {e.pop} %</span>
            <span className="flex items-center gap-1"><StarIcon size={11} className="text-yellow-400" /> {e.note}/10</span>
            <span className="flex items-center gap-1"><MessageIcon size={11} /> {e.talks}</span>
          </div>
        </div>
      </div>
      <p className="line-clamp-2 text-[12px] leading-snug text-white/70">{e.text}</p>
      <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
        <span className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-wide text-muted uppercase">Note perso</span>
          <Stars value={e.perso} />
        </span>
        {seen ? (
          <span className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-[12px] font-semibold">
            <EyeIcon size={14} /> Revoir
          </span>
        ) : (
          <span className="flex h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-[12px] font-bold text-ink">
            <PlayIcon size={12} /> Regarder
          </span>
        )}
      </div>
    </article>
  )
}

export function SeasonScreen() {
  return (
    <Screen tab="discover">
      {/* Hero saison */}
      <section className="relative">
        <div className="absolute inset-0">
          <Photo seed="season-4-hero" className="opacity-30 grayscale" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/40 to-ink" />
        </div>
        <div className="relative flex flex-col gap-3 px-5 pt-4 pb-2">
          <span className="flex w-fit items-center gap-2 rounded-full border border-line bg-ink/60 py-1.5 pr-4 pl-2 text-[12px] font-semibold">
            <ChevronLeftIcon size={16} /> Retour aux saisons
          </span>
          <Overline className="mt-3">Stranger Things</Overline>
          <h1 className="text-[40px] leading-none font-black uppercase">Saison 4</h1>
          <p className="text-[16px] font-semibold text-link">L’Éloignement</p>
          <div className="flex flex-wrap gap-2">
            <Chip small icon={<CalendarIcon size={12} />}>27 mai 2022</Chip>
            <Chip small icon={<PlayIcon size={10} />}>9 épisodes</Chip>
            <Chip small icon={<ClockIcon size={12} />}>~75 min/épisode</Chip>
          </div>
          <p className="text-[13px] leading-relaxed text-white/75">
            Six mois après la bataille de Starcourt, nos héros sont séparés pour la première fois. Pendant qu’Eleven tente
            de s’adapter à la vie en Californie, un nouveau danger surnaturel fait surface à Hawkins. Un mystère qui
            pourrait enfin révéler l’origine du Monde à l’Envers.
          </p>
          <div className="flex gap-2">
            <IconButton><HeartIcon size={18} /></IconButton>
            <IconButton><MessageIcon size={18} /></IconButton>
            <IconButton><PencilIcon size={18} /></IconButton>
          </div>
        </div>
      </section>

      {/* Progression personnelle */}
      <section className="mx-5 mt-5 flex flex-col gap-3 rounded-[22px] border border-line bg-surface p-4">
        <h2 className="text-[12px] font-extrabold uppercase">Progression personnelle</h2>
        <p className="flex items-baseline gap-1.5">
          <span className="text-[32px] font-black">6</span>
          <span className="text-[14px] text-white/70">/ 9 épisodes</span>
        </p>
        <Progress value={67} />
        <div className="rounded-2xl border border-line bg-ink/40 p-3">
          <Overline>Dernière activité</Overline>
          <p className="mt-0.5 text-[13px] font-semibold">Épisode 6 regardé hier</p>
        </div>
        <span className="flex h-11 items-center justify-center rounded-full bg-white text-[13px] font-bold text-ink">
          Continuer la saison
        </span>
      </section>

      {/* Liste des épisodes */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Liste des épisodes" />
        <p className="flex items-center gap-2 px-5 text-[11px] font-bold tracking-wide uppercase">
          <FilterIcon size={13} className="text-link" /> Mode découverte
        </p>
        <Rail gap="gap-2">
          <Chip small icon={<EyeIcon size={12} />}>Masquer les spoilers</Chip>
          <Chip small>Non vus</Chip>
          <Chip small icon={<TrendingIcon size={12} />}>Populaires</Chip>
          <Chip small icon={<StarIcon size={11} />}>Mieux notés</Chip>
        </Rail>
        <div className="flex flex-col gap-3 px-5">
          {episodes.map((e) => (
            <EpisodeCard key={e.n} e={e} />
          ))}
        </div>
      </section>
    </Screen>
  )
}
