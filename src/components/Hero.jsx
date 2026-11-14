import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowDown, RotateCcw, Volume2, ShoppingBag } from 'lucide-react';

export default function Hero({ onExploreProduct, onSprayDemo }) {
  const [sprayed, setSprayed] = useState(false);
  const containerRef = useRef(null);

  // Mouse tilt effect for 3D showcase
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['30%', '70%']), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['30%', '70%']), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden section-border"
      style={{ perspective: 1200 }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[160px]" />
        {/* Floating golden particles */}
        <div className="absolute inset-0 bg-[radial-gradient(#D6A83F_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Brand & Headlines */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 self-start"
          >
            <Sparkles size={14} className="text-gold animate-spin-slow" />
            MAVERICKS PRESENTS
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight leading-[0.95] text-text-primary mb-6"
          >
            YOUR PAST.<br />
            <span className="italic font-normal text-gold drop-shadow-[0_0_35px_rgba(214,168,63,0.3)]">
              YOUR RULES.
            </span>
          </motion.h1>

          {/* Subheading / Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary max-w-xl font-light leading-relaxed mb-8"
          >
            Meet <strong className="text-text-primary font-medium">Recall Killer™</strong>. A fictional fragrance concept designed to represent a fresh start, a lighter mind, and freedom from unnecessary memories.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a 
              href="#story" 
              className="btn-primary group"
            >
              <span>EXPLORE THE EXPERIENCE</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#product" 
              onClick={onExploreProduct}
              className="btn-outline group"
            >
              <ShoppingBag size={16} />
              <span>DISCOVER PRODUCT</span>
            </a>
          </motion.div>

          {/* Interactive Spray It / Undo Demo Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-5 rounded-2xl max-w-lg border border-gold/25 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold tracking-[0.15em] text-gold uppercase">
                Interactive Memory Sandbox
              </span>
              <span className="text-xs text-text-secondary/70">Concept Demo</span>
            </div>

            {/* Memory Text display */}
            <div className="relative min-h-[64px] flex items-center p-3 rounded-lg bg-bg/80 border border-gold/15 overflow-hidden my-2">
              <p className={`text-sm sm:text-base font-medium transition-opacity duration-300 ${sprayed ? 'opacity-0' : 'opacity-100 text-text-primary'}`}>
                "I called my teacher 'mom' in front of the whole class..."
              </p>
              
              {/* Wipe overlay */}
              <div 
                className={`absolute inset-0 bg-gold/90 transition-all duration-700 ease-in-out flex items-center justify-center ${sprayed ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                <div className="text-bg font-serif italic font-bold text-lg flex items-center gap-2">
                  <Sparkles size={18} />
                  <span>Memory not found.</span>
                </div>
              </div>
            </div>

            {/* Spray / Undo Controls */}
            <div className="flex items-center gap-3 mt-3">
              <button
                type="button"
                onClick={() => { setSprayed(true); if (onSprayDemo) onSprayDemo(); }}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  sprayed 
                    ? 'bg-gold/20 text-gold border border-gold/40' 
                    : 'bg-gold text-bg hover:bg-gold-light shadow-[0_0_20px_rgba(214,168,63,0.3)]'
                }`}
              >
                <span>Spray it</span>
                <span className="text-sm">💨</span>
              </button>
              <button
                type="button"
                onClick={() => setSprayed(false)}
                className="py-2 px-4 rounded-lg font-semibold text-xs tracking-wider uppercase border border-gold/30 text-text-secondary hover:text-text-primary hover:border-gold transition-colors flex items-center gap-1.5"
              >
                <RotateCcw size={13} />
                <span>Undo</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Right Column: 3D Floating Product Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          {/* Subtle Circular Radial Glow behind the bottle */}
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] h-[420px] rounded-full border border-gold/20 bg-gradient-to-tr from-gold/10 via-transparent to-gold/5 blur-xl pointer-events-none animate-glow-pulse" />
          
          {/* Concentric rotating gold orbit rings */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-gold/15 border-dashed pointer-events-none animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[460px] h-[460px] rounded-full border border-gold/10 pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />

          {/* Interactive 3D Card / Can display */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative z-20 flex flex-col items-center justify-center p-6 cursor-grab active:cursor-grabbing"
          >
            {/* The Actual Product Bottle with Floating Animation */}
            <motion.div
              animate={{ 
                y: [0, -18, 0],
                rotateZ: [0, 1.5, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative group"
            >
              {/* Bottle Shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/80 rounded-full blur-md" />
              
              {/* Floating Can Image */}
              <img 
                src="/images/product-front.jpg" 
                alt="Recall Killer 100ml spray bottle"
                className="w-[260px] sm:w-[320px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(214,168,63,0.25)] rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating feature pills on 3D depth */}
              <motion.div 
                style={{ translateZ: 50 }}
                className="absolute top-12 -left-6 sm:-left-10 bg-bg-card/90 backdrop-blur-md border border-gold/40 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-gold shadow-lg flex items-center gap-1.5"
              >
                <span>🧠</span>
                <span>Selective Recall</span>
              </motion.div>

              <motion.div 
                style={{ translateZ: 40 }}
                className="absolute bottom-20 -right-6 sm:-right-8 bg-bg-card/90 backdrop-blur-md border border-gold/40 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-text-primary shadow-lg flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span>100 ml Aerosol</span>
              </motion.div>
            </motion.div>

            {/* Spec Tag */}
            <div className="mt-8 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
                Model RK-404 · 100 ML
              </p>
              <p className="text-[11px] text-text-secondary mt-1">
                Drag or hover to rotate in 3D space
              </p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#product-intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-gold transition-colors duration-300"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ArrowDown size={14} className="animate-bounce text-gold" />
      </a>
    </section>
  );
}
