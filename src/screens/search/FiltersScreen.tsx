import { XIcon } from '../../ui/icons'
import { Chip, PrimaryButton } from '../../ui/kit'
import { SearchScreen } from './SearchScreen'

const groups: { title: string; options: string[]; active: string[] }[] = [
  { title: 'Statut', options: ['En cours', 'Terminée', 'Annulée'], active: ['Terminée'] },
  { title: 'Année', options: ['2026', '2025', '2024', '2023', 'Plus ancienne'], active: [] },
  { title: 'Chaîne', options: ['ABC', 'CW', 'FOX', 'HBO', 'Netflix', 'Prime Video'], active: [] },
  { title: 'Tag', options: ['AppleTV+', 'Netflix', 'Marvel', 'Dystopie'], active: [] },
  { title: 'Genre', options: ['Drame', 'Action', 'Aventure', 'Médical', 'Thriller'], active: ['Action'] },
  { title: 'Nationalité', options: ['U.S.', 'Grande-Bretagne', 'Australie', 'France'], active: [] },
]

// La colonne de filtres du web devient un panneau qui monte du bas (bottom sheet).
export function FiltersScreen() {
  return (
    <div className="relative h-[844px] overflow-hidden">
      <SearchScreen />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="absolute inset-x-0 bottom-0 flex h-[86%] flex-col rounded-t-[28px] border-t border-line bg-surface text-white">
        <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-white/25" />
        <div className="flex items-center justify-between px-5 pt-3 pb-3">
          <span className="w-24 text-[12.5px] font-semibold text-link">Réinitialiser</span>
          <h2 className="text-[16px] font-extrabold uppercase">Filtres</h2>
          <span className="flex w-24 justify-end">
            <XIcon size={20} className="text-muted" />
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-5 overflow-hidden border-t border-line px-5 pt-4">
          {groups.map((g) => (
            <section key={g.title} className="flex flex-col gap-2.5">
              <h3 className="text-[11px] font-bold tracking-wider text-muted uppercase">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.options.map((o) => (
                  <Chip key={o} active={g.active.includes(o)}>
                    {o}
                  </Chip>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="border-t border-line bg-surface px-5 pt-3 pb-6">
          <PrimaryButton>Voir les 2 résultats</PrimaryButton>
        </div>
      </div>
    </div>
  )
}
