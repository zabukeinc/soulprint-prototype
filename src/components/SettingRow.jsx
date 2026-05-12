import { ChevronRight } from 'lucide-react';

export default function SettingRow({ label, value, onClick, showArrow = true }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-4 px-1 border-b border-sage/30 last:border-0"
    >
      <div className="text-left">
        <p className="text-sm font-medium text-ink">{label}</p>
        {value && <p className="text-xs text-muted-text mt-0.5">{value}</p>}
      </div>
      {showArrow && <ChevronRight size={18} className="text-muted-text" />}
    </button>
  );
}