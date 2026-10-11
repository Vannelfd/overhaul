import {
  AwardIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EyeIcon,
  FilmIcon,
  GlobeIcon,
  GridIcon,
  HeartIcon,
  ListIcon,
  LockIcon,
  PinIcon,
  PlayIcon,
  PlusIcon,
  SearchIcon,
  SortIcon,
  SparklesIcon,
  StarIcon,
  TrendingIcon,
  TvIcon,
  UserPlusIcon,
  UsersIcon,
} from '../../ui/icons'
import { MemberHeader, OutlinePill, Pill } from '../../ui/blocks'
import {
  Badge,
  Chip,
  IconButton,
  Overline,
  PageHeader,
  Photo,
  Progress,
  Rail,
  Rating,
  Screen,
  SectionTitle,
} from '../../ui/kit'

/* ---------- Fiche acteur ---------- */

const roles = [
  { t: 'The Last of Us', k: 'Série · 2025', r: 'Joel Miller', n: '5' },
  { t: 'The Mandalorian', k: 'Série · 2023', r: 'Din Djarin', n: '4.8' },
  { t: 'Gladiator II', k: 'Film · 2024', r: 'Marcus Acacius', n: '4.2' },
  { t: 'Wonder Woman 1984', k: 'Film · 2020', r: 'Maxwell Lord', n: '3.6' },
]
const filmo = [
  { t: 'Gladiator II', y: '2024', k: 'Film', r: 'Marcus Acacius' },
  { t: 'The Last of Us', y: '2023', k: 'Série', r: 'Joel Miller' },
  { t: 'The Unbearable Weight of Massive Talent', y: '2022', k: 'Film', r: 'Javi Gutierrez' },
  { t: 'The Mandalorian', y: '2019', k: 'Série', r: 'Din Djarin' },
  { t: 'Narcos', y: '2015', k: 'Série', r: 'Javier Peña' },
  { t: 'Game of Thrones', y: '2014', k: 'Série', r: 'Oberyn Martell' },
]
const characters = [
  { c: 'Joel Miller', s: 'The Last of Us', d: 'Survivant endurci qui protège Ellie à travers des États-Unis dévastés.' },
  { c: 'Din Djarin', s: 'The Mandalorian', d: 'Chasseur de primes solitaire lié par le Credo mandalorien.' },
  { c: 'Oberyn Martell', s: 'Game of Thrones', d: 'Prince de Dorne charismatique, guidé par la vengeance.' },
]
const awards = [
  ['2024', 'Emmy Awards', 'Nomination · Meilleur acteur dramatique'],
  ['2024', 'Golden Globes', 'Nomination · Meilleur acteur dramatique'],
  ['2023', 'SAG Awards', 'Nomination · Meilleur acteur'],
  ['2023', 'Critics Choice', 'Nomination · Meilleur acteur'],
  ['2022', 'Saturn Awards', 'Lauréat · Meilleur acteur TV'],
  ['2021', 'MTV Movie & TV Awards', 'Nomination · Meilleur héros'],
  ['2020', 'Gold Derby TV Awards', 'Nomination'],
  ['2019', 'Saturn Awards', 'Nomination'],
]

export function ActorScreen() {
  return (
    <Screen tab="discover">
      <section className="relative">
        <div className="absolute inset-0 h-[360px]">
          <Photo seed="pedro-pascal" className="opacity-60" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/30 to-ink" />
        </div>
        <div className="relative px-5 pt-4">
          <div className="flex justify-between">
            <IconButton className="bg-ink/50"><ChevronLeftIcon size={20} /></IconButton>
            <IconButton className="bg-ink/50"><HeartIcon size={18} /></IconButton>
          </div>
          <div className="mt-[170px] flex flex-col gap-2">
            <Overline className="text-white/70">Acteur · Réalisateur · Producteur</Overline>
            <h1 className="text-[34px] leading-none font-black">Pedro Pascal</h1>
            <p className="text-[12.5px] text-white/70">José Pedro Balmaceda Pascal · 50 ans</p>
          </div>
        </div>
      </section>
      <div className="mt-4 flex flex-wrap gap-1.5 px-5">
        <Chip small icon={<CalendarIcon size={11} />}>2 avril 1975</Chip>
        <Chip small icon={<PinIcon size={11} />}>Santiago, Chili</Chip>
        <Chip small>1,80 m</Chip>
        <Chip small icon={<GlobeIcon size={11} />}>Chilien / Américain</Chip>
        <Chip small>Anglais, Espagnol</Chip>
      </div>
      <p className="mt-4 px-5 text-[13px] leading-relaxed text-white/75">
        Révélé au grand public par le rôle d’Oberyn Martell dans Game of Thrones, Pedro Pascal s’est imposé comme l’un des
        visages incontournables des séries avec Narcos, The Mandalorian puis The Last of Us…{' '}
        <span className="inline-flex items-center gap-0.5 font-semibold text-link">Biographie complète <ChevronDownIcon size={13} /></span>
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2 px-5">
        {[['27', 'années de carrière'], ['38', 'films'], ['24', 'séries'], ['315', 'épisodes joués'], ['8', 'récompenses'], ['31', 'nominations']].map(([v, l]) => (
          <div key={l} className="rounded-2xl border border-line bg-surface p-3 text-center">
            <p className="brand-text text-[20px] font-black">{v}</p>
            <p className="text-[10px] leading-tight text-muted">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2 px-5">
        {['Instagram', 'X', 'TikTok'].map((s) => <Chip key={s} small>{s}</Chip>)}
      </div>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Derniers rôles" action="Tout voir" />
        <Rail>
          {roles.map((r) => (
            <div key={r.t} className="w-[140px] shrink-0">
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <Photo seed={`role-${r.t}`} />
                <span className="absolute top-2 right-2 rounded-full bg-ink/70 px-1.5 py-0.5"><Rating value={r.n} className="text-[10px]" /></span>
              </div>
              <p className="mt-1.5 text-[12.5px] font-bold">{r.t}</p>
              <p className="text-[10.5px] text-muted">{r.k}</p>
              <p className="text-[10.5px] text-link">{r.r}</p>
            </div>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Filmographie" />
        <Rail gap="gap-2">
          {['Tout', 'Films', 'Séries', 'Animation', 'Documentaires', 'Apparitions', 'Production', 'Réalisation'].map((f, i) => (
            <Chip key={f} small active={i === 0}>{f}</Chip>
          ))}
        </Rail>
        <p className="flex items-center gap-1.5 px-5 text-[11.5px] text-white/70"><SortIcon size={13} /> Trier par : <b className="text-white">Plus récent</b></p>
        <div className="flex flex-col gap-2 px-5">
          {filmo.map((f) => (
            <div key={f.t} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
              <span className="h-[60px] w-[44px] shrink-0 overflow-hidden rounded-lg"><Photo seed={`filmo-${f.t}`} /></span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-bold">{f.t}</p>
                <p className="text-[11px] text-muted">{f.y} · {f.k}</p>
                <p className="text-[11px] text-link">{f.r}</p>
              </div>
              {f.k === 'Série' ? <TvIcon size={16} className="text-white/50" /> : <FilmIcon size={16} className="text-white/50" />}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Personnages emblématiques" />
        <Rail>
          {characters.map((c) => (
            <article key={c.c} className="relative h-[220px] w-[200px] shrink-0 overflow-hidden rounded-[20px]">
              <Photo seed={`char-${c.c}`} />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="text-[15px] font-black uppercase">{c.c}</p>
                <p className="text-[11px] text-link">{c.s}</p>
                <p className="mt-1 text-[11px] leading-snug text-white/70">{c.d}</p>
              </div>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Actualités" action="Toutes" />
        <Rail>
          {['Pedro Pascal rejoint un nouveau projet HBO', 'The Last of Us : le tournage de la saison 3 commence', 'Retour sur une carrière hors norme'].map((t) => (
            <article key={t} className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="h-[110px]"><Photo seed={`pp-news-${t}`} /></div>
              <p className="line-clamp-2 p-3 text-[12.5px] font-bold">{t}</p>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Vidéos" />
        <Rail>
          {[['Interview Cannes 2024', '1.2M vues', '8:12'], ['Bande-annonce The Last of Us S2', '12M vues', '2:31'], ['Making-of The Mandalorian', '890K vues', '6:40']].map(([t, v, d]) => (
            <div key={t} className="w-[190px] shrink-0">
              <div className="relative h-[106px] overflow-hidden rounded-xl">
                <Photo seed={`pp-vid-${t}`} />
                <span className="absolute right-1.5 bottom-1.5"><Badge>{d}</Badge></span>
                <span className="absolute inset-0 m-auto flex size-9 items-center justify-center rounded-full bg-ink/60"><PlayIcon size={12} /></span>
              </div>
              <p className="mt-1.5 text-[12.5px] font-bold">{t}</p>
              <p className="text-[10.5px] text-muted">{v}</p>
            </div>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Récompenses & nominations" />
        <div className="mx-5 flex flex-col border-l border-magenta/40 pl-4">
          {awards.map(([y, a, d], i) => (
            <div key={i} className="relative pb-4">
              <span className="absolute top-1 -left-[21px] flex size-2.5 rounded-full bg-magenta" />
              <p className="text-[11px] font-bold text-link">{y}</p>
              <p className="flex items-center gap-1.5 text-[13px] font-bold"><AwardIcon size={13} className="text-yellow-400" /> {a}</p>
              <p className="text-[11.5px] text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Membres ---------- */

const toFollow = [
  { n: 'Sophie Martin', h: '@sophiem', b: 'Top watcher', act: 'A noté Fallout 4.5/5', s: [184, 1280, 236], w: 'Severance', e: 'S2 · Épisode 4' },
  { n: 'Maya Johnson', h: '@mayaj', b: 'Critique active', act: 'A ajouté The Last of Us à sa liste', s: [96, 842, 120], w: 'Silo', e: 'S1 · Épisode 8' },
  { n: 'Nathan Cole', h: '@nathanc', b: 'Binge master', act: 'A terminé The Bear', s: [231, 460, 318], w: 'Dark Matter', e: 'S1 · Épisode 6' },
  { n: 'Inès Laurent', h: '@ineslaurent', b: 'Édito lover', act: 'A publié une critique sur Bridgerton', s: [122, 1550, 201], w: 'Bridgerton', e: 'S3 · Épisode 2' },
]
const community = [
  { n: 'Sophie Martin', h: '@sophiem', g: 'Drame', c: 'Severance', b: 'Top watcher' },
  { n: 'Maya Johnson', h: '@mayaj', g: 'Sci-fi', c: 'Silo', b: 'Critique active' },
  { n: 'Nathan Cole', h: '@nathanc', g: 'Thriller', c: 'Dark Matter', b: 'Binge master' },
  { n: 'Inès Laurent', h: '@ineslaurent', g: 'Romance', c: 'Bridgerton', b: 'Édito lover' },
  { n: 'Leo Park', h: '@leopark', g: 'Fantasy', c: 'The Witcher', b: 'Community pick' },
  { n: 'Aya Mendes', h: '@ayam', g: 'Mystère', c: 'From', b: 'New favorite' },
  { n: 'Julien Roy', h: '@julienroy', g: 'Crime', c: 'Bosch', b: 'Top ratings' },
  { n: 'Elena Scott', h: '@elena', g: 'Action', c: 'Reacher', b: 'Rising member' },
]

export function MembersScreen() {
  return (
    <Screen tab="profile">
      <PageHeader overline="Espace communauté" title="Les membres" />
      <div className="flex flex-col gap-3 px-5 pt-5">
        <h1 className="text-[30px] leading-none font-black uppercase">Les <span className="hero-text">membres</span></h1>
        <p className="text-[12.5px] leading-relaxed text-white/70">
          Découvre les profils les plus actifs, suis leur progression, retrouve leurs coups de cœur et explore les séries à
          travers l’activité de la communauté.
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Chip small>+25k membres</Chip>
          <Chip small>Activité sociale</Chip>
          <Chip small>Progression & listes</Chip>
        </div>
        <div className="brand-gradient rounded-full p-px">
          <div className="flex h-12 items-center gap-2 rounded-full bg-surface pr-1.5 pl-4">
            <SearchIcon size={18} className="text-link" />
            <span className="flex-1 truncate text-[15px] text-muted">Un membre, un pseudo…</span>
            <Pill light className="h-9">Chercher</Pill>
          </div>
        </div>
      </div>

      <article className="relative mx-5 mt-5 overflow-hidden rounded-[24px] border border-line">
        <div className="absolute inset-0"><Photo seed="members-cinema" className="opacity-35" /></div>
        <div className="relative flex flex-col gap-3 bg-linear-to-b from-ink/30 to-ink/90 p-4">
          <Badge><TrendingIcon size={10} className="mr-1" />Profil en vedette</Badge>
          <div className="flex items-center gap-3">
            <span className="size-14 overflow-hidden rounded-full border-2 border-magenta"><Photo seed="sophie" /></span>
            <div><p className="text-[18px] font-black uppercase">Sophie Martin</p><p className="text-[11.5px] text-white/60">@sophiem</p></div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[['Séries', '184'], ['Abonnés', '1280'], ['Genre', 'Drame']].map(([l, v]) => (
              <div key={l} className="rounded-xl border border-white/10 bg-ink/40 p-2.5">
                <p className="text-[9.5px] tracking-wider text-muted uppercase">{l}</p>
                <p className="text-[15px] font-bold">{v}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/40 p-3">
            <div><p className="text-[9.5px] tracking-wider text-muted uppercase">En ce moment</p><p className="text-[13px] font-bold">Severance</p><p className="text-[11px] text-white/60">S2 · Épisode 4</p></div>
            <span className="flex size-10 items-center justify-center rounded-full bg-white text-ink"><PlayIcon size={14} /></span>
          </div>
        </div>
      </article>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Membres à suivre" action="Tout voir" />
        <Rail>
          {toFollow.map((m) => (
            <article key={m.n} className="flex w-[250px] shrink-0 flex-col gap-3 rounded-[22px] border border-line bg-surface p-4">
              <div className="flex items-center justify-between">
                <Badge><TrendingIcon size={10} className="mr-1" />{m.b}</Badge>
                <HeartIcon size={16} className="text-white/60" />
              </div>
              <div className="flex items-center gap-3">
                <span className="size-12 overflow-hidden rounded-full"><Photo seed={`m-${m.n}`} /></span>
                <div><p className="text-[14px] font-black uppercase">{m.n}</p><p className="text-[11px] text-white/60">{m.h}</p></div>
              </div>
              <div className="rounded-xl border border-white/10 bg-ink/40 p-3">
                <p className="flex justify-between text-[9.5px] tracking-wider text-muted uppercase">Activité <span className="rounded-full bg-white/10 px-1.5 normal-case">Live</span></p>
                <p className="mt-1 text-[12px] font-semibold">{m.act}</p>
                <div className="mt-2 grid grid-cols-3 text-[10px]">
                  {['Séries', 'Abonnés', 'Suit'].map((l, i) => <div key={l}><p className="text-muted uppercase">{l}</p><p className="text-[13px] font-bold">{m.s[i]}</p></div>)}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div><p className="text-[9.5px] tracking-wider text-muted uppercase">Regarde</p><p className="text-[12.5px] font-bold">{m.w}</p><p className="text-[10.5px] text-white/60">{m.e}</p></div>
                <span className="text-[12px] font-semibold text-link">Voir le profil ›</span>
              </div>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Activité de la communauté" action="Toute l’activité" />
        <div className="flex flex-col gap-2 px-5">
          {community.map((m) => (
            <div key={m.n} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
              <span className="size-11 shrink-0 overflow-hidden rounded-full"><Photo seed={`m-${m.n}`} /></span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold uppercase">{m.n} <span className="font-normal text-muted normal-case">{m.h}</span></p>
                <p className="text-[11px] text-white/60">Genre favori <b className="text-white/90">{m.g}</b> · En cours <b className="text-white/90">{m.c}</b></p>
                <span className="mt-1 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[9.5px] font-semibold">{m.b}</span>
              </div>
              <IconButton className="size-10"><UserPlusIcon size={16} /></IconButton>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between px-5">
          <span className="flex gap-1.5 text-[12px] font-bold">
            {['1', '2', '3', '…', '331'].map((p, i) => (
              <span key={p} className={`flex size-9 items-center justify-center rounded-full ${i === 0 ? 'bg-white text-ink' : 'border border-line'}`}>{p}</span>
            ))}
          </span>
          <span className="flex gap-1.5"><IconButton className="size-9"><ChevronLeftIcon size={15} /></IconButton><IconButton className="size-9"><ChevronRightIcon size={15} /></IconButton></span>
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Profil d'un autre membre (sériethèque + listes) ---------- */

const memberShows = [
  { t: 'Breaking Bad', s: 'Terminée', n: 5, when: 'Il y a 2 semaines' },
  { t: 'The Crown', s: 'En cours', n: 4, when: 'Hier', p: 60, ep: '36/60' },
  { t: 'Dark', s: 'Terminée', n: 5, when: 'Il y a 1 mois' },
  { t: 'Stranger Things', s: 'En cours', when: 'Aujourd’hui', p: 45, ep: '15/34' },
  { t: 'Succession', s: 'À voir' },
  { t: 'Fleabag', s: 'Terminée', n: 4, when: 'Il y a 3 mois' },
]
const memberLists = [
  { t: 'Coups de cœur', d: 'Mes séries préférées, celles qui m’ont marqué à vie.', n: 12, l: 45, pub: true },
  { t: 'À voir absolument', d: 'Les séries que je dois regarder prochainement.', n: 28, l: 23, pub: true },
  { t: 'Science-Fiction', d: 'Toutes mes séries de SF regroupées ici.', n: 15, l: 0, pub: false },
  { t: 'Drames historiques', d: 'Les plus belles fresques historiques.', n: 8, l: 16, pub: true },
]

export function MemberProfileScreen() {
  return (
    <Screen tab="profile">
      <MemberHeader overline="Sériethèque de" name="Alexandre Martin" initials="AM" />
      <div className="mt-4 flex gap-2 px-5">
        <Pill className="flex-1"><UserPlusIcon size={15} /> Ajouter en ami</Pill>
        <OutlinePill className="flex-1"><UsersIcon size={15} /> Suivre</OutlinePill>
      </div>
      <div className="mx-5 mt-4 grid grid-cols-3 divide-x divide-line rounded-[20px] border border-line bg-surface py-3 text-center">
        {[['127', 'Séries'], ['2847', 'Épisodes'], ['2022', 'Membre depuis']].map(([v, l]) => (
          <div key={l}><p className="text-[20px] font-black">{v}</p><p className="text-[10.5px] text-muted">{l}</p></div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between pr-5">
        <Rail gap="gap-2">
          <Chip small active count={127}>Tout</Chip>
          <Chip small count={34}>En cours</Chip>
          <Chip small count={67}>Terminées</Chip>
          <Chip small count={26}>À voir</Chip>
        </Rail>
      </div>
      <div className="mt-2 flex justify-end gap-1.5 px-5">
        <IconButton className="size-9"><SearchIcon size={15} /></IconButton>
        <IconButton className="size-9 border-white/30"><GridIcon size={15} /></IconButton>
        <IconButton className="size-9"><ListIcon size={15} /></IconButton>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2.5 px-5">
        {memberShows.map((s) => (
          <div key={s.t} className="overflow-hidden rounded-[16px] border border-line bg-surface">
            <div className="relative h-[150px]">
              <Photo seed={`ms-${s.t}`} />
              <span className="absolute top-1.5 left-1.5"><Badge>{s.s}</Badge></span>
              {s.p !== undefined && (
                <div className="absolute inset-x-1.5 bottom-1.5">
                  <p className="flex justify-between text-[9px] font-bold"><span>{s.p}%</span><span>{s.ep}</span></p>
                  <Progress value={s.p} />
                </div>
              )}
            </div>
            <div className="p-2">
              <p className="truncate text-[11.5px] font-bold">{s.t}</p>
              <p className="flex justify-between text-[9.5px] text-muted">
                {s.n ? <span className="flex items-center gap-0.5"><StarIcon size={9} className="text-magenta" />{s.n}</span> : <span>Non noté</span>}
                <span className="truncate">{s.when ?? '—'}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 px-5"><OutlinePill>Voir plus de séries ›</OutlinePill></div>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="4 listes" />
        <div className="grid grid-cols-2 gap-2.5 px-5">
          {memberLists.map((l) => (
            <article key={l.t} className="overflow-hidden rounded-[18px] border border-line bg-surface">
              <div className="relative grid h-[80px] grid-cols-3">
                {[1, 2, 3].map((n) => <Photo key={n} seed={`ml-${l.t}-${n}`} />)}
                <span className="absolute top-1.5 left-1.5 flex size-6 items-center justify-center rounded-full bg-ink/70">
                  {l.pub ? <GlobeIcon size={11} /> : <LockIcon size={11} />}
                </span>
              </div>
              <div className="flex flex-col gap-1 p-3">
                <p className="text-[12.5px] font-bold">{l.t}</p>
                <p className="line-clamp-2 text-[10.5px] text-white/60">{l.d}</p>
                <p className="flex justify-between text-[10px] text-muted"><span>{l.n} séries</span><span className="flex items-center gap-0.5"><HeartIcon size={10} />{l.l}</span></p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Activité récente" action="Historique" />
        <div className="flex flex-col gap-2 px-5">
          {[['Breaking Bad', 'S03E07', '22h15'], ['The Bear', 'S02E05', '21h40'], ['Dark', 'S01E03', '20h00']].map(([t, e, h]) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-magenta/20"><EyeIcon size={15} className="text-magenta" /></span>
              <div className="flex-1"><p className="text-[13px] font-bold">{t}</p><p className="text-[11px] text-link">{e}</p></div>
              <span className="flex items-center gap-1 text-[11px] text-muted"><ClockIcon size={11} /> {h}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-6 px-5"><Chip small icon={<SparklesIcon size={11} />}>12 séries en commun avec vous</Chip></div>
      <div className="mt-3 px-5"><OutlinePill><PlusIcon size={14} /> Comparer nos sériethèques</OutlinePill></div>
    </Screen>
  )
}
