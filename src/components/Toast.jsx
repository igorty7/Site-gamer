import { AnimatePresence, motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { useCart } from '../context/useCart.js'

export default function Toast() {
  const { toast } = useCart()

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          className="fixed bottom-5 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-lg border border-blood/50 bg-panel px-4 py-3 text-white shadow-neon-red sm:left-auto sm:right-5 sm:translate-x-0"
        >
          <FiCheckCircle className="shrink-0 text-xl text-blood" />
          <p className="text-sm font-bold">{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
