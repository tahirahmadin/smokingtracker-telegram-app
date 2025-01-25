import { Wallet } from "lucide-react";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";

export default function WalletButton() {
  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  // 4. Use modal hook
  const { open } = useAppKit();
  const { disconnect } = useDisconnect(); // AppKit hook to disconnect
  const { address } = useAppKitAccount();

  return (
    <button
      onClick={() => open()}
      className="flex items-center gap-2 bg-[#1A1A1A] rounded-full px-4 py-1.5"
    >
      <Wallet className="w-4 h-4 text-[#4CD7E7]" />
      {address ? (
        <span className="text-sm text-white">{shortenAddress(address)}</span>
      ) : null}
    </button>
  );
}
