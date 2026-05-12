import { useState } from 'react';
import { motion } from 'framer-motion';
import SoftMascot from './SoftMascot';
import ProgressDots from './ProgressDots';
import { IllustrationMood } from './Illustrations';
import { Search, MapPin } from 'lucide-react';

const cities = [
  { name: 'Bandung, Indonesia', flag: '🇮🇩', vibe: 'warm' },
  { name: 'Jakarta, Indonesia', flag: '🇮🇩', vibe: 'calm' },
  { name: 'Surabaya, Indonesia', flag: '🇮🇩', vibe: 'bright' },
  { name: 'Bali, Indonesia', flag: '🇮🇩', vibe: 'warm' },
  { name: 'Yogyakarta, Indonesia', flag: '🇮🇩', vibe: 'deep' },
  { name: 'New York, USA', flag: '🇺🇸', vibe: 'bright' },
  { name: 'Los Angeles, USA', flag: '🇺🇸', vibe: 'calm' },
  { name: 'London, UK', flag: '🇬🇧', vibe: 'deep' },
  { name: 'Tokyo, Japan', flag: '🇯🇵', vibe: 'calm' },
  { name: 'Sydney, Australia', flag: '🇦🇺', vibe: 'bright' },
];

export default function LocationStep({ onNext, onBack }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);
  
  const filteredCities = cities.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const selectedCity = cities[selected];
  
  return (
    <div className="h-full flex flex-col px-5 pt-10 pb-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.76)',
            border: '1px solid rgba(31,33,48,0.08)',
            boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#1F2130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[12px] text-muted-text">3 of 6</span>
      </div>
      
      <motion.div 
        className="rounded-[32px] p-5 mb-5 flex gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(145deg, #FFFDF7, #E8DDFB 52%, #DDEDDC)',
          border: '1px solid rgba(31,33,48,0.08)',
          boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
          minHeight: '160px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div className="flex-1">
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3">Place matters</p>
          <h3 className="font-serif font-medium tracking-[-0.045em] text-ink mb-2" style={{ fontSize: '22px', lineHeight: 1.12 }}>
            Where were you born?
          </h3>
          <p className="text-[12px] text-soft-muted leading-[1.45]">
            Location grounds your reading in context.
          </p>
        </div>
        <div className="flex-shrink-0">
          <IllustrationMood mood={selectedCity.vibe} />
        </div>
        <div 
          className="absolute w-[100px] h-[100px] rounded-full opacity-30"
          style={{ background: 'rgba(247,216,117,0.4)', right: '-30px', bottom: '-40px' }}
        />
      </motion.div>
      
      <div className="flex-shrink-0">
        <div 
          className="flex items-center gap-3 rounded-[20px] border p-4 mb-4"
          style={{
            borderColor: 'rgba(31,33,48,0.08)',
            background: 'rgba(255,255,255,0.74)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <Search size={18} className="text-muted-text" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search city or country"
            className="flex-1 text-sm text-ink bg-transparent border-none outline-none placeholder:text-muted-text/50"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <motion.div 
          className="rounded-[20px] p-4 mb-3 flex items-center gap-3"
          key={selected}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          style={{
            background: 'linear-gradient(135deg, rgba(232,221,251,0.9), rgba(255,255,255,0.9))',
            border: '2px solid rgba(139,114,207,0.3)',
            boxShadow: '0 8px 18px rgba(99,82,60,0.05)'
          }}
        >
          <span className="text-2xl">{selectedCity.flag}</span>
          <div className="flex-1">
            <p className="text-[12px] text-muted-text mb-0.5">Selected</p>
            <p className="text-sm font-bold text-ink">{selectedCity.name}</p>
          </div>
          <MapPin size={18} className="text-[#8B72CF]" />
        </motion.div>
        
        <div className="space-y-2">
          {filteredCities.map((city, index) => (
            <motion.button
              key={city.name}
              onClick={() => setSelected(cities.indexOf(city))}
              whileTap={{ scale: 0.98 }}
              className={`w-full rounded-[24px] border p-4 text-left transition-all flex items-center gap-3 ${
                selected === cities.indexOf(city)
                  ? 'border-[rgba(139,114,207,0.35)] bg-[linear-gradient(145deg,rgba(232,221,251,0.98),rgba(255,255,255,0.74))]'
                  : 'border-[rgba(31,33,48,0.08)] bg-[rgba(255,255,255,0.72)]'
              }`}
              style={{
                boxShadow: '0 8px 18px rgba(99,82,60,0.04)'
              }}
            >
              <span className="text-xl">{city.flag}</span>
              <span className="text-sm font-medium text-ink">{city.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="pt-4">
        <button 
          onClick={onNext}
          className="w-full min-h-[54px] rounded-full px-6 font-extrabold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #8B72CF, #16A7A0)',
            boxShadow: '0 14px 30px rgba(139,114,207,0.22)'
          }}
        >
          Continue
        </button>
        <ProgressDots total={6} current={2} />
      </div>
    </div>
  );
}