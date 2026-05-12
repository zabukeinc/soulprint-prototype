import { Sun, Compass, AlertCircle } from 'lucide-react';

const icons = {
  sun: Sun,
  compass: Compass,
  alert: AlertCircle,
};

const colors = {
  sage: 'bg-sage',
  peach: 'bg-peach',
  rose: 'bg-rose',
  mint: 'bg-mint',
  sun: 'bg-sun-yellow',
  lavender: 'bg-lavender',
};

export default function Metric({ type, label, value, color = 'sage' }) {
  const Icon = icons[type] || Sun;
  const bgColor = colors[color] || colors.sage;
  
  return (
    <div className={`${bgColor} p-4 rounded-2xl`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={14} className="text-ink opacity-60" />
        <span className="text-xs text-muted-text">{label}</span>
      </div>
      <p className="text-base font-semibold text-ink capitalize">{value}</p>
    </div>
  );
}