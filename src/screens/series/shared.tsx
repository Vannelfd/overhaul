import { Photo } from '../../ui/kit'

// Onglets de la fiche série (remplacent la barre d'onglets du web).
const seriesTabs = ['Saisons', 'News', 'Communauté', 'Avis', 'Trailers', 'Shop', 'Similaires']

export function SeriesTabs({ active }: { active: string }) {
  return (
    <div className="no-scrollbar flex gap-6 overflow-x-auto border-b border-line px-5">
      {seriesTabs.map((t) => (
        <span
          key={t}
          className={`relative flex h-12 shrink-0 items-center text-[12.5px] font-bold uppercase ${
            t === active ? 'text-white' : 'text-muted'
          }`}
        >
          {t}
          {t === active && <span className="brand-gradient absolute inset-x-0 bottom-0 h-0.5 rounded-full" />}
        </span>
      ))}
    </div>
  )
}

export const cast = [
  { name: 'Millie Bobby Brown', role: 'Eleven', kind: 'Actrice principale' },
  { name: 'Finn Wolfhard', role: 'Mike Wheeler', kind: 'Acteur principal' },
  { name: 'Winona Ryder', role: 'Joyce Byers', kind: 'Actrice principale' },
  { name: 'David Harbour', role: 'Jim Hopper', kind: 'Acteur principal' },
  { name: 'Gaten Matarazzo', role: 'Dustin Henderson', kind: 'Acteur principal' },
  { name: 'Caleb McLaughlin', role: 'Lucas Sinclair', kind: 'Acteur principal' },
]

export function CastCard({ name, role, kind }: { name: string; role: string; kind?: string }) {
  return (
    <div className="flex w-[118px] shrink-0 flex-col items-center gap-2 rounded-2xl border border-line bg-surface p-3 text-center">
      <span className="size-16 overflow-hidden rounded-full">
        <Photo seed={`cast-${name}`} />
      </span>
      <span className="text-[12px] leading-tight font-bold">{name}</span>
      <span className="text-[11px] text-link">{role}</span>
      {kind && <span className="text-[8.5px] font-semibold tracking-wider text-muted uppercase">{kind}</span>}
    </div>
  )
}

export function Emoji({ children, count }: { children: string; count?: number }) {
  return (
    <span className="flex h-10 min-w-10 items-center justify-center gap-1 rounded-full border border-line bg-surface px-2.5 text-[16px]">
      {children}
      {count !== undefined && <span className="text-[11px] font-semibold text-white/70">{count}</span>}
    </span>
  )
}
