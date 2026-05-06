import controllerImg from '../assets/products/controller.png'
import gameCoverImg from '../assets/products/game-cover.png'
import headsetImg from '../assets/products/headset.png'
import heroImg from '../assets/products/hero-gamer.png'
import keyboardImg from '../assets/products/keyboard.png'
import monitorImg from '../assets/products/monitor.png'
import mouseImg from '../assets/products/mouse.png'
import pcTowerImg from '../assets/products/pc-tower.png'

export const categories = [
  'Todos',
  'PC Gamer',
  'Teclados',
  'Mouse',
  'Headsets',
  'Jogos',
]

export const heroProductImage = heroImg

export const products = [
  {
    id: 'obsidian-rtx-forge-x9',
    name: 'Obsidian RTX Forge X9',
    category: 'PC Gamer',
    price: 18499.9,
    oldPrice: 21999.9,
    image: pcTowerImg,
    badge: 'Top build',
    rating: 4.9,
    stock: 8,
    featured: true,
    promo: true,
    shortDescription: 'Desktop full tower com refrigeração líquida, GPU flagship e acabamento em vidro temperado.',
    description:
      'A Obsidian RTX Forge X9 é uma máquina criada para 4K competitivo, streaming e criação pesada. O gabinete usa fluxo de ar otimizado, iluminação ARGB discreta e componentes premium para entregar potência com presença visual.',
    specs: ['GPU classe RTX 5080', 'CPU 16 cores', '64 GB DDR5', 'SSD NVMe 4 TB', 'Water cooler 360 mm'],
  },
  {
    id: 'riftbox-mini-x',
    name: 'RiftBox Mini X',
    category: 'PC Gamer',
    price: 9499.9,
    oldPrice: 10999.9,
    image: heroImg,
    badge: 'Compacto',
    rating: 4.8,
    stock: 12,
    featured: true,
    promo: false,
    shortDescription: 'Setup compacto com performance de sobra para 1440p, lives e multitarefa.',
    description:
      'A RiftBox Mini X combina gabinete compacto, componentes silenciosos e uma estética dark neon para quem quer potência sem ocupar a mesa inteira.',
    specs: ['GPU classe RTX 5070', 'CPU 12 cores', '32 GB DDR5', 'SSD NVMe 2 TB', 'Fonte 850 W Gold'],
  },
  {
    id: 'nebula-tkl-phantom',
    name: 'Nebula TKL Phantom',
    category: 'Teclados',
    price: 899.9,
    oldPrice: 1199.9,
    image: keyboardImg,
    badge: 'Hot swap',
    rating: 4.7,
    stock: 24,
    featured: true,
    promo: true,
    shortDescription: 'Teclado mecânico TKL com switches lineares, frame de alumínio e RGB por tecla.',
    description:
      'Feito para precisão e estética limpa, o Nebula TKL Phantom entrega construção robusta, baixa latência e perfil compacto para setups competitivos.',
    specs: ['Layout TKL ABNT2', 'Switch linear hot swap', 'Polling 8000 Hz', 'Keycaps PBT', 'Cabo USB-C removível'],
  },
  {
    id: 'pulsefire-vortex-pro',
    name: 'Pulsefire Vortex Pro',
    category: 'Mouse',
    price: 449.9,
    oldPrice: 579.9,
    image: mouseImg,
    badge: 'Ultra leve',
    rating: 4.8,
    stock: 36,
    featured: true,
    promo: true,
    shortDescription: 'Mouse gamer wireless com sensor de alta precisão, baixa latência e pegada ergonômica.',
    description:
      'O Pulsefire Vortex Pro foi pensado para FPS: corpo leve, cliques responsivos, conexão estável e bateria para longas sessões.',
    specs: ['Sensor 30K DPI', 'Peso 58 g', 'Wireless 2.4 GHz', 'Bateria 90 h', 'PTFE premium'],
  },
  {
    id: 'sonic-rift-h7',
    name: 'Sonic Rift H7 Wireless',
    category: 'Headsets',
    price: 799.9,
    oldPrice: 999.9,
    image: headsetImg,
    badge: 'Surround',
    rating: 4.8,
    stock: 18,
    featured: false,
    promo: true,
    shortDescription: 'Headset wireless com áudio espacial, microfone removível e almofadas memory foam.',
    description:
      'O Sonic Rift H7 Wireless entrega isolamento confortável, graves firmes e posicionamento espacial para partidas competitivas e imersão em campanhas.',
    specs: ['Drivers 50 mm', 'Áudio 7.1 virtual', 'Microfone destacável', 'Bateria 55 h', 'Conexão USB-C e 2.4 GHz'],
  },
  {
    id: 'neon-siege-eclipse',
    name: 'Neon Siege: Eclipse Protocol',
    category: 'Jogos',
    price: 249.9,
    oldPrice: 329.9,
    image: gameCoverImg,
    badge: 'Digital',
    rating: 4.6,
    stock: 99,
    featured: true,
    promo: true,
    shortDescription: 'Shooter sci-fi fictício com campanha cooperativa, arenas ranqueadas e visual cyberpunk.',
    description:
      'Neon Siege: Eclipse Protocol é um lançamento fictício criado para o catálogo, com foco em ação tática, progressão sazonal e estética futurista.',
    specs: ['Código digital', 'Coop para 4 jogadores', 'Modo ranqueado', 'Campanha 18 h', 'Português BR'],
  },
  {
    id: 'astraview-curved-34',
    name: 'AstraView Curved 34 Ultra',
    category: 'PC Gamer',
    price: 3899.9,
    oldPrice: 4599.9,
    image: monitorImg,
    badge: 'Ultra wide',
    rating: 4.7,
    stock: 15,
    featured: false,
    promo: false,
    shortDescription: 'Monitor curvo ultra-wide com painel rápido, contraste intenso e iluminação traseira sutil.',
    description:
      'O AstraView Curved 34 Ultra amplia o campo de visão em jogos, edição e produtividade, com taxa alta e um design que combina com setups premium.',
    specs: ['34 polegadas', '3440 x 1440', '165 Hz', '1 ms', 'HDR 600'],
  },
  {
    id: 'quantum-pad-x',
    name: 'Quantum Pad X',
    category: 'Jogos',
    price: 399.9,
    oldPrice: 499.9,
    image: controllerImg,
    badge: 'Pro grip',
    rating: 4.5,
    stock: 30,
    featured: false,
    promo: false,
    shortDescription: 'Controle wireless com triggers ajustáveis, vibração precisa e acabamento emborrachado.',
    description:
      'O Quantum Pad X foi criado para jogos de corrida, aventura e plataforma, com resposta rápida, boa autonomia e pegada confortável.',
    specs: ['Wireless 2.4 GHz', 'Triggers Hall Effect', 'Bateria 40 h', 'USB-C', 'Compatível com PC'],
  },
]
