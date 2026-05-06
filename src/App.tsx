import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  Compass,
  ShoppingCart, 
  ChevronDown, 
  Menu, 
  X,
  Target,
  Video,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import SyeikhProfile from '../assets/GAMBAR-SYEIKH-ZAINUL-ASRI-PROFILE-IMAGE-PAYWALL.png';

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const LOGO_URL = "/assets/DARSA-ISTIQOMAH-SIDE-NAVBAR-APP-ICON-LOGO.png";

const PhoneMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-14 rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-2xl"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute inset-s-[-17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute inset-s-[-17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute inset-e-[-17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-4xl overflow-hidden w-full h-full bg-black">
      {children}
    </div>
  </div>
);

const StoreButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap gap-4 ${className}`}>
    <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl transition-all group">
      <div className="text-stone-400 group-hover:text-gold-400 transition-colors">
        <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-97.3-83.8-97.7-161.9zm-46.7-164.2c27.1-34 19.1-73.5 19.1-73.5s-35.1 2.3-64.4 36.6c-27.1 31.4-19.6 70.1-19.6 70.1s35.6 2.3 64.9-33.2z"/>
        </svg>
      </div>
      <div className="text-left">
        <div className="text-[10px] uppercase font-bold tracking-widest text-stone-500 leading-none mb-1">Download on</div>
        <div className="text-sm font-bold tracking-tight">App Store</div>
      </div>
    </a>
    <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl transition-all group">
      <div className="text-stone-400 group-hover:text-gold-400 transition-colors">
        <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 25.5-30.1 25.5-50.4s-7.5-40.1-25.5-50.4zM104.6 499l220.7-127.3-60.1-60.1L104.6 499z"/>
        </svg>
      </div>
      <div className="text-left">
        <div className="text-[10px] uppercase font-bold tracking-widest text-stone-500 leading-none mb-1">Get it on</div>
        <div className="text-sm font-bold tracking-tight">Google Play</div>
      </div>
    </a>
  </div>
);

const features = [
  {
    title: "Tadabur Al-Quran 30 Juzuk",
    desc: "Belajar memahami Al-Quran secara berperingkat yang dibimbing AI dan asatizah berpengalaman.",
    icon: <BookOpen className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Sistem Istiqomah Rapi",
    desc: "Bukan sekadar belajar, tetapi dibimbing untuk konsisten melalui sistem amalan harian yang membantu anda kekal istiqomah.",
    icon: <Target className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Kuliah & Majlis Ilmu",
    desc: "Akses eksklusif kuliah Tuan Guru Syeikh Zainul Asri secara berterusan dalam satu platform mudah.",
    icon: <Video className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Waktu Solat & Peringatan",
    desc: "Waktu solat tepat serta peringatan harian untuk membantu anda kekal konsisten dalam ibadah.",
    icon: <Clock className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Arah Kiblat Tepat",
    desc: "Panduan arah kiblat yang tepat menggunakan teknologi sensor terkini untuk memudahkan anda di mana sahaja.",
    icon: <Compass className="w-8 h-8 text-gold-400" />
  },
  {
    title: "DarSA Marketplace",
    desc: "Akses pembelian kitab secara digital dan fizikal untuk memperkukuhkan perjalanan ilmu anda.",
    icon: <ShoppingCart className="w-8 h-8 text-gold-400" />
  },
];

const products = [
  {
    name: "DarSA Founder Elite (Lifetime + NFC Card)",
    price: "199",
    img: "/assets/1775441456291-cpr66.png",
    desc: "💎 Akses Lifetime: Tadabbur AI, Kuliah Agama & Komuniti Eksklusif.\n🎁 Percuma Bamboo NFC DarSA Card (Terhad 5,000 pertama sahaja)."
  },
  {
    name: "DarSA Istiqomah Monthly Access",
    price: "50",
    img: "/assets/1775441470187-irk76g.png",
    desc: "✨ Akses bulanan penuh ke semua modul premium tanpa komitmen.\n🔓 Nikmati fitur lengkap Tadabbur AI & Kuliah harian."
  },
  {
    name: "Darsa Bamboo NFC Digital Business Card",
    price: "99",
    img: "/assets/1776076657956-r2k78t.png",
    desc: "🌿 Kad perniagaan digital NFC daripada buluh lestari.\n⚡ Kongsi profil & media sosial dengan sekali sentuh (No App Required)."
  }
];

const FeatureCard = ({ f, i }: { f: any, i: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? (mousePos.y - 150) / 15 : 0,
          rotateY: isHovered ? (mousePos.x - 150) / -15 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass-card p-10 rounded-[32px] hover:border-gold-400/50 hover:emerald-glow transition-all duration-500 h-full flex flex-col relative z-10 overflow-hidden"
      >
        {/* Spotlight Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`,
          }}
        />
        
        <div className="mb-8 p-4 bg-emerald-accent/30 rounded-2xl w-fit group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
          {f.icon}
        </div>
        <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-400 transition-colors">{f.title}</h4>
        <p className="text-stone-400 leading-relaxed grow">{f.desc}</p>
        
        {/* Bottom Highlight */}
        <div className="mt-8 h-1 w-0 group-hover:w-full bg-linear-to-r from-gold-400 to-transparent transition-all duration-700" />
      </motion.div>
    </motion.div>
  );
};

const FAQItem = ({ faq, i }: { faq: any, i: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onClick={() => setIsOpen(!isOpen)}
      whileTap={{ scale: 0.97 }}
      className={`glass-card rounded-2xl group transition-all duration-500 relative overflow-hidden border-white/5 cursor-pointer ${isOpen ? 'border-gold-400/50 emerald-glow shadow-2xl' : 'hover:border-gold-400/30'}`}
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.15), transparent 80%)`,
        }}
      />
      
      <div className="p-8 font-serif text-lg flex justify-between items-center select-none relative z-10">
        <span className={`transition-colors duration-300 ${isOpen ? 'text-gold-400' : 'group-hover:text-gold-300'}`}>{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <ChevronDown className={`transition-colors ${isOpen ? 'text-gold-400' : 'text-gold-500'}`} />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden relative z-10"
          >
            <div className="px-8 pb-8 text-stone-400 border-t border-white/5 pt-6 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const IDLE_TIMEOUT = 3000;

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      setIsVisible(true);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsVisible(false), IDLE_TIMEOUT);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      resetIdleTimer();
    };

    const handleMouseMove = () => {
      resetIdleTimer();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    resetIdleTimer();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-stone-200">
      {/* News Ticker Announcement Bar */}
      <div className="bg-gold-500 text-black py-2 overflow-hidden whitespace-nowrap border-b border-black/10 relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="inline-block"
        >
          <span className="text-sm font-bold tracking-widest uppercase inline-block px-4">
            🔥 Founder Muhibin Terhad 5,000 sahaja – RM199 Lifetime • 📅 Pelancaran Rasmi: 16 Mei 2026 • 📖 Tadabur Al-Quran 30 Juzuk Kini Dibuka • 🌟 Dibimbing Oleh Tuan Guru Syeikh Zainul Asri • 💳 Dapatkan Bamboo NFC DarSA Card Eksklusif • 🛒 Marketplace DarSA: Kitab & Keperluan Ibadah • 
          </span>
          <span className="text-sm font-bold tracking-widest uppercase inline-block px-4">
            🔥 Founder Muhibin Terhad 5,000 sahaja – RM199 Lifetime • 📅 Pelancaran Rasmi: 16 Mei 2026 • 📖 Tadabur Al-Quran 30 Juzuk Kini Dibuka • 🌟 Dibimbing Oleh Tuan Guru Syeikh Zainul Asri • 💳 Dapatkan Bamboo NFC DarSA Card Eksklusif • 🛒 Marketplace DarSA: Kitab & Keperluan Ibadah • 
          </span>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl' : 'bg-white/5 backdrop-blur-md border-b border-white/5 py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="DarSA Logo" className="h-10 md:h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Ciri Utama', 'Aplikasi', 'Harga'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/[ &]/g, '-')}`} 
                className="text-sm font-medium tracking-widest uppercase hover:text-gold-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-gold-400 text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-300 transition-all transform hover:scale-105">
              Muat Turun
            </button>
          </div>

          <button className="md:hidden text-gold-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
            >
              {['Home', 'Ciri Utama', 'Aplikasi', 'Harga'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/[ &]/g, '-')}`} 
                  className="text-lg font-medium tracking-tight hover:text-gold-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-gold-400 text-black w-full py-4 rounded-xl font-bold uppercase tracking-widest">
                Muat Turun
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 md:pt-40 md:pb-52 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-accent/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold-400/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-8 flex justify-center lg:justify-start"
              >
                <img src={LOGO_URL} alt="DarSA Luxury Logo" className="w-48 h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl xl:text-7xl font-serif leading-[1.1] mb-8 tracking-tight"
              >
                Bina <span className="gold-text-gradient italic font-normal">Istiqomah</span> Dalam Genggaman Anda.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-stone-400 max-w-2xl mb-12"
              >
                Platform premium yang membantu umat Islam kekal konsisten dengan Al-Quran, waktu solat, dan bimbingan ilmu dari Tuan Guru Syeikh Zainul Asri.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-8 mb-12"
              >
                <div className="flex justify-center lg:justify-start">
                  <a href="#harga" className="gold-gradient text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-xl shadow-gold-500/20 text-center inline-block">
                    Daftar Founder Elite
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex-1 relative"
            >
              <div className="relative z-10">
                <PhoneMockup>
                  <img 
                    src="https://images.unsplash.com/photo-1620121692029-d088224efc74?auto=format&fit=crop&q=80&w=1932" 
                    alt="App Screen" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for user screenshot look */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 pointer-events-none">
                    <BookOpen size={48} className="text-gold-400 mb-4" />
                    <div className="text-center">
                      <h4 className="text-2xl font-serif text-white">Al-Quran Digital</h4>
                      <p className="text-stone-400 text-sm mt-2 font-sans">Semak Surah & Juzuk Dengan Mudah</p>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-accent/5 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* App Showcase */}
      <section className="py-32 bg-stone-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <motion.div 
                  initial={{ rotate: -5, opacity: 0 }}
                  whileInView={{ rotate: -12, opacity: 1 }}
                  className="absolute -top-12 -left-12 w-64 h-96 bg-emerald-accent/5 rounded-[40px] border border-emerald-accent/10"
                />
                <PhoneMockup>
                  <div className="h-full w-full bg-[#121212] p-4 font-sans">
                    <div className="flex justify-between items-center mb-6">
                      <Menu size={20} className="text-gold-400" />
                      <h5 className="font-bold text-gold-400">Al-Quran</h5>
                      <BookOpen size={20} className="text-gold-400" />
                    </div>
                    <div className="bg-stone-800/50 rounded-xl p-4 mb-4 flex items-center gap-3">
                      <div className="bg-gold-500/10 p-2 rounded-lg"><Target className="text-gold-400" size={16} /></div>
                      <div className="text-sm font-medium">Cari Surah, Juzuk...</div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { id: 1, name: 'Al-Fatihah', desc: 'Pembukaan • 7 Ayat', arabic: 'الفاتحة' },
                        { id: 2, name: 'Al-Baqarah', desc: 'Lembu Betina • 286 Ayat', arabic: 'البقرة' },
                        { id: 3, name: 'Ali \'Imran', desc: 'Keluarga Imran • 200 Ayat', arabic: 'آل عمران' },
                      ].map(s => (
                        <div key={s.id} className="bg-stone-900 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
                          <div className="flex gap-4 items-center">
                            <div className="w-8 h-8 rounded-lg border border-gold-400/30 flex items-center justify-center text-xs text-gold-400 font-bold">{s.id}</div>
                            <div>
                              <div className="font-bold text-white tracking-tight">{s.name}</div>
                              <div className="text-[10px] text-stone-500 uppercase font-bold tracking-widest">{s.desc}</div>
                            </div>
                          </div>
                          <div className="font-quran text-gold-400 text-lg leading-none">{s.arabic}</div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur-md border-t border-white/10 flex justify-around">
                      <Clock size={18} className="text-stone-500" />
                      <BookOpen size={18} className="text-gold-400" />
                      <Video size={18} className="text-stone-500" />
                      <Target size={18} className="text-stone-500" />
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Pengalaman Pengguna</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Antaramuka <span className="italic">Moden & Eksklusif</span></h3>
              <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                Kami membawakan rekaan yang tenang untuk membantu anda fokus. Navigasi yang mudah membolehkan anda mengakses Al-Quran, kuliah, dan amalan harian tanpa sebarang gangguan.
              </p>
              <div className="space-y-8 mb-12">
                {[
                  { t: "Mod Gelap Premium", d: "Selesa untuk pembacaan waktu malam." },
                  { t: "Tipografi Eksklusif", d: "Font yang direka khas untuk kemudahan membaca teks Arab." },
                  { t: "Pantas & Lancar", d: "Akses tanpa lengah ke semua modul utama." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="bg-emerald-accent/30 p-3 rounded-xl"><CheckCircle2 className="text-emerald-500" /></div>
                    <div>
                      <h5 className="font-serif text-xl font-bold mb-1">{item.t}</h5>
                      <p className="text-stone-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <StoreButtons />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-b border-white/10 bg-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Founder Terhad', value: '5,000' },
              { label: 'Juzuk Al-Quran', value: '30' },
              { label: 'Pelancaran Rasmi', value: '16 Mei 2026' },
              { label: 'Akses Eksklusif', value: 'Lifetime' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-serif gold-text-gradient mb-2">{stat.value}</div>
                <div className="text-stone-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority/Bimbingan Section */}
      <section id="kuliah---ilmu" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-accent/5 blur-[100px] rounded-full -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/10 rounded-[48px] blur-3xl" />
                <div className="relative glass-card p-2 rounded-[52px] border-gold-400/20 overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5] bg-stone-800 overflow-hidden rounded-[48px]">
                    <motion.img 
                      src={SyeikhProfile} 
                      alt="Tuan Guru Syeikh Zainul Asri"
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.1] }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-black/60 backdrop-blur-md border border-white/10 emerald-glow">
                    <p className="text-gold-400 font-serif italic text-lg leading-snug">"Membentuk jiwa yang tenang dengan Al-Quran dan bimbingan sahih."</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <span className="text-emerald-500 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">DarSA Istiqomah</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Dibimbing Oleh <span className="italic gold-text-gradient">Tuan Guru</span></h2>
              <div className="space-y-6 text-stone-400 text-lg leading-relaxed mb-10">
                <p>
                  Aplikasi DarSA Istiqomah merupakan inisiatif rasmi yang dipimpin dan ditauliahkan oleh <strong>Tuan Guru Syeikh Muhammad Zainul Asri</strong>, Pengasas Pondok DarSA. 
                </p>
                <div className="p-8 border-l-2 border-gold-500 bg-white/5 rounded-r-2xl">
                  <p className="italic text-stone-300">"Tujuan utama kami adalah untuk memudahkan ummah beristiqomah dalam amalan harian, di samping mendapat bimbingan ilmu yang bersanad dan sahih."</p>
                </div>
                <p>
                  Setiap kandungan, daripada tajuk kuliah sehingga ke modul tadabur Al-Quran, telah melalui proses semakan untuk memastikan ia selari dengan manhaj Ahli Sunnah Wal Jamaah yang kita pegangi.
                </p>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-accent/10 border border-emerald-accent/20 w-fit">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                </div>
                <span className="text-stone-300 font-bold uppercase tracking-widest text-xs">Official & Approved by DarSA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ciri-utama" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Eksklusif & Berstruktur</h2>
            <h3 className="text-4xl md:text-6xl font-serif tracking-tight">Kenapa Pilih <span className="italic">DarSA Istiqomah?</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FeatureCard key={i} f={f} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="harga" className="py-32 bg-stone-900/40 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Pelaburan Akhirat</h2>
            <h3 className="text-4xl md:text-6xl font-serif tracking-tight mb-8">Sertai Sebagai <span className="italic">Founder Elite</span></h3>
            <p className="text-stone-400 text-lg mb-12">
              Jadilah sebahagian daripada 5,000 muhibin terawal DarSA Istiqomah. Akses penuh seumur hidup dengan pelbagai fitur premium.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-16 text-left">
              {[
                "Akses Lifetime Sepenuhnya",
                "Tadabbur Al-Quran AI (30 Juzuk)",
                "Eksklusif Bamboo NFC DarSA Card",
                "Komuniti Muhibin Elite",
                "Sistem Amalan Berstruktur",
                "Lihat Kiblat"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-stone-300">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 w-fit">
                <div className="text-stone-500 line-through">RM50/bulan</div>
                <div className="text-4xl font-serif font-bold gold-text-gradient">RM199</div>
                <div className="text-xs uppercase bg-gold-400 text-black px-3 py-1 rounded-full font-bold">Terhad</div>
              </div>
              
              <button className="gold-gradient text-black px-16 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-2xl shadow-gold-500/20">
                Muat Turun
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk-eksklusif" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Milikinya Sekarang</h2>
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-8 underline decoration-gold-500/30 underline-offset-8">Produk <span className="italic">Eksklusif DarSA</span></h3>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Lengkapi gaya hidup Muslim kontemporari anda dengan koleksi barangan rasmi DarSA yang direka dengan penuh ketelitian dan kualiti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div 
                whileHover={{ y: -12 }}
                key={i} 
                className="group h-full flex flex-col glass-card p-4 rounded-[40px] border-white/5 relative overflow-hidden transition-all duration-500 hover:border-gold-400/30 hover:shadow-2xl hover:shadow-gold-500/10"
              >
                <div className="relative aspect-4/5 rounded-[32px] overflow-hidden mb-6 p-1">
                  <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-gold-500 text-black px-4 py-1.5 rounded-full font-bold text-[10px] shadow-lg tracking-widest">HOT</div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h4 className="text-xl font-serif mb-3 group-hover:text-gold-400 transition-colors uppercase tracking-tight">{p.name}</h4>
                  <p className="text-stone-400 text-sm mb-6 leading-relaxed whitespace-pre-line">{p.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-auto px-4 py-4 border-t border-white/10 bg-white/5 rounded-b-[32px]">
                  <div className="flex items-center gap-1 w-full justify-center">
                    <span className="text-[12px] text-stone-500 font-bold">RM</span>
                    <span className="text-3xl font-serif font-bold gold-text-gradient">{p.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="gold-gradient text-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-all shadow-2xl shadow-gold-500/20 flex items-center gap-4">
              <ShoppingCart className="w-5 h-5" />
              Beli Dalam App
            </button>
          </div>

          <div className="mt-20 p-12 glass-card rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 border-gold-400/10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-400">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-serif mb-1">Dapatkan Koleksi Penuh</h4>
                <p className="text-stone-400 text-sm">Layari Marketplace DarSA untuk lebih banyak pilihan.</p>
              </div>
            </div>
            <a href="#" className="border-2 border-gold-400 text-gold-400 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-400 hover:text-black transition-all">
              Buka Marketplace
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">Suara <span className="italic">Muhibin</span></h3>
            <p className="text-stone-500 uppercase tracking-widest text-sm font-bold">Perubahan yang dirasa oleh komuniti kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tn Zulkifli Husin",
                role: "Pengurus KColly",
                quote: "Sebelum ini susah untuk konsisten membaca Al-Quran. Dengan DarSA, saya ada sistem yang membantu saya istiqomah setiap hari."
              },
              {
                name: "Ahmad Yusof 'beymad'",
                role: "Pendakwah",
                quote: "Kuliah dan tadabur dalam apps ini sangat membantu saya memahami agama dengan lebih jelas dan mudah diamalkan."
              },
              {
                name: "Imam Ismail",
                role: "Masjid Nur Al-Hidayah",
                quote: "Apa yang paling saya suka adalah peringatan harian. Ia buat saya lebih disiplin dalam ibadah dan menjaga amalan."
              },
            ].map((t, i) => (
              <div key={i} className="glass-card p-10 rounded-[32px] relative italic text-stone-300">
                <div className="text-6xl text-gold-500/20 absolute top-4 left-6">"</div>
                <p className="relative z-10 leading-relaxed mb-8">{t.quote}</p>
                <div className="not-italic">
                  <div className="font-serif text-lg text-gold-400 mb-1">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-stone-900/20 relative overflow-hidden">
        {/* Aura Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full z-0"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full z-0"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h3 className="text-4xl font-serif text-center mb-20 tracking-tight">Soalan <span className="italic">Lazim</span></h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {[
              { q: "Berapakah harga untuk menyertai DarSA?", a: "Aplikasi DarSA Istiqomah adalah percuma. Tetapi, untuk mendapatkan akses Kuliah, pencapaian, target, Kiblat, Ganjaran Pahala perlu membuat bayaran RM199 (akses seumur hidup)." },
              { q: "Adakah apps ini percuma untuk dimuat turun?", a: "Ya, aplikasi boleh dimuat turun secara percuma. Namun, akses penuh kepada kandungan seperti Ganjaran Pahala, Kuliah dan Kiblat memerlukan langganan." },
              { q: "Bila saya boleh mula menggunakan apps?", a: "Akses penuh akan dibuka pada pelancaran rasmi pada 16 Mei 2026. Pengguna yang mendaftar awal akan mendapat akses sebaik sahaja sistem diaktifkan." },
              { q: "Adakah bayaran boleh dibuat secara ansuran?", a: "Ya, kemudahan bayaran 4 kali disediakan untuk pakej Founder. Walau bagaimanapun, bayaran perlu diselesaikan sepenuhnya sebelum pelancaran untuk mengaktifkan akses." },
              { q: "Apa yang saya akan dapat dalam DarSA?", a: "Anda akan mendapat akses kepada tadabur Al-Quran 30 juzuk, kuliah agama, sistem amalan harian, semak pahala bacaan Al Quran serta pelbagai fungsi sokongan seperti waktu solat dan arah kiblat." },
              { q: "Adakah kandungan dalam apps ini sahih?", a: "Semua kandungan dipantau dan dibimbing oleh Tuan Guru Syeikh Muhd Zainul Asri Hj. Mohd Romli bagi memastikan kesahihan dan kefahaman yang tepat." },
              { q: "Saya ada soalan berkenaan DarSA Istiqomah App", a: "Anda boleh menghubungi kami melalui WhatsApp atau email yang disediakan di bahagian contact di bawah. Team kami sedia membantu anda sepanjang perjalanan penggunaan aplikasi." },
              { q: "Adakah DarSA Istiqomah App sesuai untuk semua peringkat umur?", a: "Ya, DarSA Istiqomah App direka untuk semua peringkat – sama ada baru bermula or ingin memperkukuhkan istiqomah dalam kehidupan seharian." },
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <img src={LOGO_URL} alt="Logo Footer" className="h-16 mb-8" />
              <p className="text-stone-500 max-w-sm mb-8 text-lg">
                Membina generasi yang istiqomah dengan Al-Quran dan bimbingan asatizah sahih.
              </p>
              <StoreButtons className="mb-10" />
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/darsa_istiqomahapps?igsh=OWhuaWdiaHA1cDcz&utm_source=qr" },
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61573351258808" },
                  { Icon: TikTokIcon, href: "https://www.tiktok.com/@darsa.istiqomah.a?_r=1&_t=ZS-95I1ysNiA8V" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-white/5 rounded-2xl hover:bg-gold-500 hover:text-black transition-all border border-white/10"
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-xl mb-8 gold-text-gradient font-bold uppercase tracking-widest text-sm">Pautan Pantas</h5>
              <ul className="space-y-6 text-stone-500">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Ciri Utama', href: '#ciri-utama' },
                  { name: 'Aplikasi', href: '#kuliah---ilmu' },
                  { name: 'Founder Elite', href: '#harga' },
                  { name: 'Produk Eksklusif', href: '#produk-eksklusif' },
                  { name: 'Soalan Lazim', href: '#soalan-lazim' },
                  { name: 'Privacy Policy', href: 'https://admin.darsaistiqomah.com/privacy-policy', external: true }
                ].map(l => (
                  <li key={l.name}>
                    <a 
                      href={l.href} 
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="hover:text-gold-400 transition-colors uppercase tracking-widest text-[10px] font-bold"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h5 className="font-serif text-xl mb-8 gold-text-gradient font-bold uppercase tracking-widest text-sm">Hubungi Kami</h5>
              <ul className="space-y-6 text-stone-400">
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><Phone size={16} /></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-stone-600 mb-1">WhatsApp</div>
                    <a href="https://wa.me/60197537296" className="hover:text-gold-400 transition-colors">+60 19-7537296</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-gold-500/10 rounded-lg text-gold-400"><Mail size={16} /></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-stone-600 mb-1">Email</div>
                    <a href="mailto:admin@darsaistiqomah.com" className="hover:text-gold-400 transition-colors">admin.darsaistiqomah.com</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-stone-500/10 rounded-lg text-stone-400"><Compass size={16} /></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-stone-600 mb-1">Lokasi</div>
                    <p className="text-sm leading-relaxed">Pondok DarSA, Kampung Baharu Pokok Machang, 06300 Kuala Nerang</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 text-stone-600 text-xs uppercase tracking-widest font-bold">
            <div>© 2026 Itmam Za Nur Sdn Bhd.</div>
            <div className="flex gap-12">
              <a href="https://admin.darsaistiqomah.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Navbar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-fit"
          >
            <div className="glass-card bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full p-2 px-4 flex items-center justify-center gap-2 sm:gap-4 shadow-2xl">
              <div className="flex items-center gap-1 sm:gap-3">
                {[
                  { label: 'Home', href: '#home', icon: Home },
                  { label: 'Ciri Utama', href: '#ciri-utama', icon: Target },
                  { label: 'Aplikasi', href: '#kuliah---ilmu', icon: Video },
                  { label: 'Harga', href: '#harga', icon: ShoppingCart },
                ].map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    className="flex flex-col items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-stone-400 hover:text-gold-400 transition-colors p-1 sm:p-2"
                  >
                    <item.icon size={18} className="sm:w-5 sm:h-5" />
                    <span className="hidden sm:block">{item.label}</span>
                  </a>
                ))}
              </div>
              <button className="bg-gold-400 text-black px-5 sm:px-8 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-gold-300 transition-all shadow-lg shadow-gold-500/20 whitespace-nowrap">
                Muat Turun
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
