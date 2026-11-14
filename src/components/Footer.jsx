import { useState } from 'react';
import { Mail, Instagram, Globe, ChevronDown, ChevronUp, AlertCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/productData';

export default function Footer({ onOpenFAQModal }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer className="bg-bg text-text-primary pt-20 pb-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* FAQ Section embedded right above main footer links */}
        <div id="faq" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-2">
              Curiosities & Inquiries
            </p>
            <h3 className="text-3xl font-serif font-bold text-text-primary">
              QUESTIONS YOU WILL <span className="font-serif italic font-normal text-gold">FORGET ASKING</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-xl border border-gold/20 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-text-primary hover:text-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-gold" /> : <ChevronDown size={18} className="text-gold/60" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-gold/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-gold/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-sans font-bold tracking-tight text-text-primary">
                RECALL
              </span>
              <span className="text-2xl font-serif italic font-bold text-gold">Killer</span>
              <span className="text-gold text-xs align-super">™</span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold">
              A Concept by MAVERICKS
            </p>
            <p className="text-xs text-text-secondary max-w-sm leading-relaxed">
              Fictional memory-erasing perfume spray engineered for university creative showcase and entertainment. Spray it. Forget it.
            </p>
            
            {/* Contact details */}
            <div className="pt-2 space-y-2 text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                <a href="mailto:Recallkills@gmail.com" className="hover:text-gold transition-colors">Recallkills@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={14} className="text-gold" />
                <span className="hover:text-gold transition-colors">@Recall_kills</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-gold" />
                <span className="hover:text-gold transition-colors">www.recallkills.com</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Navigation</p>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#product" className="hover:text-gold transition-colors">Product Details</a></li>
              <li><a href="#story" className="hover:text-gold transition-colors">The Philosophy</a></li>
              <li><a href="#modes" className="hover:text-gold transition-colors">Memory Modes</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#team" className="hover:text-gold transition-colors">MAVERICKS Team</a></li>
            </ul>
          </div>

          {/* Business & Legal */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Project Transparency</p>
            <div className="p-4 rounded-xl glass-card border border-gold/15 text-[11px] text-text-secondary leading-relaxed space-y-2">
              <p>
                <strong>Academic Prototype:</strong> Developed for competitive college project presentation. No real transactions or memory manipulation take place.
              </p>
              <p>
                <strong>LocalStorage State:</strong> Your shopping bag, orders, and memory modes reside strictly within your current browser session.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary/70">
          <p>© 2026 MAVERICKS. All Rights Reserved. Model RK-404.</p>
          <p className="font-serif italic text-gold/80">"Remember what matters. Forget what doesn't."</p>
        </div>

      </div>
    </footer>
  );
}
