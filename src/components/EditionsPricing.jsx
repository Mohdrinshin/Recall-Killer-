import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/productData';

export default function EditionsPricing({ onAddToCart, onOpenCart }) {
  const [selectedId, setSelectedId] = useState('pro');

  const handleSelectAndAdd = (id) => {
    setSelectedId(id);
    onAddToCart(id);
    if (onOpenCart) onOpenCart();
  };

  return (
    <section id="pricing" className="py-24 section-border relative bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            08 · Commercial Architecture
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary">
            AN UNUSUAL IDEA.<br />
            <span className="font-serif italic font-normal text-gold">
              A PREMIUM EXPERIENCE.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Tiered formulation strengths tailored to the gravity of your memories. Concept presentation prices — all state handled locally.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRODUCTS.map(p => {
            const isPro = p.id === 'pro';
            return (
              <div
                key={p.id}
                className={`relative rounded-3xl p-8 glass-card border flex flex-col justify-between transition-all duration-300 ${
                  isPro 
                    ? 'border-gold shadow-[0_0_40px_rgba(214,168,63,0.25)] lg:-translate-y-3 bg-gradient-to-b from-gold/10 via-bg-card to-bg-card' 
                    : 'border-gold/20 hover:border-gold/50'
                }`}
              >
                {/* Popular Flag */}
                {p.flag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-bg text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                    {p.flag}
                  </div>
                )}

                <div>
                  {/* Title & Tag */}
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                      {p.id.toUpperCase()} FORMULA
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mt-1">
                      {p.name}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      {p.tag}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gold/15">
                    <span className="text-4xl font-serif font-bold text-text-primary">
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-text-secondary ml-2 font-mono">/ 100 ml bottle</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-text-primary">
                        <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                          <Check size={11} />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleSelectAndAdd(p.id)}
                    className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isPro 
                        ? 'btn-primary' 
                        : 'btn-outline border-gold/30 hover:border-gold hover:bg-gold hover:text-bg text-text-primary'
                    }`}
                  >
                    <ShoppingBag size={16} />
                    <span>Select & Add to Cart</span>
                  </button>
                  <p className="text-[10px] text-center text-text-secondary mt-2">
                    {isPro ? 'Includes free national shipping' : 'Calculated at cart checkout'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Launch Offer & Sales Channels Banner from Project Brief */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-card border border-gold/25 p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2">
            Official Launch Offer
          </p>
          <p className="text-xl sm:text-2xl font-serif italic text-text-primary font-bold mb-4">
            "Buy one, forget what you paid for it."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-text-secondary pt-4 border-t border-gold/15">
            <span>✓ Direct Online Sales</span>
            <span>·</span>
            <span>✓ Retail Partnerships</span>
            <span>·</span>
            <span>✓ Premium Packaging</span>
            <span>·</span>
            <span>✓ Limited Editions</span>
          </div>
        </div>

      </div>
    </section>
  );
}
