git initimport { FiCpu, FiGrid, FiHeadphones, FiMousePointer, FiSearch } from 'react-icons/fi'
import { FaGamepad, FaKeyboard } from 'react-icons/fa'
import { categories } from '../data/products.js'

const icons = {
  Todos: FiGrid,
  'PC Gamer': FiCpu,
  Teclados: FaKeyboard,
  Mouse: FiMousePointer,
  Headsets: FiHeadphones,
  Jogos: FaGamepad,
}

export default function CategoryFilter({ activeCategory, onCategoryChange, searchTerm, onSearchChange }) {
  return (
    <div className="glass-panel rounded-lg p-3 sm:p-4">
      <div className="flex flex-col gap-3 lg:gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative w-full xl:max-w-md">
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar periférico, PC ou jogo"
            className="h-11 w-full rounded-md border border-white/10 bg-black/30 pl-11 pr-4 text-sm font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-blood/70 focus:shadow-neon-red sm:h-12 sm:text-base"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end">
          {categories.map((category) => {
            const Icon = icons[category]
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`inline-flex h-11 min-w-0 items-center justify-center gap-2 rounded-md border px-2 text-xs font-bold uppercase transition sm:h-12 sm:px-3 sm:text-sm ${
                  isActive
                    ? 'border-blood bg-blood text-white shadow-neon-red'
                    : 'border-white/10 bg-white/5 text-zinc-300 hover:border-neon-purple/60 hover:text-white hover:shadow-neon-purple'
                }`}
              >
                <Icon className="shrink-0 text-base" />
                <span className="truncate">{category}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
