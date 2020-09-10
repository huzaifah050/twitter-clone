import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import SIngleTweet from './SIngleTweet';

function TweetTabs({ tweets, uid, pictures, auth }) {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab style={{ fontWeight: '600' }}>Tweets</Tab>
        <Tab style={{ fontWeight: '600' }}>Liked Tweets</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {tweets ? (
            tweets.map((tweet) => {
              if (
                tweet.p_id === uid ||
                tweet.ppleRetweeted.includes(auth.uid)
              ) {
                return (
                  <SIngleTweet
                    key={tweet.id}
                    pictures={pictures}
                    tweet={tweet}
                    auth={auth}
                  />
                );
              }
            })
          ) : (
            <p>You have no tweets</p>
          )}
        </TabPanel>
        <TabPanel>
          {tweets ? (
            tweets.map((tweet) => {
              if (tweet.ppleLiked.includes(auth.uid)) {
                return (
                  <SIngleTweet
                    key={tweet.id}
                    pictures={pictures}
                    tweet={tweet}
                    auth={auth}
                  />
                );
              }
            })
          ) : (
            <h1>You have no liked tweets</h1>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TweetTabs;
