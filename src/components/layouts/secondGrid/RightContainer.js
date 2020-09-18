import React from 'react';
import SearchContainer from '../SearchContainer';
import Home from '../Home';

function RightContainer({ users, tweets, auth, pictures }) {
  return (
    <div className="container">
      <Home tweets={tweets} auth={auth} pictures={pictures} users={users} />
      <SearchContainer users={users} />
    </div>
  );
}

export default RightContainer;
