import { useState } from 'react';
import { motion } from 'framer-motion';

const patternCards = [
  { title: 'Private Processor', desc: 'You feel more than you show.' },
  { title: 'Pattern Reader', desc: 'You notice emotional shifts quickly.' },
  { title: 'Consistency Seeker', desc: 'You trust repeated actions more than big words.' },
  { title: 'Quiet Intensity', desc: 'You may look calm while processing deeply.' },
];

export default function FirstMirror({ onContinue, onDeepDive, onSaveCard, onBack }) {
  const [feedback, setFeedback] = useState(null);
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pt-8 pb-4">
        {onBack && (
          <div className="flex items-center justify-between mb-4">
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
            <span className="text-[12px] text-muted-text">Snapshot</span>
            <div className="w-[40px]" />
          </div>
        )}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div 
            className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.25)'
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <span className="text-xl">✦</span>
          </motion.div>
          
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-1">
            First Mirror
          </p>
          <h1 
            className="font-serif font-medium tracking-[-0.03em] text-ink mb-1"
            style={{ fontSize: '24px', lineHeight: 1.2 }}
          >
            Hi Gy, your first Soulprint is ready.
          </h1>
          <p className="text-[12px] text-muted-text leading-[1.5] max-w-[260px] mx-auto">
            We found a few patterns that may explain how you process emotion, connection, and direction.
          </p>
        </motion.div>
        
        <motion.div 
          className="rounded-[28px] p-5 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            background: 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div 
            className="absolute w-[100px] h-[100px] rounded-full opacity-20"
            style={{ background: 'rgba(255,255,255,0.5)', right: '-30px', top: '-30px' }}
          />
          
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-[50px] h-[50px] rounded-[20px] flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.6)' }}
              >
                <span className="text-2xl">🌿</span>
              </motion.div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.12em] text-[#8B72CF] uppercase font-extrabold">Your Core Archetype</p>
              <h2 
                className="font-serif font-medium text-ink"
                style={{ fontSize: '20px', lineHeight: 1.15 }}
              >
                The Quiet Strategist
              </h2>
            </div>
          </div>
          
          <p className="text-[12px] text-muted-text leading-[1.55] mb-3">
            You tend to understand things deeply before you explain them. People may see calmness, but your inner world is usually more active than it looks.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['Aquarius Sun', 'Life Path 7', 'Love Focus'].map((badge) => (
              <span 
                key={badge}
                className="px-2 py-1 rounded-full text-[10px] font-medium"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  color: '#6C5F99'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
        
        <div className="mb-4">
          <p className="text-[12px] font-medium text-ink mb-2">What this may reveal</p>
          <div className="grid grid-cols-2 gap-2">
            {patternCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.05) }}
                className="rounded-[16px] p-3"
                style={{
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(31,33,48,0.08)'
                }}
              >
                <p className="text-[11px] font-medium text-ink mb-0.5">{card.title}</p>
                <p className="text-[10px] text-muted-text leading-[1.4]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="rounded-[24px] p-4 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(232,221,251,0.5), rgba(255,255,255,0.8))',
            border: '1px solid rgba(139,114,207,0.2)'
          }}
        >
          <p className="text-[11px] font-medium text-ink mb-1">The part of you asking to be understood</p>
          <p className="text-[12px] text-muted-text leading-[1.5] mb-2">
            You may not always want attention. But you do want to feel emotionally considered.
          </p>
          <p className="text-[12px] text-muted-text leading-[1.5]">
            When people miss the small details, it can feel louder than they realize.
          </p>
        </motion.div>
        
        <div className="mb-4">
          <p className="text-[11px] text-muted-text text-center mb-2">Did this feel close to you?</p>
          <div className="flex gap-2">
            {['Yes, surprisingly', 'A little', 'Not really'].map((opt) => (
              <button
                key={opt}
                onClick={() => setFeedback(opt)}
                className={`flex-1 py-2 px-1 rounded-full text-[10px] font-medium transition-all ${
                  feedback === opt
                    ? 'text-white'
                    : 'bg-[rgba(255,255,255,0.78)] text-muted-text border border-[rgba(31,33,48,0.08)]'
                }`}
                style={feedback === opt ? { background: 'linear-gradient(135deg, #8B72CF, #16A7A0)' } : {}}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="rounded-[20px] p-4 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.78)',
            border: '1px solid rgba(31,33,48,0.08)'
          }}
        >
          <p className="text-[11px] font-medium text-ink mb-1">There is more beneath this pattern.</p>
          <p className="text-[11px] text-muted-text leading-[1.5] mb-3">
            Your full Soulprint explores the parts of you that may need more language: love pattern, shadow self, career energy, growth direction, and your 12-month theme.
          </p>
          <button 
            onClick={onDeepDive}
            className="w-full py-3 rounded-full text-[12px] font-extrabold text-white"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.2)'
            }}
          >
            Deep dive into your Soulprint →
          </button>
        </motion.div>
        
        <div className="mb-4">
          <p className="text-[11px] text-muted-text mb-2">A piece you can keep</p>
          <div 
            className="aspect-square rounded-[24px] p-5 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, #E8DDFB, #DDEDDC 55%, #F8DCCB)',
              border: '1px solid rgba(31,33,48,0.08)'
            }}
          >
            <div>
              <p className="text-[10px] tracking-[0.1em] text-[#6C5F99] uppercase font-extrabold mb-2">Your Love Pattern</p>
            </div>
            <p 
              className="font-serif text-ink"
              style={{ fontSize: '18px', lineHeight: 1.2 }}
            >
              You do not need constant attention. You need emotional consistency.
            </p>
            <p className="text-[10px] text-muted-text">Soulprint · Decode your emotional blueprint.</p>
          </div>
          <button 
            onClick={onSaveCard}
            className="w-full py-3 mt-2 rounded-full text-[12px] font-extrabold text-ink"
            style={{
              background: 'rgba(255,255,255,0.78)',
              border: '1px solid rgba(31,33,48,0.08)'
            }}
          >
            Save this card
          </button>
        </div>
      </div>
      
      <div className="px-5 pb-4">
        <motion.button 
          onClick={onContinue}
          className="w-full min-h-[48px] rounded-full px-6 font-extrabold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 8px 24px rgba(139,114,207,0.2)'
          }}
        >
          Continue to Today
        </motion.button>
      </div>
    </div>
  );
}