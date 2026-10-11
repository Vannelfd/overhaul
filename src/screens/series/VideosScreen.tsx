import { BookmarkIcon, ChevronRightIcon, EyeIcon, PlayIcon, ShareIcon, ThumbUpIcon, VolumeIcon } from '../../ui/icons'
import { Badge, Chip, IconButton, PageHeader, Photo, Rail, Screen, SectionTitle } from '../../ui/kit'
import { SeriesTabs } from './shared'

const videos = [
  { kind: 'Featurette', title: 'Behind the Scenes : Saison 4', sub: 'Immersion dans le tournage', d: '8:45', views: '2.3M', likes: '98K' },
  { kind: 'Analyse', title: 'L’évolution de Eleven', sub: 'Rétrospective du personnage', d: '12:30', views: '1.8M', likes: '76K' },
  { kind: 'Teaser', title: 'Teaser Saison 3', sub: 'Starcourt Mall', d: '0:58', views: '8.9M', likes: '312K' },
  { kind: 'Découverte', title: 'Les Easter Eggs cachés', sub: 'Références aux années 80', d: '6:15', views: '1.2M', likes: '54K' },
  { kind: 'Interview', title: 'Interview du casting', sub: 'Les acteurs se confient', d: '15:20', views: '890K', likes: '42K' },
]

export function VideosScreen() {
  return (
    <Screen tab="discover">
      <PageHeader
        overline="Vidéos & trailers"
        title="Stranger Things"
        right={
          <span className="flex gap-2">
            <IconButton><ShareIcon size={17} /></IconButton>
            <IconButton><BookmarkIcon size={17} /></IconButton>
          </span>
        }
      />

      {/* Lecteur vedette (16:9) */}
      <section className="mt-4">
        <div className="relative h-[219px] bg-ink">
          <Photo seed="teaser-cinema" className="opacity-60" />
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-[10.5px] font-semibold">
            <VolumeIcon size={12} className="text-link" /> 1:42
          </span>
          <span className="brand-gradient absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full">
            <PlayIcon size={22} />
          </span>
        </div>
        <div className="flex flex-col gap-1.5 px-5 pt-3">
          <Badge>Teaser</Badge>
          <h2 className="text-[18px] leading-tight font-black uppercase">Stranger Things 5 | Teaser officiel</h2>
          <p className="text-[12px] text-white/65">Bande-annonce de la saison finale</p>
          <p className="flex gap-4 text-[11.5px] text-muted">
            <span className="flex items-center gap-1"><EyeIcon size={13} className="text-link" /> 12.5M vues</span>
            <span className="flex items-center gap-1"><ThumbUpIcon size={13} className="text-link" /> 485K</span>
          </p>
        </div>
      </section>

      <div className="mt-4">
        <SeriesTabs active="Trailers" />
      </div>
      <div className="mt-4">
        <Rail gap="gap-2">
          <Chip active>Tout</Chip>
          <Chip>Bandes-annonces</Chip>
          <Chip>Extraits</Chip>
          <Chip>Interviews</Chip>
          <Chip>Behind the scenes</Chip>
          <Chip>Analyses</Chip>
        </Rail>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Toutes les vidéos" action="Voir tout" />
        <div className="flex flex-col gap-3 px-5">
          {videos.map((v) => (
            <article key={v.title} className="flex gap-3">
              <div className="relative h-[92px] w-[150px] shrink-0 overflow-hidden rounded-xl">
                <Photo seed={`v-${v.title}`} className="opacity-80" />
                <span className="absolute inset-0 m-auto flex size-9 items-center justify-center rounded-full bg-ink/60">
                  <PlayIcon size={13} />
                </span>
                <span className="absolute right-1.5 bottom-1.5"><Badge>{v.d}</Badge></span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5 py-0.5">
                <span className="text-[10px] font-bold tracking-wide text-link uppercase">{v.kind}</span>
                <h3 className="text-[13.5px] leading-snug font-bold">{v.title}</h3>
                <p className="truncate text-[11px] text-muted">{v.sub}</p>
                <p className="mt-auto flex gap-3 text-[10.5px] text-white/60">
                  <span className="flex items-center gap-1"><EyeIcon size={11} /> {v.views}</span>
                  <span className="flex items-center gap-1"><ThumbUpIcon size={11} /> {v.likes}</span>
                </p>
              </div>
            </article>
          ))}
          <span className="mt-1 flex h-11 items-center justify-center gap-1 rounded-full border border-line bg-surface text-[13px] font-semibold">
            Charger plus de vidéos <ChevronRightIcon size={15} />
          </span>
        </div>
      </section>
    </Screen>
  )
}
