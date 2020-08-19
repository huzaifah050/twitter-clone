import React from 'react';
import img from '../../imgs/img1.JPG';

function ControlProfile() {
  return (
    <div className="p-circle">
      <div className="profile-details-img p-col">
        <img src={img} className="p-img" alt="" />
      </div>
      <div className="profile-circle p-col">
        <h3>Human being</h3>
        <p>@umfrumf</p>
      </div>
    </div>
  );
}

export default ControlProfile;
