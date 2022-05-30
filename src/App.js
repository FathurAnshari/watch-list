import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Watched } from "./pages/Watched";
import { WatchList } from "./pages/WatchList";
import { Add } from "./pages/Add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WatchList />} />
      <Route path="watched" element={<Watched />} />
      <Route path="add" element={<Add />} />
    </Routes>
  );
}

export default App;
