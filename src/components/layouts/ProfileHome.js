import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../imgs/user.jpg';
import showImg from '../../imgs/showcase.png';
import TweetTabs from './TweetTabs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../layouts/Loading';
import EditModal from './EditModal';

function ProfileHome({ users, tweets, uid, pictures }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) return <Redirect to="/welcome" />;
  // console.log(auth.uid);
  // console.log(users);
  if (users && pictures) {
    const user = users ? users.find((user) => user.id === auth.uid) : null;
    const picture = pictures
      ? pictures.find((picture) => picture.id === auth.uid)
      : null;

    if (picture) {
    }

    return (
      <div className="home-section col">
        <div className="home-content">
          <div className="top-home-bar">
            <div className="top-profile">
              <Link to="/">
                <i className="fas fa-long-arrow-alt-left"></i>
              </Link>
              <h2>{user.name}</h2>
            </div>
          </div>

          <div className="user-profile-container">
            <div className="screen-img-container">
              {picture ? (
                <img src={picture.img} alt="" />
              ) : (
                <img src={showImg} alt="" />
              )}
            </div>
            <div className="real-user-img">
              {picture ? (
                <img src={picture.img} alt="" />
              ) : (
                <img src={userImg} alt="" />
              )}
            </div>
            <div className="real-user-details">
              <p className="profile-username">{user.name}</p>
              <p className="profile-handle">{`@${user.handle}`}</p>
              <p className="bio">{user.bio}</p>
              <p className="date-joined">
                <i className="far fa-calendar-alt"></i> Joined December 2013
              </p>
            </div>
            <div className="following-count">
              <p className="following">
                <span>{user.following}</span> Following
              </p>
              <p className="followers">
                <span>{user.followers}</span> Followers
              </p>
            </div>
            <EditModal user={user} uid={uid} />
          </div>

          <div className="all-tweets all-tweets-profile">
            <TweetTabs
              picture={picture}
              userImg={userImg}
              tweets={tweets}
              uid={uid}
            />
          </div>
        </div>
      </div>
    );
  }
  return <Loading />;
}

const mapStateToProps = (state) => ({
  users: state.firestore.ordered.users,
  tweets: state.firestore.ordered.tweets,
  uid: state.firebase.auth.uid,
  pictures: state.firestore.ordered.pictures,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'users' }]),
  firestoreConnect([{ collection: 'tweets' }]),
  firestoreConnect([{ collection: 'pictures' }])
)(ProfileHome);
