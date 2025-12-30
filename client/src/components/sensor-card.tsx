import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Heart, Mic, MapPin, Smartphone } from 'lucide-react';

interface SensorCardProps {
  type: 'voice' | 'heart' | 'location' | 'motion';
  status: string;
  value: string;
  isActive: boolean;
  className?: string;
}

const sensorConfig = {
  voice: {
    icon: Mic,
    color: 'text-teal-500',
    activeStatus: 'Active',
    inactiveStatus: 'Inactive',
  },
  heart: {
    icon: Heart,
    color: 'text-red-500',
    activeStatus: 'Normal',
    inactiveStatus: 'No Data',
  },
  location: {
    icon: MapPin,
    color: 'text-blue-500',
    activeStatus: 'Tracked',
    inactiveStatus: 'No Signal',
  },
  motion: {
    icon: Smartphone,
    color: 'text-purple-500',
    activeStatus: 'Stable',
    inactiveStatus: 'No Data',
  },
};

export function SensorCard({ type, status, value, isActive, className }: SensorCardProps) {
  const config = sensorConfig[type];
  const Icon = config.icon;

  const getStatusColor = () => {
    if (!isActive) return 'bg-gray-500/20 text-gray-400';
    
    switch (type) {
      case 'voice':
        return status === 'triggered' ? 'bg-amber-500/20 text-amber-400' : 'bg-teal-500/20 text-teal-400';
      case 'heart':
        return 'bg-green-500/20 text-green-400';
      case 'location':
        return 'bg-blue-500/20 text-blue-400';
      case 'motion':
        return status === 'sudden' ? 'bg-amber-500/20 text-amber-400' : 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Card className={cn("p-4 border border-border", className)} data-testid={`sensor-card-${type}`}>
      <div className="flex items-center justify-between mb-2">
        <Icon 
          className={cn(
            config.color,
            type === 'heart' && isActive && 'animate-pulse'
          )} 
          size={20} 
        />
        <span className={cn("text-xs px-2 py-1 rounded-full", getStatusColor())}>
          {isActive ? (status === 'triggered' || status === 'sudden' ? 'Alert' : config.activeStatus) : config.inactiveStatus}
        </span>
      </div>
      <h3 className="font-semibold capitalize">{type}</h3>
      <p className="text-sm text-muted-foreground">{value}</p>
    </Card>
  );
}
