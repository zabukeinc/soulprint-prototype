import { Heart, Users, Hand, Star } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Full Soulprint',
    description: 'Your complete emotional blueprint.',
    price: '$9',
  },
  {
    icon: Heart,
    title: 'Love Pattern',
    description: 'How you seek safety and closeness.',
    price: '$7',
  },
  {
    icon: Users,
    title: 'Compatibility',
    description: 'Decode chemistry with someone.',
    price: '$9',
  },
  {
    icon: Hand,
    title: 'Palm Reading',
    description: 'Coming soon, privacy-first.',
    price: 'Soon',
    locked: true,
  },
];

export default function Decode() {
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
          style={{ fontSize: '24px', lineHeight: 1.12 }}
        >
          What do you want to understand next?
        </h3>
        <p className="text-sm text-muted-text leading-[1.55] mb-4">
          Unlock deeper readings when a question keeps returning.
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] font-bold text-ink">Available Readings</span>
          <span className="text-[12px] text-muted-text">Premium</span>
        </div>
        
        <div className="space-y-[10px]">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="rounded-[24px] border p-4 flex items-center gap-3"
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
                  {feature.locked ? (
                    <span className="text-lg">🔒</span>
                  ) : (
                    <Icon size={20} className="text-ink" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-medium text-ink">{feature.title}</h4>
                  <p className="text-[12px] text-muted-text leading-[1.35]">{feature.description}</p>
                </div>
                <span className="text-[12px] font-extrabold" style={{ color: '#6C5F99', whiteSpace: 'nowrap' }}>
                  {feature.price}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}