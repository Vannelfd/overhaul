import type { ReactNode } from 'react'

// Frame d'écran mobile, comme un frame Figma : rectangle nu, sans coque de téléphone.
// - écran fixe : 390 × 844 (ce que l'utilisateur voit sans défiler)
// - écran complet (`full`) : 390 de large, hauteur = toute la page défilée (min 844)
export const FRAME_WIDTH = 390
export const FRAME_HEIGHT = 844

type FrameProps = {
  code: string
  label: string
  children: ReactNode
  dark?: boolean
  full?: boolean
  onExpand?: () => void
}

export function Frame({ code, label, children, dark = false, full = false, onExpand }: FrameProps) {
  return (
    <figure className="flex shrink-0 flex-col gap-3" style={{ width: FRAME_WIDTH }}>
      <figcaption className="flex items-center justify-between gap-3 text-[17px] text-neutral-600">
        <span className="truncate">
          <span className="font-semibold text-neutral-800">{code}</span> · {label}
        </span>
        {onExpand && (
          <button
            type="button"
            data-frame
            onClick={onExpand}
            title="Agrandir cet écran"
            aria-label={`Agrandir ${code}`}
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-300/60 hover:text-neutral-900"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>
        )}
      </figcaption>
      <div
        data-frame
        className={`relative overflow-hidden ${dark ? 'bg-black text-white' : 'bg-white text-neutral-900'}`}
        style={{ width: FRAME_WIDTH, height: full ? undefined : FRAME_HEIGHT, minHeight: FRAME_HEIGHT }}
      >
        {children}
      </div>
    </figure>
  )
}
