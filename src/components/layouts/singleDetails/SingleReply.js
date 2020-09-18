import React from 'react';
import userImg from '../../../imgs/user.jpg';
import moment from 'moment';

function SingleReply({ tweet, picture }) {
  return (
    <div className="reply-tweet-container">
      <div className="reply-img">
        {picture ? (
          <img src={picture.img} className="imgg" alt="" />
        ) : (
          <img src={userImg} className="imgg" alt="" />
        )}
      </div>
      <div className="reply-tweet">
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
        <div className="replied-to-tweet">
          <p>{tweet.tweet}</p>
        </div>
        <div className="reply-to">
          <p>
            Replying to <span>{`@${tweet.handle}`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleReply;
