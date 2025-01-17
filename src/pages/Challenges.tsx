import { MoreVertical, ChevronRight, Check, X } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function Challenges() {
  const days = [
    { day: 'Mon', status: 'completed' },
    { day: 'Tue', status: 'completed' },
    { day: 'Wed', status: 'failed' },
    { day: 'Thu', status: 'completed' },
    { day: 'Fri', status: 'pending' },
    { day: 'Sat', status: 'pending' },
    { day: 'Sun', status: 'pending' }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h1 className="text-3xl font-medium">Challenges</h1>
          <button className="text-gray-400">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="px-4 mb-6">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516876902077-0bca91a4f9bb?q=80&w=2070&auto=format&fit=crop"
              alt="Challenge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <div className="text-4xl font-bold">
                GET <span className="text-[#4CD7E7]">$DVA</span> ON<br />
                EVERY PUFF
              </div>
            </div>
          </div>
        </div>

        {/* Vaping Tracker */}
        <div className="px-4 mb-8">
          <div className="bg-[#1A1A1A] rounded-2xl p-6">
            <h2 className="text-2xl font-medium mb-4">Vaping Tracker</h2>
            <div className="grid grid-cols-7 gap-4">
              {days.map((day) => (
                <div key={day.day} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    day.status === 'completed' ? 'bg-[#4CD7E7]' :
                    day.status === 'failed' ? 'bg-red-500' :
                    'bg-gray-700'
                  }`}>
                    {day.status === 'completed' && <Check className="w-5 h-5 text-dark" />}
                    {day.status === 'failed' && <X className="w-5 h-5 text-white" />}
                  </div>
                  <span className="text-sm text-gray-400">{day.day}</span>
                </div>
              ))}
            </div>
            <div className="text-gray-500 text-sm mt-4 text-center">
              Updated 2 mins ago
            </div>
          </div>
        </div>

        {/* Daily Challenges */}
        <div className="px-4 mb-8">
          <h2 className="text-3xl font-medium mb-4">Daily Challenges</h2>
          <div className="space-y-4">
            <div className="bg-[#1A1A1A] rounded-2xl p-6">
              <h3 className="text-2xl font-medium mb-2">Puff Limit Challenge</h3>
              <p className="text-gray-400">Complete under 30 puffs today.</p>
            </div>
            <div className="bg-[#1A1A1A] rounded-2xl p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-medium mb-2">Mindful Vaping</h3>
                <p className="text-gray-400">Pause for 10 seconds between puffs.</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Weekly Challenges */}
        <div className="px-4 mb-8">
          <h2 className="text-3xl font-medium mb-4">Weekly Challenges</h2>
          <div className="bg-[#1A1A1A] rounded-2xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-medium mb-2">Health Milestone</h3>
              <p className="text-gray-400">Improve your lung health score by 5 points this week.</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      <BottomNav active="challenges" />
    </div>
  );
}