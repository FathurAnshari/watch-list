import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Watched } from "./pages/Watched";
import { WatchList } from "./pages/WatchList";
import { Add } from "./pages/Add";
import { Header } from "./components/Header";
import { Fragment } from "react";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Fragment>
  );
}

export default App;
