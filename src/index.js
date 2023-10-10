import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import SearchForm from './components/searchform';
import GenreSelect from './components/genreselect';
import './index.css';
import './css/header.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedgenre: 'All', 
    };
  }

  handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedgenre: genre });
    alert(`Selected genre: ${genre}`);
  };

  render() {
    const selectedgenre = this.state.selectedgenre;
    return (
      <div className="div-container">
        <Counter initialValue={0} />
        <SearchForm
          initialQuery="What do you want to watch?"
          onSearch={this.handleSearch}
        />
        <GenreSelect
          genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
          selectedGenre={selectedgenre}
          onSelect={this.handleGenreSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);