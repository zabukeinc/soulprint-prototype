import { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressDots from './ProgressDots';

const focusOptions = [
  { id: 'love', label: 'Love', emoji: '💕' },
  { id: 'lost', label: 'Feeling lost', emoji: '🌫️' },
  { id: 'worth', label: 'Self-worth', emoji: '⭐' },
  { id: 'career', label: 'Career', emoji: '🎯' },
  { id: 'healing', label: 'Healing', emoji: '🌙' },
  { id: 'purpose', label: 'Purpose', emoji: '🌟' },
];

export default function FocusMood({ onNext, onBack }) {
  const [focus, setFocus] = useState(null);
  const [customMood, setCustomMood] = useState('');
  
  return (
    <div className="h-full flex flex-col px-5 pt-10 pb-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.76)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#1F2130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[12px] text-muted-text">5 of 6</span>
      </div>
      
      <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3">Right now</p>
      <h2 
        className="font-serif font-medium tracking-[-0.045em] text-ink mb-2"
        style={{ fontSize: '28px', lineHeight: 1.02 }}
      >
        What needs understanding today?
      </h2>
      <p className="text-sm text-muted-text leading-[1.55] mb-5">
        Choose one area you want to explore.
      </p>
      
      <div className="grid grid-cols-2 gap-3 mb-5">
        {focusOptions.map((opt) => {
          const isSelected = focus === opt.id;
          return (
            <motion.button
              key={opt.id}
              onClick={() => setFocus(opt.id)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-[24px] border p-4 text-center transition-all ${
                isSelected 
                  ? 'border-[rgba(139,114,207,0.4)] bg-[linear-gradient(145deg,rgba(232,221,251,0.98),rgba(255,255,255,0.9))]' 
                  : 'border-[rgba(31,33,48,0.08)] bg-[rgba(255,255,255,0.72)]'
              }`}
              style={{
                boxShadow: isSelected ? '0 8px 24px rgba(139,114,207,0.15)' : '0 4px 12px rgba(99,82,60,0.04)',
                minHeight: '100px'
              }}
            >
              <span className="text-3xl block mb-2">{opt.emoji}</span>
              <span className="text-[13px] font-medium text-ink">{opt.label}</span>
            </motion.button>
          );
        })}
      </div>
      
      <div className="flex-1"></div>
      
      <div>
        <button 
          onClick={onNext}
          disabled={!focus}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 14px 30px rgba(139,114,207,0.22)'
          }}
        >
          Create My Soulprint
        </button>
        <ProgressDots total={6} current={4} />
      </div>
    </div>
  );
}