import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import SIngleTweet from './SIngleTweet';

function TweetTabs({ tweets, uid, pictures }) {
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
              if (tweet.p_id === uid) {
                return (
                  <SIngleTweet
                    key={tweet.id}
                    pictures={pictures}
                    tweet={tweet}
                  />
                );
              }
            })
          ) : (
            <p>You have no tweets</p>
          )}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TweetTabs;
