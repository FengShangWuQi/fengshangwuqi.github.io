import React, { Component } from 'react';

import './style.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
    };
  }

  handleSearch = () => {
    if (!this.state.search) this.setState({ search: true });
  };

  hideSearch = e => {
    const id = e.target.id;
    if (id !== 'search' && id !== 'search-icon') {
      this.setState({
        search: false,
      });
    }
  };

  hideSearch = e => {
    const id = e.target.id;
    if (id !== 'search' && id !== 'search-icon') {
      this.setState({
        search: false,
      });
    }
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <div>
          <img
            id="search-icon"
            style={{
              cursor: search ? 'auto' : 'pointer',
            }}
            className="search-img"
            src={require('../../images/search.png')}
            alt="搜索"
            onClick={this.handleSearch}
          />
        </div>
        <div>
          <input
            id="search"
            style={{ width: search ? 150 : 0 }}
            className="search-input"
            placeholder="搜索"
            type="text"
            onKeyPress={e => {
              if (e.target.value.trim() !== '' && e.key === 'Enter') {
                window.open(
                  `https://www.google.com/search?q=${e.target.value}+枫上雾棋`,
                  '_blank'
                );
                this.setState(prevState => ({
                  search: !prevState.search,
                }));
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Search;
