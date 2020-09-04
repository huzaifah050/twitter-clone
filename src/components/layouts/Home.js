import React from 'react';
import AddTweet from './AddTweet';
import SIngleTweet from './SIngleTweet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import userImg from '../../imgs/user.jpg';

function Home({ tweets, pictures }) {
  const auth = useSelector((state) => state.firebase.auth);
  const picture = pictures
    ? pictures.find((picture) => picture.id === auth.uid)
    : null;
  if (picture) {
    return (
      <div className="home-section col">
        <div className="home-content">
          <div className="top-home-bar">
            <h2>Home</h2>
          </div>

          <AddTweet picture={picture} userImg={userImg} />

          <div className="all-tweets">
            {tweets ? (
              tweets.map((tweet) => {
                return (
                  <SIngleTweet
                    picture={picture}
                    key={tweet.id}
                    userImg={userImg}
                    tweet={tweet}
                  />
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-section col">
        <div className="home-content">
          <div className="top-home-bar">
            <h2>Home</h2>
          </div>

          <AddTweet picture={picture} userImg={userImg} />

          <div className="all-tweets">
            {tweets ? (
              tweets.map((tweet) => {
                console.log(tweet);
                return (
                  <SIngleTweet
                    picture={picture}
                    key={tweet.id}
                    userImg={userImg}
                    tweet={tweet}
                  />
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tweets: state.firestore.ordered.tweets,
  pictures: state.firestore.ordered.pictures,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tweets' }]),
  firestoreConnect([{ collection: 'pictures' }])
)(Home);
