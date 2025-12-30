import { Button } from '@/components/ui/button';
import { AlertTriangle, Check } from 'lucide-react';

interface AlertStage1Props {
  countdown: number;
  onDismiss: () => void;
  onEscalate: () => void;
}

export function AlertStage1({ countdown, onDismiss, onEscalate }: AlertStage1Props) {
  return (
    <div className="fixed inset-0 bg-red-600 z-50 flex flex-col items-center justify-center p-6 animate-shake">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="text-6xl text-red-600" size={96} />
          </div>
          <h1 className="text-4xl font-bold text-white">Are You Safe?</h1>
          <p className="text-xl text-white/90">Unusual activity detected</p>
        </div>

        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-white animate-countdown" data-testid="countdown-timer">
              {countdown}
            </span>
          </div>
          <p className="text-white/80">
            Responding automatically in <span data-testid="countdown-text">{countdown}</span> seconds
          </p>
        </div>

        <div className="space-y-4 w-full">
          <Button 
            onClick={onDismiss}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 h-auto rounded-xl shadow-lg transition-all transform hover:scale-105"
            data-testid="button-dismiss-alert"
          >
            <Check className="mr-3" size={20} />
            I Am Safe
          </Button>
          <Button 
            onClick={onEscalate}
            variant="outline"
            className="w-full bg-white text-red-600 font-bold py-4 h-auto rounded-xl shadow-lg transition-all transform hover:scale-105 border-white hover:bg-gray-100"
            data-testid="button-escalate-alert"
          >
            <AlertTriangle className="mr-3" size={20} />
            Need Help
          </Button>
        </div>
      </div>
    </div>
  );
}
