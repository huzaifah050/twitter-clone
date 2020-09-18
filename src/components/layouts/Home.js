import React from 'react';
import AddTweet from './AddTweet';
import SIngleTweet from './SIngleTweet';
import Loading from './Loading';
import userImg from '../../imgs/user.jpg';

function Home({ tweets, pictures, auth, users }) {
  const picture = pictures
    ? pictures.find((picture) => picture.id === auth.uid)
    : null;

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
                  pictures={pictures}
                  key={tweet.id}
                  userImg={userImg}
                  tweet={tweet}
                  auth={auth}
                  users={users}
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

export default Home;
