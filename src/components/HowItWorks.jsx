import { motion } from 'framer-motion';
import { Clock, SprayCan, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Target Formulation',
      action: 'Identify the moment',
      desc: 'Mentally bring forward the specific awkward conversation, heartbreaking memory, or exam panic you wish to dissolve.',
    },
    {
      step: '02',
      title: 'Directional Application',
      action: 'Two sprays to forehead',
      desc: 'Hold RK-404 at a comfortable distance and mist twice. Inhale the symbolic aroma of closure and fresh perspective.',
    },
    {
      step: '03',
      title: 'Selective Erasure',
      action: '3-second reset',
      desc: 'Our imaginary cognitive filter deletes the emotional weight while archiving valuable knowledge and life wisdom.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 section-border relative bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
            05 · Mechanism of Action
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-text-primary">
            A TWO-STAGE<br />
            <span className="font-serif italic font-normal text-gold">
              MEMORY SYSTEM.
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto my-6" />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Engineered around simplicity. An easy-to-understand two-spray conceptual ritual designed to reset active recall.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((st, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border border-gold/20 relative group hover:border-gold/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-serif font-bold text-gold/40 group-hover:text-gold transition-colors">
                  {st.step}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                  {st.action}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-text-primary mb-2">
                {st.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Two Stages Comparison Table/Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Stage 01 */}
          <div className="glass-card p-8 rounded-2xl border border-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold">Stage 01 · Short-Term</span>
            <h3 className="text-2xl font-serif font-bold text-text-primary mt-1 mb-3">
              Instant Mental Reset
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              The fictional system rapidly identifies the targeted unwanted memory and initiates its imaginary cancellation, breaking the immediate spiral of overthinking.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
              <CheckCircle2 size={16} className="text-gold" />
              <span>Immediate relief from recurring 3 AM flashbacks</span>
            </div>
          </div>

          {/* Stage 02 */}
          <div className="glass-card p-8 rounded-2xl border border-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold">Stage 02 · Long-Term</span>
            <h3 className="text-2xl font-serif font-bold text-text-primary mt-1 mb-3">
              Less Repeated Recall
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              With continued conceptual ritual, mental associations soften, allowing a refreshed approach to everyday challenges without baggage from previous failures.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
              <CheckCircle2 size={16} className="text-gold" />
              <span>Reinforced emotional immunity and lighter perspective</span>
            </div>
          </div>

        </div>

        {/* Quick Parameters Table */}
        <div className="glass-card rounded-2xl border border-gold/25 p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gold/20 text-xs uppercase tracking-wider text-gold font-bold">
                <th className="py-3 px-4">Activation</th>
                <th className="py-3 px-4">Processing Time</th>
                <th className="py-3 px-4">User Effort</th>
                <th className="py-3 px-4">Knowledge Retained</th>
              </tr>
            </thead>
            <tbody className="text-sm text-text-primary">
              <tr>
                <td className="py-4 px-4 font-semibold">Two gentle forehead sprays</td>
                <td className="py-4 px-4 font-semibold text-gold">3 seconds</td>
                <td className="py-4 px-4 font-semibold">Minimal (zero cognitive strain)</td>
                <td className="py-4 px-4 font-semibold text-emerald-400">100% (Lessons kept intact)</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
