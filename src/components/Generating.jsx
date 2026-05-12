import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressDots from './ProgressDots';

const stages = [
  { id: 1, text: 'Reading your birth date...', delay: 600 },
  { id: 2, text: 'Placing your location into the chart...', delay: 1400 },
  { id: 3, text: 'Listening to your current focus...', delay: 2200 },
  { id: 4, text: 'Preparing your first emotional mirror...', delay: 3000 },
];

export default function Generating({ onComplete }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    stages.forEach((stage) => {
      setTimeout(() => {
        setCurrentStage(stage.id);
      }, stage.delay);
    });
    
    setTimeout(() => {
      setIsComplete(true);
    }, 4000);
  }, []);
  
  const handleFinish = () => {
    onComplete();
  };
  
  return (
    <div className="h-full flex flex-col px-5 pt-8 pb-4">
      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
                  boxShadow: '0 8px 32px rgba(139,114,207,0.3)'
                }}
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  ✦
                </motion.span>
              </motion.div>
              
              <p className="text-[10px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2">
                Preparing your first Soulprint
              </p>
              <h2 
                className="font-serif font-medium tracking-[-0.03em] text-ink mb-2"
                style={{ fontSize: '22px', lineHeight: 1.15 }}
              >
                We're turning your pattern into language.
              </h2>
            </div>
            
            <div className="space-y-2 flex-1">
              {stages.map((stage) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={currentStage >= stage.id ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 rounded-xl p-3"
                  style={{
                    background: currentStage >= stage.id ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)',
                    border: currentStage >= stage.id ? '1px solid rgba(139,114,207,0.25)' : '1px solid rgba(31,33,48,0.06)'
                  }}
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: currentStage >= stage.id ? '#16A7A0' : 'rgba(31,33,48,0.15)'
                    }}
                    animate={currentStage === stage.id ? {
                      scale: [1, 1.5, 1],
                      boxShadow: ['0 0 0 rgba(22,167,160,0)', '0 0 8px rgba(22,167,160,0.6)', '0 0 0 rgba(22,167,160,0)']
                    } : {}}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                  <span 
                    className="text-[12px]"
                    style={{
                      color: currentStage >= stage.id ? '#1F2130' : '#7A7C8C'
                    }}
                  >
                    {stage.text}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4">
              <ProgressDots total={6} current={5} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="flex-1 flex flex-col justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
                boxShadow: '0 8px 32px rgba(139,114,207,0.3)'
              }}
            >
              <span className="text-2xl">✦</span>
            </motion.div>
            
            <p className="text-[10px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2">
              Your Soulprint is ready
            </p>
            <h2 
              className="font-serif font-medium tracking-[-0.03em] text-ink mb-2"
              style={{ fontSize: '22px', lineHeight: 1.15 }}
            >
              Your first reflection is ready.
            </h2>
            <p className="text-[12px] text-muted-text leading-[1.5] mb-6 max-w-[240px] mx-auto">
              Take a moment to see what your pattern reveals about you today.
            </p>
            
            <button 
              onClick={handleFinish}
              className="w-full min-h-[48px] rounded-full px-6 font-extrabold text-sm text-white"
              style={{
                background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
                boxShadow: '0 8px 24px rgba(139,114,207,0.25)'
              }}
            >
              See your Soulprint
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}