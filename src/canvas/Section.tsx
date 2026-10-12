import type { ReactNode } from 'react'
import { FRAME_WIDTH } from './Frame'

type SectionProps = {
  letter: string
  title: string
  description?: string
  count: number
  children: ReactNode
}

// Un module = une grille de 4 écrans maximum par ligne, le reste passe en dessous.
// Largeur fixe (4 × 390 + 3 × 48 = 1 704 px) : tient dans une largeur d'import html.to.design de 1 920 px.
export const SCREENS_PER_ROW = 4

export function Section({ letter, title, description, count, children }: SectionProps) {
  return (
    <section className="flex w-max flex-col gap-8">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-[28px] font-extrabold tracking-tight text-neutral-950">
          {letter}. {title}
          <span className="ml-3 text-[18px] font-medium text-neutral-500">{count} écrans</span>
        </h1>
        {description && <p className="max-w-3xl text-[16px] text-neutral-500">{description}</p>}
      </div>
      <div
        className="grid items-start gap-x-12 gap-y-20"
        style={{ gridTemplateColumns: `repeat(${SCREENS_PER_ROW}, ${FRAME_WIDTH}px)` }}
      >
        {children}
      </div>
    </section>
  )
}
