import { motion } from 'framer-motion';

export default function MoodSelector({ options, selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <motion.button
            key={option}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(option)}
            className={`py-4 px-4 rounded-2xl text-sm font-medium transition-all duration-200
              ${isSelected 
                ? 'bg-lavender-strong text-white shadow-warm' 
                : 'bg-white/80 text-ink shadow-warm hover:bg-white'
              }`}
          >
            {option}
          </motion.button>
        );
      })}
    </div>
  );
}