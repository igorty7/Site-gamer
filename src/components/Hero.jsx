import { motion } from 'framer-motion'
import { FiCpu, FiShoppingBag, FiZap } from 'react-icons/fi'
import { heroProductImage } from '../data/products.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: 'easeOut' },
  },
}

const stats = [
  ['48h', 'envio express'],
  ['4.8', 'rating médio'],
  ['24/7', 'suporte pro'],
]

export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden pt-16 sm:min-h-[760px] sm:pt-20 lg:min-h-[820px] xl:min-h-[88svh]">
      <motion.img
        src={heroProductImage}
        alt="Setup gamer premium com PC, periféricos e iluminação neon"
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0.96)_0%,rgba(5,5,7,0.86)_44%,rgba(5,5,7,0.66)_100%)] sm:bg-[linear-gradient(100deg,#050507_0%,rgba(5,5,7,0.96)_24%,rgba(5,5,7,0.72)_52%,rgba(5,5,7,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(168,85,247,0.26),transparent_28%),radial-gradient(circle_at_22%_28%,rgba(255,20,60,0.22),transparent_30%),linear-gradient(180deg,transparent_55%,#050507_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(180deg,transparent,black_18%,black_72%,transparent)]" />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.35 }}
        className="absolute left-[-18%] top-24 h-40 w-[72%] rotate-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,20,60,0.34),rgba(168,85,247,0.28),transparent)] blur-2xl sm:left-[-8%] lg:top-32"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.18, 0.42, 0.18],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-140px] top-28 h-72 w-72 rounded-full bg-neon-purple/25 blur-3xl sm:h-96 sm:w-96 lg:right-[-80px] lg:top-24"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0], opacity: [0.55, 0.88, 0.55] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-4 hidden w-72 rounded-lg border border-neon-purple/25 bg-black/35 p-4 shadow-neon-purple backdrop-blur-md lg:block xl:right-10"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-bold uppercase text-purple-100">Nexus performance</span>
          <span className="h-2 w-2 rounded-full bg-blood shadow-neon-red" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {['4K', 'DDR5', 'RTX'].map((item) => (
            <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center font-display text-sm font-bold text-white">
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto flex min-h-[calc(720px-4rem)] max-w-[1500px] items-center px-4 py-12 sm:min-h-[calc(760px-5rem)] sm:px-6 sm:py-16 lg:min-h-[calc(820px-5rem)] lg:px-8 xl:min-h-[calc(88svh-5rem)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-3xl xl:max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-md border border-blood/45 bg-blood/10 px-3 py-2 text-xs font-bold uppercase text-red-100 shadow-neon-red backdrop-blur sm:text-sm"
          >
            <FiZap className="text-blood" />
            Drops gamer premium
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-black uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl 2xl:text-8xl"
          >
            Upgrade brutal
            <span className="block bg-gradient-to-r from-blood via-red-100 to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(255,20,60,0.35)]">
              para dominar
            </span>
            seu setup
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base font-medium text-zinc-300 sm:text-xl lg:text-2xl"
          >
            Periféricos, PCs gamers e jogos com curadoria high-end, visual neon e experiência de compra fluida.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#products"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blood px-5 py-4 font-display text-xs font-bold uppercase text-white shadow-[0_0_38px_rgba(255,20,60,0.45)] transition hover:bg-red-500 sm:w-auto sm:px-7 sm:text-sm"
            >
              <FiShoppingBag />
              Comprar agora
            </motion.a>
            <motion.a
              href="#categories"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-neon-purple/55 bg-neon-purple/10 px-5 py-4 font-display text-xs font-bold uppercase text-white shadow-[0_0_34px_rgba(168,85,247,0.24)] backdrop-blur transition hover:border-neon-purple hover:bg-neon-purple/15 sm:w-auto sm:px-7 sm:text-sm"
            >
              <FiCpu />
              Ver categorias
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 grid max-w-2xl grid-cols-1 gap-2 min-[420px]:grid-cols-3 sm:mt-10 sm:gap-3"
          >
            {stats.map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="rounded-md border border-white/10 bg-black/35 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
              >
                <strong className="block font-display text-2xl text-white sm:text-3xl">{value}</strong>
                <span className="text-xs font-bold uppercase text-zinc-400">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
