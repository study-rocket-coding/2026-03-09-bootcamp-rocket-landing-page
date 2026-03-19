import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CooperatePage from './pages/CooperatePage';

function App() {
  return (
    <Routes basename={import.meta.env.BASE_URL}>
      <Route path="/" element={<Home />} />
      <Route path="/cooperate" element={<CooperatePage />} />
    </Routes>
  );
}

export default App;
