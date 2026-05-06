import { AnimatePresence, motion } from 'framer-motion'
import { FiMinus, FiPlus, FiShoppingBag, FiTrash2, FiX } from 'react-icons/fi'
import { useCart } from '../context/useCart.js'
import { formatCurrency } from '../utils/formatCurrency.js'

export default function CartDrawer() {
  const {
    clearCart,
    closeCart,
    decreaseItem,
    isCartOpen,
    items,
    addToCart,
    removeFromCart,
    totalPrice,
  } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Fechar carrinho"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 cursor-default bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 270, damping: 32 }}
            className="fixed bottom-0 right-0 top-0 z-50 flex w-full flex-col border-l border-blood/30 bg-panel shadow-2xl shadow-black/60 sm:max-w-md"
          >
            <div className="neon-line flex items-center justify-between px-4 py-4 sm:px-5 sm:py-5">
              <div>
                <span className="text-xs font-bold uppercase text-blood">Checkout</span>
                <h2 className="font-display text-xl font-black uppercase text-white sm:text-2xl">Carrinho</h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Fechar carrinho"
                className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-blood"
              >
                <FiX />
              </button>
            </div>

            <div className="scrollbar-cart flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:space-y-4 sm:px-5 sm:py-5">
              {items.length === 0 ? (
                <div className="grid min-h-72 place-items-center rounded-lg border border-dashed border-white/10 bg-white/5 p-6 text-center sm:min-h-80 sm:p-8">
                  <div>
                    <FiShoppingBag className="mx-auto text-4xl text-blood" />
                    <h3 className="mt-4 font-display text-xl font-bold uppercase text-white">Carrinho vazio</h3>
                    <p className="mt-2 text-sm font-medium text-zinc-400">Escolha produtos para montar seu loadout.</p>
                  </div>
                </div>
              ) : (
                items.map((item) => (
                  <article key={item.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="flex gap-3">
                      <img src={item.image} alt={item.name} className="size-20 rounded-md object-cover sm:size-24" />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold uppercase text-neon-purple">{item.category}</span>
                        <h3 className="line-clamp-2 font-display text-sm font-bold uppercase text-white">{item.name}</h3>
                        <p className="mt-1 font-display text-lg text-white">{formatCurrency(item.price)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remover ${item.name}`}
                        className="grid size-9 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-zinc-400 transition hover:border-blood hover:text-white"
                      >
                        <FiTrash2 />
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-md border border-white/10 bg-black/30">
                        <button
                          type="button"
                          onClick={() => decreaseItem(item.id)}
                          aria-label={`Diminuir quantidade de ${item.name}`}
                          className="grid size-9 place-items-center text-zinc-300 transition hover:text-white"
                        >
                          <FiMinus />
                        </button>
                        <span className="grid h-9 min-w-10 place-items-center border-x border-white/10 font-display font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => addToCart(item)}
                          aria-label={`Aumentar quantidade de ${item.name}`}
                          className="grid size-9 place-items-center text-zinc-300 transition hover:text-white"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <strong className="font-display text-white">{formatCurrency(item.price * item.quantity)}</strong>
                    </div>
                  </article>
                ))
              )}
            </div>

            <div className="border-t border-white/10 p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between text-lg">
                <span className="font-bold uppercase text-zinc-400">Total</span>
                <strong className="font-display text-xl text-white sm:text-2xl">{formatCurrency(totalPrice)}</strong>
              </div>
              <button
                type="button"
                disabled={!items.length}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blood px-4 py-4 font-display text-sm font-bold uppercase text-white shadow-neon-red transition enabled:hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-45"
              >
                Finalizar compra
              </button>
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-3 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold uppercase text-zinc-300 transition hover:border-blood/70 hover:text-white"
                >
                  Limpar carrinho
                </button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
