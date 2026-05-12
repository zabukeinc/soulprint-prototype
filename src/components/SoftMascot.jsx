import { motion } from 'framer-motion';

export default function SoftMascot({ mood = 'gentle', size = 'medium' }) {
  const sizes = {
    small: { wrapper: 'w-16 h-18', head: 'w-10 h-8', body: 'w-8 h-6' },
    medium: { wrapper: 'w-24 h-27', head: 'w-14 h-11', body: 'w-11 h-9' },
    large: { wrapper: 'w-32 h-36', head: 'w-[70px] h-[56px]', body: 'w-[54px] h-[46px]' },
  };
  
  const s = sizes[size];
  
  const expressions = {
    gentle: { eyes: '◠', mouth: '‿' },
    curious: { eyes: '◉', mouth: '○' },
    happy: { eyes: '◠', mouth: 'ᴗ' },
    thoughtful: { eyes: '•', mouth: '—' },
    excited: { eyes: '◉', mouth: '◡' },
  };
  
  const exp = expressions[mood] || expressions.gentle;
  
  return (
    <motion.div
      animate={{ 
        y: [0, -6, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{ 
        duration: mood === 'excited' ? 2 : 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={`relative ${s.wrapper}`}
    >
      <motion.div 
        className={`${s.head} rounded-[26px_26px_22px_22px] mx-auto relative`}
        style={{
          background: '#FFF7EC',
          border: '2px solid rgba(31,33,48,0.08)',
          boxShadow: '0 10px 20px rgba(99,82,60,0.08)'
        }}
        animate={{ rotate: [0, -1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <motion.span 
          className="absolute text-ink"
          style={{ 
            fontSize: size === 'small' ? '6px' : size === 'large' ? '14px' : '10px',
            top: '35%',
            left: '22%'
          }}
        >
          {exp.eyes}
        </motion.span>
        <motion.span 
          className="absolute text-ink"
          style={{ 
            fontSize: size === 'small' ? '6px' : size === 'large' ? '14px' : '10px',
            top: '35%',
            right: '22%'
          }}
        >
          {exp.eyes}
        </motion.span>
        
        {mood === 'excited' && (
          <motion.span 
            className="absolute text-rose-400"
            style={{ 
              fontSize: size === 'small' ? '4px' : size === 'large' ? '10px' : '6px',
              top: '15%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            ✦
          </motion.span>
        )}
      </motion.div>
      
      <motion.div 
        className={`${s.body} rounded-[24px_24px_18px_18px] mx-auto mt-1 relative`}
        style={{
          background: 'linear-gradient(180deg, #F7D875, #F4C7D2)'
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span 
          className="absolute rounded-full"
          style={{ 
            background: '#FFF7EC', 
            width: size === 'small' ? '6px' : size === 'large' ? '14px' : '10px',
            height: size === 'small' ? '3px' : size === 'large' ? '6px' : '4px',
            top: '30%',
            left: '-20%',
            transform: 'rotate(-25deg)'
          }}
        />
        <motion.span 
          className="absolute rounded-full"
          style={{ 
            background: '#FFF7EC', 
            width: size === 'small' ? '6px' : size === 'large' ? '14px' : '10px',
            height: size === 'small' ? '3px' : size === 'large' ? '6px' : '4px',
            top: '30%',
            right: '-20%',
            transform: 'rotate(25deg)'
          }}
        />
      </motion.div>
      
      <motion.div
        className="absolute -top-1 -right-1"
        style={{ fontSize: size === 'small' ? '10px' : size === 'large' ? '18px' : '14px' }}
      >
        ✦
      </motion.div>
    </motion.div>
  );
}