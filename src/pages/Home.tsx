import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        {/* Greeting */}
        <div className="text-center pt-1">
          <h6 className="text-lg">Hi, Jonathan</h6>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-2 px-3 py-1">
          <div>
            <div className="text-gray-300 text-xs">Battery</div>
            <div className="text-[#4CD7E7] text-base font-bold">76%</div>
          </div>
          <div className="text-right">
            <div className="text-gray-300 text-xs">Battery</div>
            <div className="text-[#4CD7E7] text-base font-bold">$436.12</div>
          </div>
        </div>

        {/* Device Section */}
        <div className="text-center p-2 relative">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-[#4169E1] rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-[#4CD7E7] rounded-full opacity-30"></div>
            <img 
              src="https://img.freepik.com/premium-photo/vaping-electronic-cigarette-alternative-cigarettes-vape-colorful-club-fragrant-smoke-large-vapor-vapour-club-aromatics-different-flavors_771426-23516.jpg" 
              alt="Device" 
              className="relative z-10 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Mode Selection */}
        <div className="p-2 text-center">
          <h2 className="text-base text-gray-400 mb-3">Mode</h2>
          <div className="flex justify-center gap-3">
            <button 
              className="bg-gradient-to-r from-[#4CD7E7] to-[#4CD7E7]/80 text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-[#4CD7E7]/20 border border-[#4CD7E7]/30"
            >
              Normal
            </button>
            <button 
              className="bg-gradient-to-r from-[#2A4B57] to-[#2A4B57]/80 text-gray-300 px-6 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-[#2A4B57]/20 border border-[#2A4B57]/30"
            >
              Boost
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-3 px-3 mt-2">
          <div className="text-center relative w-20 h-20 mx-auto flex flex-col justify-center">
            <div className="absolute inset-0 border-3 border-[#4169E1] rounded-full opacity-30 transform scale-90"></div>
            <div className="absolute inset-0 border border-[#4CD7E7] rounded-full opacity-20 animate-pulse"></div>
            <div className="text-gray-300 text-xs">Heart Rate</div>
            <div className="text-[#4CD7E7] text-sm font-medium">86</div>
            <div className="text-gray-400 text-xs">bmp</div>
          </div>
          <div className="text-center relative w-20 h-20 mx-auto flex flex-col justify-center">
            <div className="absolute inset-0 border-3 border-[#4169E1] rounded-full opacity-30 transform scale-90"></div>
            <div className="absolute inset-0 border border-[#4CD7E7] rounded-full opacity-20 animate-pulse"></div>
            <div className="text-gray-300 text-xs">Lung</div>
            <div className="text-[#4CD7E7] text-sm font-medium">7.4</div>
            <div className="text-gray-400 text-xs">Fvc</div>
          </div>
          <div className="text-center relative w-20 h-20 mx-auto flex flex-col justify-center">
            <div className="absolute inset-0 border-3 border-[#4169E1] rounded-full opacity-30 transform scale-90"></div>
            <div className="absolute inset-0 border border-[#4CD7E7] rounded-full opacity-20 animate-pulse"></div>
            <div className="text-gray-300 text-xs">Puff</div>
            <div className="text-[#4CD7E7] text-sm font-medium">30</div>
            <div className="text-gray-400 text-xs">minutes</div>
          </div>
        </div>

        {/* Weekly Overview */}
        <div className="mx-3 mt-3 p-4 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-black/100 backdrop-blur-xl border border-white/10 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/10 to-transparent"></div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#4CD7E7]/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#4169E1]/10 rounded-full blur-3xl"></div>
          <h2 className="text-base font-medium relative z-10 text-white/90">Weekly Overview</h2>
          <div className="text-gray-400/80 text-sm mb-2 relative z-10">Apr 10 - Apr 17</div>
          <div className="grid grid-cols-7 gap-2 mt-1 h-20">
            {[
              { day: 'M', value: 65 },
              { day: 'T', value: 85 },
              { day: 'W', value: 45 },
              { day: 'T', value: 75 },
              { day: 'F', value: 90 },
              { day: 'S', value: 55 },
              { day: 'S', value: 70 }
            ].map(({ day, value }, i) => (
              <div key={i} className="flex flex-col items-center h-full justify-end">
                <div className="text-gray-400/80 mb-1 text-xs relative z-10">{day}</div>
                <div className="w-4 bg-[#4169E1] rounded-t-lg relative transition-all duration-300" 
                     style={{ height: `${(value / 100) * 80}px` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4169E1]/90 via-[#4CD7E7]/70 to-[#4169E1] rounded-t-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-t-lg"></div>
                </div>
              </div>
            ))}
          </div>
         </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}