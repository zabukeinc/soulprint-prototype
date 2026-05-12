import ProgressDots from './ProgressDots';

export default function Soulprint({ onNavigate }) {
  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[12px] text-muted-text tracking-wide">Your identity map</p>
            <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Gy's Soulprint</h2>
          </div>
          <div 
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.76)',
              border: '1px solid rgba(31,33,48,0.08)',
              boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
            }}
          >
            <span className="text-lg">✦</span>
          </div>
        </div>
        
        <div 
          className="rounded-[28px] p-5 mb-4"
          style={{
            background: 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '190px'
          }}
        >
          <div 
            className="absolute w-[150px] h-[150px] rounded-full right-[-44px] top-[-50px]"
            style={{ background: 'rgba(255,255,255,0.28)' }}
          />
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2 relative z-10">
            Core Archetype
          </p>
          <h2 
            className="font-serif font-medium text-ink mb-2 relative z-10"
            style={{ fontSize: '28px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            The Quiet Strategist
          </h2>
          <p className="text-sm text-muted-text mb-4 relative z-10">
            You process deeply, move carefully, and often understand the room before you explain yourself.
          </p>
          <div className="flex flex-wrap gap-2 relative z-10">
            {['Aquarius Sun', 'Life Path 7', 'Love Focus'].map((badge) => (
              <span 
                key={badge}
                className="px-3 py-1.5 rounded-full text-[12px] font-bold"
                style={{
                  background: 'rgba(255,255,255,0.56)',
                  border: '1px solid rgba(31,33,48,0.08)',
                  color: '#6C5F99'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] font-bold text-ink">Your Blueprint</span>
          <span className="text-[12px] text-muted-text">68% complete</span>
        </div>
        
        <div 
          className="rounded-[24px] border p-4 mb-3"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <h4 className="text-[15px] font-medium text-ink mb-1">Emotional Blueprint</h4>
          <p className="text-[13px] text-muted-text">How you process intensity before showing it.</p>
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
          <p className="text-[13px] text-muted-text">The rhythm behind closeness, distance, and safety.</p>
        </div>
        
        <div 
          className="rounded-[24px] border p-4 mb-6 relative overflow-hidden"
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
          <h4 className="text-[15px] font-medium text-ink mb-1">Shadow Self</h4>
          <p className="text-[13px] text-muted-text">What you hide even from your own language.</p>
        </div>
        
        <button 
          onClick={() => {}}
          className="w-full rounded-[24px] p-4 font-medium text-sm text-center mb-3"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(139,114,207,0.25)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <span className="text-ink">Go deeper into your pattern</span>
          <span className="text-[#8B72CF] ml-2">→</span>
        </button>
        
        <button
          onClick={() => onNavigate('snapshot')}
          className="w-full py-3 text-[14px] font-extrabold text-[#8B72CF] text-center"
        >
          View Free Snapshot
        </button>
      </div>
    </div>
  );
}