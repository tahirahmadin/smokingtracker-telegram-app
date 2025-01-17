import BottomNav from '../components/BottomNav';

export default function Profile() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4">
        <h1 className="text-2xl">Profile</h1>
      </div>
      <BottomNav active="profile" />
    </div>
  );
}