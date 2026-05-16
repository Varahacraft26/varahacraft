import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Brush,
  Clapperboard,
  Code2,
  Film,
  Globe2,
  Instagram,
  Layers3,
  Mail,
  MessageCircle,
  MousePointer2,
  Palette,
  Play,
  Rocket,
  Sparkles,
  Zap,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const navItems = ['Services', 'Portfolio', 'Process', 'Contact'];

const services = [
  {
    icon: Clapperboard,
    title: '3D Ads',
    copy: 'Cinematic product stories with scroll-stopping visuals, lighting, and premium render direction.',
  },
  {
    icon: Palette,
    title: 'Branding',
    copy: 'Identity systems, color worlds, type direction, and brand assets built to feel memorable.',
  },
  {
    icon: Code2,
    title: 'Website Design',
    copy: 'High-converting websites with responsive UI, refined motion, and modern development.',
  },
  {
    icon: Film,
    title: 'Motion Graphics',
    copy: 'Launch videos, social edits, animated explainers, and UI motion for brand momentum.',
  },
  {
    icon: Boxes,
    title: 'Product Visualization',
    copy: 'Luxury-grade 3D mockups, product renders, material studies, and hero compositions.',
  },
  {
    icon: Brush,
    title: 'Social Media Graphics',
    copy: 'Premium creative systems for posts, stories, reels covers, campaigns, and announcements.',
  },
];

const featuredProjects = [
  {
    id: 'jcm',
    title: 'JCM Industries',
    type: 'Cinematic 3D Ad & Branding',
    description: 'High-fidelity 3D industrial visualization and premium brand presentation built to showcase manufacturing excellence.',
    video: '/videos/jcm-video.mp4',
    images: [
      '/images/jcm-render.jpg',
      '/images/jcm-render 1.jpg',
      '/images/jcm-render 2.jpg',
    ]
  },
  {
    id: 'woodsteel',
    title: 'WoodSteel Ply',
    type: 'Product Visualization',
    description: 'Luxury-grade 3D product renders and cinematic motion showcasing material textures and superior build quality.',
    video: '/videos/woodsteel-video.mp4',
    images: [
      '/images/woodsteel-render.jpg',
      '/images/woodsteel-render 1.jpg',
      '/images/woodsteel-render 2.jpg',
      '/images/woodsteel-render 3.jpg',
    ]
  }
];

const process = [
  ['Idea', 'We map your audience, offer, competitors, and visual direction.'],
  ['Concept', 'We build the mood, script, layout, storyboard, and creative system.'],
  ['Production', 'Design, 3D, animation, development, and iteration happen with precision.'],
  ['Delivery', 'You receive polished launch-ready assets optimized for every channel.'],
];

const reasons = [
  'Modern Creative Direction',
  'Conversion Focused Design',
  'Fast Turnaround',
  'Affordable Solutions',
  'Premium Visual Quality',
];

const WHATSAPP_URL = 'https://wa.me/9911139009?text=Hi%20VarahaCraft%2C%20I%20want%20to%20start%20a%20creative%20project.';
const CONTACT_EMAIL = 'varahacraft@zohomail.in';
const EMAIL_URL = `mailto:${CONTACT_EMAIL}`;
const INSTAGRAM_URL = 'https://instagram.com/varahacraft';
const FORMSPREE_URL = 'https://formspree.io/f/xdabqrol';
const logoUrl = '/images/logo.png';

function SectionLabel({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-copper"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_18px_rgba(255,106,0,0.9)]" />
      {children}
    </motion.div>
  );
}

function Button({
  children,
  variant = 'primary',
  href = '#contact',
  icon: Icon = ArrowRight,
  className = '',
  target,
  rel,
}) {
  const base =
    'group inline-flex min-h-12 min-w-[12rem] items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-ember/70 focus:ring-offset-2 focus:ring-offset-graphite';
  const styles =
    variant === 'primary'
      ? 'bg-white text-black shadow-[0_0_35px_rgba(255,106,0,0.28)] hover:bg-copper'
      : 'border border-white/15 bg-white/[0.05] text-white backdrop-blur-xl hover:border-ember/70 hover:bg-ember/10';

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`}>
      {children}
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function FormField({ id, label, type = 'text', placeholder, required = true }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="contact-field"
      />
    </label>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const errorData = await response.json();
        if ('errors' in errorData) {
          setStatus(errorData.errors.map(error => error.message).join(', '));
        } else {
          setStatus('error');
        }
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <AnimatePresence>
        {status === 'success' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus('')}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] p-8 shadow-[0_0_80px_rgba(255,106,0,0.15)]"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-ember/20 blur-[50px]" />
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-ember/30 bg-ember/10 text-copper">
                  <BadgeCheck className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-black text-white">Request Received</h3>
                <p className="mb-8 text-white/60">
                  Your project inquiry has been submitted successfully. We’ll contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('')}
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 text-sm font-bold text-black shadow-[0_0_35px_rgba(255,106,0,0.3)] transition duration-300 hover:bg-copper focus:outline-none focus:ring-2 focus:ring-ember/70 focus:ring-offset-2 focus:ring-offset-graphite"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-panel backdrop-blur-2xl sm:p-7 lg:p-8"
      >
        <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-ember/20 blur-[70px]" />
        <div className="relative">
          <div className="mb-8 flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">Project Inquiry</p>
              <h3 className="mt-3 text-2xl font-black text-white">Tell us what you want to build.</h3>
            </div>
            <span className="hidden rounded-full border border-ember/30 bg-ember/10 px-3 py-1.5 text-xs font-semibold text-copper sm:inline-flex">
              Formspree
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="name" label="Name" placeholder="Your name" />
            <FormField id="business_name" label="Business Name" placeholder="Company or brand" />
            <FormField id="phone_number" label="Phone Number" type="tel" placeholder="+91 00000 00000" />
            <FormField id="email" label="Email" type="email" placeholder="you@brand.com" />
          </div>
          <label htmlFor="project_requirement" className="mt-5 block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Project Requirement</span>
            <textarea
              id="project_requirement"
              name="project_requirement"
              required
              rows="5"
              placeholder="3D ad, branding, website, motion graphics, launch deadline..."
              className="contact-field resize-none"
            />
          </label>
          <input type="hidden" name="_subject" value="New VarahaCraft Project Inquiry" />
          <input type="hidden" name="_to" value={CONTACT_EMAIL} />
          <div className="mt-8 flex flex-col border-t border-white/10 pt-6">
            <div className="flex flex-col items-center gap-3 w-full sm:items-end">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex min-h-12 w-full min-w-[13.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 text-sm font-bold text-black shadow-[0_0_35px_rgba(255,106,0,0.3)] transition duration-300 hover:bg-copper focus:outline-none focus:ring-2 focus:ring-ember/70 focus:ring-offset-2 focus:ring-offset-graphite disabled:opacity-70 disabled:hover:bg-white sm:w-auto"
              >
                {status === 'loading' ? 'Sending...' : 'Submit Project Inquiry'}
                {status !== 'loading' && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
              </button>
              {status !== '' && status !== 'loading' && status !== 'success' && (
                <span className="text-xs font-semibold text-red-400">{status === 'error' ? 'Failed to send inquiry. Please try again.' : status}</span>
              )}
            </div>
          </div>
        </div>
      </motion.form>
    </>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-3 whitespace-nowrap rounded-full border border-ember/40 bg-black/70 px-4 text-sm font-bold text-white shadow-[0_0_36px_rgba(255,106,0,0.32)] backdrop-blur-2xl hover:bg-ember/15 sm:bottom-7 sm:right-7 sm:px-5"
      aria-label="Contact VarahaCraft on WhatsApp"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-ember text-black shadow-[0_0_24px_rgba(255,106,0,0.5)]">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </motion.a>
  );
}

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-6">
        <a href="#hero" className="flex items-center" aria-label="VarahaCraft Home">
          <img src={logoUrl} alt="VarahaCraft Studio Logo" className="h-10 w-auto max-w-[170px] object-contain" />
        </a>
        <div className="hidden items-center gap-7 text-sm text-white/66 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

function HeroPortraitVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotateX: 12 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="relative mx-auto mt-12 lg:mt-0 aspect-[9/16] w-full max-w-[360px] perspective-visual"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-6 rounded-[3.5rem] border border-ember/20 bg-[linear-gradient(135deg,rgba(255,106,0,0.15),rgba(255,255,255,0.03),rgba(0,0,0,0))] shadow-[0_0_100px_rgba(255,106,0,0.25)] blur-md"
      />
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.04] shadow-panel backdrop-blur-2xl p-2.5"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-inner">
          <video 
            src="/videos/jcm-video.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="h-full w-full object-cover scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,106,0,0.15),transparent_60%)] pointer-events-none" />
        </div>
      </motion.div>
      {['-top-6 -left-6', '-right-8 top-1/3', 'bottom-1/4 -left-10', '-bottom-4 -right-4'].map((position, index) => (
        <motion.span
          key={position}
          animate={{ y: [0, index % 2 ? 14 : -14, 0], opacity: [0.4, 0.8, 0.4], rotate: [0, 10, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute ${position} h-14 w-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md z-[-1]`}
        />
      ))}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-5 pt-32 pb-20 sm:pt-36 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-atmosphere absolute inset-0"
      >
        <div className="absolute left-1/2 top-24 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
        <div className="grid-lines absolute inset-0 opacity-35" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl">
          <SectionLabel>Creative Digital Studio</SectionLabel>
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Cinematic 3D Ads & Premium Branding That Make Businesses Stand Out
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            We create high-converting 3D advertisements, websites, branding, and creative visuals for modern businesses.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#portfolio" className="sm:min-w-[14rem]">View Portfolio</Button>
          </motion.div>
        </motion.div>
        
        <HeroPortraitVideo />
      </div>
      <motion.a
        href="#trust"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-white/45 md:flex"
      >
        <MousePointer2 className="h-4 w-4" />
        Scroll
      </motion.a>
    </section>
  );
}

function TrustBar() {
  const items = ['Fast Delivery', 'Premium Quality', 'Creative Solutions', 'Modern Design'];
  return (
    <section id="trust" className="border-y border-white/10 bg-white/[0.03] px-5 py-6 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="flex items-center justify-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-white/80">
            <BadgeCheck className="h-4 w-4 text-copper" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <motion.section
      id="services"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-pad px-5"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Services</SectionLabel>
        <motion.div variants={fadeUp} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Creative systems built for launches, feeds, screens, and sales.
          </h2>
          <p className="max-w-md text-white/60">
            Every service is shaped around one thing: making the brand feel expensive before the first conversation.
          </p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, copy }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel backdrop-blur-xl"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-ember/0 blur-3xl transition group-hover:bg-ember/25" />
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-ember/30 bg-ember/10 text-copper">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-white/58">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FeaturedProjects() {
  return (
    <motion.section
      id="portfolio"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="section-pad relative overflow-hidden px-5"
    >
      <div className="absolute inset-x-0 top-1/4 h-[600px] bg-ember/10 blur-[150px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Featured Projects</SectionLabel>
        <motion.h2 variants={fadeUp} className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
          Real world cinematic impact.
        </motion.h2>
        
        <div className="mt-16 flex flex-col gap-24">
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeUp} className="group/project relative">
              {/* Project Header */}
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full border border-white/12 bg-black/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-copper backdrop-blur-md">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white sm:text-5xl">{project.title}</h3>
                </div>
                <p className="max-w-md text-base leading-relaxed text-white/60 md:text-right">{project.description}</p>
              </div>

              {/* Main Video Card */}
              <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.4))] shadow-panel transition-all duration-700 hover:border-ember/40 hover:shadow-[0_0_50px_rgba(255,106,0,0.15)] group-hover/project:border-white/15">
                <div className="absolute inset-0 z-10 grid place-items-center bg-black/30 opacity-100 transition-opacity duration-500 group-hover/project:opacity-0 pointer-events-none">
                  <div className="grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-glow transition-transform duration-500 group-hover/project:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <video 
                  src={project.video} 
                  muted 
                  loop 
                  playsInline 
                  preload="none"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover/project:scale-[1.02]"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />
              </div>

              {/* Image Grid */}
              <div className={`grid gap-5 ${project.images.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
                {project.images.map((img, i) => (
                  <div key={i} className="group/img relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] shadow-panel">
                    <div className="absolute inset-0 bg-ember/30 opacity-0 transition-opacity duration-500 group-hover/img:opacity-100 z-10 pointer-events-none mix-blend-overlay" />
                    <img 
                      src={img} 
                      alt={`${project.title} - ${project.type} project showcase image ${i + 1}`} 
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Process() {
  return (
    <motion.section
      id="process"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-pad px-5"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Process</SectionLabel>
        <motion.div variants={fadeUp} className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">From raw idea to launch-ready premium visuals.</h2>
          <p className="max-w-md text-white/60">A clear production flow keeps every project sharp, fast, and easy to approve.</p>
        </motion.div>
        <div className="relative grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent lg:block" />
          {process.map(([title, copy], index) => (
            <motion.article key={title} variants={fadeUp} className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="mb-8 grid h-16 w-16 place-items-center rounded-full border border-ember/40 bg-black text-lg font-black text-copper shadow-glow">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-white/58">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function WhyChooseUs() {
  return (
    <section className="px-5 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,106,0,0.16),rgba(255,255,255,0.045),rgba(0,0,0,0.45))] p-6 shadow-panel backdrop-blur-2xl md:grid-cols-[0.95fr_1.05fr] md:p-10"
      >
        <div>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">Designed to make your brand feel premium everywhere.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-4">
              <Zap className="h-5 w-5 shrink-0 text-copper" />
              <span className="font-semibold text-white/84">{reason}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CTA() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8 }}
      className="px-5 py-20"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-black p-8 shadow-panel sm:p-12 lg:p-16">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-ember/25 blur-[110px]" />
        <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-white/10 blur-[100px]" />
        <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:items-center">
          <div className="flex max-w-4xl flex-col justify-center">
            <SectionLabel>Start The Upgrade</SectionLabel>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-6xl">Ready To Make Your Brand Look Premium?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
              Bring us your product, service, or launch idea. We will shape it into a cinematic brand experience built for attention and trust.
            </p>
            <div className="mt-10 flex w-full items-center justify-center lg:justify-start">
              <Button href="#contact" icon={Rocket} className="w-full sm:w-auto sm:min-w-[16rem]">
                Start Your Project
              </Button>
            </div>
            <div className="mt-12 grid gap-3 text-sm text-white/58 sm:grid-cols-3">
              {['24h response', 'Premium proposal', 'Launch-ready plan'].map((item) => (
                <div key={item} className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <img src={logoUrl} alt="VarahaCraft Studio Logo" className="h-14 w-auto max-w-[190px] object-contain" loading="lazy" />
          <p className="mt-2 text-sm text-white/50">Cinematic digital studio for premium modern brands.</p>
        </div>
        <div className="footer-social-row flex w-full flex-nowrap items-center gap-3 overflow-x-auto pb-1 sm:gap-4 md:w-auto md:justify-end md:overflow-visible md:pb-0">
          <a href={INSTAGRAM_URL} className="footer-link">
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
          <a href={EMAIL_URL} className="footer-link">
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </a>
        </div>
        <p className="text-sm text-white/40">Copyright 2026 VarahaCraft. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-graphite text-white">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedProjects />
      <Process />
      <WhyChooseUs />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
