import { motion } from 'framer-motion';
import { X, Trash2, PackageCheck, Calendar, Clock } from 'lucide-react';

export default function OrdersModal({ isOpen, onClose, orders, onClearOrders }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl bg-bg border border-gold/30 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-text-secondary hover:text-gold transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">
            CLIENT RECORD
          </span>
          <h3 className="text-2xl font-serif font-bold text-text-primary mt-1">
            Your Orders History
          </h3>
          <p className="text-xs text-text-secondary mt-1">
            Persisted locally in your browser storage.
          </p>
        </div>

        <div className="space-y-4">
          {orders.length === 0 ? (
            <div className="text-center py-12 text-text-secondary space-y-3">
              <PackageCheck size={36} className="text-gold/40 mx-auto" />
              <p className="text-sm font-medium">No recorded orders yet.</p>
              <p className="text-xs text-text-secondary/60">
                Any orders placed during checkout appear here.
              </p>
            </div>
          ) : (
            orders.map(order => (
              <div
                key={order.id}
                className="p-5 rounded-2xl glass-card border border-gold/20 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold/15 pb-2">
                  <span className="font-mono text-xs font-bold text-gold">
                    {order.id}
                  </span>
                  <span className="text-[11px] text-text-secondary flex items-center gap-1">
                    <Clock size={12} />
                    {new Date(order.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <div className="text-xs text-text-secondary space-y-1">
                  <p className="font-medium text-text-primary">Items:</p>
                  {order.items && order.items.map((it, idx) => (
                    <p key={idx} className="pl-2">· {it}</p>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gold/10 text-xs">
                  <div>
                    <span className="text-text-secondary">Delivered to: </span>
                    <span className="text-text-primary font-medium">{order.name} ({order.pin})</span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-sm text-gold">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                    <span className="block text-[10px] text-text-secondary">
                      Paid via {order.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {orders.length > 0 && (
          <div className="pt-6 mt-6 border-t border-gold/15 flex justify-end">
            <button
              type="button"
              onClick={onClearOrders}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-colors"
            >
              <Trash2 size={14} />
              <span>Clear Order History</span>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
