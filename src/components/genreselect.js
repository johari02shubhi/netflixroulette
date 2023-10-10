import React from 'react';
import '../css/genreselect.css';

const GenreList = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div className={'genre-container'}>
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === selectedGenre ? 'red' : 'white'}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreList;
