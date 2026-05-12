import { motion } from 'framer-motion';

export function IllustrationPanel({ children, className = '', style = {} }) {
  return (
    <div 
      className={`rounded-[32px] p-5 flex gap-3 items-center ${className}`}
      style={{
        background: 'linear-gradient(145deg, #FFFDF7, #E8DDFB 52%, #DDEDDC)',
        border: '1px solid rgba(31,33,48,0.08)',
        boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
        minHeight: '182px',
        overflow: 'hidden',
        position: 'relative',
        ...style
      }}
    >
      <div className="absolute w-[120px] h-[120px] rounded-full" style={{
        background: 'rgba(247,216,117,0.3)',
        right: '-32px',
        bottom: '-42px'
      }} />
      <div className="flex-1 relative z-10">
        {children}
      </div>
    </div>
  );
}

export function IllustrationCharacter({ mood = 'gentle' }) {
  const expressions = {
    gentle: { eyeY: '35%', eyeSize: '10px' },
    curious: { eyeY: '32%', eyeSize: '12px' },
    happy: { eyeY: '38%', eyeSize: '10px' },
  };
  const exp = expressions[mood] || expressions.gentle;
  
  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-[80px] h-[90px] flex-shrink-0"
    >
      <motion.div 
        className="w-[60px] h-[48px] rounded-[22px_22px_18px_18px] mx-auto relative"
        style={{
          background: '#FFF7EC',
          border: '2px solid rgba(31,33,48,0.08)',
          boxShadow: '0 8px 16px rgba(99,82,60,0.06)'
        }}
      >
        <div className="absolute" style={{ top: exp.eyeY, left: '20px', fontSize: exp.eyeSize }}>◠</div>
        <div className="absolute" style={{ top: exp.eyeY, right: '20px', fontSize: exp.eyeSize }}>◠</div>
      </motion.div>
      <motion.div 
        className="w-[46px] h-[38px] rounded-[20px_20px_14px_14px] mx-auto mt-1"
        style={{ background: 'linear-gradient(180deg, #F7D875, #F4C7D2)' }}
      >
        <div className="absolute rounded-full" style={{ background: '#FFF7EC', width: '16px', height: '6px', top: '28%', left: '-12px', transform: 'rotate(-25deg)' }} />
        <div className="absolute rounded-full" style={{ background: '#FFF7EC', width: '16px', height: '6px', top: '28%', right: '-12px', transform: 'rotate(25deg)' }} />
      </motion.div>
      <div className="absolute -top-1 right-2 text-[#8B72CF] text-lg">✦</div>
    </motion.div>
  );
}

export function IllustrationLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[142px] h-[142px] rounded-[42%_58%_48%_52%] mx-auto mb-6 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 35% 34%, rgba(255,255,255,0.94), transparent 22%), linear-gradient(145deg, #E8DDFB, #DDEDDC)`,
        boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <IllustrationCharacter mood="happy" />
      </div>
      <span className="absolute text-[#8B72CF] z-10" style={{ top: '12px', right: '20px', fontSize: '18px' }}>✦</span>
    </motion.div>
  );
}

export function IllustrationBlob({ children }) {
  return (
    <motion.div
      animate={{ 
        borderRadius: ['42% 58% 48% 52%', '52% 48% 58% 42%', '48% 52% 42% 58%', '42% 58% 48% 52%']
      }}
      transition={{ duration: 8, repeat: Infinity }}
      className="w-[120px] h-[120px] rounded-[42%_58%_48%_52%] mx-auto relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #E8DDFB, #DDEDDC)',
        boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}

export function IllustrationCelestial() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="relative w-[100px] h-[100px]"
    >
      <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(135deg, #F7D875, #F4C7D2)', opacity: 0.6 }} />
      <div className="absolute w-[60px] h-[60px] rounded-full top-[20px] left-[20px]" style={{ background: '#E8DDFB' }} />
      <div className="absolute w-[30px] h-[30px] rounded-full bottom-[10px] right-[10px]" style={{ background: '#DDEDDC' }} />
      <div className="absolute top-2 right-3 text-[#8B72CF] text-xl animate-pulse">✦</div>
    </motion.div>
  );
}

export function IllustrationMood({ mood }) {
  const colors = {
    calm: ['#DDEDDC', '#DFF2EC'],
    warm: ['#F8DCCB', '#F7D875'],
    deep: ['#E8DDFB', '#F4C7D2'],
    bright: ['#F7D875', '#DDEDDC'],
  };
  
  const [c1, c2] = colors[mood] || colors.calm;
  
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="w-[80px] h-[80px] rounded-full relative"
      style={{
        background: `linear-gradient(135deg, ${c1}, ${c2})`,
        boxShadow: '0 12px 30px rgba(99, 82, 60, 0.15)'
      }}
    >
      <motion.div 
        className="absolute inset-2 rounded-full bg-white/30"
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}