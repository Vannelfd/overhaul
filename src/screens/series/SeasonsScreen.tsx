import { CalendarIcon, CheckIcon, ClockIcon, EyeIcon, InfoIcon, StarIcon } from '../../ui/icons'
import { Badge, IconButton, PageHeader, Photo, PrimaryButton, Progress, Screen, SectionTitle } from '../../ui/kit'

const seasons = [
  { n: 1, year: 2016, name: 'L’Étrange', eps: 8, status: 'Terminée', note: '4.7', votes: '1240', progress: 100, done: true },
  { n: 2, year: 2017, name: 'La Menace', eps: 9, status: 'Terminée', note: '4.5', votes: '980', progress: 100, done: true },
  { n: 3, year: 2019, name: 'L’Été', eps: 8, status: 'En cours · 5/8', note: '4.2', votes: '856', progress: 62, done: false },
  { n: 4, year: 2022, name: 'L’Éloignement', eps: 9, status: 'En cours · 0/9', note: '4.6', votes: '1124', progress: 0, done: false },
]

const episodes = [
  { n: 1, title: 'La Disparition de Will Byers', min: 49, note: '4.5' },
  { n: 2, title: 'La Barjot', min: 55, note: '4.8' },
  { n: 3, title: 'Joyeux Noël', min: 51, note: '4.6' },
  { n: 4, title: 'Le Corps', min: 49, note: '4.7' },
]

export function SeasonsScreen() {
  return (
    <Screen tab="discover">
      <PageHeader
        overline="Saisons"
        title="Stranger Things"
        right={
          <IconButton>
            <InfoIcon size={18} />
          </IconButton>
        }
      />
      <p className="mt-2 px-5 text-[12px] text-muted">4 saisons · Terminée</p>

      {/* Progression */}
      <section className="brand-card mx-5 mt-5 flex flex-col gap-3 rounded-[22px] border border-magenta/30 p-4">
        <h2 className="text-[13px] font-extrabold uppercase">Progression</h2>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[12px]">
            <span className="text-white/75">Saisons terminées</span>
            <span className="font-bold text-link">2/4</span>
          </div>
          <Progress value={50} />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[12px]">
            <span className="text-white/75">Épisodes vus</span>
            <span className="font-bold text-link">22/34</span>
          </div>
          <Progress value={65} />
        </div>
        <span className="mt-1 flex h-11 items-center justify-center rounded-full bg-white text-[13px] font-bold text-ink">
          Continuer la saison 3
        </span>
      </section>

      {/* Explorer les saisons */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Explorer les saisons" />
        <div className="grid grid-cols-2 gap-3 px-5">
          {seasons.map((s) => (
            <article
              key={s.n}
              className={`overflow-hidden rounded-[20px] border bg-surface ${s.n === 3 ? 'border-magenta' : 'border-line'}`}
            >
              <div className="relative h-[110px]">
                <Photo seed={`season-${s.n}`} />
                <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
                <span className="absolute top-2 left-2">
                  <Badge>
                    <CalendarIcon size={10} className="mr-1" />
                    {s.year}
                  </Badge>
                </span>
                {s.done && (
                  <span className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-magenta">
                    <CheckIcon size={13} />
                  </span>
                )}
                <div className="absolute bottom-1.5 left-3">
                  <p className="text-[15px] font-black uppercase">Saison {s.n}</p>
                  <p className="text-[11px] text-link">{s.name}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3">
                <div className="flex justify-between text-[10.5px]">
                  <span className="text-white/70">{s.eps} épisodes</span>
                  <span className="font-semibold text-link">{s.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] font-bold">
                    <StarIcon size={11} className="text-magenta" />
                    {s.note} <span className="font-normal text-muted">({s.votes})</span>
                  </span>
                  <EyeIcon size={15} className="text-link" />
                </div>
                <Progress value={s.progress} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Saison sélectionnée */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Saison 3" action="Voir cette saison" />
        <div className="brand-card mx-5 flex flex-col rounded-[22px] border border-line p-4">
          <p className="text-[12.5px] leading-relaxed text-white/75">
            L’été 1985 à Hawkins. Le centre commercial Starcourt devient le centre de nouvelles menaces surnaturelles qui
            menacent la vie des habitants.
          </p>
          <div className="mt-3 flex flex-col">
            {episodes.map((e) => (
              <div key={e.n} className="flex items-center gap-3 border-t border-white/10 py-3">
                <div className="relative h-12 w-14 shrink-0 overflow-hidden rounded-lg">
                  <Photo seed={`s3e${e.n}`} className="opacity-60" />
                  <span className="absolute inset-0 flex items-center justify-center text-[15px] font-black">{e.n}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-bold">{e.title}</p>
                  <p className="flex items-center gap-1 text-[10.5px] text-muted">
                    <ClockIcon size={11} /> {e.min} min · 15 juil. 2016
                  </p>
                </div>
                <span className="flex items-center gap-1 text-[11px] text-link">
                  <StarIcon size={11} /> {e.note}
                </span>
                <span className="flex size-9 items-center justify-center rounded-full border border-line">
                  <EyeIcon size={15} className="text-link" />
                </span>
              </div>
            ))}
          </div>
          <span className="mt-1 text-center text-[12px] font-semibold text-link">Voir tout ⌄</span>
        </div>
      </section>

      <div className="mx-5 mt-6">
        <PrimaryButton>Continuer la saison 3</PrimaryButton>
      </div>
    </Screen>
  )
}
