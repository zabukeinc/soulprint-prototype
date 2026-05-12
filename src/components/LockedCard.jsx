import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function LockedCard({ title, onUnlock }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-sage/40 p-5 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Lock size={14} className="text-muted-text" />
          <span className="text-xs text-muted-text">Locked</span>
        </div>
        <h3 className="font-serif text-lg font-semibold text-ink/70 mb-1">{title}</h3>
        <p className="text-sm text-muted-text/70">Tap to unlock</p>
      </div>
    </motion.div>
  );
}