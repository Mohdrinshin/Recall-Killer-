import { motion } from 'framer-motion';
import { Brain, Sparkles, Feather, AlertCircle } from 'lucide-react';

export default function ProductStory() {
  const blocks = [
    {
      num: '01',
      title: 'The Concept',
      subtitle: 'Imaginary Selective Memory Management',
      desc: 'Memory is essential to human life, but repeating unpleasant moments brings distress, overthinking and lost focus. Recall Killer imagines a future where unwanted recall can be selectively managed — giving painful memories an expiry date.',
      icon: Brain,
    },
    {
      num: '02',
      title: 'The Experience',
      subtitle: 'Symbolic Fresh-Start Ritual',
      desc: 'Applied as a light mist on the forehead, the experience serves as a psychological palate cleanser. Two sprays, three seconds, and a deliberate decision to clear mental RAM of conversations you wish you had handled differently.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'The Philosophy',
      subtitle: 'Remember what matters. Forget what doesn\'t.',
      desc: 'People don\'t want to erase their entire history — they just want to stop replaying certain moments. Our core belief: Keep the lessons from mistakes, but delete the unnecessary guilt and overthinking that follows.',
      icon: Feather,
    },
  ];

  return (
    <section id="story" className="py-24 section-border relative overflow-hidden bg-bg-secondary/60">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            03 · Product Story
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary leading-tight">
            THE SCIENCE OF FORGETTING.<br />
            <span className="font-serif italic font-normal text-gold">
              THE ART OF MOVING FORWARD.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Recall Killer is a fictional fragrance concept inspired by a simple human desire: the ability to move beyond unnecessary memories without emotional baggage.
          </p>
        </div>

        {/* Featured Philosophy Quote Banner */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="p-8 sm:p-12 rounded-3xl glass-card border border-gold/30 shadow-[0_0_50px_rgba(214,168,63,0.1)] relative overflow-hidden">
            <div className="absolute -top-12 -left-12 text-gold/10 font-serif text-9xl select-none">“</div>
            <p className="font-serif italic text-2xl sm:text-4xl text-text-primary leading-relaxed relative z-10">
              "Keep the lessons.<br className="hidden sm:inline" /> 
              <span className="text-gold font-bold">Delete the unnecessary details.</span>"
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-text-secondary mt-6">
              — The MAVERICKS Core Manifesto
            </p>
          </div>
        </div>

        {/* 3 Content Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <div 
                key={i} 
                className="glass-card p-8 rounded-2xl border border-gold/20 flex flex-col justify-between hover:border-gold/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-gold/50 group-hover:text-gold transition-colors">
                      {b.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-gold font-semibold mb-4">
                    {b.subtitle}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/15 flex items-center gap-2 text-xs text-gold font-medium">
                  <span>Explore principle</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Fictional Disclaimer from Project Brief */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-gold/5 border border-gold/25 flex items-start gap-3">
          <AlertCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
          <div className="text-xs text-text-secondary leading-relaxed">
            <strong className="text-text-primary font-semibold">Important Presentation Disclaimer: </strong>
            The memory-erasing technology, modes, and psychological effects described on this website are fictional concepts engineered strictly for university presentation and creative novelty entertainment. Recall Killer is not a pharmaceutical drug and cannot alter human biological memory or treat medical conditions.
          </div>
        </div>

      </div>
    </section>
  );
}
