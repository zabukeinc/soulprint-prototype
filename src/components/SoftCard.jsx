import { motion } from 'framer-motion';

export default function SoftCard({ 
  children, 
  className = '', 
  onClick, 
  hover = true,
  padding = 'p-5',
  bgColor = 'bg-white/78'
}) {
  const Component = onClick ? motion.button : motion.div;
  
  return (
    <Component
      whileHover={hover ? { scale: 1.01 } : {}}
      whileTap={onClick ? { scale: 0.99 } : {}}
      onClick={onClick}
      className={`${bgColor} backdrop-blur-md rounded-[28px] ${padding} ${className} ${
        onClick ? 'cursor-pointer w-full text-left' : ''
      }`}
      style={{
        border: '1px solid rgba(31, 33, 48, 0.08)',
        boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
      }}
    >
      {children}
    </Component>
  );
}