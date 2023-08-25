import React from "react";

interface MovieSortProps {
  sortText: string;
  onSortChange: (sort: string) => void;
}

const MovieSort: React.FC<MovieSortProps> = ({ onSortChange, sortText }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sort" className="font-medium mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        onChange={handleSortChange}
        className="border border-gray-300 rounded-md px-4 py-2"
        value={sortText}
      >
        <option value="popularity.desc">Popularity</option>
        <option value="vote_average.desc">Top Rated</option>
        <option value="release_date.desc">Release Date</option>
      </select>
    </div>
  );
};

export default MovieSort;
