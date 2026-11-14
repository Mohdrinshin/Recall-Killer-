import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Zap, Sparkles } from 'lucide-react';

export default function ProductIntro() {
  const specs = [
    { label: 'Model', val: 'RK-404' },
    { label: 'Category', val: 'Selective Memory Management' },
    { label: 'Brand', val: 'MAVERICKS' },
    { label: 'Volume', val: '100 ml Aerosol' },
    { label: 'Format', val: 'Directional Spray Nozzle' },
    { label: 'Packaging', val: 'Matte Aluminum & Gold Detailing' },
  ];

  return (
    <section id="product-intro" className="py-24 section-border relative overflow-hidden bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section kicker */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            01 · Product Overview
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary leading-tight">
            NOT JUST A FRAGRANCE.<br />
            <span className="font-serif italic font-normal text-gold">
              A DIFFERENT KIND OF EXPERIENCE.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Recall Killer is a fictional memory-erasing perfume built on an imaginary selective memory-management technology. The concept explores the universal human desire to leave unnecessary memories behind while keeping the valuable lessons learned.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Product Story & Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-gold" />
                <span>The Story of RK-404</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Inspired by awkward social gaffes, heartbreaking farewells, and unforgettable exam blanks, MAVERICKS engineered RK-404 as the ultimate conceptual novelty. Designed for external application only, it presents a symbolic ritual for mental liberation.
              </p>
              
              {/* Specification Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold/15">
                {specs.map((s, i) => (
                  <div key={i} className="p-3 rounded-lg bg-bg/60 border border-gold/10">
                    <p className="text-[11px] text-gold uppercase tracking-wider font-semibold">{s.label}</p>
                    <p className="text-sm font-medium text-text-primary mt-0.5">{s.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl glass-card border border-gold/15 text-center">
                <Zap size={20} className="text-gold mx-auto mb-2" />
                <p className="text-xs font-bold text-text-primary">Instant Reset</p>
                <p className="text-[11px] text-text-secondary mt-1">2-second concept</p>
              </div>
              <div className="p-4 rounded-xl glass-card border border-gold/15 text-center">
                <ShieldCheck size={20} className="text-gold mx-auto mb-2" />
                <p className="text-xs font-bold text-text-primary">Zero Damage</p>
                <p className="text-[11px] text-text-secondary mt-1">Keeps lessons</p>
              </div>
              <div className="p-4 rounded-xl glass-card border border-gold/15 text-center">
                <Compass size={20} className="text-gold mx-auto mb-2" />
                <p className="text-xs font-bold text-text-primary">6 Modes</p>
                <p className="text-[11px] text-text-secondary mt-1">Selective recall</p>
              </div>
            </div>
          </div>

          {/* Right: Large Premium Product Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-6 border border-gold/25 group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-bg">
                <img 
                  src="/images/hero-bottle.jpg" 
                  alt="Recall Killer Premium Studio Bottle" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-bold">Studio Showcase</span>
                  <h4 className="text-xl font-serif font-bold text-text-primary mt-1">
                    Precision Engineered Aesthetic
                  </h4>
                  <p className="text-xs text-text-secondary mt-1">
                    Featuring the iconic sunglasses brain mascot and dual gold swoosh detailing.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
