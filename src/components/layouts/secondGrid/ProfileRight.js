import React from 'react';
import SearchContainer from '../SearchContainer';
import ProfileHome from '../ProfileHome';

function ProfileRight() {
  return (
    <div className="container">
      <ProfileHome />
      <SearchContainer />
    </div>
  );
}

export default ProfileRight;
