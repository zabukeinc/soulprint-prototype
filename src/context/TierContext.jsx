import { createContext, useContext, useState } from 'react';

const TierContext = createContext({
  isPremium: false,
  toggleTier: () => {},
});

export function TierProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);
  const toggleTier = () => setIsPremium(prev => !prev);

  return (
    <TierContext.Provider value={{ isPremium, toggleTier }}>
      {children}
    </TierContext.Provider>
  );
}

export function useTier() {
  return useContext(TierContext);
}