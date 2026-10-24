import { useState } from 'react'
import './app/screens.css'
import { JOURNEYS, MODULES } from './app/screens'
import { Canvas } from './canvas/Canvas'
import { FocusView } from './canvas/FocusView'
import type { FocusItem } from './canvas/FocusView'
import { Frame } from './canvas/Frame'
import { Section } from './canvas/Section'

// Écran HTML (généré dans app/screens.js). Par défaut affiché sur toute sa longueur (`full`) ;
// les écrans en superposition (panneau du bas, fil plein écran) gardent la taille d'un téléphone, 390 × 844.
const isFixed = (html: string) => html.includes('class="veil"') || html.includes('height:100%')
const phone = (html: string, full: boolean) => (
  <div className={full ? 'phone full' : 'phone'} dangerouslySetInnerHTML={{ __html: html }} />
)

const modules = MODULES.map(([letter, name, description, screens]) => ({
  letter,
  name,
  description,
  items: screens.map(([code, label, html]): FocusItem => {
    const full = !isFixed(html)
    return { code, label, full, render: () => phone(html, full) }
  }),
}))
const byCode = new Map(modules.flatMap((m) => m.items.map((item, index) => [item.code, { items: m.items, index }] as const)))

// `?section=C` n'affiche que le module C (pratique pour un import Figma partiel).
const only = new URLSearchParams(window.location.search).get('section')?.toUpperCase()
const visible = only ? modules.filter((m) => m.letter === only) : modules

function App() {
  const [focus, setFocus] = useState<{ items: FocusItem[]; index: number } | null>(null)
  const open = (code: string) => {
    const hit = byCode.get(code)
    if (hit) setFocus({ items: hit.items, index: hit.index })
  }

  return (
    <>
      <Canvas>
        <main className="board flex w-max flex-col gap-28 px-20 py-16">
          {!only && (
            <section className="flex w-[1704px] flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <h1 className="text-[28px] font-extrabold tracking-tight text-neutral-950">Parcours utilisateur</h1>
                <p className="text-[16px] text-neutral-500">
                  Les situations prévues par la cliente, dans son ordre. Touche un code pour voir l'écran.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                {JOURNEYS.map(([title, codes, steps]) => (
                  <div key={title} className="jr">
                    <div className="col g4">
                      <span className="b">{title}</span>
                      <span className="xs c-green b">{steps}</span>
                    </div>
                    <div className="row" style={{ flexWrap: 'wrap', gap: 6 }}>
                      {codes.map((code, i) => (
                        <span key={code} className="row g6">
                          {i > 0 && <span className="dim">→</span>}
                          <button type="button" className="code" data-frame onClick={() => open(code)}>
                            <b>{code}</b> {modules.flatMap((m) => m.items).find((it) => it.code === code)?.label}
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="jr">
                  <div className="col g4">
                    <span className="b">Sans créer de compte</span>
                    <span className="xs c-green b">Pour ne pas perdre les visiteurs venus de TikTok ou du site</span>
                  </div>
                  <span className="small muted">
                    Découvrir, rechercher, voir les fiches et jouer au quiz du jour sans s'inscrire. Le compte (A5) est
                    demandé seulement pour sauvegarder sa bibliothèque, synchroniser son historique ou utiliser les
                    fonctions sociales.
                  </span>
                </div>
              </div>
            </section>
          )}

          {visible.map((m) => (
            <Section key={m.letter} letter={m.letter} title={m.name} description={m.description} count={m.items.length}>
              {m.items.map((item, i) => (
                <Frame
                  key={item.code}
                  code={item.code}
                  label={item.label}
                  full={item.full}
                  dark
                  onExpand={() => setFocus({ items: m.items, index: i })}
                >
                  {item.render()}
                </Frame>
              ))}
            </Section>
          ))}
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
