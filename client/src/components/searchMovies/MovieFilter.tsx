import React from "react";

interface MovieFilterProps {
  onFilterChange: (filter: string) => void;
}

const MovieFilter: React.FC<MovieFilterProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter" className="font-medium mr-2">
        Filter:
      </label>
      <select
        id="filter"
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        <option value="">All</option>
        <option value="year">2021</option>
        <option value="language">English</option>
      </select>
    </div>
  );
};

export default MovieFilter;
