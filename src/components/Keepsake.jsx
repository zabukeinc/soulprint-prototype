import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTier } from '../context/TierContext';

const filters = ['All', 'Insights', 'Cards', 'Readings'];

const allItems = [
  {
    id: 1,
    type: 'Insight',
    category: 'insights',
    icon: '✦',
    gradient: 'linear-gradient(145deg, #E8DDFB, #DDEDDC)',
    title: 'Free Soulprint Snapshot',
    subtitle: 'Today · Emotional pattern',
    preview: 'You process deeply before you explain. Your stillness is not distance.',
    date: 'Today',
    locked: false,
  },
  {
    id: 2,
    type: 'Card',
    category: 'cards',
    icon: '💕',
    gradient: 'linear-gradient(145deg, #F4C7D2, #E8DDFB)',
    title: 'Love Pattern Card',
    subtitle: 'Saved share card',
    preview: 'You don\'t need constant attention. You need emotional consistency.',
    date: 'Today',
    locked: false,
  },
  {
    id: 3,
    type: 'Insight',
    category: 'insights',
    icon: '🌊',
    gradient: 'linear-gradient(145deg, #F8DCCB, #F7D875)',
    title: 'Daily Signal · Clarity vs Heart',
    subtitle: 'Morning insight',
    preview: 'Your mind wants clarity, but your heart needs emotional evidence.',
    date: 'Yesterday',
    locked: false,
  },
  {
    id: 4,
    type: 'Card',
    category: 'cards',
    icon: '🌿',
    gradient: 'linear-gradient(145deg, #DDEDDC, #9FD9D0)',
    title: 'Archetype Card',
    subtitle: 'The Quiet Strategist',
    preview: 'You understand the room before you explain yourself.',
    date: '2 days ago',
    locked: false,
  },
  {
    id: 5,
    type: 'Reading',
    category: 'readings',
    icon: '☆',
    gradient: 'linear-gradient(145deg, rgba(232,221,251,0.6), rgba(255,255,255,0.8))',
    title: 'Full Soulprint',
    subtitle: 'Complete reading',
    preview: 'Your complete emotional blueprint — Shadow Self, Career Energy, Growth Direction, and 12-Month Theme.',
    date: null,
    locked: true,
  },
  {
    id: 6,
    type: 'Reading',
    category: 'readings',
    icon: '💕',
    gradient: 'linear-gradient(145deg, rgba(244,199,210,0.5), rgba(255,255,255,0.7))',
    title: 'Love Pattern Reading',
    subtitle: 'Attachment and safety',
    preview: 'How you seek closeness, what safety looks like to you, and your love triggers.',
    date: null,
    locked: true,
  },
  {
    id: 7,
    type: 'Reading',
    category: 'readings',
    icon: '🔗',
    gradient: 'linear-gradient(145deg, rgba(221,237,220,0.5), rgba(255,255,255,0.7))',
    title: 'Compatibility Reading',
    subtitle: 'Chemistry with someone',
    preview: 'What draws you together, where friction lives, and how you grow together.',
    date: null,
    locked: true,
  },
];

export default function Keepsake({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const { isPremium } = useTier();

  const filtered = activeFilter === 'All'
    ? allItems
    : allItems.filter((item) => item.category === activeFilter.toLowerCase());

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="mb-4">
          <p className="text-[12px] text-muted-text tracking-wide">Saved</p>
          <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Keepsake</h2>
        </div>

        <p className="text-[13px] text-muted-text leading-[1.55] mb-4">
          Your private library. Reflections, cards, and readings that felt true.
        </p>

        <div className="flex gap-2 mb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-3 py-1.5 rounded-full text-[11px] font-bold"
              style={{
                background: activeFilter === filter
                  ? 'linear-gradient(135deg, #8B72CF, #16A7A0)'
                  : 'rgba(255,255,255,0.72)',
                color: activeFilter === filter ? 'white' : '#7A7C8C',
                border: activeFilter === filter ? 'none' : '1px solid rgba(31,33,48,0.08)',
                transition: 'background 0.2s, color 0.2s, border 0.2s'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-[10px]">
          {filtered.map((item) => {
            const isLocked = item.locked && !isPremium;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[22px] border p-4"
                style={{
                  background: isLocked
                    ? 'linear-gradient(145deg, rgba(232,221,251,0.4), rgba(255,255,255,0.6))'
                    : item.locked
                      ? 'rgba(255,255,255,0.9)'
                      : 'rgba(255,255,255,0.74)',
                  border: isLocked
                    ? '1px solid rgba(139,114,207,0.18)'
                    : '1px solid rgba(31,33,48,0.08)',
                  boxShadow: '0 8px 18px rgba(99,82,60,0.05)',
                  opacity: isLocked ? 0.65 : 1,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                    style={{ background: item.gradient }}
                  >
                    <span className="text-[16px]">{isLocked ? '🔒' : item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h4 className="text-[14px] font-medium text-ink">{item.title}</h4>
                      {isLocked && (
                        <span
                          className="text-[10px] font-extrabold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            background: 'rgba(255,255,255,0.52)',
                            border: '1px solid rgba(139,114,207,0.18)',
                            color: '#7A63BD'
                          }}
                        >
                          Locked
                        </span>
                      )}
                      {!isLocked && item.locked && (
                        <span
                          className="text-[10px] font-extrabold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            background: 'rgba(22,167,160,0.1)',
                            color: '#16A7A0'
                          }}
                        >
                          ✦ Open
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-text mb-1">{item.subtitle}</p>
                    {(isLocked || !item.locked) && (
                      <p className="text-[12px] text-ink/70 leading-[1.4] line-clamp-2">{item.preview}</p>
                    )}
                    {item.date && (
                      <p className="text-[10px] text-muted-text/60 mt-1">{item.date}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {!isPremium && (
          <button
            onClick={() => onNavigate && onNavigate('pricing')}
            className="w-full rounded-[24px] p-4 mt-4 font-medium text-sm text-center text-white"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.2)'
            }}
          >
            ✦ Unlock all saved readings
          </button>
        )}

        <div
          className="rounded-[28px] p-5 mt-4"
          style={{
            background: 'rgba(232,221,251,0.3)',
            border: '1px solid rgba(31,33,48,0.08)'
          }}
        >
          <p className="text-[12px] text-center" style={{ color: '#7A7C8C' }}>
            <span className="font-medium text-ink">Your keepsake is a growing mirror.</span> Every reflection you save adds depth to how the app reads you.
          </p>
          <p className="text-[11px] text-center text-muted-text mt-1">{filtered.length} items saved</p>
        </div>
      </div>
    </div>
  );
}