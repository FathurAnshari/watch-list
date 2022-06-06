import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Watched } from "./pages/Watched";
import { WatchList } from "./pages/WatchList";
import { Add } from "./pages/Add";
import { Header } from "./components/Header";
import { Fragment } from "react";
import "./lib/font-awesome/css/all.min.css";
import { Popular } from "./pages/Popular";
import { DetailPage } from "./pages/DetailPage";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/*" element={<Popular />} />
        <Route path="/watchlist" exact element={<WatchList />} />
        <Route path="/watched" exact element={<Watched />} />
        <Route path="/popular" exact element={<Popular />} />
        <Route path="/add" exact element={<Add />} />
        <Route path="/detail/:movieId" element={<DetailPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
