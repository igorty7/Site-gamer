import { motion } from 'framer-motion'
import { FiArrowRight, FiTag } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { formatCurrency } from '../utils/formatCurrency.js'

export default function PromoSection() {
  const promos = products.filter((product) => product.promo).slice(0, 3)

  return (
    <section id="promos" className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-sm font-bold uppercase text-blood">Hot deals</span>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-white sm:text-4xl">Promoções de arena</h2>
        </div>
        <p className="max-w-xl text-sm font-medium text-zinc-400 sm:text-base">
          Ofertas fictícias com descontos agressivos para deixar a vitrine com cara de campanha real.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {promos.map((product, index) => {
          const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="clip-corner group overflow-hidden border border-blood/30 bg-[linear-gradient(135deg,rgba(255,20,60,0.2),rgba(13,13,18,0.95)_42%,rgba(168,85,247,0.18))] p-1 transition hover:border-blood hover:shadow-neon-red"
            >
              <div className="flex h-full flex-col gap-4 bg-panel/90 p-4 sm:flex-row xl:flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full rounded-md object-cover sm:w-36 md:w-40 xl:w-full"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-md bg-blood px-3 py-1 text-xs font-bold uppercase text-white">
                      <FiTag />
                      -{discount}%
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold uppercase text-white sm:text-xl">{product.name}</h3>
                    <p className="mt-2 text-sm font-medium text-zinc-400">{product.shortDescription}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <strong className="font-display text-lg text-white sm:text-xl">{formatCurrency(product.price)}</strong>
                    <Link
                      to={`/produto/${product.id}`}
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold uppercase text-white transition hover:border-neon-purple/70 hover:shadow-neon-purple"
                    >
                      Ver
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
