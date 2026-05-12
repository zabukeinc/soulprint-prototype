import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';

import Welcome from './components/Welcome';
import BirthDate from './components/BirthDate';
import BirthTime from './components/BirthTime';
import LocationStep from './components/LocationStep';
import Mbti from './components/Mbti';
import FocusMood from './components/FocusMood';
import Generating from './components/Generating';
import FirstMirror from './components/FirstMirror';
import Today from './components/Today';
import Soulprint from './components/Soulprint';
import Snapshot from './components/Snapshot';
import ShareCard from './components/ShareCard';
import Decode from './components/Decode';
import Archive from './components/Archive';
import Profile from './components/Profile';
import Pricing from './components/Pricing';

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

const onboardingResultScreens = ['firstMirror', 'pricing'];

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
    setCurrentScreen('firstMirror');
  };
  
  const handleFirstMirrorContinue = () => {
    setShowNav(true);
    navigate('today');
  };
  
  const handleFirstMirrorDeepDive = () => {
    setCurrentScreen('pricing');
  };
  
  const handlePricingBack = () => {
    setCurrentScreen('firstMirror');
  };
  
  const handleBack = () => {
    if (currentScreen === 'snapshot' || currentScreen === 'shareCard') {
      setCurrentScreen('soulprint');
    } else if (onboardingResultScreens.includes(currentScreen)) {
      setCurrentScreen('firstMirror');
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
        return <Generating onComplete={handleGeneratingComplete} />;
      case 'firstMirror':
        return <FirstMirror 
          onContinue={handleFirstMirrorContinue} 
          onDeepDive={handleFirstMirrorDeepDive}
        />;
      case 'pricing':
        return <Pricing onBack={handlePricingBack} />;
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
        return <Profile onNavigate={navigate} />;
      default:
        return <Welcome onNext={handleNext} />;
    }
  };
  
  const shouldShowNav = showNav && mainAppTabs.includes(currentScreen);
  
  return (
    <PhoneFrame currentScreen={currentScreen} onNavigate={navigate} showNav={shouldShowNav}>
      {renderScreen()}
    </PhoneFrame>
  );
}