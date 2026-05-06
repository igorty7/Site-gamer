import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiChevronRight, FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

const navItems = [
  { label: 'Produtos', href: '/#products' },
  { label: 'Categorias', href: '/#categories' },
  { label: 'Promoções', href: '/#promos' },
]

const menuVariants = {
  hidden: { opacity: 0, y: -14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: 'easeOut',
      staggerChildren: 0.06,
    },
  },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.16 } },
}

const mobileItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
}

function AnchorLink({ href, children, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      className="group relative inline-flex h-11 items-center rounded-md px-2 font-display text-xs font-bold uppercase text-zinc-300 transition hover:text-white"
    >
      {children}
      <span className="absolute bottom-2 left-2 h-px w-0 bg-gradient-to-r from-blood to-neon-purple shadow-neon-red transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
    </motion.a>
  )
}

function MobileLink({ href, children, onClick }) {
  return (
    <motion.a
      variants={mobileItemVariants}
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.06] px-4 py-3.5 font-display text-xs font-bold uppercase text-zinc-100 transition hover:border-blood/60 hover:bg-blood/10 hover:shadow-neon-red"
    >
      <span>{children}</span>
      <FiChevronRight className="text-blood transition group-hover:translate-x-1" />
    </motion.a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { totalItems, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -22, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: isScrolled ? 'rgba(5,5,7,0.72)' : 'rgba(5,5,7,0.48)',
        boxShadow: isScrolled
          ? '0 18px 70px rgba(0,0,0,0.42), 0 0 32px rgba(255,20,60,0.08)'
          : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,20,60,0.1),rgba(168,85,247,0.07),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blood/70 to-transparent opacity-70" />

      <nav
        className={`relative mx-auto flex max-w-[1500px] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          isScrolled ? 'h-[58px] sm:h-[66px]' : 'h-[68px] sm:h-[78px]'
        }`}
      >
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <motion.span
            animate={{ scale: isScrolled ? 0.92 : 1 }}
            className="grid size-10 shrink-0 place-items-center rounded-md border border-blood/55 bg-blood/10 shadow-neon-red sm:size-11"
          >
            <span className="font-display text-base font-black text-white sm:text-lg">NX</span>
          </motion.span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-black uppercase text-white transition group-hover:text-red-50 sm:text-lg">
              NexusForge
            </span>
            <span className="hidden text-xs font-semibold uppercase text-blood min-[380px]:block">Gaming Store</span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:flex xl:gap-6">
          {navItems.map((item) => (
            <AnchorLink key={item.href} href={item.href}>
              {item.label}
            </AnchorLink>
          ))}
          <NavLink
            to="/"
            className="group relative inline-flex h-11 items-center rounded-md px-2 font-display text-xs font-bold uppercase text-zinc-300 transition hover:text-white"
          >
            Home
            <span className="absolute bottom-2 left-2 h-px w-0 bg-gradient-to-r from-blood to-neon-purple shadow-neon-red transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <motion.a
            href="/#products"
            aria-label="Buscar produtos"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden size-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-neon-purple/60 hover:text-white hover:shadow-neon-purple sm:grid sm:size-11"
          >
            <FiSearch />
          </motion.a>
          <motion.button
            type="button"
            onClick={toggleCart}
            aria-label="Abrir carrinho"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative grid size-10 place-items-center rounded-md border border-blood/45 bg-blood/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-blood hover:shadow-neon-red sm:size-11"
          >
            <FiShoppingBag />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-md bg-blood px-1 text-xs font-bold text-white shadow-neon-red"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Abrir menu"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-blood/70 hover:shadow-neon-red sm:size-11 lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="px-4 pb-4 sm:px-6 lg:hidden"
          >
            <div className="mx-auto max-w-[1500px] overflow-hidden rounded-lg border border-white/10 bg-panel/80 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.55),0_0_30px_rgba(168,85,247,0.12)] backdrop-blur-2xl">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 px-1 pb-3">
                <span className="font-display text-xs font-bold uppercase text-zinc-400">Menu gamer</span>
                <span className="h-2 w-2 rounded-full bg-blood shadow-neon-red" />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {navItems.map((item) => (
                  <MobileLink key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </MobileLink>
                ))}
                <motion.div variants={mobileItemVariants}>
                  <NavLink
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.06] px-4 py-3.5 font-display text-xs font-bold uppercase text-zinc-100 transition hover:border-neon-purple/60 hover:bg-neon-purple/10 hover:shadow-neon-purple"
                  >
                    Home
                    <FiChevronRight className="text-neon-purple transition group-hover:translate-x-1" />
                  </NavLink>
                </motion.div>
                <motion.a
                  variants={mobileItemVariants}
                  href="/#products"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-4 py-3.5 font-display text-xs font-bold uppercase text-white transition hover:border-neon-purple/60 hover:shadow-neon-purple sm:col-span-2"
                >
                  <FiSearch />
                  Buscar produtos
                </motion.a>
                <motion.button
                  variants={mobileItemVariants}
                  type="button"
                  onClick={() => {
                    toggleCart()
                    setMenuOpen(false)
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blood px-4 py-3.5 font-display text-xs font-bold uppercase text-white shadow-neon-red transition hover:bg-red-500 sm:col-span-2"
                >
                  <FiShoppingBag />
                  Carrinho
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
