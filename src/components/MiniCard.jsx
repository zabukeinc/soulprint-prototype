import { motion } from 'framer-motion';

export default function MiniCard({ title, value, icon: Icon, color = 'sage', onClick }) {
  const colorClasses = {
    sage: 'bg-sage',
    lavender: 'bg-lavender',
    peach: 'bg-peach',
    rose: 'bg-rose',
    mint: 'bg-mint',
    'sun-yellow': 'bg-sun-yellow',
  };
  
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${colorClasses[color]} p-4 rounded-2xl text-left w-full`}
    >
      {Icon && (
        <Icon size={18} className="text-ink mb-2 opacity-60" />
      )}
      <p className="text-xs text-muted-text mb-1">{title}</p>
      <p className="text-sm font-semibold text-ink">{value}</p>
    </motion.button>
  );
}