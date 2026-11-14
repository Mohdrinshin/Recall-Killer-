import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Check, Zap, Sparkles, ZoomIn } from 'lucide-react';
import { PRODUCTS, MODES } from '../data/productData';

export default function ProductShopping({ 
  onAddToCart, 
  onBuyNow, 
  wishList, 
  onToggleWish, 
  currentMode, 
  onSelectMode 
}) {
  const [selectedEdition, setSelectedEdition] = useState('pro'); // default to Pro
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    { src: '/images/product-front.jpg', label: 'Front View' },
    { src: '/images/product-all-views.jpg', label: 'All 360° Angles' },
    { src: '/images/hero-bottle.jpg', label: 'Cinematic Studio' },
  ];

  const currentProduct = PRODUCTS.find(p => p.id === selectedEdition) || PRODUCTS[1];
  const isWished = wishList.includes(currentProduct.id);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(currentProduct.id);
    }
  };

  const handleBuy = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(currentProduct.id);
    }
    if (onBuyNow) onBuyNow();
  };

  return (
    <section id="product" className="py-24 section-border relative bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            02 · Shop Experience
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary">
            CHOOSE YOUR FORMULA.<br />
            <span className="font-serif italic font-normal text-gold">
              TAKE BACK YOUR MIND.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-sm sm:text-base">
            Select your preferred edition, pair it with one of our six selective memory modes, and take advantage of our launch promotion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Column (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Interactive Image View */}
            <div 
              className="relative aspect-square rounded-2xl overflow-hidden glass-card border border-gold/25 p-4 flex items-center justify-center cursor-crosshair group"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img 
                src={images[activeImage].src} 
                alt={images[activeImage].label}
                className={`max-h-[90%] max-w-[90%] object-contain transition-transform duration-500 ${isZoomed ? 'scale-150' : 'group-hover:scale-105'}`}
              />

              {/* Zoom hint pill */}
              <div className="absolute top-4 right-4 bg-bg/80 backdrop-blur-md border border-gold/30 px-3 py-1 rounded-full text-[11px] text-text-secondary flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={13} className="text-gold" />
                <span>{isZoomed ? 'Click to minimize' : 'Click to zoom'}</span>
              </div>

              {/* View label */}
              <div className="absolute bottom-4 left-4 bg-bg/90 border border-gold/20 px-3 py-1 rounded-md text-xs font-semibold text-gold">
                {images[activeImage].label}
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-3 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => { setActiveImage(idx); setIsZoomed(false); }}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border p-2 bg-bg-card transition-all ${
                    activeImage === idx 
                      ? 'border-gold shadow-[0_0_15px_rgba(214,168,63,0.3)] ring-1 ring-gold' 
                      : 'border-gold/20 opacity-60 hover:opacity-100 hover:border-gold/40'
                  }`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-contain" />
                  <span className="absolute bottom-1 right-2 text-[10px] text-text-secondary font-medium">
                    {img.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Packaging Highlights from brief */}
            <div className="p-5 rounded-xl glass-card border border-gold/15 mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 flex items-center gap-2">
                <Sparkles size={14} /> Product Details & Packaging
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
                <li className="flex items-center gap-1.5"><Check size={13} className="text-gold" /> 100 ml Aerosol Can</li>
                <li className="flex items-center gap-1.5"><Check size={13} className="text-gold" /> Directional Forehead Nozzle</li>
                <li className="flex items-center gap-1.5"><Check size={13} className="text-gold" /> Transparent Safety Cap</li>
                <li className="flex items-center gap-1.5"><Check size={13} className="text-gold" /> Pure Novelty Entertainment</li>
              </ul>
            </div>
          </div>

          {/* Product Purchase Column (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header / Title */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">
                  MAVERICKS · CONCEPT RK-404
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gold/10 text-gold border border-gold/30">
                  Free Shipping ₹1,999+
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mt-2">
                Recall Killer™ Spray
              </h1>
              <p className="text-sm font-serif italic text-gold mt-1">
                "Spray it... Forget it!"
              </p>
            </div>

            {/* Live Mode Selection Attached to Cart Line */}
            <div className="p-4 rounded-xl bg-bg-card border border-gold/25">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                  Active Memory Mode:
                </span>
                <span className="text-xs text-gold font-semibold">
                  {MODES[currentMode]?.name}
                </span>
              </div>
              <p className="text-xs text-text-secondary mb-3">
                {MODES[currentMode]?.description}
              </p>
              
              {/* Quick mode switcher pills */}
              <div className="flex flex-wrap gap-1.5">
                {MODES.map((m, idx) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onSelectMode(idx)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      currentMode === idx 
                        ? 'bg-gold text-bg font-bold' 
                        : 'bg-bg text-text-secondary border border-gold/20 hover:border-gold hover:text-text-primary'
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Edition Selector Cards */}
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">
                Select Edition:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRODUCTS.map(p => {
                  const active = p.id === selectedEdition;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedEdition(p.id)}
                      className={`relative p-4 rounded-xl cursor-pointer transition-all border ${
                        active 
                          ? 'border-gold bg-gold/10 shadow-[0_0_20px_rgba(214,168,63,0.2)]' 
                          : 'border-gold/15 bg-bg-card hover:border-gold/40'
                      }`}
                    >
                      {p.flag && (
                        <span className="absolute -top-2.5 right-3 bg-gold text-bg text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {p.flag}
                        </span>
                      )}
                      <p className="text-xs font-bold text-text-primary">{p.name}</p>
                      <p className="text-lg font-bold text-gold mt-1">₹{p.price.toLocaleString('en-IN')}</p>
                      <p className="text-[11px] text-text-secondary mt-1 leading-snug">{p.tag}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Edition Description */}
            <div className="p-4 rounded-lg bg-bg/50 border border-gold/15 text-xs text-text-secondary leading-relaxed">
              <strong className="text-text-primary block mb-1">{currentProduct.name} Details:</strong>
              {currentProduct.description}
            </div>

            {/* Pricing, Quantity & Action Buttons */}
            <div className="pt-4 border-t border-gold/15 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-text-secondary block">Total Unit Price</span>
                  <span className="text-3xl font-serif font-bold text-gold">
                    ₹{currentProduct.price.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center border border-gold/30 rounded-lg overflow-hidden bg-bg-card">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-text-primary hover:bg-gold/20 font-bold transition-colors"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-sm font-semibold text-text-primary">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-text-primary hover:bg-gold/20 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="sm:col-span-6 btn-primary justify-center rounded-xl"
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  type="button"
                  onClick={handleBuy}
                  className="sm:col-span-4 btn-outline justify-center rounded-xl text-text-primary border-gold/40 hover:bg-gold hover:text-bg"
                >
                  <Zap size={18} />
                  <span>Buy Now</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleWish(currentProduct.id)}
                  aria-label="Wishlist"
                  className={`sm:col-span-2 h-full py-3 sm:py-0 rounded-xl border flex items-center justify-center transition-colors ${
                    isWished 
                      ? 'border-gold bg-gold/20 text-gold' 
                      : 'border-gold/30 text-text-secondary hover:text-gold hover:border-gold'
                  }`}
                >
                  <Heart size={20} className={isWished ? 'fill-gold' : ''} />
                </button>
              </div>

              {/* Security & Promo badges */}
              <div className="flex items-center justify-between text-[11px] text-text-secondary pt-2">
                <span>🔐 Fake demo checkout</span>
                <span>🏷️ Use code <strong className="text-gold">FORGET10</strong></span>
                <span>⚡ Instant dispatch</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
