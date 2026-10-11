import { BookmarkIcon, CalendarIcon, CheckIcon, ChevronDownIcon, ClockIcon, EyeIcon, StarIcon } from '../../ui/icons'
import { Field } from '../../ui/blocks'
import { PageHeader, Photo, PrimaryButton } from '../../ui/kit'

const statuses = [
  { l: 'En cours', Icon: EyeIcon, on: true },
  { l: 'Terminée', Icon: CheckIcon },
  { l: 'À voir', Icon: BookmarkIcon },
  { l: 'Abandonnée', Icon: ChevronDownIcon },
]
const seasons = [
  { n: 1, eps: 8, seen: 3, on: true },
  { n: 2, eps: 9, seen: 0 },
  { n: 3, eps: 8, seen: 0 },
  { n: 4, eps: 9, seen: 0 },
]

// Formulaire plein écran (sans barre d'onglets), boutons fixés en bas.
export function AddToLibraryScreen() {
  return (
    <div className="flex min-h-[844px] flex-col bg-ink text-white">
      <div className="flex-1 pb-6">
        <PageHeader overline="Ajouter à ma sériethèque" title="Stranger Things" />

        <section className="brand-card mx-5 mt-4 flex gap-3.5 rounded-[22px] border border-magenta/30 p-3.5">
          <div className="h-[96px] w-[70px] shrink-0 overflow-hidden rounded-xl"><Photo seed="stranger-poster" /></div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[16px] font-extrabold uppercase">Stranger Things</h2>
            <p className="flex flex-wrap gap-x-3 text-[11px] text-white/70">
              <span className="flex items-center gap-1"><StarIcon size={11} className="text-magenta" /> 4.7/5</span>
              <span className="flex items-center gap-1"><CalendarIcon size={11} /> 4 saisons</span>
              <span className="flex items-center gap-1"><ClockIcon size={11} /> Terminée</span>
            </p>
            <p className="text-[11.5px] text-white/60">34 épisodes au total · Par les frères Duffer</p>
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-2.5 px-5">
          <h3 className="text-[12px] font-extrabold uppercase">Statut</h3>
          <div className="grid grid-cols-4 gap-2">
            {statuses.map(({ l, Icon, on }) => (
              <span
                key={l}
                className={`flex h-[68px] flex-col items-center justify-center gap-1.5 rounded-2xl border text-[11px] font-semibold ${
                  on ? 'border-link bg-link/10 text-white' : 'border-line bg-surface text-white/70'
                }`}
              >
                <Icon size={18} className={on ? 'text-link' : ''} />
                {l}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-2.5 px-5">
          <h3 className="text-[12px] font-extrabold uppercase">Saisons sélectionnées</h3>
          <div className="grid grid-cols-2 gap-2">
            {seasons.map((s) => (
              <div key={s.n} className={`flex items-center gap-2.5 rounded-2xl border p-2.5 ${s.on ? 'border-link bg-link/10' : 'border-line bg-surface'}`}>
                <span className="h-11 w-9 shrink-0 overflow-hidden rounded-lg"><Photo seed={`season-${s.n}`} /></span>
                <div className="flex-1">
                  <p className="text-[13px] font-bold">Saison {s.n}</p>
                  <p className="text-[10.5px] text-muted">{s.eps} épisodes{s.on ? ` · ${s.seen}/${s.eps} vus` : ''}</p>
                </div>
                <span className={`flex size-5 items-center justify-center rounded-full border ${s.on ? 'border-link bg-link' : 'border-white/30'}`}>
                  {s.on && <CheckIcon size={11} />}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-2.5 px-5">
          <h3 className="text-[12px] font-extrabold uppercase">Ma note</h3>
          <div className="brand-card flex flex-col items-center gap-2 rounded-[20px] border border-line py-5">
            <span className="flex gap-3">
              {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={30} className="text-white/20" />)}
            </span>
            <span className="text-[12px] text-white/60">Touchez pour noter</span>
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-2.5 px-5">
          <h3 className="text-[12px] font-extrabold uppercase">Notes personnelles</h3>
          <Field placeholder="Ajoutez vos notes personnelles sur cette série…" tall />
        </section>
      </div>

      <div className="sticky bottom-0 grid grid-cols-[1fr_2fr] gap-2 border-t border-line bg-ink px-5 pt-3 pb-6">
        <span className="flex h-12 items-center justify-center rounded-full border border-line text-[13.5px] font-semibold">Annuler</span>
        <PrimaryButton>Ajouter à ma sériethèque</PrimaryButton>
      </div>
    </div>
  )
}
