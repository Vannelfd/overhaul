import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  HeartIcon,
  ListIcon,
  LockIcon,
  MessageIcon,
  MoreIcon,
  PencilIcon,
  PlayIcon,
  PlusIcon,
  SparklesIcon,
  StarIcon,
  TrendingIcon,
  TvIcon,
  AwardIcon,
  UserPlusIcon,
  UsersIcon,
  XIcon,
  EyeIcon,
} from '../../ui/icons'
import { Field, HeroCard, MemberHeader, OutlinePill, Pill, TabsRow, profileTabs } from '../../ui/blocks'
import {
  Avatar,
  Badge,
  Chip,
  IconButton,
  Overline,
  PageHeader,
  Photo,
  Progress,
  Screen,
  SearchField,
  SectionTitle,
  TopBar,
} from '../../ui/kit'

/* ---------- Mes listes ---------- */

const lists = [
  { t: 'Séries dystopiques à voir absolument', pub: true, d: 'Une sélection sombre, futuriste et addictive.', n: 12, l: 86, c: 14 },
  { t: 'Mini-séries pour un week-end', pub: false, d: 'Courtes, fortes, sans filler.', n: 8, l: 21, c: 5 },
  { t: 'Mon top thrillers séries', pub: true, d: 'Mes références tension / mystère / noirceur.', n: 15, l: 52, c: 9 },
]

export function ListsScreen() {
  return (
    <Screen tab="profile">
      <TopBar />
      <TabsRow tabs={profileTabs} active="Listes" />
      <div className="mt-5">
        <HeroCard
          overline="Mes listes"
          title="Organiser mes séries par univers, humeur ou usage"
          text="Les listes servent à classer, partager et éditorialiser tes découvertes. Elles prolongent la logique du projet en mêlant organisation personnelle et partage social."
          stats={[['6', 'Listes créées'], ['159', 'Likes reçus'], ['43', 'Séries classées']]}
        >
          <Pill className="flex-1"><PlusIcon size={14} /> Créer une liste</Pill>
          <OutlinePill className="flex-1 bg-ink/30"><GlobeIcon size={14} /> Listes publiques</OutlinePill>
        </HeroCard>
      </div>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Mes listes personnalisées" />
        <p className="-mt-1 px-5 text-[11.5px] text-muted">Des listes utiles visuellement, simples à parcourir et faciles à partager.</p>
        <div className="flex gap-2 px-5">
          <div className="min-w-0 flex-1"><SearchField placeholder="Rechercher une liste…" /></div>
          <span className="brand-gradient flex size-12 items-center justify-center rounded-full"><PlusIcon size={20} /></span>
        </div>
        <div className="flex flex-col gap-3 px-5">
          {lists.map((l) => (
            <article key={l.t} className="flex flex-col gap-3 rounded-[22px] border border-line bg-surface p-4">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((n) => (
                  <span key={n} className="h-[64px] flex-1 overflow-hidden rounded-xl"><Photo seed={`list-${l.t}-${n}`} /></span>
                ))}
              </div>
              <div className="flex items-start justify-between gap-2">
                <p className="text-[14px] leading-snug font-extrabold uppercase">{l.t}</p>
                <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[10px]">{l.n} séries</span>
              </div>
              <span className="flex w-fit items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[9.5px] font-bold uppercase">
                {l.pub ? <GlobeIcon size={10} /> : <LockIcon size={10} />} {l.pub ? 'Publique' : 'Privée'}
              </span>
              <p className="text-[12px] text-white/70">{l.d}</p>
              <div className="flex items-center justify-between">
                <span className="flex gap-3 text-[11px] text-white/60">
                  <span className="flex items-center gap-1"><HeartIcon size={12} className="text-magenta" /> {l.l} likes</span>
                  <span className="flex items-center gap-1"><MessageIcon size={12} className="text-link" /> {l.c} commentaires</span>
                </span>
                <span className="flex gap-1.5">
                  <Pill className="h-9 px-3.5">Ouvrir ›</Pill>
                  <IconButton className="size-9"><PencilIcon size={13} /></IconButton>
                </span>
              </div>
            </article>
          ))}
          <div className="flex h-[110px] flex-col items-center justify-center gap-2 rounded-[22px] border border-dashed border-white/25">
            <span className="brand-gradient flex size-10 items-center justify-center rounded-full"><PlusIcon size={18} /></span>
            <span className="text-[12.5px] font-semibold">Créer une liste</span>
          </div>
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Créer une liste ---------- */

const addable = [
  { t: 'Severance', m: '2022 · Thriller · SF', on: true },
  { t: 'The Bear', m: '2022 · Drame · Cuisine' },
  { t: 'Dark', m: '2017 · Mystère · SF', on: true },
  { t: 'Silo', m: '2023 · SF · Drame' },
  { t: 'Mindhunter', m: '2017 · Crime · Psychologique' },
  { t: 'From', m: '2022 · Horreur · Mystère' },
]

export function CreateListScreen() {
  return (
    <div className="flex min-h-[844px] flex-col bg-ink text-white">
      <div className="flex-1 pb-6">
        <PageHeader overline="Création éditoriale" title="Nouvelle liste" />
        <p className="mt-3 px-5 text-[12.5px] text-white/65">Une bonne liste doit être facile à comprendre, visuellement forte, et pouvoir mélanger sélection personnelle et intention éditoriale.</p>
        <div className="mt-3 flex gap-2 px-5">
          <Chip small count={6}>Listes</Chip>
          <Chip small count={4}>Publiques</Chip>
          <Chip small count={2}>Privées</Chip>
        </div>

        <section className="mt-6 flex flex-col gap-3">
          <SectionTitle title="Configuration de la liste" />
          <div className="flex flex-col gap-4 px-5">
            <Field label="Titre de la liste" placeholder="Ex. Les meilleures mini-séries Netflix" />
            <Field label="Description" placeholder="Explique l’intention de ta liste en quelques lignes…" tall />
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-[0.18em] text-muted uppercase">Visibilité</span>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex h-11 items-center justify-center gap-1.5 rounded-full bg-white text-[12.5px] font-bold text-ink uppercase"><GlobeIcon size={14} /> Publique</span>
                <span className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-line text-[12.5px] font-semibold text-white/70 uppercase"><LockIcon size={14} /> Privée</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-3">
          <SectionTitle title="Aperçu" />
          <div className="brand-card mx-5 flex gap-3 rounded-[22px] border border-magenta/30 p-4">
            <div className="flex-1">
              <p className="text-[14px] font-extrabold uppercase">Titre de la future liste</p>
              <p className="mt-1 text-[11.5px] text-white/65">La description apparaîtra ici pour donner du contexte et renforcer le caractère éditorial de la liste.</p>
              <div className="mt-2 flex gap-1.5"><Chip small>Publique</Chip><Chip small>2 séries</Chip></div>
            </div>
            <span className="h-[100px] w-[70px] shrink-0 overflow-hidden rounded-xl"><Photo seed="preview-list" /></span>
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-3">
          <SectionTitle title="Ajouter des séries" />
          <div className="px-5"><SearchField placeholder="Rechercher une série à ajouter…" /></div>
          <div className="flex flex-col gap-2 px-5">
            {addable.map((a) => (
              <div key={a.t} className={`flex items-center gap-3 rounded-2xl border p-2.5 ${a.on ? 'border-link/50 bg-link/5' : 'border-line bg-surface'}`}>
                <span className="h-12 w-9 shrink-0 overflow-hidden rounded-lg"><Photo seed={`add-${a.t}`} /></span>
                <div className="flex-1"><p className="text-[13px] font-bold">{a.t}</p><p className="text-[10.5px] text-muted">{a.m}</p></div>
                <span className={`flex size-9 items-center justify-center rounded-full border ${a.on ? 'border-link bg-link' : 'border-line'}`}>
                  {a.on ? <CheckIcon size={15} /> : <PlusIcon size={15} />}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="sticky bottom-0 grid grid-cols-[1fr_2fr] gap-2 border-t border-line bg-ink px-5 pt-3 pb-6">
        <span className="flex h-12 items-center justify-center gap-1.5 rounded-full border border-line text-[13.5px] font-semibold"><XIcon size={14} /> Annuler</span>
        <span className="brand-gradient flex h-12 items-center justify-center gap-1.5 rounded-full text-[14px] font-bold"><CheckIcon size={15} /> Créer la liste</span>
      </div>
    </div>
  )
}

/* ---------- Historique ---------- */

const timeline = [
  { day: 'Vendredi', date: '10 juillet 2026', items: [{ t: 'Breaking Bad', p: 'Netflix', e: 'S03E07', h: '22h15', n: 5 }] },
  { day: 'Jeudi', date: '9 juillet 2026', items: [{ t: 'The Bear', p: 'Disney+', e: 'S02E05', h: '21h40', n: 4 }] },
  { day: 'Mercredi', date: '8 juillet 2026', items: [{ t: 'Dark', p: 'Netflix', e: 'S01E03', h: '20h00', n: 5 }, { t: 'Severance', p: 'Apple TV+', e: 'S01E08', h: '23h00', v: 68 }] },
  { day: 'Mardi', date: '7 juillet 2026', items: [{ t: 'The Last of Us', p: 'Prime Video', e: 'S01E06', h: '21h00', n: 4 }] },
  { day: 'Lundi', date: '6 juillet 2026', items: [{ t: 'Stranger Things', p: 'Netflix', e: 'S04E09', h: '19h30', n: 4 }, { t: 'House of the Dragon', p: 'HBO Max', e: 'S02E04', h: '22h30', v: 45 }] },
]
const memories = [
  { k: 'Meilleur épisode vu', t: 'Ozymandias', s: 'Breaking Bad — S05E14', Icon: AwardIcon, c: 'text-yellow-400' },
  { k: 'Épisode le plus noté', t: 'The Bicameral Mind', s: 'Westworld — S01E10', Icon: StarIcon, c: 'text-magenta' },
  { k: 'Première série terminée', t: 'Friends', s: 'Saison 10 — 236 épisodes', Icon: SparklesIcon, c: 'text-link' },
  { k: 'Série abandonnée', t: 'The Walking Dead', s: 'Arrêtée après la saison 8', Icon: HeartIcon, c: 'text-red-400' },
]

export function HistoryScreen() {
  return (
    <Screen tab="profile">
      <MemberHeader overline="Historique de" name="Alexandre Martin" initials="AM" />
      <section className="mt-5 flex flex-col gap-3">
        <SectionTitle title="Profil du spectateur" />
        <div className="grid grid-cols-2 gap-2.5 px-5">
          {[[CheckIcon, '156', 'Épisodes', 'cette année'], [ClockIcon, '89', 'Heures', 'devant l’écran'], [TvIcon, 'Dark', 'Série', 'favorite'], [ListIcon, 'Science-fiction', 'Genre', 'préféré']].map(([I, v, l, s]) => {
            const Icon = I as typeof CheckIcon
            return (
              <div key={l as string} className="flex flex-col gap-1 rounded-2xl border border-line bg-surface p-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-ink/60"><Icon size={14} className="text-link" /></span>
                <p className="truncate text-[18px] font-black">{v as string}</p>
                <p className="text-[9.5px] font-bold tracking-wider text-muted uppercase">{l as string} <span className="font-normal normal-case">{s as string}</span></p>
              </div>
            )
          })}
        </div>
        <div className="mx-5 flex flex-col gap-2 rounded-2xl border border-line bg-surface p-4">
          <p className="flex items-center justify-between text-[12px]"><span className="flex items-center gap-1.5 font-bold"><TrendingIcon size={14} className="text-link" /> Rythme actuel</span><span className="text-[20px] font-black text-link">12</span></p>
          <p className="text-[11.5px] text-white/60">jours consécutifs avec au moins un épisode regardé</p>
          <Progress value={70} />
        </div>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Activité récente" />
        <div className="flex flex-col gap-4 px-5">
          {timeline.map((d) => (
            <div key={d.date} className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-[11px]"><span className="rounded-full bg-magenta-deep px-2 py-0.5 font-semibold text-magenta">{d.day}</span><span className="text-white/60">{d.date}</span></p>
              {d.items.map((i) => (
                <div key={i.t} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
                  <span className="h-14 w-11 shrink-0 overflow-hidden rounded-lg"><Photo seed={`histo-${i.t}`} /></span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 text-[13px] font-bold">{i.t} <span className="rounded-full bg-white/10 px-1.5 text-[9px] font-semibold">{i.p}</span></p>
                    <p className="text-[11px] text-link">{i.e}</p>
                    {'v' in i && i.v !== undefined ? (
                      <div className="mt-1 flex items-center gap-2"><span className="text-[10px] text-yellow-400">{i.h} · {i.v} % vu</span><div className="h-1 flex-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-yellow-400" style={{ width: `${i.v}%` }} /></div></div>
                    ) : (
                      <p className="text-[10px] text-muted">{i.h} · ★ {'n' in i ? i.n : ''}</p>
                    )}
                  </div>
                  <IconButton className="size-9"><PlayIcon size={12} /></IconButton>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Souvenirs" />
        <div className="flex flex-col gap-2 px-5">
          {memories.map(({ k, t, s, Icon, c }) => (
            <div key={k} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
              <div className="flex-1">
                <p className="text-[9.5px] font-bold tracking-wider text-muted uppercase">{k}</p>
                <p className="text-[14px] font-bold">{t}</p>
                <p className="text-[11px] text-white/55">{s}</p>
              </div>
              <span className="flex size-10 items-center justify-center rounded-full bg-ink/60"><Icon size={17} className={c} /></span>
            </div>
          ))}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Amis ---------- */

const friends = [
  { n: 'Charlotte Dubois', i: 'CD', on: true, st: 'En ligne', c: 12, f: 'Breaking Bad' },
  { n: 'Lucas Moreau', i: 'LM', st: 'Il y a 5 min', c: 8, f: 'Dark' },
  { n: 'Emma Bernard', i: 'EB', on: true, st: 'En ligne', c: 15, f: 'The Crown' },
  { n: 'Thomas Petit', i: 'TP', st: 'Il y a 1 heure', c: 5, f: 'Succession' },
  { n: 'Marie Leroy', i: 'ML', st: 'Il y a 30 min', c: 9, f: 'Fleabag' },
  { n: 'Nadia Gauthier', i: 'NG', on: true, st: 'En ligne', c: 11, f: 'Stranger Things' },
]

export function FriendsScreen() {
  return (
    <Screen tab="profile">
      <TopBar />
      <TabsRow tabs={profileTabs} active="Amis" />
      <div className="mt-5">
        <HeroCard
          overline="Réseau social séries"
          title="Suivre ses amis, comparer ses goûts, découvrir ensemble"
          text="Cette section relie l’activité sociale à la découverte des séries : amis, suggestions, interactions et mouvements récents de la communauté."
          stats={[['14', 'Amis'], ['3', 'Demandes'], ['27', 'Interactions']]}
        >
          <Pill className="flex-1"><UserPlusIcon size={14} /> Ajouter un ami</Pill>
          <OutlinePill className="flex-1 bg-ink/30"><UsersIcon size={14} /> Abonnements</OutlinePill>
        </HeroCard>
      </div>
      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Activité des amis" action="Voir tout" />
        <div className="flex flex-col gap-2 px-5">
          {[[StarIcon, 'Nadia', 'a noté', 'Severance', 'il y a 1 h'], [ListIcon, 'Kevin', 'a ajouté à sa liste', 'The Bear', 'hier'], [MessageIcon, 'Maya', 'a commenté', 'Dark', 'il y a 3 j']].map(([I, w, a, s, t]) => {
            const Icon = I as typeof StarIcon
            return (
              <div key={w as string} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-ink/60"><Icon size={15} className="text-magenta" /></span>
                <p className="flex-1 text-[12.5px]"><b>{w as string}</b> {a as string} <b>{s as string}</b><br /><span className="text-[10.5px] text-muted">{t as string}</span></p>
                <span className="rounded-full border border-line px-2.5 py-1 text-[11px]">Voir ›</span>
              </div>
            )
          })}
        </div>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Mes amis" />
        <div className="flex gap-2 px-5">
          <Chip small active count={47}>Tous</Chip>
          <Chip small count={12}>En ligne</Chip>
          <Chip small count={8}>Récents</Chip>
        </div>
        <div className="px-5"><SearchField placeholder="Rechercher un ami…" /></div>
        <div className="flex flex-col gap-2.5 px-5">
          {friends.map((f) => (
            <article key={f.n} className="flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-3.5">
              <div className="flex items-center gap-3">
                <span className="relative">
                  <Avatar initials={f.i} size="size-12" />
                  {f.on && <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-surface bg-green-500" />}
                </span>
                <div className="flex-1">
                  <p className="text-[13.5px] font-bold">{f.n}</p>
                  <p className={`text-[11px] ${f.on ? 'text-link' : 'text-muted'}`}>{f.st}</p>
                  <p className="text-[11px] text-white/60">{f.c} séries en commun · Coup de cœur : <span className="text-magenta">{f.f}</span></p>
                </div>
                <MoreIcon size={18} className="text-muted" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex h-9 items-center justify-center gap-1.5 rounded-full border border-line text-[12px] font-semibold"><MessageIcon size={13} /> Message</span>
                <span className="flex h-9 items-center justify-center gap-1.5 rounded-full border border-line text-[12px] font-semibold"><EyeIcon size={13} /> Profil</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-7 flex flex-col gap-3">
        <SectionTitle title="Suggestions" />
        <div className="flex flex-col gap-2 px-5">
          {[['Charlotte Dubois', 'CD', 12], ['Lucas Moreau', 'LM', 8], ['Emma Bernard', 'EB', 5], ['Thomas Petit', 'TP', 5]].map(([n, i, c]) => (
            <div key={n} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-2.5">
              <Avatar initials={i as string} />
              <div className="flex-1"><p className="text-[13px] font-semibold">{n}</p><p className="text-[10.5px] text-muted">{c} séries en commun</p></div>
              <IconButton className="size-9"><UserPlusIcon size={15} className="text-link" /></IconButton>
            </div>
          ))}
        </div>
      </section>
    </Screen>
  )
}

/* ---------- Demandes d'amis ---------- */

const requests = [
  { n: 'Sarah Dupont', h: '@sarah_series', c: 12, w: 'Il y a 2 heures', m: 'Salut ! J’ai vu que tu aimais aussi Stranger Things. Ça te dit qu’on compare nos sériethèques ?' },
  { n: 'Lucas Martin', h: '@lucas_tv', c: 8, w: 'Il y a 5 heures' },
  { n: 'Emma Bernard', h: '@emma_addict', c: 23, w: 'Hier', m: 'Tu as une excellente sélection de séries ! J’adorerais échanger avec toi.' },
]

export function FriendRequestsScreen() {
  return (
    <Screen tab="profile">
      <PageHeader overline="Gérer vos demandes et suggestions" title="Demandes d’amis" />
      <div className="mt-4 px-5"><SearchField placeholder="Rechercher un membre…" /></div>
      <div className="mt-4 flex border-b border-line px-5 text-[12.5px] font-semibold">
        {[['Reçues', 3], ['Envoyées', 1], ['Suggestions', 5]].map(([t, n], i) => (
          <span key={t} className={`relative flex flex-1 items-center justify-center gap-1.5 pb-3 ${i === 0 ? 'text-white' : 'text-muted'}`}>
            {t} <span className={`rounded-full px-1.5 text-[10px] ${i === 0 ? 'bg-white text-ink' : 'bg-white/10'}`}>{n}</span>
            {i === 0 && <span className="brand-gradient absolute inset-x-2 bottom-0 h-0.5 rounded-full" />}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3 px-5">
        {requests.map((r) => (
          <article key={r.n} className="flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-4">
            <div className="flex items-start gap-3">
              <span className="size-12 shrink-0 overflow-hidden rounded-full"><Photo seed={`req-${r.n}`} /></span>
              <div className="flex-1">
                <p className="text-[14px] font-bold">{r.n}</p>
                <p className="text-[11px] text-white/60">{r.h}</p>
                <p className="flex items-center gap-1 text-[10.5px] text-muted"><UsersIcon size={11} /> {r.c} amis en commun</p>
              </div>
              <span className="text-[10.5px] text-muted">{r.w}</span>
            </div>
            {r.m && <p className="rounded-xl bg-ink/50 p-3 text-[12px] leading-snug text-white/75 italic">« {r.m} »</p>}
            <div className="grid grid-cols-2 gap-2">
              <span className="flex h-11 items-center justify-center gap-1.5 rounded-full bg-white text-[13px] font-bold text-ink"><UserPlusIcon size={15} /> Accepter</span>
              <span className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-line text-[13px] font-semibold"><XIcon size={14} /> Refuser</span>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-2 px-5">
        <Overline>Astuce</Overline>
        <p className="flex items-center gap-2 text-[12px] text-white/65"><CalendarIcon size={14} className="text-link" /> Les demandes non traitées expirent au bout de 30 jours.</p>
      </div>
      <div className="mt-4 px-5"><Badge>3 nouvelles demandes</Badge></div>
      <div className="mt-6 flex gap-2 px-5"><Chip small>Voir mes amis</Chip><Chip small>Inviter par lien</Chip></div>
    </Screen>
  )
}
