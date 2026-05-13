import { useState } from 'react';
import { motion } from 'framer-motion';

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function getTimeEmoji() {
  const hour = new Date().getHours();
  if (hour < 6) return '🌙';
  if (hour < 12) return '☀️';
  if (hour < 17) return '🌤';
  if (hour < 21) return '🌆';
  return '🌙';
}

const moods = [
  { emoji: '💛', label: 'Steady' },
  { emoji: '🌊', label: 'Emotional' },
  { emoji: '⚡', label: 'Restless' },
  { emoji: '🧊', label: 'Numb' },
];

const moodResponses = {
  Steady: "You're grounded today. A good day to reflect on what's working — and trust it.",
  Emotional: "Your feelings are close to the surface. That's not a flaw — it's information.",
  Restless: "Something wants your attention. Don't chase the answer — sit with the question.",
  Numb: "Numbness is still a signal. Your body may be asking for rest, not distraction.",
};

export default function Today({ onNavigate }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [expandedJournal, setExpandedJournal] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[12px] text-muted-text">{getTimeGreeting()} {getTimeEmoji()}</p>
            <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Gy</h2>
          </div>
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-extrabold text-[13px]"
            style={{
              background: 'linear-gradient(135deg, #16A7A0, #8EDBD0)',
              boxShadow: '0 12px 28px rgba(22,167,160,0.22)'
            }}
          >
            G
          </div>
        </div>

        <div className="mb-4">
          <p className="text-[13px] font-medium text-ink mb-2">How are you feeling right now?</p>
          <div className="flex gap-2">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className="flex-1 py-2 px-1 rounded-[16px] text-center"
                style={{
                  background: selectedMood === mood.label
                    ? 'linear-gradient(135deg, #8B72CF, #16A7A0)'
                    : 'rgba(255,255,255,0.72)',
                  border: selectedMood === mood.label
                    ? 'none'
                    : '1px solid rgba(31,33,48,0.08)',
                  boxShadow: selectedMood === mood.label
                    ? '0 8px 20px rgba(139,114,207,0.2)'
                    : 'none',
                  transition: 'background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s'
                }}
              >
                <span className="block text-[18px] mb-0.5">{mood.emoji}</span>
                <span
                  className="block text-[10px] font-bold"
                  style={{
                    color: selectedMood === mood.label ? 'white' : '#7A7C8C',
                    transition: 'color 0.2s'
                  }}
                >
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {selectedMood && (
          <div className="mb-4">
            <div
              className="rounded-[20px] p-3"
              style={{
                background: 'linear-gradient(135deg, rgba(139,114,207,0.12), rgba(22,167,160,0.08))',
                border: '1px solid rgba(139,114,207,0.15)'
              }}
            >
              <motion.p
                key={selectedMood}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[12px] text-ink leading-[1.5]"
              >
                {moodResponses[selectedMood]}
              </motion.p>
            </div>
          </div>
        )}

        <div
          className="rounded-[28px] p-5 mb-4"
          style={{
            background: 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            className="absolute w-[150px] h-[150px] rounded-full right-[-44px] top-[-50px]"
            style={{ background: 'rgba(255,255,255,0.28)' }}
          />
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3 relative z-10">
            Today's Signal
          </p>
          <h3
            className="font-serif text-ink mb-3 relative z-10"
            style={{ fontSize: '22px', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            Your mind wants clarity, but your heart needs emotional evidence.
          </h3>
          <p className="text-[12px] text-soft-muted relative z-10">
            A calm day for naming what you usually keep private.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] font-bold text-ink">Today's Energy</span>
          </div>
          <div className="flex gap-2">
            <div
              className="flex-1 rounded-[20px] p-3 text-center"
              style={{
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(31,33,48,0.08)',
                boxShadow: '0 8px 16px rgba(99,82,60,0.05)'
              }}
            >
              <div className="w-full h-[6px] rounded-full mb-2" style={{ background: 'rgba(31,33,48,0.06)' }}>
                <div className="h-full rounded-full" style={{ width: '72%', background: 'linear-gradient(90deg, #8B72CF, #16A7A0)' }} />
              </div>
              <strong className="block text-[13px] text-ink mb-0.5">Calm</strong>
              <span className="text-[10px] text-muted-text">emotional weather</span>
            </div>
            <div
              className="flex-1 rounded-[20px] p-3 text-center"
              style={{
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(31,33,48,0.08)',
                boxShadow: '0 8px 16px rgba(99,82,60,0.05)'
              }}
            >
              <div className="w-full h-[6px] rounded-full mb-2" style={{ background: 'rgba(31,33,48,0.06)' }}>
                <div className="h-full rounded-full" style={{ width: '85%', background: 'linear-gradient(90deg, #E8A87C, #F7D875)' }} />
              </div>
              <strong className="block text-[13px] text-ink mb-0.5">Direct</strong>
              <span className="text-[10px] text-muted-text">best move</span>
            </div>
            <div
              className="flex-1 rounded-[20px] p-3 text-center"
              style={{
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(31,33,48,0.08)',
                boxShadow: '0 8px 16px rgba(99,82,60,0.05)'
              }}
            >
              <div className="w-full h-[6px] rounded-full mb-2" style={{ background: 'rgba(31,33,48,0.06)' }}>
                <div className="h-full rounded-full" style={{ width: '40%', background: 'linear-gradient(90deg, #F4C7D2, #8B72CF)' }} />
              </div>
              <strong className="block text-[13px] text-ink mb-0.5">Testing</strong>
              <span className="text-[10px] text-muted-text">avoid</span>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <p className="text-[11px] tracking-[0.1em] text-[#8B72CF] uppercase font-extrabold mb-2">One Insight For You</p>
          <div
            className="rounded-[24px] p-4"
            style={{
              background: 'linear-gradient(135deg, rgba(232,221,251,0.5), rgba(255,255,255,0.8))',
              border: '1px solid rgba(139,114,207,0.18)'
            }}
          >
            <p className="text-[13px] text-ink leading-[1.5] font-medium">
              "The pattern you keep avoiding addressing is the one running your decisions."
            </p>
            <p className="text-[11px] text-muted-text mt-1">— for Aquarius Sun, Life Path 7</p>
          </div>
        </div>

        <div
          className="rounded-[24px] border p-4 mb-3 cursor-pointer"
          onClick={() => setExpandedJournal(!expandedJournal)}
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[14px] font-medium text-ink">Journal Prompt</h4>
            <motion.span
              animate={{ rotate: expandedJournal ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-muted-text text-[12px]"
            >
              ▾
            </motion.span>
          </div>
          {!expandedJournal && (
            <p className="text-[13px] text-muted-text mt-1">
              What do I need but avoid asking for?
            </p>
          )}
        </div>

        {expandedJournal && (
          <div className="mb-3">
            <div
              className="rounded-[24px] p-4"
              style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(139,114,207,0.15)',
                boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
              }}
            >
              <p className="text-[14px] font-medium text-ink mb-2">What do I need but avoid asking for?</p>
              <textarea
                className="w-full bg-transparent text-[13px] text-muted-text placeholder-muted-text/50 outline-none resize-none"
                rows={3}
                placeholder="Start typing your reflection..."
                style={{ border: 'none' }}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] text-muted-text">Saved only for you</span>
                <button
                  className="px-4 py-1.5 rounded-full text-[12px] font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #8B72CF, #16A7A0)' }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        <div
          className="rounded-[24px] border p-4 mb-3"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <h4 className="text-[14px] font-medium text-ink mb-1">Best Move Today</h4>
          <p className="text-[13px] text-muted-text">Say the thing before it becomes resentment.</p>
        </div>

        <button
          onClick={() => onNavigate('soulprint')}
          className="w-full rounded-[24px] border p-4 flex items-center gap-4"
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <div
            className="w-[44px] h-[44px] rounded-[18px] flex items-center justify-center"
            style={{
              background: 'linear-gradient(145deg, #E8DDFB, #DDEDDC)',
              border: '1px solid rgba(31,33,48,0.06)'
            }}
          >
            <span className="text-lg">✦</span>
          </div>
          <div className="flex-1 text-left">
            <p className="text-[14px] font-medium text-ink">View your Soulprint</p>
            <p className="text-[12px] text-muted-text">Your complete emotional blueprint</p>
          </div>
          <span className="text-muted-text">→</span>
        </button>
      </div>
    </div>
  );
}