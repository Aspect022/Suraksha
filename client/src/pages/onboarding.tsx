import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Mic, MapPin, Heart, Smartphone } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gradient-bg">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl">
            <Shield className="text-4xl text-teal-600" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-white">Suraksha</h1>
          <p className="text-xl text-white/80">Your Personal Safety Monitor</p>
        </div>

        <div className="space-y-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-left">
              <h3 className="text-white font-semibold mb-3">Safety Permissions Required</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3" data-testid="permission-microphone">
                  <Mic className="text-white/80" size={20} />
                  <span className="text-white/90">Microphone - Voice trigger detection</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="permission-location">
                  <MapPin className="text-white/80" size={20} />
                  <span className="text-white/90">Location - Emergency location sharing</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="permission-health">
                  <Heart className="text-white/80" size={20} />
                  <span className="text-white/90">Health - Heart rate monitoring</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="permission-motion">
                  <Smartphone className="text-white/80" size={20} />
                  <span className="text-white/90">Motion - Movement detection</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <p className="text-white/90 text-sm">
                Your data is processed locally and only shared during emergencies with your trusted contacts.
              </p>
            </CardContent>
          </Card>
        </div>

        <Button 
          onClick={onComplete}
          className="w-full bg-white text-teal-700 font-semibold py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:bg-gray-100"
          data-testid="button-consent"
        >
          I Agree & Continue
        </Button>
      </div>
    </div>
  );
}
