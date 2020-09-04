import React from 'react';
import moment from 'moment';

function SIngleTweet({ tweet, picture, userImg }) {
  return (
    <div className="tweets-display">
      <div className="tweet-container">
        <div className="tweet-content">
          <div className="img-section">
            <img src={tweet.photo || userImg} className="imgg" alt="" />
            {/* {tweet.photo ? (
                <img src={tweet.photo} className="imgg" alt="" />
              ) : (
                <img src={userImg} className="imgg" alt="" />
              )} */}
          </div>
          <div className="single-tweet">
            <div className="user-handle-time">
              <p>
                <span className="user-name">{tweet.name}</span>
                <span className="user-handle">{`@${tweet.handle}`}</span>
                <span className="bull">&bull;</span>
                <span className="time">
                  {moment(tweet.date.toDate().toString()).fromNow()}
                </span>
              </p>
            </div>
            <p>{tweet.tweet}</p>
            <div className="tweet-controls-icons">
              <div className="interactions-container">
                <i className="far fa-comment tweet-icons"></i>
              </div>
              <div className="interactions-container">
                <i className="fas fa-retweet tweet-icons"></i>
                <p className="interaction-count">{tweet.numRetweeted}</p>
              </div>
              <div className="interactions-container">
                <i className="fas fa-heart tweet-icons"></i>
                <p className="interaction-count">{tweet.numLiked}</p>
              </div>
              <div className="interactions-container">
                <i className="fas fa-trash tweet-icons"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SIngleTweet;
