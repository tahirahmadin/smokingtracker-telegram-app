import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Challenges from "./pages/Challenges";
import Market from "./pages/Market";
import Profile from "./pages/Profile";
import { createAppKit } from "@reown/appkit/react";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { projectId, metadata, networks, wagmiAdapter } from "./config/index";
import { useEffect } from "react";

const queryClient = new QueryClient();

const generalConfig = {
  projectId,
  metadata,
  networks,
};

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
});

function App() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="max-w-md mx-auto h-full bg-dark text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/market" element={<Market />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
