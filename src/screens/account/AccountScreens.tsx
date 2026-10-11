import type { ReactNode } from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  KeyIcon,
  LockIcon,
  MailIcon,
  EyeIcon,
  SendIcon,
  ShieldIcon,
  TvIcon,
  UserIcon,
  UsersIcon,
  HelpIcon,
} from '../../ui/icons'
import { BrandMark, Checkbox, Field } from '../../ui/blocks'
import { Overline, PrimaryButton } from '../../ui/kit'

// Écrans d'accès (hors barre d'onglets) : connexion, inscription, mot de passe oublié.

function AccountShell({ right, children }: { right: ReactNode; children: ReactNode }) {
  return (
    <div className="relative min-h-[844px] overflow-hidden bg-ink pb-10 text-white">
      <div className="absolute -top-24 -left-24 size-64 rounded-full bg-magenta/40 blur-3xl" />
      <div className="absolute top-40 -right-28 size-64 rounded-full bg-teal/40 blur-3xl" />
      <div className="relative">
        <header className="flex items-center justify-between px-5 pt-5">
          <BrandMark />
          {right}
        </header>
        {children}
      </div>
    </div>
  )
}

function Intro({ badge, icon, line1, line2, text }: { badge: string; icon: ReactNode; line1: string; line2: string; text: string }) {
  return (
    <div className="flex flex-col gap-3 px-5 pt-8">
      <span className="flex w-fit items-center gap-1.5 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase">
        {icon}
        {badge}
      </span>
      <h1 className="text-[28px] leading-[1.05] font-black uppercase">
        {line1}
        <br />
        <span className="hero-text">{line2}</span>
      </h1>
      <p className="text-[13px] leading-relaxed text-white/70">{text}</p>
    </div>
  )
}

function FormCard({ overline, title, text, children }: { overline: string; title: string; text: string; children: ReactNode }) {
  return (
    <section className="mx-5 mt-6 flex flex-col gap-4 rounded-[26px] border border-line bg-surface/90 p-5 backdrop-blur">
      <div>
        <Overline>{overline}</Overline>
        <h2 className="mt-1 text-[19px] font-black uppercase">{title}</h2>
        <p className="mt-1 text-[12px] text-white/60">{text}</p>
      </div>
      {children}
    </section>
  )
}

function Social() {
  return (
    <>
      <div className="flex items-center gap-3 text-[10px] tracking-widest text-muted">
        <span className="h-px flex-1 bg-line" /> OU <span className="h-px flex-1 bg-line" />
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="flex h-12 items-center justify-center rounded-full border border-line text-[13px] font-semibold">Continuer avec Google</span>
        <span className="flex h-12 items-center justify-center rounded-full border border-line text-[13px] font-semibold">Continuer avec Apple</span>
      </div>
    </>
  )
}

function Perks({ items }: { items: { Icon: typeof TvIcon; title: string; text: string }[] }) {
  return (
    <section className="mt-6 flex flex-col gap-2.5 px-5">
      {items.map(({ Icon, title, text }) => (
        <div key={title} className="flex items-start gap-3 rounded-2xl border border-line bg-surface/70 p-3.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line bg-ink/50">
            <Icon size={16} />
          </span>
          <div>
            <p className="text-[12px] font-bold uppercase">{title}</p>
            <p className="mt-0.5 text-[12px] leading-snug text-white/60">{text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

const eye = <EyeIcon size={18} />

export function LoginScreen() {
  return (
    <AccountShell right={<span className="rounded-full border border-line px-3 py-2 text-[11.5px] font-semibold whitespace-nowrap">S’inscrire</span>}>
      <Intro
        badge="Bon retour parmi nous"
        icon={<ShieldIcon size={12} className="text-link" />}
        line1="Reprenez votre"
        line2="aventure séries"
        text="Connectez-vous pour retrouver vos séries suivies, votre progression, vos listes personnelles et l’activité de votre communauté."
      />
      <FormCard overline="Login" title="Connexion" text="Accédez à votre espace membre Series Addict.">
        <Field icon={<MailIcon size={18} />} placeholder="Pseudo ou adresse mail" />
        <Field icon={<LockIcon size={18} />} placeholder="Mot de passe" right={eye} />
        <div className="flex items-center justify-between">
          <Checkbox checked>Se souvenir de moi</Checkbox>
          <span className="text-[12px] font-semibold text-link">Mot de passe oublié ?</span>
        </div>
        <PrimaryButton>
          Me connecter <ArrowRightIcon size={16} />
        </PrimaryButton>
        <Social />
        <p className="text-center text-[12.5px] text-white/60">
          Vous n’avez pas encore de compte ? <span className="font-semibold text-link">Inscrivez-vous</span>
        </p>
      </FormCard>
      <Perks
        items={[
          { Icon: TvIcon, title: 'Retrouvez vos séries', text: 'Accédez à votre progression, vos épisodes et vos découvertes.' },
          { Icon: HeartIcon, title: 'Vos listes personnelles', text: 'Reprenez vos favoris, vos envies et vos sélections enregistrées.' },
          { Icon: UsersIcon, title: 'Votre activité sociale', text: 'Suivez vos amis et découvrez ce qu’ils regardent en ce moment.' },
        ]}
      />
    </AccountShell>
  )
}

export function SignupScreen() {
  const rules = ['8 caractères minimum', 'Une lettre majuscule', 'Un chiffre', 'Un caractère spécial']
  return (
    <AccountShell right={<span className="rounded-full border border-line px-3 py-2 text-[11.5px] font-semibold whitespace-nowrap">Connexion</span>}>
      <Intro
        badge="Rejoignez la communauté"
        icon={<ShieldIcon size={12} className="text-link" />}
        line1="Créez votre"
        line2="espace séries"
        text="Suivez vos visionnages, organisez vos listes, notez vos séries préférées et découvrez ce que regardent vos amis."
      />
      <FormCard overline="Register" title="Créer un compte" text="Commencez votre expérience Series Addict dès maintenant.">
        <Field icon={<UserIcon size={18} />} placeholder="Pseudo" />
        <Field icon={<MailIcon size={18} />} placeholder="Adresse mail" />
        <Field icon={<LockIcon size={18} />} placeholder="Mot de passe" right={eye} />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[11px]">
            <span className="text-white/70">Sécurité du mot de passe</span>
            <span className="font-semibold text-magenta">Faible</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            <span className="h-1 rounded-full bg-magenta" />
            <span className="h-1 rounded-full bg-white/15" />
            <span className="h-1 rounded-full bg-white/15" />
            <span className="h-1 rounded-full bg-white/15" />
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {rules.map((r) => (
              <span key={r} className="flex items-center gap-1.5 text-[11px] text-white/60">
                <span className="flex size-3.5 items-center justify-center rounded-full border border-white/30">
                  <CheckIcon size={8} />
                </span>
                {r}
              </span>
            ))}
          </div>
        </div>
        <Field icon={<LockIcon size={18} />} placeholder="Confirmer le mot de passe" right={eye} />
        <Checkbox checked>J’accepte les conditions d’utilisation et la politique de confidentialité.</Checkbox>
        <Checkbox>J’accepte d’activer les fonctionnalités sociales de la plateforme.</Checkbox>
        <PrimaryButton>
          Créer mon compte <ArrowRightIcon size={16} />
        </PrimaryButton>
        <Social />
        <p className="text-center text-[12.5px] text-white/60">
          Vous avez déjà un compte ? <span className="font-semibold text-link">Connectez-vous</span>
        </p>
      </FormCard>
      <Perks
        items={[
          { Icon: TvIcon, title: 'Suivez vos séries', text: 'Gardez une trace de vos épisodes, saisons et découvertes.' },
          { Icon: HeartIcon, title: 'Créez vos listes', text: 'Enregistrez vos coups de cœur et organisez vos envies.' },
          { Icon: UsersIcon, title: 'Partagez avec vos amis', text: 'Découvrez ce que votre entourage regarde en ce moment.' },
        ]}
      />
    </AccountShell>
  )
}

const backToLogin = (
  <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-[11.5px] font-semibold">
    <ArrowLeftIcon size={14} /> Connexion
  </span>
)

export function ForgotScreen() {
  return (
    <AccountShell right={backToLogin}>
      <Intro
        badge="Récupération sécurisée"
        icon={<ShieldIcon size={12} className="text-link" />}
        line1="Réinitialisez votre"
        line2="accès membre"
        text="Entrez votre adresse mail pour recevoir un lien de réinitialisation et retrouver rapidement votre espace Series Addict."
      />
      <FormCard overline="Forgot password" title="Mot de passe oublié" text="Saisissez votre email pour recevoir un lien de réinitialisation.">
        <Field icon={<MailIcon size={18} />} placeholder="Adresse mail" />
        <PrimaryButton>
          Envoyer le lien <ArrowRightIcon size={16} />
        </PrimaryButton>
        <p className="text-center text-[12.5px] text-white/60">
          Vous vous souvenez de votre mot de passe ? <span className="font-semibold text-link">Connectez-vous</span>
        </p>
      </FormCard>
      <Perks
        items={[
          { Icon: KeyIcon, title: 'Lien sécurisé', text: 'Un email de réinitialisation vous sera envoyé de manière sécurisée.' },
          { Icon: SendIcon, title: 'Action rapide', text: 'Cliquez sur le lien reçu pour choisir un nouveau mot de passe.' },
          { Icon: HelpIcon, title: 'Besoin d’aide ?', text: 'Vous pourrez réessayer ou contacter le support si nécessaire.' },
        ]}
      />
    </AccountShell>
  )
}

// État suivant l'envoi : confirmation (indispensable sur mobile pour rassurer l'utilisateur).
export function ForgotSentScreen() {
  return (
    <AccountShell right={backToLogin}>
      <div className="flex flex-col items-center gap-4 px-8 pt-28 text-center">
        <span className="brand-gradient flex size-20 items-center justify-center rounded-full">
          <MailIcon size={34} />
        </span>
        <h1 className="text-[24px] leading-tight font-black uppercase">
          Vérifiez votre <span className="hero-text">boîte mail</span>
        </h1>
        <p className="text-[13px] leading-relaxed text-white/70">
          Un lien de réinitialisation vient d’être envoyé à <b className="text-white">charlotte@email.fr</b>. Il est valable 30
          minutes.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3 px-5">
        <PrimaryButton>Ouvrir ma messagerie</PrimaryButton>
        <span className="flex h-12 items-center justify-center rounded-full border border-line text-[13.5px] font-semibold">
          Renvoyer le lien
        </span>
        <p className="mt-2 text-center text-[12.5px] text-white/60">
          Rien reçu ? Pensez à vérifier vos spams ou <span className="font-semibold text-link">contactez le support</span>.
        </p>
      </div>
    </AccountShell>
  )
}
