import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check, Instagram, Sparkles, Hash } from 'lucide-react';

export default function BrandCampaign({ showToast }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = "Bad memories? Don't carry them. Spray them. Check out Recall Killer™ by MAVERICKS #RecallKiller404";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      if (showToast) showToast('Campaign hashtag #RecallKiller404 copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="campaign" className="py-24 section-border relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Full-width cinematic advertising visual */}
        <div className="relative rounded-3xl overflow-hidden border border-gold/30 glass-card mb-16">
          <div className="relative aspect-[21/9] min-h-[360px] w-full overflow-hidden">
            <img 
              src="/images/campaign-banner.jpg" 
              alt="Recall Killer Cinematic Campaign" 
              className="w-full h-full object-cover object-center"
            />
            {/* Dramatic overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />

            {/* In-banner copy */}
            <div className="absolute inset-0 p-8 sm:p-16 flex flex-col justify-center max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-[11px] font-bold uppercase tracking-[0.2em] mb-4 self-start">
                <Hash size={12} />
                #RecallKiller404
              </span>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-text-primary tracking-tight leading-[1.05] mb-4">
                BAD MEMORIES?<br />
                DON’T CARRY THEM.<br />
                <span className="font-serif italic font-normal text-gold">
                  SPRAY THEM.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 hidden sm:block">
                The global creative campaign challenging the human obsession with replaying past regrets. Join thousands moving forward with a lighter mind.
              </p>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleShare}
                  className="btn-primary rounded-xl text-xs py-3 px-6 flex items-center gap-2"
                >
                  {copied ? <Check size={16} /> : <Share2 size={16} />}
                  <span>{copied ? 'Campaign Copied!' : 'Share Campaign'}</span>
                </button>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Market Strategy from Brief */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-gold/15">
            <span className="text-gold font-mono text-xs font-bold uppercase">Pillar 01</span>
            <h3 className="text-lg font-serif font-bold text-text-primary mt-1 mb-2">
              Digital Reels & Challenges
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Humorous short-form videos capturing everyday cringe moments with instant "Spray it" comedic resolutions across campus and social networks.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-gold/15">
            <span className="text-gold font-mono text-xs font-bold uppercase">Pillar 02</span>
            <h3 className="text-lg font-serif font-bold text-text-primary mt-1 mb-2">
              Campus Activations
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Interactive pop-ups during college exam seasons addressing academic pressure, lost marks, and forgotten formulas through humorous solidarity.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-gold/15">
            <span className="text-gold font-mono text-xs font-bold uppercase">Pillar 03</span>
            <h3 className="text-lg font-serif font-bold text-text-primary mt-1 mb-2">
              Influencer Collaborations
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Partnering with lifestyle creators and comedians to normalize moving on from toxic dating situations and everyday public blunders.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
