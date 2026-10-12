import {
  AlertIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EyeIcon,
  FlameIcon,
  HeartIcon,
  MessageIcon,
  PlayIcon,
  SendIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '../../ui/icons'
import { Avatar, Badge, PageHeader, Photo, PrimaryButton, Screen, SectionTitle } from '../../ui/kit'
import { Emoji } from './shared'

const moments = [
  { by: 'Lucas', text: '« Elle ne répond plus. »', likes: 89 },
  { by: 'Nadia', text: 'La scène du dîner vers la fin.', likes: 134 },
  { by: 'Marc', text: 'Le flashback au labo.', likes: 67 },
  { by: 'Sarah', text: 'J’ai hurlé devant mon écran.', likes: 215 },
]

export function EpisodeScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Stranger Things · Saison 4" title="The Nina Project" />

      {/* Visuel épisode */}
      <section className="relative mx-5 mt-4 h-[220px] overflow-hidden rounded-[22px]">
        <Photo seed="nina-project" className="grayscale" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1.5">
          <Badge tone="magenta">S04E05</Badge>
          <h2 className="text-[22px] font-black uppercase">The Nina Project</h2>
          <p className="flex flex-wrap items-center gap-3 text-[11.5px] text-white/80">
            <span className="flex items-center gap-1"><ClockIcon size={12} className="text-link" /> 75 min</span>
            <span className="flex items-center gap-1"><CalendarIcon size={12} className="text-link" /> 27 mai 2022</span>
            <span className="flex items-center gap-1"><StarIcon size={12} className="text-magenta" /> 4.8/5 · 1243 votes</span>
          </p>
        </div>
      </section>

      {/* Actions principales */}
      <section className="brand-card mx-5 mt-4 flex flex-col gap-3 rounded-[22px] border border-magenta/30 p-4">
        <span className="flex h-12 items-center justify-center gap-2 rounded-full bg-white text-[14px] font-bold text-ink">
          <PlayIcon size={14} /> Lancer l’épisode
        </span>
        <div className="flex flex-col gap-2 text-[12.5px]">
          <div className="flex justify-between"><span className="text-white/70">Statut</span><span className="font-semibold text-link">Non vu</span></div>
          <div className="flex justify-between"><span className="text-white/70">Note communauté</span><span className="font-semibold text-link">4.8/5</span></div>
          <div className="flex justify-between"><span className="text-white/70">Votre note</span><span className="text-muted">Non noté</span></div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 text-[13px] font-semibold">
            <EyeIcon size={15} /> Marquer vu
          </span>
          <span className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 text-[13px] font-semibold">
            <ShareIcon size={15} /> Partager
          </span>
        </div>
      </section>

      {/* Synopsis */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Synopsis" />
        <div className="mx-5 flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-4">
          <p className="text-[13px] leading-relaxed text-white/80">
            Eleven tente de retrouver ses pouvoirs avec l’aide d’une ancienne figure de son passé, pendant qu’à Hawkins le
            groupe d’amis enquête sur une série d’événements troublants.
          </p>
          <span className="flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11.5px] font-semibold">
            <AlertIcon size={13} className="text-magenta" /> Afficher les spoilers
          </span>
        </div>
      </section>

      {/* Après le visionnage */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Après le visionnage" />
        <div className="brand-card mx-5 flex flex-col gap-4 rounded-[20px] border border-line p-4">
          <p className="text-[14px] font-bold">Que pensez-vous de cet épisode ?</p>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-wider text-muted uppercase">Votre note</span>
            <span className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} size={28} className="text-white/20" />
              ))}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-wider text-muted uppercase">Réaction</span>
            <div className="flex gap-2">
              {['🔥', '😱', '😂', '❤️', '🤯', '👏'].map((e) => (
                <Emoji key={e}>{e}</Emoji>
              ))}
            </div>
          </div>
          <span className="flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 text-[12px] font-semibold">
            <HeartIcon size={14} /> Ajouter aux favoris
          </span>
          <div className="h-[84px] rounded-2xl border border-line bg-ink/40 p-3 text-[14px] text-muted">
            Écrivez votre commentaire ici…
          </div>
          <span className="flex h-11 items-center justify-center gap-2 rounded-full bg-white text-[13px] font-bold text-ink">
            <SendIcon size={14} /> Commenter
          </span>
        </div>
      </section>

      {/* Discussion */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Discussion épisode S04E05" />
        <div className="mx-5 flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-4">
          <div className="rounded-2xl bg-ink/50 p-3">
            <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-magenta uppercase">
              <FlameIcon size={12} /> Théorie populaire
            </p>
            <p className="mt-1.5 text-[13px] leading-snug font-semibold">
              « Le personnage de Henry Creel serait-il finalement le vrai instigateur de tout ce qui arrive à Hawkins depuis
              la saison 1 ? »
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px] text-white/70">
              <MessageIcon size={14} className="text-link" /> 542 commentaires
            </span>
            <span className="rounded-full border border-line px-3.5 py-2 text-[12px] font-semibold">Rejoindre la discussion</span>
          </div>
        </div>
      </section>

      {/* Moments mémorables */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Moments mémorables" />
        <div className="flex flex-col gap-2.5 px-5">
          <div className="flex gap-2">
            <span className="flex h-11 items-center rounded-full border border-line bg-surface px-3.5 text-[12.5px] text-white/80">
              Réaction
            </span>
            <span className="flex h-11 flex-1 items-center rounded-full border border-line bg-surface px-3.5 text-[13px] text-muted">
              Partagez un moment mémorable…
            </span>
            <span className="flex h-11 items-center rounded-full bg-white px-4 text-[12.5px] font-bold text-ink">Ajouter</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {moments.map((m) => (
              <div key={m.by} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-3">
                <span className="flex items-center gap-1.5 text-[10px]">
                  <Avatar initials={m.by[0]} size="size-6" />
                  <span className="font-bold text-link uppercase">Moment</span>
                  <span className="text-muted">par {m.by}</span>
                </span>
                <p className="text-[12.5px] leading-snug font-semibold">{m.text}</p>
                <span className="flex items-center gap-1 text-[11px] text-white/70">
                  <ThumbUpIcon size={12} /> {m.likes}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation entre épisodes */}
      <section className="mt-7 grid grid-cols-2 gap-2.5 px-5">
        <span className="flex h-14 items-center gap-2 rounded-2xl border border-line bg-surface px-3 text-[12px] font-semibold">
          <ChevronLeftIcon size={16} />
          <span className="leading-tight">Épisode<br />précédent</span>
        </span>
        <span className="flex h-14 items-center justify-end gap-2 rounded-2xl border border-line bg-surface px-3 text-right text-[12px] font-semibold">
          <span className="leading-tight">Épisode<br />suivant</span>
          <ChevronRightIcon size={16} />
        </span>
      </section>
      <div className="mx-5 mt-3">
        <PrimaryButton><PlayIcon size={14} /> Lancer l’épisode</PrimaryButton>
      </div>
    </Screen>
  )
}
