export default function Archive() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="mb-5">
          <p className="text-[12px] text-muted-text tracking-wide">Saved</p>
          <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Archive</h2>
        </div>
        
        <p className="text-sm text-muted-text leading-[1.55] mb-5">
          Your private library.
        </p>
        
        <div 
          className="rounded-[22px] border p-4 mb-4"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-[rgba(31,33,48,0.07)]">
            <div className="w-10 h-10 rounded-[18px] bg-[#E8DDFB] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F2130" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-ink">Free Soulprint Snapshot</p>
              <p className="text-[11px] text-muted-text">Today · Emotional pattern</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 py-3 border-b border-[rgba(31,33,48,0.07)]">
            <div className="w-10 h-10 rounded-[18px] bg-[#DDEDDC] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F2130" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-ink">Love Pattern Card</p>
              <p className="text-[11px] text-muted-text">Saved share card</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 pt-3">
            <div className="w-10 h-10 rounded-[18px] bg-[#DDEDDC]/50 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A7C8C" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-ink/70">Full Soulprint</p>
              <p className="text-[11px] text-muted-text/70">Locked report</p>
            </div>
          </div>
        </div>
        
        <div 
          className="rounded-[28px] p-5"
          style={{
            background: 'rgba(232,221,251,0.3)',
            border: '1px solid rgba(31,33,48,0.08)'
          }}
        >
          <p className="text-[12px] text-center" style={{ color: '#7A7C8C' }}>
            <span className="font-medium text-ink">Archive is ownership.</span> Saved readings should feel like a growing mirror, not disposable content.
          </p>
        </div>
      </div>
    </div>
  );
}