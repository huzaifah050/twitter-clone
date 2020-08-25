import React from 'react';
import SearchContainer from '../SearchContainer';
import Home from '../Home';

function RightContainer() {
  return (
    <div className="container">
      <Home />
      <SearchContainer />
    </div>
  );
}

export default RightContainer;
