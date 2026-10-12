import {
  AwardIcon,
  CalendarIcon,
  ClockIcon,
  ExternalIcon,
  EyeIcon,
  HeartIcon,
  MessageIcon,
  PlayIcon,
  ShareIcon,
  StarIcon,
  TrendingIcon,
  TvIcon,
  ZapIcon,
} from '../../ui/icons'
import { Avatar, Badge, Chip, PageHeader, Photo, PrimaryButton, Rail, Screen, SectionTitle } from '../../ui/kit'
import { CastCard, cast } from './shared'

const reasons = [
  { Icon: TrendingIcon, v: '94%', l: 'des fans de vos genres préférés aiment cette série' },
  { Icon: StarIcon, v: '9.2', l: 'note moyenne par la communauté' },
  { Icon: AwardIcon, v: '39', l: 'récompenses dont Emmys et SAG Awards' },
  { Icon: ZapIcon, v: 'Top 10', l: 'des séries les plus marathonées' },
]
const platforms = [
  { name: 'Netflix', info: '4K HDR · Inclus', color: 'text-red-500' },
  { name: 'Prime Video', info: 'HD · Location 2,99 €', color: 'text-sky-400' },
  { name: 'Disney+', info: '4K · Inclus avec Star', color: 'text-blue-500' },
  { name: 'Canal+', info: 'HD · Inclus', color: 'text-purple-400' },
  { name: 'Apple TV+', info: '4K · Location 2,99 €', color: 'text-white' },
  { name: 'OCS', info: 'HD · Inclus', color: 'text-yellow-400' },
]
const social = [
  { name: 'Sarah', act: 'En train de regarder S1E3' },
  { name: 'Mike', act: 'A terminé la saison 2' },
  { name: 'Lucas', act: 'En train de regarder S1E1' },
]
const infos = [
  ['Statut', 'Terminée'],
  ['Saisons', '4'],
  ['Épisodes', '34'],
  ['Durée moyenne', '42-76 min'],
  ['Créateurs', 'Matt Duffer, Ross Duffer'],
  ['Note publique', '9.2/10'],
  ['Note SA', '8.7/10'],
]

export function WatchScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Regarder la série" title="Stranger Things" />

      {/* Hero */}
      <section className="mt-4 flex gap-4 px-5">
        <div className="h-[170px] w-[115px] shrink-0 overflow-hidden rounded-2xl">
          <Photo seed="stranger-poster" />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex flex-wrap gap-1.5 text-[10px] font-bold uppercase">
            <Badge tone="magenta">Terminée</Badge>
            <span className="text-white/70">2016 · 2025 · 16+</span>
          </div>
          <h1 className="text-[24px] leading-none font-black uppercase">Stranger Things</h1>
          <p className="text-[11px] text-muted">Série américaine</p>
          <div className="flex flex-wrap gap-1.5">
            {['Science-fiction', 'Drame', 'Thriller', 'Mystère'].map((g) => (
              <Chip key={g} small>{g}</Chip>
            ))}
          </div>
        </div>
      </section>
      <p className="mt-4 px-5 text-[13px] leading-relaxed text-white/80">
        À Hawkins, dans les années 80, la disparition d’un jeune garçon révèle une dimension parallèle terrifiante, des
        expériences secrètes du gouvernement et une jeune fille aux pouvoirs télékinétiques.
      </p>
      <div className="mt-4 flex gap-2 px-5">
        <PrimaryButton className="flex-1"><PlayIcon size={14} /> Lancer S1E1</PrimaryButton>
        <span className="flex size-12 items-center justify-center rounded-full border border-line bg-surface"><ShareIcon size={18} /></span>
        <span className="flex size-12 items-center justify-center rounded-full border border-line bg-surface"><HeartIcon size={18} /></span>
      </div>

      {/* Prochain épisode */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Prochain épisode" action="Tous les épisodes" />
        <div className="mx-5 overflow-hidden rounded-[22px] border border-line bg-surface">
          <div className="relative h-[170px]">
            <Photo seed="s1e1" className="opacity-70" />
            <span className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-white text-ink">
              <PlayIcon size={20} />
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink to-transparent p-3">
              <p className="text-[10.5px] font-bold text-link">S1 E1</p>
              <p className="text-[15px] font-extrabold">La Disparition de Will Byers</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <p className="flex gap-3 text-[11.5px] text-muted">
              <span className="flex items-center gap-1"><ClockIcon size={12} className="text-link" /> 42 min</span>
              <span className="flex items-center gap-1"><CalendarIcon size={12} className="text-link" /> 15 juillet 2016</span>
            </p>
            <p className="text-[12.5px] leading-relaxed text-white/75">
              Will Byers disparaît mystérieusement après une partie de Donjons et Dragons avec ses amis. Sa mère et le
              shérif Hopper entament les recherches.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <span className="brand-gradient flex h-11 items-center justify-center gap-2 rounded-full text-[13px] font-bold"><PlayIcon size={12} /> Regarder</span>
              <span className="flex h-11 items-center justify-center gap-2 rounded-full border border-line text-[13px] font-semibold"><EyeIcon size={14} /> Vu plus tard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi regarder */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Pourquoi regarder cette série ?" />
        <div className="grid grid-cols-2 gap-2.5 px-5">
          {reasons.map(({ Icon, v, l }) => (
            <div key={v} className="flex flex-col items-center gap-1.5 rounded-2xl border border-line bg-surface p-3.5 text-center">
              <span className="flex size-9 items-center justify-center rounded-full bg-ink/60"><Icon size={16} className="text-magenta" /></span>
              <span className="text-[20px] font-black">{v}</span>
              <span className="text-[10.5px] leading-snug text-muted">{l}</span>
            </div>
          ))}
        </div>
        <div className="mx-5 flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-4">
          <p className="text-[11px] font-bold tracking-wide uppercase">Parce que vous aimez</p>
          <div className="flex flex-wrap gap-1.5">
            {['Dark', 'The OA', 'Yellowjackets', 'Doctor Who'].map((s) => (
              <Chip key={s} small>{s}</Chip>
            ))}
          </div>
          <p className="text-[11.5px] text-muted">Les utilisateurs qui ont aimé ces séries ont noté Stranger Things en moyenne 9.1/10.</p>
        </div>
      </section>

      {/* Où regarder */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Où regarder ?" action="Comparatif complet" />
        <div className="flex flex-col gap-2 px-5">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-ink/60"><TvIcon size={18} className={p.color} /></span>
              <div className="flex-1">
                <p className="text-[13.5px] font-bold">{p.name}</p>
                <p className="text-[11px] text-muted">{p.info}</p>
              </div>
              <ExternalIcon size={16} className="text-muted" />
            </div>
          ))}
          <p className="text-center text-[10.5px] text-muted">
            Disponibilité et tarifs susceptibles de varier selon votre région et vos abonnements actuels.
          </p>
        </div>
      </section>

      {/* Expérience sociale */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Expérience sociale" />
        <div className="mx-5 flex flex-col gap-2 rounded-[20px] border border-line bg-surface p-3">
          {social.map((s) => (
            <div key={s.name} className="flex items-center gap-3 rounded-2xl bg-ink/40 p-2.5">
              <span className="size-10 overflow-hidden rounded-full"><Photo seed={`friend-${s.name}`} /></span>
              <div className="flex-1">
                <p className="text-[13px] font-bold">{s.name}</p>
                <p className="text-[11px] text-muted">{s.act}</p>
              </div>
              <MessageIcon size={16} className="text-white/60" />
            </div>
          ))}
          <div className="mt-1 grid grid-cols-3 gap-2">
            {[['1.2K', 'En ligne'], ['45K', 'Fans'], ['8.7', 'Note SA']].map(([v, l]) => (
              <div key={l} className="flex flex-col items-center rounded-xl border border-line py-2">
                <span className="text-[16px] font-black">{v}</span>
                <span className="text-[9.5px] tracking-wide text-muted uppercase">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos série */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Infos série" />
        <div className="mx-5 flex flex-col rounded-[20px] border border-line bg-surface px-4 py-1">
          {infos.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-white/5 py-2.5 text-[12.5px] last:border-0">
              <span className="text-muted">{k}</span>
              <span className={`text-right font-semibold ${k.startsWith('Note') ? 'text-link' : ''}`}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Casting */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Casting principal" />
        <Rail>
          {cast.slice(0, 4).map((c) => (
            <CastCard key={c.name} {...c} />
          ))}
        </Rail>
      </section>

      {/* Avis */}
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Avis" action="Tous les avis" />
        <div className="flex flex-col gap-2 px-5">
          {[
            { who: 'Charlotte', note: '4.8/5', text: 'Un pilot parfait. L’ambiance des années 80, la tension et le mystère sont immédiatement présents.', likes: 142 },
            { who: 'Nadia', note: '4.5/5', text: 'Excellent premier épisode. Les jeunes acteurs sont incroyables et l’histoire accroche tout de suite.', likes: 89 },
          ].map((r) => (
            <div key={r.who} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-3.5">
              <div className="flex items-center gap-2.5">
                <Avatar initials={r.who[0]} size="size-8" />
                <div>
                  <p className="text-[12.5px] font-bold">{r.who}</p>
                  <p className="text-[10.5px] text-link">{r.note}</p>
                </div>
              </div>
              <p className="text-[12.5px] leading-relaxed text-white/80">{r.text}</p>
              <p className="flex gap-3 text-[11px] text-muted">
                <span className="flex items-center gap-1"><HeartIcon size={12} /> {r.likes}</span>
                <span>Répondre</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commencer maintenant */}
      <section className="brand-card mx-5 mt-7 flex flex-col gap-2 rounded-[22px] border border-magenta/30 p-4">
        <h3 className="text-[13px] font-extrabold uppercase">Commencer maintenant</h3>
        <p className="text-[12px] text-white/70">Vous avez 45 minutes devant vous ? Cet épisode est le parfait point de départ.</p>
        <PrimaryButton className="mt-1"><PlayIcon size={13} /> Lancer S1E1 · 42 min</PrimaryButton>
      </section>
    </Screen>
  )
}
