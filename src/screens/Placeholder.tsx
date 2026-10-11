// Écran de démonstration : à remplacer par les vrais écrans traduits du Figma web.
export function Placeholder({ name }: { name: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
      <span className="text-lg font-semibold">{name}</span>
      <span className="text-sm text-neutral-400">Écran à concevoir</span>
    </div>
  )
}
