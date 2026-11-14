import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { PRODUCTS, MODES, COUPONS } from '../data/productData';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  coupon,
  onApplyCoupon,
  onClearCoupon,
  onProceedCheckout,
  showToast,
}) {
  const [couponInput, setCouponInput] = useState('');

  const prodMap = useMemo(() => {
    const map = {};
    PRODUCTS.forEach(p => { map[p.id] = p; });
    return map;
  }, []);

  const { subtotal, discount, shipping, total } = useMemo(() => {
    const sub = cart.reduce((acc, item) => {
      const p = prodMap[item.id] || PRODUCTS[0];
      return acc + p.price * item.q;
    }, 0);

    const discPercent = COUPONS[coupon] || 0;
    const disc = Math.round(sub * discPercent);
    const ship = sub === 0 || (sub - disc) >= 1999 ? 0 : 79;
    const tot = Math.max(0, sub - disc + ship);

    return { subtotal: sub, discount: disc, shipping: ship, total: tot };
  }, [cart, coupon, prodMap]);

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const success = onApplyCoupon(couponInput.trim().toUpperCase(), COUPONS);
    if (success) {
      if (showToast) showToast(`Coupon ${couponInput.toUpperCase()} applied!`);
      setCouponInput('');
    } else {
      if (showToast) showToast('Invalid coupon. Try FORGET10 (10%) or MAVERICKS (15%).');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-bg border-l border-gold/30 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-gold" />
                <h3 className="text-xl font-serif font-bold text-text-primary">
                  Shopping Cart
                </h3>
                <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full font-bold">
                  {cart.reduce((a, c) => a + c.q, 0)}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg text-text-secondary hover:text-gold transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-text-secondary space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto text-gold">
                    <ShoppingBag size={28} />
                  </div>
                  <p className="text-sm font-medium">Your cart is empty.</p>
                  <p className="text-xs text-text-secondary/70">Nothing to forget yet. Add an edition to begin.</p>
                </div>
              ) : (
                cart.map((item, idx) => {
                  const product = prodMap[item.id] || PRODUCTS[0];
                  const modeObj = MODES[item.m] || MODES[0];
                  return (
                    <div
                      key={`${item.id}-${item.m}-${idx}`}
                      className="p-4 rounded-xl glass-card border border-gold/15 flex flex-col justify-between gap-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-serif font-bold text-text-primary">
                            {product.name}
                          </h4>
                          <span className="inline-block mt-0.5 text-[11px] font-medium text-gold bg-gold/10 px-2 py-0.5 rounded">
                            Mode: {modeObj.name}
                          </span>
                        </div>
                        <span className="text-sm font-serif font-bold text-text-primary">
                          ₹{(product.price * item.q).toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gold/10">
                        {/* Qty +/- */}
                        <div className="flex items-center border border-gold/30 rounded-lg overflow-hidden bg-bg">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(idx, -1)}
                            className="w-7 h-7 flex items-center justify-center text-xs font-bold text-text-primary hover:bg-gold/20"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs font-semibold text-text-primary">
                            {item.q}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(idx, 1)}
                            className="w-7 h-7 flex items-center justify-center text-xs font-bold text-text-primary hover:bg-gold/20"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => onRemoveItem(idx)}
                          className="text-text-secondary hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gold/15 bg-bg-secondary/80 space-y-4">
                
                {/* Coupon Code Input */}
                <form onSubmit={handleCouponSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                    <input
                      type="text"
                      placeholder="Coupon (e.g. FORGET10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-bg border border-gold/30 rounded-lg text-text-primary focus:outline-none focus:border-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gold text-bg text-xs font-bold uppercase rounded-lg hover:bg-gold-light transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {coupon && (
                  <div className="flex items-center justify-between text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/20">
                    <span>Coupon <strong>{coupon}</strong> applied!</span>
                    <button
                      type="button"
                      onClick={onClearCoupon}
                      className="text-text-secondary hover:text-red-400 underline text-[10px]"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {/* Subtotals breakdown */}
                <div className="space-y-1.5 text-xs text-text-secondary">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-text-primary font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-gold">
                      <span>Discount ({coupon})</span>
                      <span>−₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-emerald-400 font-semibold' : 'text-text-primary'}>
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-serif font-bold text-text-primary pt-2 border-t border-gold/15">
                    <span>Grand Total</span>
                    <span className="text-gold">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={() => { onClose(); onProceedCheckout(); }}
                    className="w-full btn-primary justify-center rounded-xl py-3.5 text-xs"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="w-full py-2 text-center text-xs text-text-secondary hover:text-red-400 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>

              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
