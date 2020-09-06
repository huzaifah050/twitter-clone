import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import SIngleTweet from '../SIngleTweet';
import Loading from '../Loading';

function DeatilsHome(props) {
  const { id, tweets, pictures } = props;

  const atHome = useSelector((state) => state.tweeter.atHome);
  // console.log(atHome);
  const tweet = tweets ? tweets.find((tweet) => tweet.id === id) : null;
  // console.log(tweet);
  return (
    <div className="home-section col">
      <div className="home-content">
        <div className="top-home-bar">
          <div className="top-profile">
            {atHome ? (
              <Link to="/">
                <div className="top-profile">
                  <i className="fas fa-long-arrow-alt-left"></i>
                  <h2>Replies</h2>
                </div>
              </Link>
            ) : (
              <Link to="/profile">
                <div className="top-profile">
                  <i className="fas fa-long-arrow-alt-left"></i>
                  <h2>Replies</h2>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="all-tweets">
          <div className="single-details">
            {tweet ? (
              <SIngleTweet tweet={tweet} pictures={pictures} />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tweets: state.firestore.ordered.tweets,
  pictures: state.firestore.ordered.pictures,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tweets' }]),
  firestoreConnect([{ collection: 'pictures' }])
)(DeatilsHome);
