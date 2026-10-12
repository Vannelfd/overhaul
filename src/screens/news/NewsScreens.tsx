import {
  ArrowRightIcon,
  BookmarkIcon,
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  ExternalIcon,
  EyeIcon,
  FilmIcon,
  HeartIcon,
  LinkIcon,
  MailIcon,
  MessageIcon,
  MoreIcon,
  PlayIcon,
  PlusIcon,
  QuoteIcon,
  SendIcon,
  ShareIcon,
  SparklesIcon,
  ThumbUpIcon,
  TrendingIcon,
  TvIcon,
  VolumeIcon,
} from '../../ui/icons'
import { Field, LoadMore, OutlinePill, Pill, Stars } from '../../ui/blocks'
import {
  AdSlot,
  Avatar,
  Badge,
  Chip,
  IconButton,
  Overline,
  PageHeader,
  Photo,
  PrimaryButton,
  Rail,
  Screen,
  SearchField,
  SectionTitle,
  TopBar,
} from '../../ui/kit'
import { Emoji } from '../series/shared'

type Article = { cat: string; title: string; text: string; author: string; date: string; min: number }

export const recentArticles: Article[] = [
  { cat: 'Best of', title: 'Les séries qui ont marqué 2025', text: 'Retour sur les productions qui ont fait parler d’elles cette année.', author: 'Nadia R.', date: '24 fév 2026', min: 5 },
  { cat: 'Interview', title: 'Interview : les créateurs de Dark', text: 'Les frères Jantje Friese et Baran bo Odar se confient sur leur prochain projet.', author: 'Luca T.', date: '22 fév 2026', min: 6 },
  { cat: 'Analyse', title: 'Le renouveau des sitcoms', text: 'Comment les comédies de situation se réinventent pour les nouvelles générations.', author: 'Marie D.', date: '20 fév 2026', min: 4 },
  { cat: 'Guide', title: 'Les séries à ne pas manquer en mars', text: 'Notre sélection des nouveautés et des retours attendus ce mois-ci.', author: 'Thomas L.', date: '18 fév 2026', min: 3 },
  { cat: 'Technique', title: 'Les effets spéciaux révolutionnaires', text: 'Plongée dans les coulisses de la création visuelle des plus grandes séries.', author: 'Sarah P.', date: '16 fév 2026', min: 7 },
  { cat: 'Musique', title: 'Les musiques de séries cultes', text: 'Quand les bandes-son deviennent des hits à part entière.', author: 'Alex R.', date: '14 fév 2026', min: 5 },
]

function ArticleRow({ a }: { a: Article }) {
  return (
    <article className="flex gap-3 rounded-[20px] border border-line bg-surface p-3">
      <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-xl">
        <Photo seed={`art-${a.title}`} />
        <span className="absolute top-1.5 left-1.5"><Badge>{a.cat}</Badge></span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="line-clamp-2 text-[13.5px] leading-snug font-bold">{a.title}</h3>
        <p className="line-clamp-2 text-[11.5px] text-white/60">{a.text}</p>
        <div className="mt-auto flex items-center justify-between text-[10.5px] text-muted">
          <span>{a.author} · {a.date}</span>
          <span className="flex items-center gap-1"><ClockIcon size={11} /> {a.min} min</span>
        </div>
      </div>
    </article>
  )
}

/* ---------- News & articles (onglet News) ---------- */

export function NewsScreen() {
  return (
    <Screen tab="news">
      <TopBar />
      <div className="flex flex-col gap-3 px-5 pt-2">
        <h1 className="text-[26px] leading-tight font-black uppercase">News & articles</h1>
        <p className="text-[13px] text-white/70">Dernières news, analyses, interviews… une lecture magazine premium.</p>
        <span className="flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[11px] text-link">
          <TrendingIcon size={13} /> Mis à jour en temps réel
        </span>
        <SearchField placeholder="Rechercher un article…" />
      </div>
      <div className="mt-3">
        <Rail gap="gap-2">
          <Chip icon={<ChevronDownIcon size={13} />}>Catégorie : Tout</Chip>
          <Chip active>Breaking</Chip>
          <Chip>Tendances</Chip>
          <Chip>Interviews</Chip>
          <Chip>Critiques</Chip>
        </Rail>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="À la une" action="Toutes les news" />
        <article className="mx-5 overflow-hidden rounded-[24px] border border-line bg-surface">
          <div className="relative h-[210px]">
            <Photo seed="news-stranger-s5" />
            <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
            <span className="absolute top-3 left-3"><Badge tone="magenta">Breaking</Badge></span>
          </div>
          <div className="-mt-6 flex flex-col gap-2 p-4">
            <h2 className="relative text-[20px] leading-tight font-black uppercase">Stranger Things : la saison 5 se dévoile enfin</h2>
            <p className="flex gap-3 text-[11px] text-muted">
              <span className="flex items-center gap-1"><CalendarIcon size={11} /> 26 fév 2026</span>
              <span className="flex items-center gap-1"><ClockIcon size={11} /> 6 min</span>
            </p>
            <div className="mt-1 flex gap-2">
              <Pill className="flex-1">Lire l’article <ArrowRightIcon size={14} /></Pill>
              <OutlinePill><BookmarkIcon size={14} /> Sauvegarder</OutlinePill>
            </div>
          </div>
        </article>
        <div className="flex flex-col gap-2 px-5">
          {[
            ['Tendances', 'Apple TV+ mise sur ses séries événements'],
            ['Interviews', 'Showrunner talk : dans la salle d’écriture'],
            ['Critiques', 'Notre avis sur la saison finale'],
          ].map(([c, t]) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
              <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xl"><Photo seed={`une-${c}`} /></span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-link uppercase">{c}</p>
                <p className="truncate text-[13px] font-bold">{t}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Le plus lu · Trending" />
        <div className="mx-5 flex flex-col rounded-[20px] border border-line bg-surface px-4 py-1">
          {recentArticles.slice(0, 5).map((a, i) => (
            <div key={a.title} className="flex items-center gap-3 border-b border-white/5 py-3 last:border-0">
              <span className="brand-text w-7 text-[20px] font-black">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex-1 text-[13px] font-semibold">{a.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="En ce moment" action="Voir plus" />
        <Rail>
          {recentArticles.slice(2).map((a) => (
            <article key={a.title} className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="relative h-[120px]"><Photo seed={`now-${a.title}`} /><span className="absolute top-2 left-2"><Badge>{a.cat}</Badge></span></div>
              <p className="line-clamp-2 p-3 text-[12.5px] font-bold">{a.title}</p>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Derniers articles" action="12 résultats" />
        <div className="flex flex-col gap-2.5 px-5">
          {recentArticles.map((a) => <ArticleRow key={a.title} a={a} />)}
        </div>
        <LoadMore>Charger plus</LoadMore>
      </section>

      <section className="brand-card mx-5 mt-7 flex flex-col gap-3 rounded-[24px] border border-magenta/30 p-5">
        <Overline className="flex items-center gap-1"><MailIcon size={11} /> Newsletter</Overline>
        <h3 className="text-[17px] font-black uppercase">La sélection de la semaine</h3>
        <p className="text-[12px] text-white/65">Le meilleur des séries, chaque vendredi dans votre boîte mail.</p>
        <div className="flex gap-2">
          <span className="flex h-12 flex-1 items-center rounded-full border border-line bg-ink/40 px-4 text-[15px] text-muted">Votre email</span>
          <span className="flex h-12 items-center rounded-full bg-white px-5 text-[13px] font-bold text-ink">OK</span>
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Article (news) ---------- */

const comments = [
  { who: 'Nadia', when: 'il y a 1 h', text: 'Dommage, la saison 2 avait vraiment trouvé son rythme. Kristen Wiig était parfaite.', r: ['❤️ 12', '😢 4'] },
  { who: 'Kévin', when: 'il y a 3 h', text: 'Pas surpris, les audiences étaient en baisse. Mais quel casting !', r: ['👍 8'] },
  { who: 'Sonia', when: 'hier', text: 'J’espère qu’une autre plateforme la récupérera…', r: ['🙏 6', '❤️ 3'] },
]

export function ArticleScreen() {
  return (
    <Screen tab="news">
      <PageHeader overline="News séries" title="Annulation" right={<IconButton><ShareIcon size={17} /></IconButton>} />
      <p className="mt-3 px-5 text-[10px] tracking-wider text-muted uppercase">SeriesAddict › News séries › Palm Royale</p>
      <div className="relative mx-5 mt-3 h-[210px] overflow-hidden rounded-[22px]"><Photo seed="palm-royale" /></div>
      <p className="mt-1.5 px-5 text-[10px] text-muted">© Apple TV · Source : communiqué officiel</p>

      <div className="mt-4 flex flex-col gap-3 px-5">
        <div className="flex flex-wrap gap-1.5">
          <Chip small active>News séries</Chip>
          <Chip small>Annulation</Chip>
          <Chip small>Apple TV</Chip>
        </div>
        <h1 className="text-[24px] leading-tight font-black uppercase">Apple TV annule Palm Royale après deux saisons</h1>
        <div className="flex items-center gap-2.5">
          <Avatar initials="CP" />
          <div>
            <p className="text-[12px] font-bold uppercase">Charlotte Pappel</p>
            <p className="text-[11px] text-muted">5 mars 2026 à 17:43</p>
          </div>
        </div>
        <p className="text-[15px] leading-relaxed font-semibold text-white/90">
          La comédie portée par Kristen Wiig ne connaîtra pas de troisième saison. Apple TV a confirmé la nouvelle ce jeudi.
        </p>
        <div className="flex gap-2">
          <Pill className="flex-1"><TvIcon size={14} /> Voir la série liée</Pill>
          <IconButton><HeartIcon size={17} /></IconButton>
          <IconButton><BookmarkIcon size={17} /></IconButton>
        </div>
        <p className="text-[14px] leading-[1.7] text-white/80">
          Lancée en 2024, la série suivait l’ascension d’une femme déterminée à intégrer la haute société de Palm Beach.
          Malgré des critiques enthousiastes et plusieurs nominations, la plateforme a choisi de ne pas prolonger l’aventure.
        </p>
        <p className="text-[14px] leading-[1.7] text-white/80">
          Les deux saisons restent disponibles en intégralité sur Apple TV. Aucune reprise par une autre plateforme n’a été
          évoquée pour le moment.
        </p>
      </div>

      <div className="mt-6"><p className="mb-2 px-5 text-[10px] tracking-wider text-muted uppercase">Annonces partenaires</p><AdSlot /></div>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Votre impression" />
        <div className="flex flex-wrap gap-2 px-5">
          {([['😍', 48], ['😢', 132], ['😡', 27], ['😮', 15], ['👏', 9]] as const).map(([e, n]) => <Emoji key={e} count={n}>{e}</Emoji>)}
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="À propos de cette news" />
        <div className="mx-5 flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-4 text-[12.5px]">
          <div className="flex justify-between"><span className="text-muted">Auteur</span><span className="font-semibold">Charlotte Pappel</span></div>
          <div className="flex justify-between"><span className="text-muted">Catégorie</span><span className="font-semibold">Annulation</span></div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Série liée</span>
            <span className="flex items-center gap-2 font-semibold"><span className="h-8 w-6 overflow-hidden rounded"><Photo seed="palm-poster" /></span>Palm Royale</span>
          </div>
          <div className="mt-1 flex gap-2">
            {[HeartIcon, BookmarkIcon, ShareIcon, MessageIcon].map((I, i) => <IconButton key={i} className="size-10"><I size={16} /></IconButton>)}
          </div>
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Lire aussi" action="Plus" />
        <Rail>
          {recentArticles.slice(0, 4).map((a) => (
            <article key={a.title} className="w-[200px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="h-[100px]"><Photo seed={`also-${a.title}`} /></div>
              <p className="line-clamp-2 p-3 text-[12.5px] font-bold">{a.title}</p>
            </article>
          ))}
        </Rail>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Commentaires (3)" />
        <div className="flex flex-col gap-2.5 px-5">
          {comments.map((c) => (
            <div key={c.who} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-3.5">
              <div className="flex items-center gap-2.5">
                <Avatar initials={c.who[0]} size="size-8" />
                <p className="flex-1 text-[13px] font-bold">{c.who}</p>
                <span className="text-[10.5px] text-muted">{c.when}</span>
              </div>
              <p className="text-[12.5px] leading-relaxed text-white/80">{c.text}</p>
              <div className="flex items-center gap-1.5 text-[11px] text-white/60">
                {c.r.map((r) => <span key={r} className="rounded-full border border-line px-2 py-0.5">{r}</span>)}
                <span className="ml-auto">J’aime · Répondre · Signaler</span>
              </div>
            </div>
          ))}
          <div className="mt-2 flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-4">
            <p className="text-[13px] font-bold">Rejoignez la discussion</p>
            <Field label="Pseudo" placeholder="Saisir un pseudo" />
            <Field label="Email" placeholder="Vous pouvez aussi ajouter un email" />
            <div className="flex gap-3 text-[12px] font-bold text-white/60"><span className="text-link">H1</span><span>H2</span><span>B</span><span>I</span><span>U</span><span>• Liste</span></div>
            <Field placeholder="Ajoutez votre commentaire ici…" tall />
            <Field placeholder="Captcha" />
            <PrimaryButton><SendIcon size={14} /> Commenter</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Dans la même catégorie" />
        <div className="flex flex-col gap-2.5 px-5">
          {recentArticles.slice(3, 5).map((a) => <ArticleRow key={a.title} a={a} />)}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Le Daily ---------- */

export function DailyScreen() {
  return (
    <Screen tab="news">
      <PageHeader overline="Le Daily" title="Actualités & articles" />
      <div className="mt-4">
        <Rail gap="gap-2">
          <Chip active count={142}>Tout</Chip>
          <Chip count={23}>Édito</Chip>
          <Chip count={18}>Interview</Chip>
          <Chip count={31}>Analyse</Chip>
          <Chip count={27}>Guide</Chip>
          <Chip count={43}>News</Chip>
        </Rail>
      </div>
      <article className="mx-5 mt-5 overflow-hidden rounded-[24px] border border-line bg-surface">
        <div className="relative h-[220px]"><Photo seed="edito-cinema" /><span className="absolute top-3 left-3"><Badge tone="magenta">Édito</Badge></span></div>
        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-[20px] leading-tight font-black uppercase">Stranger Things : la fin d’une ère</h2>
          <p className="text-[12.5px] leading-relaxed text-white/70">
            Avec la saison 5 qui marquera la conclusion de la série, revenons sur ce qui a fait de Stranger Things un phénomène
            culturel sans précédent dans l’histoire de Netflix.
          </p>
          <div className="mt-1 flex items-center gap-2.5">
            <Avatar initials="C" size="size-8" />
            <div className="flex-1">
              <p className="text-[12px] font-bold">Charlotte Martin</p>
              <p className="text-[10.5px] text-muted">26 février 2026 · 8 min</p>
            </div>
            <span className="text-[12px] font-semibold text-link">Lire ›</span>
          </div>
        </div>
      </article>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Articles récents" action="Voir tout" />
        <div className="flex flex-col gap-2.5 px-5">
          {recentArticles.map((a) => <ArticleRow key={a.title} a={a} />)}
        </div>
        <LoadMore>Charger plus d’articles</LoadMore>
      </section>
    </Screen>
  )
}

/* ---------- Article éditorial ---------- */

export function EditoScreen() {
  const p = 'text-[14px] leading-[1.7] text-white/80'
  const h = 'mt-2 text-[17px] font-extrabold'
  return (
    <Screen tab="news">
      <PageHeader overline="Le Daily · Édito" title="La fin d’une ère" right={<IconButton><BookmarkIcon size={17} /></IconButton>} />
      <div className="relative mx-5 mt-4 h-[220px] overflow-hidden rounded-[22px]">
        <Photo seed="edito-cinema" />
        <span className="absolute top-3 left-3"><Badge tone="magenta">Édito</Badge></span>
      </div>
      <article className="mt-5 flex flex-col gap-3 px-5">
        <h1 className="text-[24px] leading-tight font-black uppercase">Stranger Things : la fin d’une ère</h1>
        <p className="text-[15px] leading-relaxed text-white/75">
          Avec la saison 5 qui marquera la conclusion de la série, revenons sur ce qui a fait de Stranger Things un phénomène
          culturel sans précédent dans l’histoire de Netflix.
        </p>
        <div className="flex items-center gap-2.5 border-y border-line py-3">
          <Avatar initials="C" />
          <div className="flex-1">
            <p className="text-[12.5px] font-bold">Charlotte Martin</p>
            <p className="text-[11px] text-muted">26 février 2026 · 8 min</p>
          </div>
          <IconButton className="size-9"><ThumbUpIcon size={15} /></IconButton>
          <IconButton className="size-9"><ShareIcon size={15} /></IconButton>
        </div>
        <p className={p}>
          Depuis son arrivée sur Netflix en 2016, Stranger Things a révolutionné notre façon de consommer les séries. En mêlant
          habilement la nostalgie des années 80, les références à la pop culture de l’époque et une intrigue captivante mêlant
          science-fiction et horreur, les frères Duffer ont créé quelque chose de véritablement unique.
        </p>
        <h2 className={h}>Un phénomène mondial</h2>
        <p className={p}>
          Avec plus de 140 millions de comptes ayant visionné au moins un épisode, Stranger Things est devenue la série la plus
          populaire de l’histoire de Netflix. Mais au-delà des chiffres, c’est l’impact culturel qui est le plus impressionnant :
          produits dérivés, conventions cosplay, hommages dans d’autres productions… l’univers de Hawkins s’est imposé dans
          notre quotidien.
        </p>
        <h2 className={h}>Une alchimie parfaite</h2>
        <p className={p}>Le succès de Stranger Things repose sur plusieurs piliers solides :</p>
        <ul className="flex flex-col gap-2 pl-4 text-[14px] leading-relaxed text-white/80">
          <li className="list-disc"><b className="text-white">Le casting :</b> la performance des jeunes acteurs, notamment Millie Bobby Brown dans le rôle d’Eleven, a immédiatement captivé le public.</li>
          <li className="list-disc"><b className="text-white">L’ambiance :</b> la reconstitution minutieuse des années 80, des vêtements aux références musicales, crée une immersion totale.</li>
          <li className="list-disc"><b className="text-white">La mythologie :</b> l’Upside Down et ses créatures offrent un lore riche qui récompense les spectateurs attentifs.</li>
        </ul>
        <h2 className={h}>L’héritage</h2>
        <p className={p}>
          Alors que nous attendons avec impatience la saison 5, il est déjà évident que Stranger Things a ouvert la voie à une
          nouvelle génération de séries mêlant adolescence et éléments surnaturels. Des projets comme « The End of the F***ing
          World » ou « I Am Not Okay with This » doivent beaucoup à l’héritage de Hawkins.
        </p>
        <p className={p}>
          La conclusion de cette saga nous permettra de mesurer pleinement l’impact de cette série sur la télévision moderne. Une
          chose est sûre : l’Upside Down ne disparaîtra pas de nos mémoires de sitôt.
        </p>
        <div className="mt-2 flex items-center justify-center gap-3 border-t border-line pt-4 text-[12px] text-muted">
          Partager :
          <IconButton className="size-10">f</IconButton>
          <IconButton className="size-10">X</IconButton>
          <IconButton className="size-10"><LinkIcon size={15} /></IconButton>
        </div>
      </article>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Commentaires (34)" />
        <div className="flex flex-col gap-2.5 px-5">
          {[
            { w: 'Lucas', t: 'il y a 2 heures', c: 'Excellent article ! Je suis totalement d’accord avec l’analyse sur l’importance de la nostalgie dans le succès de la série.', l: 12 },
            { w: 'Sarah', t: 'il y a 4 heures', c: 'Personnellement, j’ai préféré les deux premières saisons. La troisième m’a semblé un peu moins réussie.', l: 8 },
          ].map((c) => (
            <div key={c.w} className="flex gap-2.5 rounded-2xl border border-line bg-surface p-3.5">
              <Avatar initials={c.w[0]} size="size-8" />
              <div className="flex-1">
                <p className="flex justify-between text-[12.5px] font-bold">{c.w}<span className="text-[10.5px] font-normal text-muted">{c.t}</span></p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-white/80">{c.c}</p>
                <p className="mt-1.5 flex gap-3 text-[11px] text-white/60"><span className="flex items-center gap-1"><ThumbUpIcon size={12} /> {c.l}</span>Répondre</p>
              </div>
            </div>
          ))}
          <div className="flex gap-2">
            <span className="flex h-12 flex-1 items-center rounded-full border border-line bg-surface px-4 text-[15px] text-muted">Ajouter un commentaire…</span>
            <span className="brand-gradient flex size-12 items-center justify-center rounded-full"><SendIcon size={17} /></span>
          </div>
        </div>
      </section>

      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Articles similaires" action="Voir tout" />
        <Rail>
          {[['Les séries qui ont marqué 2025', 5], ['L’évolution du streaming en 2026', 6], ['Les musiques de séries cultes', 5]].map(([t, m]) => (
            <article key={t} className="w-[200px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="h-[100px]"><Photo seed={`sim-${t}`} /></div>
              <div className="p-3">
                <p className="line-clamp-2 text-[12.5px] font-bold">{t}</p>
                <p className="mt-1 flex items-center gap-1 text-[10.5px] text-muted"><ClockIcon size={11} /> {m} min</p>
              </div>
            </article>
          ))}
        </Rail>
      </section>
    </Screen>
  )
}

/* ---------- La presse en parle ---------- */

const press = [
  { src: 'The Guardian', ab: 'TG', d: '22 jan 2026', r: '4.5', q: 'Une fresque royale d’une élégance et d’une précision historique remarquables.', s: 'The Crown' },
  { src: 'Variety', ab: 'V', d: '18 fév 2026', r: '5', q: 'La meilleure série de la décennie. Point final.', s: 'Succession' },
  { src: 'Le Monde', ab: 'LM', d: '10 fév 2026', r: '4.5', q: 'La science-fiction européenne n’a jamais été aussi ambitieuse.', s: 'Dark' },
  { src: 'The Atlantic', ab: 'TA', d: '5 fév 2026', r: '4.5', q: 'Phoebe Waller-Bridge est un génie.', s: 'Fleabag' },
  { src: 'Hollywood Reporter', ab: 'HR', d: '1 fév 2026', r: '5', q: 'Un monument de télévision historique.', s: 'Chernobyl' },
]

export function PressScreen() {
  return (
    <Screen tab="news">
      <PageHeader overline="Critiques" title="La presse en parle" />
      <div className="mt-4">
        <Rail gap="gap-2">
          <Chip active count={142}>Tout</Chip>
          <Chip count={67}>US/UK</Chip>
          <Chip count={45}>France</Chip>
          <Chip count={18}>Awards</Chip>
        </Rail>
      </div>
      <article className="mx-5 mt-5 overflow-hidden rounded-[24px] border border-line bg-surface">
        <div className="relative h-[220px]">
          <Photo seed="nyt-breaking-bad" />
          <span className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-ink/70 py-1 pr-3 pl-1 text-[11px] font-semibold">
            <span className="flex size-6 items-center justify-center rounded-full bg-white text-[8px] font-black text-ink">NYT</span>The New York Times
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <span className="flex items-center gap-2"><Badge><TrendingIcon size={10} className="mr-1" />Tendance</Badge><Stars value={5} size={12} /><span className="text-[11px]">5/5</span></span>
          <QuoteIcon size={20} className="text-link" />
          <p className="text-[17px] leading-snug font-bold">« Un chef-d’œuvre de la télévision moderne qui redéfinit le storytelling dramatique. »</p>
          <p className="text-[12px] text-white/65">Bryan Cranston livre une performance qui restera dans l’histoire de la télévision.</p>
          <div className="mt-1 flex items-center justify-between text-[11px]">
            <span className="text-muted">15 jan 2026 · Breaking Bad</span>
            <span className="flex items-center gap-1 font-semibold text-link">Lire la critique <ExternalIcon size={12} /></span>
          </div>
        </div>
      </article>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Dernières critiques" />
        <div className="flex flex-col gap-2.5 px-5">
          {press.map((p) => (
            <article key={p.src} className="flex flex-col gap-2 rounded-[20px] border border-line bg-surface p-4">
              <div className="flex items-center gap-2.5">
                <Avatar initials={p.ab} size="size-9" />
                <div className="flex-1">
                  <p className="text-[13px] font-bold">{p.src}</p>
                  <p className="text-[10.5px] text-muted">{p.d}</p>
                </div>
                <span className="flex items-center gap-1 text-[12px] font-bold">★ {p.r}</span>
              </div>
              <p className="text-[13px] leading-snug">« {p.q} »</p>
              <p className="flex justify-between border-t border-white/5 pt-2 text-[11px] text-link">{p.s}<ExternalIcon size={13} className="text-muted" /></p>
            </article>
          ))}
        </div>
        <LoadMore>Voir plus de critiques</LoadMore>
      </section>
    </Screen>
  )
}

/* ---------- Vidéos (toutes séries) ---------- */

const videoGrid = [
  { t: 'Tracker', k: 'Trailer', d: '2:14' },
  { t: 'Elsbeth', k: 'Teaser', d: '1:32' },
  { t: 'Found', k: 'Trailer', d: '2:05' },
  { t: 'High Potential', k: 'Extrait', d: '1:48' },
  { t: 'Matlock', k: 'Trailer', d: '2:30' },
  { t: 'Brilliant Minds', k: 'Teaser', d: '1:15' },
]

export function VideosHubScreen() {
  return (
    <Screen tab="news">
      <PageHeader overline="Vidéos" title="Trailers & teasers" />
      <section className="mt-4">
        <div className="relative h-[219px]">
          <Photo seed="dexter-original-sin" className="opacity-70" />
          <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent" />
          <span className="brand-gradient absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full"><PlayIcon size={22} /></span>
          <div className="absolute inset-x-5 bottom-3">
            <Badge>Teaser officiel · 1:42</Badge>
            <h1 className="mt-1 text-[20px] font-black uppercase">Dexter : Original Sin</h1>
          </div>
        </div>
      </section>
      <section className="mt-5 flex flex-col gap-3">
        <SectionTitle title="Next" />
        <div className="flex flex-col gap-2 px-5">
          {videoGrid.slice(0, 4).map((v, i) => (
            <div key={v.t} className="flex items-center gap-3">
              <span className="w-4 text-[12px] font-bold text-muted">{i + 1}</span>
              <span className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg"><Photo seed={`next-${v.t}`} /></span>
              <div className="flex-1">
                <p className="text-[13px] font-bold">{v.t}</p>
                <p className="text-[11px] text-muted">{v.k} · {v.d}</p>
              </div>
              <PlayIcon size={14} className="text-white/60" />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Vidéos" action="Tout voir" />
        <div className="grid grid-cols-2 gap-3 px-5">
          {videoGrid.map((v) => (
            <div key={v.t}>
              <div className="relative h-[96px] overflow-hidden rounded-xl">
                <Photo seed={`vgrid-${v.t}`} />
                <span className="absolute right-1.5 bottom-1.5"><Badge>{v.d}</Badge></span>
                <span className="absolute inset-0 m-auto flex size-9 items-center justify-center rounded-full bg-ink/60"><PlayIcon size={12} /></span>
              </div>
              <p className="mt-1.5 text-[12.5px] font-bold">{v.t}</p>
              <p className="text-[10.5px] text-muted">{v.k}</p>
            </div>
          ))}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Lecteur vidéo ---------- */

export function PlayerScreen() {
  return (
    <Screen tab="news">
      <div className="relative h-[219px] bg-ink">
        <Photo seed="tracker-trailer" className="opacity-70" />
        <div className="absolute inset-x-3 top-3 flex justify-between">
          <span className="flex gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-ink/60"><VolumeIcon size={15} /></span>
            <Badge>Featured</Badge>
          </span>
          <span className="flex gap-1.5">
            {[HeartIcon, BookmarkIcon, ShareIcon].map((I, i) => <span key={i} className="flex size-9 items-center justify-center rounded-full bg-ink/60"><I size={15} /></span>)}
          </span>
        </div>
        <span className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-white text-ink"><PlayIcon size={22} /></span>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20"><div className="brand-gradient h-full w-1/3" /></div>
      </div>
      <div className="flex flex-col gap-2 px-5 pt-4">
        <span className="flex flex-wrap gap-1.5"><Badge tone="magenta">New drop</Badge><Badge>Saison 2</Badge><Badge>CBS</Badge></span>
        <h1 className="text-[22px] font-black uppercase">Tracker : trailer saison 2</h1>
        <p className="flex gap-3 text-[11.5px] text-muted"><span>CBS</span>·<span>2:14</span>·<span className="flex items-center gap-1"><EyeIcon size={12} /> 1.2M</span></p>
        <div className="mt-1 flex gap-2">
          <Pill className="flex-1"><PlayIcon size={12} /> Watch now</Pill>
          <OutlinePill className="flex-1"><PlusIcon size={14} /> Queue</OutlinePill>
        </div>
      </div>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Watch queue" />
        <div className="flex flex-col gap-2 px-5">
          {[['Official Trailer', '2:14'], ['Teaser', '0:45'], ['Sneak Peek', '3:02']].map(([t, d], i) => (
            <div key={t} className={`flex items-center gap-3 rounded-2xl border p-2.5 ${i === 0 ? 'border-magenta/50 bg-magenta-deep/30' : 'border-line bg-surface'}`}>
              <span className="relative h-12 w-20 shrink-0 overflow-hidden rounded-lg"><Photo seed={`queue-${t}`} /></span>
              <div className="flex-1"><p className="text-[13px] font-bold">{t}</p><p className="text-[11px] text-muted">Tracker · {d}</p></div>
              {i === 0 ? <span className="text-[10px] font-bold text-magenta uppercase">En cours</span> : <MoreIcon size={16} className="text-muted" />}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Watch also" />
        <Rail>
          {['The Boys', 'Severance', 'Reacher', 'Silo'].map((t) => (
            <div key={t} className="w-[150px] shrink-0">
              <div className="relative h-[86px] overflow-hidden rounded-xl"><Photo seed={`also-v-${t}`} /><span className="absolute inset-0 m-auto flex size-8 items-center justify-center rounded-full bg-ink/60"><FilmIcon size={13} /></span></div>
              <p className="mt-1.5 text-[12.5px] font-bold">{t}</p>
            </div>
          ))}
        </Rail>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Comments" />
        <div className="flex flex-col gap-2.5 px-5">
          <div className="flex gap-2">
            <span className="flex h-12 flex-1 items-center rounded-full border border-line bg-surface px-4 text-[15px] text-muted">Ajouter un commentaire…</span>
            <span className="brand-gradient flex size-12 items-center justify-center rounded-full"><SendIcon size={17} /></span>
          </div>
          {[['Lucas', 'La saison 2 s’annonce encore plus intense !'], ['Emma', 'Justin Hartley est parfait dans ce rôle.'], ['Nina', 'Vivement la sortie, le teaser donne envie.']].map(([w, c]) => (
            <div key={w} className="flex gap-2.5">
              <Avatar initials={w[0]} size="size-8" />
              <div><p className="text-[12.5px] font-bold">{w}</p><p className="text-[12.5px] text-white/75">{c}</p></div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-4 px-5"><p className="flex items-center gap-1 text-[11px] text-muted"><SparklesIcon size={11} /> Vidéos fournies par les diffuseurs officiels</p></div>
    </Screen>
  )
}
