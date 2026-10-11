import type { ReactNode } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CompassIcon,
  HomeIcon,
  MenuIcon,
  NewsIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
} from './icons'

// Composants communs aux écrans SerieAddict.

export function Logo({ className = 'text-[17px]' }: { className?: string }) {
  return (
    <span className={`font-black tracking-[0.12em] ${className}`}>
      SERIE<span className="brand-text">ADDICT</span>
    </span>
  )
}

// Photo d'illustration (à remplacer par les vrais visuels du Figma).
export function Photo({ seed, className = '' }: { seed: string; className?: string }) {
  return (
    <img
      src={`https://picsum.photos/seed/${seed}/600/800`}
      alt=""
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

export function Avatar({ initials, size = 'size-9' }: { initials: string; size?: string }) {
  return (
    <span
      className={`brand-gradient flex shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${size}`}
    >
      {initials}
    </span>
  )
}

// En-tête principal des onglets : menu · logo · avatar.
// `vip` : affiche le bouton « Devenez VIP » du header web.
export function TopBar({ vip = false }: { vip?: boolean }) {
  return (
    <header className="flex h-14 items-center justify-between px-5">
      <span className={`flex items-center justify-start ${vip ? 'w-[110px]' : 'size-11'}`}>
        <MenuIcon size={24} />
      </span>
      <Logo />
      <span className={`flex items-center justify-end gap-2 ${vip ? 'w-[110px]' : 'size-11'}`}>
        {vip && <span className="rounded-full border border-line px-2.5 py-1 text-[10.5px] font-semibold whitespace-nowrap">Devenez VIP</span>}
        <Avatar initials="C" size="size-8" />
      </span>
    </header>
  )
}

// En-tête d'écran secondaire : retour + sur-titre + titre.
export function PageHeader({ overline, title, right }: { overline: string; title: string; right?: ReactNode }) {
  return (
    <header className="flex items-center gap-3 px-5 pt-3">
      <IconButton>
        <ChevronLeftIcon size={20} />
      </IconButton>
      <div className="min-w-0 flex-1">
        <Overline>{overline}</Overline>
        <h1 className="truncate text-[17px] font-extrabold uppercase">{title}</h1>
      </div>
      {right}
    </header>
  )
}

export function Overline({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[10px] font-semibold tracking-[0.22em] text-muted uppercase ${className}`}>{children}</p>
}

export function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between gap-3 px-5">
      <h2 className="flex items-center gap-2.5 text-[13px] font-bold tracking-wide uppercase">
        <span className="h-3.5 w-px shrink-0 bg-magenta" />
        {title}
      </h2>
      {action && (
        <span className="flex shrink-0 items-center gap-0.5 text-[11px] font-semibold text-link">
          {action}
          <ChevronRightIcon size={13} />
        </span>
      )}
    </div>
  )
}

type ChipProps = { children: ReactNode; active?: boolean; icon?: ReactNode; small?: boolean; count?: number }

export function Chip({ children, active = false, icon, small = false, count }: ChipProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border font-semibold whitespace-nowrap ${
        small ? 'h-7 px-3 text-[11px]' : 'h-9 px-4 text-[12.5px]'
      } ${active ? 'border-magenta/70 bg-magenta-deep text-white' : 'border-line bg-surface text-white/85'}`}
    >
      {icon}
      {children}
      {count !== undefined && (
        <span className="rounded-full bg-white/10 px-1.5 text-[10px] text-white/70">{count}</span>
      )}
    </span>
  )
}

// Petit badge (plateforme, catégorie…) posé sur une image.
export function Badge({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'magenta' | 'light' }) {
  const tones = {
    dark: 'bg-ink/70 text-white',
    magenta: 'bg-magenta text-white',
    light: 'bg-white text-ink',
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function Rating({ value, className = '' }: { value: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[11.5px] font-bold ${className}`}>
      <StarIcon size={12} className="text-magenta" />
      {value}
    </span>
  )
}

export function SearchField({ placeholder, value }: { placeholder: string; value?: string }) {
  return (
    <div className="brand-gradient rounded-full p-px">
      <div className="flex h-12 items-center gap-3 rounded-full bg-surface px-5">
        <SearchIcon size={19} className="text-link" />
        <span className={`flex-1 truncate text-[16px] ${value ? 'text-white' : 'text-muted'}`}>{value ?? placeholder}</span>
      </div>
    </div>
  )
}

export function IconButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface ${className}`}
    >
      {children}
    </span>
  )
}

export function PrimaryButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`brand-gradient flex h-12 items-center justify-center gap-2 rounded-full px-5 text-[14px] font-bold whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  )
}

export function SecondaryButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 text-[14px] font-semibold ${className}`}
    >
      {children}
    </span>
  )
}

export function Progress({ value }: { value: number }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
      <div className="brand-gradient h-full rounded-full" style={{ width: `${value}%` }} />
    </div>
  )
}

// Emplacement publicitaire du Figma web.
export function AdSlot() {
  return (
    <div className="mx-5 flex h-[100px] items-center justify-center rounded-xl bg-neutral-400 text-[18px] font-black tracking-[0.3em] text-ink">
      PUB
    </div>
  )
}

// Ligne qui défile horizontalement (carrousel) avec la marge écran à gauche.
export function Rail({ children, gap = 'gap-3' }: { children: ReactNode; gap?: string }) {
  return <div className={`no-scrollbar flex overflow-x-auto px-5 ${gap}`}>{children}</div>
}

export type Tab = 'home' | 'discover' | 'calendar' | 'news' | 'profile'

const tabs: { id: Tab; label: string; Icon: typeof HomeIcon }[] = [
  { id: 'home', label: 'Accueil', Icon: HomeIcon },
  { id: 'discover', label: 'Découvrir', Icon: CompassIcon },
  { id: 'calendar', label: 'Calendrier', Icon: CalendarIcon },
  { id: 'news', label: 'News', Icon: NewsIcon },
  { id: 'profile', label: 'Profil', Icon: UserIcon },
]

export function TabBar({ active }: { active: Tab }) {
  return (
    <nav className="flex h-[64px] shrink-0 items-stretch border-t border-line bg-ink pb-1">
      {tabs.map(({ id, label, Icon }) => {
        const on = id === active
        return (
          <span
            key={id}
            className={`relative flex flex-1 flex-col items-center justify-center gap-1 text-[10.5px] font-semibold ${
              on ? 'text-white' : 'text-muted'
            }`}
          >
            {on && <span className="brand-gradient absolute top-0 h-0.5 w-8 rounded-full" />}
            <Icon size={22} className={on ? 'text-magenta' : ''} />
            {label}
          </span>
        )
      })}
    </nav>
  )
}

// Structure standard d'un écran : contenu + barre d'onglets en bas.
export function Screen({ children, tab }: { children: ReactNode; tab?: Tab }) {
  return (
    <div className="flex min-h-[844px] flex-col bg-ink text-white">
      <div className="relative flex-1 pb-8">{children}</div>
      {tab && <TabBar active={tab} />}
    </div>
  )
}
