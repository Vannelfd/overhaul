import { CheckIcon, ChevronDownIcon, FilterIcon, MessageIcon, MoreIcon, PencilIcon, SortIcon, StarIcon, ThumbUpIcon } from '../../ui/icons'
import { Avatar, Chip, IconButton, PageHeader, PrimaryButton, Screen, SectionTitle } from '../../ui/kit'
import { SeriesTabs } from './shared'

const distribution = [
  { s: 5, p: 59 },
  { s: 4, p: 28 },
  { s: 3, p: 8 },
  { s: 2, p: 4 },
  { s: 1, p: 2 },
]
const details = [
  ['Scénario', '4.8'],
  ['Jeu d’acteurs', '4.9'],
  ['Ambiance', '4.7'],
  ['Bande-son', '4.9'],
  ['Effets spéciaux', '4.5'],
]
const reviews = [
  { who: 'Charlotte', verified: true, when: 'il y a 2 jours', note: '4.8', likes: 14, replies: 3,
    text: 'La série garde une énergie feuilletonnante rare. Même quand l’univers grandit, le cœur émotionnel du groupe reste lisible et c’est ce qui porte vraiment la fiche.' },
  { who: 'Nadia', verified: false, when: 'il y a 5 jours', note: '4.4', likes: 9, replies: 1,
    text: 'Saison 4 très généreuse visuellement, avec une ambiance bien plus noire. J’attends surtout que la dernière salve revienne à quelque chose de plus resserré.' },
  { who: 'Luca', verified: true, when: 'la semaine dernière', note: '4.6', likes: 17, replies: 5,
    text: 'Le mélange pop culture, horreur et coming-of-age reste redoutable. Peu de séries grand public tiennent aussi bien la mythologie et l’attachement aux personnages.' },
  { who: 'Marie', verified: true, when: 'il y a 1 semaine', note: '5', likes: 42, replies: 8,
    text: 'Une pure merveille ! Les frères Duffer ont créé quelque chose d’unique. Chaque saison apporte sa touche tout en conservant l’essence de ce qui fait le succès de la série.' },
  { who: 'Thomas', verified: false, when: 'il y a 2 semaines', note: '3.5', likes: 23, replies: 12,
    text: 'J’ai adoré les 2 premières saisons mais la 3e m’a semblé un peu moins réussie. Trop de personnages, certains arcs sont bancals. La saison 4 remonte le niveau heureusement.' },
]

export function ReviewsScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Avis & notes" title="Stranger Things" right={<IconButton><PencilIcon size={17} /></IconButton>} />

      {/* Note globale */}
      <section className="mx-5 mt-4 flex gap-4 rounded-[22px] border border-line bg-surface p-4">
        <div className="flex w-[96px] shrink-0 flex-col items-center justify-center">
          <span className="flex items-center gap-1 text-[36px] font-black">
            4.7 <StarIcon size={22} className="text-magenta" />
          </span>
          <span className="text-[11px] text-muted">3 456 avis</span>
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          {distribution.map((d) => (
            <div key={d.s} className="flex items-center gap-2 text-[10.5px]">
              <span className="w-2.5 text-white/70">{d.s}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="brand-gradient h-full rounded-full" style={{ width: `${d.p}%` }} />
              </div>
              <span className="w-7 text-right text-muted">{d.p}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Votre avis */}
      <section className="brand-card mx-5 mt-3 flex items-center gap-3 rounded-[22px] border border-magenta/30 p-4">
        <div className="flex-1">
          <h3 className="text-[13px] font-extrabold uppercase">Votre avis</h3>
          <p className="text-[11.5px] text-white/70">Vous n’avez pas encore noté cette série.</p>
        </div>
        <span className="flex h-10 items-center rounded-full bg-white px-4 text-[12px] font-bold text-ink">Rédiger un avis</span>
      </section>

      <div className="mt-4">
        <SeriesTabs active="Avis" />
      </div>

      {/* Détails des notes */}
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Détails des notes" />
        <div className="mx-5 flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-4">
          {details.map(([k, v]) => (
            <div key={k} className="flex items-center gap-3 text-[12.5px]">
              <span className="w-[110px] text-white/75">{k}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="brand-gradient h-full rounded-full" style={{ width: `${(Number(v) / 5) * 100}%` }} />
              </div>
              <span className="w-7 text-right font-bold">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Avis des membres */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Avis des membres" />
        <div className="flex gap-2 px-5">
          <Chip small icon={<FilterIcon size={12} />}>Filtrer</Chip>
          <Chip small icon={<SortIcon size={12} />}>Trier</Chip>
        </div>
        <div className="flex flex-col gap-2.5 px-5">
          {reviews.map((r) => (
            <article key={r.who} className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-4">
              <div className="flex items-center gap-2.5">
                <Avatar initials={r.who[0]} />
                <div className="flex-1">
                  <p className="flex items-center gap-1.5 text-[13px] font-bold">
                    {r.who}
                    {r.verified && (
                      <span className="flex items-center gap-0.5 rounded-full bg-link/15 px-1.5 py-0.5 text-[9px] font-semibold text-link">
                        <CheckIcon size={9} /> Vérifié
                      </span>
                    )}
                  </p>
                  <p className="text-[10.5px] text-muted">{r.when}</p>
                </div>
                <span className="flex items-center gap-1 text-[15px] font-black text-magenta">
                  {r.note} <StarIcon size={13} />
                </span>
              </div>
              <p className="text-[12.5px] leading-relaxed text-white/80">{r.text}</p>
              <div className="flex items-center gap-4 text-[11.5px] text-white/65">
                <span className="flex items-center gap-1"><ThumbUpIcon size={13} /> {r.likes}</span>
                <span className="flex items-center gap-1"><MessageIcon size={13} /> {r.replies}</span>
                <MoreIcon size={16} className="ml-auto" />
              </div>
            </article>
          ))}
          <span className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-surface text-[13px] font-semibold">
            Charger plus d’avis <ChevronDownIcon size={15} />
          </span>
          <PrimaryButton className="mt-1"><PencilIcon size={15} /> Donner mon avis</PrimaryButton>
        </div>
      </section>
    </Screen>
  )
}
