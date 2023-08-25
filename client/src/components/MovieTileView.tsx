import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movies";

interface MovieTileViewProps {
  movies: Movie[];
  onLoadMore: () => void;
}

const MovieTileView: React.FC<MovieTileViewProps> = ({
  movies,
  onLoadMore,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
      {movies.length > 0 &&
        movies.map((movie, index) => {
          if (index === movies.length - 1) {
            return (
              <div key={movie.id} ref={lastMovieRef}>
                <MovieCard movie={movie} />
              </div>
            );
          } else {
            return (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          }
        })}
    </div>
  );
};

export default MovieTileView;
