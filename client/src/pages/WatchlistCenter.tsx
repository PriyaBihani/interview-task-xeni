import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const WatchlistCenter = () => {
  const movies = useSelector((state: RootState) => state.user.watchlist);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.length && movies.length > 0 ? (
        movies.map((movie: any, index: number) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div key={movie.id} className="m-6">
              <MovieCard
                movie={{
                  ...movie,
                  posterUrl: `https://image.tmdb.org/t/p/w500${movie.posterUrl}`,
                }}
                markAsWatched={true}
              />
            </div>
          </Link>
        ))
      ) : (
        <div className="text-gray-500 text-center py-10">
          <p>Nothing to show</p>
        </div>
      )}
    </div>
  );
};

export default WatchlistCenter;
