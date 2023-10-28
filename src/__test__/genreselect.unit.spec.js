import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreList from '../components/genreselect';

describe('GenreSelect Component', () => {
  test('renders all genres passed in props', () => {
    const genres = ['Action', 'Comedy', 'Drama'];
    const { getByText } = render(<GenreList genres={genres} />);
    genres.forEach((genre) => {
      const genreButton = getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });
  });

  test('highlights a selected genre passed in props', () => {
    const genres = ['Action', 'Comedy', 'Drama'];
    const selectedGenre = 'Comedy';
    const { getByText, getByTestId } = render(
      <GenreList genres={genres} selectedGenre={selectedGenre} />
    );
    genres.forEach((genre) => {
      const genreButton = getByText(genre);
      if (genre === selectedGenre) {
        expect(genreButton).toHaveClass('red');
      } else {
        expect(genreButton).toHaveClass('white');
      }
    });
  });

  test('after a click event on a genre button, component calls "onSelect" callback with the correct genre in arguments', () => {
    const genres = ['Action', 'Comedy', 'Drama'];
    const selectedGenre = 'Comedy';
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={onSelectMock} />
    );

    const newSelectedGenre = 'Drama';
    const genreButton = getByText(newSelectedGenre);
    fireEvent.click(genreButton);

    expect(onSelectMock).toHaveBeenCalledWith(newSelectedGenre);
  });
});
