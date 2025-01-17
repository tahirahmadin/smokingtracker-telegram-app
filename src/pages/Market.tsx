import BottomNav from '../components/BottomNav';

export default function Market() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4">
        <h1 className="text-2xl">Market</h1>
      </div>
      <BottomNav active="market" />
    </div>
  );
}