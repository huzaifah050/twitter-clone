import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  whichRoute,
  homeRoute,
  liked,
  retweet,
  deleteTweet,
} from '../store/actions/projectActions';
import userImg from '../../imgs/user.jpg';
import ReplyModal from './singleDetails/ReplyModal';

function ProfileSingleTweet({ tweet, pictures, auth, users }) {
  let location = useLocation();

  const dispatch = useDispatch();
  if (location.pathname === '/') {
    dispatch(homeRoute());
  } else if (location.pathname === '/profile') {
    dispatch(whichRoute());
  }

  const handleLike = (id) => {
    dispatch(liked(id));
  };

  const handleRetweet = (id) => {
    dispatch(retweet(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTweet(id));
  };
  let picture = pictures
    ? pictures.find((picture) => picture.id === tweet.p_id)
    : null;

  return (
    <div className="tweets-display">
      <div className="tweet-container">
        <Link to={`/tweet/${tweet.id}`}>
          <div className="tweet-content">
            {/* <PopOver users={users} tweet={tweet}> */}
            <div className="img-section">
              {picture ? (
                <img src={picture.img} className="imgg" alt="" />
              ) : (
                <img src={userImg} className="imgg" alt="" />
              )}
            </div>
            {/* </PopOver> */}
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
            </div>
          </div>
        </Link>

        <div className="single-tweet single-tweet-controls">
          <div className="tweet-controls-icons">
            <div className="interactions-container">
              <ReplyModal tweet={tweet} picture={picture} auth={auth} />
            </div>
            <div className="interactions-container">
              {tweet.ppleRetweeted && tweet.ppleRetweeted.includes(auth.uid) ? (
                <i
                  className="fas fa-retweet tweet-icons"
                  onClick={() => {
                    handleRetweet(tweet.id);
                  }}
                  style={{ color: 'greenyellow' }}
                ></i>
              ) : (
                <i
                  className="fas fa-retweet tweet-icons"
                  onClick={() => {
                    handleRetweet(tweet.id);
                  }}
                ></i>
              )}
              {tweet.ppleRetweeted.length > 0 ? (
                <p className="interaction-count">
                  {tweet.ppleRetweeted.length}
                </p>
              ) : (
                <p className="interaction-count" style={{ color: 'white' }}>
                  0
                </p>
              )}
            </div>
            <div className="interactions-container">
              {tweet.ppleLiked && tweet.ppleLiked.includes(auth.uid) ? (
                <i
                  className="fas fa-heart tweet-icons"
                  onClick={() => {
                    handleLike(tweet.id);
                  }}
                  style={{ color: 'red' }}
                ></i>
              ) : (
                <i
                  className="fas fa-heart tweet-icons"
                  onClick={() => {
                    handleLike(tweet.id);
                  }}
                ></i>
              )}

              {tweet.ppleLiked.length > 0 ? (
                <p className="interaction-count">{tweet.ppleLiked.length}</p>
              ) : (
                <p className="interaction-count" style={{ color: 'white' }}>
                  0
                </p>
              )}
            </div>
            <div className="interactions-container">
              {auth.uid === tweet.p_id ? (
                <i
                  className="fas fa-trash tweet-icons"
                  onClick={() => handleDelete(tweet.id)}
                ></i>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSingleTweet;
