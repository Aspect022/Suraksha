import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSettings } from '@/hooks/use-settings';
import { ArrowLeft, User, Edit, Plus, Download, Trash2 } from 'lucide-react';

interface SettingsProps {
  onNavigateBack: () => void;
}

export function Settings({ onNavigateBack }: SettingsProps) {
  const { settings, updateSettings } = useSettings();

  const handleAddContact = () => {
    // In a real app, this would open a modal or navigate to a form
    console.log('Add contact');
  };

  const handleEditContact = (contactId: string) => {
    // In a real app, this would open a modal or navigate to an edit form
    console.log('Edit contact:', contactId);
  };

  const handleExportData = () => {
    // In a real app, this would export user data
    console.log('Export data');
  };

  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    console.log('Delete account');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost"
            size="icon"
            onClick={onNavigateBack}
            className="p-2 rounded-lg bg-muted/50 hover:bg-muted"
            data-testid="button-back"
          >
            <ArrowLeft className="text-muted-foreground" size={20} />
          </Button>
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </header>

      {/* Settings Content */}
      <main className="p-4 space-y-6">
        {/* User Profile */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <User className="text-primary-foreground" size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold" data-testid="user-name">{settings.userName}</h3>
                <p className="text-muted-foreground" data-testid="user-email">{settings.userEmail}</p>
                <p className="text-sm text-primary">Premium Member</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trusted Contacts */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Trusted Contacts</h3>
              <Button 
                variant="ghost"
                size="icon"
                onClick={handleAddContact}
                className="text-primary hover:text-primary/80"
                data-testid="button-add-contact"
              >
                <Plus size={20} />
              </Button>
            </div>
            <div className="space-y-3">
              {settings.trustedContacts.map((contact) => (
                <div 
                  key={contact.id} 
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  data-testid={`contact-${contact.id}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <User className="text-primary-foreground text-sm" size={16} />
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.phone}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditContact(contact.id)}
                    className="text-muted-foreground hover:text-foreground"
                    data-testid={`button-edit-contact-${contact.id}`}
                  >
                    <Edit size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Settings */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Safety Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">High-Risk Mode</p>
                  <p className="text-sm text-muted-foreground">Increases sensitivity for all sensors</p>
                </div>
                <Switch 
                  checked={settings.highRiskMode}
                  onCheckedChange={(checked) => updateSettings({ highRiskMode: checked })}
                  data-testid="switch-high-risk-mode"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Switch to light theme</p>
                </div>
                <Switch 
                  checked={settings.darkMode}
                  onCheckedChange={(checked) => updateSettings({ darkMode: checked })}
                  data-testid="switch-dark-mode"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Voice Sensitivity</p>
                  <p className="text-sm text-muted-foreground">Adjust trigger sensitivity</p>
                </div>
                <Select 
                  value={settings.voiceSensitivity} 
                  onValueChange={(value: 'low' | 'medium' | 'high') => updateSettings({ voiceSensitivity: value })}
                >
                  <SelectTrigger className="w-32" data-testid="select-voice-sensitivity">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Information */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">App Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version</span>
                <span>1.0.0 (MVP)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Updated</span>
                <span>Dec 30, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Device ID</span>
                <span className="text-sm font-mono">#SKA-2024-001</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            variant="outline"
            onClick={handleExportData}
            className="w-full py-3 h-auto"
            data-testid="button-export-data"
          >
            <Download className="mr-2" size={16} />
            Export Safety Data
          </Button>
          <Button 
            variant="destructive"
            onClick={handleDeleteAccount}
            className="w-full py-3 h-auto"
            data-testid="button-delete-account"
          >
            <Trash2 className="mr-2" size={16} />
            Delete Account
          </Button>
        </div>
      </main>
    </div>
  );
}
