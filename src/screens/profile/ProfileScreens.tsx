import {
  BookmarkIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  CrownIcon,
  EyeIcon,
  FilterIcon,
  HeartIcon,
  LayersIcon,
  ListIcon,
  MessageIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  SettingsIcon,
  StarIcon,
  TrendingIcon,
  TvIcon,
  UsersIcon,
} from '../../ui/icons'
import { HeroCard, OutlinePill, Pill, Poster, TabsRow, profileTabs } from '../../ui/blocks'
import {
  Avatar,
  Badge,
  Chip,
  IconButton,
  Overline,
  Photo,
  Progress,
  Rail,
  Rating,
  Screen,
  SearchField,
  SectionTitle,
  TopBar,
} from '../../ui/kit'

/* ---------- Profil (Feed) ---------- */

function ProfileHeader() {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 top-0 h-[150px] overflow-hidden">
        <Photo seed="profile-cover" className="opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-magenta/30 to-ink" />
      </div>
      <div className="relative flex flex-col items-center gap-2 px-5 pt-4 text-center">
        <div className="flex w-full justify-between">
          <span className="rounded-full bg-ink/60 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase">Membre actif · depuis 2022</span>
          <IconButton className="bg-ink/50"><SettingsIcon size={17} /></IconButton>
        </div>
        <span className="relative mt-4">
          <span className="block size-24 overflow-hidden rounded-full border-[3px] border-magenta"><Photo seed="charlotte" /></span>
          <span className="absolute -right-1 bottom-1 flex items-center gap-0.5 rounded-full bg-yellow-400 px-2 py-0.5 text-[10px] font-black text-ink"><CrownIcon size={10} />VIP</span>
        </span>
        <h1 className="text-[22px] font-black uppercase">Charlotte</h1>
        <p className="-mt-1 text-[12px] text-white/60">@charlotte</p>
        <p className="text-[12.5px] text-white/70">Ton QG séries : suis ta progression, tes envies et ta communauté.</p>
      </div>
      <div className="mx-5 mt-4 grid grid-cols-4 gap-2">
        {[['86', 'Séries suivies'], ['312', 'Épisodes vus'], ['19', 'Avis'], ['14', 'Amis']].map(([v, l]) => (
          <div key={l} className="rounded-2xl border border-line bg-surface py-2.5 text-center">
            <p className="text-[18px] font-black">{v}</p>
            <p className="text-[9px] leading-tight text-muted uppercase">{l}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProfileScreen() {
  return (
    <Screen tab="profile">
      <ProfileHeader />
      <div className="mt-4"><TabsRow tabs={profileTabs} active="Feed" /></div>

      <section className="brand-card mx-5 mt-5 flex flex-col gap-2 rounded-[22px] border border-magenta/30 p-4">
        <Overline>Actions rapides</Overline>
        {[
          [StarIcon, 'Noter des séries vues'],
          [CheckIcon, 'Mettre à jour mes épisodes'],
          [ListIcon, 'Créer une liste'],
        ].map(([I, l]) => {
          const Icon = I as typeof StarIcon
          return (
            <span key={l as string} className="flex h-11 items-center gap-3 rounded-xl bg-ink/40 px-3 text-[13px] font-semibold">
              <Icon size={16} className="text-magenta" /> {l as string}
            </span>
          )
        })}
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Mes derniers épisodes à voir" action="Tout" />
        <Rail>
          {[['Severance', 'S1 · E6'], ['The Bear', 'S2 · E2'], ['Stranger Things', 'S4 · E4']].map(([t, e]) => (
            <article key={t} className="w-[220px] shrink-0 overflow-hidden rounded-[20px] border border-line bg-surface">
              <div className="relative h-[110px]"><Photo seed={`tw-${t}`} /><span className="absolute top-2 left-2"><Badge tone="magenta">{e}</Badge></span></div>
              <div className="flex items-center gap-2 p-3">
                <p className="flex-1 truncate text-[13px] font-bold">{t}</p>
                <IconButton className="size-8"><CheckIcon size={14} /></IconButton>
                <IconButton className="size-8"><PencilIcon size={13} /></IconButton>
              </div>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Continuer à contribuer" />
        <div className="flex flex-col gap-2.5 px-5">
          {[['House of the Dragon', 'Donner une note', 'Écrire un avis'], ['The Boys', 'Mettre à jour', 'Ajouter à une liste']].map(([t, a, b]) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
              <span className="h-[64px] w-[46px] shrink-0 overflow-hidden rounded-lg"><Photo seed={`contrib-${t}`} /></span>
              <div className="flex flex-1 flex-col gap-2">
                <p className="text-[13px] font-bold">{t}</p>
                <div className="flex gap-1.5"><Chip small active>{a}</Chip><Chip small>{b}</Chip></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Dernières actus sur mes séries" action="Tout" />
        <Rail>
          {['Severance : la saison 3 confirmée', 'The Bear : premières images', 'Stranger Things : le final daté'].map((t) => (
            <article key={t} className="w-[210px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="h-[100px]"><Photo seed={`pn-${t}`} /></div>
              <p className="line-clamp-2 p-3 text-[12.5px] font-bold">{t}</p>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Vidéos de mes séries" />
        <Rail>
          {['Severance · Teaser', 'The Bear · Trailer', 'Silo · Extrait'].map((t) => (
            <div key={t} className="w-[180px] shrink-0">
              <div className="relative h-[100px] overflow-hidden rounded-xl"><Photo seed={`pv-${t}`} /><span className="absolute inset-0 m-auto flex size-9 items-center justify-center rounded-full bg-ink/60"><PlayIcon size={12} /></span></div>
              <p className="mt-1.5 text-[12px] font-bold">{t}</p>
            </div>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Séries similaires à mes séries" action="Recommandé" />
        <Rail>
          {['Dark', 'Silo', 'From', 'Mindhunter', 'Devs'].map((t) => <Poster key={t} seed={`psim-${t}`} title={t} />)}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Mon activité récente" />
        <div className="flex flex-col gap-2 px-5">
          {[[EyeIcon, 'Vous avez vu Severance S1E5', 'Il y a 2 h'], [StarIcon, 'Vous avez noté Dark 5/5', 'Hier'], [ListIcon, 'Liste « Mini-séries » mise à jour', 'Il y a 3 j']].map(([I, t, w]) => {
            const Icon = I as typeof EyeIcon
            return (
              <div key={t as string} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-magenta/15"><Icon size={15} className="text-magenta" /></span>
                <p className="flex-1 text-[12.5px] font-semibold">{t as string}</p>
                <span className="text-[10.5px] text-muted">{w as string}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Mes dernières listes" action="Toutes" />
        <Rail>
          {['Séries dystopiques', 'Mini-séries week-end', 'Top thrillers'].map((t) => (
            <article key={t} className="w-[170px] shrink-0 overflow-hidden rounded-[18px] border border-line bg-surface">
              <div className="grid h-[70px] grid-cols-3">{[1, 2, 3].map((n) => <Photo key={n} seed={`pl-${t}-${n}`} />)}</div>
              <p className="p-3 text-[12.5px] font-bold">{t}</p>
            </article>
          ))}
          <div className="flex w-[130px] shrink-0 flex-col items-center justify-center gap-2 rounded-[18px] border border-dashed border-white/25">
            <span className="brand-gradient flex size-10 items-center justify-center rounded-full"><PlusIcon size={18} /></span>
            <span className="text-center text-[11.5px] font-semibold">Créer une nouvelle liste</span>
          </div>
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Ce que font mes amis" action="Amis" />
        <div className="flex flex-col gap-2 px-5">
          {[['Nadia', 'a noté', 'Severance', 'il y a 1 h'], ['Kevin', 'a ajouté à sa liste', 'The Bear', 'hier'], ['Maya', 'a commenté', 'Dark', 'il y a 3 j']].map(([w, a, s, t]) => (
            <div key={w} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
              <Avatar initials={w[0]} size="size-9" />
              <p className="flex-1 text-[12.5px]"><b>{w}</b> {a} <b className="text-link">{s}</b><br /><span className="text-[10.5px] text-muted">{t}</span></p>
              <span className="rounded-full border border-line px-2.5 py-1 text-[11px]">Voir</span>
            </div>
          ))}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Sériethèque ---------- */

const library = [
  { t: 'Severance', m: '2022 · Thriller · SF', p: 'S1 · 6 épisodes suivis', v: 72, n: '4.5', s: 'En cours' },
  { t: 'The Bear', m: '2022 · Drame · Cuisine', p: 'S2 · 2 épisodes suivis', v: 35, n: '4.0', s: 'En cours' },
  { t: 'Dark', m: '2017 · Mystère · SF', p: 'S3 · terminée', v: 100, n: '5', s: 'Terminée' },
  { t: 'Silo', m: '2023 · SF · Drame', p: 'S1 · 1 épisode suivi', v: 15, n: '4.1', s: 'À reprendre' },
  { t: 'Mindhunter', m: '2017 · Crime · Psychologique', p: '2 saisons', v: 100, n: '4.7', s: 'Terminée' },
  { t: 'From', m: '2022 · Horreur · Mystère', p: 'S2 · progression active', v: 54, n: '4.2', s: 'En cours' },
]

export function LibraryScreen() {
  return (
    <Screen tab="profile">
      <TopBar />
      <TabsRow tabs={profileTabs} active="Sériethèque" />
      <div className="mt-5">
        <HeroCard
          overline="Ma sériethèque"
          title="Toutes mes séries, ma progression, mes favoris"
          text="Un espace pour suivre ce que tu regardes, retrouver tes séries terminées, reprendre celles laissées en pause et garder une vue claire sur ta progression."
          stats={[['86', 'Séries suivies'], ['24', 'Terminées'], ['9', 'À reprendre']]}
        >
          <Pill className="flex-1"><BookmarkIcon size={14} /> Gérer mon suivi</Pill>
          <OutlinePill className="flex-1 bg-ink/30"><HeartIcon size={14} /> Mes favoris</OutlinePill>
        </HeroCard>
      </div>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Explorer ma bibliothèque" />
        <div className="px-5"><SearchField placeholder="Rechercher une série, un genre…" /></div>
        <Rail gap="gap-2">
          <Chip active icon={<FilterIcon size={13} />}>Tout</Chip>
          <Chip>En cours</Chip>
          <Chip>Terminées</Chip>
          <Chip>À reprendre</Chip>
          <Chip icon={<HeartIcon size={13} />}>Favoris</Chip>
        </Rail>
        <div className="flex flex-col gap-2.5 px-5">
          {library.map((s) => (
            <article key={s.t} className="flex gap-3 rounded-[20px] border border-line bg-surface p-3">
              <span className="h-[112px] w-[80px] shrink-0 overflow-hidden rounded-xl"><Photo seed={`lib-${s.t}`} /></span>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[14px] font-extrabold uppercase">{s.t}</p>
                    <p className="text-[10.5px] text-muted">{s.m}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[9.5px] font-semibold">{s.s}</span>
                </div>
                <p className="text-[11.5px] text-white/75">{s.p}</p>
                <Progress value={s.v} />
                <div className="mt-auto flex items-center justify-between">
                  <span className="flex gap-3 text-[10.5px] text-white/70">
                    <span className="flex items-center gap-1"><StarIcon size={11} className="text-link" />{s.n}/5</span>
                    <span className="flex items-center gap-1"><ClockIcon size={11} className="text-link" />{s.v}% suivi</span>
                  </span>
                  <Pill className="h-8 px-3 text-[11px]">Ouvrir</Pill>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Épisodes à voir ---------- */

const inbox = [
  { tag: 'Note', t: 'Stranger Things', e: 'S05E02', s: 'The Crawl', d: '58 min', n: '4.8' },
  { tag: 'Trend', t: 'One Piece', e: 'S02E01', s: 'Le début de l’aventure', d: '50 min', n: '4.6' },
  { tag: 'Trend', t: 'The Boys', e: 'S05E03', s: 'Life Among the Spies', d: '55 min', n: '4.7' },
  { tag: 'Note', t: 'House of the Dragon', e: 'S02E08', s: 'Fin de saison', d: '62 min', n: '4.9' },
]
const upcoming = [
  { w: 'Demain', t: 'House of the Dragon', e: 'S02E08', s: 'Fin de saison', p: 'HBO / Max' },
  { w: 'Dans 2 jours', t: 'Silo', e: 'S02E05', s: 'The Engineer', p: 'Apple TV+' },
  { w: 'Dans 3 jours', t: 'The Boys', e: 'S05E03', s: 'Life Among the Spies', p: 'Prime Video' },
]

export function ToWatchScreen() {
  return (
    <Screen tab="profile">
      <TopBar vip />
      <TabsRow tabs={profileTabs} active="À voir" />
      <div className="px-5 pt-5">
        <Overline>Inbox de contenu</Overline>
        <h1 className="text-[26px] font-black uppercase">Épisodes à voir</h1>
      </div>
      <article className="relative mx-5 mt-4 h-[260px] overflow-hidden rounded-[24px] border border-line">
        <Photo seed="the-bear-kitchen" className="opacity-60" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2">
          <Badge tone="magenta"><UsersIcon size={10} className="mr-1" />Ami</Badge>
          <h2 className="text-[24px] font-black uppercase">The Bear <span className="text-link">S03E04</span></h2>
          <p className="text-[12px] text-white/75">Carmy pousse son équipe à se dépasser avant l’ouverture.</p>
          <p className="flex gap-3 text-[11px] text-white/70">
            <span className="flex items-center gap-1"><ClockIcon size={11} className="text-link" /> 42 min</span>
            <span className="flex items-center gap-1"><StarIcon size={11} className="text-yellow-400" /> 4.9</span>
            <span className="flex items-center gap-1"><TvIcon size={11} /> FX / Disney+</span>
          </p>
          <div className="flex gap-2">
            <Pill light className="flex-1"><PlayIcon size={12} /> Je regarde maintenant</Pill>
            <OutlinePill className="bg-ink/50"><CheckIcon size={14} /> Marquer vu</OutlinePill>
          </div>
        </div>
      </article>
      <div className="mx-5 mt-3 flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-ink/60"><CalendarIcon size={17} className="text-link" /></span>
        <div className="flex-1">
          <Overline>Prochaine sortie</Overline>
          <p className="text-[13px] font-bold">House of the Dragon <span className="text-link">S02E08</span></p>
        </div>
        <span className="rounded-full bg-magenta/20 px-2.5 py-1 text-[10.5px] font-bold text-magenta">Demain</span>
      </div>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="À rattraper" />
        <div className="grid grid-cols-2 gap-2.5 px-5">
          {inbox.map((i) => (
            <article key={i.t + i.e} className="overflow-hidden rounded-[18px] border border-line bg-surface">
              <div className="relative h-[90px]">
                <Photo seed={`inbox-${i.t}`} />
                <span className="absolute top-1.5 left-1.5"><Badge>{i.tag === 'Note' ? '★ Note' : '↗ Trend'}</Badge></span>
              </div>
              <div className="p-2.5">
                <p className="truncate text-[12px] font-bold">{i.t} <span className="text-link">{i.e}</span></p>
                <p className="truncate text-[10.5px] text-muted">{i.s}</p>
                <p className="mt-1 flex gap-2 text-[10px] text-white/60"><span>{i.d}</span>·<span>★ {i.n}</span></p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="À venir" />
        <div className="flex flex-col gap-2 px-5">
          {upcoming.map((u) => (
            <div key={u.t} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
              <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg"><Photo seed={`up-${u.t}`} /></span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-link">{u.e}</p>
                <p className="truncate text-[13px] font-bold">{u.t}</p>
                <p className="truncate text-[10.5px] text-muted">{u.s} · {u.p}</p>
              </div>
              <span className="rounded-full border border-line px-2 py-1 text-[10px] font-semibold whitespace-nowrap">{u.w}</span>
            </div>
          ))}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Wishlist ---------- */

const wishlist: [string, string, string][] = [
  ['Dark', 'SF · Thriller', '4.8'], ['The Bear', 'Drame · Cuisine', '4.7'], ['Severance', 'Thriller · SF', '4.6'],
  ['Silo', 'SF · Mystère', '4.3'], ['From', 'Horreur · Mystère', '4.2'], ['The Last of Us', 'Drame · Horreur', '4.9'],
  ['Slow Horses', 'Thriller · Espionnage', '4.5'], ['For All Mankind', 'SF · Drame', '4.4'], ['The White Lotus', 'Comédie · Drame', '4.6'],
  ['Abbott Elementary', 'Comédie', '4.3'], ['Pachinko', 'Drame · Historique', '4.7'], ['What We Do in the Shadows', 'Comédie · Horreur', '4.5'],
  ['Only Murders in the Building', 'Comédie · Mystère', '4.4'], ['Station Eleven', 'Drame · SF', '4.6'], ['Reservation Dogs', 'Comédie · Drame', '4.5'],
  ['Under the Banner of Heaven', 'Crime · Drame', '4.2'], ['Better Call Saul', 'Crime · Drame', '4.9'], ['Fleabag', 'Comédie · Drame', '4.8'],
  ['Mr. Robot', 'Thriller · Drame', '4.7'], ['The Leftovers', 'Drame · Mystère', '4.6'], ['Halt and Catch Fire', 'Drame · Technologie', '4.5'],
  ['Mindhunter', 'Crime · Thriller', '4.7'], ['Devs', 'SF · Thriller', '4.3'], ['Patriot', 'Comédie · Drame', '4.4'],
  ['Counterpart', 'SF · Thriller', '4.2'],
]
const friendRecos = [
  { who: 'Marie', t: 'Dark', g: 'SF · Thriller', q: 'J’ai pensé à toi en regardant Dark : tu aimes les récits tordus avec des timelines complexes et une atmosphère sombre.' },
  { who: 'Nadia', t: 'Severance', g: 'Thriller · SF', q: 'Severance m’a fait penser à ce que tu recherches : une ambiance oppressante, un script chirurgical et une mise en scène millimétrée.' },
  { who: 'Kevin', t: 'The Bear', g: 'Drame · Cuisine', q: 'The Bear est intense, rapide et terriblement addictive. Si tu aimes les drames humains servis avec une réalité crue…' },
]

export function WishlistScreen() {
  return (
    <Screen tab="profile">
      <TopBar />
      <TabsRow tabs={profileTabs} active="À voir" />
      <div className="mt-5">
        <HeroCard
          overline="Ma wishlist"
          title="Les séries que je veux découvrir"
          text="Une bibliothèque personnelle de séries désirées : celles que tu as repérées, celles que tes amis te conseillent, et celles que tout le monde ajoute en ce moment."
          stats={[['25', 'En wishlist'], ['7', 'Favoris potentiels'], ['12', 'Tendances vues']]}
        >
          <Pill className="flex-1"><PlusIcon size={14} /> Ajouter une série</Pill>
          <OutlinePill className="flex-1 bg-ink/30"><UsersIcon size={14} /> Recommandations</OutlinePill>
        </HeroCard>
      </div>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Ma wishlist" action="Gérer" />
        <p className="-mt-1 px-5 text-[11.5px] text-muted">25 séries enregistrées — prêtes à être ajoutées à ta médiathèque.</p>
        <div className="px-5"><SearchField placeholder="Rechercher dans ma wishlist…" /></div>
        <Rail gap="gap-2">
          <Chip active>Tout</Chip>
          <Chip icon={<StarIcon size={12} />}>Mieux notées</Chip>
          <Chip icon={<ClockIcon size={13} />}>Récentes</Chip>
        </Rail>
        <div className="grid grid-cols-3 gap-2.5 px-5">
          {wishlist.map(([t, g, r]) => (
            <div key={t} className="relative h-[170px] overflow-hidden rounded-[14px]">
              <Photo seed={`wish-${t}`} />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-2 bottom-2">
                <p className="text-[10.5px] leading-tight font-extrabold uppercase">{t}</p>
                <p className="truncate text-[9px] text-white/60">{g}</p>
                <Rating value={`${r}/5`} className="text-[9.5px]" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Recommandations des amis" action="Toutes" />
        <Rail>
          {friendRecos.map((r) => (
            <article key={r.t} className="flex w-[280px] shrink-0 flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-3.5">
              <div className="flex items-center gap-2.5">
                <span className="size-9 overflow-hidden rounded-full"><Photo seed={`friend-${r.who}`} /></span>
                <div>
                  <p className="text-[9.5px] tracking-wider text-muted uppercase">{r.who} vous recommande</p>
                  <p className="text-[14px] font-black uppercase">{r.t}</p>
                  <p className="text-[10.5px] text-muted">{r.g}</p>
                </div>
              </div>
              <p className="rounded-xl border border-white/10 bg-ink/40 p-2.5 text-[11.5px] leading-snug text-white/75 italic">« {r.q} »</p>
              <div className="flex gap-2">
                <Pill className="h-9 flex-1">Voir la fiche</Pill>
                <IconButton className="size-9"><LayersIcon size={14} /></IconButton>
                <IconButton className="size-9"><CalendarIcon size={14} /></IconButton>
              </div>
            </article>
          ))}
        </Rail>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Tendances populaires" action="Tendances" />
        <Rail>
          {['House of the Dragon', 'The Witcher', 'Wednesday', 'The Mandalorian', 'Squid Game', 'Euphoria'].map((t) => (
            <Poster key={t} seed={`trendpop-${t}`} title={t} badge="Tendance" />
          ))}
        </Rail>
      </section>
      <section className="brand-card mx-5 mt-7 flex items-center gap-3 rounded-[22px] border border-magenta/30 p-4">
        <div className="flex-1">
          <p className="text-[13px] font-extrabold uppercase">Trouver ma prochaine série</p>
          <p className="mt-0.5 text-[11.5px] text-white/65">Recommandations personnalisées, coups de cœur et nouveautés du moment.</p>
        </div>
        <Pill><TrendingIcon size={14} /> Explorer</Pill>
      </section>
      <div className="mt-3 flex justify-center"><span className="flex items-center gap-1 text-[11px] text-muted"><MessageIcon size={12} /> Suggestions mises à jour chaque jour</span></div>
    </Screen>
  )
}
