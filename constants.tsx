import React from 'react';
import { 
  Wrench, 
  Droplet, 
  Settings, 
  MapPin, 
  Mic, 
  MessageCircle, 
  Box, 
  Hammer, 
  Zap,
  Bike,
  ShieldAlert
} from 'lucide-react';
import { ServiceItem, ProductItem, Review } from './types';

export const WHATSAPP_NUMBER = "5511916651813"; 
export const STORE_ADDRESS = "Av. 9 de Julho, 1893, Jardim Paraíso, Salto - SP";

export const getIcon = (name: string, size: number = 24) => {
  switch (name) {
    case 'Droplet': return <Droplet size={size} />;
    case 'Wrench': return <Wrench size={size} />;
    case 'Settings': return <Settings size={size} />;
    case 'Hammer': return <Hammer size={size} />;
    case 'Zap': return <Zap size={size} />;
    case 'Bike': return <Bike size={size} />;
    case 'ShieldAlert': return <ShieldAlert size={size} />;
    default: return <Wrench size={size} />;
  }
};

export const TESTIMONIALS: Review[] = [
  { id: 'r1', userName: 'Carlos Silva', rating: 5, comment: 'Produto excelente, superou as expectativas! Atendimento nota 10.', date: '12/05/2024' },
  { id: 'r2', userName: 'Marina Souza', rating: 5, comment: 'Muito bom, atendimento excelente na loja física. Recomendo a todos.', date: '02/06/2024' },
  { id: 'r3', userName: 'Ricardo G.', rating: 5, comment: 'Pneu fantástico para touring. Valeu a pena buscar na oficina, equipe muito técnica.', date: '10/01/2024' },
  { id: 'r4', userName: 'Fábio L.', rating: 5, comment: 'Kit de altíssima qualidade. O pessoal instalou na hora com muita precisão.', date: '15/03/2024' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Troca de Óleo',
    description: 'Trabalhamos com marcas premium como Motul, Yamalube e Mobil. Garantia de motor protegido.',
    icon: 'Droplet',
    image: 'https://images.unsplash.com/photo-1635843104383-05497210631f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    title: 'Revisão Completa',
    description: 'Desmontagem técnica, lubrificação de cabos e eixos, e verificação de segurança em 50 pontos.',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1599812182397-3d758b6bd609?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    title: 'Ajuste de Suspensão',
    description: 'Serviço de retentores, troca de fluido e regulagem de pré-carga para maior conforto.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1625043484550-df60256f6ea5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    title: 'Instalação de Peças',
    description: 'Montagem de acessórios, kits de transmissão, pastilhas de freio e componentes elétricos.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: ProductItem[] = [
  // PNEUS
  {
    id: 'p1',
    name: 'Pneu Pirelli Diablo Rosso IV',
    category: 'pneus',
    description: 'Alta performance para motos esportivas. Máxima aderência em curvas e no molhado.',
    image: 'https://images.unsplash.com/photo-1580274465116-351834f89d53?auto=format&fit=crop&q=80&w=800',
    specs: ['Estrutura Multi-Composto', 'Foco em Superbike', 'Aderência Química Superior'],
    compatibility: [
      'Honda CBR 600RR', 'Honda CBR 1000RR-R', 'BMW S1000RR', 'Kawasaki Ninja ZX-6R', 
      'Kawasaki Ninja ZX-10R', 'Ducati Panigale V2/V4', 'Yamaha YZF-R1/R6', 'Suzuki GSX-R 750/1000', 
      'Triumph Street Triple 765', 'Triumph Speed Triple 1200', 'Yamaha MT-09', 'Kawasaki Z900'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'p2',
    name: 'Pneu Metzeler Roadtec 01',
    category: 'pneus',
    description: 'Referência em durabilidade e segurança para viagens longas (Touring).',
    image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=800',
    specs: ['Banda de rodagem otimizada para chuva', 'Longevidade aumentada em 20%', 'Estabilidade em alta carga'],
    compatibility: [
      'BMW R 1200 GS / 1250 GS', 'Suzuki V-Strom 650/1000', 'Triumph Tiger 800 / 900 / 1200', 
      'Honda Africa Twin CRF 1000/1100L', 'Kawasaki Versys 650 / 1000', 'Honda NC 700X / 750X', 
      'Yamaha Tracer 900 GT', 'BMW F 750 / 850 GS', 'Ducati Multistrada 950 / V4', 'Yamaha Super Ténéré 1200'
    ],
    gallery: []
  },
  {
    id: 'p3',
    name: 'Pneu Michelin Road 6',
    category: 'pneus',
    description: 'Tecnologia bi-composto para maior vida útil e excelente grip em baixa temperatura.',
    image: 'https://images.unsplash.com/photo-1579450841234-4911d821728c?auto=format&fit=crop&q=80&w=800',
    specs: ['Tecnologia 2CT+', 'X-Sipe Technology para grip molhado', 'Silica-Rich Compound'],
    compatibility: [
      'Yamaha MT-07', 'Yamaha MT-09', 'Honda CB 650R / CBR 650R', 'Kawasaki Z650 / Z900', 
      'Suzuki GSX-S 750', 'Triumph Street Triple', 'BMW F 900 R', 'Honda Hornet 600', 
      'Yamaha XJ6', 'Suzuki Bandit 650 / 1250', 'KTM Duke 390 / 790 / 890'
    ],
    gallery: []
  },
  // BATERIAS
  {
    id: 'p4',
    name: 'Bateria Heliar PowerSports',
    category: 'baterias',
    description: 'Tecnologia AGM livre de manutenção. Maior corrente de partida para sua moto.',
    image: 'https://images.unsplash.com/photo-1597732139137-2384e4473300?auto=format&fit=crop&q=80&w=800',
    specs: ['Livre de manutenção', 'Alta resistência a vibrações', 'Maior CCA (Cold Cranking Amps)'],
    compatibility: [
      'Honda CG 125 / 150 / 160 (Titan, Fan, Start)', 'Honda Biz 100 / 125', 'Honda PCX 150', 
      'Yamaha Fazer 250', 'Yamaha Lander 250', 'Honda CB 300R / CB 250F Twister', 'Yamaha Crosser 150', 
      'Yamaha NMAX 160', 'Honda XRE 190 / 300', 'Honda NX 400 Falcon', 'Kawasaki Ninja 300 / 400'
    ],
    gallery: []
  },
  {
    id: 'p5',
    name: 'Bateria Yuasa YTX Series',
    category: 'baterias',
    description: 'O padrão mundial de qualidade. Durabilidade superior e confiabilidade absoluta.',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=800',
    specs: ['Qualidade OEM', 'Tecnologia VRLA', 'Baixa auto-descarga'],
    compatibility: [
      'BMW R 1200 / 1250 GS', 'Harley Davidson Sportster 883 / 1200', 'Triumph Tiger 800 / 900 / 1200', 
      'Yamaha XT 660R', 'Ducati Monster 821 / 1200', 'Honda CB 1000R', 'Suzuki Hayabusa 1300', 
      'Kawasaki Z1000', 'Honda Varadero 1000', 'BMW S1000RR', 'Suzuki V-Strom 1000'
    ],
    gallery: []
  },
  // ÓLEOS
  {
    id: 'p7',
    name: 'Óleo Motul 7100 4T 10W40',
    category: 'oleo',
    description: '100% Sintético com tecnologia Ester. Proteção máxima para motores de alto desempenho.',
    image: 'https://images.unsplash.com/photo-1635843104383-05497210631f?auto=format&fit=crop&q=80&w=800',
    specs: ['Norma JASO MA2', 'Tecnologia Ester', 'Compatível com catalisadores'],
    compatibility: [
      'Yamaha YZF-R1 / R6 / R3', 'Kawasaki Ninja ZX-6R / ZX-10R', 'Suzuki GSX-R Series', 
      'BMW S1000RR / S1000XR', 'Honda CBR 600RR / 1000RR', 'Triumph Daytona 675', 
      'Ducati Panigale / Monster', 'KTM Super Duke 1290', 'Aprilia RSV4'
    ],
    gallery: []
  },
  {
    id: 'p10',
    name: 'Óleo Motul 5100 4T 15W50',
    category: 'oleo',
    description: 'Semi-sintético Technosynthese com Ester. Ideal para o uso urbano intenso e viagens.',
    image: 'https://images.unsplash.com/photo-1635843104383-05497210631f?auto=format&fit=crop&q=80&w=800',
    specs: ['Trocas de marcha suaves', 'Redução de ruído do motor', 'Base Ester'],
    compatibility: [
      'Honda CB 500F / 500X / CBR 500R', 'Yamaha MT-03 / R3', 'Kawasaki Z400 / Ninja 400', 
      'Honda NC 750X', 'BMW G 310 R / GS', 'Suzuki V-Strom 650', 'Triumph Tiger 800 / 900', 
      'Royal Enfield Himalayan / Interceptor', 'Kawasaki Versys 650'
    ],
    gallery: []
  },
  {
    id: 'p11',
    name: 'Óleo Mobil Super Moto 20W50',
    category: 'oleo',
    description: 'Óleo mineral multiviscoso premium para proteção diária do motor e transmissão.',
    image: 'https://images.unsplash.com/photo-1635843104383-05497210631f?auto=format&fit=crop&q=80&w=800',
    specs: ['Alta viscosidade', 'Proteção contra desgaste', 'Econômico'],
    compatibility: [
      'Honda CG 125 / 150 (Modelos antigos)', 'Yamaha YBR 125 / Factor 125', 'Honda NX 400 Falcon', 
      'Honda CBX 250 Twister (Antiga)', 'Yamaha XT 600 / 660R', 'Suzuki Yes 125 / Intruder 125', 
      'Honda Tornado 250', 'Dafra Apache 150', 'Kasinski Comet 250'
    ],
    gallery: []
  }
];
