import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md border border-blood/50 bg-blood/10 shadow-neon-red">
              <span className="font-display text-lg font-black text-white">NX</span>
            </span>
            <div>
              <strong className="block font-display text-lg uppercase text-white">NexusForge</strong>
              <span className="text-xs font-bold uppercase text-blood">Gaming Store</span>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm font-medium text-zinc-400">
            E-commerce gamer fictício criado com React, Tailwind CSS, Framer Motion e Context API.
          </p>
          <div className="mt-6 flex gap-2">
            {[FiInstagram, FiGithub, FiMail].map((Icon, index) => (
              <a
                key={index}
                href="/"
                aria-label="Rede social"
                className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/5 text-zinc-300 transition hover:border-neon-purple/70 hover:text-white hover:shadow-neon-purple"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {[
          ['Loja', ['PC Gamer', 'Teclados', 'Mouse', 'Headsets', 'Jogos']],
          ['Suporte', ['Garantia', 'Rastreamento', 'Trocas', 'FAQ']],
          ['Empresa', ['Sobre', 'Carreiras', 'Parcerias', 'Imprensa']],
        ].map(([title, links]) => (
          <div key={title}>
            <h3 className="font-display text-sm font-bold uppercase text-white">{title}</h3>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="/" className="text-sm font-semibold text-zinc-500 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold uppercase text-zinc-600">
        NexusForge 2026 - Projeto fictício para portfólio.
      </div>
    </footer>
  )
}
