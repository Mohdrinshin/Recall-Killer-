import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, wishCount, onCartOpen, onOrdersOpen, onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'Experience', href: '#story' },
    { label: 'Memory Modes', href: '#modes' },
    { label: 'About Us', href: '#team' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 group">
          <span className="text-xl font-sans font-bold tracking-tight text-text-primary">
            RECALL
          </span>
          <span className="text-xl font-serif italic font-bold text-gold">Killer</span>
          <span className="text-gold text-xs align-super">™</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 tracking-wide uppercase">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button onClick={onSearchOpen} aria-label="Search"
            className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors">
            <Search size={18} />
          </button>
          <button onClick={onOrdersOpen} aria-label="Orders"
            className="hidden sm:flex w-10 h-10 items-center justify-center text-text-secondary hover:text-gold transition-colors relative">
            <span className="text-xs tracking-wider uppercase font-medium">Orders</span>
          </button>
          <button onClick={onCartOpen} aria-label="Wishlist"
            className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors relative">
            <Heart size={18} />
            {wishCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-bg text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishCount}
              </span>
            )}
          </button>
          <button onClick={onCartOpen} aria-label="Shopping Cart"
            className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-gold transition-colors relative">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-bg text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center text-text-primary" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-bg border-l border-gold/20 z-50 flex flex-col p-8"
            >
              <button onClick={() => setMobileOpen(false)} className="self-end mb-8 text-text-primary" aria-label="Close menu">
                <X size={24} />
              </button>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-serif text-text-primary hover:text-gold py-3 border-b border-gold/10 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-auto flex gap-4">
                <button onClick={() => { onOrdersOpen(); setMobileOpen(false); }}
                  className="btn-outline flex-1 justify-center text-xs">Orders</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
