import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import WatchlistCenter from "./pages/WatchlistCenter";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { getToken } from "./redux/features/user/slice";

function App() {
  useEffect(() => {
    getToken();
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/watchlistcenter" element={<WatchlistCenter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
