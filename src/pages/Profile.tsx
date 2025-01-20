import { useState } from "react";
import {
  Wallet,
  Award,
  Activity,
  Clock,
  Battery,
  User as UserIcon,
  ChevronRight,
} from "lucide-react";
import BottomNav from "../components/BottomNav";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";

export default function Profile() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // 4. Use modal hook
  const { open } = useAppKit();
  const { disconnect } = useDisconnect(); // AppKit hook to disconnect
  const { address } = useAppKitAccount();

  const stats = [
    { icon: Activity, label: "Total Puffs", value: "2,345" },
    { icon: Clock, label: "Vaping Time", value: "145h" },
    { icon: Award, label: "Achievements", value: "12" },
    { icon: Battery, label: "Battery Used", value: "89%" },
  ];

  const achievements = [
    { title: "First Week Complete", date: "2024-03-15", points: 100 },
    { title: "Mindful Vaper", date: "2024-03-10", points: 250 },
    { title: "Health Milestone", date: "2024-03-05", points: 500 },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto pb-20">
        {/* Header */}
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4169E1]/10 to-dark">
            <div className="absolute inset-0 backdrop-blur-xl" />
          </div>
          {/* {address && (
            <button
              onClick={() => disconnect()}
              style={{
                fontFamily: "'Karla'",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                textAlign: "center",
                color: "#000000",
                backgroundColor: "yellow",
                height: 40,
                width: 160,
                borderRadius: 20,
              }}
            >
              Change Wallet
            </button>
          )}
          {!address && (
            <button
              onClick={() => open()}
              style={{
                fontFamily: "'Karla'",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                textAlign: "center",
                color: "#000000",
                backgroundColor: "yellow",
                height: 40,
                width: 200,
                borderRadius: 20,
              }}
            >
              Connect Wallet
            </button>
          )} */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            {address ? (
              <>
                <div className="w-20 h-20 rounded-full border-4 border-[#4CD7E7] overflow-hidden mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold">Jonathan Smith</h2>
                <p className="text-gray-400 text-sm">Level 12 Vaper</p>
                <p className="text-gray-100 text-xs">{address}</p>
              </>
            ) : (
              <div className="text-center px-4">
                <UserIcon className="w-16 h-16 mx-auto mb-4 text-[#4CD7E7]" />
                <h2 className="text-2xl font-bold mb-2">Welcome to DVA</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Connect your wallet to start tracking your vaping journey
                </p>
              </div>
            )}
          </div>
        </div>

        {!address ? (
          <div className="p-4 mt-4">
            <button
              onClick={() => open()}
              className="w-full bg-gradient-to-r from-[#4CD7E7] to-[#4169E1] text-white py-3 rounded-xl font-medium shadow-lg shadow-[#4CD7E7]/20"
            >
              <div className="flex items-center justify-center gap-2">
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </div>
            </button>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 p-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] rounded-2xl p-4 flex flex-col items-center"
                >
                  <stat.icon className="w-6 h-6 text-[#4CD7E7] mb-2" />
                  <span className="text-2xl font-bold mb-1">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Recent Achievements */}
            <div className="p-4">
              <div className="bg-[#1A1A1A] rounded-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Recent Achievements</h3>
                  <button className="text-[#4CD7E7] text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
                    >
                      <div>
                        <h4 className="font-medium mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {achievement.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#4CD7E7]">
                          +{achievement.points}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wallet Section */}
            <div className="p-4">
              <div className="bg-[#1A1A1A] rounded-2xl p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Wallet Balance</h3>
                    <p className="text-[#4CD7E7] text-2xl font-bold">
                      436.12 DVA
                    </p>
                  </div>
                  <button className="bg-[#4CD7E7]/10 text-[#4CD7E7] px-4 py-2 rounded-lg">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
