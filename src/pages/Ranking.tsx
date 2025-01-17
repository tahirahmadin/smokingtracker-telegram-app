import BottomNav from '../components/BottomNav';

export default function Ranking() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4">
        <h1 className="text-2xl">Ranking</h1>
      </div>
      <BottomNav active="ranking" />
    </div>
  );
}