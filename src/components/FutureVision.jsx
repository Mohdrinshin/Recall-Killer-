import { motion } from 'framer-motion';
import { Package, Cpu, PlusCircle, Globe, Sparkles } from 'lucide-react';
import { FUTURE_VISION } from '../data/productData';

export default function FutureVision() {
  const icons = [Package, Cpu, PlusCircle, Globe];

  return (
    <section id="vision" className="py-24 section-border relative bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            09 · Roadmap & Horizon
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary">
            BUILDING A STRONGER<br />
            <span className="font-serif italic font-normal text-gold">
              RECALL KILLER.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Our strategic vision stretches into tomorrow. Discover the experimental frontiers under ongoing theoretical development by MAVERICKS.
          </p>
        </div>

        {/* Visual Timeline / Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {FUTURE_VISION.map((item, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div 
                key={item.num}
                className="glass-card p-6 rounded-2xl border border-gold/20 flex flex-col justify-between hover:border-gold/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif font-bold text-gold/40 group-hover:text-gold transition-colors">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gold/10">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-gold font-bold">
                    Phase {idx + 1} Target
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambition Statement */}
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-gold mb-2">
            The Ultimate Ambition
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-text-primary">
            "The world's most unforgettable forgetting experience."
          </p>
        </div>

      </div>
    </section>
  );
}
