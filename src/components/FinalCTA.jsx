import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';

export default function FinalCTA({ onDiscover }) {
  return (
    <section className="py-28 section-border relative overflow-hidden bg-gradient-to-b from-bg via-bg-secondary to-bg">
      
      {/* Background Volumetric Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-8">
          <Sparkles size={14} />
          <span>RECALL KILLER · MEMORY NOT FOUND</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-text-primary tracking-tight leading-[1.02] mb-6">
          REMEMBER WHAT MATTERS.<br />
          <span className="font-serif italic font-normal text-gold drop-shadow-[0_0_40px_rgba(214,168,63,0.3)]">
            FORGET WHAT DOESN'T.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto font-light leading-relaxed mb-10">
          A new way to look at the past. Give yourself the symbolic mental fresh start you deserve.
        </p>

        {/* Large Floating Can Visual */}
        <div className="my-10 flex justify-center">
          <div className="relative group cursor-pointer" onClick={onDiscover}>
            <div className="absolute -inset-4 bg-gold/20 rounded-full blur-2xl group-hover:bg-gold/30 transition-all duration-500" />
            <img 
              src="/images/product-front.jpg" 
              alt="Recall Killer Spray Can"
              className="relative w-44 sm:w-56 h-auto drop-shadow-[0_20px_50px_rgba(214,168,63,0.3)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onDiscover}
            className="btn-primary rounded-xl px-10 py-5 text-sm"
          >
            <ShoppingBag size={18} />
            <span>DISCOVER RECALL KILLER</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-sm text-gold/80 mt-8">
          Spray it... Forget it!
        </p>

      </div>
    </section>
  );
}
