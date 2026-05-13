import { Heart, Users, Hand, Star, Lock } from 'lucide-react';
import { useTier } from '../context/TierContext';

const features = [
  {
    id: 'soulprint',
    icon: Star,
    title: 'Full Soulprint',
    description: 'Your complete emotional blueprint.',
    price: '$9',
    gradient: 'linear-gradient(145deg, #E8DDFB, #F8DCCB)',
  },
  {
    id: 'love',
    icon: Heart,
    title: 'Love Pattern',
    description: 'How you seek safety and closeness.',
    price: '$7',
    gradient: 'linear-gradient(145deg, #F4C7D2, #E8DDFB)',
  },
  {
    id: 'compatibility',
    icon: Users,
    title: 'Compatibility',
    description: 'Decode chemistry with someone.',
    price: '$9',
    gradient: 'linear-gradient(145deg, #DDEDDC, #DFF2EC)',
  },
  {
    id: 'palm',
    icon: Hand,
    title: 'Palm Reading',
    description: 'Coming soon, privacy-first.',
    price: 'Soon',
    gradient: 'linear-gradient(145deg, rgba(255,255,255,0.6), rgba(255,255,255,0.8))',
    locked: true,
  },
];

export default function Decode({ onNavigate }) {
  const { isPremium } = useTier();

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[12px] text-muted-text tracking-wide">Explore</p>
            <h2 className="font-serif font-medium text-ink" style={{ fontSize: '28px' }}>Decode</h2>
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

        <h3
          className="font-serif font-medium text-ink mb-2"
          style={{ fontSize: '22px', lineHeight: 1.15 }}
        >
          What do you want to understand next?
        </h3>
        <p className="text-[13px] text-muted-text leading-[1.55] mb-5">
          {isPremium
            ? 'All readings are unlocked. Choose what feels most alive right now.'
            : 'Unlock deeper readings when a question keeps returning.'}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] font-bold text-ink">Available Readings</span>
          <span className="text-[11px] px-2.5 py-1 rounded-full font-bold" style={{ background: isPremium ? 'rgba(22,167,160,0.12)' : 'rgba(139,114,207,0.12)', color: isPremium ? '#16A7A0' : '#7A63BD' }}>
            {isPremium ? 'Unlocked' : 'Premium'}
          </span>
        </div>

        <div className="space-y-[10px]">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isLocked = feature.locked || (!isPremium && feature.id !== 'soulprint');

            if (feature.locked) {
              return (
                <div
                  key={feature.id}
                  className="rounded-[24px] border p-4 flex items-center gap-3 opacity-60"
                  style={{
                    background: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(31,33,48,0.06)'
                  }}
                >
                  <div
                    className="w-[44px] h-[44px] rounded-[18px] flex items-center justify-center"
                    style={{ background: feature.gradient }}
                  >
                    <span className="text-lg">🔒</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] font-medium text-ink">{feature.title}</h4>
                    <p className="text-[12px] text-muted-text leading-[1.35]">{feature.description}</p>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.52)', color: '#7A7C8C' }}>Soon</span>
                </div>
              );
            }

            if (isLocked) {
              return (
                <button
                  key={feature.id}
                  onClick={() => onNavigate('pricing')}
                  className="w-full rounded-[24px] border p-4 flex items-center gap-3 text-left"
                  style={{
                    background: 'linear-gradient(145deg, rgba(232,221,251,0.5), rgba(255,255,255,0.6))',
                    border: '1px solid rgba(139,114,207,0.15)',
                    opacity: 0.75
                  }}
                >
                  <div
                    className="w-[44px] h-[44px] rounded-[18px] flex items-center justify-center flex-shrink-0"
                    style={{ background: feature.gradient }}
                  >
                    <Lock size={18} className="text-[#7A63BD]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] font-medium text-ink">{feature.title}</h4>
                    <p className="text-[12px] text-muted-text leading-[1.35]">{feature.description}</p>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.52)', border: '1px solid rgba(139,114,207,0.18)', color: '#7A63BD' }}>
                    {feature.price}
                  </span>
                </button>
              );
            }

            return (
              <button
                key={feature.id}
                onClick={() => onNavigate(feature.id)}
                className="w-full rounded-[24px] border p-4 flex items-center gap-3 text-left"
                style={{
                  background: 'rgba(255,255,255,0.74)',
                  border: '1px solid rgba(31,33,48,0.08)',
                  boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
                }}
              >
                <div
                  className="w-[44px] h-[44px] rounded-[18px] flex items-center justify-center flex-shrink-0"
                  style={{ background: feature.gradient }}
                >
                  <Icon size={20} className="text-ink" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-medium text-ink">{feature.title}</h4>
                  <p className="text-[12px] text-muted-text leading-[1.35]">{feature.description}</p>
                </div>
                <span className="text-[12px] font-extrabold flex-shrink-0" style={{ color: '#16A7A0' }}>
                  Open
                </span>
              </button>
            );
          })}
        </div>

        {!isPremium && (
          <button
            onClick={() => onNavigate('pricing')}
            className="w-full rounded-[24px] p-4 mt-4 font-medium text-sm text-center text-white"
            style={{
              background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
              boxShadow: '0 8px 24px rgba(139,114,207,0.2)'
            }}
          >
            ✦ Unlock all readings
          </button>
        )}
      </div>
    </div>
  );
}