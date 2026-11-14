import { useState } from 'react';
import { useStore } from './hooks/useStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductIntro from './components/ProductIntro';
import ProductShopping from './components/ProductShopping';
import ProductStory from './components/ProductStory';
import MemoryModes from './components/MemoryModes';
import HowItWorks from './components/HowItWorks';
import WhyRecallKiller from './components/WhyRecallKiller';
import BrandCampaign from './components/BrandCampaign';
import TeamSection from './components/TeamSection';
import EditionsPricing from './components/EditionsPricing';
import FutureVision from './components/FutureVision';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrdersModal from './components/OrdersModal';
import ModeDetailModal from './components/ModeDetailModal';
import SearchModal from './components/SearchModal';
import { MODES, PRODUCTS } from './data/productData';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function App() {
  const {
    cart,
    wish,
    orders,
    mode,
    coupon,
    toast,
    cartCount,
    setMode,
    addToCart,
    updateQty,
    removeItem,
    clearCart,
    toggleWish,
    applyCoupon,
    clearCoupon,
    showToast,
    placeOrder,
    clearOrders,
  } = useStore();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeModeDetail, setActiveModeDetail] = useState(null);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    const modeObj = MODES[mode];
    showToast(`${prod?.name || 'Edition'} added with ${modeObj?.name || 'Mode'}!`);
  };

  const handleSelectMode = (index) => {
    setMode(index);
    showToast(`${MODES[index]?.name} selected as active mode`);
  };

  const handleToggleWish = (productId) => {
    toggleWish(productId);
    const hasWish = wish.includes(productId);
    showToast(hasWish ? 'Removed from wishlist' : 'Saved to wishlist!');
  };

  const handleScrollToProduct = () => {
    const el = document.getElementById('product');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-gold/30 selection:text-text-primary font-sans">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-[100] px-5 py-3 rounded-full bg-bg-card/95 border border-gold/50 text-text-primary text-xs font-semibold shadow-[0_10px_30px_rgba(214,168,63,0.3)] backdrop-blur-md flex items-center gap-2"
          >
            <Sparkles size={14} className="text-gold" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Navigation */}
      <Navbar
        cartCount={cartCount}
        wishCount={wish.length}
        onCartOpen={() => setIsCartOpen(true)}
        onOrdersOpen={() => setIsOrdersOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* SECTION 02 — CINEMATIC 3D HERO */}
        <Hero 
          onExploreProduct={handleScrollToProduct} 
          onSprayDemo={() => showToast('Memory erased: "Memory not found."')}
        />

        {/* SECTION 03 — PRODUCT INTRODUCTION */}
        <ProductIntro />

        {/* SECTION 04 — PRODUCT DETAILS / SHOPPING EXPERIENCE */}
        <ProductShopping
          onAddToCart={handleAddToCart}
          onBuyNow={() => setIsCheckoutOpen(true)}
          wishList={wish}
          onToggleWish={handleToggleWish}
          currentMode={mode}
          onSelectMode={handleSelectMode}
        />

        {/* SECTION 05 — PRODUCT STORY / ABOUT THE PRODUCT */}
        <ProductStory />

        {/* SECTION 06 — SIX MEMORY MODES */}
        <MemoryModes
          currentMode={mode}
          onSelectMode={handleSelectMode}
          onOpenModeModal={(m) => setActiveModeDetail(m)}
        />

        {/* SECTION 07 — HOW IT WORKS */}
        <HowItWorks />

        {/* SECTION 08 — WHY RECALL KILLER? */}
        <WhyRecallKiller />

        {/* SECTION 09 — BRAND CAMPAIGN */}
        <BrandCampaign showToast={showToast} />

        {/* SECTION 10 — ABOUT MAVERICKS / OUR TEAM */}
        <TeamSection />

        {/* SECTION 11 — BUSINESS MODEL / EDITIONS */}
        <EditionsPricing
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* SECTION 12 — FUTURE VISION */}
        <FutureVision />

        {/* SECTION 13 — FINAL CTA */}
        <FinalCTA onDiscover={handleScrollToProduct} />
      </main>

      {/* SECTION 14 — FOOTER & FAQ */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={updateQty}
        onRemoveItem={removeItem}
        onClearCart={() => { clearCart(); showToast('Cart cleared'); }}
        coupon={coupon}
        onApplyCoupon={applyCoupon}
        onClearCoupon={() => { clearCoupon(); showToast('Coupon removed'); }}
        onProceedCheckout={() => setIsCheckoutOpen(true)}
        showToast={showToast}
      />

      {/* Mock Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        coupon={coupon}
        onPlaceOrder={placeOrder}
        onOrderSuccess={() => showToast('Order placed successfully!')}
      />

      {/* Orders History Modal */}
      <OrdersModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
        orders={orders}
        onClearOrders={() => { clearOrders(); showToast('Orders cleared'); }}
      />

      {/* Memory Mode Detail Inspection Modal */}
      <ModeDetailModal
        mode={activeModeDetail}
        isOpen={!!activeModeDetail}
        onClose={() => setActiveModeDetail(null)}
        isSelected={activeModeDetail ? MODES.findIndex(m => m.id === activeModeDetail.id) === mode : false}
        onSelect={() => {
          if (activeModeDetail) {
            const idx = MODES.findIndex(m => m.id === activeModeDetail.id);
            if (idx >= 0) handleSelectMode(idx);
          }
        }}
      />

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectMode={(idx) => { handleSelectMode(idx); setIsSearchOpen(false); }}
        onSelectProduct={(pId) => { handleAddToCart(pId); setIsSearchOpen(false); }}
      />

    </div>
  );
}
