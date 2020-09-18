import React from 'react';
import ControlPanel from './ControlPanel';
import ProfileRight from './secondGrid/ProfileRight';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

function Profile({ users, tweets, auth, pictures }) {
  if (!auth.uid) return <Redirect to="/welcome" />;
  // if (!auth.emailVerified) return <Redirect to="/verify_email" />;

  return (
    <div className="parent-container">
      <div className="control-panel col">
        <ControlPanel users={users} auth={auth} />
      </div>

      <div className="float-right">
        <ProfileRight
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
  users: state.firestore.ordered.users,
  tweets: state.firestore.ordered.tweets,
  auth: state.firebase.auth,
  pictures: state.firestore.ordered.pictures,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'users' }]),
  firestoreConnect([{ collection: 'tweets', orderBy: ['date', 'desc'] }]),
  firestoreConnect([{ collection: 'pictures' }])
)(Profile);
