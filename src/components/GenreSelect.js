import React from 'react';

const GenreList = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div>
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === selectedGenre ? 'selected' : ''}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreList;
