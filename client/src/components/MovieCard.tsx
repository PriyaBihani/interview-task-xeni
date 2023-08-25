import React from "react";

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-medium mb-2">{movie.title}</h2>
        <p className="text-gray-700">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
