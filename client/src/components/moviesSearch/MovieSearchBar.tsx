import React, { useState } from "react";

interface MovieSearchBarProps {
  onSearch: (query: string) => void;
}

const MovieSearchBar: React.FC<MovieSearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <label htmlFor="query" className="font-medium">
        Search:
      </label>
      <input
        type="text"
        id="query"
        value={query}
        onChange={handleQueryChange}
        className="border border-gray-300 rounded-md px-4 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default MovieSearchBar;
