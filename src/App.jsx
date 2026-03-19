import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CooperatePage from './pages/CooperatePage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooperate" element={<CooperatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
