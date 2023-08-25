import React from "react";
import { Movie } from "../types/movies";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-medium mb-2">{movie.title}</h2>
        <p className="text-gray-700">{movie.releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
