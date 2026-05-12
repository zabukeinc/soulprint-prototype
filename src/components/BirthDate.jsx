import { useState } from 'react';
import { motion } from 'framer-motion';
import SoftMascot from './SoftMascot';
import ProgressDots from './ProgressDots';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 100 }, (_, i) => 2024 - i);

export default function BirthDate({ onNext, onBack }) {
  const [day, setDay] = useState(27);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2000);
  
  const selectedDate = `${day} / ${month.toString().padStart(2, '0')} / ${year}`;
  
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
        <span className="text-[12px] text-muted-text">1 of 6</span>
      </div>
      
      <motion.div 
        className="rounded-[32px] p-5 mb-5 flex gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(145deg, #FFFDF7, #E8DDFB 52%, #DDEDDC)',
          border: '1px solid rgba(31,33,48,0.08)',
          boxShadow: '0 12px 30px rgba(99, 82, 60, 0.09)',
          minHeight: '140px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div className="flex-1">
          <p className="text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-2">Your first layer</p>
          <h3 className="font-serif font-medium tracking-[-0.045em] text-ink mb-1" style={{ fontSize: '22px', lineHeight: 1.12 }}>
            When did your story begin?
          </h3>
          <p className="text-[12px] text-soft-muted leading-[1.4]">
            Your birth date helps us read your solar pattern.
          </p>
        </div>
        <div className="flex-shrink-0">
          <SoftMascot mood="curious" size="small" />
        </div>
        <div 
          className="absolute w-[80px] h-[80px] rounded-full opacity-30"
          style={{ background: 'rgba(247,216,117,0.4)', right: '-20px', bottom: '-30px' }}
        />
      </motion.div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-text mb-2 uppercase tracking-wider text-center">Day</span>
            <select
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="w-full appearance-none rounded-2xl py-4 px-3 text-center text-ink font-medium text-lg bg-white/80 border border-[rgba(31,33,48,0.08)] cursor-pointer"
              style={{ boxShadow: '0 8px 18px rgba(99,82,60,0.05)' }}
            >
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-text mb-2 uppercase tracking-wider text-center">Month</span>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="w-full appearance-none rounded-2xl py-4 px-3 text-center text-ink font-medium text-lg bg-white/80 border border-[rgba(31,33,48,0.08)] cursor-pointer"
              style={{ boxShadow: '0 8px 18px rgba(99,82,60,0.05)' }}
            >
              {months.map((m) => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-text mb-2 uppercase tracking-wider text-center">Year</span>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full appearance-none rounded-2xl py-4 px-3 text-center text-ink font-medium text-lg bg-white/80 border border-[rgba(31,33,48,0.08)] cursor-pointer"
              style={{ boxShadow: '0 8px 18px rgba(99,82,60,0.05)' }}
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
        
        <motion.div 
          className="text-center rounded-2xl p-5"
          key={selectedDate}
          initial={{ opacity: 0.8, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: 'linear-gradient(135deg, rgba(232,221,251,0.5), rgba(255,255,255,0.8))',
            border: '1px solid rgba(139,114,207,0.2)'
          }}
        >
          <p className="text-[11px] text-muted-text uppercase tracking-wider mb-1">Selected date</p>
          <p className="font-serif text-2xl font-medium text-ink">{selectedDate}</p>
        </motion.div>
      </div>
      
      <div>
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
        <ProgressDots total={6} current={0} />
      </div>
    </div>
  );
}