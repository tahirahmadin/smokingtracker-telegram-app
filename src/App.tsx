import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Challenges from './pages/Challenges';
import Market from './pages/Market';
import Profile from './pages/Profile';

function App() {
  return (
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
  );
}

export default App;