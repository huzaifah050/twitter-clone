import React from 'react';

function IconLink({ iconn, link }) {
  return (
    <div className="icon-name">
      <div className="icon">
        <span className="material-icons a-icon">{iconn}</span>
      </div>
      <div className="name">
        <span className="namee">{link}</span>
      </div>
    </div>
  );
}

export default IconLink;
