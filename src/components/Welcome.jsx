import { motion } from 'framer-motion';
import ProgressDots from './ProgressDots';
import { IllustrationLogo, IllustrationMood } from './Illustrations';

export default function Welcome({ onNext }) {
  return (
    <div className="h-full flex flex-col px-5 pt-12 pb-6">
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <IllustrationLogo />
        </motion.div>
        
        <div className="text-center mb-6">
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3">
            Welcome to your inner map
          </p>
          <h1 
            className="font-serif font-medium tracking-[-0.05em] text-ink mb-4"
            style={{ fontSize: 'clamp(34px, 8vw, 52px)', lineHeight: 0.95 }}
          >
            Soulprint
          </h1>
          <p className="text-sm text-muted-text leading-[1.65] max-w-[280px] mx-auto">
            A gentle space to understand your patterns, your emotional rhythm, and the parts of yourself that are still learning how to be heard.
          </p>
        </div>
        
        <motion.div 
          className="rounded-[28px] p-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'rgba(255,255,255,0.78)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
          }}
        >
          <h4 className="text-sm font-medium text-ink mb-2">Before we begin</h4>
          <p className="text-[12px] text-soft-muted leading-[1.45]">
            We will ask a few simple questions to shape your first reading. Nothing here is about judging you. It is about helping the app speak to you more personally.
          </p>
        </motion.div>
      </div>
      
      <div>
        <button 
          onClick={onNext}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 14px 30px rgba(139,114,207,0.22)'
          }}
        >
          Begin gently
        </button>
        <ProgressDots total={3} current={0} />
      </div>
    </div>
  );
}