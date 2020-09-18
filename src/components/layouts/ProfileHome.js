import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../imgs/user.jpg';
import showImg from '../../imgs/showcase.png';
import TweetTabs from './TweetTabs';
import { Redirect } from 'react-router-dom';
import Loading from '../layouts/Loading';
import TestEditModal from './TestEditModal';

function ProfileHome({ users, tweets, auth, pictures }) {
  // const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) return <Redirect to="/welcome" />;

  if (users && pictures) {
    const user = users ? users.find((user) => user.id === auth.uid) : null;
    const picture = pictures
      ? pictures.find((picture) => picture.id === auth.uid)
      : null;

    return (
      <div className="home-section col">
        <div className="home-content">
          <div className="top-home-bar">
            <Link to="/">
              <div className="top-profile">
                <i className="fas fa-long-arrow-alt-left"></i>

                <h2>{user.name}</h2>
              </div>
            </Link>
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
            <TestEditModal user={user} uid={auth.uid} />
            {/* <EditModal user={user} uid={auth.uid} /> */}
          </div>

          <div className="all-tweets all-tweets-profile">
            <TweetTabs
              pictures={pictures}
              userImg={userImg}
              tweets={tweets}
              uid={auth.uid}
              auth={auth}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default ProfileHome;
