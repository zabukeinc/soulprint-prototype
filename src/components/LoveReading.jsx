import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const insights = [
  {
    title: 'Your Attachment Style',
    emoji: '🪢',
    content: 'You lean toward secure-anxious. You want closeness deeply, but you monitor it. You\'re loyal to a fault, but you rehearse abandonment when things feel too stable.',
  },
  {
    title: 'How You Give Love',
    emoji: '💝',
    content: 'Through noticing. You remember the small things. Not grand gestures — quiet consistencies. You show love by being emotionally present even when you\'re tired.',
  },
  {
    title: 'What You Actually Need',
    emoji: '🌱',
    content: 'Emotional consistency over intensity. You don\'t need someone to prove their love dramatically. You need them to show up the same way tomorrow.',
  },
  {
    title: 'Your Love Trigger',
    emoji: '⚡',
    content: 'Silence. When someone pulls away without explanation, your mind fills in the worst version. It\'s not distrust — it\'s emotional memory trying to protect you.',
  },
  {
    title: 'Your Growth Edge',
    emoji: '🧭',
    content: 'Asking for what you need before resentment builds. You often wait until you\'re sure it\'s "worth asking" — but the asking itself is what makes it worth it.',
  },
];

export default function LoveReading({ onBack }) {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);

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
          <span className="text-[12px] text-muted-text">Love Pattern</span>
          <div className="w-[40px]" />
        </div>

        <div className="text-center mb-5">
          <div
            className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #F4C7D2, #E8DDFB)',
              boxShadow: '0 8px 24px rgba(244,199,210,0.3)'
            }}
          >
            <span className="text-lg">💕</span>
          </div>
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-1">
            Love Pattern Reading
          </p>
          <h2 className="font-serif font-medium text-ink" style={{ fontSize: '24px', lineHeight: 1.15 }}>
            How you love, and what you need in return
          </h2>
        </div>

        <div
          className="rounded-[28px] p-5 mb-4"
          style={{
            background: 'linear-gradient(135deg, #F4C7D2, #E8DDFB 55%, #DDEDDC)',
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
          <p className="text-[13px] text-ink leading-[1.6] relative z-10 font-medium">
            You don't need constant attention. You need emotional consistency. A single thoughtful check-in means more to you than hours of presence. When someone remembers what you only mentioned once — that's when you feel most seen.
          </p>
        </div>

        <div className="space-y-3">
          {insights.map((insight, i) => {
            const isRevealed = i <= revealedIndex;
            return (
              <motion.div
                key={insight.title}
                initial={false}
                animate={{ opacity: isRevealed ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {isRevealed ? (
                  <div
                    className="rounded-[24px] p-4"
                    style={{
                      background: 'rgba(255,255,255,0.78)',
                      border: '1px solid rgba(31,33,48,0.08)'
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[16px]">{insight.emoji}</span>
                      <h4 className="text-[14px] font-medium text-ink">{insight.title}</h4>
                    </div>
                    <p className="text-[13px] text-muted-text leading-[1.5]">{insight.content}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setRevealedIndex(i)}
                    className="w-full rounded-[24px] p-4 text-left"
                    style={{
                      background: 'rgba(255,255,255,0.5)',
                      border: '1px solid rgba(31,33,48,0.06)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[14px]">🔒</span>
                      <h4 className="text-[14px] font-medium text-muted-text">{insight.title}</h4>
                    </div>
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {revealedIndex >= insights.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 mb-4"
          >
            <div
              className="rounded-[24px] p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(221,237,220,0.5), rgba(255,255,255,0.8))',
                border: '1px solid rgba(31,33,48,0.06)'
              }}
            >
              <p className="text-[11px] text-muted-text mb-2">Did this feel close to you?</p>
              <div className="flex gap-2">
                {['Yes, surprisingly', 'A little', 'Not really'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFeedback(opt)}
                    className={`flex-1 py-2 px-1 rounded-full text-[10px] font-medium transition-all ${
                      feedback === opt
                        ? 'text-white'
                        : 'bg-[rgba(255,255,255,0.78)] text-muted-text border border-[rgba(31,33,48,0.08)]'
                    }`}
                    style={feedback === opt ? { background: 'linear-gradient(135deg, #8B72CF, #16A7A0)' } : {}}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}