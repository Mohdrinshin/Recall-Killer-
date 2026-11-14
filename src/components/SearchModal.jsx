import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, Tag, Users, HelpCircle } from 'lucide-react';
import { PRODUCTS, MODES, TEAM, FAQS } from '../data/productData';

export default function SearchModal({ isOpen, onClose, onSelectMode, onSelectProduct }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { products: [], modes: [], team: [], faqs: [] };

    return {
      products: PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)),
      modes: MODES.filter(m => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)),
      team: TEAM.filter(t => t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q)),
      faqs: FAQS.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)),
    };
  }, [query]);

  const hasResults = query.trim() && (
    results.products.length > 0 || 
    results.modes.length > 0 || 
    results.team.length > 0 || 
    results.faqs.length > 0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full max-w-2xl bg-bg border border-gold/30 rounded-3xl p-6 shadow-2xl overflow-hidden"
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-gold/20 pb-4 mb-4">
          <Search size={20} className="text-gold mr-3 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search editions, memory modes, team or FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-text-primary focus:outline-none placeholder:text-text-secondary/50"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-text-secondary hover:text-gold transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-text-secondary space-y-2">
              <p>Type to search across the entire MAVERICKS ecosystem.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Ex-It Mode', 'Ultimate Edition', 'Amna', 'FORGET10', 'Refund'].map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] hover:bg-gold/20"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : !hasResults ? (
            <div className="py-12 text-center text-xs text-text-secondary">
              No matching records found for "{query}".
            </div>
          ) : (
            <>
              {/* Product Matches */}
              {results.products.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2 block">
                    Product Editions
                  </span>
                  <div className="space-y-1.5">
                    {results.products.map(p => (
                      <a
                        key={p.id}
                        href="#product"
                        onClick={onClose}
                        className="p-2.5 rounded-xl glass-card border border-gold/15 flex items-center justify-between text-xs hover:border-gold/40 transition-colors block"
                      >
                        <div>
                          <strong className="text-text-primary block">{p.name}</strong>
                          <span className="text-text-secondary">{p.tag}</span>
                        </div>
                        <span className="font-serif font-bold text-gold">₹{p.price}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Mode Matches */}
              {results.modes.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2 block">
                    Memory Modes
                  </span>
                  <div className="space-y-1.5">
                    {results.modes.map(m => (
                      <a
                        key={m.id}
                        href="#modes"
                        onClick={onClose}
                        className="p-2.5 rounded-xl glass-card border border-gold/15 flex items-center justify-between text-xs hover:border-gold/40 transition-colors block"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{m.icon}</span>
                          <div>
                            <strong className="text-text-primary block">{m.name}</strong>
                            <span className="text-text-secondary">{m.description}</span>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-gold" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Matches */}
              {results.team.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2 block">
                    MAVERICKS Team
                  </span>
                  <div className="space-y-1.5">
                    {results.team.map(t => (
                      <a
                        key={t.name}
                        href="#team"
                        onClick={onClose}
                        className="p-2.5 rounded-xl glass-card border border-gold/15 flex items-center justify-between text-xs hover:border-gold/40 transition-colors block"
                      >
                        <strong className="text-text-primary">{t.name}</strong>
                        <span className="text-gold text-[11px]">{t.role}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Matches */}
              {results.faqs.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2 block">
                    Frequently Asked Questions
                  </span>
                  <div className="space-y-1.5">
                    {results.faqs.map((f, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl glass-card border border-gold/15 text-xs"
                      >
                        <strong className="text-text-primary block mb-1">{f.q}</strong>
                        <span className="text-text-secondary">{f.a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
