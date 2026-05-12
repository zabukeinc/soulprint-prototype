import { motion } from 'framer-motion';

export default function LogoBlob({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[142px] h-[142px] rounded-[42%_58%_48%_52%] mx-auto mb-6 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 35% 34%, rgba(255,255,255,0.94), transparent 22%),
          linear-gradient(145deg, #E8DDFB, #DDEDDC)
        `,
        boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
      <span 
        className="absolute text-[#8B72CF]"
        style={{ top: '12px', right: '20px', fontSize: '18px' }}
      >
        ✦
      </span>
    </motion.div>
  );
}