import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchMovies } from "../../redux/features/movies/slice";
import MovieSearchBar from "./MovieSearchBar";
import MovieSort from "./MovieSort";
import MovieTileView from "../MovieTileView";
import { MoviesState } from "../../types/movies";
import { LoadingState } from "../../types/loading";
import { resetMovies } from "../../redux/features/movies/slice";
import { Link } from "react-router-dom";

const MovieSearch: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, allDataLoaded }: MoviesState = useSelector(
    (state: RootState) => state.movie
  );
  const { isLoading }: LoadingState = useSelector(
    (state: RootState) => state.loading
  );
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    dispatch(
      fetchMovies({
        cursor: 0,
        limit: 10,
        sort: sort,
        search: query,
      })
    );
  }, [dispatch, query, sort]);

  const handleSearch = (query: string) => {
    dispatch(resetMovies());
    setQuery(query);
  };

  const handleSortChange = (sort: string) => {
    dispatch(resetMovies());
    setSort(sort);
  };

  const handleLoadMore = () => {
    dispatch(
      fetchMovies({
        cursor: movies?.length || 0,
        limit: 10,
        sort: sort,
        search: query,
      })
    );
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex justify-between items-center mb-8">
          {sort == "" && <MovieSearchBar onSearch={handleSearch} />}
          {query == "" && (
            <MovieSort sortText={sort} onSortChange={handleSortChange} />
          )}
        </div>
        {isLoading && <p>Loading...</p>}
        {movies?.length && movies.length == 0 && <p>No movies</p>}
        {!isLoading && movies?.length && (
          <MovieTileView
            allDataLoaded={allDataLoaded}
            movies={movies}
            onLoadMore={handleLoadMore}
          />
        )}
      </div>
    </>
  );
};

export default MovieSearch;
