import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Loader2 } from 'lucide-react';

interface AlertStage3Props {
  alertTime: string;
  location: string;
  trigger: string;
  userId: string;
  onDismiss: () => void;
}

export function AlertStage3({ alertTime, location, trigger, userId, onDismiss }: AlertStage3Props) {
  return (
    <div className="fixed inset-0 bg-red-700 z-50 flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center animate-pulse">
            <Phone className="text-6xl text-red-700" size={96} />
          </div>
          <h1 className="text-3xl font-bold text-white">Emergency Services</h1>
          <p className="text-lg text-white/90">Contacting local authorities...</p>
        </div>

        <Card className="bg-white/20 border-white/30 p-6 space-y-4 text-left w-full" data-testid="emergency-details">
          <h3 className="text-white font-bold text-lg">Alert Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-white/70">Time:</span>
              <span className="text-white" data-testid="alert-time">{alertTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Location:</span>
              <span className="text-white" data-testid="alert-location">{location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Trigger:</span>
              <span className="text-white" data-testid="alert-trigger">{trigger}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">User ID:</span>
              <span className="text-white" data-testid="user-id">{userId}</span>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-center space-x-3" data-testid="emergency-status">
          <Loader2 className="w-4 h-4 text-white animate-spin" />
          <span className="text-white font-medium">Connecting to emergency services...</span>
        </div>

        <Button 
          onClick={onDismiss}
          variant="outline"
          className="w-full bg-white/20 border border-white text-white font-medium py-3 h-auto rounded-xl transition-all hover:bg-white/30"
          data-testid="button-cancel-emergency"
        >
          Cancel Emergency Call
        </Button>
      </div>
    </div>
  );
}
