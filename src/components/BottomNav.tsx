import { Trophy, Target, Home, ShoppingBag, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type BottomNavProps = {
  active: string;
};

export default function BottomNav({ active }: BottomNavProps) {
  const navigate = useNavigate();
  
  const tabs = [
    { name: 'ranking', icon: Trophy, label: 'Ranking', path: '/ranking' },
    { name: 'challenges', icon: Target, label: 'Challenges', path: '/challenges' },
    { name: 'home', icon: Home, label: 'Home', path: '/' },
    { name: 'market', icon: ShoppingBag, label: 'Market', path: '/market' },
    { name: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <div className="backdrop-blur-lg bg-[#1A1A1A]/90 p-3 flex justify-between">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => navigate(tab.path)}
          className={`flex flex-col items-center ${
            active === tab.name 
              ? 'text-[#55A7F5] bg-[#55A7F5]/10 px-4 py-1.5 rounded-lg' 
              : 'text-gray-500'
          }`}
        >
          <tab.icon className="w-4 h-4 mb-0.5" />
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}