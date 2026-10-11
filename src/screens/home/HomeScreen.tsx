import { BookmarkIcon, HeartIcon, MessageIcon, PlayIcon, TrendingIcon } from '../../ui/icons'
import {
  AdSlot,
  Badge,
  Chip,
  IconButton,
  Overline,
  Photo,
  PrimaryButton,
  Rail,
  Screen,
  SearchField,
  SectionTitle,
  TopBar,
} from '../../ui/kit'

const trending = ['Wednesday', 'Landman', 'The Bear', 'Pluribus', 'The Beast in Me']

const actus = [
  {
    title: 'Une saison 5 pour It’s Always Sunny in Philadelphia',
    text: 'La série a été renouvelée pour une nouvelle saison qui se composera de 26 épisodes !',
  },
  {
    title: 'Stranger Things : la saison 5 boucle son tournage',
    text: 'Le planning se précise et plusieurs indices laissent penser à une communication intense.',
  },
  {
    title: 'The Last of Us accueille un nouveau visage',
    text: 'Un acteur de renom rejoint le casting pour le prochain chapitre de la saga.',
  },
]

function ActuCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="brand-card flex w-[270px] shrink-0 flex-col items-center gap-2.5 rounded-[22px] border border-magenta/30 p-5 text-center">
      <Chip small>Actu</Chip>
      <h3 className="text-[14px] leading-snug font-extrabold uppercase">{title}</h3>
      <p className="line-clamp-2 text-[12px] leading-relaxed text-white/70">{text}</p>
      <span className="mt-1 flex h-10 items-center rounded-full bg-ink/50 px-4 text-[11px] font-bold uppercase">
        En savoir plus
      </span>
    </article>
  )
}

function PosterRail({ prefix, numbered = false }: { prefix: string; numbered?: boolean }) {
  return (
    <Rail gap={numbered ? 'gap-5' : 'gap-3'}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className={`relative shrink-0 ${numbered ? 'w-[128px] pl-4' : 'w-[112px]'}`}>
          <div className={`overflow-hidden rounded-2xl ${numbered ? 'h-[170px]' : 'h-[160px]'}`}>
            <Photo seed={`${prefix}-${n}`} />
          </div>
          {numbered && (
            <span
              className="absolute -bottom-2 left-0 text-[64px] leading-none font-black text-ink"
              style={{ WebkitTextStroke: '2px #b3306c' }}
            >
              {n}
            </span>
          )}
        </div>
      ))}
    </Rail>
  )
}

export function HomeScreen() {
  return (
    <Screen tab="home">
      {/* 1. Hero — Stranger Things saison 5 */}
      <section className="relative">
        <div className="absolute inset-0">
          <Photo seed="stranger-hero" className="opacity-60" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/80 via-ink/40 to-ink" />
          <div className="absolute inset-0 bg-linear-to-tr from-magenta/35 via-transparent to-teal/25" />
        </div>
        <div className="relative">
          <TopBar />
          <div className="flex flex-col gap-3 px-5 pt-16 pb-6">
            <div className="flex flex-wrap gap-2">
              <Chip small>Netflix</Chip>
              <Chip small>16 novembre</Chip>
              <Chip small>8 épisodes</Chip>
            </div>
            <h1 className="hero-text text-[30px] leading-[1.05] font-black uppercase">
              Stranger Things revient avec sa saison 5 !
            </h1>
            <Overline className="text-white/80">Saison finale</Overline>
            <p className="text-[13px] leading-relaxed text-white/75">
              Alors que Hawkins sombre dans le chaos, Eleven et ses amis affrontent leur ultime bataille contre Vecna…
            </p>
            <div className="mt-2">
              <SearchField placeholder="Rechercher une série" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trending now */}
      <section className="mt-4 flex flex-col gap-3">
        <SectionTitle title="Trending now" action="Top 10" />
        <div className="mx-5 flex flex-col rounded-[22px] border border-line bg-surface p-2">
          {trending.map((t, i) => (
            <div key={t} className="flex items-center gap-3.5 rounded-2xl p-2">
              <span className="brand-text w-8 text-[22px] font-black">{String(i + 1).padStart(2, '0')}</span>
              <div className="h-14 w-11 shrink-0 overflow-hidden rounded-lg">
                <Photo seed={`trend-${t}`} />
              </div>
              <span className="flex-1 truncate text-[14px] font-bold uppercase">{t}</span>
              <TrendingIcon size={17} className="text-link" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Actus séries */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Actus séries" action="Toutes les actus" />
        <Rail>
          {actus.map((a) => (
            <ActuCard key={a.title} {...a} />
          ))}
        </Rail>
      </section>

      {/* 4. Les séries du moment */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Les séries du moment" />
        <PosterRail prefix="moment" numbered />
      </section>

      {/* 5. Image + lien, puis PUB */}
      <section className="mt-9 flex flex-col gap-5">
        <div className="relative mx-5 h-[150px] overflow-hidden rounded-[22px] border border-line">
          <Photo seed="image-lien" className="opacity-70" />
          <div className="absolute inset-0 flex items-end bg-linear-to-t from-ink/90 to-transparent p-4">
            <span className="text-[13px] font-bold uppercase">Image + lien</span>
          </div>
        </div>
        <AdSlot />
      </section>

      {/* 6. Les nouveautés séries */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Les nouveautés séries" action="Toutes" />
        <article className="mx-5 overflow-hidden rounded-[22px] border border-line bg-surface">
          <div className="relative h-[190px]">
            <Photo seed="beast-in-me" />
            <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/10 to-transparent" />
          </div>
          <div className="flex flex-col gap-2.5 px-4 pb-4">
            <h3 className="text-[22px] font-black uppercase">The Beast in Me</h3>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['a', 'b', 'c'].map((s) => (
                  <span key={s} className="size-6 overflow-hidden rounded-full border-2 border-surface">
                    <Photo seed={`fan-${s}`} />
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-semibold text-muted">+20 fans</span>
            </div>
            <p className="text-[11.5px] font-semibold text-link">Thriller · Drame · Mini série · Mystère</p>
            <p className="line-clamp-3 text-[13px] leading-relaxed text-white/75">
              Une romancière en deuil voit sa vie basculer lorsqu’un mystérieux voisin, soupçonné d’un crime, s’installe à
              côté de chez elle. Entre fascination et danger, un jeu du chat et de la souris commence.
            </p>
            <p className="text-[12px] text-white/60">Diffusée le 16 novembre sur Netflix</p>
            <div className="mt-1 flex items-center gap-2">
              <PrimaryButton className="flex-1">
                <PlayIcon size={14} /> Regarder
              </PrimaryButton>
              <IconButton>
                <HeartIcon size={18} />
              </IconButton>
              <IconButton>
                <BookmarkIcon size={18} />
              </IconButton>
              <IconButton>
                <MessageIcon size={18} />
              </IconButton>
            </div>
          </div>
        </article>
        <Rail>
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-[90px] w-[150px] shrink-0 overflow-hidden rounded-xl">
              <Photo seed={`nouveaute-${n}`} />
            </div>
          ))}
        </Rail>
      </section>

      {/* 7. Streaming séries */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Streaming séries" action="Toutes les vidéos" />
        <div className="relative mx-5 h-[200px] overflow-hidden rounded-[22px] border border-line">
          <Photo seed="lecteur-video" className="opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="flex size-14 items-center justify-center rounded-full bg-white text-ink">
              <PlayIcon size={20} />
            </span>
            <Overline className="text-white/80">Lecteur vidéo</Overline>
            <span className="text-[11px] text-white/60">Module Dailymotion et YouTube</span>
          </div>
        </div>
        <Rail>
          {['Module 2', 'Module 3'].map((m) => (
            <div key={m} className="relative h-[100px] w-[175px] shrink-0 overflow-hidden rounded-2xl">
              <Photo seed={`video-${m}`} className="opacity-70" />
              <span className="absolute inset-0 m-auto flex size-10 items-center justify-center rounded-full bg-ink/60">
                <PlayIcon size={14} />
              </span>
              <span className="absolute bottom-2 left-2">
                <Badge>{m}</Badge>
              </span>
            </div>
          ))}
        </Rail>
      </section>

      {/* 8. SA Daily */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="SA Daily" action="Toutes les actus" />
        <Rail>
          {actus.map((a) => (
            <ActuCard key={a.title} {...a} />
          ))}
        </Rail>
      </section>

      {/* 9. Mieux notées avec le tag Amour */}
      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Les séries les mieux notées avec le tag amour" />
        <PosterRail prefix="amour" />
      </section>
    </Screen>
  )
}
