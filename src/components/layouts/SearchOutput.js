import React from 'react';
import img from '../../imgs/user.jpg';

function SearchOutput({ user }) {
  if (user) {
    return (
      <div className="search-account">
        <div className="account">
          <div className="acc">
            <div className="account-display-parent">
              <div className="account-display">
                <div className="account-img acc-col">
                  {user.profileImg ? (
                    <img src={user.profileImg} className="acc-img" alt="" />
                  ) : (
                    <img src={img} className="acc-img" alt="" />
                  )}
                </div>
                <div className="account-content acc-col">
                  <h5>{user.name}</h5>
                  <h5>{'@' + user.handle}</h5>
                </div>
              </div>
            </div>
            <div className="account-follow follow-col">
              <a href="#" role="button" className="follow-btn">
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchOutput;
