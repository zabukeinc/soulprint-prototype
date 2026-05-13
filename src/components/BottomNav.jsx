import { motion } from 'framer-motion';
import { Home, Sparkles, BookOpen, Heart, User } from 'lucide-react';

const tabs = [
  { id: 'today', label: 'Today', icon: Home },
  { id: 'soulprint', label: 'Soul', icon: Sparkles },
  { id: 'decode', label: 'Decode', icon: BookOpen },
  { id: 'mirror', label: 'Mirror', icon: Heart },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function BottomNav({ currentScreen, onNavigate }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="rounded-[26px] overflow-hidden"
      style={{
        height: '68px',
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(31,33,48,0.08)',
        boxShadow: '0 12px 36px rgba(99,82,60,0.13)',
      }}
    >
      <div className="h-full grid grid-cols-5 items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentScreen === tab.id;
          return (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate(tab.id)}
              className="flex flex-col items-center justify-center h-full gap-1"
              style={{ fontWeight: 700, fontSize: '10px' }}
            >
              <span 
                className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, #8B72CF, #16A7A0)' 
                    : 'transparent',
                  border: isActive ? 'none' : '1px solid rgba(31,33,48,0.12)'
                }}
              >
                <Icon 
                  size={14} 
                  style={{ color: isActive ? 'white' : '#A7A1A0' }} 
                />
              </span>
              <span style={{ color: isActive ? '#1F2130' : '#A7A1A0' }}>
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}