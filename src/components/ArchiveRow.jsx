export default function ArchiveRow({ title, subtitle, date, locked = false }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-sage/30 last:border-0">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${locked ? 'bg-sage/50' : 'bg-lavender'}`}>
        {locked ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A7C8C" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F2130" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
          </svg>
        )}
      </div>
      <div className="flex-1 text-left">
        <p className="text-sm font-medium text-ink">{title}</p>
        <p className="text-xs text-muted-text">{subtitle} · {date}</p>
      </div>
    </div>
  );
}