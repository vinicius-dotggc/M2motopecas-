
import React, { useState, useMemo, useEffect } from 'react';
import { SERVICES, PRODUCTS, WHATSAPP_NUMBER, STORE_ADDRESS, TESTIMONIALS, getIcon } from './constants';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SectionHeader } from './components/SectionHeader';
import { MobileNav } from './components/MobileNav';
import { ServiceScheduler } from './components/ServiceScheduler';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductItem } from './types';
import { 
  ChevronDown, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  MessageCircle,
  Bike,
  Star,
  Target,
  ExternalLink,
  ArrowDown
} from 'lucide-react';

const App: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'pneus' | 'oleo' | 'baterias'>('todos');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'servicos', 'produtos', 'contato'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredProducts = useMemo(() => {
    return filter === 'todos' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === filter);
  }, [filter]);

  const openWhatsAppSearch = () => {
    const message = encodeURIComponent("Olá! Estou no site e gostaria de saber se vocês têm alguma peça ou marca específica em estoque.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const INSTAGRAM_URL = "https://www.instagram.com/m2motopecas.salto?igsh=YjNqZXRjazV3NHFm";
  const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Av.+Nove+de+Julho,+1893,+Jardim+Paraiso,+Salto+-+SP";
  const DOMAIN_NAME = "m2motopeças.com";

  return (
    <div className="min-h-screen bg-[#0f0f0f] pb-24 md:pb-0">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-2xl border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              <Bike className="text-white" size={24} />
            </div>
            <span className="text-2xl font-oswald font-bold uppercase tracking-tighter text-white">
              M2 MOTO <span className="text-red-600">PEÇAS</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={`hover:text-red-500 transition-colors ${activeSection === 'home' ? 'text-red-500' : 'text-gray-300'}`}>Início</a>
            <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className={`hover:text-red-500 transition-colors ${activeSection === 'sobre' ? 'text-red-500' : 'text-gray-300'}`}>Quem Somos Nós</a>
            <a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className={`hover:text-red-500 transition-colors ${activeSection === 'servicos' ? 'text-red-500' : 'text-gray-300'}`}>Serviços</a>
            <a href="#produtos" onClick={(e) => scrollToSection(e, 'produtos')} className={`hover:text-red-500 transition-colors ${activeSection === 'produtos' ? 'text-red-500' : 'text-gray-300'}`}>Produtos</a>
          </div>
          <div className="hidden lg:flex items-center gap-6">
             <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram size={20} />
             </a>
             <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 rounded-md font-bold uppercase text-[10px] tracking-widest hover:bg-red-600 hover:text-white transition-all border border-white/10 shadow-lg">
               CONTATO
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2070" 
            alt="Motorcycle background" 
            className="w-full h-full object-cover opacity-30 scale-105 blur-[1px]"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0f0f0f]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-block mb-6 px-4 py-1 border border-red-600/40 rounded-full bg-red-950/30 text-red-400 text-[10px] font-bold uppercase tracking-[0.4em] backdrop-blur-md">
            Oficina Especializada em Salto - SP
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-oswald font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-white">
            O FUTURO DA SUA <span className="text-red-600 text-glow-red">MOTO</span>.
          </h1>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Uma oficina nova, moderna e pronta para cuidar da sua máquina com o que há de melhor no mercado internacional.
          </p>
          
          <div className="flex flex-col items-center gap-8 w-full max-w-md">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] transition-all shadow-xl flex items-center justify-center gap-3">
               <MessageCircle size={18} />
               Falar com Especialista
            </a>

            <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300 w-full">
              <div className="flex items-center gap-2 text-red-500/90 font-bold uppercase text-[10px] tracking-[0.3em] select-none">
                <ArrowDown size={14} className="animate-bounce" />
                Nossos serviços e produtos estão logo abaixo
              </div>

              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                draggable="false"
                className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-2xl transition-all w-full md:w-auto backdrop-blur-md"
              >
                <div className="bg-red-600 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-red-600/20 shrink-0">
                  <Instagram size={18} className="text-white" />
                </div>
                <span className="text-gray-200 text-[10px] font-medium uppercase tracking-widest text-left leading-tight max-w-[220px] group-hover:text-white transition-colors">
                  Siga-nos no Instagram para ver <span className="text-red-500 font-bold">mais produtos</span> de seu interesse. <span className="text-white font-bold underline">Clique aqui</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block pointer-events-none">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 md:py-32 bg-[#141414] relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em]">
                  <Target size={16} /> Sobre a M2 Moto Peças
                </div>
                <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase tracking-tighter">
                  TECNOLOGIA E <span className="text-red-600">PRECISÃO</span> EM SALTO
                </h2>
                <p className="text-gray-300 leading-relaxed font-light text-lg">
                  A M2 Moto Peças nasceu da paixão por motos e da necessidade de um serviço técnico de alto nível em Salto. Somos uma oficina moderna, focada em trazer as melhores marcas de pneus, óleos e baterias para a nossa região. Nossa missão é garantir que cada motociclista tenha acesso a produtos de procedência e um atendimento técnico de excelência.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800 border border-white/10 rounded-2xl text-red-600 h-fit">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-white uppercase text-sm tracking-widest mb-1 font-bold">Endereço</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{STORE_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-800 border border-white/10 rounded-2xl text-red-600 h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-white uppercase text-sm tracking-widest mb-1 font-bold">Horários</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Seg a Sex: 08:00 - 18:00<br/>Sáb: 08:00 - 13:00</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2 animate-pulse">
                  <MapPin size={14} className="text-red-600" />
                  Clique no mapa para ver onde se localiza a loja e traçar rotas
                </p>
                <div className="w-full h-56 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:shadow-[0_0_50px_rgba(220,38,38,0.2)] transition-all duration-700 relative group bg-zinc-900">
                  <a 
                    href={MAPS_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors"
                  >
                    <div className="bg-red-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-xl scale-90 group-hover:scale-100">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  </a>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8183020055173!2d-47.28859422471617!3d-23.231498679010185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf50059f1f0a21%3A0x6d05f27914f7b605!2sAv.%20Nove%20de%20Julho%2C%201893%20-%20Jardim%20Paraiso%2C%20Salto%20-%20SP%2C%2013320-191!5e0!3m2!1spt-BR!2sbr!4v1717345678901!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none grayscale-0"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card p-10 rounded-[40px] border-futuristic relative">
                <div className="mb-10">
                  <h3 className="text-2xl font-oswald font-bold text-white uppercase tracking-tighter">Depoimentos</h3>
                  <p className="text-gray-400 text-[10px] mt-2 uppercase tracking-[0.2em]">Pilotos satisfeitos</p>
                </div>
                
                <div className="space-y-6">
                  {TESTIMONIALS.slice(0, 3).map((t) => (
                    <div key={t.id} className="bg-white/10 border border-white/10 p-6 rounded-3xl space-y-3 hover:bg-white/15 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 text-[10px] font-bold">
                             {t.userName.charAt(0)}
                           </div>
                           <p className="text-xs font-bold text-white uppercase">{t.userName}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={10} className="fill-red-500 text-red-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-300 font-light italic">"{t.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Nossos Serviços" 
            subtitle="Cuidado técnico especializado com foco em performance e segurança máxima."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {SERVICES.map((s) => (
              <div key={s.id} className="group glass-card rounded-[32px] p-10 border-futuristic flex flex-col items-center text-center hover:bg-zinc-800 transition-all">
                <div className="w-20 h-20 bg-red-600/15 rounded-[24px] flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                  {getIcon(s.icon, 40)}
                </div>
                <h3 className="text-xl font-oswald font-bold uppercase tracking-wider mb-5 text-white">{s.title}</h3>
                <p className="text-gray-300 text-[14px] mb-10 leading-relaxed font-light flex-grow">{s.description}</p>
                <WhatsAppButton itemTitle={s.title} label="CONSULTAR" className="w-full py-4 text-[11px] tracking-[0.2em] rounded-2xl" />
              </div>
            ))}
          </div>
          <ServiceScheduler />
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-[#141414] relative border-t border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            title="Catálogo de Produtos" 
            subtitle="Pneus, Baterias e Óleos das melhores marcas mundiais."
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'todos', label: 'Ver Tudo' },
              { id: 'pneus', label: 'Pneus' },
              { id: 'oleo', label: 'Óleos' },
              { id: 'baterias', label: 'Baterias' },
            ].map(b => (
              <button 
                key={b.id}
                onClick={() => setFilter(b.id as any)}
                className={`px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all border ${
                  filter === b.id ? 'bg-red-600 text-white border-red-500 shadow-lg' : 'bg-transparent text-gray-400 border-white/20 hover:border-white/40 hover:text-white'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProduct(p)}
                className="group glass-card rounded-[32px] p-8 border-futuristic flex flex-col hover:bg-zinc-800 transition-all cursor-pointer relative"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-red-600/20 text-red-400 text-[9px] font-bold px-3 py-1 rounded-full border border-red-500/30 uppercase tracking-widest">{p.category}</span>
                  <div className="text-zinc-700 group-hover:text-red-500/60 transition-colors">
                    <Bike size={20} />
                  </div>
                </div>
                <h3 className="text-lg font-oswald font-bold uppercase tracking-wider mb-4 text-white group-hover:text-red-500 transition-colors leading-tight">{p.name}</h3>
                <p className="text-gray-300 text-[13px] mb-10 leading-relaxed flex-grow font-light">{p.description}</p>
                <div className="text-[9px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowDown size={10} className="-rotate-90" /> Toque para ver detalhes
                </div>
                <div className="flex flex-col gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                  <WhatsAppButton itemTitle={p.name} label="SOLICITAR MARCA" className="w-full py-4 text-[11px] tracking-[0.2em] rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-br from-red-600 to-red-900">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-black/40 backdrop-blur-3xl p-16 rounded-[40px] border border-white/20 max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-6 text-white tracking-tighter">Procura algo específico?</h2>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Não encontrou o que procurava? Nossa equipe verifica o estoque das melhores marcas em tempo real para você em {DOMAIN_NAME}.</p>
            <button 
              onClick={openWhatsAppSearch}
              className="bg-white text-red-600 font-bold px-16 py-6 rounded-2xl text-[11px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-2xl flex items-center gap-4 mx-auto"
            >
              <MessageCircle size={22} />
              Consultar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contato" className="bg-[#0a0a0a] border-t border-white/10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Bike className="text-red-600" size={32} />
                <span className="text-3xl font-oswald font-bold uppercase tracking-tighter text-white">
                  M2 MOTO <span className="text-red-600">PEÇAS</span>
                </span>
              </div>
              <p className="text-gray-400 mb-12 max-w-md font-light leading-relaxed">
                Referência técnica em Salto/SP. Qualidade, procedência e tecnologia aplicadas à manutenção da sua motocicleta.
              </p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-white/10 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-xl text-white" title="Instagram"><Instagram size={18}/></a>
              </div>
            </div>
            <div>
              <h4 className="font-oswald text-sm uppercase mb-8 tracking-[0.3em] text-white font-bold">Menu</h4>
              <ul className="space-y-4 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="hover:text-red-500 transition-colors">Quem Somos Nós</a></li>
                <li><a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="hover:text-red-500 transition-colors">Serviços</a></li>
                <li><a href="#produtos" onClick={(e) => scrollToSection(e, 'produtos')} className="hover:text-red-500 transition-colors">Produtos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-oswald text-sm uppercase mb-8 tracking-[0.3em] text-white font-bold">Contato</h4>
              <div className="space-y-6">
                <a 
                  href={MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-red-500 transition-all group"
                >
                  <div className="bg-red-600/20 p-2 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all shrink-0">
                    <MapPin size={18} className="text-red-600 group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="leading-relaxed font-medium text-gray-300">{STORE_ADDRESS}</span>
                    <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold mt-1 flex items-center gap-1">Ver no Mapa <ExternalLink size={10} /></span>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="bg-zinc-800 p-2 rounded-lg shrink-0 border border-white/5">
                    <Phone size={18} className="text-red-600" />
                  </div>
                  <span className="font-medium font-bold text-gray-300">(11) 91665-1813</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-16 border-t border-white/10 text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} M2 MOTO PEÇAS - {DOMAIN_NAME}
          </div>
        </div>
      </footer>

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      <MobileNav activeSection={activeSection} />
    </div>
  );
};

export default App;
