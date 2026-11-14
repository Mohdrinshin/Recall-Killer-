import { motion } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';

export default function ModeDetailModal({ mode, isOpen, onClose, onSelect, isSelected }) {
  if (!isOpen || !mode) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-bg border border-gold/30 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-text-secondary hover:text-gold transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Visual Header */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-gold/20">
          <img 
            src={mode.image} 
            alt={mode.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-2xl">{mode.icon}</span>
            <h3 className="text-2xl font-serif font-bold text-text-primary mt-1">
              {mode.name}
            </h3>
            <p className="text-xs text-gold font-medium">
              {mode.description}
            </p>
          </div>
        </div>

        {/* Tactical Parameters */}
        <div className="space-y-4 text-xs text-text-secondary leading-relaxed">
          <div>
            <h4 className="text-text-primary font-bold uppercase tracking-wider mb-1">
              Tactical Mission
            </h4>
            <p>{mode.longDescription}</p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-gold/15 space-y-2">
            <div className="flex justify-between">
              <span className="text-text-primary font-medium">Target Memory Retention:</span>
              <span className="text-gold font-bold">Selective Zero Recall</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-primary font-medium">Recommended Doses:</span>
              <span>2 sprays prior to social/mental engagement</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-primary font-medium">Emotional Footprint:</span>
              <span className="text-emerald-400 font-semibold">100% Retained Wisdom</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 mt-6 border-t border-gold/15 flex gap-3">
          <button
            type="button"
            onClick={() => { onSelect(); onClose(); }}
            className={`flex-1 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              isSelected 
                ? 'bg-gold/20 text-gold border border-gold/40' 
                : 'btn-primary'
            }`}
          >
            {isSelected ? (
              <>
                <Check size={16} />
                <span>Currently Selected Mode</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Set as Active Spray Mode</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
