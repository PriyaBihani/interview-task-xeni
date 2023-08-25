import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movies";
import { Link } from "react-router-dom";

interface MovieTileViewProps {
  movies: Movie[];
  allDataLoaded: boolean;
  onLoadMore: () => void;
}

const MovieTileView: React.FC<MovieTileViewProps> = ({
  movies,
  onLoadMore,
  allDataLoaded,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (allDataLoaded) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    });

    if (lastMovieRef.current) {
      observer.current.observe(lastMovieRef.current);
    }
  }, [onLoadMore]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie, index) => (
        <Link to={`/movies/${movie.id}`}>
          <div
            key={movie.id}
            ref={index === movies.length - 1 ? lastMovieRef : undefined}
          >
            <MovieCard movie={movie} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieTileView;
