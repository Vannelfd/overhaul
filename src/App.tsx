import { useState } from 'react'
import { Canvas } from './canvas/Canvas'
import { FocusView } from './canvas/FocusView'
import type { FocusItem } from './canvas/FocusView'
import { Frame } from './canvas/Frame'
import { Section } from './canvas/Section'
import { sections } from './screens'

// Chaque module reçoit une lettre (A, B, C…) et chaque écran un code (A1, A2…).
const lettered = sections.map((section, i) => ({ ...section, letter: String.fromCharCode(65 + i) }))

// `?section=E` n'affiche que le module E (pratique pour un import Figma partiel).
const only = new URLSearchParams(window.location.search).get('section')?.toUpperCase()
const visible = only ? lettered.filter((s) => s.letter === only) : lettered

function App() {
  const [focus, setFocus] = useState<{ items: FocusItem[]; index: number } | null>(null)

  return (
    <>
      <Canvas>
        <main className="flex w-max flex-col gap-28 px-20 py-16">
          {visible.map((section) => {
            const items: FocusItem[] = section.screens.map((screen, i) => ({
              ...screen,
              code: `${section.letter}${i + 1}`,
            }))
            return (
              <Section
                key={section.letter}
                letter={section.letter}
                title={section.title}
                description={section.description}
                count={items.length}
              >
                {items.map((item, i) => (
                  <Frame
                    key={item.code}
                    code={item.code}
                    label={item.label}
                    full={item.full}
                    dark
                    onExpand={() => setFocus({ items, index: i })}
                  >
                    {item.render()}
                  </Frame>
                ))}
              </Section>
            )
          })}
        </main>
      </Canvas>

      {focus && (
        <FocusView
          items={focus.items}
          index={focus.index}
          onChange={(index) => setFocus({ ...focus, index })}
          onClose={() => setFocus(null)}
        />
      )}
    </>
  )
}

export default App
