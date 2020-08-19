import React from 'react';
import BigTweetBtn from './BigTweetBtn';
import IconLink from './IconLink';
import ControlProfile from './ControlProfile';

function ControlPanel() {
  return (
    <div className="control-panel-content">
      <div className="icons-section">
        <div className="icons-container">
          <IconLink link={'Home'} iconn={'home'} />
          <IconLink link={'Notifications'} iconn={'notification_important'} />
          <IconLink link={'Messages'} iconn={'email'} />
          <IconLink link={'Bookmarks'} iconn={'turned_in_not'} />
          <IconLink link={'List'} iconn={'subject'} />
          <IconLink link={'Profile'} iconn={'account_circle'} />
          <IconLink link={'More'} iconn={'more_horiz'} />

          <BigTweetBtn />
        </div>
      </div>

      <div className="profile-details">
        <ControlProfile />
      </div>
    </div>
  );
}

export default ControlPanel;
