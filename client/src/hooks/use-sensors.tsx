import { useState, useEffect, useCallback } from 'react';
import { storage, type SensorData } from '@/lib/storage';

export function useSensors() {
  const [sensorData, setSensorData] = useState<SensorData>(storage.getSensorData());
  const [isMonitoring, setIsMonitoring] = useState(true);

  const updateSensorData = useCallback(() => {
    if (isMonitoring) {
      setSensorData(storage.getSensorData());
    }
  }, [isMonitoring]);

  const simulateMotionTrigger = useCallback(() => {
    setSensorData(prev => ({
      ...prev,
      motion: 'sudden',
      lastUpdate: new Date(),
    }));
    
    setTimeout(() => {
      setSensorData(prev => ({
        ...prev,
        motion: 'stable',
        lastUpdate: new Date(),
      }));
    }, 3000);
  }, []);

  const simulateVoiceTrigger = useCallback(() => {
    setSensorData(prev => ({
      ...prev,
      voice: 'triggered',
      lastUpdate: new Date(),
    }));

    setTimeout(() => {
      setSensorData(prev => ({
        ...prev,
        voice: 'listening',
        lastUpdate: new Date(),
      }));
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(updateSensorData, 3000);
    return () => clearInterval(interval);
  }, [isMonitoring, updateSensorData]);

  return {
    sensorData,
    isMonitoring,
    setIsMonitoring,
    simulateMotionTrigger,
    simulateVoiceTrigger,
  };
}
