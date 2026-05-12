import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const stages = [
  { id: 1, text: 'Reading your birth date...', delay: 0 },
  { id: 2, text: 'Placing your location into the chart...', delay: 1.5 },
  { id: 3, text: 'Listening to your current focus...', delay: 3 },
  { id: 4, text: 'Preparing your first emotional mirror...', delay: 4.5 },
];

export default function GeneratingAnimation({ onComplete }) {
  const controls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      for (const stage of stages) {
        await new Promise(resolve => setTimeout(resolve, stage.delay * 1000));
        await controls.start(`visible-${stage.id}`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
      onComplete?.();
    };
    sequence();
  }, []);
  
  return (
    <div className="space-y-4 py-4">
      {stages.map((stage) => (
        <motion.div
          key={stage.id}
          initial="hidden"
          animate={controls}
          variants={{
            [`visible-${stage.id}`]: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -20 }
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-lavender-strong"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-sm text-muted-text">{stage.text}</span>
        </motion.div>
      ))}
    </div>
  );
}