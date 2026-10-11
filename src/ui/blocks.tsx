import type { ReactNode } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, SparklesIcon, StarIcon } from './icons'
import { Badge, IconButton, Overline, Photo, Rating } from './kit'

// Blocs réutilisables pour les écrans SerieAddict (en plus de kit.tsx).

// Rangée d'onglets texte qui défile (fiche série, profil…).
export function TabsRow({ tabs, active }: { tabs: string[]; active: string }) {
  return (
    <div className="no-scrollbar flex gap-6 overflow-x-auto border-b border-line px-5">
      {tabs.map((t) => (
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

export const profileTabs = ['Feed', 'Sériethèque', 'Calendrier', 'À voir', 'Listes', 'Amis']

// Bandeau « hero » en dégradé avec chiffres clés et actions.
type HeroCardProps = {
  overline: string
  title: ReactNode
  text?: string
  stats?: [string, string][]
  children?: ReactNode
}

export function HeroCard({ overline, title, text, stats, children }: HeroCardProps) {
  return (
    <section className="brand-card mx-5 flex flex-col gap-3 rounded-[24px] border border-magenta/30 p-5">
      <Overline className="text-white/60">{overline}</Overline>
      <h1 className="text-[20px] leading-tight font-black uppercase">{title}</h1>
      {text && <p className="text-[12.5px] leading-relaxed text-white/70">{text}</p>}
      {stats && (
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}>
          {stats.map(([v, l]) => (
            <div key={l} className="flex flex-col rounded-2xl border border-white/10 bg-ink/30 p-2.5">
              <span className="text-[20px] font-black">{v}</span>
              <span className="text-[9px] leading-tight font-semibold tracking-wide text-white/60 uppercase">{l}</span>
            </div>
          ))}
        </div>
      )}
      {children && <div className="flex flex-wrap gap-2">{children}</div>}
    </section>
  )
}

// Bouton pilule compact (blanc ou dégradé).
export function Pill({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <span
      className={`flex h-10 items-center justify-center gap-1.5 rounded-full px-4 text-[12.5px] font-bold whitespace-nowrap ${
        light ? 'bg-white text-ink' : 'brand-gradient'
      } ${className}`}
    >
      {children}
    </span>
  )
}

export function OutlinePill({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`flex h-10 items-center justify-center gap-1.5 rounded-full border border-line bg-surface px-4 text-[12.5px] font-semibold whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  )
}

export function LoadMore({ children }: { children: ReactNode }) {
  return (
    <span className="mx-5 flex h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-surface text-[13px] font-semibold">
      {children} <ChevronDownIcon size={15} />
    </span>
  )
}

// Affiche de série (poster vertical) avec titre et méta.
type PosterProps = {
  seed: string
  title: string
  meta?: string
  rating?: string
  badge?: string
  className?: string
  height?: string
}

export function Poster({ seed, title, meta, rating, badge, className = 'w-[112px]', height = 'h-[160px]' }: PosterProps) {
  return (
    <div className={`flex shrink-0 flex-col gap-1.5 ${className}`}>
      <div className={`relative overflow-hidden rounded-2xl ${height}`}>
        <Photo seed={seed} />
        {badge && (
          <span className="absolute top-2 left-2">
            <Badge>{badge}</Badge>
          </span>
        )}
        {rating && (
          <span className="absolute top-2 right-2 rounded-full bg-ink/70 px-1.5 py-0.5">
            <Rating value={rating} className="text-[10px]" />
          </span>
        )}
      </div>
      <p className="truncate text-[12.5px] font-bold">{title}</p>
      {meta && <p className="-mt-1 truncate text-[10.5px] text-muted">{meta}</p>}
    </div>
  )
}

// Champ de formulaire.
type FieldProps = { label?: string; icon?: ReactNode; placeholder: string; right?: ReactNode; tall?: boolean }

export function Field({ label, icon, placeholder, right, tall = false }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      {label && <span className="text-[10px] font-bold tracking-[0.18em] text-muted uppercase">{label}</span>}
      <span
        className={`flex gap-3 rounded-2xl border border-line bg-surface-2 px-4 text-muted ${
          tall ? 'h-[100px] items-start pt-3.5' : 'h-[52px] items-center'
        }`}
      >
        {icon}
        <span className="flex-1 truncate text-[16px]">{placeholder}</span>
        {right}
      </span>
    </label>
  )
}

export function Checkbox({ checked = false, children }: { checked?: boolean; children: ReactNode }) {
  return (
    <span className="flex items-start gap-2.5 text-[12.5px] leading-snug text-white/80">
      <span
        className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-md border ${
          checked ? 'border-magenta bg-magenta' : 'border-white/40'
        }`}
      >
        {checked && <span className="size-2 rounded-sm bg-white" />}
      </span>
      <span>{children}</span>
    </span>
  )
}

// Logo « SERIES ADDICT » avec pictogramme (pages compte et informations).
export function BrandMark({ tagline = 'Discover · Track · Share' }: { tagline?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-10 items-center justify-center rounded-full border border-magenta/40 bg-surface">
        <SparklesIcon size={18} className="text-white" />
      </span>
      <span className="flex flex-col">
        <span className="brand-text text-[13px] font-black tracking-[0.22em] whitespace-nowrap">SERIES ADDICT</span>
        <span className="text-[8px] tracking-[0.2em] whitespace-nowrap text-muted uppercase">{tagline}</span>
      </span>
    </span>
  )
}

// En-tête des pages d'information : logo + action à droite.
export function InfoHeader({ right }: { right?: ReactNode }) {
  return (
    <header className="flex items-center justify-between px-5 pt-4">
      <BrandMark tagline="Le spécialiste des séries" />
      {right}
    </header>
  )
}

// En-tête membre : retour + avatar + sur-titre + nom.
export function MemberHeader({ overline, name, initials }: { overline: string; name: string; initials: string }) {
  return (
    <header className="flex items-center gap-3 px-5 pt-4">
      <IconButton>
        <ChevronLeftIcon size={20} />
      </IconButton>
      <span className="brand-gradient flex size-11 shrink-0 items-center justify-center rounded-full text-[14px] font-bold">
        {initials}
      </span>
      <div className="min-w-0">
        <Overline>{overline}</Overline>
        <p className="truncate text-[16px] font-black uppercase">{name}</p>
      </div>
    </header>
  )
}

export function Stars({ value = 0, size = 13 }: { value?: number; size?: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} size={size} className={i <= value ? 'text-yellow-400' : 'text-white/20'} />
      ))}
    </span>
  )
}

// Bandeau d'appel à l'action en grand dégradé (bas de page).
export function CtaBanner({ icon, title, text, action }: { icon?: ReactNode; title: string; text: string; action: string }) {
  return (
    <section className="brand-gradient mx-5 flex flex-col items-center gap-2 rounded-[24px] p-6 text-center">
      {icon && <span className="text-white/90">{icon}</span>}
      <h3 className="text-[16px] font-extrabold">{title}</h3>
      <p className="text-[12px] leading-relaxed text-white/80">{text}</p>
      <span className="mt-1 flex h-10 items-center rounded-full bg-white px-5 text-[12.5px] font-bold text-ink">{action}</span>
    </section>
  )
}
