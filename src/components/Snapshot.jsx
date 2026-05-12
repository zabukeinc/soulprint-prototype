import { useState } from 'react';

export default function Snapshot({ onBack, onNavigate }) {
  const [feedback, setFeedback] = useState(null);
  
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
          <span className="text-[12px] text-muted-text">Snapshot</span>
        </div>
        
        <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2">
          Free Soulprint
        </p>
        <h2 
          className="font-serif font-medium text-ink mb-3"
          style={{ fontSize: '34px', lineHeight: 1.02 }}
        >
          Your first mirror.
        </h2>
        <p className="text-sm text-muted-text leading-[1.55] mb-4">
          A short reading of the emotional pattern beneath your chart and lifepath.
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] font-bold text-ink">Emotional Pattern</span>
          <span className="text-[12px] text-muted-text">1/5</span>
        </div>
        
        <div 
          className="rounded-[28px] p-5 mb-4"
          style={{
            background: 'rgba(255,255,255,0.78)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
          }}
        >
          <p className="text-sm text-ink leading-[1.55] mb-4">
            You often look detached when overwhelmed, but internally you are still processing everything in detail. People may think you moved on, while actually you are trying to understand what the moment meant.
          </p>
          
          <div className="flex items-center gap-2 pt-4 border-t border-[rgba(31,33,48,0.07)]">
            <span className="text-[12px] text-muted-text">Did this resonate?</span>
            <div className="flex gap-2 ml-auto">
              {['Yes', 'Kind of', 'Not really'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFeedback(opt)}
                  className={`px-3 py-2 rounded-full text-[11px] font-bold transition-all ${
                    feedback === opt
                      ? 'bg-[#9D7BEA] text-white'
                      : 'bg-[rgba(255,255,255,0.68)] text-ink border border-[rgba(31,33,48,0.08)]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div 
          className="rounded-[24px] border p-4 mb-3"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <h4 className="text-[15px] font-medium text-ink mb-1">Love Pattern</h4>
          <p className="text-[13px] text-muted-text">You do not need constant attention. You need emotional consistency.</p>
        </div>
        
        <div 
          className="rounded-[24px] border p-4 mb-3"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <h4 className="text-[15px] font-medium text-ink mb-1">Hidden Strength</h4>
          <p className="text-[13px] text-muted-text">You can sit with complexity without rushing to simplify it.</p>
        </div>
        
        <div 
          className="rounded-[24px] border p-4 mb-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(232,221,251,0.76), rgba(255,255,255,0.72))',
            border: '1px solid rgba(139,114,207,0.22)'
          }}
        >
          <span 
            className="absolute top-3 right-3 text-[11px] font-extrabold px-2 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.52)',
              border: '1px solid rgba(139,114,207,0.18)',
              color: '#7A63BD'
            }}
          >
            Locked
          </span>
          <h4 className="text-[15px] font-medium text-ink mb-1">Shadow Pattern</h4>
          <p className="text-[13px] text-muted-text">There is more beneath this pattern.</p>
        </div>
        
        <button 
          onClick={() => {}}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white mb-3"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 14px 30px rgba(139,114,207,0.22)'
          }}
        >
          Unlock Full Report - $9
        </button>
        <button 
          onClick={() => onNavigate('shareCard')}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-ink"
          style={{
            background: 'rgba(255,255,255,0.68)',
            border: '1px solid rgba(31,33,48,0.08)'
          }}
        >
          Create Share Card
        </button>
      </div>
    </div>
  );
}