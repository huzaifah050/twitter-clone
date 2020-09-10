import React from 'react';
import img from '../../../imgs/img1.JPG';

function DummyTweet() {
  return (
    <div className="tweets-display">
      <div className="tweet-container">
        <div className="tweet-content">
          <div className="img-section">
            <img src={img} className="imgg" alt="" />
          </div>
          <div className="single-tweet">
            <div className="user-handle-time">
              <p>
                <span className="user-name">Human Being</span>
                <span className="user-handle">@umfrumf</span>
                <span className="bull">&bull;</span>
                <span className="time">19m</span>
              </p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, at.
            </p>
            <div className="tweet-controls-icons">
              <i className="far fa-comment tweet-icons"></i>
              <i className="fas fa-retweet tweet-icons"></i>
              <i className="fas fa-heart tweet-icons"></i>
              <i className="fas fa-trash tweet-icons"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DummyTweet;
