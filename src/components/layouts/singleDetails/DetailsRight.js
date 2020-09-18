// import React, { useEffect } from 'react';
import SearchContainer from '../SearchContainer';
import DeatilsHome from './DeatilsHome';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import React from 'react';

function DetailsRight({ id, replies, users }) {
  return (
    <div className="container">
      <DeatilsHome id={id} replies={replies} />
      <SearchContainer users={users} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  replies: state.firestore.ordered.replies,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: 'tweets',
      doc: `${props.id}`,
      subcollections: [{ collection: 'replies' }],
      storeAs: 'replies',
    },
  ])
)(DetailsRight);
