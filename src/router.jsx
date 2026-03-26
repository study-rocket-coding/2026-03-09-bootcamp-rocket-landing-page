import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CooperatePage from './pages/CooperatePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cooperate" element={<CooperatePage />} />
    </Routes>
  );
}

export default Router;