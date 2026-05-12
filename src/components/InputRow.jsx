import { motion } from 'framer-motion';

export default function InputRow({ 
  label, 
  value, 
  onChange, 
  type = 'text', 
  options,
  placeholder 
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-ink">{label}</label>
      )}
      
      {type === 'select' && options ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-white/80 rounded-2xl border border-sage/50 text-ink
            focus:outline-none focus:ring-2 focus:ring-lavender-strong/50 appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : type === 'time' ? (
        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-white/80 rounded-2xl border border-sage/50 text-ink
            focus:outline-none focus:ring-2 focus:ring-lavender-strong/50"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-white/80 rounded-2xl border border-sage/50 text-ink
            focus:outline-none focus:ring-2 focus:ring-lavender-strong/50 placeholder:text-muted-text/50"
        />
      )}
    </div>
  );
}