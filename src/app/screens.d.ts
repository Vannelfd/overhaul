// Types des données exportées par screens.js (écrans générés en HTML).
export type Priority = 'P1' | 'Éco'
export type ScreenDef = [code: string, label: string, html: string, priority: Priority]
export type ModuleDef = [letter: string, name: string, description: string, screens: ScreenDef[]]
export type JourneyDef = [title: string, codes: string[], steps: string]

export const MODULES: ModuleDef[]
export const JOURNEYS: JourneyDef[]
export const NAMES: Record<string, string>
