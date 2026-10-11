import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { FRAME_HEIGHT, FRAME_WIDTH } from './Frame'

export type FocusItem = { code: string; label: string; full?: boolean; render: () => ReactNode }

type FocusViewProps = {
  items: FocusItem[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
}

// Vue agrandie d'un écran (icône ↗ sur un frame) : taille réelle, navigation ← → dans le module, Échap pour fermer.
export function FocusView({ items, index, onChange, onClose }: FocusViewProps) {
  const item = items[index]
  const prev = index > 0 ? index - 1 : null
  const next = index < items.length - 1 ? index + 1 : null

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && prev !== null) onChange(prev)
      if (e.key === 'ArrowRight' && next !== null) onChange(next)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [prev, next, onChange, onClose])

  return (
    <div data-toolbar data-overlay className="fixed inset-0 z-50 flex flex-col bg-neutral-900/85 backdrop-blur-sm" onClick={onClose}>
      <header
        className="flex items-center justify-between gap-4 px-6 py-3 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="truncate text-[15px]">
          <span className="font-semibold">{item.code}</span> · {item.label}
          <span className="ml-3 text-neutral-400">
            {index + 1} / {items.length}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <NavButton disabled={prev === null} onClick={() => prev !== null && onChange(prev)} label="Écran précédent (←)">←</NavButton>
          <NavButton disabled={next === null} onClick={() => next !== null && onChange(next)} label="Écran suivant (→)">→</NavButton>
          <NavButton onClick={onClose} label="Fermer (Échap)">✕</NavButton>
        </div>
      </header>
      <div className="flex-1 overflow-auto px-6 pb-10">
        <div
          className="mx-auto overflow-hidden rounded-sm bg-black text-white shadow-2xl"
          style={{ width: FRAME_WIDTH, height: item.full ? undefined : FRAME_HEIGHT, minHeight: FRAME_HEIGHT }}
          onClick={(e) => e.stopPropagation()}
        >
          {item.render()}
        </div>
      </div>
    </div>
  )
}

function NavButton({ children, onClick, label, disabled = false }: { children: ReactNode; onClick: () => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-10 items-center justify-center rounded-full bg-white/10 text-[16px] hover:bg-white/20 disabled:opacity-30"
    >
      {children}
    </button>
  )
}
