import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Movie } from "../types/movies";
import { removeFromWatchlist } from "../redux/features/user/slice";

interface MovieCardProps {
  movie: Movie;
  markAsWatched?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  markAsWatched = false,
}) => {
  const dispatch = useDispatch();

  const onMarkAsWatched = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(removeFromWatchlist(movie.id));
  };

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-medium mb-2">{movie.title}</h2>
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-700">{movie.releaseDate}</p>
          {markAsWatched && (
            <button
              onClick={onMarkAsWatched}
              className="bg-blue-500 text-white float-right font-bold py-2 px-4 rounded-lg mt-2"
            >
              Mark as Watched
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
