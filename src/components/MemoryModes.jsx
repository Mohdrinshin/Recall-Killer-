import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Eye } from 'lucide-react';
import { MODES } from '../data/productData';

export default function MemoryModes({ currentMode, onSelectMode, onOpenModeModal }) {
  return (
    <section id="modes" className="py-24 section-border relative bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            04 · Memory Mode Architecture
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary">
            ONE PRODUCT.<br />
            <span className="font-serif italic font-normal text-gold">
              SIX MEMORY MODES.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Different problems require different imaginary solutions. Tap any card to view detailed tactical parameters or select it to attach to your spray can.
          </p>
        </div>

        {/* 6 Modes Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODES.map((mode, idx) => {
            const isSelected = currentMode === idx;
            return (
              <div
                key={mode.id}
                className={`relative rounded-2xl overflow-hidden glass-card border transition-all duration-500 group flex flex-col ${
                  isSelected 
                    ? 'border-gold shadow-[0_0_30px_rgba(214,168,63,0.3)] ring-1 ring-gold' 
                    : 'border-gold/20 hover:border-gold/60 hover:-translate-y-1.5'
                }`}
              >
                {/* Visual Image container with dark luxury styling */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-card">
                  <img 
                    src={mode.image} 
                    alt={mode.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-90" />
                  
                  {/* Mode Number badge */}
                  <div className="absolute top-4 left-4 bg-bg/90 backdrop-blur-md border border-gold/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-gold">
                    MODE 0{idx + 1}
                  </div>

                  {/* Active selection badge */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-gold text-bg px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Check size={13} />
                      <span>Active</span>
                    </div>
                  )}
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{mode.icon}</span>
                      <h3 className="text-2xl font-serif font-bold text-text-primary group-hover:text-gold transition-colors">
                        {mode.name}
                      </h3>
                    </div>
                    <p className="text-xs text-gold font-medium mb-3">
                      {mode.description}
                    </p>
                    <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                      {mode.longDescription}
                    </p>
                  </div>

                  {/* Card Bottom Controls */}
                  <div className="pt-6 mt-6 border-t border-gold/15 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectMode(idx)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                        isSelected 
                          ? 'bg-gold text-bg' 
                          : 'bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-bg'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Set as Mode'}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => onOpenModeModal(mode)}
                      className="p-2 rounded-lg border border-gold/30 text-text-secondary hover:text-gold hover:border-gold transition-colors"
                      aria-label="Inspect mode"
                      title="Inspect mode details"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Banner */}
        <div className="mt-16 text-center">
          <p className="font-serif italic text-lg sm:text-xl text-text-secondary">
            "Different problems. <span className="text-gold font-bold">One imaginary solution.</span>"
          </p>
        </div>

      </div>
    </section>
  );
}
