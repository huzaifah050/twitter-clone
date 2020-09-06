import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { whichRoute, homeRoute } from '../store/actions/projectActions';
import userImg from '../../imgs/user.jpg';

function SIngleTweet({ tweet, pictures }) {
  // const atHome = useSelector((state) => state.tweeter.atHome);
  // console.log(atHome);
  let location = useLocation();
  // console.log(location.pathname);
  const dispatch = useDispatch();
  if (location.pathname === '/') {
    // console.log('from home');
    dispatch(homeRoute());
  } else if (location.pathname === '/profile') {
    // console.log('from profile');
    dispatch(whichRoute());
  }

  let picture = pictures
    ? pictures.find((picture) => picture.id === tweet.p_id)
    : null;

  return (
    <Link to={`/tweet/${tweet.id}`}>
      <div className="tweets-display">
        <div className="tweet-container">
          <div className="tweet-content">
            <div className="img-section">
              {picture ? (
                <img src={picture.img} className="imgg" alt="" />
              ) : (
                <img src={userImg} className="imgg" alt="" />
              )}
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
    </Link>
  );
}

export default SIngleTweet;
