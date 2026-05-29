import { useState, useEffect, useRef } from 'react';
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
  Home,
  TrendingUp,
  Zap,
  Heart,
  Layout,
  MousePointerClick,
  MessageCircle,
  Globe,
  MapPin,
  Calendar,
  Navigation,
  Award,
  Star,
  Baby,
  Circle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

import SyeikhProfile from './assets/GAMBAR-SYEIKH-ZAINUL-ASRI-PROFILE-IMAGE-PAYWALL.png';
import LogoUrl from './assets/DARSA-ISTIQOMAH-SIDE-NAVBAR-APP-ICON-LOGO.png';
import SplashScreen from './assets/NEW_SPLASH_SCREEN_ICON_VER_3_NO_BACKGROUND.png';
import Screen1 from './assets/Screenshot_2026_0422_160410.jpg';
import Screen2 from './assets/Screenshot_20260422_152354.jpg';
import Product1 from './assets/WhatsApp Image 2026-05-07 at 08.07.59.jpeg';
import Product3 from './assets/WhatsApp Image 2026-05-07 at 08.08.08.jpeg';
import Kitab1 from './assets/40 wasiat penghulu seluruh umat kitab darsa.jpeg';
import FriedChickenPromo from './assets/WhatsApp Image 2026-05-07 at 08.16.05.jpeg';


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

const LOGO_URL = LogoUrl;

const PhoneMockup = ({ children, frameColor = "bg-stone-950", borderColor = "border-stone-800" }: { children: React.ReactNode, frameColor?: string, borderColor?: string }) => (
  <div className={`relative mx-auto ${borderColor} ${frameColor} border-14 rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl ring-1 ring-gold-500/20`}>
    <div className={`w-[148px] h-[18px] ${frameColor.replace('bg-', 'bg-')} top-0 left-1/2 -translate-x-1/2 absolute rounded-b-2xl`}></div>
    <div className={`h-[46px] w-[3px] ${frameColor.replace('bg-', 'bg-')} absolute inset-s-[-17px] top-[124px] rounded-s-lg`}></div>
    <div className={`h-[46px] w-[3px] ${frameColor.replace('bg-', 'bg-')} absolute inset-s-[-17px] top-[178px] rounded-s-lg`}></div>
    <div className={`h-[64px] w-[3px] ${frameColor.replace('bg-', 'bg-')} absolute inset-e-[-17px] top-[142px] rounded-e-lg`}></div>
    <div className="rounded-4xl overflow-hidden w-full h-full bg-black">
      {children}
    </div>
  </div>
);

const StoreButtons = ({ className = "", animate = false, id = "" }: { className?: string, animate?: boolean, id?: string }) => (
  <div id={id} className={`flex flex-wrap gap-4 scroll-mt-32 ${className}`}>
    {[
      { label: 'App Store', sub: 'Download on', icon: 'apple', href: '#' },
      { label: 'Google Play', sub: 'GET IT ON', icon: 'play', href: '#' }
    ].map((store, i) => (
      <motion.a 
        key={i}
        href={store.href} 
        animate={animate ? {
          boxShadow: [
            "0 0 0px rgba(212, 175, 55, 0)",
            "0 0 20px rgba(212, 175, 55, 0.4)",
            "0 0 0px rgba(212, 175, 55, 0)"
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl transition-all group relative overflow-hidden"
      >
        <div className="text-stone-400 group-hover:text-gold-400 transition-colors">
          {store.icon === 'apple' ? (
            <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-97.3-83.8-97.7-161.9zm-46.7-164.2c27.1-34 19.1-73.5 19.1-73.5s-35.1 2.3-64.4 36.6c-27.1 31.4-19.6 70.1-19.6 70.1s35.6 2.3 64.9-33.2z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
          )}
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase font-bold tracking-widest text-stone-500 leading-none mb-1">{store.sub}</div>
          <div className="text-sm font-bold tracking-tight">{store.label}</div>
        </div>
      </motion.a>
    ))}
  </div>
);

const features = [
  {
    title: "Tadabur Al-Quran 30 Juzuk",
    desc: "Belajar memahami Al-Quran secara berperingkat yang dibimbing AI dan asatizah berpengalaman.",
    icon: <BookOpen className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Misi Khatam Al-Quran",
    desc: "Tetapkan sasaran khatam peribadi dan jejak kemajuan pembacaan Al-Quran anda hari demi hari secara berstruktur.",
    icon: <Award className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Sistem Istiqomah Rapi",
    desc: "Bukan sekadar belajar, tetapi dibimbing untuk konsisten melalui sistem amalan harian yang membantu anda kekal istiqomah.",
    icon: <Target className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Program Tasbih Digital",
    desc: "Kaunter zikir & selawat pintar berserta penyertaan komuniti untuk mencapai sasaran global 1 juta selawat sehari.",
    icon: <Circle className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Kuliah Tertutup Khas",
    desc: "Akses eksklusif kuliah TUAN GURU SYEIKH MUHD ZAINUL ASRI secara berterusan dalam satu platform mudah.",
    icon: <Video className="w-8 h-8 text-gold-400" />
  },
  {
    title: "Ganjaran Pahala",
    desc: "Jejak dan lihat anggaran ganjaran pahala terkumpul yang dikira secara automatik berdasarkan setiap huruf Al-Quran yang dibaca.",
    icon: <Star className="w-8 h-8 text-gold-400" />
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
    title: "Khidmat Tahnik",
    desc: "Tempahan slot sesi tahnik barakah untuk bayi baru lahir, dijalankan mengikut sunnah dan bimbingan asatizah bertauliah.",
    icon: <Baby className="w-8 h-8 text-gold-400" />
  },
  {
    title: "DarSA Marketplace",
    desc: "Akses pembelian kitab secara digital dan fizikal untuk memperkukuhkan perjalanan ilmu anda.",
    icon: <ShoppingCart className="w-8 h-8 text-gold-400" />
  },
];

const products = [
  {
    name: "DarSA Founder Elite (Lifetime Access)",
    price: "199",
    img: Product1,
    desc: "💎 Akses Lifetime: Tadabbur AI, Kuliah Agama & Komuniti Eksklusif.\n🔓 Akses Penuh: Kiblat, Target Khatam, Ganjaran Pahala & Kuliah."
  },
  {
    name: "Darsa Bamboo NFC Digital Business Card",
    price: "99",
    img: Product3,
    desc: "🌿 Kad perniagaan digital NFC daripada buluh lestari.\n⚡ Kongsi profil & media sosial dengan sekali sentuh (No App Required)."
  },
  {
    name: "40 Wasiat Penghulu Seluruh Umat",
    price: "35",
    img: Kitab1,
    desc: "📚 Kitab karangan TUAN GURU SYEIKH MUHD ZAINUL ASRI.\n✨ Himpunan wasiat berharga untuk panduan hidup ummah."
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

  const isMarketplace = f.title === "DarSA Marketplace";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex-none h-auto flex flex-col"
      style={{ perspective: 1000 }}
    >
      {isMarketplace && (
        <div className="absolute -inset-2 bg-linear-to-r from-emerald-500/20 via-gold-500/25 to-emerald-500/20 rounded-[34px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse pointer-events-none z-0" />
      )}
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

const GoldenConstellation = () => {
  useEffect(() => {
    const canvas = document.getElementById('constellation-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 60;
    let mouse = { x: 0, y: 0, radius: 150 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * -0.5 - 0.1; // Drift upwards
        this.color = `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= forceDirectionX * force * 2;
          this.y -= forceDirectionY * force * 2;
        }

        if (this.y < 0) this.y = canvas.height;
        if (this.x < 0 || this.x > canvas.width) this.x = Math.random() * canvas.width;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas id="constellation-canvas" className="absolute inset-0 z-10" />;
};

const RoadTourProgressLine = ({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start center", "end center"]
  });

  if (desktop) {
    return (
      <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-gold-500/0 via-gold-500 to-gold-500/0 -translate-x-1/2 origin-top z-0" 
      />
    );
  }

  if (mobile) {
    return (
      <>
        {/* Background line for mobile */}
        <div className="md:hidden absolute left-[-2px] top-0 bottom-0 w-0.5 bg-white/10" />
        {/* Active growing line for mobile */}
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="md:hidden absolute left-[-2px] top-0 bottom-0 w-0.5 bg-gold-500 origin-top z-0" 
        />
      </>
    );
  }

  return null;
};

const RoadTourItem = ({ tour, index }: { tour: any, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center justify-between group pl-8 md:pl-0 perspective-1000">
      {/* Timeline Dot */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-[-5px] md:left-1/2 top-8 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-stone-900 shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 transition-transform group-hover:scale-150" 
      />

      {/* Card Container with Scroll-Linked Parallax Tilt */}
      <motion.div 
        style={{ rotateX, opacity, scale }}
        className={`md:w-[45%] w-full mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'}`}
      >
        <div className="glass-card p-8 rounded-[32px] border-white/5 hover:border-gold-500/30 transition-all hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] relative overflow-hidden text-left">
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold-500/10 blur-[50px] rounded-full pointer-events-none" />
          
          <div className="text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
            <Target size={14} />
            <span>Road Tour 0{index + 1}</span>
          </div>
          
          <h4 className="text-2xl font-serif mb-2 text-white">{tour.location}</h4>
          <p className="text-emerald-400 text-xs uppercase tracking-widest font-bold mb-6">{tour.title}</p>
          
          <div className="flex flex-col gap-4 text-stone-400 text-sm mb-8">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 text-gold-500 mt-1" />
              <span>{tour.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={18} className="shrink-0 text-gold-500" />
              <span>{tour.date} {tour.day && `(${tour.day})`}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="shrink-0 text-gold-500" />
              <span>{tour.time}</span>
            </div>
          </div>

          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${tour.mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            <Navigation size={14} />
            Buka Maps
          </a>
        </div>
      </motion.div>
      
      {/* Right Side Empty Spacer */}
      <div className="md:w-[45%] hidden md:block" />
    </div>
  );
};

const wisdomList = [
  {
    category: "Artikel",
    title: "Kepentingan Membina Jiwa Istiqomah",
    arabic: "",
    translation: "Artikel penuh di App DarSA membahaskan bagaimana membina disiplin diri melalui amalan kecil harian yang konsisten.",
    source: "Rujukan: Artikel Utama Mingguan"
  },
  {
    category: "Video",
    title: "Tadabur Ayat-Ayat Pilihan Bersama Syeikh",
    arabic: "",
    translation: "Tonton rakaman eksklusif kuliah interaktif tadabur Al-Quran di dalam App DarSA secara penuh tanpa gangguan iklan.",
    source: "Rujukan: Video Siri Kuliah Istiqomah"
  },
  {
    category: "Motivasi",
    title: "Amalan Yang Istiqomah",
    arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    translation: "Amalan yang paling dicintai oleh Allah adalah amalan yang berterusan (istiqomah), walaupun ia sedikit.",
    source: "Hadith Riwayat Al-Bukhari & Muslim"
  },
  {
    category: "Tips Al-Quran",
    title: "Kelebihan Membaca Al-Quran",
    arabic: "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ",
    translation: "Bacalah Al-Quran, kerana sesungguhnya ia akan datang pada hari kiamat sebagai syafaat kepada pembacanya.",
    source: "Hadith Riwayat Muslim"
  },
  {
    category: "Tazkirah",
    title: "Keberkatan Memulakan Hari",
    arabic: "اللَّهُمَّ بَارِكْ لِأُمَّتِي فِي بُكُورِهَا",
    translation: "Ya Allah, berkatilah umatku pada waktu pagi mereka. Mulakan hari anda dengan zikir dan Al-Quran untuk menjemput keberkatan sepanjang hari.",
    source: "Hadith Riwayat Abu Dawud"
  },
  {
    category: "Inspirasi Muhibbin",
    title: "Kisah Hijrah & Kekuatan Ukhuwah",
    arabic: "",
    translation: "Perkongsian kisah-kisah inspirasi dari komuniti Muhibbin DarSA dalam mencari kemanisan iman dan memulakan hijrah diri.",
    source: "Kisah Benar Komuniti DarSA"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const IDLE_TIMEOUT = 3000;

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeWisdomIndex, setActiveWisdomIndex] = useState(0);
  const [wisdomDirection, setWisdomDirection] = useState(0);

  const filteredWisdom = wisdomList.filter(item => 
    selectedCategory === 'Semua' ? true : item.category === selectedCategory
  );

  const wisdomCategories = ['Artikel', 'Video', 'Motivasi', 'Tips Al-Quran', 'Tazkirah', 'Inspirasi Muhibbin'];

  // Auto-rotate effect
  useEffect(() => {
    if (wisdomList.length <= 1) return;
    const interval = setInterval(() => {
      setWisdomDirection(1);
      if (selectedCategory === 'Semua') {
        setActiveWisdomIndex((prev) => (prev + 1) % filteredWisdom.length);
      } else {
        if (activeWisdomIndex < filteredWisdom.length - 1) {
          setActiveWisdomIndex((prev) => prev + 1);
        } else {
          const currentCatIdx = wisdomCategories.indexOf(selectedCategory);
          const nextCat = wisdomCategories[(currentCatIdx + 1) % wisdomCategories.length];
          setSelectedCategory(nextCat);
          setActiveWisdomIndex(0);
        }
      }
    }, 5000); // Auto-rotates every 5 seconds
    return () => clearInterval(interval);
  }, [selectedCategory, activeWisdomIndex, filteredWisdom.length]);

  const handleWisdomNext = () => {
    setWisdomDirection(1);
    if (selectedCategory === 'Semua') {
      setActiveWisdomIndex((prev) => (prev + 1) % filteredWisdom.length);
    } else {
      if (activeWisdomIndex < filteredWisdom.length - 1) {
        setActiveWisdomIndex((prev) => prev + 1);
      } else {
        const currentCatIdx = wisdomCategories.indexOf(selectedCategory);
        const nextCat = wisdomCategories[(currentCatIdx + 1) % wisdomCategories.length];
        setSelectedCategory(nextCat);
        setActiveWisdomIndex(0);
      }
    }
  };

  const handleWisdomPrev = () => {
    setWisdomDirection(-1);
    if (selectedCategory === 'Semua') {
      setActiveWisdomIndex((prev) => (prev - 1 + filteredWisdom.length) % filteredWisdom.length);
    } else {
      if (activeWisdomIndex > 0) {
        setActiveWisdomIndex((prev) => prev - 1);
      } else {
        const currentCatIdx = wisdomCategories.indexOf(selectedCategory);
        const prevCat = wisdomCategories[(currentCatIdx - 1 + wisdomCategories.length) % wisdomCategories.length];
        const prevCatFiltered = wisdomList.filter(item => item.category === prevCat);
        setSelectedCategory(prevCat);
        setActiveWisdomIndex(prevCatFiltered.length - 1);
      }
    }
  };

  const safeWisdomIndex = activeWisdomIndex < filteredWisdom.length ? activeWisdomIndex : 0;
  const currentWisdom = filteredWisdom[safeWisdomIndex];

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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-gold-500 selection:text-black relative">
      {/* Global Moving Nebula Background - High Contrast Layering */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <GoldenConstellation />
        <motion.div 
          animate={{ 
            x: ['-20%', '20%', '-20%'],
            y: ['-20%', '10%', '-20%'],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-emerald-500/15 blur-[100px] opacity-30"
        />
        <motion.div 
          animate={{ 
            x: ['20%', '-20%', '20%'],
            y: ['20%', '-10%', '20%'],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-full h-full bg-gold-500/10 blur-[100px] opacity-30"
        />
      </div>
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
            🔥 Founder Muhibin Terhad 5,000 sahaja – RM199 Lifetime • 📅 Pra pelancaran: 24 Mei 2026 • 📖 Tadabur Al-Quran 30 Juzuk Kini Dibuka • 🌟 Dibimbing Oleh TUAN GURU SYEIKH MUHD ZAINUL ASRI • 💳 Dapatkan Bamboo NFC DarSA Card Eksklusif • 🛒 Marketplace DarSA: Kitab & Keperluan Ibadah • 
          </span>
          <span className="text-sm font-bold tracking-widest uppercase inline-block px-4">
            🔥 Founder Muhibin Terhad 5,000 sahaja – RM199 Lifetime • 📅 Pra pelancaran: 24 Mei 2026 • 📖 Tadabur Al-Quran 30 Juzuk Kini Dibuka • 🌟 Dibimbing Oleh TUAN GURU SYEIKH MUHD ZAINUL ASRI • 💳 Dapatkan Bamboo NFC DarSA Card Eksklusif • 🛒 Marketplace DarSA: Kitab & Keperluan Ibadah • 
          </span>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl' : 'bg-white/5 backdrop-blur-md border-b border-white/5 py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="DarSA Logo" className="h-10 md:h-12 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Ciri Utama', 'Aplikasi', 'Harga', 'Iklan'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/[ &]/g, '-')}`} 
                className="text-sm font-medium tracking-widest uppercase hover:text-gold-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#muat-turun-sekarang" 
              className="bg-gold-400 text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-300 transition-all transform hover:scale-105"
            >
              Muat Turun
            </a>
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
              {['Home', 'Ciri Utama', 'Aplikasi', 'Harga', 'Iklan'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/[ &]/g, '-')}`} 
                  className="text-lg font-medium tracking-tight hover:text-gold-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#muat-turun-sekarang" 
                className="bg-gold-400 text-black w-full py-4 rounded-xl font-bold uppercase tracking-widest text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Muat Turun
              </a>
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
                Platform premium yang membantu umat Islam kekal konsisten dengan Al-Quran, waktu solat, dan bimbingan ilmu dari TUAN GURU SYEIKH MUHD ZAINUL ASRI.
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
                <PhoneMockup frameColor="bg-black" borderColor="border-black">
                  <img 
                    src={Screen1} 
                    alt="DarSA Istiqomah App" 
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay for realism */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
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
                  <div className="h-full w-full relative group">
                    <img 
                      src={Screen2} 
                      alt="Modern Interface" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                </PhoneMockup>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Pengalaman Pengguna</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Aplikasi <span className="italic">Moden & Eksklusif</span></h3>
              <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                Kami membawakan rekaan yang tenang untuk membantu anda fokus. Navigasi yang mudah membolehkan anda mengakses Al-Quran, kuliah, dan amalan harian tanpa sebarang gangguan.
              </p>
              <div className="space-y-8 mb-12">
                {[
                  { t: "Mod Gelap Premium", d: "Selesa untuk pembacaan waktu malam." },
                  { t: "Tipografi Eksklusif", d: "Font yang direka khas untuk kemudahan membaca teks Arab." },
                  { t: "Pantas & Lancar", d: "Akses lancar ke semua modul utama." }
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
              <StoreButtons id="muat-turun-sekarang" animate={true} />
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
              { label: 'Pra pelancaran', value: '24 Mei 2026' },
              { label: 'Akses Eksklusif', value: 'Lifetime' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-serif gold-text-gradient mb-2 uppercase">{stat.value}</div>
                <div className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </motion.div>
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
                  <div className="aspect-4/5 bg-stone-800 overflow-hidden rounded-[48px]">
                    <motion.img 
                      src={SyeikhProfile} 
                      alt="TUAN GURU SYEIKH MUHD ZAINUL ASRI"
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
                  Aplikasi DarSA Istiqomah merupakan inisiatif rasmi yang dipimpin dan ditauliahkan oleh <strong>TUAN GURU SYEIKH MUHD ZAINUL ASRI</strong>, Pengasas Pondok DarSA. 
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

          <div className="flex flex-wrap justify-center gap-8">
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
                "Tonton Kuliah Tertutup oleh TUAN GURU",
                "Tetapkan Target Khatam Al-Quran",
                "Lihat Pahala Bacaan Al-Quran",
                "Semak Jadual Kuliah",
                "Komuniti Muhibin Elite",
                "Sistem Amalan Berstruktur",
                "Kiblat & Tasbih Digital",
                "Akses Tanpa Had & Tanpa Iklan"
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
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://darsaistiqomahapps.orderla.my/founder-elite" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gold-gradient text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-2xl shadow-gold-500/20 text-center inline-block"
                >
                  Daftar Sekarang
                </a>
                <a 
                  href="#muat-turun-sekarang" 
                  className="border border-white/20 hover:border-gold-400/50 text-white hover:text-gold-400 px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all text-center inline-block"
                >
                  Muat Turun App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising/Partnership Section */}
      <section id="iklan" className="py-32 relative overflow-hidden bg-stone-900/5 scroll-mt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4">Peluang Kolaborasi</h2>
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">Iklankan Produk <span className="italic">Bersama Kami</span></h3>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Sertai ekosistem DarSA Istiqomah dan kembangkan perniagaan anda bersama komuniti kami yang berkembang pesat.
            </p>
          </div>

          {/* Kelebihan Platform */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { 
                t: "Khayalak Muhibbin Muslim", 
                d: "Capai komuniti Muslim yang berkualiti & relevan.",
                icon: <Target className="text-emerald-500" size={20} />
              },
              { 
                t: "Platform Berteraskan Akidah", 
                d: "Persekitaran selamat, positif & beretika Islam.",
                icon: <Heart className="text-emerald-500" size={20} />
              },
              { 
                t: "Pengguna Harian Aktif", 
                d: "Pengguna aktif setiap hari membaca Al-Quran dan amalan ibadat lain.",
                icon: <Zap className="text-emerald-500" size={20} />
              },
              { 
                t: "Musim Kemuncak", 
                d: "Permintaan tinggi terutamanya semasa Ramadan & Raya.",
                icon: <TrendingUp className="text-emerald-500" size={20} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 rounded-[32px] border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                <div className="bg-emerald-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h5 className="font-serif text-lg font-bold mb-2">{item.t}</h5>
                <p className="text-stone-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                name: "STARTER",
                price: "29",
                features: ["1 Listing Produk", "Mini Landing Page", "CTA (WhatsApp / Link)", "Akses Marketplace"]
              },
              {
                name: "GROWTH",
                price: "59",
                recommended: true,
                features: ["Semua dalam Starter", "Priority Listing", "Banner Rotation", "2 Produk Listing"]
              },
              {
                name: "PREMIUM",
                price: "129",
                features: ["Semua dalam Growth", "Banner Homepage", "5 Produk Listing", "1 Push Notification / bulan"]
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-card p-10 rounded-[48px] flex flex-col relative group transition-all duration-500 overflow-hidden hover:border-gold-400/40 ${plan.recommended ? 'border-gold-400/30 shadow-2xl shadow-gold-500/10' : 'border-white/5'}`}
              >
                <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 h-full flex flex-col">
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-black px-6 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    Recommended
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className="text-stone-500 font-bold tracking-[0.2em] text-xs mb-4">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-serif text-stone-500">RM</span>
                    <span className="text-5xl font-serif font-bold gold-text-gradient">{plan.price}</span>
                    <span className="text-stone-500 text-sm ml-1">/bulan</span>
                  </div>
                </div>

                <div className="space-y-5 mb-10 grow">
                  {plan.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-4">
                      <div className="mt-1 bg-gold-400/10 p-1 rounded-md">
                        <CheckCircle2 className="text-gold-400 w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-stone-300 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-white/5 pt-8">
                  <a 
                    href={`https://wa.me/60197537296?text=${encodeURIComponent(`Assalamu'alaikum DarSA Team, saya berminat untuk mengiklankan produk saya melalui pelan ${plan.name}. Boleh bantu saya dengan langkah seterusnya? Terima kasih.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all cursor-pointer ${plan.recommended ? 'gold-gradient text-black shadow-lg shadow-gold-500/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                      Pilih Pelan {plan.name}
                    </button>
                  </a>
                  {/* Sliding Gold Line */}
                  <div className="mt-8 h-[2px] w-0 group-hover:w-full bg-linear-to-r from-gold-400 to-transparent transition-all duration-700" />
                </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cara Ia Berfungsi - Layered Glass Bento Redesign */}
          <div className="mb-32 relative">
            <h4 className="text-center font-serif text-2xl mb-20 text-stone-300 tracking-tight font-bold">Cara Ia <span className="italic gold-text-gradient">Berfungsi</span></h4>
            
            {/* Animated Golden Path (Background Layer) */}
            <div className="absolute top-[60%] left-[10%] right-[10%] h-px hidden md:block overflow-visible z-0 pointer-events-none">
              <svg width="100%" height="2" fill="none" className="overflow-visible opacity-30">
                <motion.path 
                  d="M 0 1 L 1000 1" 
                  vectorEffect="non-scaling-stroke"
                  stroke="#d4af37" 
                  strokeWidth="2" 
                  strokeDasharray="12 12"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { 
                  n: "1", 
                  t: "User Klik Iklan", 
                  d: "Pengguna melihat iklan anda dalam DarSA Apps.",
                  icon: <MousePointerClick className="text-gold-400" size={24} />
                },
                { 
                  n: "2", 
                  t: "Landing Page Dalam App", 
                  d: "Informasi jelas tentang produk / servis anda.",
                  icon: <Layout className="text-gold-400" size={24} />
                },
                { 
                  n: "3", 
                  t: "Pilih Tindakan", 
                  d: "WhatsApp / Website / Purchase — mudah & berkesan.",
                  icon: <CheckCircle2 className="text-gold-400" size={24} />
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative glass-card p-12 rounded-[60px] border-white/5 hover:border-gold-400/30 transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Large Ghost Number Background */}
                  <span className="absolute -bottom-10 -right-4 text-[180px] font-serif font-bold text-white/3 select-none pointer-events-none group-hover:text-gold-500/5 transition-colors duration-700">
                    {step.n}
                  </span>

                  {/* Sunken Icon Well */}
                  <div className="relative mb-10">
                    <div className="w-20 h-20 bg-stone-950 rounded-full flex items-center justify-center shadow-inner-lg border border-white/5 relative z-10 group-hover:scale-110 transition-transform duration-700 group-hover:border-gold-400/20">
                      {step.icon}
                    </div>
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-gold-500/10 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="relative z-10">
                    <h6 className="font-serif text-xl font-bold mb-4 group-hover:text-gold-400 transition-colors duration-500">{step.t}</h6>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-[220px]">
                      {step.d}
                    </p>
                    {/* Sliding Gold Line */}
                    <div className="mt-8 h-[2px] w-0 group-hover:w-full bg-linear-to-r from-gold-400 to-transparent transition-all duration-700" />
                  </div>

                  {/* Step Indicator Badge */}
                  <div className="absolute top-8 left-8 w-8 h-8 bg-gold-500 text-black rounded-full flex items-center justify-center text-base font-bold shadow-lg">
                    {step.n}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Slogan & Contact with Spiritual Radiance Background */}
          <div className="relative mt-20 py-24 px-6 overflow-hidden rounded-[64px] border border-white/5 bg-stone-900/40">
            {/* Animated Emerald Aura */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial from-emerald-500/20 via-transparent to-transparent -z-10"
            />
            
            <div className="relative z-10 text-center">
              {/* Brand Logo Seal */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 flex justify-center"
              >
                <div className="relative">
                  <div className="w-32 h-32 bg-stone-950 rounded-full flex items-center justify-center border border-white/10 shadow-2xl relative z-10">
                    <img 
                      src={SplashScreen} 
                      alt="DarSA Logo" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  {/* Subtle Logo Glow */}
                  <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-3xl font-serif italic text-stone-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                "DarSA bukan sekadar platform iklan, tetapi akses kepada komuniti yang istiqomah."
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-center justify-center gap-6"
              >
                <a href="https://wa.me/60197537296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-emerald-600/10 border border-emerald-600/30 px-8 py-4 rounded-full text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all group shadow-xl shadow-emerald-500/5">
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-[10px]">WhatsApp: 019-7537296</span>
                </a>
                <a href="https://www.darsaistiqomah.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full text-stone-400 hover:bg-gold-500 hover:text-black transition-all group">
                  <Globe size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-[10px]">www.darsaistiqomah.com</span>
                </a>
              </motion.div>
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
                <div className="relative aspect-4/5 rounded-[32px] overflow-hidden mb-6 p-4">
                  <div className="w-full h-full rounded-[28px] overflow-hidden relative flex items-center justify-center">
                    <img src={p.img} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-20" />
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
                <p className="text-stone-400 text-sm">Layari DarSA Marketplace dalam aplikasi kami untuk lebih banyak pilihan.</p>
              </div>
            </div>
            <a href="#" className="border-2 border-gold-400 text-gold-400 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-400 hover:text-black transition-all">
              Buka Marketplace
            </a>
          </div>
        </div>
      </section>

      {/* Road Tour Timeline Section */}
      <section id="jelajah" className="py-32 relative bg-stone-900/40">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4"
            >
              Jelajah DarSA Istiqomah
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif tracking-tight mb-6"
            >
              Road Tour <span className="italic">Pra-Pelancaran</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 text-lg max-w-2xl mx-auto"
            >
              Temui skuad DarSA Istiqomah di lokasi berhampiran anda. Jom hadir beramai-ramai untuk melihat sendiri fungsi aplikasi premium ini.
            </motion.p>
          </div>

          <div className="relative ml-4 md:ml-0">
            {/* Center line background for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2" />
            
            {/* Growing Center line for desktop */}
            <RoadTourProgressLine desktop />

            {/* Growing Left line for mobile */}
            <RoadTourProgressLine mobile />

            <div className="space-y-4 md:space-y-12 pb-12">
              {[
                {
                  title: "Pra-Pelancaran Selangor",
                  location: "Restoran DarSA Kota Warisan",
                  address: "Arena Warisan Puteri, 1G Jalan Arena, Kota Warisan, 43900 Sepang",
                  date: "24 Mei 2026",
                  day: "Ahad",
                  time: "10:00 AM",
                  mapsQuery: "Restoran+DarSA+Kota+Warisan+Sepang"
                },
                {
                  title: "Pra-Pelancaran Selangor",
                  location: "Maahad Tahfiz Ibnu Dahlan DarSA",
                  address: "Prima Bukit Beruntung 1, Jalan Anggerik 2g, Bandar Bukit Beruntung, 48300 Rawang",
                  date: "24 Mei 2026",
                  day: "Ahad",
                  time: "02:00 PM",
                  mapsQuery: "Maahad+Tahfiz+Ibnu+Dahlan+DarSA+Bukit+Beruntung"
                },
                {
                  title: "Pra-Pelancaran Selangor",
                  location: "Masjid Al-Falah USJ 9",
                  address: "Dewan Besar Masjid Al-Falah, 36, Jalan USJ 9/5j, 47620 Subang Jaya",
                  date: "20 Jun 2026",
                  day: "Sabtu",
                  time: "10:30 AM",
                  mapsQuery: "Masjid+Al-Falah+USJ+9"
                },
                {
                  title: "Pra-Pelancaran Perak",
                  location: "Pondok Tahfiz DarSA Cawangan Ipoh",
                  address: "Ipoh, Perak",
                  date: "25 Jun 2026",
                  day: "Khamis",
                  time: "09:00 Malam",
                  mapsQuery: "Pondok+Tahfiz+DarSA+Ipoh"
                }
              ].map((tour, index) => (
                <RoadTourItem key={index} tour={tour} index={index} />
              ))}
            </div>
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
                name: "En. Samad",
                role: "Alor Setar, Kedah",
                quote: "Sebelum ini susah untuk konsisten membaca Al-Quran. Dengan DarSA, saya ada sistem yang membantu saya istiqomah setiap hari."
              },
              {
                name: "Ahmad",
                role: "Gombak, Selangor",
                quote: "Kuliah dan tadabur dalam apps ini sangat membantu saya memahami agama dengan lebih jelas dan mudah diamalkan."
              },
              {
                name: "En. Abdullah",
                role: "Alor Setar, Kedah",
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

      {/* Ilmu & Istiqomah Section */}
      <section id="ilmu-istiqomah" className="py-16 relative overflow-hidden bg-stone-900/10">
        {/* Glowing Background Auras */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[150px] rounded-full z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.4em] text-gold-500 font-bold mb-4"
            >
              Bimbingan Harian & Santapan Rohani
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif tracking-tight"
            >
              Ilmu & <span className="italic">Istiqomah</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 text-lg max-w-2xl mx-auto mt-4"
            >
              Dalami ilmu yang sahih dan suburkan amalan harian dengan kutipan hadith, dalil, serta tazkirah terpilih.
            </motion.p>
          </div>

          {/* Categories Tab Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
             {['Semua', 'Artikel', 'Video', 'Motivasi', 'Tips Al-Quran', 'Tazkirah', 'Inspirasi Muhibbin'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setActiveWisdomIndex(0); }}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  selectedCategory === cat || (selectedCategory === 'Semua' && currentWisdom && currentWisdom.category === cat)
                    ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Infinite Halo Carousel */}
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-between min-h-[480px]">
            {/* Spinning Halo Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[600px] md:h-[600px] pointer-events-none z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-2 border-dashed border-gold-500/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-emerald-500/5"
              />
            </div>

            {/* Left Nav Button */}
            <button
              onClick={handleWisdomPrev}
              disabled={wisdomList.length <= 1}
              className="absolute left-2 md:-left-16 z-20 bg-black/60 hover:bg-gold-500 hover:text-black text-gold-400 border border-white/10 p-4 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none backdrop-blur-md cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Card Window / Slot */}
            <div className="w-full flex justify-center overflow-hidden py-10 relative z-10">
              <AnimatePresence mode="wait" custom={wisdomDirection}>
                {filteredWisdom.length > 0 ? (
                  <motion.div
                    key={`${selectedCategory}-${safeWisdomIndex}`}
                    custom={wisdomDirection}
                    variants={{
                      enter: (dir: number) => ({
                        x: dir > 0 ? 100 : -100,
                        opacity: 0,
                        scale: 0.95,
                        rotateY: dir > 0 ? 15 : -15,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      },
                      exit: (dir: number) => ({
                        x: dir < 0 ? 100 : -100,
                        opacity: 0,
                        scale: 0.95,
                        rotateY: dir < 0 ? 15 : -15,
                        transition: {
                          duration: 0.3
                        }
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full max-w-2xl glass-card p-8 md:p-14 rounded-[36px] border-white/5 relative overflow-hidden flex flex-col items-center text-center shadow-2xl backdrop-blur-xl"
                  >
                    {/* Glowing highlight aura inside card */}
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold-500/10 blur-[60px] rounded-full pointer-events-none" />
                    
                    {/* Category tag */}
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ${
                      currentWisdom.category === 'Artikel' || currentWisdom.category === 'Video' || currentWisdom.category === 'Motivasi'
                        ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {currentWisdom.category}
                    </span>

                    {/* Title */}
                    <h4 className="text-xl md:text-2xl font-serif text-white mb-8">{currentWisdom.title}</h4>

                    {/* Arabic Scripture if exists */}
                    {currentWisdom.arabic && (
                      <p className="text-2xl md:text-3xl text-gold-300/90 leading-loose mb-8 tracking-wide font-normal max-w-lg leading-relaxed antialiased">
                        {currentWisdom.arabic}
                      </p>
                    )}

                    {/* Translation */}
                    <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-10 italic max-w-xl">
                      "{currentWisdom.translation}"
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-6" />

                    {/* Source */}
                    <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                      {currentWisdom.source}
                    </span>
                  </motion.div>
                ) : (
                  <div className="text-stone-500 text-center py-20">Tiada kandungan tersedia.</div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Nav Button */}
            <button
              onClick={handleWisdomNext}
              disabled={wisdomList.length <= 1}
              className="absolute right-2 md:-right-16 z-20 bg-black/60 hover:bg-gold-500 hover:text-black text-gold-400 border border-white/10 p-4 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none backdrop-blur-md cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Ecosystem / Promo Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[48px] overflow-hidden border-gold-400/20 shadow-2xl relative"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                <span className="text-gold-500 uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Kelebihan Eksklusif</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Nikmati <span className="italic gold-text-gradient">10% Diskaun</span> Seumur Hidup</h2>
                <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                  Bukan sekadar santapan rohani, DarSA Istiqomah App turut memberikan manfaat duniawi. Tunjukkan aplikasi anda di mana-mana cawangan DarSA Fried Chicken untuk menikmati potongan harga eksklusif setiap hari.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 border-l-2 border-gold-500/40 pl-6 py-1">
                    <span className="font-serif text-xl italic text-stone-300">Lebih Jimat & Lebih Berkat</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[400px]">
                <img 
                  src={FriedChickenPromo} 
                  alt="DarSA Fried Chicken Promo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </motion.div>
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
              { q: "Bila saya boleh mula menggunakan apps?", a: "Akses penuh akan dibuka pada pra pelancaran pada 24 Mei 2026. Pengguna yang mendaftar awal akan mendapat akses sebaik sahaja sistem diaktifkan." },
              { q: "Adakah bayaran boleh dibuat secara ansuran?", a: "Ya, kemudahan bayaran 4 kali disediakan untuk pakej Founder. Walau bagaimanapun, bayaran perlu diselesaikan sepenuhnya sebelum pelancaran untuk mengaktifkan akses." },
              { q: "Apa yang saya akan dapat dalam DarSA?", a: "Anda akan mendapat akses kepada tadabur Al-Quran 30 juzuk, kuliah agama, sistem amalan harian, semak pahala bacaan Al Quran serta pelbagai fungsi sokongan seperti waktu solat dan arah kiblat." },
              { q: "Adakah kandungan dalam apps ini sahih?", a: "Semua kandungan dipantau dan dibimbing oleh TUAN GURU SYEIKH MUHD ZAINUL ASRI Hj. Mohd Romli bagi memastikan kesahihan dan kefahaman yang tepat." },
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
              <h5 className="font-serif text-xl mb-8 gold-text-gradient font-bold uppercase tracking-widest">Pautan Pantas</h5>
              <ul className="space-y-4 text-stone-500">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Ciri Utama', href: '#ciri-utama' },
                  { name: 'Aplikasi', href: '#kuliah---ilmu' },
                  { name: 'Founder Elite', href: '#harga' },
                  { name: 'Iklan Bersama Kami', href: '#iklan' },
                  { name: 'Produk Eksklusif', href: '#produk-eksklusif' },
                  { name: 'Soalan Lazim', href: '#soalan-lazim' },
                  { name: 'Peluang Kerjaya', href: '#' },
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
              <h5 className="font-serif text-xl mb-8 gold-text-gradient font-bold uppercase tracking-widest">Hubungi Kami</h5>
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
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Pondok+DarSA%2C+Kampung+Baharu+Pokok+Machang%2C+06300+Kuala+Nerang" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed hover:text-gold-400 transition-colors"
                    >
                      Pondok DarSA, Kampung Baharu Pokok Machang, 06300 Kuala Nerang
                    </a>
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
            <div className="glass-card bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full p-1.5 px-3 flex items-center justify-center gap-1 sm:gap-2 shadow-2xl">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[
                  { label: 'Home', href: '#home', icon: Home },
                  { label: 'Ciri Utama', href: '#ciri-utama', icon: Target },
                  { label: 'Aplikasi', href: '#kuliah---ilmu', icon: Video },
                  { label: 'Harga', href: '#harga', icon: ShoppingCart },
                  { label: 'Iklan', href: '#iklan', icon: Zap },
                ].map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    className="flex flex-col items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-stone-400 hover:text-gold-400 transition-colors p-1.5 sm:p-2 px-3 sm:px-4 text-center whitespace-nowrap"
                  >
                    <item.icon size={18} className="sm:w-5 sm:h-5" />
                    <span className="hidden sm:block">{item.label}</span>
                  </a>
                ))}
              </div>
              <a 
                href="#muat-turun-sekarang"
                className="bg-gold-400 text-black px-5 sm:px-8 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-gold-300 transition-all shadow-lg shadow-gold-500/20 whitespace-nowrap"
              >
                Muat Turun
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
