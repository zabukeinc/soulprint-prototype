import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';

import Welcome from './components/Welcome';
import BirthDate from './components/BirthDate';
import BirthTime from './components/BirthTime';
import LocationStep from './components/LocationStep';
import Mbti from './components/Mbti';
import FocusMood from './components/FocusMood';
import Generating from './components/Generating';
import Today from './components/Today';
import Soulprint from './components/Soulprint';
import Snapshot from './components/Snapshot';
import ShareCard from './components/ShareCard';
import Decode from './components/Decode';
import Archive from './components/Archive';
import Profile from './components/Profile';

const onboardingFlow = [
  'welcome',
  'birthDate',
  'birthTime',
  'location',
  'mbti',
  'focusMood',
  'generating',
];

const mainAppTabs = ['today', 'soulprint', 'decode', 'archive', 'profile'];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showNav, setShowNav] = useState(false);
  
  const navigate = (screen) => {
    if (mainAppTabs.includes(screen)) {
      setShowNav(true);
    }
    setCurrentScreen(screen);
  };
  
  const handleNext = () => {
    const currentIndex = onboardingFlow.indexOf(currentScreen);
    if (currentIndex < onboardingFlow.length - 1) {
      const nextScreen = onboardingFlow[currentIndex + 1];
      setCurrentScreen(nextScreen);
    }
  };
  
  const handleGeneratingComplete = () => {
    setShowNav(true);
    navigate('today');
  };
  
  const handleBack = () => {
    if (currentScreen === 'snapshot' || currentScreen === 'shareCard') {
      setCurrentScreen('soulprint');
    } else {
      const currentIndex = onboardingFlow.indexOf(currentScreen);
      if (currentIndex > 0) {
        setCurrentScreen(onboardingFlow[currentIndex - 1]);
      } else if (currentIndex === 0) {
        setCurrentScreen('welcome');
      }
    }
  };
  
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <Welcome onNext={handleNext} />;
      case 'birthDate':
        return <BirthDate onNext={handleNext} onBack={handleBack} />;
      case 'birthTime':
        return <BirthTime onNext={handleNext} onSkip={handleNext} onBack={handleBack} />;
      case 'location':
        return <LocationStep onNext={handleNext} onBack={handleBack} />;
      case 'mbti':
        return <Mbti onNext={handleNext} onSkip={handleNext} onBack={handleBack} />;
      case 'focusMood':
        return <FocusMood onNext={handleNext} onBack={handleBack} />;
      case 'generating':
        return <Generating onComplete={handleGeneratingComplete} showNav={false} />;
      case 'today':
        return <Today onNavigate={navigate} />;
      case 'soulprint':
        return <Soulprint onNavigate={navigate} />;
      case 'snapshot':
        return <Snapshot onBack={handleBack} onNavigate={navigate} />;
      case 'shareCard':
        return <ShareCard onBack={handleBack} onNavigate={navigate} />;
      case 'decode':
        return <Decode />;
      case 'archive':
        return <Archive />;
      case 'profile':
        return <Profile />;
      default:
        return <Welcome onNext={handleNext} />;
    }
  };
  
  return (
    <PhoneFrame currentScreen={currentScreen} onNavigate={navigate} showNav={showNav}>
      {renderScreen()}
    </PhoneFrame>
  );
}