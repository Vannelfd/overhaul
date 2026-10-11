import { BookmarkIcon, CartIcon, ChevronRightIcon, FilterIcon, HeartIcon, StarIcon } from '../../ui/icons'
import { Badge, Chip, Overline, PageHeader, Photo, Rail, Screen, SearchField, SectionTitle } from '../../ui/kit'
import { SeriesTabs } from './shared'

type Product = { name: string; price: string; old?: string; note: string; votes: number; tag?: string }

const products: Product[] = [
  { name: 'T-shirt Logo Vintage', price: '29.99 €', old: '39.99 €', note: '4.8', votes: 128, tag: '-25%' },
  { name: 'Figurine Eleven', price: '49.99 €', note: '4.9', votes: 89, tag: 'Nouveau' },
  { name: 'Casquette Hawkins', price: '24.99 €', note: '4.6', votes: 57 },
  { name: 'Mug The Upside Down', price: '14.99 €', note: '4.7', votes: 234, tag: 'Bestseller' },
  { name: 'Poster Saison 4', price: '19.99 €', note: '4.5', votes: 45 },
  { name: 'Sac en toile Hellfire Club', price: '34.99 €', note: '4.8', votes: 156, tag: 'Édition limitée' },
]

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface">
      <div className="relative h-[170px] bg-white">
        <Photo seed={`prod-${p.name}`} />
        {p.tag && (
          <span className="absolute top-2 left-2"><Badge tone="magenta">{p.tag}</Badge></span>
        )}
        <span className="absolute top-2 right-2 flex gap-1">
          <span className="flex size-7 items-center justify-center rounded-full bg-ink/60"><HeartIcon size={12} /></span>
          <span className="flex size-7 items-center justify-center rounded-full bg-ink/60"><BookmarkIcon size={12} /></span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <Overline className="text-link">Stranger Things</Overline>
        <h3 className="line-clamp-2 text-[12.5px] leading-snug font-bold">{p.name}</h3>
        <p className="flex items-center gap-1 text-[10.5px] text-muted">
          <StarIcon size={10} className="text-magenta" /> {p.note} ({p.votes})
        </p>
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="text-[14px] font-black">
            {p.price}
            {p.old && <span className="ml-1 text-[10px] font-normal text-muted line-through">{p.old}</span>}
          </span>
          <span className="flex size-9 items-center justify-center rounded-full bg-white text-ink"><CartIcon size={15} /></span>
        </div>
      </div>
    </article>
  )
}

export function SeriesShopScreen() {
  return (
    <Screen tab="discover">
      <PageHeader
        overline="Boutique"
        title="Stranger Things"
        right={
          <span className="flex h-10 items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-[12px] font-semibold">
            <CartIcon size={15} /> Panier (0)
          </span>
        }
      />

      {/* Bannière collection */}
      <section className="mx-5 mt-4 flex items-center gap-3 overflow-hidden rounded-[22px] border border-magenta/40 bg-linear-to-br from-magenta-deep to-[#3b1f45] p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <Overline className="text-link">Nouvelle collection</Overline>
          <h2 className="text-[18px] leading-tight font-black uppercase">Édition exclusive saison 5</h2>
          <p className="text-[11.5px] text-white/70">Découvrez nos produits dédiés à la saison finale. Quantités limitées disponibles.</p>
          <span className="mt-1 flex h-10 w-fit items-center gap-1 rounded-full bg-white px-4 text-[12px] font-bold text-ink">
            Découvrir la collection <ChevronRightIcon size={14} />
          </span>
        </div>
        <div className="h-[100px] w-[90px] shrink-0 overflow-hidden rounded-2xl">
          <Photo seed="shop-collection-road" />
        </div>
      </section>

      <div className="mt-4">
        <SeriesTabs active="Shop" />
      </div>
      <div className="mt-4">
        <Rail gap="gap-2">
          <Chip active>Tout</Chip>
          <Chip>Vêtements</Chip>
          <Chip>Accessoires</Chip>
          <Chip>Figurines</Chip>
          <Chip>Maison</Chip>
          <Chip>Posters</Chip>
        </Rail>
      </div>
      <div className="mt-3 flex gap-2 px-5">
        <div className="min-w-0 flex-1">
          <SearchField placeholder="Rechercher un produit…" />
        </div>
        <span className="flex h-12 items-center gap-1.5 rounded-full border border-line bg-surface px-4 text-[12.5px] font-semibold">
          <FilterIcon size={14} /> Filtres
        </span>
      </div>

      <section className="mt-6 flex flex-col gap-3">
        <SectionTitle title="Produits populaires" />
        <div className="grid grid-cols-2 gap-3 px-5">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
        <span className="mx-5 mt-1 flex h-11 items-center justify-center gap-1 rounded-full border border-line bg-surface text-[13px] font-semibold">
          Voir plus de produits <ChevronRightIcon size={15} />
        </span>
      </section>
    </Screen>
  )
}
