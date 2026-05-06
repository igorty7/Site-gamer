import { motion } from 'framer-motion'
import { FiArrowRight, FiShoppingCart, FiStar, FiZap } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'
import { formatCurrency } from '../utils/formatCurrency.js'

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart()
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.38, delay: index * 0.04, ease: 'easeOut' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,28,0.96),rgba(8,8,12,0.98))] shadow-[0_18px_55px_rgba(0,0,0,0.34)] [transform-style:preserve-3d]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood to-transparent" />
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blood/20 blur-3xl" />
        <div className="absolute -bottom-24 left-6 h-52 w-52 rounded-full bg-neon-purple/20 blur-3xl" />
      </div>

      <Link to={`/produto/${product.id}`} className="relative block overflow-hidden">
        <div className="relative aspect-[1.06/1] overflow-hidden bg-black sm:aspect-square">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-md border border-blood/50 bg-blood/20 px-2.5 py-1 text-[11px] font-bold uppercase text-red-100 shadow-neon-red backdrop-blur">
              <FiZap className="text-blood" />
              {product.badge}
            </span>
            <span className="rounded-md border border-neon-purple/40 bg-neon-purple/15 px-2.5 py-1 text-[11px] font-bold uppercase text-purple-100 backdrop-blur">
              -{discount}%
            </span>
          </div>

          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/65 px-2.5 py-1 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,0,0,0.45)] backdrop-blur">
            <FiStar className="text-blood" />
            {product.rating}
          </span>
        </div>
      </Link>

      <div className="relative flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div>
          <span className="text-xs font-bold uppercase text-neon-purple">{product.category}</span>
          <h3 className="mt-1 line-clamp-2 font-display text-base font-bold uppercase leading-snug text-white transition duration-300 group-hover:text-red-50 sm:min-h-14 sm:text-lg">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-zinc-400 sm:min-h-12">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/10 pt-4">
          <div className="min-w-0">
            <span className="block text-sm font-semibold text-zinc-500 line-through">
              {formatCurrency(product.oldPrice)}
            </span>
            <strong className="block truncate font-display text-lg text-white sm:text-xl">
              {formatCurrency(product.price)}
            </strong>
          </div>
          <motion.div whileHover={{ rotate: -8, scale: 1.08 }} whileTap={{ scale: 0.94 }}>
            <Link
              to={`/produto/${product.id}`}
              aria-label={`Ver detalhes de ${product.name}`}
              className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-zinc-200 transition hover:border-neon-purple/70 hover:text-white hover:shadow-neon-purple"
            >
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={() => addToCart(product)}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-blood px-4 py-3 font-display text-xs font-bold uppercase text-white shadow-neon-red transition hover:bg-red-500"
        >
          <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-white/20 opacity-0 blur-sm transition duration-500 group-hover:left-[120%] group-hover:opacity-100" />
          <FiShoppingCart className="relative" />
          <span className="relative">Adicionar</span>
        </motion.button>
      </div>
    </motion.article>
  )
}
