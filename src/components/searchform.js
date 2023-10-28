import React, { useState } from 'react';
import '../css/searchform.css';

const SearchForm = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className="form-container">
      <p className="header-element">FIND YOUR MOVIE</p>
      <input
        className="form-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="form-button" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchForm;