import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import { TierProvider, useTier } from './context/TierContext';
import { useEngagement } from './hooks/useEngagement';

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
import ShareCard from './components/ShareCard';
import Decode from './components/Decode';
import LoveReading from './components/LoveReading';
import CompatibilityReading from './components/CompatibilityReading';
import Keepsake from './components/Keepsake';
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

const mainAppTabs = ['today', 'soulprint', 'decode', 'keepsake', 'profile'];

const onboardingResultScreens = ['firstMirror', 'pricing'];
const detailScreens = ['love', 'compatibility', 'shareCard'];

function AppInner() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [showNav, setShowNav] = useState(false);
  const [previousScreen, setPreviousScreen] = useState(null);
  const engagement = useEngagement();

  const navigate = (screen) => {
    if (mainAppTabs.includes(screen)) {
      setShowNav(true);
    }
    setPreviousScreen(currentScreen);
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
    setCurrentScreen('today');
  };

  const handleFirstMirrorDeepDive = () => {
    setCurrentScreen('pricing');
  };

  const handlePricingBack = () => {
    setCurrentScreen('firstMirror');
  };

  const handleDetailBack = () => {
    if (previousScreen && mainAppTabs.includes(previousScreen)) {
      setCurrentScreen(previousScreen);
    } else {
      setCurrentScreen('today');
    }
  };

  const handleBack = () => {
    if (currentScreen === 'shareCard') {
      setCurrentScreen('soulprint');
    } else if (detailScreens.includes(currentScreen)) {
      handleDetailBack();
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
        return <Today onNavigate={navigate} engagement={engagement} />;
      case 'soulprint':
        return <Soulprint onNavigate={navigate} />;
      case 'snapshot':
        return <FirstMirror
          onContinue={handleFirstMirrorContinue}
          onDeepDive={handleFirstMirrorDeepDive}
          onBack={() => setCurrentScreen('soulprint')}
        />;
      case 'shareCard':
        return <ShareCard onBack={handleBack} onNavigate={navigate} />;
      case 'decode':
        return <Decode onNavigate={navigate} engagement={engagement} />;
      case 'love':
        return <LoveReading onBack={handleDetailBack} />;
      case 'compatibility':
        return <CompatibilityReading onBack={handleDetailBack} />;
      case 'keepsake':
        return <Keepsake onNavigate={navigate} engagement={engagement} />;
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

export default function App() {
  return (
    <TierProvider>
      <AppInner />
    </TierProvider>
  );
}