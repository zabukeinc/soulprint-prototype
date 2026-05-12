import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing({ onBack, onSelect }) {
  const [selected, setSelected] = useState('annually');
  
  return (
    <div className="h-full flex flex-col px-5 pt-8 pb-4">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="w-[36px] h-[36px] rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.76)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 20px rgba(99, 82, 60, 0.09)'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#1F2130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div 
            className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.25)'
            }}
          >
            <span className="text-xl">✦</span>
          </div>
          
          <h1 
            className="font-serif font-medium text-ink mb-2"
            style={{ fontSize: '24px', lineHeight: 1.2 }}
          >
            Choose your journey
          </h1>
          <p className="text-[12px] text-muted-text leading-[1.5] max-w-[240px] mx-auto">
            Go deeper into your emotional blueprint with your full Soulprint.
          </p>
        </motion.div>
        
        <div className="space-y-3 mb-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => setSelected('monthly')}
            className={`w-full rounded-[20px] p-4 text-left transition-all ${
              selected === 'monthly'
                ? 'border-[rgba(139,114,207,0.4)] bg-[linear-gradient(145deg,rgba(232,221,251,0.9),rgba(255,255,255,0.9))]'
                : 'border border-[rgba(31,33,48,0.08)] bg-[rgba(255,255,255,0.78)]'
            }`}
            style={{
              boxShadow: selected === 'monthly' ? '0 8px 24px rgba(139,114,207,0.15)' : '0 4px 12px rgba(99,82,60,0.05)'
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-ink">Monthly</p>
                <p className="text-[11px] text-muted-text">Billed monthly</p>
              </div>
              <div className="text-right">
                <p className="text-[18px] font-bold text-ink">$9</p>
                <p className="text-[10px] text-muted-text">per month</p>
              </div>
            </div>
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            onClick={() => setSelected('annually')}
            className={`w-full rounded-[20px] p-4 text-left transition-all relative ${
              selected === 'annually'
                ? 'border-[rgba(139,114,207,0.4)] bg-[linear-gradient(145deg,rgba(232,221,251,0.9),rgba(255,255,255,0.9))]'
                : 'border border-[rgba(31,33,48,0.08)] bg-[rgba(255,255,255,0.78)]'
            }`}
            style={{
              boxShadow: selected === 'annually' ? '0 8px 24px rgba(139,114,207,0.15)' : '0 4px 12px rgba(99,82,60,0.05)'
            }}
          >
            <span 
              className="absolute -top-2 right-4 px-2 py-0.5 rounded-full text-[9px] font-extrabold text-white"
              style={{ background: 'linear-gradient(135deg, #8B72CF, #16A7A0)' }}
            >
              Save 33%
            </span>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-ink">Annually</p>
                <p className="text-[11px] text-muted-text">Billed yearly</p>
              </div>
              <div className="text-right">
                <p className="text-[18px] font-bold text-ink">$6</p>
                <p className="text-[10px] text-muted-text">per month</p>
              </div>
            </div>
          </motion.button>
        </div>
        
        <div 
          className="rounded-[16px] p-4 mb-4"
          style={{
            background: 'rgba(221,237,220,0.4)',
            border: '1px solid rgba(31,33,48,0.08)'
          }}
        >
          <p className="text-[11px] font-medium text-ink mb-2">What you unlock:</p>
          <ul className="space-y-1.5">
            {[
              'Complete emotional blueprint',
              'Love, career & growth patterns',
              'Shadow self exploration',
              '12-month theme guidance',
              'Weekly personalized insights'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[11px] text-muted-text">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#16A7A0' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="space-y-3">
        <button 
          onClick={() => onSelect(selected)}
          className="w-full min-h-[48px] rounded-full px-6 font-extrabold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 8px 24px rgba(139,114,207,0.2)'
          }}
        >
          Start my journey
        </button>
        <button 
          onClick={onBack}
          className="w-full py-3 text-[12px] text-muted-text font-medium text-center"
        >
          Continue with free snapshot
        </button>
      </div>
    </div>
  );
}