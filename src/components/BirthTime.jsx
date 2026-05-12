import { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressDots from './ProgressDots';

export default function BirthTime({ onNext, onSkip, onBack }) {
  const [time, setTime] = useState('23:59');
  
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
        <span className="text-[12px] text-muted-text">2 of 6</span>
      </div>
      
      <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3">Optional depth</p>
      <h2 
        className="font-serif font-medium tracking-[-0.045em] text-ink mb-3"
        style={{ fontSize: '28px', lineHeight: 1.02 }}
      >
        Do you know your birth time?
      </h2>
      <p className="text-sm text-muted-text leading-[1.55] mb-6">
        Birth time helps us understand your emotional timing.
      </p>
      
      <div className="flex-1 flex flex-col justify-center">
        <div 
          className="rounded-[20px] p-4 mb-5"
          style={{
            background: 'rgba(255,255,255,0.78)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <label className="text-[12px] text-muted-text mb-2 block">Birth Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full text-xl font-medium bg-transparent border-none outline-none"
            style={{ color: '#1F2130' }}
          />
        </div>
        
        <motion.div 
          className="rounded-[24px] p-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(255,255,255,0.78)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="text-sm font-medium text-ink mb-1">Not sure?</h4>
              <p className="text-[12px] text-soft-muted leading-[1.45]">
                You can skip this and update later. Your reading works without it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="space-y-3 pt-4">
        <button 
          onClick={onNext}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white"
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
          Skip for now
        </button>
        <ProgressDots total={6} current={1} />
      </div>
    </div>
  );
}