import React, { useState } from "react";
import Counter from "./components/Counter/counter";
import SearchForm from "./components/SearchForm/searchform";
import "./index.css";
import "./components/Header/header.css";
import MoviesList from "./components/Movies/MovieList";
import SortAndGenreControl from "./components/SortAndGenreControl/SortAndGenreControl";

const App = () => {
  const [selectedgenre, setSelectedGenre] = useState("All");
  const [currentSort, setCurrentSort] = useState("releaseDate");

  const handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    alert(`Selected genre: ${genre}`);
  };

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption);
  };

  return (
    <div className="div-container">
      <Counter initialValue={0} />
      <SearchForm
        initialSearchQuery="What do you want to watch?"
        onSearch={handleSearch}
      />
      <SortAndGenreControl
        genres={["All", "Documentary", "Comedy", "Horror", "Crime"]}
        selectedGenre={selectedgenre}
        onSelect={handleGenreSelect}
        currentSort={currentSort}
        onSortChange={handleSortChange}
      />
      <br />
      <MoviesList />
      <br />
    </div>
  );
};

export default App;