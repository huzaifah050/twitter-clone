import React from 'react';
import SearchContainer from '../SearchContainer';
import ProfileHome from '../ProfileHome';

function ProfileRight({ users, tweets, auth, pictures }) {
  // console.log('profile right mounting', users, tweets, auth, pictures);
  return (
    <div className="container">
      <ProfileHome
        users={users}
        tweets={tweets}
        auth={auth}
        pictures={pictures}
      />
      <SearchContainer users={users} />
    </div>
  );
}

export default ProfileRight;
