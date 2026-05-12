import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from './BottomNav';

export default function AppShell({ children, currentScreen, onNavigate, showNav }) {
  return (
    <div className="h-full flex flex-col bg-cream">
      <div className="flex-1 overflow-y-auto scrollbar-hide">
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
  );
}