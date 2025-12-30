export interface UserSettings {
  highRiskMode: boolean;
  darkMode: boolean;
  voiceSensitivity: 'low' | 'medium' | 'high';
  trustedContacts: TrustedContact[];
  userName: string;
  userEmail: string;
}

export interface TrustedContact {
  id: string;
  name: string;
  phone: string;
  relation: string;
}

export interface SensorData {
  heartRate: number;
  location: { lat: number; lng: number };
  motion: 'stable' | 'motion' | 'sudden';
  voice: 'listening' | 'triggered';
  lastUpdate: Date;
}

const DEFAULT_SETTINGS: UserSettings = {
  highRiskMode: false,
  darkMode: true,
  voiceSensitivity: 'medium',
  trustedContacts: [
    { id: '1', name: 'Jayesh RL', phone: '+91 9449945462', relation: 'Primary Contact' },
    { id: '2', name: 'Emergency Services', phone: '112', relation: 'Emergency' },
    { id: '3', name: 'Local Police', phone: '100', relation: 'Police' },
  ],
  userName: 'Jayesh RL',
  userEmail: 'jayesh.rl@email.com',
};

export const storage = {
  getSettings(): UserSettings {
    try {
      const stored = localStorage.getItem('suraksha-settings');
      if (stored) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
      }
      return DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: Partial<UserSettings>): void {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };
      localStorage.setItem('suraksha-settings', JSON.stringify(updated));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  },

  getSensorData(): SensorData {
    const mockData: SensorData = {
      heartRate: Math.floor(Math.random() * 30) + 70, // 70-100 bpm
      location: { lat: 12.34, lng: 56.78 },
      motion: 'stable',
      voice: 'listening',
      lastUpdate: new Date(),
    };
    return mockData;
  },

  hasCompletedOnboarding(): boolean {
    return localStorage.getItem('suraksha-onboarding') === 'completed';
  },

  completeOnboarding(): void {
    localStorage.setItem('suraksha-onboarding', 'completed');
  },
};
