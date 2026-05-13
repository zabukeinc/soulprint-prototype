import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

function getDayIndex() {
  return (new Date().getDate() + new Date().getMonth()) % 7;
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

const dailySignals = [
  { title: "Your mind wants clarity, but your heart needs emotional evidence.", sub: "A calm day for naming what you usually keep private." },
  { title: "The thing you're avoiding mentioning is the thing that needs saying.", sub: "Directness serves you better than politeness today." },
  { title: "You've been holding space for others. Today, hold some for yourself.", sub: "Your energy is a resource — check if you're running low." },
  { title: "A small decision today carries more weight than you think.", sub: "Pay attention to the quiet pull, not the loud push." },
  { title: "Your pattern of over-giving looks like kindness, but it's self-erasure.", sub: "Notice where you say yes when you mean maybe." },
  { title: "Today rewards stillness more than action.", sub: "You don't have to respond to everything immediately." },
  { title: "Someone's reaction to you isn't about you. It's about their pattern.", sub: "A good day to observe without absorbing." },
];

const dailyInsights = [
  '"The pattern you keep avoiding addressing is the one running your decisions."',
  '"You don\'t need more information. You need more honesty with yourself."',
  '"Your comfort zone isn\'t safe — it\'s just familiar."',
  '"The way you process silence says more about you than the way you process noise."',
  '"What you\'re afraid to say is what someone needs to hear."',
  '"Rest is not the opposite of productivity. It\'s the foundation."',
  '"You keep waiting for permission that only you can give."',
];

const dailyMoves = [
  { move: 'Say the thing before it becomes resentment.', label: 'Best Move' },
  { move: 'Ask for what you need without apologizing.', label: 'Best Move' },
  { move: 'Let one expectation go that isn\'t yours.', label: 'Best Move' },
  { move: 'Name the feeling instead of analyzing it.', label: 'Best Move' },
  { move: 'Choose one boundary and hold it gently.', label: 'Best Move' },
  { move: 'Respond, don\'t react. The pause is the power.', label: 'Best Move' },
  { move: 'Write down the thing you keep replaying.', label: 'Best Move' },
];

const journalPrompts = [
  'What do I need but avoid asking for?',
  'What pattern keeps showing up that I keep ignoring?',
  'If I were honest with myself right now, what would I say?',
  'What am I performing today that I don\'t actually want to do?',
  'What would I do differently if I wasn\'t afraid of being seen?',
  'What emotion have I been sitting on all week?',
  'What would the person I\'m becoming do right now?',
];

export default function Today({ onNavigate, engagement }) {
  const dayIdx = getDayIndex();
  const [selectedMood, setSelectedMood] = useState(engagement?.moodHistory?.[0]?.mood || null);
  const [expandedJournal, setExpandedJournal] = useState(false);
  const [journalText, setJournalText] = useState('');
  const [journalSaved, setJournalSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (engagement) engagement.checkInToday();
  }, []);

  const signal = dailySignals[dayIdx];
  const insight = dailyInsights[dayIdx];
  const move = dailyMoves[dayIdx];
  const prompt = journalPrompts[dayIdx];
  const streak = engagement?.streak || 0;
  const lastReflection = engagement?.journalEntries?.[0];
  const reflectionsCount = engagement?.reflections || 0;

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    if (engagement) engagement.addMood(mood);
  };

  const handleSaveJournal = () => {
    if (journalText.trim() && engagement) {
      engagement.addJournalEntry(journalText);
      setJournalSaved(true);
      const newCount = engagement.reflections + 1;
      if (newCount >= 3) {
        setToastMessage('Reflection saved — you unlocked a deep reading!');
      } else {
        setToastMessage(`${3 - newCount} more reflection${3 - newCount !== 1 ? 's' : ''} to unlock your next reading`);
      }
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mb-4"
            >
              <div
                className="rounded-[20px] px-4 py-3 flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
                  boxShadow: '0 8px 24px rgba(139,114,207,0.25)'
                }}
              >
                <span className="text-[18px]">✓</span>
                <p className="text-[13px] text-white font-medium flex-1">{toastMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[12px] text-muted-text">{getTimeGreeting()} {getTimeEmoji()}</p>
            <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Gy</h2>
          </div>
          <div className="flex items-center gap-2">
            {streak > 0 && (
              <div
                className="px-2.5 py-1 rounded-full flex items-center gap-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(247,216,117,0.3), rgba(248,220,203,0.3))',
                  border: '1px solid rgba(247,216,117,0.4)'
                }}
              >
                <span className="text-[12px]">🔥</span>
                <span className="text-[11px] font-bold text-ink">{streak}</span>
              </div>
            )}
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
        </div>

        <div className="mb-4">
          <p className="text-[13px] font-medium text-ink mb-2">How are you feeling right now?</p>
          <div className="flex gap-2">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => handleMoodSelect(mood.label)}
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
            {signal.title}
          </h3>
          <p className="text-[12px] text-soft-muted relative z-10">
            {signal.sub}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] font-bold text-ink">This week</span>
            <div className="flex gap-1">
              {engagement?.getStreakDays?.()?.map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <div
                    className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center text-[10px]"
                    style={{
                      background: day.active
                        ? 'linear-gradient(135deg, #8B72CF, #16A7A0)'
                        : 'rgba(31,33,48,0.06)',
                      color: day.active ? 'white' : '#A7A1A0',
                      fontWeight: 700
                    }}
                  >
                    {day.day}
                  </div>
                </div>
              ))}
            </div>
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

        {streak > 1 && (
          <div
            className="rounded-[20px] p-3 mb-3 flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(247,216,117,0.2), rgba(248,220,203,0.2))',
              border: '1px solid rgba(247,216,117,0.3)'
            }}
          >
            <span className="text-[20px]">🔥</span>
            <div className="flex-1">
              <p className="text-[13px] font-medium text-ink">{streak}-day reflection streak</p>
              <p className="text-[11px] text-muted-text">You're building something real. Keep going.</p>
            </div>
          </div>
        )}

        {lastReflection && !expandedJournal && (
          <div
            className="rounded-[20px] p-3 mb-3"
            style={{
              background: 'linear-gradient(135deg, rgba(221,237,220,0.3), rgba(255,255,255,0.6))',
              border: '1px solid rgba(31,33,48,0.06)'
            }}
          >
            <p className="text-[10px] tracking-[0.1em] text-[#16A7A0] uppercase font-extrabold mb-1">Last reflection</p>
            <p className="text-[12px] text-ink leading-[1.4] line-clamp-2">"{lastReflection.text}"</p>
            <p className="text-[10px] text-muted-text mt-1">{lastReflection.date}</p>
          </div>
        )}

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
              {insight}
            </p>
            <p className="text-[11px] text-muted-text mt-1">— for Aquarius Sun, Life Path 7</p>
          </div>
        </div>

        <div
          className="rounded-[24px] border p-4 mb-3 cursor-pointer"
          onClick={() => { if (!expandedJournal) setExpandedJournal(true); }}
          style={{
            background: 'rgba(255,255,255,0.74)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[14px] font-medium text-ink">Journal Prompt</h4>
            {!expandedJournal && (
              <motion.span
                animate={{ rotate: 0 }}
                className="text-muted-text text-[12px]"
              >
                ▾
              </motion.span>
            )}
          </div>
          {!expandedJournal && (
            <p className="text-[13px] text-muted-text mt-1">
              {prompt}
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
              <p className="text-[14px] font-medium text-ink mb-2">{prompt}</p>
              {journalSaved ? (
                <div className="py-4 text-center">
                  <p className="text-[14px] font-medium text-ink mb-1">✓ Saved</p>
                  <p className="text-[12px] text-muted-text">
                    {engagement?.reflections >= 3
                      ? 'You\'ve unlocked a deep reading!'
                      : `${3 - reflectionsCount} more reflection${3 - reflectionsCount !== 1 ? 's' : ''} to unlock your next reading`
                    }
                  </p>
                </div>
              ) : (
                <>
                  <textarea
                    className="w-full bg-transparent text-[13px] text-ink placeholder-muted-text/50 outline-none resize-none"
                    rows={3}
                    placeholder="Start typing your reflection..."
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    style={{ border: 'none' }}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[11px] text-muted-text">Saved only for you</span>
                    <button
                      onClick={handleSaveJournal}
                      disabled={!journalText.trim()}
                      className="px-4 py-1.5 rounded-full text-[12px] font-bold text-white"
                      style={{
                        background: journalText.trim()
                          ? 'linear-gradient(135deg, #8B72CF, #16A7A0)'
                          : 'rgba(139,114,207,0.3)',
                      }}
                    >
                      Save
                    </button>
                  </div>
                </>
              )}
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
          <h4 className="text-[14px] font-medium text-ink mb-1">{move.label}</h4>
          <p className="text-[13px] text-muted-text">{move.move}</p>
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