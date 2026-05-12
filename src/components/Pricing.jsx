import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = {
  monthly: [
    'Complete emotional blueprint',
    'Love, career & growth patterns',
    'Shadow self exploration',
    'Weekly personalized insights',
  ],
  annually: [
    'Complete emotional blueprint',
    'Love, career & growth patterns',
    'Shadow self exploration',
    '12-month theme guidance',
    'Weekly personalized insights',
    'Priority support',
  ],
};

export default function Pricing({ onBack, onSelect }) {
  const [selected, setSelected] = useState('annually');
  
  return (
    <div className="h-full flex flex-col px-5 pt-8 pb-4">
      <div className="flex items-center justify-between mb-4">
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
      
      <div className="flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 
            className="font-serif font-medium text-ink mb-1"
            style={{ fontSize: '22px', lineHeight: 1.2 }}
          >
            Choose your journey
          </h1>
          <p className="text-[11px] text-muted-text">
            Go deeper into your emotional blueprint
          </p>
        </motion.div>
        
        <div className="mb-4">
          <div className="flex rounded-full p-1" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(31,33,48,0.08)' }}>
            <button
              onClick={() => setSelected('monthly')}
              className={`flex-1 py-2.5 rounded-full text-[12px] font-medium transition-all ${
                selected === 'monthly' 
                  ? 'text-white' 
                  : 'text-muted-text'
              }`}
              style={selected === 'monthly' ? { background: 'linear-gradient(135deg, #8B72CF, #16A7A0)' } : {}}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelected('annually')}
              className={`flex-1 py-2.5 rounded-full text-[12px] font-medium transition-all relative ${
                selected === 'annually' 
                  ? 'text-white' 
                  : 'text-muted-text'
              }`}
              style={selected === 'annually' ? { background: 'linear-gradient(135deg, #8B72CF, #16A7A0)' } : {}}
            >
              Annually
              {selected === 'annually' && (
                <span 
                  className="absolute -top-2 -right-1 px-1.5 py-0.5 rounded-full text-[8px] font-extrabold text-white"
                  style={{ background: '#F4C7D2', color: '#8B72CF' }}
                >
                  Save
                </span>
              )}
            </button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            <div 
              className="rounded-[24px] p-5 mb-4"
              style={{
                background: 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)',
                border: '1px solid rgba(31,33,48,0.08)',
                boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
                minHeight: '180px'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] text-muted-text uppercase tracking-wider mb-0.5">Selected plan</p>
                  <h2 className="font-serif text-2xl font-medium text-ink capitalize">{selected}</h2>
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl font-bold text-ink">${selected === 'monthly' ? '9' : '6'}</p>
                  <p className="text-[10px] text-muted-text">per month</p>
                </div>
              </div>
              
              {selected === 'annually' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl p-3 mb-3"
                  style={{ background: 'rgba(255,255,255,0.6)' }}
                >
                  <p className="text-[11px] text-ink">
                    <span className="font-bold">$72 billed yearly</span>
                    <span className="text-muted-text ml-2">(Save $36)</span>
                  </p>
                </motion.div>
              )}
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: '#16A7A0' }} />
                <span className="text-[11px] text-muted-text">Cancel anytime</span>
              </div>
            </div>
            
            <div 
              className="rounded-[20px] p-4 mb-4"
              style={{
                background: 'rgba(255,255,255,0.78)',
                border: '1px solid rgba(31,33,48,0.08)',
                boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
              }}
            >
              <p className="text-[11px] font-medium text-ink mb-3">What you unlock:</p>
              <ul className="space-y-2">
                {features[selected].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-[12px] text-muted-text"
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#16A7A0' }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="space-y-2">
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