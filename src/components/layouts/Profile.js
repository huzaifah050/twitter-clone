import React from 'react';
import ControlPanel from './ControlPanel';
import ProfileRight from './secondGrid/ProfileRight';

function Profile() {
  return (
    <div className="parent-container">
      <div className="control-panel col">
        <ControlPanel />
      </div>

      <div className="float-right">
        <ProfileRight />
      </div>
    </div>
  );
}

export default Profile;
