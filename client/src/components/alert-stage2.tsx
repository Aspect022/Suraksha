import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send, User, CheckCircle, Loader2 } from 'lucide-react';
import { TrustedContact } from '@/lib/storage';

interface AlertStage2Props {
  countdown: number;
  contacts: TrustedContact[];
  onDismiss: () => void;
}

export function AlertStage2({ countdown, contacts, onDismiss }: AlertStage2Props) {
  return (
    <div className="fixed inset-0 bg-orange-600 z-50 flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center">
            <Send className="text-6xl text-orange-600 animate-pulse" size={96} />
          </div>
          <h1 className="text-3xl font-bold text-white">Notifying Contacts</h1>
          <p className="text-lg text-white/90">Sending location to trusted contacts...</p>
        </div>

        <div className="space-y-3 w-full">
          {contacts.map((contact, index) => (
            <Card 
              key={contact.id} 
              className="bg-white/20 border-white/30 p-4 flex items-center justify-between"
              data-testid={`contact-notification-${contact.id}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                  <User className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{contact.name}</p>
                  <p className="text-white/70 text-sm">{contact.relation}</p>
                </div>
              </div>
              {index < 2 ? (
                <CheckCircle className="text-green-400" size={24} />
              ) : (
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                  <span className="text-white/70 text-sm">Sending...</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Button 
          onClick={onDismiss}
          variant="outline"
          className="w-full bg-white text-orange-600 font-bold py-4 h-auto rounded-xl shadow-lg transition-all transform hover:scale-105 border-white hover:bg-gray-100"
          data-testid="button-cancel-alert"
        >
          Cancel Alert
        </Button>

        <p className="text-white/80 text-sm">
          Auto-escalating to emergency services in <span data-testid="stage2-timer">{countdown}</span> seconds
        </p>
      </div>
    </div>
  );
}
