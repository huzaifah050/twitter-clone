import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import SIngleTweet from '../SIngleTweet';
import Loading from '../Loading';
import SingleReplyDetails from './SingleReplyDetails';

function DeatilsHome(props) {
  const { id, tweets, pictures, replies, auth } = props;

  const atHome = useSelector((state) => state.tweeter.atHome);

  const tweet = tweets ? tweets.find((tweet) => tweet.id === id) : null;

  const reply = replies
    ? replies.map((reply) => {
        return (
          <SingleReplyDetails
            auth={auth}
            key={reply.id}
            tweet={reply}
            pictures={pictures}
            tweet_id={tweet.id}
          />
        );
      })
    : null;

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
              <SIngleTweet tweet={tweet} auth={auth} pictures={pictures} />
            ) : (
              <Loading />
            )}
            {reply}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tweets: state.firestore.ordered.tweets,
  pictures: state.firestore.ordered.pictures,
  auth: state.firebase.auth,
  // replies: state.firestore.ordered.replies,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tweets' }]),
  firestoreConnect([{ collection: 'pictures' }])
  // firestoreConnect((props) => [
  //   {
  //     collection: 'tweets',
  //     doc: `${props.id}`,
  //     subcollections: [{ collection: 'replies' }],
  //     storeAs: 'replies',
  //   },
  // ])
)(DeatilsHome);
