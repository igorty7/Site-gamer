import { FiArrowLeft, FiCheckCircle, FiShoppingCart, FiStar } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../context/useCart.js'
import { products } from '../data/products.js'
import { formatCurrency } from '../utils/formatCurrency.js'

export default function ProductDetails() {
  const { productId } = useParams()
  const { addToCart, openCart } = useCart()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <main className="mx-auto min-h-screen max-w-4xl px-4 pt-28 text-center sm:px-6 sm:pt-32 lg:px-8">
        <h1 className="font-display text-4xl font-black uppercase text-white">Produto não encontrado</h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-blood px-5 py-3 font-display text-sm font-bold uppercase text-white shadow-neon-red"
        >
          <FiArrowLeft />
          Voltar para loja
        </Link>
      </main>
    )
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4)

  const handleBuyNow = () => {
    addToCart(product)
    openCart()
  }

  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase text-zinc-400 transition hover:text-white">
        <FiArrowLeft />
        Voltar para loja
      </Link>

      <section className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-panel-soft shadow-2xl shadow-black/40 lg:max-w-none">
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        </div>

        <div className="glass-panel rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="rounded-md bg-blood px-3 py-1 text-xs font-bold uppercase text-white">{product.badge}</span>
            <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm font-bold text-white">
              <FiStar className="text-blood" />
              {product.rating}
            </span>
            <span className="rounded-md border border-neon-purple/40 bg-neon-purple/10 px-3 py-1 text-xs font-bold uppercase text-purple-100">
              {product.category}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-black uppercase leading-tight text-white sm:mt-6 sm:text-4xl xl:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base font-medium text-zinc-300 sm:mt-5 sm:text-lg">{product.description}</p>

          <div className="mt-6 flex flex-wrap items-end gap-4 sm:mt-7">
            <div>
              <span className="block text-base font-semibold text-zinc-500 line-through sm:text-lg">{formatCurrency(product.oldPrice)}</span>
              <strong className="font-display text-3xl text-white sm:text-4xl">{formatCurrency(product.price)}</strong>
            </div>
            <span className="rounded-md border border-blood/40 bg-blood/10 px-3 py-2 text-sm font-bold uppercase text-red-100">
              {product.stock} em estoque
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-blood/50 bg-blood/10 px-5 py-4 font-display text-sm font-bold uppercase text-white transition hover:border-blood hover:shadow-neon-red"
            >
              <FiShoppingCart />
              Adicionar
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blood px-5 py-4 font-display text-sm font-bold uppercase text-white shadow-neon-red transition hover:bg-red-500"
            >
              Comprar agora
            </button>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="font-display text-xl font-bold uppercase text-white">Especificações</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-zinc-300">
                  <FiCheckCircle className="shrink-0 text-blood" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-14 sm:mt-20">
          <div className="mb-6 sm:mb-8">
            <span className="text-sm font-bold uppercase text-neon-purple">Relacionados</span>
            <h2 className="mt-2 font-display text-2xl font-black uppercase text-white sm:text-3xl">Mais da categoria</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
