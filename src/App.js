import React, { useState } from "react";
import Counter from "./components/Counter/counter";
import SearchForm from "./components/SearchForm/searchform";
import "./index.css";
import "./components/Header/header.css";
import MoviesList from "./components/Movies/MovieList/MovieList";
import SortAndGenreControl from "./components/SortAndGenreControl/SortAndGenreControl";
import AddMovie from "./components/Movies/AddMovie/AddMovie";

const App = () => {
  const [selectedgenre, setSelectedGenre] = useState("All");
  const [currentSort, setCurrentSort] = useState("releaseDate");
  const [searchString, setSearchString] = useState('');

  const handleSearch = (query) => {
    setSearchString(query);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption);
  };

  return (
    <div className="div-container">
    <Counter initialValue={0} />
    <AddMovie />
    <SearchForm onSearch={handleSearch} />
    <SortAndGenreControl
      genres={["All", "Action", "Comedy", "Horror", "Crime"]}
      selectedGenre={selectedgenre}
      onSelect={handleGenreSelect}
      currentSort={currentSort}
      onSortChange={handleSortChange}
    />
    <MoviesList
      selectedGenre={selectedgenre}
      currentSort={currentSort}
      searchString={searchString}
    />
  </div>
  );
};

export default App;