import {
  BookmarkIcon,
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  CrownIcon,
  HeartIcon,
  LayersIcon,
  PlayIcon,
  RefreshIcon,
  SearchIcon,
  ShuffleIcon,
  SparklesIcon,
  StarIcon,
  AwardIcon,
  UserIcon,
} from '../../ui/icons'
import { CtaBanner, LoadMore, OutlinePill, Pill, Poster } from '../../ui/blocks'
import {
  Avatar,
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

/* ---------- Collections ---------- */

type Trailer = { t: string; m: string; k: string; d?: string }
type Coll = { badge: string; title: string; text: string; n: number; trailers: Trailer[] }

const featured: Coll[] = [
  {
    badge: 'Collection spotlight', title: 'Séries post-apocalyptiques', n: 18,
    text: 'Des mondes en ruine, des sociétés brisées, des survivants en tension permanente.',
    trailers: [
      { t: 'Fallout', m: 'Univers rétro-futuriste', k: 'Trailer', d: '2:18' },
      { t: 'The Last of Us', m: 'Survie · Drame', k: 'Teaser', d: '1:52' },
      { t: 'Silo', m: 'Mystère · Sci-fi', k: 'Trailer', d: '2:04' },
      { t: 'Station Eleven', m: 'Poétique', k: 'Clip' },
    ],
  },
  {
    badge: 'Adaptations', title: 'Séries adaptées de jeux vidéo', n: 8,
    text: 'Quand les licences cultes prennent vie à l’écran avec un vrai sens du spectacle.',
    trailers: [
      { t: 'Arcane', m: 'Animation · Action', k: 'Trailer', d: '2:21' },
      { t: 'Halo', m: 'Sci-fi · Guerre', k: 'Trailer', d: '2:02' },
      { t: 'Twisted Metal', m: 'Road trip · Chaos', k: 'Teaser', d: '1:41' },
      { t: 'The Witcher', m: 'Fantasy', k: 'Trailer' },
    ],
  },
  {
    badge: 'Trending', title: 'Séries dystopie', n: 12,
    text: 'Des futurs déformés, autoritaires ou désenchantés, où chaque système étouffe l’humain.',
    trailers: [
      { t: 'Severance', m: 'Travail · Aliénation', k: 'Trailer', d: '2:07' },
      { t: 'Black Mirror', m: 'Tech · Anthologie', k: 'Clip', d: '1:34' },
      { t: '3%', m: 'Sélection · Brésil', k: 'Trailer', d: '2:01' },
      { t: 'Snowpiercer', m: 'Train · Classes', k: 'Trailer' },
    ],
  },
  {
    badge: 'Editorial', title: 'Séries power', n: 4,
    text: 'Pouvoir, clans, stratégie et affrontements dans des univers intenses.',
    trailers: [
      { t: 'Power', m: 'Crime · Empire', k: 'Trailer', d: '2:15' },
      { t: 'Ghost', m: 'Spin-off', k: 'Teaser', d: '1:47' },
      { t: 'Force', m: 'Chicago · Tension', k: 'Trailer', d: '1:58' },
    ],
  },
]
const universes = [
  { k: 'Adaptations', t: 'Séries adaptées de jeux vidéo', n: 8 },
  { k: 'Trending', t: 'Séries dystopie', n: 12 },
  { k: 'Editorial', t: 'Séries power', n: 4 },
  { k: 'Community picks', t: 'Séries LGBTQIA+', n: 51 },
  { k: 'Romance focus', t: 'Séries Bridgerton', n: 2 },
]

function TrailerCard({ t, m, k, d }: Trailer) {
  return (
    <div className="w-[160px] shrink-0">
      <div className="relative h-[92px] overflow-hidden rounded-xl">
        <Photo seed={`trailer-${t}`} />
        <span className="absolute top-1.5 left-1.5"><Badge>{k}</Badge></span>
        {d && <span className="absolute top-1.5 right-1.5"><Badge>{d}</Badge></span>}
        <span className="absolute inset-0 m-auto flex size-9 items-center justify-center rounded-full bg-white text-ink"><PlayIcon size={12} /></span>
      </div>
      <p className="mt-1.5 text-[12.5px] font-bold">{t}</p>
      <p className="truncate text-[10.5px] text-muted">{m}</p>
    </div>
  )
}

export function CollectionsScreen() {
  return (
    <Screen tab="discover">
      <section className="relative">
        <div className="absolute inset-0">
          <Photo seed="collections-cinema" className="opacity-40" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/50 to-ink" />
        </div>
        <div className="relative">
          <PageHeader overline="Découvrir" title="Collections" />
          <div className="flex flex-col gap-3 px-5 pt-6 pb-2">
            <Badge tone="magenta">Collection spotlight</Badge>
            <h1 className="text-[30px] leading-none font-black uppercase">
              Collections <span className="hero-text">séries</span>
            </h1>
            <p className="text-[12.5px] leading-relaxed text-white/70">
              Explore des univers éditoriaux conçus pour faciliter la découverte, suivre tes envies et retrouver rapidement les
              séries qui partagent une même ambiance, un même genre ou une même identité.
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip small>18 séries</Chip>
              <Chip small>Focus éditorial</Chip>
              <Chip small>Découverte immersive</Chip>
            </div>
            <div className="brand-gradient rounded-full p-px">
              <div className="flex h-12 items-center gap-2 rounded-full bg-surface pr-1.5 pl-4">
                <SearchIcon size={18} className="text-link" />
                <span className="flex-1 truncate text-[15px] text-muted">Rechercher une collection, un univers, une ambiance…</span>
                <Pill light className="h-9">Explorer</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="relative mx-5 mt-4 h-[180px] overflow-hidden rounded-[22px] border border-line">
        <Photo seed="coll-postapo-hero" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent" />
        <span className="absolute top-3 left-3"><Badge>En vedette</Badge></span>
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1.5">
          <h2 className="text-[18px] font-black uppercase">Séries post-apocalyptiques</h2>
          <p className="text-[11.5px] text-white/70">Des mondes en ruine, des sociétés brisées, des survivants en tension permanente.</p>
          <span className="flex items-center gap-2 text-[11.5px]">
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-ink"><PlayIcon size={11} /></span>
            <span><b>Fallout</b> <span className="text-white/60">· Trailer · 2:18</span></span>
          </span>
        </div>
      </article>

      <section className="mt-7 flex flex-col gap-4">
        <SectionTitle title="Collections en vedette" action="Toutes" />
        {featured.map((c) => (
          <div key={c.title} className="flex flex-col gap-3">
            <div className="brand-card mx-5 flex items-center gap-3 rounded-[20px] border border-line p-4">
              <div className="min-w-0 flex-1">
                <Overline className="flex items-center gap-1"><LayersIcon size={10} />{c.badge}</Overline>
                <h3 className="mt-1 text-[16px] leading-tight font-black uppercase">{c.title}</h3>
                <p className="mt-1 line-clamp-2 text-[11.5px] text-white/65">{c.text}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Chip small>{c.n} séries</Chip>
                <span className="flex items-center text-[12px] font-semibold text-link">Ouvrir <ChevronRightIcon size={13} /></span>
              </div>
            </div>
            <Rail>
              {c.trailers.map((t) => (
                <TrailerCard key={t.t} {...t} />
              ))}
            </Rail>
          </div>
        ))}
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <SectionTitle title="Découvrir plus d’univers" action="L’archive" />
        <div className="grid grid-cols-2 gap-3 px-5">
          {universes.map((u) => (
            <article key={u.t} className="relative h-[150px] overflow-hidden rounded-[20px]">
              <Photo seed={`univ-${u.t}`} />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-ink/10" />
              <span className="absolute top-2.5 left-2.5"><Badge>{u.k}</Badge></span>
              <span className="absolute top-2 right-2 flex size-7 items-center justify-center rounded-full bg-ink/60"><HeartIcon size={13} /></span>
              <div className="absolute inset-x-3 bottom-3">
                <p className="text-[12.5px] leading-tight font-extrabold uppercase">{u.t}</p>
                <p className="mt-1 flex justify-between text-[10px] tracking-wide text-white/70 uppercase">
                  {u.n} séries <span className="text-link normal-case">Explorer ›</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-card mx-5 mt-7 flex flex-col gap-3 rounded-[24px] border border-magenta/30 p-5">
        <Overline className="flex items-center gap-1"><LayersIcon size={10} /> Organisation intelligente</Overline>
        <h3 className="text-[18px] leading-tight font-black uppercase">
          Retrouve, classe et suis <span className="hero-text">tes séries</span>
        </h3>
        <p className="text-[12px] leading-relaxed text-white/65">
          Les collections ne servent pas seulement à découvrir. Elles renforcent aussi l’organisation du catalogue, la
          navigation éditoriale et la progression utilisateur à travers des univers cohérents.
        </p>
        <div className="flex gap-2">
          <Pill className="flex-1"><PlayIcon size={12} /> Commencer</Pill>
          <OutlinePill className="flex-1"><BookmarkIcon size={14} /> Mes collections</OutlinePill>
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Une collection ---------- */

const continueItems = [
  { t: 'The Last of Us', code: 'S01E04', min: 54, p: 68 },
  { t: 'Silo', code: 'S01E07', min: 49, p: 42 },
  { t: 'Fallout', code: 'S01E02', min: 58, p: 84 },
]

export function CollectionScreen() {
  return (
    <Screen tab="discover">
      <section className="relative">
        <div className="absolute inset-0 h-[420px]">
          <Photo seed="postapo-canyon" className="opacity-60" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/50 via-ink/20 to-ink" />
        </div>
        <div className="relative">
          <PageHeader overline="Collection" title="Post-apocalyptiques" right={<IconButton><HeartIcon size={17} /></IconButton>} />
          <div className="flex flex-col gap-3 px-5 pt-[120px]">
            <Overline className="text-white/70">Collection</Overline>
            <h1 className="text-[32px] leading-[0.95] font-black uppercase">Séries post-apocalyptiques</h1>
            <p className="text-[13px] text-white/75">Des mondes brisés, des survivants, des civilisations à reconstruire.</p>
            <div className="flex gap-2">
              <Chip small>38 séries</Chip>
              <Chip small>12 trailers</Chip>
              <Chip small>4 tendances</Chip>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-5 mt-5 flex flex-col gap-2 rounded-[22px] border border-line bg-surface p-4">
        <div className="flex flex-wrap items-center gap-2 text-[10px] text-white/60 uppercase">
          <Badge>Série mise en avant</Badge>
          <span>Drame · Science-fiction · HBO · 2023</span>
          <Rating value="8.8/10" />
        </div>
        <h2 className="text-[18px] font-black uppercase">The Last of Us</h2>
        <p className="text-[12px] leading-relaxed text-white/70">
          Une sélection de séries où l’humanité vacille, où les règles changent et où survivre devient une obsession.
        </p>
      </article>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Continuer à regarder" action="Reprendre" />
        <Rail>
          {continueItems.map((c) => (
            <div key={c.t} className="w-[200px] shrink-0 overflow-hidden rounded-[18px] border border-line bg-surface">
              <div className="relative h-[110px]">
                <Photo seed={`cont-${c.t}`} />
                <span className="absolute top-2 left-2"><Badge>{c.code}</Badge></span>
                <div className="absolute inset-x-2 bottom-2 flex flex-col gap-1">
                  <span className="flex justify-between text-[9.5px] font-bold"><span>{c.min} MIN</span><span>{c.p}%</span></span>
                  <Progress value={c.p} />
                </div>
              </div>
              <p className="p-3 text-[12px] font-extrabold uppercase">{c.t}</p>
            </div>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Explorer la collection" action="38 séries" />
        <div className="grid grid-cols-3 gap-2.5 px-5">
          {['Fallout', 'The Last of Us', 'Silo', 'Station Eleven', 'The Walking Dead', 'Sweet Tooth', 'Snowpiercer', 'Jericho', 'The 100'].map((t) => (
            <Poster key={t} seed={`collgrid-${t}`} title={t} className="w-full" height="h-[150px]" />
          ))}
        </div>
      </section>
      <div className="mt-5">
        <LoadMore>Voir les 29 autres séries</LoadMore>
      </div>
    </Screen>
  )
}

/* ---------- Coups de cœur ---------- */

const picks = [
  { t: 'The Crown', kind: 'Coup de cœur', r: '4.8', y: '2016', by: 'Nadia', text: 'Une fresque historique d’une rare élégance qui parvient à rendre captivante l’histoire de la monarchie britannique.' },
  { t: 'Dark', kind: 'Gemme rare', r: '4.9', y: '2017', by: 'Luca', text: 'La science-fiction allemande à son meilleur. Une intrigue temporelle vertigineuse qui récompense l’attention du spectateur.' },
  { t: 'Fleabag', kind: 'Coup de cœur', r: '4.7', y: '2016', by: 'Marie', text: 'Phoebe Waller-Bridge crée un personnage inoubliable dans cette comédie qui fait pleurer autant qu’elle fait rire.' },
  { t: 'Chernobyl', kind: 'Chef-d’œuvre', r: '4.9', y: '2019', by: 'Thomas', text: 'Une minisérie bouleversante qui reconstitue avec une précision terrifiante la catastrophe nucléaire de 1986.' },
]

export function FavoritesScreen() {
  return (
    <Screen tab="discover">
      <PageHeader overline="Sélection spéciale" title="Coups de cœur" />
      <div className="flex flex-col items-center gap-2 px-8 pt-6 text-center">
        <span className="flex items-center gap-2 text-link"><SparklesIcon size={14} /><span className="brand-gradient h-0.5 w-8 rounded-full" /><SparklesIcon size={14} className="text-magenta" /></span>
        <h1 className="text-[26px] font-black uppercase">Nos coups de cœur</h1>
        <p className="text-[12.5px] text-white/65">Une sélection de séries exceptionnelles, choisies avec passion par notre équipe et notre communauté.</p>
      </div>

      <article className="relative mx-5 mt-5 h-[380px] overflow-hidden rounded-[24px]">
        <Photo seed="breaking-bad-dark" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
        <span className="absolute top-3 left-3"><Badge><CrownIcon size={10} className="mr-1 text-yellow-400" />Chef-d’œuvre</Badge></span>
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1.5">
          <h2 className="text-[26px] font-black uppercase">Breaking Bad</h2>
          <p className="flex items-center gap-2 text-[11.5px] text-white/75">
            <span className="flex items-center gap-1"><StarIcon size={11} className="text-magenta" /> 5/5</span>· 2008 · 5 saisons · 62 épisodes
          </p>
          <p className="text-[12px] leading-relaxed text-white/75">
            Une descente aux enfers magistrale, portée par Bryan Cranston dans un rôle de composition absolument terrifiant.
          </p>
          <span className="mt-1 flex items-center gap-2 text-[11px] text-white/70"><Avatar initials="C" size="size-7" /> Par Charlotte</span>
        </div>
      </article>

      <div className="mt-5">
        <Rail gap="gap-2">
          <Chip active>Tout</Chip>
          <Chip>Chef-d’œuvre</Chip>
          <Chip>Coup de cœur</Chip>
          <Chip>Gemme rare</Chip>
        </Rail>
      </div>

      <div className="mt-4 flex flex-col gap-3 px-5">
        {picks.map((p) => (
          <article key={p.t} className="overflow-hidden rounded-[22px] border border-line bg-surface">
            <div className="relative h-[170px]">
              <Photo seed={`pick-${p.t}`} />
              <span className="absolute top-3 left-3"><Badge tone={p.kind === 'Gemme rare' ? 'dark' : 'magenta'}>{p.kind}</Badge></span>
            </div>
            <div className="flex flex-col gap-1.5 p-4">
              <h3 className="text-[16px] font-extrabold">{p.t}</h3>
              <p className="flex items-center gap-1 text-[11px] text-white/60"><StarIcon size={11} className="text-magenta" /> {p.r} · {p.y}</p>
              <p className="text-[12px] leading-relaxed text-white/70">{p.text}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="flex items-center gap-2 text-[11px] text-white/60"><Avatar initials={p.by[0]} size="size-7" /> Par {p.by}</span>
                <span className="flex gap-2">
                  <IconButton className="size-9"><HeartIcon size={15} /></IconButton>
                  <IconButton className="size-9"><BookmarkIcon size={15} /></IconButton>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4"><LoadMore>Voir plus de coups de cœur</LoadMore></div>
      <div className="mt-7">
        <CtaBanner
          icon={<AwardIcon size={26} />}
          title="Proposez vos coups de cœur"
          text="Vous avez une série qui vous tient à cœur ? Partagez-la avec la communauté et faites découvrir vos perles rares."
          action="Soumettre une série"
        />
      </div>
    </Screen>
  )
}

/* ---------- Pour vous ---------- */

const pairs = [
  {
    like: 'Breaking Bad', found: 'Better Call Saul', r: '4.8', meta: '2015 · 6 saisons',
    text: 'L’avocat Jimmy McGill se transforme en Saul Goodman dans ce prequel aussi implacable que son aîné.',
    why: ['Même univers', 'Même créateur', 'Personnage similaire', 'Même ambiance dramatique'],
  },
  {
    like: 'Stranger Things', found: 'Dark', r: '4.9', meta: '2017 · 3 saisons',
    text: 'Mystère, enfants disparus et boucles temporelles dans une Allemagne aussi sombre qu’envoûtante.',
    why: ['Mystère adolescent', 'Science-fiction rétro', 'Ambiance oppressante', 'Intrigue familiale'],
  },
]
const history = [
  { t: 'The Last of Us', y: '2023', s: 'Saison 1 terminée', r: '4.8', why: 'Vous suivez les adaptations de jeux vidéo ?' },
  { t: 'House of the Dragon', y: '2022', s: 'Saison 2 en cours', r: '4.5', why: 'Fantasy épique et politique royale.' },
  { t: 'Shogun', y: '2024', s: 'Non commencé', r: '4.9', why: 'Histoire ambitieuse et production grand spectacle.' },
  { t: 'Yellowjackets', y: '2021', s: 'Saison 2 terminée', r: '4.3', why: 'Survie, mystères et psychologie sombre.' },
  { t: 'Silo', y: '2023', s: 'Saison 1 en cours', r: '4.5', why: 'Dystopie haletante à la construction implacable.' },
]

export function ForYouScreen() {
  return (
    <Screen tab="discover">
      <PageHeader
        overline="Pour vous"
        title="Séries similaires à vos goûts"
        right={<IconButton><RefreshIcon size={17} /></IconButton>}
      />
      <div className="flex flex-col gap-1.5 px-5 pt-6">
        <span className="flex items-center gap-2"><HeartIcon size={14} className="text-link" /><span className="brand-gradient h-0.5 w-7 rounded-full" /></span>
        <h1 className="text-[24px] font-black uppercase">Parce que vous aimez…</h1>
        <p className="text-[12.5px] text-white/60">Des recommandations construites à partir de vos séries préférées.</p>
      </div>

      <div className="mt-5 flex flex-col gap-4 px-5">
        {pairs.map((p) => (
          <article key={p.found} className="flex flex-col gap-3 rounded-[24px] border border-line bg-surface p-4">
            <div className="flex items-center gap-3">
              <div className="relative h-[90px] w-[70px] shrink-0 overflow-hidden rounded-xl">
                <Photo seed={`like-${p.like}`} />
              </div>
              <div className="flex-1">
                <Overline className="flex items-center gap-1 text-magenta"><HeartIcon size={10} /> Vous aimez</Overline>
                <p className="text-[15px] font-bold">{p.like}</p>
                <span className="text-[11.5px] font-semibold text-link">Voir la série ›</span>
              </div>
            </div>
            <div className="relative h-[180px] overflow-hidden rounded-2xl">
              <Photo seed={`found-${p.found}`} />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
              <span className="absolute top-2.5 left-2.5 rounded-full bg-ink/70 px-2 py-0.5"><Rating value={p.r} /></span>
              <div className="absolute inset-x-3 bottom-3">
                <Overline className="flex items-center gap-1 text-link"><SparklesIcon size={10} /> Nous avons trouvé</Overline>
                <h3 className="text-[19px] font-black">{p.found}</h3>
                <p className="text-[11px] text-white/70">{p.meta}</p>
              </div>
            </div>
            <p className="text-[12px] leading-relaxed text-white/70">{p.text}</p>
            <div className="rounded-2xl border border-line bg-ink/40 p-3">
              <p className="text-[10px] font-bold tracking-wide text-muted uppercase">Pourquoi ?</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.why.map((w) => (
                  <Chip key={w} small icon={<CheckIcon size={11} className="text-link" />}>{w}</Chip>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-8 flex flex-col gap-3">
        <div className="flex flex-col gap-1 px-5">
          <span className="flex items-center gap-2"><ClockIcon size={14} className="text-link" /><span className="brand-gradient h-0.5 w-7 rounded-full" /></span>
          <h2 className="text-[20px] font-black uppercase">Basé sur votre historique</h2>
          <p className="text-[12px] text-white/60">Poursuivez avec des séries en lien avec votre activité récente.</p>
        </div>
        <Rail>
          {history.map((h) => (
            <article key={h.t} className="w-[170px] shrink-0 overflow-hidden rounded-[18px] border border-line bg-surface">
              <div className="relative h-[200px]">
                <Photo seed={`hist-${h.t}`} />
                <span className="absolute top-2 left-2 rounded-full bg-ink/70 px-1.5 py-0.5"><Rating value={h.r} className="text-[10px]" /></span>
              </div>
              <div className="flex flex-col gap-1 p-3">
                <p className="flex items-center justify-between text-[13px] font-bold">{h.t} <BookmarkIcon size={14} className="text-white/60" /></p>
                <p className="text-[10.5px] text-muted">{h.y} · <span className="text-link">{h.s}</span></p>
                <p className="text-[11px] text-white/65">{h.why}</p>
              </div>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-8 flex flex-col gap-3">
        <div className="flex flex-col gap-1 px-5">
          <span className="flex items-center gap-2"><ShuffleIcon size={14} className="text-link" /><span className="brand-gradient h-0.5 w-7 rounded-full" /></span>
          <h2 className="text-[20px] font-black uppercase">Découverte surprise</h2>
          <p className="text-[12px] text-white/60">Une série éloignée de vos habitudes, mais qui pourrait vous surprendre.</p>
        </div>
        <article className="mx-5 overflow-hidden rounded-[24px] border border-line bg-surface">
          <div className="h-[160px]"><Photo seed="abbott-concert" /></div>
          <div className="flex flex-col gap-2 p-4">
            <Badge><ShuffleIcon size={10} className="mr-1" />Découverte surprise</Badge>
            <h3 className="text-[20px] font-black">Abbott Elementary</h3>
            <p className="flex items-center gap-1 text-[11.5px] text-white/60"><StarIcon size={11} className="text-magenta" /> 4.6 · 2021 · 4 saisons</p>
            <p className="text-[12px] leading-relaxed text-white/70">
              Une série éloignée de vos habitudes, mais compatible avec votre goût pour les personnages bien écrits et l’humour caustique.
            </p>
            <div className="flex gap-1.5">
              <Chip small>Comédie</Chip>
              <Chip small>Mockumentaire</Chip>
              <Chip small>Feel-good</Chip>
            </div>
            <div className="mt-1 flex flex-col gap-1.5">
              <span className="flex justify-between text-[11px]"><span className="text-white/60">Compatibilité</span><b>78 %</b></span>
              <Progress value={78} />
            </div>
            <div className="mt-1 flex gap-2">
              <Pill className="flex-1">Voir la série ›</Pill>
              <IconButton className="size-10"><RefreshIcon size={15} /></IconButton>
            </div>
          </div>
        </article>
      </section>

      <div className="mt-7">
        <CtaBanner
          icon={<UserIcon size={26} />}
          title="Affinez vos recommandations"
          text="Plus vous notez et suivez de séries, plus nos suggestions deviennent précises."
          action="Noter mes séries"
        />
      </div>
    </Screen>
  )
}
