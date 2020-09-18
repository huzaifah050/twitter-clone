import React from 'react';
import img from '../../imgs/user.jpg';
import Loading from './Loading';

function ControlProfile({ users, auth }) {
  const user = users ? users.find((user) => user.id === auth.uid) : null;

  if (user) {
    return (
      <div className="p-circle">
        <div className="profile-details-img p-col">
          {user.profileImg ? (
            <img src={user.profileImg} className="p-img" alt="" />
          ) : (
            <img src={img} className="p-img" alt="" />
          )}
        </div>
        <div className="profile-circle p-col">
          <h3>{user.name}</h3>
          <p>{'@' + user.handle}</p>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default ControlProfile;
