import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

// Planche infinie façon Figma : une « caméra » (x, y, zoom) se déplace librement au-dessus des écrans.
// - molette : défiler (Maj + molette : horizontal) · glisser : déplacer · Ctrl/⌘ + molette ou pincement : zoomer
// - clavier : Ctrl +/− zoom · Ctrl 0 ou Maj 0 : 100 % · Maj 1 : tout voir (aucune barre d outils affichée)
// - `?export` : rendu normal sans caméra (DOM 1:1, sans barre d'outils) pour l'import html.to.design.

const MIN = 0.05
const MAX = 4
const STORAGE_KEY = 'overhaul-canvas-camera'
const clamp = (z: number) => Math.min(MAX, Math.max(MIN, z))

type Camera = { x: number; y: number; z: number }

const params = new URLSearchParams(window.location.search)
export const isExport = params.has('export')

function readCamera(): Camera {
  const fromUrl = Number(params.get('zoom'))
  if (fromUrl) return { x: 40, y: 40, z: clamp(fromUrl) }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') as Camera | null
    if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y) && saved.z) return { ...saved, z: clamp(saved.z) }
  } catch {
    /* stockage indisponible ou illisible : caméra par défaut */
  }
  return { x: 0, y: 0, z: 1 }
}

export function Canvas({ children }: { children: ReactNode }) {
  if (isExport) return <div className="min-h-screen w-max bg-neutral-200">{children}</div>
  return <InfiniteCanvas>{children}</InfiniteCanvas>
}

function InfiniteCanvas({ children }: { children: ReactNode }) {
  const [cam, setCam] = useState<Camera>(readCamera)
  const camRef = useRef(cam)
  const content = useRef<HTMLDivElement>(null)
  const viewport = useRef<HTMLDivElement>(null)

  useEffect(() => {
    camRef.current = cam
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cam))
    } catch {
      /* stockage indisponible : on ignore */
    }
  }, [cam])

  // Zoom en gardant le point (cx, cy) de l'écran immobile sous le curseur.
  const zoomAt = useCallback((next: number, cx = window.innerWidth / 2, cy = window.innerHeight / 2) => {
    setCam((c) => {
      const z = clamp(next)
      const k = z / c.z
      return { z, x: cx - (cx - c.x) * k, y: cy - (cy - c.y) * k }
    })
  }, [])

  // Cadre toute la planche au centre de la fenêtre.
  const fit = useCallback(() => {
    const el = content.current
    if (!el) return
    const w = el.offsetWidth
    const h = el.offsetHeight
    const z = clamp(Math.min((window.innerWidth - 80) / w, (window.innerHeight - 120) / h))
    setCam({ z, x: (window.innerWidth - w * z) / 2, y: Math.max(40, (window.innerHeight - h * z) / 2) })
  }, [])

  // Molette : défilement libre dans les deux axes ; Ctrl/⌘ (ou pincement du pavé tactile) : zoom.
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if ((e.target as HTMLElement).closest('[data-overlay]')) return
      e.preventDefault()
      if (e.ctrlKey || e.metaKey) {
        zoomAt(camRef.current.z * Math.exp(-e.deltaY * 0.0025), e.clientX, e.clientY)
        return
      }
      const dx = e.shiftKey && e.deltaX === 0 ? e.deltaY : e.deltaX
      const dy = e.shiftKey && e.deltaX === 0 ? 0 : e.deltaY
      setCam((c) => ({ ...c, x: c.x - dx, y: c.y - dy }))
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === '!' || e.code === 'Digit1')) return fit()
      if (e.shiftKey && (e.key === ')' || e.code === 'Digit0')) return zoomAt(1)
      if (!(e.ctrlKey || e.metaKey)) return
      if (e.key === '+' || e.key === '=') zoomAt(camRef.current.z * 1.25)
      else if (e.key === '-') zoomAt(camRef.current.z / 1.25)
      else if (e.key === '0') zoomAt(1)
      else return
      e.preventDefault()
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [zoomAt, fit])

  // Glisser (bouton gauche n'importe où, ou bouton du milieu) pour déplacer la planche.
  const drag = useRef<{ x: number; y: number; moved: boolean } | null>(null)
  const [grabbing, setGrabbing] = useState(false)

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, [data-toolbar]')) return
    if (e.button !== 0 && e.button !== 1) return
    drag.current = { x: e.clientX, y: e.clientY, moved: false }
    viewport.current?.setPointerCapture(e.pointerId)
    setGrabbing(true)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    const dy = e.clientY - d.y
    d.x = e.clientX
    d.y = e.clientY
    d.moved = true
    setCam((c) => ({ ...c, x: c.x + dx, y: c.y + dy }))
  }
  const onPointerUp = () => {
    drag.current = null
    setGrabbing(false)
  }

  const dot = 24 * cam.z

  return (
    <>
      <div
        ref={viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`fixed inset-0 overflow-hidden bg-neutral-200 select-none ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(0 0 0 / 0.13) 1px, transparent 1.2px)',
          backgroundSize: `${dot}px ${dot}px`,
          backgroundPosition: `${cam.x}px ${cam.y}px`,
          touchAction: 'none',
        }}
      >
        <div
          ref={content}
          className="absolute top-0 left-0 w-max origin-top-left will-change-transform"
          style={{ transform: `translate(${cam.x}px, ${cam.y}px) scale(${cam.z})` }}
        >
          {children}
        </div>
      </div>

    </>
  )
}

