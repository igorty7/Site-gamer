import { useEffect, useMemo, useState } from 'react'
import { FiCpu, FiHeadphones, FiMousePointer } from 'react-icons/fi'
import { FaGamepad, FaKeyboard } from 'react-icons/fa'
import CategoryFilter from '../components/CategoryFilter.jsx'
import Hero from '../components/Hero.jsx'
import LoadingSkeleton from '../components/LoadingSkeleton.jsx'
import ProductCard from '../components/ProductCard.jsx'
import PromoSection from '../components/PromoSection.jsx'
import { products } from '../data/products.js'

const categoryCards = [
  ['PC Gamer', FiCpu, 'Torres, monitores e builds prontos para alta performance.'],
  ['Teclados', FaKeyboard, 'Mecânicos, compactos e com switches para jogo competitivo.'],
  ['Mouse', FiMousePointer, 'Sensores rápidos, baixo peso e pegadas para FPS e MOBA.'],
  ['Headsets', FiHeadphones, 'Áudio espacial, microfones claros e conforto em longas sessões.'],
  ['Jogos', FaGamepad, 'Títulos digitais fictícios e controles para completar o setup.'],
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650)
    return () => window.clearTimeout(timer)
  }, [])

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory
      const searchableText = `${product.name} ${product.category} ${product.shortDescription}`.toLowerCase()
      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  const featuredProducts = products.filter((product) => product.featured)

  return (
    <main>
      <Hero />

      <section id="products" className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-bold uppercase text-blood">Produtos em destaque</span>
            <h2 className="mt-2 font-display text-2xl font-black uppercase text-white sm:text-4xl">
              Hardware e jogos para vencer
            </h2>
          </div>
          <p className="max-w-xl text-sm font-medium text-zinc-400 sm:text-base">
            Catálogo fictício com preço, estoque, avaliações, busca e filtros funcionais.
          </p>
        </div>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="mt-6 sm:mt-8">
          {loading ? (
            <LoadingSkeleton amount={8} />
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-panel-soft p-6 text-center sm:p-10">
              <h3 className="font-display text-xl font-bold uppercase text-white sm:text-2xl">Nenhum produto encontrado</h3>
              <p className="mt-2 text-zinc-400">Ajuste a busca ou escolha outra categoria.</p>
            </div>
          )}
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-6 sm:mb-8">
          <span className="text-sm font-bold uppercase text-neon-purple">Categorias</span>
          <h2 className="mt-2 font-display text-2xl font-black uppercase text-white sm:text-4xl">Escolha seu loadout</h2>
        </div>

        <div className="grid gap-4 min-[520px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {categoryCards.map(([title, Icon, description]) => (
            <button
              key={title}
              type="button"
              onClick={() => {
                setActiveCategory(title)
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group min-h-0 rounded-lg border border-white/10 bg-panel-soft p-4 text-left transition hover:-translate-y-1 hover:border-neon-purple/60 hover:shadow-neon-purple sm:min-h-44 sm:p-5"
            >
              <span className="grid size-12 place-items-center rounded-md border border-blood/30 bg-blood/10 text-2xl text-blood transition group-hover:border-blood group-hover:bg-blood group-hover:text-white">
                <Icon />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-white">{title}</h3>
              <p className="mt-2 text-sm font-medium text-zinc-400">{description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-6 sm:mb-8">
          <span className="text-sm font-bold uppercase text-blood">Seleção premium</span>
          <h2 className="mt-2 font-display text-2xl font-black uppercase text-white sm:text-4xl">Destaques da semana</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <PromoSection />
    </main>
  )
}
