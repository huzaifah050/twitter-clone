import React from 'react';
import SendTweetModal from './SendTweetModal';

function BigTweetBtn({ auth }) {
  return <SendTweetModal auth={auth} />;
}

export default BigTweetBtn;
