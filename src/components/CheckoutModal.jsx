import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Sparkles, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { PRODUCTS, MODES, COUPONS } from '../data/productData';

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  coupon,
  onPlaceOrder,
  onOrderSuccess,
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pin: '',
    paymentMethod: 'UPI',
  });
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const prodMap = useMemo(() => {
    const map = {};
    PRODUCTS.forEach(p => { map[p.id] = p; });
    return map;
  }, []);

  const total = useMemo(() => {
    const sub = cart.reduce((acc, item) => {
      const p = prodMap[item.id] || PRODUCTS[0];
      return acc + p.price * item.q;
    }, 0);
    const disc = Math.round(sub * (COUPONS[coupon] || 0));
    const ship = sub === 0 || (sub - disc) >= 1999 ? 0 : 79;
    return Math.max(0, sub - disc + ship);
  }, [cart, coupon, prodMap]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare item descriptions
    const items = cart.map(item => {
      const p = prodMap[item.id] || PRODUCTS[0];
      const m = MODES[item.m] || MODES[0];
      return `${p.name} × ${item.q} (${m.name})`;
    });

    const newOrder = onPlaceOrder(formData, total, items);
    setConfirmedOrder(newOrder);
    if (onOrderSuccess) onOrderSuccess();
  };

  const handleCloseAll = () => {
    setConfirmedOrder(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-bg border border-gold/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
      >
        <button
          type="button"
          onClick={handleCloseAll}
          className="absolute top-6 right-6 text-text-secondary hover:text-gold transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {!confirmedOrder ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">
                MOCK PROTOTYPE CHECKOUT
              </span>
              <h3 className="text-2xl font-serif font-bold text-text-primary mt-1">
                Complete Your Order
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                Zero real charges. Concept order processed into local storage.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Maya Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg-card border border-gold/30 text-text-primary text-xs focus:outline-none focus:border-gold"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                  10-Digit Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg-card border border-gold/30 text-text-primary text-xs focus:outline-none focus:border-gold"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  required
                  rows={2}
                  placeholder="Apartment, Street, Landmark"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg-card border border-gold/30 text-text-primary text-xs focus:outline-none focus:border-gold resize-none"
                />
              </div>

              {/* PIN Code */}
              <div>
                <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                  6-Digit Postal PIN Code
                </label>
                <input
                  type="text"
                  name="pin"
                  required
                  pattern="[0-9]{6}"
                  placeholder="e.g. 560001"
                  value={formData.pin}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg-card border border-gold/30 text-text-primary text-xs focus:outline-none focus:border-gold"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                  Demo Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'UPI', icon: Smartphone, label: 'UPI / QR' },
                    { id: 'Card', icon: CreditCard, label: 'Credit Card' },
                    { id: 'Cash on delivery', icon: Banknote, label: 'COD' },
                  ].map(m => {
                    const Icon = m.icon;
                    const active = formData.paymentMethod === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: m.id }))}
                        className={`p-3 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-colors ${
                          active 
                            ? 'border-gold bg-gold/15 text-gold' 
                            : 'border-gold/20 text-text-secondary hover:border-gold/40'
                        }`}
                      >
                        <Icon size={18} />
                        <span className="text-[11px] font-semibold">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Total Summary */}
              <div className="p-4 rounded-xl bg-bg-card border border-gold/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-text-secondary block">Amount to Disappear:</span>
                  <span className="text-xl font-serif font-bold text-gold">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-[10px] text-text-secondary/70">
                  Concept presentation
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary justify-center rounded-xl py-4 text-xs font-bold"
              >
                Place Concept Order
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold/40">
              <CheckCircle size={32} />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">
                ORDER CONCLUDED
              </span>
              <h3 className="text-2xl font-serif font-bold text-text-primary mt-1">
                Order {confirmedOrder.id} Placed!
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                Dispatched to {confirmedOrder.name} via {confirmedOrder.paymentMethod}.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-gold/30 text-left text-xs space-y-1.5">
              <p className="text-text-primary font-semibold">Items Dispatched:</p>
              {confirmedOrder.items.map((it, i) => (
                <p key={i} className="text-text-secondary">· {it}</p>
              ))}
              <div className="pt-2 border-t border-gold/15 flex justify-between font-bold text-gold">
                <span>Total:</span>
                <span>₹{confirmedOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gold/10 border border-gold/30">
              <p className="font-serif italic text-base text-gold font-bold">
                "Now forget what you paid for it."
              </p>
              <p className="text-[11px] text-text-secondary mt-1">
                — MAVERICKS Concept Guarantee
              </p>
            </div>

            <button
              type="button"
              onClick={handleCloseAll}
              className="btn-primary rounded-xl px-8 py-3 text-xs w-full justify-center"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
