import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import { TEAM } from '../data/productData';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 section-border relative bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            07 · About MAVERICKS
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary">
            THE MINDS BEHIND<br />
            <span className="font-serif italic font-normal text-gold">
              THE MADNESS.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            MAVERICKS is the creative team behind Recall Killer, a fictional product concept built around imagination, humour, product storytelling and innovative thinking. We believe great ideas challenge ordinary conventions.
          </p>
        </div>

        {/* 10 Team Profile Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {TEAM.map((member, idx) => {
            // Generate initials
            const initials = member.name.substring(0, 2).toUpperCase();
            return (
              <div
                key={member.name}
                className="glass-card p-6 rounded-2xl border border-gold/20 flex flex-col items-center text-center hover:border-gold/60 hover:shadow-[0_0_25px_rgba(214,168,63,0.2)] transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Abstract Gold Avatar / Monogram */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold/20 via-gold/10 to-transparent border border-gold/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  <span className="font-serif italic font-bold text-lg text-gold group-hover:text-gold-light transition-colors">
                    {initials}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-serif font-bold text-text-primary group-hover:text-gold transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-[11px] font-medium text-gold/90 mt-1 uppercase tracking-wider leading-snug">
                  {member.role}
                </p>

                {/* Decorative Pill */}
                <div className="mt-4 pt-3 border-t border-gold/10 w-full text-center">
                  <span className="text-[10px] text-text-secondary/70 tracking-widest font-mono">
                    MAVERICKS
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Philosophy Callout */}
        <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl glass-card border border-gold/25">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-gold mb-1">
            CREATIVE CREED
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-text-primary font-bold">
            "ONE VISION. TEN MINDS. ONE UNFORGETTABLE IDEA."
          </p>
        </div>

      </div>
    </section>
  );
}
