import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc, polygon } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = "b611a95a3bb6fe6b182125bed04d4e9d";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const metadata = {
  name: "DevapAi",
  description: "Devap ai is the project to track vape and earn",
  url: "https://devap.vercel.app", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [bsc];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
