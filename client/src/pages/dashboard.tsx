import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SensorCard } from '@/components/sensor-card';
import { AlertStage1 } from '@/components/alert-stage1';
import { AlertStage2 } from '@/components/alert-stage2';
import { AlertStage3 } from '@/components/alert-stage3';
import { useSensors } from '@/hooks/use-sensors';
import { useAlerts } from '@/hooks/use-alerts';
import { useSettings } from '@/hooks/use-settings';
import { Shield, Settings, Heart, Mic, Smartphone } from 'lucide-react';

interface DashboardProps {
  onNavigateToSettings: () => void;
}

export function Dashboard({ onNavigateToSettings }: DashboardProps) {
  const { sensorData, isMonitoring, setIsMonitoring, simulateMotionTrigger, simulateVoiceTrigger } = useSensors();
  const { alertState, triggerAlert, dismissAlert, escalateAlert } = useAlerts();
  const { settings } = useSettings();

  const handleTestVoice = () => {
    simulateVoiceTrigger();
    triggerAlert('Voice Detection');
  };

  const handleTestMotion = () => {
    simulateMotionTrigger();
    triggerAlert('Sudden Movement');
  };

  const formatLocation = (lat: number, lng: number) => {
    return `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Render alert stages
  if (alertState.isActive) {
    switch (alertState.stage) {
      case 1:
        return (
          <AlertStage1 
            countdown={alertState.countdown}
            onDismiss={dismissAlert}
            onEscalate={escalateAlert}
          />
        );
      case 2:
        return (
          <AlertStage2 
            countdown={alertState.countdown}
            contacts={settings.trustedContacts}
            onDismiss={dismissAlert}
          />
        );
      case 3:
        return (
          <AlertStage3 
            alertTime={formatTime(new Date())}
            location={formatLocation(sensorData.location.lat, sensorData.location.lng)}
            trigger={alertState.trigger}
            userId="#SKA-2024-001"
            onDismiss={dismissAlert}
          />
        );
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Suraksha</h1>
              <p className="text-sm text-muted-foreground" data-testid="monitoring-status">
                {isMonitoring ? 'Active Monitoring' : 'Monitoring Paused'}
              </p>
            </div>
          </div>
          <Button 
            variant="ghost"
            size="icon"
            onClick={onNavigateToSettings}
            className="p-2 rounded-lg bg-muted/50 hover:bg-muted"
            data-testid="button-settings"
          >
            <Settings className="text-muted-foreground" size={20} />
          </Button>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="p-4 space-y-6">
        {/* Monitoring Status */}
        <div className="text-center space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <div className="heartbeat w-full h-full bg-primary rounded-full flex items-center justify-center relative">
              <Heart className="text-primary-foreground text-4xl relative z-10 animate-pulse-heart" size={48} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold" data-testid="status-title">
              {isMonitoring ? 'Monitoring Active' : 'Monitoring Paused'}
            </h2>
            <p className="text-muted-foreground">
              {isMonitoring ? 'All systems operational' : 'Tap to start monitoring'}
            </p>
          </div>
        </div>

        {/* Sensor Status Cards */}
        <div className="grid grid-cols-2 gap-4">
          <SensorCard
            type="voice"
            status={sensorData.voice}
            value={sensorData.voice === 'listening' ? 'Listening' : 'Triggered'}
            isActive={isMonitoring}
          />
          <SensorCard
            type="heart"
            status="normal"
            value={`${sensorData.heartRate} bpm`}
            isActive={isMonitoring}
          />
          <SensorCard
            type="location"
            status="tracked"
            value={formatLocation(sensorData.location.lat, sensorData.location.lng)}
            isActive={isMonitoring}
          />
          <SensorCard
            type="motion"
            status={sensorData.motion}
            value={sensorData.motion === 'stable' ? 'Stable' : 'Motion Detected'}
            isActive={isMonitoring}
          />
        </div>

        {/* Control Button */}
        <div className="space-y-4">
          <Button 
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`w-full font-semibold py-4 h-auto rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 ${
              isMonitoring 
                ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' 
                : 'bg-primary hover:bg-primary/90 text-primary-foreground'
            }`}
            data-testid="button-toggle-monitoring"
          >
            {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
          </Button>

          {/* Test Buttons */}
          {isMonitoring && (
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={handleTestVoice}
                className="bg-amber-500 hover:bg-amber-600 text-white py-3 h-auto rounded-lg font-medium transition-colors"
                data-testid="button-test-voice"
              >
                <Mic className="mr-2" size={16} />
                Test Voice
              </Button>
              <Button 
                onClick={handleTestMotion}
                className="bg-purple-500 hover:bg-purple-600 text-white py-3 h-auto rounded-lg font-medium transition-colors"
                data-testid="button-test-motion"
              >
                <Smartphone className="mr-2" size={16} />
                Test Motion
              </Button>
            </div>
          )}
        </div>

        {/* Last Update */}
        <div className="text-center text-sm text-muted-foreground">
          Last updated: <span data-testid="last-update">{formatTime(sensorData.lastUpdate)}</span>
        </div>
      </main>
    </div>
  );
}
