import { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressDots from './ProgressDots';
import { IllustrationBlob, IllustrationCelestial } from './Illustrations';

const mbtiOptions = [
  { type: 'INFJ', label: 'Advocate', symbol: '🧠', color: '#E8DDFB' },
  { type: 'INTJ', label: 'Architect', symbol: '🏰', color: '#DDEDDC' },
  { type: 'INFP', label: 'Mediator', symbol: '🎨', color: '#F8DCCB' },
  { type: 'ENFJ', label: 'Protagonist', symbol: '✨', color: '#F7D875' },
  { type: 'ENTJ', label: 'Commander', symbol: '🎯', color: '#DFF2EC' },
  { type: 'ENFP', label: 'Campaigner', symbol: '🎪', color: '#F4C7D2' },
  { type: 'ISTJ', label: 'Logistician', symbol: '📋', color: '#E8DDFB' },
  { type: 'ISFJ', label: 'Defender', symbol: '🛡️', color: '#DDEDDC' },
  { type: 'ESTJ', label: 'Executive', symbol: '⚡', color: '#F8DCCB' },
  { type: 'ESFJ', label: 'Provider', symbol: '🤝', color: '#DFF2EC' },
  { type: 'ISTP', label: 'Virtuoso', symbol: '🔧', color: '#E8DDFB' },
  { type: 'ISFP', label: 'Adventurer', symbol: '🌿', color: '#F7D875' },
  { type: 'ESTP', label: 'Entrepreneur', symbol: '🚀', color: '#F4C7D2' },
  { type: 'ESFP', label: 'Entertainer', symbol: '🎭', color: '#DDEDDC' },
  { type: "I'm not sure", label: 'Explore later', symbol: '❓', color: '#E8DDFB' },
];

export default function Mbti({ onNext, onSkip, onBack }) {
  const [selected, setSelected] = useState(null);
  
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
        <span className="text-[12px] text-muted-text">4 of 6</span>
      </div>
      
      <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3">Optional self-language</p>
      <h2 
        className="font-serif font-medium tracking-[-0.045em] text-ink mb-3"
        style={{ fontSize: '32px', lineHeight: 1.02 }}
      >
        Do you know your MBTI?
      </h2>
      <p className="text-sm text-muted-text leading-[1.55] mb-5">
        If you already use MBTI, Soulprint can weave it gently into your reading.
      </p>
      
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        <div className="grid grid-cols-2 gap-[10px]">
          {mbtiOptions.map((opt) => {
            const isSelected = selected === opt.type;
            return (
              <motion.button
                key={opt.type}
                onClick={() => setSelected(opt.type)}
                whileTap={{ scale: 0.95 }}
                className={`rounded-[24px] border p-4 text-left transition-all flex flex-col ${
                  isSelected 
                    ? 'border-[rgba(139,114,207,0.35)] bg-[linear-gradient(145deg,rgba(232,221,251,0.98),rgba(255,255,255,0.74))] shadow-lg' 
                    : 'border-[rgba(31,33,48,0.08)] bg-[rgba(255,255,255,0.72)]'
                }`}
                style={{
                  boxShadow: isSelected ? '0 8px 24px rgba(139,114,207,0.2)' : '0 8px 18px rgba(99,82,60,0.04)',
                  minHeight: '88px'
                }}
              >
                <span className="text-2xl mb-auto">{opt.symbol}</span>
                <div className="mt-auto">
                  <span className="text-[13px] font-bold text-ink block">{opt.type}</span>
                  <span className="text-[10px] text-muted-text">{opt.label}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
      
      <div className="space-y-3">
        <button
          disabled={!selected}
          onClick={onNext}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 14px 30px rgba(139,114,207,0.22)'
          }}
        >
          Continue
        </button>
        <button 
          onClick={onSkip}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-ink"
          style={{
            background: 'rgba(255,255,255,0.68)',
            border: '1px solid rgba(31,33,48,0.08)'
          }}
        >
          Skip and test later
        </button>
        <ProgressDots total={6} current={3} />
      </div>
    </div>
  );
}