import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from './BottomNav';

export default function PhoneFrame({ children, currentScreen, onNavigate, showNav }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        <div 
          className="w-[340px] h-[720px] rounded-[42px] p-3"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.45))',
            border: '1px solid rgba(255,255,255,0.7)',
            boxShadow: '0 22px 60px rgba(99, 82, 60, 0.14)'
          }}
        >
          <div 
            className="h-full rounded-[34px] overflow-hidden relative"
            style={{
              background: `
                radial-gradient(circle at 18% 0%, rgba(232,221,251,0.9), transparent 36%),
                radial-gradient(circle at 82% 14%, rgba(221,237,220,0.95), transparent 32%),
                radial-gradient(circle at 70% 86%, rgba(248,220,203,0.8), transparent 32%),
                linear-gradient(180deg, #FFFDF7, #F7F2EA 58%, #EEF7EF 100%)
              `
            }}
          >
            <div 
              className="absolute inset-0 dot-pattern opacity-40 pointer-events-none"
            />
            <div 
              className="w-[88px] h-[24px] bg-[#050506] absolute top-[10px] left-1/2 -translate-x-1/2 rounded-b-2xl z-50"
            />
            <div className="h-full flex flex-col relative z-10">
              <div className={`flex-1 overflow-y-auto scrollbar-hide ${showNav ? 'pb-0' : ''}`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="h-full"
                  >
                    {children}
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {showNav && (
                  <BottomNav currentScreen={currentScreen} onNavigate={onNavigate} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}