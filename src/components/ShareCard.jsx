import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function ShareCard({ onBack, onNavigate }) {
  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mb-5">
          <div 
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.76)',
              border: '1px solid rgba(31,33,48,0.08)',
              boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
            }}
            onClick={onBack}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="#1F2130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[12px] text-muted-text">Share Preview</span>
        </div>
        
        <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2">
          Make it yours
        </p>
        <h2 
          className="font-serif font-medium text-ink mb-3"
          style={{ fontSize: '34px', lineHeight: 1.02 }}
        >
          Share the part that felt true.
        </h2>
        <p className="text-sm text-muted-text leading-[1.55] mb-5">
          Save this as a soft identity card.
        </p>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="aspect-square rounded-[32px] p-6 mb-5 flex flex-col justify-between"
          style={{
            background: 'linear-gradient(145deg, #E8DDFB, #DDEDDC 55%, #F8DCCB)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
          }}
        >
          <div>
            <p className="text-[12px] tracking-[0.12em] text-[#6C5F99] uppercase font-extrabold mb-4">
              Your Love Pattern
            </p>
          </div>
          <p 
            className="font-serif text-ink text-center"
            style={{ fontSize: '25px', lineHeight: 1.12, letterSpacing: '-0.035em' }}
          >
            You do not need constant attention. You need emotional consistency.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-[12px] text-muted-text">Soulprint</p>
            <p className="text-[12px] text-muted-text">Decode your emotional blueprint.</p>
          </div>
        </motion.div>
        
        <button 
          onClick={() => {}}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white mb-3 flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 14px 30px rgba(139,114,207,0.22)'
          }}
        >
          <Download size={18} />
          Download Card
        </button>
        <button 
          onClick={() => onNavigate('snapshot')}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-ink"
          style={{
            background: 'rgba(255,255,255,0.68)',
            border: '1px solid rgba(31,33,48,0.08)'
          }}
        >
          Choose Another Insight
        </button>
      </div>
    </div>
  );
}