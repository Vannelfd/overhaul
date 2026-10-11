import { HeartIcon, ImageIcon, LinkIcon, MessageIcon, SendIcon, ShareIcon, SmileIcon, TrendingIcon, UsersIcon } from '../../ui/icons'
import { Chip, PageHeader, Photo, Screen, SectionTitle } from '../../ui/kit'
import { SeriesTabs } from './shared'

const posts = [
  { user: 'ElevenFan', when: 'il y a 2 heures', title: 'Théories sur la fin de la saison 5', text: 'Je pense que le personnage de [SPOILER] va jouer un rôle crucial dans la bataille finale. Les indices dans la saison 4 sont trop importants pour être ignorés.', tags: ['#Théories', '#SPOILER', '#Saison5'], likes: 342, comments: 89, hot: true },
  { user: 'Hawkins1986', when: 'il y a 5 heures', title: 'Les références aux années 80 sont incroyables', text: 'J’adore comment les créateurs ont recréé l’ambiance des années 80. Le détail du centre commercial Starcourt est juste parfait !', tags: ['#Années80', '#Décors'], likes: 218, comments: 45 },
  { user: 'UpsideDown', when: 'il y a 8 heures', title: 'Vos persos préférés ?', text: 'Pour moi, c’est Steve. Son évolution de l’ado insupportable au babysitter héroïque est l’une des meilleures arcs de la série.', tags: ['#Personnages', '#Discussion'], likes: 567, comments: 234, hot: true },
]
const rules = ['Respectez les autres membres', 'Utilisez les balises spoiler', 'Pas de spoilers sans avertissement', 'Restez sur le sujet de la série']

export function CommunityScreen() {
  return (
    <Screen tab="discover">
      <PageHeader
        overline="Communauté"
        title="Stranger Things"
        right={
          <span className="flex h-10 items-center gap-1.5 rounded-full bg-white px-3.5 text-[12px] font-bold text-ink">
            <UsersIcon size={14} /> Rejoindre
          </span>
        }
      />

      {/* Chiffres de la communauté */}
      <section className="relative mx-5 mt-4 h-[120px] overflow-hidden rounded-[22px] border border-line">
        <Photo seed="community-road" className="opacity-50" />
        <div className="absolute inset-0 flex items-center justify-between bg-linear-to-r from-ink/90 to-ink/30 px-4">
          <div>
            <p className="text-[28px] font-black">45.2K</p>
            <p className="text-[11px] text-white/70">membres</p>
            <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/80">
              <span className="size-2 rounded-full bg-green-500" /> 1247 en ligne
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] font-bold tracking-wide uppercase">Membres actifs</span>
            <span className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className="size-8 overflow-hidden rounded-full border-2 border-ink">
                  <Photo seed={`active-${n}`} />
                </span>
              ))}
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-ink bg-surface-2 text-[10px] font-bold">+42</span>
            </span>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <SeriesTabs active="Communauté" />
      </div>

      {/* Nouveau post */}
      <section className="brand-card mx-5 mt-4 flex flex-col gap-3 rounded-[22px] border border-line p-3.5">
        <div className="flex gap-2.5">
          <span className="size-9 shrink-0 overflow-hidden rounded-full"><Photo seed="me" /></span>
          <div className="h-[64px] flex-1 rounded-2xl bg-ink/40 p-3 text-[14px] text-muted">Lancer une discussion avec la communauté…</div>
        </div>
        <div className="flex items-center justify-between pl-11">
          <span className="flex gap-1 text-white/60">
            {[ImageIcon, LinkIcon, SmileIcon].map((Icon, i) => (
              <span key={i} className="flex size-10 items-center justify-center"><Icon size={18} /></span>
            ))}
          </span>
          <span className="flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[12.5px] font-bold text-ink">
            <SendIcon size={13} /> Publier
          </span>
        </div>
      </section>

      <div className="mt-4 flex gap-2 px-5">
        <Chip active>Tout</Chip>
        <Chip>Populaire</Chip>
        <Chip>Récent</Chip>
      </div>

      {/* Discussions */}
      <section className="mt-4 flex flex-col gap-3 px-5">
        {posts.map((p) => (
          <article key={p.user} className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-4">
            <div className="flex items-center gap-2.5">
              <span className="relative size-10 shrink-0">
                <span className="block size-10 overflow-hidden rounded-full"><Photo seed={`user-${p.user}`} /></span>
                {p.hot && (
                  <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-magenta">
                    <TrendingIcon size={9} />
                  </span>
                )}
              </span>
              <div>
                <p className="text-[13px] font-bold">{p.user}</p>
                <p className="text-[10.5px] text-muted">{p.when}</p>
              </div>
            </div>
            <h3 className="text-[14px] font-bold">{p.title}</h3>
            <p className="text-[12.5px] leading-relaxed text-white/75">{p.text}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Chip key={t} small>{t}</Chip>
              ))}
            </div>
            <div className="flex gap-5 pt-1 text-[12px] text-white/70">
              <span className="flex items-center gap-1.5"><HeartIcon size={15} /> {p.likes}</span>
              <span className="flex items-center gap-1.5"><MessageIcon size={15} /> {p.comments}</span>
              <span className="flex items-center gap-1.5"><ShareIcon size={15} /> Partager</span>
            </div>
          </article>
        ))}
      </section>

      {/* Règles */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Règles de la communauté" />
        <ol className="brand-card mx-5 flex flex-col gap-2.5 rounded-[20px] border border-line p-4">
          {rules.map((r, i) => (
            <li key={r} className="flex gap-2.5 text-[12.5px] text-white/85">
              <span className="font-bold text-magenta">{i + 1}.</span> {r}
            </li>
          ))}
        </ol>
      </section>
    </Screen>
  )
}
