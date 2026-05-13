import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  {
    id: 'emotional',
    emoji: '🌊',
    title: 'Emotional Blueprint',
    subtitle: 'How you process what you feel',
    gradient: 'linear-gradient(145deg, #F8DCCB, #F7D875)',
    content: {
      core: 'You process intensity privately. By the time you express something, you\'ve already thought it through three times. This isn\'t avoidance — it\'s your way of protecting the moment from half-formed reactions.',
      pattern: 'You tend to go quiet when overwhelmed. Not because you\'re shutting down, but because you\'re filtering. People close to you might mistake your stillness for distance.',
      insight: 'Your emotional processing is not slower than others — it\'s more thorough. You hold complexity well, but you carry it alone sometimes.',
      trigger: 'When someone asks "are you okay?" before you\'ve finished deciding the answer, it can feel like being interrupted mid-sentence.',
      affirmation: 'Your depth is not a delay. It\'s a design.',
    }
  },
  {
    id: 'love',
    emoji: '💕',
    title: 'Love Pattern',
    subtitle: 'The rhythm behind closeness and safety',
    gradient: 'linear-gradient(145deg, #F4C7D2, #E8DDFB)',
    content: {
      core: 'You don\'t need constant attention. You need emotional consistency. A single thoughtful check-in means more to you than hours of presence.',
      pattern: 'You track small behavioral shifts — not to control, but because your emotional memory is precise. You notice when the tone changes before anyone says anything.',
      insight: 'Your love language is being seen in the details. You feel most connected when someone remembers something you only mentioned once.',
      trigger: 'Silence that feels intentional is harder for you than honest distance. Being left to guess erodes your sense of safety faster than conflict.',
      affirmation: 'You don\'t ask for much. You ask for meaning.',
    }
  },
  {
    id: 'shadow',
    emoji: '✦',
    title: 'Shadow Self',
    subtitle: 'What you hide even from your own language',
    gradient: 'linear-gradient(145deg, #E8DDFB, #DDEDDC)',
    content: {
      core: 'You sometimes use understanding as a shield. If you can explain why someone hurt you, you don\'t have to feel the hurt. Your self-awareness can become a form of emotional armor.',
      pattern: 'You say "I understand" before you say "I\'m hurt." You compress pain into insight so it feels manageable. But understanding doesn\'t always mean processing.',
      insight: 'The part of you that doesn\'t get expressed isn\'t weak — it\'s the part that hasn\'t found safe enough ground yet.',
      trigger: 'You may resent people who don\'t reciprocate your emotional labor, but you rarely say so. Instead, you pull back quietly and call it boundaries.',
      affirmation: 'You are allowed to not understand. You are allowed to just feel.',
    }
  },
  {
    id: 'career',
    emoji: '🧭',
    title: 'Career Energy',
    subtitle: 'Where you thrive when work aligns with who you are',
    gradient: 'linear-gradient(145deg, #DDEDDC, #DFF2EC)',
    content: {
      core: 'You work best when the purpose is clear and the stakes are real. Titles and structure matter less to you than meaning. You\'d rather be trusted than managed.',
      pattern: 'You can over-deliver in roles that feel aligned and quietly disengage when they don\'t. Your motivation is internal — external pressure only works temporarily.',
      insight: 'Your ideal work environment has three things: autonomy, ethical clarity, and room to think before responding. Remove any one, and you start looking elsewhere.',
      trigger: 'Being micromanaged or asked to perform tasks that contradict your values drains you faster than long hours ever could.',
      affirmation: 'You don\'t need a boss. You need a mission worth your attention.',
    }
  },
  {
    id: 'growth',
    emoji: '🌱',
    title: 'Growth Direction',
    subtitle: 'What to nurture — and what to stop performing',
    gradient: 'linear-gradient(145deg, #F7D875, #F8DCCB)',
    content: {
      core: 'Your growth this year isn\'t about doing more. It\'s about admitting what you already know but haven\'t said yet. The real shift comes when you stop translating your needs for other people\'s comfort.',
      pattern: 'You tend to grow in private and announce progress only when it\'s tidy. The messy middle — the part where you\'re uncertain — is where the real transformation lives.',
      insight: 'Your greatest growth periods have come after a quiet decision you didn\'t announce. Trust that pattern again.',
      trigger: 'You may resist growth that requires visibility. Being seen in transition feels vulnerable in a way that contradicts your desire to appear composed.',
      affirmation: 'You don\'t have to arrive polished. Growth is supposed to be messy.',
    }
  },
  {
    id: 'theme',
    emoji: '🌙',
    title: '12-Month Theme',
    subtitle: 'The overarching direction your year wants to take',
    gradient: 'linear-gradient(145deg, #9FD9D0, #DDEDDC)',
    content: {
      core: 'Your year is asking you to stop waiting for permission to take up emotional space. The theme is "visible growth" — not loud growth, but growth that you stop hiding.',
      pattern: 'This year, the relationships that deepen will be the ones where you say the second thing — the thing after "I\'m fine." The first answer is your reflex. The second is your truth.',
      insight: 'Watch for a recurring moment this year: the pause where you almost say something and don\'t. That pause is your year\'s invitation.',
      trigger: 'You may feel a pull to retreat into what\'s comfortable around months 4 and 9. Those are checkpoints, not setbacks. Rest, but don\'t reverse.',
      affirmation: 'This year is not about becoming someone new. It\'s about letting someone you already are stop hiding.',
    }
  },
];

export default function DeepSoulprint({ onBack, onNavigate }) {
  const [expandedId, setExpandedId] = useState(null);

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
          <span className="text-[12px] text-muted-text">Deep Soulprint</span>
          <div className="w-[40px]" />
        </div>

        <div className="mb-5">
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-1">
            Full Breakdown
          </p>
          <h1 className="font-serif font-medium text-ink" style={{ fontSize: '26px', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
            The Quiet Strategist
          </h1>
          <p className="text-[13px] text-muted-text leading-[1.5] mt-2">
            Six dimensions of your emotional blueprint. Each one reveals a different layer of how you move through the world.
          </p>
        </div>

        <div className="space-y-3">
          {sections.map((section) => {
            const isExpanded = expandedId === section.id;
            return (
              <div key={section.id}>
                <button
                  onClick={() => setExpandedId(isExpanded ? null : section.id)}
                  className="w-full rounded-[24px] p-4 text-left"
                  style={{
                    background: isExpanded
                      ? 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)'
                      : 'rgba(255,255,255,0.74)',
                    border: isExpanded
                      ? '1px solid rgba(139,114,207,0.18)'
                      : '1px solid rgba(31,33,48,0.08)',
                    boxShadow: isExpanded
                      ? '0 12px 30px rgba(139,114,207,0.12)'
                      : '0 8px 18px rgba(99,82,60,0.05)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-[40px] h-[40px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                      style={{ background: section.gradient }}
                    >
                      <span className="text-lg">{section.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[14px] font-medium text-ink">{section.title}</h4>
                      <p className="text-[12px] text-muted-text">{section.subtitle}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted-text text-[12px]"
                    >
                      ▾
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-1 px-1">
                        <div className="space-y-3">
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
                              background: 'rgba(248,220,203,0.3)',
                              border: '1px solid rgba(31,33,48,0.06)'
                            }}
                          >
                            <p className="text-[11px] tracking-[0.1em] text-muted-text uppercase font-extrabold mb-1">Watch For</p>
                            <p className="text-[13px] text-muted-text leading-[1.55]">{section.content.trigger}</p>
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => onNavigate('snapshot')}
          className="w-full py-3 mt-4 mb-3 text-[14px] font-extrabold text-[#8B72CF] text-center"
        >
          View Free Snapshot
        </button>
      </div>
    </div>
  );
}