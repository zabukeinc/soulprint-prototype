import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export default function CompatibilityReading({ onBack }) {
  const [step, setStep] = useState('input');
  const [name, setName] = useState('');
  const [selectedSign, setSelectedSign] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleReveal = () => {
    if (name.trim() && selectedSign) {
      setStep('loading');
      setTimeout(() => {
        setStep('result');
        setTimeout(() => setShowResult(true), 100);
      }, 1800);
    }
  };

  if (step === 'loading') {
    return (
      <div className="h-full flex flex-col items-center justify-center px-5">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.25)'
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl">✦</span>
          </motion.div>
          <p className="font-serif text-ink text-[18px] mb-1">Reading the space between you...</p>
          <p className="text-[12px] text-muted-text">This takes feeling, not just logic</p>
        </motion.div>
      </div>
    );
  }

  if (step === 'result') {
    return (
      <div className="h-full flex flex-col">
        <div className="px-5 pt-6 pb-4 flex-1 overflow-y-auto scrollbar-hide">
          <div className="flex items-center justify-between mb-4">
            <div
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.76)',
                border: '1px solid rgba(31,33,48,0.08)',
                boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
              }}
              onClick={onBack}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="#1F2130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[12px] text-muted-text">Compatibility</span>
            <div className="w-[40px]" />
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-5">
                  <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2">
                    Compatibility Reading
                  </p>
                  <h2 className="font-serif font-medium text-ink" style={{ fontSize: '24px', lineHeight: 1.15 }}>
                    Gy & {name}
                  </h2>
                  <p className="text-[12px] text-muted-text mt-1">Aquarius Sun · {selectedSign}</p>
                </div>

                <div
                  className="rounded-[28px] p-5 mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #DDEDDC, #E8DDFB 55%, #F8DCCB)',
                    border: '1px solid rgba(31,33,48,0.08)',
                    boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="absolute w-[100px] h-[100px] rounded-full opacity-20"
                    style={{ background: 'rgba(255,255,255,0.5)', right: '-30px', top: '-30px' }}
                  />
                  <div className="text-center mb-4 relative z-10">
                    <p className="text-[11px] tracking-[0.1em] text-[#8B72CF] uppercase font-extrabold mb-2">Emotional Match</p>
                    <div className="text-[40px] font-serif font-medium text-ink leading-none mb-1">74%</div>
                    <p className="text-[12px] text-muted-text">Strong potential with room to grow</p>
                  </div>
                  <div className="w-full h-[8px] rounded-full relative z-10" style={{ background: 'rgba(31,33,48,0.06)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #8B72CF, #16A7A0)' }}
                      initial={{ width: '0%' }}
                      animate={{ width: '74%' }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </div>
                </div>

                <div
                  className="rounded-[24px] p-4 mb-3"
                  style={{
                    background: 'rgba(255,255,255,0.78)',
                    border: '1px solid rgba(31,33,48,0.08)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[16px]">🧲</span>
                    <h4 className="text-[14px] font-medium text-ink">What Draws You Together</h4>
                  </div>
                  <p className="text-[13px] text-muted-text leading-[1.5]">
                    {name} brings energy that challenges your caution. You'll feel pulled toward their certainty, and they'll feel grounded by your depth. The attraction isn't just surface — it's two different kinds of intensity finding a rhythm.
                  </p>
                </div>

                <div
                  className="rounded-[24px] p-4 mb-3"
                  style={{
                    background: 'rgba(255,255,255,0.78)',
                    border: '1px solid rgba(31,33,48,0.08)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[16px]">⚡</span>
                    <h4 className="text-[14px] font-medium text-ink">Where Friction Lives</h4>
                  </div>
                  <p className="text-[13px] text-muted-text leading-[1.5]">
                    You process before you respond. They react and then reflect. This timing difference can feel like indifference to you, and like withholding to them. Naming this gap early prevents it from becoming resentment.
                  </p>
                </div>

                <div
                  className="rounded-[24px] p-4 mb-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(221,237,220,0.5), rgba(255,255,255,0.8))',
                    border: '1px solid rgba(31,33,48,0.06)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[16px]">🌱</span>
                    <h4 className="text-[14px] font-medium text-ink">Growth Together</h4>
                  </div>
                  <p className="text-[13px] text-muted-text leading-[1.5]">
                    The best version of this connection isn't about avoiding friction — it's about not going silent when it arrives. If you can both say the hard thing early, this becomes a relationship that deepens with time instead of just continuing.
                  </p>
                </div>

                <div
                  className="rounded-[24px] p-4 mt-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(232,221,251,0.4), rgba(255,255,255,0.8))',
                    border: '1px solid rgba(139,114,207,0.15)'
                  }}
                >
                  <p className="text-[13px] text-ink leading-[1.55] font-medium italic">
                    "Compatibility isn't about being the same. It's about whether you can grow in the same direction without losing yourself."
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-6 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.76)',
              border: '1px solid rgba(31,33,48,0.08)',
              boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
            }}
            onClick={onBack}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="#1F2130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[12px] text-muted-text">Compatibility</span>
          <div className="w-[40px]" />
        </div>

        <div className="text-center mb-6">
          <div
            className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #DDEDDC, #9FD9D0)',
              boxShadow: '0 8px 24px rgba(22,167,160,0.2)'
            }}
          >
            <span className="text-lg">🔗</span>
          </div>
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-1">Decode Chemistry</p>
          <h2 className="font-serif font-medium text-ink" style={{ fontSize: '24px', lineHeight: 1.15 }}>
            How do you two connect?
          </h2>
          <p className="text-[13px] text-muted-text leading-[1.5] mt-2 max-w-[260px] mx-auto">
            Enter their name and zodiac sign. We'll show you what happens when your patterns meet theirs.
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-[12px] font-bold text-ink mb-2">Their name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jordan"
            className="w-full px-4 py-3 rounded-[16px] text-[14px] text-ink placeholder-muted-text/50 outline-none"
            style={{
              background: 'rgba(255,255,255,0.78)',
              border: '1px solid rgba(31,33,48,0.08)'
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-[12px] font-bold text-ink mb-2">Their zodiac sign</label>
          <div className="grid grid-cols-4 gap-2">
            {zodiacSigns.map((sign) => (
              <button
                key={sign}
                onClick={() => setSelectedSign(sign)}
                className="py-2 px-1 rounded-[12px] text-[11px] font-bold transition-all"
                style={{
                  background: selectedSign === sign
                    ? 'linear-gradient(135deg, #8B72CF, #16A7A0)'
                    : 'rgba(255,255,255,0.72)',
                  color: selectedSign === sign ? 'white' : '#7A7C8C',
                  border: selectedSign === sign ? 'none' : '1px solid rgba(31,33,48,0.08)'
                }}
              >
                {sign}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleReveal}
          disabled={!name.trim() || !selectedSign}
          className="w-full min-h-[48px] rounded-full px-6 font-extrabold text-sm text-white"
          style={{
            background: name.trim() && selectedSign
              ? 'linear-gradient(135deg, #8B72CF, #16A7A0)'
              : 'rgba(139,114,207,0.3)',
            boxShadow: name.trim() && selectedSign ? '0 8px 24px rgba(139,114,207,0.2)' : 'none'
          }}
        >
          Reveal Compatibility
        </button>
      </div>
    </div>
  );
}