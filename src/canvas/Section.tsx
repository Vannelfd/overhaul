import type { ReactNode } from 'react'

type SectionProps = {
  letter: string
  title: string
  description?: string
  count: number
  children: ReactNode
}

// Un module = une ligne horizontale d'écrans (pas de retour à la ligne), comme sur une planche Figma.
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
      <div className="flex flex-nowrap items-start gap-12">{children}</div>
    </section>
  )
}
