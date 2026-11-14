import { motion } from 'framer-motion';
import { Layers, Sparkles, Sliders, Users, Check, X } from 'lucide-react';

export default function WhyRecallKiller() {
  const benefits = [
    {
      num: '01',
      title: 'Selective Modes',
      desc: 'Different fictional modes for different situations — from heartbreaks and exam blanks to Monday fatigue and cringe conversations.',
      icon: Sliders,
    },
    {
      num: '02',
      title: 'Futuristic Identity',
      desc: 'A distinctive premium fragrance concept with editorial typography, matte luxury aesthetic, and conversational charm.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Simple Experience',
      desc: 'An easy-to-understand two-spray concept that acts as a physical gesture of psychological closure.',
      icon: Layers,
    },
    {
      num: '04',
      title: 'Everyday Connection',
      desc: 'Inspired by raw situations everyone understands and laughs about. Designed for everyone who has ever thought: "I wish I could forget that."',
      icon: Users,
    },
  ];

  const comparisons = [
    { alt: 'Sleeping', limit: 'Temporary relief. Memories return the moment you wake up.' },
    { alt: 'Meditation', limit: 'Demands intense patience and months of continuous discipline.' },
    { alt: 'Writing Diaries', limit: 'Permanently records the pain — preserves rather than deletes.' },
    { alt: 'Ignoring Problems', limit: 'Buries anxiety without providing resolution or relief.' },
    { alt: 'Recall Killer™', limit: 'A simple, premium and humorous alternative with immediate closure.' },
  ];

  return (
    <section id="why" className="py-24 section-border relative bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            06 · Distinct Value Proposition
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary">
            NOT JUST ANOTHER PERFUME.<br />
            <span className="font-serif italic font-normal text-gold">
              A DIFFERENT CONCEPT.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Conventional perfumes only mask body odor. Recall Killer symbolically masks unnecessary psychological baggage.
          </p>
        </div>

        {/* 4 Key Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div 
                key={i}
                className="glass-card p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-gold/40">{b.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-text-primary mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted USP Panel */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-card border border-gold/30 text-center mb-16 bg-gradient-to-b from-gold/10 via-transparent to-transparent">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Exclusive Breakthrough</span>
          <p className="text-2xl sm:text-3xl font-serif italic text-text-primary font-bold mt-2 mb-2">
            "A fragrance that promises to make your past unavailable."
          </p>
          <p className="text-xs text-text-secondary">
            Our biggest competitor? <strong className="text-gold">The human brain itself.</strong>
          </p>
        </div>

        {/* Competitor Analysis Table */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-gold/25 p-6 overflow-hidden">
          <h3 className="text-xl font-serif font-bold text-text-primary mb-4 flex items-center justify-between">
            <span>Competitive Matrix</span>
            <span className="text-xs text-gold uppercase tracking-wider font-mono">Benchmark</span>
          </h3>
          <div className="divide-y divide-gold/15">
            {comparisons.map((c, idx) => {
              const isRecall = c.alt.includes('Recall');
              return (
                <div 
                  key={idx}
                  className={`py-3.5 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg transition-colors ${
                    isRecall ? 'bg-gold/10 font-medium' : 'hover:bg-bg-secondary'
                  }`}
                >
                  <span className={`text-sm font-semibold ${isRecall ? 'text-gold' : 'text-text-primary'}`}>
                    {c.alt}
                  </span>
                  <span className="text-xs text-text-secondary sm:text-right max-w-md">
                    {c.limit}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
