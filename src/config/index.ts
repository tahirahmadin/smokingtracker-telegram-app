import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = "019a002c5f21e41c54693bdfdc8c79a2";

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
