import React from 'react';
import BigTweetBtn from './BigTweetBtn';
import IconLink from './IconLink';
import ControlProfile from './ControlProfile';
import { Link } from 'react-router-dom';

function ControlPanel({ users, auth }) {
  return (
    <div className="control-panel-content">
      <div className="icons-section">
        <div className="icons-container">
          <Link to="/">
            <IconLink link={'Home'} iconn={'home'} />
          </Link>
          <IconLink link={'Notifications'} iconn={'notification_important'} />
          <IconLink link={'Messages'} iconn={'email'} />
          <IconLink link={'Bookmarks'} iconn={'turned_in_not'} />
          <IconLink link={'List'} iconn={'subject'} />
          <Link to="/profile">
            <IconLink link={'Profile'} iconn={'account_circle'} />
          </Link>
          <IconLink link={'More'} iconn={'more_horiz'} />

          <BigTweetBtn auth={auth} />
        </div>
      </div>

      <div className="profile-details">
        <ControlProfile users={users} auth={auth} />
      </div>
    </div>
  );
}

export default ControlPanel;
