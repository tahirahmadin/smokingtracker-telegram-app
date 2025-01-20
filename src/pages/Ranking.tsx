import { MoreVertical } from "lucide-react";
import BottomNav from "../components/BottomNav";

type User = {
  id: number;
  rank: number;
  name: string;
  score: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  avatar: string;
};

export default function Ranking() {
  const users: User[] = [
    {
      id: 1,
      rank: 1,
      name: "Jenny Wilson",
      score: "200055.02",
      change: "3,99%",
      changeType: "positive",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      rank: 2,
      name: "Darrell Steward",
      score: "180055.45",
      change: "33,79%",
      changeType: "positive",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      rank: 3,
      name: "Albert Flores",
      score: "90055.62",
      change: "-6,56%",
      changeType: "negative",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      rank: 4,
      name: "Robert Fox",
      score: "88055.12",
      change: "3,99%",
      changeType: "positive",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      rank: 5,
      name: "Kathryn Murphy",
      score: "10055.06",
      change: "3,99%",
      changeType: "positive",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      rank: 6,
      name: "Cameron Williamson",
      score: "9095.27",
      change: "3,99%",
      changeType: "positive",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      rank: 7,
      name: "Kristin Watson",
      score: "10055.02",
      change: "3,99%",
      changeType: "positive",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      rank: 8,
      name: "Marvin McKinney",
      score: "8055.73",
      change: "3,99%",
      changeType: "positive",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h1 className="text-3xl font-medium">Ranking</h1>
          <button className="text-gray-400">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>

        {/* Rankings List */}
        <div className="px-4">
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-[#1A1A1A] rounded-2xl p-4 flex items-center"
              >
                {/* Rank Number */}
                <div className="w-8 text-xl font-medium text-gray-400">
                  {user.rank}
                </div>

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-medium">{user.name}</h3>
                      <button className="text-sm text-gray-400 mt-1">
                        view info
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="inline-block w-3 h-3 bg-[#4CD7E7] rounded-full" />
                        <span className="text-lg">{user.score}</span>
                      </div>
                      <div
                        className={`text-sm mt-1 ${
                          user.changeType === "positive"
                            ? "text-green-500"
                            : user.changeType === "negative"
                            ? "text-red-500"
                            : "text-gray-400"
                        }`}
                      >
                        {user.change}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="ranking" />
    </div>
  );
}
