import { useTier } from '../context/TierContext';

const moodEmojis = {
  Steady: '💛',
  Emotional: '🌊',
  Restless: '⚡',
  Numb: '🧊',
};

function getLast7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en', { weekday: 'short' });
    const dayNum = d.getDate();
    days.push({ date: dateStr, dayName, dayNum });
  }
  return days;
}

export default function Mirror({ onNavigate, engagement }) {
  const { isPremium } = useTier();
  const streak = engagement?.streak || 0;
  const reflections = engagement?.journalEntries || [];
  const moodHistory = engagement?.moodHistory || [];
  const reflectionsCount = engagement?.reflections || 0;

  const last7 = getLast7Days();

  const moodByDate = {};
  moodHistory.forEach((m) => {
    moodByDate[m.date] = m.mood;
  });

  const reflectionByDate = {};
  reflections.forEach((r) => {
    reflectionByDate[r.date] = r;
  });

  const recentMoods = moodHistory.slice(0, 7);
  const moodCounts = {};
  recentMoods.forEach((m) => {
    moodCounts[m.mood] = (moodCounts[m.mood] || 0) + 1;
  });
  const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="mb-4">
          <p className="text-[12px] text-muted-text tracking-wide">Growth</p>
          <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Mirror</h2>
        </div>

        <p className="text-[13px] text-muted-text leading-[1.55] mb-5">
          Your patterns, reflected back. This is where you see what's shifting.
        </p>

        <div
          className="rounded-[28px] p-5 mb-4"
          style={{
            background: streak > 1
              ? 'linear-gradient(135deg, rgba(247,216,117,0.25), rgba(248,220,203,0.3))'
              : 'linear-gradient(135deg, #E7DDFC, #DCF0E3 55%, #F8DCCB)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            className="absolute w-[100px] h-[100px] rounded-full opacity-20"
            style={{ background: 'rgba(255,255,255,0.5)', right: '-20px', top: '-20px' }}
          />
          <div className="relative z-10">
            <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2">
              {streak > 1 ? `${streak}-day streak` : 'Your reflection arc'}
            </p>
            <h3
              className="font-serif text-ink mb-2"
              style={{ fontSize: '22px', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              {streak > 2
                ? "You're building something real."
                : streak > 0
                  ? 'Every reflection counts.'
                  : 'Start your first reflection today.'}
            </h3>
            <p className="text-[12px] text-soft-muted">
              {reflectionsCount > 0
                ? `${reflectionsCount} reflection${reflectionsCount !== 1 ? 's' : ''} saved. ${3 - reflectionsCount > 0 ? `${3 - reflectionsCount} more to unlock a deep reading.` : 'You\'ve unlocked a deep reading!'}`
                : 'Write your first journal entry on the Today page.'}
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[14px] font-bold text-ink">This week</span>
            <span className="text-[12px] text-muted-text">{reflectionsCount} reflection{reflectionsCount !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex gap-2">
            {last7.map((day) => {
              const hasReflection = !!reflectionByDate[day.date];
              const hasMood = !!moodByDate[day.date];
              const mood = moodByDate[day.date];
              return (
                <div key={day.date} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className="w-full aspect-square rounded-[14px] flex flex-col items-center justify-center"
                    style={{
                      background: hasReflection
                        ? 'linear-gradient(135deg, #8B72CF, #16A7A0)'
                        : hasMood
                          ? 'rgba(22,167,160,0.15)'
                          : 'rgba(31,33,48,0.04)',
                      border: hasReflection
                        ? 'none'
                        : '1px solid rgba(31,33,48,0.06)',
                    }}
                  >
                    {hasReflection ? (
                      <span className="text-[14px]">✓</span>
                    ) : hasMood ? (
                      <span className="text-[14px]">{moodEmojis[mood] || '·'}</span>
                    ) : (
                      <span className="text-[14px] text-muted-text/30">·</span>
                    )}
                  </div>
                  <span className="text-[10px] text-muted-text">{day.dayName}</span>
                </div>
              );
            })}
          </div>
        </div>

        {topMood && moodHistory.length > 1 && (
          <div
            className="rounded-[24px] p-4 mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(221,237,220,0.4), rgba(255,255,255,0.7))',
              border: '1px solid rgba(31,33,48,0.06)'
            }}
          >
            <p className="text-[11px] tracking-[0.1em] text-[#16A7A0] uppercase font-extrabold mb-1">Pattern shift</p>
            <p className="text-[13px] text-ink leading-[1.5]">
              You've felt <span className="font-medium">{topMood[0]}</span> {topMood[1]} time{topMood[1] !== 1 ? 's' : ''} recently. {topMood[0] === 'Steady' ? 'That grounded energy is something to name and trust.' : topMood[0] === 'Emotional' ? 'When feelings surface, they carry information worth noting.' : topMood[0] === 'Restless' ? 'Something is asking for your attention. Sit with it before chasing it.' : 'Numbness is a signal too. Your body may be asking for rest.'}
            </p>
          </div>
        )}

        {reflections.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px] font-bold text-ink">Your reflections</span>
              <span className="text-[12px] text-muted-text">{reflections.length} saved</span>
            </div>
            <div className="space-y-[10px] mb-4">
              {reflections.slice(0, 5).map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-[22px] border p-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(221,237,220,0.2), rgba(255,255,255,0.7))',
                    border: '1px solid rgba(22,167,160,0.12)',
                    boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(145deg, #DDEDDC, #9FD9D0)' }}
                    >
                      <span className="text-[14px]">📝</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-[13px] font-medium text-ink">{entry.prompt}</p>
                        <span
                          className="text-[10px] font-extrabold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: 'rgba(22,167,160,0.1)', color: '#16A7A0' }}
                        >
                          You
                        </span>
                      </div>
                      <p className="text-[12px] text-ink/70 leading-[1.4] line-clamp-2">{entry.text}</p>
                      <p className="text-[10px] text-muted-text/60 mt-1">{entry.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] font-bold text-ink">Saved</span>
        </div>
        <div className="space-y-[10px] mb-4">
          <div
            className="rounded-[22px] border p-4"
            style={{
              background: 'rgba(255,255,255,0.74)',
              border: '1px solid rgba(31,33,48,0.08)',
              boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(145deg, #E8DDFB, #DDEDDC)' }}
              >
                <span className="text-[14px]">✦</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium text-ink">Free Soulprint Snapshot</p>
                <p className="text-[11px] text-muted-text">Your first mirror</p>
              </div>
              <span className="text-muted-text text-[12px]">→</span>
            </div>
          </div>

          <div
            className="rounded-[22px] border p-4"
            style={{
              background: isPremium
                ? 'rgba(255,255,255,0.9)'
                : 'linear-gradient(145deg, rgba(232,221,251,0.4), rgba(255,255,255,0.6))',
              border: isPremium
                ? '1px solid rgba(31,33,48,0.08)'
                : '1px solid rgba(139,114,207,0.18)',
              boxShadow: '0 8px 18px rgba(99,82,60,0.05)',
              opacity: isPremium ? 1 : 0.65,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(145deg, rgba(232,221,251,0.6), rgba(255,255,255,0.8))' }}
              >
                <span className="text-[14px]">{isPremium ? '✦' : '🔒'}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-medium text-ink">Full Soulprint</p>
                  {!isPremium && (
                    <span
                      className="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.52)', border: '1px solid rgba(139,114,207,0.18)', color: '#7A63BD' }}
                    >
                      Locked
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-text">Complete emotional blueprint</p>
              </div>
            </div>
          </div>
        </div>

        {!isPremium && (
          <button
            onClick={() => onNavigate && onNavigate('pricing')}
            className="w-full rounded-[24px] p-4 font-medium text-sm text-center text-white"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.2)'
            }}
          >
            ✦ Unlock your full Mirror
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
            <span className="font-medium text-ink">Your mirror grows with you.</span> Every reflection adds depth to how the app reads your pattern.
          </p>
        </div>
      </div>
    </div>
  );
}