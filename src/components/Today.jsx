export default function Today({ onNavigate }) {
  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[12px] text-muted-text">Good evening 🌤</p>
            <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Gy</h2>
          </div>
          <div 
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-extrabold text-[13px]"
            style={{
              background: 'linear-gradient(135deg, #16A7A0, #8EDBD0)',
              boxShadow: '0 12px 28px rgba(22,167,160,0.22)'
            }}
          >
            G
          </div>
        </div>
        
        <div 
          className="rounded-[28px] p-5 mb-4"
          style={{
            background: 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
            minHeight: '190px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div 
            className="absolute w-[150px] h-[150px] rounded-full right-[-44px] top-[-50px]"
            style={{ background: 'rgba(255,255,255,0.28)' }}
          />
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3 relative z-10">
            Today's Signal
          </p>
          <h3 
            className="font-serif text-ink mb-3 relative z-10"
            style={{ fontSize: '24px', lineHeight: 1.18, letterSpacing: '-0.03em' }}
          >
            Your mind wants clarity, but your heart needs emotional evidence.
          </h3>
          <p className="text-[12px] text-soft-muted relative z-10">
            A calm day for naming what you usually keep private.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-[8px] mb-4">
          {[
            { label: 'Calm', sublabel: 'weather' },
            { label: 'Direct', sublabel: 'best move' },
            { label: 'Testing', sublabel: 'avoid' },
          ].map((metric) => (
            <div 
              key={metric.label}
              className="rounded-[20px] p-3 text-center"
              style={{
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(31,33,48,0.08)',
                boxShadow: '0 8px 16px rgba(99,82,60,0.05)'
              }}
            >
              <strong className="block text-[15px] text-ink mb-1">{metric.label}</strong>
              <span className="text-[10px] text-muted-text">{metric.sublabel}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-[14px] font-bold text-ink">Gentle guidance</span>
          <span className="text-[12px] text-muted-text">Save</span>
        </div>
        
        <div 
          className="rounded-[24px] border p-4 mb-3"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <h4 className="text-[15px] font-medium text-ink mb-1">Best Move Today</h4>
          <p className="text-[13px] text-muted-text">Say the thing before it becomes resentment.</p>
        </div>
        
        <div 
          className="rounded-[24px] border p-4 mb-4"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <h4 className="text-[15px] font-medium text-ink mb-1">Journal Prompt</h4>
          <p className="text-[13px] text-muted-text">What do I need but avoid asking for?</p>
        </div>
        
        <button
          onClick={() => onNavigate('soulprint')}
          className="w-full rounded-[24px] border p-4 flex items-center gap-4"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <div 
            className="w-[44px] h-[44px] rounded-[18px] flex items-center justify-center"
            style={{
              background: 'linear-gradient(145deg, #E8DDFB, #DDEDDC)',
              border: '1px solid rgba(31,33,48,0.06)'
            }}
          >
            <span className="text-lg">✦</span>
          </div>
          <div className="flex-1 text-left">
            <p className="text-[14px] font-medium text-ink">View your Soulprint</p>
            <p className="text-[12px] text-muted-text">Your complete emotional blueprint</p>
          </div>
          <span className="text-muted-text">→</span>
        </button>
      </div>
    </div>
  );
}