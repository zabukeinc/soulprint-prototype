import { motion } from 'framer-motion';

export default function PrimaryButton({ children, onClick, disabled = false, className = '' }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      style={{
        background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
        boxShadow: '0 14px 30px rgba(139,114,207,0.22)'
      }}
    >
      {children}
    </motion.button>
  );
}

export function SecondaryButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-ink ${className}`}
      style={{
        background: 'rgba(255,255,255,0.68)',
        border: '1px solid rgba(31, 33, 48, 0.08)'
      }}
    >
      {children}
    </motion.button>
  );
}

export function GhostButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`py-3 px-4 text-muted-text font-medium transition-colors hover:text-ink ${className}`}
    >
      {children}
    </motion.button>
  );
}