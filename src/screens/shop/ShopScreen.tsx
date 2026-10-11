import { BookmarkIcon, CartIcon, ChevronRightIcon, HeartIcon, SearchIcon, SlidersIcon, CrownIcon } from '../../ui/icons'
import { Badge, Chip, Overline, Photo, Rail, Screen, SectionTitle, TopBar } from '../../ui/kit'

const products = [
  { k: 'Collector', u: 'Game of Thrones', t: 'Dés Game of Thrones', p: '29,90 €', n: '4.8' },
  { k: 'Best seller', u: 'Doctor Who', t: 'Mug Tardis', p: '19,90 €', n: '4.7' },
  { k: 'Édition limitée', u: 'The Walking Dead', t: 'Lucille replica', p: '149,90 €', n: '4.9' },
  { k: 'Lecture SF', u: 'Roman', t: 'Dark Matter', p: '14,90 €', n: '4.6' },
  { k: 'Roman culte', u: 'Livre', t: 'The Handmaid’s Tale', p: '16,90 €', n: '4.8' },
  { k: 'BD', u: 'Comics', t: 'Sweet Tooth tome 1', p: '18,50 €', n: '4.7' },
]

export function ShopScreen() {
  return (
    <Screen tab="discover">
      <TopBar />
      <section className="relative">
        <div className="absolute inset-0"><Photo seed="shop-cinema" className="opacity-30" /><div className="absolute inset-0 bg-linear-to-b from-ink/40 to-ink" /></div>
        <div className="relative flex flex-col gap-3 px-5 pt-4 pb-2">
          <Overline className="text-white/70">Boutique série</Overline>
          <h1 className="text-[32px] leading-none font-black uppercase">Shop série</h1>
          <p className="text-[13px] text-white/75">Objets collectors, livres et accessoires inspirés de vos univers préférés.</p>
          <div className="flex flex-wrap gap-1.5">
            <Chip small>240 articles</Chip>
            <Chip small>18 univers</Chip>
            <Chip small>Nouveautés chaque semaine</Chip>
          </div>
          <div className="brand-gradient mt-1 flex flex-col gap-2.5 rounded-[22px] p-2.5">
            <div className="flex h-12 items-center gap-2 rounded-full bg-ink/70 pr-1.5 pl-4">
              <SearchIcon size={18} className="text-white/70" />
              <span className="flex-1 truncate text-[15px] text-white/60">Un article, un univers…</span>
              <span className="flex h-9 items-center rounded-full bg-white px-4 text-[11.5px] font-bold text-ink uppercase">Rechercher</span>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-3">
        <Rail gap="gap-2">
          <Chip active>Populaire</Chip>
          <Chip>Collectors</Chip>
          <Chip>Livres</Chip>
          <Chip>Accessoires</Chip>
          <Chip>Éditions limitées</Chip>
          <Chip icon={<SlidersIcon size={13} />}>Filtres</Chip>
        </Rail>
      </div>
      <section className="mt-6 flex flex-col gap-3">
        <div className="px-5"><Overline>Catalogue</Overline></div>
        <SectionTitle title="Produits à découvrir" action="Voir tout" />
        <div className="grid grid-cols-2 gap-3 px-5">
          {products.map((p) => (
            <article key={p.t} className="relative h-[250px] overflow-hidden rounded-[20px]">
              <Photo seed={`shopg-${p.t}`} />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
              <span className="absolute top-2 left-2"><Badge tone="light">{p.k}</Badge></span>
              <span className="absolute top-2 right-2"><Badge>{p.n} ★</Badge></span>
              <div className="absolute inset-x-2.5 bottom-2.5 flex flex-col gap-1.5">
                <Overline className="text-[8.5px] text-white/70">{p.u}</Overline>
                <p className="text-[12.5px] leading-tight font-extrabold uppercase">{p.t}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold">{p.p}</span>
                  <span className="flex gap-1">
                    <span className="flex size-7 items-center justify-center rounded-full bg-ink/60"><HeartIcon size={12} /></span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-ink/60"><BookmarkIcon size={12} /></span>
                  </span>
                </div>
                <span className="flex h-8 items-center justify-center gap-1 rounded-full bg-white text-[10.5px] font-bold text-ink uppercase"><CartIcon size={12} /> Acheter</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="brand-gradient mx-5 mt-7 flex flex-col gap-2 rounded-[24px] p-5">
        <Overline className="flex items-center gap-1 text-white/80"><CrownIcon size={11} /> Offre membre</Overline>
        <h3 className="text-[17px] leading-tight font-black uppercase">Accès prioritaire aux éditions collectors</h3>
        <p className="text-[12px] text-white/80">Alertes nouveautés, sélections premium et avantages réservés aux membres les plus engagés.</p>
        <span className="mt-1 flex h-10 w-fit items-center gap-1 rounded-full bg-white px-4 text-[12.5px] font-bold text-ink">Découvrir <ChevronRightIcon size={14} /></span>
      </section>
    </Screen>
  )
}
