import { useState, useEffect, useCallback, useMemo } from 'react';

const ld = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

export function useStore() {
  const [cart, setCart] = useState(() => ld('rk_cart', []));
  const [wish, setWish] = useState(() => ld('rk_wish', []));
  const [orders, setOrders] = useState(() => ld('rk_orders', []));
  const [mode, setMode] = useState(() => ld('rk_mode', 0));
  const [coupon, setCoupon] = useState(() => ld('rk_coupon', ''));
  const [toast, setToast] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => { sv('rk_cart', cart); }, [cart]);
  useEffect(() => { sv('rk_wish', wish); }, [wish]);
  useEffect(() => { sv('rk_orders', orders); }, [orders]);
  useEffect(() => { sv('rk_mode', mode); }, [mode]);
  useEffect(() => { sv('rk_coupon', coupon); }, [coupon]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    const t = setTimeout(() => setToast(''), 2500);
    return () => clearTimeout(t);
  }, []);

  const addToCart = useCallback((id) => {
    setCart(prev => {
      const idx = prev.findIndex(c => c.id === id && c.m === mode);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], q: next[idx].q + 1 };
        return next;
      }
      return [...prev, { id, m: mode, q: 1 }];
    });
  }, [mode]);

  const updateQty = useCallback((idx, delta) => {
    setCart(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], q: next[idx].q + delta };
      if (next[idx].q < 1) next.splice(idx, 1);
      return next;
    });
  }, []);

  const removeItem = useCallback((idx) => {
    setCart(prev => prev.filter((_, i) => i !== idx));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWish = useCallback((id) => {
    setWish(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }, []);

  const applyCoupon = useCallback((code, coupons) => {
    const v = code.trim().toUpperCase();
    if (!v) { setCoupon(''); return false; }
    if (coupons[v]) { setCoupon(v); return true; }
    return false;
  }, []);

  const clearCoupon = useCallback(() => setCoupon(''), []);

  const placeOrder = useCallback((details, total, items) => {
    const o = {
      id: 'RK-' + Date.now().toString(36).toUpperCase(),
      date: Date.now(),
      total,
      ...details,
      items,
    };
    setOrders(prev => [o, ...prev]);
    setCart([]);
    setCoupon('');
    return o;
  }, []);

  const clearOrders = useCallback(() => setOrders([]), []);

  const cartCount = useMemo(() => cart.reduce((a, c) => a + c.q, 0), [cart]);

  return {
    cart, wish, orders, mode, coupon, toast, cartCount, searchOpen,
    setMode, addToCart, updateQty, removeItem, clearCart, toggleWish,
    applyCoupon, clearCoupon, showToast, placeOrder, clearOrders, setSearchOpen,
  };
}
