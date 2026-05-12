export default function Header({ title, subtitle, onBack }) {
  return (
    <div className="px-5 pt-10 pb-4">
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 shadow-warm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="#1F2130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        <div className="flex-1">
          <p className="text-xs text-muted-text tracking-wide">{title}</p>
          <h2 className="font-serif text-xl font-semibold text-ink">{subtitle}</h2>
        </div>
      </div>
    </div>
  );
}