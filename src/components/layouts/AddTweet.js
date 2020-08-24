import React, { useState } from 'react';
import img from '../../imgs/img.jpg';
import { connect } from 'react-redux';
import { addTweet } from '../store/actions/projectActions';

function AddTweet(props) {
  const [tweet, setTweet] = useState('');
  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tweet);
    props.addTweet(tweet);
  };

  // console.log(props);
  return (
    <div className="user-form-profile">
      <div className="user-form-profile-details">
        <div className="user-img">
          <img src={img} className="img" alt="" />
        </div>

        <div className="form-details">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="tweet"
              placeholder="What's happening?"
              value={tweet}
              onChange={handleChange}
            />
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
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addTweet,
};

export default connect(null, mapDispatchToProps)(AddTweet);
