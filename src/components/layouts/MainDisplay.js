import React from 'react';
import ControlPanel from './ControlPanel';
import RightContainer from './secondGrid/RightContainer';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

function MainDisplay({ users, tweets, auth, pictures }) {
  if (!auth.isLoaded) {
    return null;
  }
  if (!auth.uid) return <Redirect to="/welcome" />;
  // if (!auth.emailVerified) return <Redirect to="/verify_email" />;
  return (
    <div className="parent-container">
      <div className="control-panel col">
        <ControlPanel users={users} auth={auth} />
      </div>

      <div className="float-right">
        <RightContainer
          users={users}
          tweets={tweets}
          auth={auth}
          pictures={pictures}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tweets: state.firestore.ordered.tweets,
  pictures: state.firestore.ordered.pictures,
  auth: state.firebase.auth,
  users: state.firestore.ordered.users,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tweets', orderBy: ['date', 'desc'] }]),
  firestoreConnect([{ collection: 'pictures' }]),
  firestoreConnect([{ collection: 'users' }])
)(MainDisplay);
