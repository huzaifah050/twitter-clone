import React from 'react';
import AddTweet from './AddTweet';
import SIngleTweet from './SIngleTweet';

function Home() {
  return (
    <div className="home-section col">
      <div className="home-content">
        <div className="top-home-bar">
          <h2>Home</h2>
        </div>

        <AddTweet />

        <div className="all-tweets">
          <SIngleTweet />
          <SIngleTweet />
          <SIngleTweet />
          <SIngleTweet />
          <SIngleTweet />
          <SIngleTweet />
          <SIngleTweet />
          <SIngleTweet />
        </div>
      </div>
    </div>
  );
}

export default Home;
