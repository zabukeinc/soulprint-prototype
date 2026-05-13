import { useState, useEffect } from 'react';

const STORAGE_KEY = 'soulprint_engagement';

const DEFAULT_STATE = {
  streak: 0,
  lastCheckIn: null,
  journalEntries: [],
  moodHistory: [],
  unlockedReadings: [],
  reflections: 0,
};

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function getYesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...DEFAULT_STATE, ...JSON.parse(saved) };
  } catch {}
  return { ...DEFAULT_STATE };
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function useEngagement() {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const checkInToday = () => {
    const today = getToday();
    if (state.lastCheckIn === today) return state;

    let newStreak = state.streak;
    if (state.lastCheckIn === getYesterday()) {
      newStreak = state.streak + 1;
    } else if (state.lastCheckIn !== today) {
      newStreak = 1;
    }

    const newState = { ...state, streak: newStreak, lastCheckIn: today };
    setState(newState);
    return newState;
  };

  const addJournalEntry = (text) => {
    const entry = {
      id: Date.now(),
      text,
      date: getToday(),
      prompt: 'What do I need but avoid asking for?',
    };
    const newState = {
      ...state,
      journalEntries: [entry, ...state.journalEntries],
      reflections: state.reflections + 1,
    };
    setState(newState);
    return newState;
  };

  const addMood = (mood) => {
    const entry = {
      mood,
      date: getToday(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    const newState = {
      ...state,
      moodHistory: [entry, ...state.moodHistory],
    };
    setState(newState);
    return newState;
  };

  const unlockReading = (readingId) => {
    if (state.unlockedReadings.includes(readingId)) return state;
    const newState = {
      ...state,
      unlockedReadings: [...state.unlockedReadings, readingId],
    };
    setState(newState);
    return newState;
  };

  const canUnlock = (requiredReflections = 3) => {
    return state.reflections >= requiredReflections;
  };

  const reflectionsNeeded = (required = 3) => {
    return Math.max(0, required - state.reflections);
  };

  const getStreakDays = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const dayName = d.toLocaleDateString('en', { weekday: 'short' }).charAt(0);
      const hadCheckIn = state.moodHistory.some(m => m.date === dateStr);
      days.push({ date: dateStr, day: dayName, active: hadCheckIn });
    }
    return days;
  };

  return {
    ...state,
    checkInToday,
    addJournalEntry,
    addMood,
    unlockReading,
    canUnlock,
    reflectionsNeeded,
    getStreakDays,
  };
}