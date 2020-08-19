import React from 'react';
import SearchOutput from './SearchOutput';

function SearchContainer() {
  return (
    <div className="search-section col">
      <div className="top-search-bar">
        <div className="search-display">
          <div className="search-input">
            <input
              placeholder="Search Twitter..."
              className="js-search"
              type="text"
            />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>

      <div className="search-output">
        <div className="search-display">
          <SearchOutput />
          <SearchOutput />
          <SearchOutput />
          <SearchOutput />
          <SearchOutput />
        </div>
      </div>

      <div className="footer">
        <span className="rights">all rights cloned</span>|
        <span className="date">&copy;2020</span>
      </div>
    </div>
  );
}

export default SearchContainer;
