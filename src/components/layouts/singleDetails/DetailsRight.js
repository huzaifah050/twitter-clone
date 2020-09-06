import React from 'react';
import SearchContainer from '../SearchContainer';
import DeatilsHome from './DeatilsHome';

function DetailsRight({ id }) {
  return (
    <div className="container">
      <DeatilsHome id={id} />
      <SearchContainer />
    </div>
  );
}

export default DetailsRight;
