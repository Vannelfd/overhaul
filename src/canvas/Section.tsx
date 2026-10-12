import type { ReactNode } from 'react'

type SectionProps = {
  letter: string
  title: string
  description?: string
  count: number
  wrap?: boolean
  children: ReactNode
}

// Un module = une ligne horizontale d'écrans (pas de retour à la ligne), comme sur une planche Figma.
// `wrap` (mode export) : les écrans passent à la ligne pour tenir dans la largeur d'import de html.to.design.
export function Section({ letter, title, description, count, wrap = false, children }: SectionProps) {
  return (
    <section className={`flex flex-col gap-8 ${wrap ? 'w-full' : 'w-max'}`}>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-[28px] font-extrabold tracking-tight text-neutral-950">
          {letter}. {title}
          <span className="ml-3 text-[18px] font-medium text-neutral-500">{count} écrans</span>
        </h1>
        {description && <p className="max-w-3xl text-[16px] text-neutral-500">{description}</p>}
      </div>
      <div className={`flex items-start gap-12 ${wrap ? 'flex-wrap gap-y-20' : 'flex-nowrap'}`}>{children}</div>
    </section>
  )
}
