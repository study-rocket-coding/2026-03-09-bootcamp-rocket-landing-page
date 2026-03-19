// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CooperatePage from './pages/CooperatePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cooperate" element={<CooperatePage />} />
    </Routes>
  );
}

export default App;
