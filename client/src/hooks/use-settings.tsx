import { useState, useEffect } from 'react';
import { storage, type UserSettings } from '@/lib/storage';

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings>(storage.getSettings());

  const updateSettings = (updates: Partial<UserSettings>) => {
    const newSettings = { ...settings, ...updates };
    setSettings(newSettings);
    storage.saveSettings(updates);
    
    // Apply dark mode immediately
    if ('darkMode' in updates) {
      document.documentElement.classList.toggle('dark', newSettings.darkMode);
      document.documentElement.classList.toggle('light', !newSettings.darkMode);
    }
  };

  useEffect(() => {
    // Apply initial dark mode
    document.documentElement.classList.toggle('dark', settings.darkMode);
    document.documentElement.classList.toggle('light', !settings.darkMode);
  }, [settings.darkMode]);

  return {
    settings,
    updateSettings,
  };
}
