import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchMovies } from "../../redux/features/movies/slice";
import MovieSearchBar from "./MovieSearchBar";
import MovieSort from "./MovieSort";
import MovieTileView from "./../MovieTileView";
import { Movie, MoviesState } from "../../types/movies";

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("vote_average.desc");

  const dispatch = useDispatch();
  const { movies }: MoviesState = useSelector(
    (state: RootState) => state.movie
  );
  console.log(movies);
  useEffect(() => {
    console.log(query);
    dispatch(fetchMovies({ page: 1, limit: 20, sort: -1, search: query }));
  }, [dispatch, query, sort]);

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handleSortChange = (sort: string) => {
    setSort(sort);
  };

  const handleLoadMore = () => {
    // if (page < totalPages) {
    //   dispatch(fetchMovies(query, sort, filter, page + 1));
    // }
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <MovieSearchBar onSearch={handleSearch} />
        <div className="flex justify-between items-center mb-8">
          <MovieSort onSortChange={handleSortChange} />
        </div>
        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && ( */}
        <MovieTileView movies={movies} onLoadMore={handleLoadMore} />
        {/* )} */}
      </div>
      z
    </>
  );
};

export default MovieSearch;
