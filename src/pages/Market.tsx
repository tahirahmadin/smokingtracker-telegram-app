import { Search, Expand, Heart, Wallet } from "lucide-react";
import BottomNav from "../components/BottomNav";

type Product = {
  id: number;
  name: string;
  image: string;
  favorite?: boolean;
};

export default function Market() {
  const trendingDeals: Product[] = [
    {
      id: 1,
      name: "Transparent Vape Kit",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800",
      favorite: false,
    },
    {
      id: 2,
      name: "Mango Flavor",
      image:
        "https://images.unsplash.com/photo-1624704765325-fd4868c9702e?w=800",
      favorite: false,
    },
    {
      id: 3,
      name: "Berry Flavor",
      image:
        "https://images.unsplash.com/photo-1624704765252-b1e6cd6fc48c?w=800",
      favorite: false,
    },
  ];

  const featuredItems: Product[] = [
    {
      id: 1,
      name: "Limited Edition Kit",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800",
      favorite: false,
    },
    {
      id: 2,
      name: "NFT Vape Series",
      image:
        "https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?w=800",
      favorite: false,
    },
    {
      id: 3,
      name: "Collector Edition",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800",
      favorite: false,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h1 className="text-3xl font-medium">Market</h1>
          <button className="text-[#4CD7E7]">
            <Wallet className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 mb-6">
          <div className="flex items-center bg-[#1A1A1A] rounded-xl p-3">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="What are you looking for"
              className="bg-transparent flex-1 outline-none text-gray-400"
            />
            <Expand className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Carousel */}
        <div className="px-4 mb-8">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542219550-37153d387c27?w=800"
              alt="New Flavor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00]/90 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <div className="text-sm font-medium tracking-wider">
                INTRODUCING
              </div>
              <div className="text-3xl font-bold">
                OUR NEW
                <br />
                FLAVOR!
              </div>
            </div>
          </div>
        </div>

        {/* Trending Deals */}
        <div className="px-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-medium">Trending Deals</h2>
            <button className="text-[#4169E1]">View more</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {trendingDeals.map((product) => (
              <div
                key={product.id}
                className="relative min-w-[200px] rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-[200px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Heart
                    className={`w-5 h-5 ${
                      product.favorite ? "text-red-500" : "text-white"
                    }`}
                  />
                </button>
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-white font-medium">{product.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured on DeVap */}
        <div className="px-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-medium">Featured on DeVap</h2>
            <button className="text-[#4169E1]">View more</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {featuredItems.map((product) => (
              <div
                key={product.id}
                className="relative min-w-[200px] rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-[200px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Heart
                    className={`w-5 h-5 ${
                      product.favorite ? "text-red-500" : "text-white"
                    }`}
                  />
                </button>
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-white font-medium">{product.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="market" />
    </div>
  );
}
