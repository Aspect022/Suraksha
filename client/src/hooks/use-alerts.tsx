import { useState, useCallback, useRef } from 'react';

export type AlertStage = 0 | 1 | 2 | 3;

export interface AlertState {
  stage: AlertStage;
  trigger: string;
  countdown: number;
  isActive: boolean;
}

export function useAlerts() {
  const [alertState, setAlertState] = useState<AlertState>({
    stage: 0,
    trigger: '',
    countdown: 0,
    isActive: false,
  });

  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  const triggerAlert = useCallback((trigger: string) => {
    setAlertState({
      stage: 1,
      trigger,
      countdown: 10,
      isActive: true,
    });

    // Start countdown for stage 1
    let countdown = 10;
    countdownRef.current = setInterval(() => {
      countdown--;
      setAlertState(prev => ({ ...prev, countdown }));
      
      if (countdown <= 0) {
        if (countdownRef.current) {
          clearInterval(countdownRef.current);
        }
        escalateToStage2();
      }
    }, 1000);
  }, []);

  const escalateToStage2 = useCallback(() => {
    setAlertState(prev => ({
      ...prev,
      stage: 2,
      countdown: 30,
    }));

    // Start countdown for stage 2
    let countdown = 30;
    countdownRef.current = setInterval(() => {
      countdown--;
      setAlertState(prev => ({ ...prev, countdown }));
      
      if (countdown <= 0) {
        if (countdownRef.current) {
          clearInterval(countdownRef.current);
        }
        escalateToStage3();
      }
    }, 1000);
  }, []);

  const escalateToStage3 = useCallback(() => {
    setAlertState(prev => ({
      ...prev,
      stage: 3,
      countdown: 0,
    }));
  }, []);

  const dismissAlert = useCallback(() => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    
    setAlertState({
      stage: 0,
      trigger: '',
      countdown: 0,
      isActive: false,
    });
  }, []);

  const escalateAlert = useCallback(() => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }
    escalateToStage2();
  }, [escalateToStage2]);

  return {
    alertState,
    triggerAlert,
    dismissAlert,
    escalateAlert,
  };
}
