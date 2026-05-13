import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTier } from '../context/TierContext';

const sections = [
  {
    id: 'emotional',
    emoji: '🌊',
    title: 'Emotional Blueprint',
    subtitle: 'How you process what you feel',
    gradient: 'linear-gradient(145deg, #F8DCCB, #F7D875)',
    preview: 'You process intensity privately. By the time you express something, you\'ve already thought it through three times.',
    content: {
      core: 'You process intensity privately. By the time you express something, you\'ve already thought it through three times. This isn\'t avoidance — it\'s your way of protecting the moment from half-formed reactions.',
      pattern: 'You tend to go quiet when overwhelmed. Not because you\'re shutting down, but because you\'re filtering. People close to you might mistake your stillness for distance.',
      insight: 'Your emotional processing is not slower than others — it\'s more thorough. You hold complexity well, but you carry it alone sometimes.',
      affirmation: 'Your depth is not a delay. It\'s a design.',
    }
  },
  {
    id: 'love',
    emoji: '💕',
    title: 'Love Pattern',
    subtitle: 'The rhythm behind closeness and safety',
    gradient: 'linear-gradient(145deg, #F4C7D2, #E8DDFB)',
    preview: 'You don\'t need constant attention. You need emotional consistency. Silence that feels intentional worries you.',
    content: {
      core: 'You don\'t need constant attention. You need emotional consistency. A single thoughtful check-in means more to you than hours of presence.',
      pattern: 'You track small behavioral shifts — not to control, but because your emotional memory is precise. You notice when the tone changes before anyone says anything.',
      insight: 'Your love language is being seen in the details. You feel most connected when someone remembers something you only mentioned once.',
      affirmation: 'You don\'t ask for much. You ask for meaning.',
    }
  },
  {
    id: 'shadow',
    emoji: '✦',
    title: 'Shadow Self',
    subtitle: 'What you hide even from your own language',
    gradient: 'linear-gradient(145deg, #E8DDFB, #DDEDDC)',
    preview: 'You sometimes use understanding as a shield. If you can explain why someone hurt you, you don\'t have to feel the hurt.',
    locked: true,
    content: {
      core: 'You sometimes use understanding as a shield. If you can explain why someone hurt you, you don\'t have to feel the hurt. Your self-awareness can become a form of emotional armor.',
      pattern: 'You say "I understand" before you say "I\'m hurt." You compress pain into insight so it feels manageable. But understanding doesn\'t always mean processing.',
      insight: 'The part of you that doesn\'t get expressed isn\'t weak — it\'s the part that hasn\'t found safe enough ground yet.',
      affirmation: 'You are allowed to not understand. You are allowed to just feel.',
    }
  },
  {
    id: 'career',
    emoji: '🧭',
    title: 'Career Energy',
    subtitle: 'Where you thrive when work aligns with who you are',
    gradient: 'linear-gradient(145deg, #DDEDDC, #DFF2EC)',
    preview: 'You work best when the purpose is clear and the stakes are real. Titles and structure matter less than meaning.',
    locked: true,
    content: {
      core: 'You work best when the purpose is clear and the stakes are real. Titles and structure matter less to you than meaning. You\'d rather be trusted than managed.',
      pattern: 'You can over-deliver in roles that feel aligned and quietly disengage when they don\'t. Your motivation is internal — external pressure only works temporarily.',
      insight: 'Your ideal work environment has three things: autonomy, ethical clarity, and room to think before responding. Remove any one, and you start looking elsewhere.',
      affirmation: 'You don\'t need a boss. You need a mission worth your attention.',
    }
  },
  {
    id: 'growth',
    emoji: '🌱',
    title: 'Growth Direction',
    subtitle: 'What to nurture — and what to stop performing',
    gradient: 'linear-gradient(145deg, #F7D875, #F8DCCB)',
    preview: 'Your growth this year isn\'t about doing more. It\'s about admitting what you already know but haven\'t said yet.',
    locked: true,
    content: {
      core: 'Your growth this year isn\'t about doing more. It\'s about admitting what you already know but haven\'t said yet. The real shift comes when you stop translating your needs for other people\'s comfort.',
      pattern: 'You tend to grow in private and announce progress only when it\'s tidy. The messy middle — the part where you\'re uncertain — is where the real transformation lives.',
      insight: 'Your greatest growth periods have come after a quiet decision you didn\'t announce. Trust that pattern again.',
      affirmation: 'You don\'t have to arrive polished. Growth is supposed to be messy.',
    }
  },
  {
    id: 'theme',
    emoji: '🌙',
    title: '12-Month Theme',
    subtitle: 'The overarching direction your year wants to take',
    gradient: 'linear-gradient(145deg, #9FD9D0, #DDEDDC)',
    preview: 'Your year is asking you to stop waiting for permission to take up emotional space.',
    locked: true,
    content: {
      core: 'Your year is asking you to stop waiting for permission to take up emotional space. The theme is "visible growth" — not loud growth, but growth that you stop hiding.',
      pattern: 'This year, the relationships that deepen will be the ones where you say the second thing — the thing after "I\'m fine." The first answer is your reflex. The second is your truth.',
      insight: 'Watch for a recurring moment this year: the pause where you almost say something and don\'t. That pause is your year\'s invitation.',
      affirmation: 'This year is not about becoming someone new. It\'s about letting someone you already are stop hiding.',
    }
  },
];

export default function Soulprint({ onNavigate }) {
  const [expandedId, setExpandedId] = useState(null);
  const { isPremium } = useTier();

  const toggleSection = (id, isLocked) => {
    if (isLocked && !isPremium) return;
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-[12px] text-muted-text tracking-wide">Your identity map</p>
            <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Gy's Soulprint</h2>
          </div>
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.76)',
              border: '1px solid rgba(31,33,48,0.08)',
              boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
            }}
          >
            <span className="text-lg">✦</span>
          </div>
        </div>

        <p className="text-[13px] text-muted-text leading-[1.55] mb-5">
          We see you, Gy. Here's what your emotional blueprint looks like — the patterns that shape how you connect, decide, and grow.
        </p>

        <div
          className="rounded-[28px] p-5 mb-5"
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
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2 relative z-10">
            Core Archetype
          </p>
          <h2
            className="font-serif font-medium text-ink mb-2 relative z-10"
            style={{ fontSize: '28px', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            The Quiet Strategist
          </h2>
          <p className="text-sm text-muted-text mb-4 relative z-10">
            You process deeply, move carefully, and often understand the room before you explain yourself.
          </p>
          <div className="flex flex-wrap gap-2 relative z-10">
            {['Aquarius Sun', 'Life Path 7', 'Love Focus'].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full text-[12px] font-bold"
                style={{
                  background: 'rgba(255,255,255,0.56)',
                  border: '1px solid rgba(31,33,48,0.08)',
                  color: '#6C5F99'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] font-bold text-ink">Your Blueprint</span>
          <span className="text-[12px] text-muted-text">{isPremium ? 'Tap to explore' : '2 of 6 unlocked'}</span>
        </div>

        <div className="space-y-3">
          {sections.map((section) => {
            const isExpanded = expandedId === section.id;
            const isLocked = section.locked && !isPremium;

            return (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id, section.locked)}
                  className="w-full rounded-[24px] p-4 text-left"
                  style={{
                    background: isLocked
                      ? 'linear-gradient(145deg, rgba(232,221,251,0.5), rgba(255,255,255,0.6))'
                      : isExpanded
                        ? 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)'
                        : 'rgba(255,255,255,0.74)',
                    border: isLocked
                      ? '1px solid rgba(139,114,207,0.15)'
                      : isExpanded
                        ? '1px solid rgba(139,114,207,0.18)'
                        : '1px solid rgba(31,33,48,0.08)',
                    boxShadow: isLocked
                      ? 'none'
                      : isExpanded
                        ? '0 12px 30px rgba(139,114,207,0.12)'
                        : '0 8px 18px rgba(99,82,60,0.05)',
                    opacity: isLocked ? 0.65 : 1
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-[40px] h-[40px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                      style={{ background: section.gradient }}
                    >
                      <span className="text-lg">{isLocked ? '🔒' : section.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-medium text-ink">{section.title}</h4>
                      {isLocked ? (
                        <p className="text-[12px] text-muted-text leading-[1.35]">Unlock with Premium to reveal this pattern.</p>
                      ) : !isExpanded ? (
                        <p className="text-[12px] text-muted-text leading-[1.35] truncate">{section.preview}</p>
                      ) : (
                        <p className="text-[11px] text-[#8B72CF] font-extrabold">{section.subtitle}</p>
                      )}
                    </div>
                    {isLocked && (
                      <span
                        className="text-[10px] font-extrabold px-2 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: 'rgba(255,255,255,0.52)',
                          border: '1px solid rgba(139,114,207,0.18)',
                          color: '#7A63BD'
                        }}
                      >
                        Locked
                      </span>
                    )}
                    {!isLocked && (
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-text text-[12px] flex-shrink-0"
                      >
                        ▾
                      </motion.span>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && !isLocked && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-1 px-1 space-y-2">
                        <div
                          className="rounded-[20px] p-4"
                          style={{
                            background: 'rgba(255,255,255,0.92)',
                            border: '1px solid rgba(31,33,48,0.06)'
                          }}
                        >
                          <p className="text-[11px] tracking-[0.1em] text-[#8B72CF] uppercase font-extrabold mb-1">Core Pattern</p>
                          <p className="text-[13px] text-ink leading-[1.55]">{section.content.core}</p>
                        </div>
                        <div
                          className="rounded-[20px] p-4"
                          style={{
                            background: 'rgba(255,255,255,0.72)',
                            border: '1px solid rgba(31,33,48,0.06)'
                          }}
                        >
                          <p className="text-[11px] tracking-[0.1em] text-muted-text uppercase font-extrabold mb-1">How It Shows</p>
                          <p className="text-[13px] text-muted-text leading-[1.55]">{section.content.pattern}</p>
                        </div>
                        <div
                          className="rounded-[20px] p-4"
                          style={{
                            background: 'linear-gradient(135deg, rgba(232,221,251,0.4), rgba(255,255,255,0.8))',
                            border: '1px solid rgba(139,114,207,0.12)'
                          }}
                        >
                          <p className="text-[11px] tracking-[0.1em] text-[#8B72CF] uppercase font-extrabold mb-1">Hidden Insight</p>
                          <p className="text-[13px] text-ink leading-[1.55]">{section.content.insight}</p>
                        </div>
                        <div
                          className="rounded-[20px] p-4"
                          style={{
                            background: 'linear-gradient(135deg, rgba(221,237,220,0.5), rgba(255,255,255,0.8))',
                            border: '1px solid rgba(31,33,48,0.06)'
                          }}
                        >
                          <p className="text-[11px] tracking-[0.1em] text-[#16A7A0] uppercase font-extrabold mb-1">Your Affirmation</p>
                          <p className="text-[13px] text-ink font-medium leading-[1.55] italic">"{section.content.affirmation}"</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {!isPremium && (
          <button
            onClick={() => onNavigate('pricing')}
            className="w-full rounded-[24px] p-4 font-medium text-sm text-center mt-4 mb-3"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.2)',
              color: 'white'
            }}
          >
            ✦ Unlock your full Soulprint
          </button>
        )}

        <button
          onClick={() => onNavigate('snapshot')}
          className="w-full py-3 mb-3 text-[14px] font-extrabold text-[#8B72CF] text-center"
        >
          View Free Snapshot
        </button>
      </div>
    </div>
  );
}