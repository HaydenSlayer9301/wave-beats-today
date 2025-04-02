
import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    'beforeinstallprompt': BeforeInstallPromptEvent;
  }
}

const InstallApp = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      // Prevent Chrome from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setInstallPrompt(e);
      // Only show the banner if the user hasn't previously dismissed or installed
      const hasUserDismissedOrInstalled = localStorage.getItem('installBannerDismissed');
      if (!hasUserDismissedOrInstalled) {
        setShowBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler as any);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as any);
    };
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) return;
    
    // Show the install prompt
    installPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        localStorage.setItem('installBannerDismissed', 'true');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Clear the saved prompt since it can't be used again
      setInstallPrompt(null);
      setShowBanner(false);
    });
  };

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('installBannerDismissed', 'true');
  };

  // Don't render anything if the banner shouldn't be shown
  if (!showBanner) return null;

  // Determine if it's a mobile or desktop device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const installText = isMobile ? "Install App" : "Install for Desktop";
  const icon = isMobile ? <Smartphone className="h-4 w-4 mr-2" /> : <Download className="h-4 w-4 mr-2" />;

  return (
    <div className="fixed bottom-20 left-0 right-0 mx-auto z-40 w-full md:w-auto md:max-w-sm p-4">
      <div className="bg-music-red text-white rounded-lg shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center">
          {icon}
          <span>Install Wave Beats for offline use</span>
        </div>
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-music-red-dark mr-2"
            onClick={handleInstallClick}
          >
            {installText}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-music-red-dark h-8 w-8"
            onClick={dismissBanner}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
