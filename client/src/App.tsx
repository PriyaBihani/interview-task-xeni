import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import WatchlistCenter from "./pages/WatchlistCenter";
import Navbar from "./components/Navbar";
import { getUser } from "./redux/features/user/slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Toaster />
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
