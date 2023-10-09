import React, { useState } from 'react';
import './SearchComponent.css';

const SearchComponent = ({ initialQuery, onSearch }) => {
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
    <div>
      <input
        type="text"
        placeholder="Enter your search query..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchComponent;
