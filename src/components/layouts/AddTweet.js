import React from 'react';
import img from '../../imgs/img.jpg';

function AddTweet() {
  return (
    <div className="user-form-profile">
      <div className="user-form-profile-details">
        <div className="user-img">
          <img src={img} className="img" alt="" />
        </div>

        <div className="form-details">
          <input type="text" placeholder="What's happening?" />
          <div className="down-controls">
            <div className="inserts">
              <span className="material-icons insert-icons">
                insert_emoticon
              </span>
              <span className="material-icons insert-icons">gif</span>
              <span className="material-icons insert-icons">perm_media</span>
            </div>
            <div className="count-tweet">
              <div className="count-cirle ccol"></div>
              <button className="tweet-btn ccol">Tweet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTweet;
