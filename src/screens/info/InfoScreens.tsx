import type { ReactNode } from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CompassIcon,
  HelpIcon,
  HomeIcon,
  LayersIcon,
  LogoutIcon,
  MailIcon,
  NewsIcon,
  PhoneIcon,
  PinIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  UsersIcon,
  XIcon,
  CrownIcon,
  CartIcon,
} from '../../ui/icons'
import { InfoHeader } from '../../ui/blocks'
import { Avatar, Overline, PrimaryButton } from '../../ui/kit'

// Pages hors barre d'onglets : menu, aide, contact, équipe, légal, 404.

function InfoShell({ children, back = 'Accueil' }: { children: ReactNode; back?: string }) {
  return (
    <div className="relative min-h-[844px] overflow-hidden bg-ink pb-10 text-white">
      <div className="absolute -top-20 -right-24 size-56 rounded-full bg-teal/30 blur-3xl" />
      <div className="relative">
        <InfoHeader
          right={
            <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-[11.5px] font-semibold">
              <ArrowLeftIcon size={13} /> {back}
            </span>
          }
        />
        {children}
      </div>
    </div>
  )
}

function PageTitle({ tag, title, text }: { tag: string; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 pt-8 text-center">
      <span className="rounded-full border border-line px-3 py-1 text-[10px] tracking-[0.25em] text-white/70 uppercase">{tag}</span>
      <h1 className="text-[26px] leading-tight font-black uppercase">{title}</h1>
      <p className="text-[13px] leading-relaxed text-white/60">{text}</p>
    </div>
  )
}

/* ---------- Menu (ouvert depuis l'icône ☰) ---------- */

const navGroups: { title: string; items: [typeof HomeIcon, string][] }[] = [
  { title: 'Navigation', items: [[HomeIcon, 'Accueil'], [CompassIcon, 'Séries'], [NewsIcon, 'News'], [CalendarIcon, 'Calendrier'], [LayersIcon, 'Collections'], [CartIcon, 'Shop']] },
  { title: 'Communauté', items: [[UsersIcon, 'Membres'], [NewsIcon, 'Discussions'], [LayersIcon, 'Listes'], [CompassIcon, 'Sériethèque']] },
  { title: 'Aide & infos', items: [[HelpIcon, 'Aide'], [MailIcon, 'Contact'], [UsersIcon, 'Équipe']] },
  { title: 'Légal', items: [[ShieldIcon, 'Mentions légales'], [ShieldIcon, 'Confidentialité'], [ShieldIcon, 'CGU'], [ShieldIcon, 'Cookies']] },
]

export function MenuScreen() {
  return (
    <div className="min-h-[844px] bg-ink pb-10 text-white">
      <header className="flex items-center justify-between px-5 pt-4">
        <span className="text-[17px] font-black tracking-[0.12em]">SERIE<span className="brand-text">ADDICT</span></span>
        <span className="flex size-11 items-center justify-center rounded-full border border-line bg-surface"><XIcon size={20} /></span>
      </header>
      <div className="brand-card mx-5 mt-5 flex items-center gap-3 rounded-[22px] border border-magenta/30 p-4">
        <Avatar initials="C" size="size-12" />
        <div className="flex-1">
          <p className="text-[15px] font-bold">Charlotte</p>
          <p className="text-[11.5px] text-white/60">Voir mon profil</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-[10px] font-black text-ink"><CrownIcon size={11} /> VIP</span>
      </div>
      <div className="mx-5 mt-3 flex h-12 items-center gap-3 rounded-full border border-line bg-surface px-4 text-muted">
        <SearchIcon size={18} className="text-link" /> <span className="text-[15px]">Rechercher sur SerieAddict</span>
      </div>
      {navGroups.map((g) => (
        <section key={g.title} className="mt-5 px-5">
          <Overline className="mb-2">{g.title}</Overline>
          <div className="flex flex-col rounded-[20px] border border-line bg-surface">
            {g.items.map(([Icon, l]) => (
              <span key={l} className="flex h-12 items-center gap-3 border-b border-white/5 px-4 text-[13.5px] font-semibold last:border-0">
                <Icon size={17} className="text-white/60" />
                <span className="flex-1">{l}</span>
                <ChevronRightIcon size={15} className="text-muted" />
              </span>
            ))}
          </div>
        </section>
      ))}
      <div className="mt-5 flex flex-col gap-2 px-5">
        <span className="flex h-12 items-center gap-3 rounded-2xl border border-line bg-surface px-4 text-[13.5px] font-semibold"><BellIcon size={17} className="text-white/60" /> Notifications</span>
        <span className="flex h-12 items-center gap-3 rounded-2xl border border-line bg-surface px-4 text-[13.5px] font-semibold"><SettingsIcon size={17} className="text-white/60" /> Paramètres</span>
        <span className="flex h-12 items-center gap-3 rounded-2xl px-4 text-[13.5px] font-semibold text-magenta"><LogoutIcon size={17} /> Se déconnecter</span>
      </div>
      <div className="mt-6 flex flex-col items-center gap-3 px-5 text-center">
        <div className="flex gap-2">
          {['X', 'I', 'T', 'Y'].map((s) => <span key={s} className="flex size-10 items-center justify-center rounded-full border border-line text-[12px] font-bold">{s}</span>)}
        </div>
        <p className="text-[11px] text-muted">Le spécialiste des séries. Découvrez, suivez et partagez vos séries préférées avec une communauté passionnée.</p>
        <p className="text-[10px] text-muted">© 2010-2025 · Series Addict · Tous droits réservés.</p>
      </div>
    </div>
  )
}

/* ---------- Centre d'aide ---------- */

const faq = [
  'Puis-je suivre mes séries préférées ?',
  'Comment noter ou commenter une série ?',
  'Qu’est-ce que le calendrier des sorties ?',
  'Comment contacter le support ?',
  'Mon compte est-il gratuit ?',
]

export function HelpScreen() {
  return (
    <InfoShell>
      <PageTitle tag="Aide" title="Centre d’aide" text="Trouvez rapidement des réponses à vos questions sur Series Addict." />
      <div className="mx-5 mt-6 flex h-12 items-center gap-3 rounded-full border border-line bg-surface px-4 text-muted">
        <SearchIcon size={18} /> <span className="text-[15px]">Rechercher une question…</span>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 px-5">
        <div className="rounded-2xl border border-link/40 bg-surface p-4">
          <p className="flex items-center justify-between text-[13.5px] font-bold">Comment créer un compte Series Addict ? <ChevronDownIcon size={16} className="rotate-180 text-link" /></p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-white/65">
            Cliquez sur « S’inscrire » en haut de page, renseignez votre email et choisissez un mot de passe. Vous recevrez un
            email de confirmation pour activer votre compte.
          </p>
        </div>
        {faq.map((q) => (
          <p key={q} className="flex min-h-[52px] items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 text-[13.5px] font-semibold">
            {q} <ChevronDownIcon size={16} className="shrink-0 text-link" />
          </p>
        ))}
      </div>
      <div className="mx-5 mt-6 flex flex-col items-center gap-2 rounded-[22px] border border-line bg-surface p-5 text-center">
        <p className="text-[14px] font-bold">Vous ne trouvez pas votre réponse ?</p>
        <p className="text-[12px] text-white/60">Notre équipe est disponible pour vous accompagner.</p>
        <span className="brand-gradient mt-1 flex h-10 items-center rounded-full px-5 text-[12.5px] font-bold">Nous contacter</span>
      </div>
    </InfoShell>
  )
}

/* ---------- Contact ---------- */

export function ContactScreen() {
  return (
    <InfoShell>
      <PageTitle tag="Contact" title="Contactez-nous" text="Une question, une suggestion ou un problème ? L’équipe Series Addict est là pour vous aider." />
      <div className="mt-6 flex flex-col gap-2.5 px-5">
        {[
          [MailIcon, 'Email', 'contact@seriesaddict.fr', 'Réponse sous 48 h'],
          [PinIcon, 'Adresse', 'Series Addict, 12 rue de la Fiction', '75010 Paris, France'],
          [PhoneIcon, 'Téléphone', '+33 1 23 45 67 89', 'Du lundi au vendredi, 9h-18h'],
        ].map(([I, l, v, s]) => {
          const Icon = I as typeof MailIcon
          return (
            <div key={l as string} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4">
              <span className="brand-gradient flex size-11 shrink-0 items-center justify-center rounded-full"><Icon size={18} /></span>
              <div className="flex-1">
                <p className="text-[11px] font-bold tracking-wider uppercase">{l as string}</p>
                <p className="text-[13px] text-white/85">{v as string}</p>
                <p className="text-[11px] text-muted">{s as string}</p>
              </div>
              <ChevronRightIcon size={16} className="text-muted" />
            </div>
          )
        })}
      </div>
      <div className="mx-5 mt-6 flex flex-col gap-3 rounded-[22px] border border-line bg-surface p-4">
        <p className="text-[14px] font-bold">Écrire un message</p>
        {['Votre nom', 'Votre email', 'Sujet'].map((p) => (
          <span key={p} className="flex h-12 items-center rounded-2xl border border-line bg-surface-2 px-4 text-[15px] text-muted">{p}</span>
        ))}
        <span className="flex h-[100px] rounded-2xl border border-line bg-surface-2 p-4 text-[15px] text-muted">Votre message…</span>
        <PrimaryButton>Envoyer <ArrowRightIcon size={15} /></PrimaryButton>
      </div>
    </InfoShell>
  )
}

/* ---------- Équipe ---------- */

const team = [
  ['AM', 'Alexandre Martin', 'Fondateur & Rédacteur en chef', 'Passionné de séries depuis toujours, Alexandre a créé Series Addict pour partager sa passion avec une communauté exigeante.'],
  ['SL', 'Sophie Leroy', 'Responsable éditorial', 'Experte en analyse de séries, Sophie supervise les contenus et veille à garantir qualité et indépendance.'],
  ['JB', 'Julien Bernard', 'Lead développeur', 'Julien conçoit les outils et l’expérience utilisateur qui permettent à la communauté de découvrir et suivre ses séries.'],
  ['CD', 'Camille Dupont', 'Community manager', 'Camille anime les discussions et veille à ce que chaque membre se sente chez lui au sein de la communauté.'],
  ['TP', 'Thomas Petit', 'Responsable partenariats', 'Thomas développe les collaborations avec les studios et plateformes pour enrichir l’offre de contenus exclusifs.'],
  ['ER', 'Emma Rousseau', 'Cheffe de projet marketing', 'Emma coordonne les campagnes et les événements qui font vivre la marque Series Addict au quotidien.'],
]

export function TeamScreen() {
  return (
    <InfoShell>
      <PageTitle tag="Équipe" title="Notre équipe" text="Découvrez les passionnés qui font vivre Series Addict chaque jour." />
      <div className="mt-6 flex flex-col gap-2.5 px-5">
        {team.map(([i, n, r, d]) => (
          <article key={n} className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-4">
            <div className="flex items-center gap-3">
              <Avatar initials={i} size="size-12" />
              <div>
                <p className="text-[14px] font-bold">{n}</p>
                <p className="text-[11px] text-link">{r}</p>
              </div>
            </div>
            <p className="text-[12.5px] leading-relaxed text-white/65">{d}</p>
            <div className="flex gap-2">
              <span className="flex size-9 items-center justify-center rounded-full border border-line text-[11px] font-bold">X</span>
              <span className="flex size-9 items-center justify-center rounded-full border border-line text-[11px] font-bold">in</span>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-5 mt-5 flex flex-col items-center gap-2 rounded-[22px] border border-line bg-surface-2 p-5 text-center">
        <p className="text-[14px] font-black uppercase">Rejoignez l’aventure</p>
        <p className="text-[12px] text-white/60">Vous souhaitez contribuer à Series Addict ? Envoyez-nous votre candidature à <span className="text-link">jobs@seriesaddict.fr</span>.</p>
      </div>
    </InfoShell>
  )
}

/* ---------- Pages légales (même gabarit) ---------- */

type LegalBlock = { h: string; p?: string; list?: string[]; cards?: [string, string][] }

function LegalPage({ tag, title, text, blocks, foot }: { tag: string; title: string; text: string; blocks: LegalBlock[]; foot: ReactNode }) {
  return (
    <InfoShell>
      <PageTitle tag={tag} title={title} text={text} />
      <div className="mx-5 mt-6 flex flex-col gap-4 rounded-[22px] border border-line bg-surface p-4">
        {blocks.map((b) => (
          <section key={b.h} className="flex flex-col gap-2">
            <h2 className="text-[14.5px] font-bold">{b.h}</h2>
            {b.p && <p className="text-[12.5px] leading-relaxed text-white/65">{b.p}</p>}
            {b.list && (
              <ul className="flex flex-col gap-1.5 pl-4 text-[12.5px] text-white/65">
                {b.list.map((l) => <li key={l} className="list-disc">{l}</li>)}
              </ul>
            )}
            {b.cards && (
              <div className="flex flex-col gap-2">
                {b.cards.map(([h, p]) => (
                  <div key={h} className="rounded-2xl border border-line bg-surface-2 p-3">
                    <p className="text-[13px] font-semibold">{h}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/60">{p}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
        <p className="text-[11.5px] text-white/50">{foot}</p>
      </div>
    </InfoShell>
  )
}

export function CookiesScreen() {
  return (
    <LegalPage
      tag="Cookies"
      title="Politique de cookies"
      text="Transparence sur les cookies utilisés par Series Addict et comment les gérer."
      blocks={[
        { h: 'Qu’est-ce qu’un cookie ?', p: 'Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d’un site web. Il permet de mémoriser des informations relatives à votre navigation et de faciliter votre expérience utilisateur.' },
        {
          h: 'Les catégories de cookies utilisés',
          cards: [
            ['Cookies essentiels', 'Nécessaires au fonctionnement du site : navigation, authentification et sécurité de votre session. Ils ne peuvent pas être désactivés.'],
            ['Cookies de performance', 'Ils nous aident à comprendre comment les visiteurs interagissent avec la plateforme, à partir de données anonymes.'],
            ['Cookies de personnalisation', 'Ils mémorisent vos préférences et votre historique pour vous proposer des recommandations adaptées à vos goûts.'],
            ['Cookies publicitaires', 'Ils limitent la fréquence d’affichage des publicités et mesurent l’efficacité des campagnes. Series Addict ne vend pas vos données.'],
          ],
        },
        { h: 'Gestion des préférences', p: 'Lors de votre première visite, un bandeau vous permet d’accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos choix à tout moment via « Gestion des cookies ».' },
        { h: 'Durée de conservation', p: 'Les cookies sont conservés pour une durée maximale de treize (13) mois à compter de leur dépôt sur votre terminal, conformément à la réglementation en vigueur.' },
      ]}
      foot={<>Contact : <span className="text-link">privacy@seriesaddict.fr</span></>}
    />
  )
}

export function PrivacyScreen() {
  return (
    <LegalPage
      tag="Confidentialité"
      title="Données personnelles"
      text="Comment Series Addict collecte, utilise et protège vos données personnelles."
      blocks={[
        { h: '1. Responsable du traitement', p: 'Le responsable du traitement est la société Series Addict, 12 rue de la Fiction, 75010 Paris, France. Délégué à la protection des données : dpo@seriesaddict.fr.' },
        { h: '2. Données collectées', p: 'Les données que vous nous fournissez (nom, email, date de naissance, contenus publiés) ainsi que des données techniques (adresse IP, type de navigateur, pages visitées).' },
        {
          h: '3. Finalités du traitement',
          list: [
            'Gérer votre compte et vos préférences utilisateur.',
            'Vous permettre de suivre vos séries, créer des listes et interagir avec la communauté.',
            'Personnaliser vos recommandations et les contenus affichés.',
            'Assurer la sécurité du site et prévenir les abus.',
            'Vous envoyer des communications relatives au service, si vous y consentez.',
          ],
        },
        { h: '4. Conservation des données', p: 'Vos données sont conservées le temps nécessaire, et au maximum trois ans après la suppression de votre compte, sauf obligation légale.' },
        {
          h: '5. Vos droits',
          cards: [
            ['Droit d’accès', 'Obtenir la confirmation que vos données sont traitées et en recevoir une copie.'],
            ['Droit de rectification', 'Demander la correction des données inexactes ou incomplètes.'],
            ['Droit à l’effacement', 'Demander la suppression de vos données dans les limites prévues par la loi.'],
            ['Droit d’opposition', 'Vous opposer au traitement de vos données pour des raisons tenant à votre situation.'],
          ],
        },
        { h: '6. Partage des données', p: 'Vos données ne sont pas vendues. Elles peuvent être partagées avec des prestataires techniques strictement nécessaires à l’hébergement et à la maintenance du service.' },
      ]}
      foot={<>7. Contact : <span className="text-link">dpo@seriesaddict.fr</span>. Vous pouvez aussi saisir la CNIL.</>}
    />
  )
}

export function TermsScreen() {
  return (
    <LegalPage
      tag="CGU"
      title="Conditions générales d’utilisation"
      text="Dernière mise à jour : 10 juillet 2026"
      blocks={[
        { h: '1. Présentation', p: 'Les présentes CGU régissent l’accès et l’utilisation de Series Addict et de ses services. En vous inscrivant ou en naviguant sur la plateforme, vous les acceptez sans réserve.' },
        { h: '2. Inscription et compte utilisateur', p: 'Certaines fonctionnalités nécessitent un compte. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité réalisée depuis votre compte.' },
        { h: '3. Contenu publié par les utilisateurs', p: 'Les membres peuvent publier commentaires, critiques, listes et notes. Tout contenu illicite, diffamatoire ou portant atteinte aux droits de tiers est interdit et peut être supprimé.' },
        { h: '4. Propriété intellectuelle', p: 'Contenus éditoriaux, logos, charte graphique et logiciels sont protégés. Les utilisateurs conservent les droits sur leurs publications et accordent une licence de diffusion à Series Addict.' },
        { h: '5. Responsabilité', p: 'Series Addict met en œuvre les moyens nécessaires à la disponibilité et la sécurité du service, sans pouvoir être tenu responsable des interruptions temporaires ou pertes de données.' },
        { h: '6. Modification des conditions', p: 'Les CGU peuvent évoluer. Les utilisateurs sont informés des modifications substantielles.' },
        { h: '7. Droit applicable', p: 'Les CGU sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.' },
      ]}
      foot={<>Pour toute question : <span className="text-link">legal@seriesaddict.fr</span></>}
    />
  )
}

/* ---------- 404 ---------- */

export function NotFoundScreen() {
  return (
    <InfoShell>
      <div className="flex flex-col gap-3 px-5 pt-10">
        <span className="flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase"><CalendarIcon size={12} className="text-link" /> Erreur · page introuvable</span>
        <p className="hero-text text-[96px] leading-none font-black">404</p>
        <h1 className="text-[26px] leading-tight font-black uppercase">Cet épisode<br /><span className="hero-text">n’existe pas</span></h1>
        <p className="text-[13px] leading-relaxed text-white/65">La page que vous recherchez a peut-être été déplacée, supprimée ou n’a jamais existé. Reprenons le fil de l’histoire.</p>
        <div className="mt-2 flex flex-col gap-2">
          <PrimaryButton>Aller à l’accueil <ArrowRightIcon size={15} /></PrimaryButton>
          <span className="flex h-12 items-center justify-center gap-2 rounded-full border border-line text-[13.5px] font-semibold"><SearchIcon size={15} /> Explorer les séries</span>
        </div>
      </div>
      <section className="mx-5 mt-8 flex flex-col gap-2.5 rounded-[22px] border border-line bg-surface p-4">
        <Overline>Accès rapide</Overline>
        <p className="text-[15px] font-black uppercase">Reprendre l’exploration</p>
        {[[HomeIcon, 'Accueil', 'Retournez à la page principale de la plateforme.'], [CompassIcon, 'Explorer les séries', 'Parcourez le catalogue et découvrez de nouvelles séries.'], [LayersIcon, 'Collections', 'Ouvrez les sélections éditoriales et les univers thématiques.']].map(([I, t, d]) => {
          const Icon = I as typeof HomeIcon
          return (
            <div key={t as string} className="flex items-center gap-3 rounded-2xl border border-line bg-surface-2 p-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-line"><Icon size={17} /></span>
              <div className="flex-1"><p className="text-[12.5px] font-bold uppercase">{t as string}</p><p className="text-[11px] text-white/55">{d as string}</p></div>
              <ArrowRightIcon size={15} className="text-white/60" />
            </div>
          )
        })}
        <div className="rounded-2xl border border-line p-3">
          <Overline>Astuce</Overline>
          <p className="mt-1 text-[11.5px] text-white/60">Vérifiez l’URL pour repérer une erreur de saisie, ou revenez au catalogue pour continuer à découvrir des séries.</p>
        </div>
      </section>
    </InfoShell>
  )
}
