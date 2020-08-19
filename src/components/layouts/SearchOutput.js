import React from 'react';
import img from '../../imgs/img1.JPG';

function SearchOutput() {
  return (
    <div className="search-account">
      <div className="account">
        <div className="acc">
          <div className="account-display">
            <div className="account-img acc-col">
              <img src={img} className="acc-img" alt="" />
            </div>
            <div className="account-content acc-col">
              <h5>Orchid</h5>
              <h5>@Orchid</h5>
            </div>
            <div className="account-follow follow-col">
              <a href="#" role="button" className="follow-btn">
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOutput;
