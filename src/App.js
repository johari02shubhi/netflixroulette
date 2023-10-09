import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import SearchComponent from './components/SearchComponent';
import GenreList from './components/GenreSelect';

function App() {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };
  const [selectedGenre, setSelectedGenre] = useState('Action');
  const genres = ['Action', 'Drama', 'Comedy', 'Science Fiction', 'Horror'];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter initialValue={5} />
      <h1>Serach Form</h1>
      <SearchComponent initialQuery="Initial Value" onSearch={handleSearch} />
      <h1>Movie Genres</h1>
      <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
    </div>
  );
}

export default App;