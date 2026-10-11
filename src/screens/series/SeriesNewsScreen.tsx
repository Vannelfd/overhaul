import { ArrowRightIcon, BellIcon, BookmarkIcon, CalendarIcon, ChevronDownIcon, ClockIcon, ShareIcon, SparklesIcon, TrendingIcon } from '../../ui/icons'
import { Badge, Chip, IconButton, PageHeader, Photo, Rail, Screen, SearchField, SectionTitle } from '../../ui/kit'
import { SeriesTabs } from './shared'

const featured = [
  { tag: 'Breaking', title: 'La saison 5 boucle son tournage principal', text: 'Le planning se précise et plusieurs indices laissent penser à une communication plus intense dans les prochaines semaines.', date: '26 fév 2026', min: 4 },
  { tag: 'Interview', title: 'Les frères Duffer promettent une fin plus intime', text: 'La conclusion devrait recentrer l’émotion sur le groupe historique sans perdre l’ampleur du spectacle.', date: '25 fév 2026', min: 5 },
  { tag: 'Décryptage', title: 'Pourquoi Hawkins reste un décor aussi fort', text: 'Entre nostalgie américaine et menace invisible, la mise en scène transforme la ville en personnage à part entière.', date: '24 fév 2026', min: 6 },
]
const all = [
  { tag: 'Annonce', title: 'Nouveau teaser pour la saison 5', text: 'Netflix dévoile un premier aperçu de la saison finale qui promet d’être épique.', date: '23 fév 2026' },
  { tag: 'Événement', title: 'Stranger Things : l’expérience immersive arrive à Paris', text: 'Plongez dans l’univers de la série avec cette exposition interactive qui va ravir les fans.', date: '22 fév 2026' },
  { tag: 'Casting', title: 'Nouveau personnage majeur annoncé pour la saison 5', text: 'Un acteur de renom rejoint le casting pour le dernier chapitre de la saga.', date: '21 fév 2026' },
]

export function SeriesNewsScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Actualités" title="Stranger Things" right={<IconButton><BellIcon size={18} /></IconButton>} />
      <div className="mt-4 flex flex-col gap-3 px-5">
        <span className="flex h-11 items-center justify-center gap-2 rounded-full bg-white text-[13px] font-bold text-ink">
          <TrendingIcon size={15} /> S’abonner aux news
        </span>
        <SearchField placeholder="Rechercher une actualité…" />
      </div>
      <div className="mt-4">
        <SeriesTabs active="News" />
      </div>
      <div className="mt-4">
        <Rail gap="gap-2">
          <Chip active>Tout</Chip>
          <Chip>Breaking</Chip>
          <Chip>Interviews</Chip>
          <Chip>Annonces</Chip>
          <Chip>Événements</Chip>
        </Rail>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="À la une" />
        <Rail>
          {featured.map((f) => (
            <article key={f.title} className="w-[280px] shrink-0 overflow-hidden rounded-[22px] border border-line bg-surface">
              <div className="relative h-[140px]">
                <Photo seed={`st-news-${f.tag}`} />
                <span className="absolute top-3 left-3">
                  <Badge tone="magenta"><SparklesIcon size={10} className="mr-1" />{f.tag}</Badge>
                </span>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="text-[15px] leading-snug font-extrabold uppercase">{f.title}</h3>
                <p className="line-clamp-3 text-[12px] leading-relaxed text-white/70">{f.text}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="flex gap-3 text-[10.5px] text-muted">
                    <span className="flex items-center gap-1"><CalendarIcon size={11} /> {f.date}</span>
                    <span className="flex items-center gap-1"><ClockIcon size={11} /> {f.min} min</span>
                  </span>
                  <span className="flex gap-1.5">
                    <span className="flex size-9 items-center justify-center rounded-full border border-line"><BookmarkIcon size={14} /></span>
                    <span className="flex size-9 items-center justify-center rounded-full border border-line"><ShareIcon size={14} /></span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Toutes les actualités" action="Voir tout" />
        <div className="flex flex-col gap-3 px-5">
          {all.map((a) => (
            <article key={a.title} className="flex gap-3 rounded-[20px] border border-line bg-surface p-3">
              <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-xl">
                <Photo seed={`st-all-${a.tag}`} />
                <span className="absolute top-1.5 left-1.5"><Badge>{a.tag}</Badge></span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="text-[13px] leading-snug font-extrabold uppercase">{a.title}</h3>
                <p className="line-clamp-2 text-[11.5px] text-white/65">{a.text}</p>
                <div className="mt-auto flex items-center justify-between text-[10.5px]">
                  <span className="text-muted">{a.date}</span>
                  <span className="flex items-center gap-1 font-semibold text-link">Lire <ArrowRightIcon size={12} /></span>
                </div>
              </div>
            </article>
          ))}
          <span className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-surface text-[13px] font-semibold">
            Charger plus d’actualités <ChevronDownIcon size={15} />
          </span>
        </div>
      </section>
    </Screen>
  )
}
