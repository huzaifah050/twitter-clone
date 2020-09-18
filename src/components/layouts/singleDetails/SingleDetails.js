import React from 'react';
import ControlPanel from '../ControlPanel';
import DetailsRight from './DetailsRight';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

function SingleDetails({ users, auth, ...props }) {
  if (!auth.uid) return <Redirect to="/welcome" />;
  if (!auth.emailVerified) return <Redirect to="/verify_email" />;

  let id = props.match.params.tweet_id;
  return (
    <div>
      <div className="parent-container">
        <div className="control-panel col">
          <ControlPanel users={users} auth={auth} />
        </div>

        <div className="float-right">
          <DetailsRight id={id} users={users} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  users: state.firestore.ordered.users,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tweets', orderBy: ['date', 'desc'] }]),
  firestoreConnect([{ collection: 'pictures' }]),
  firestoreConnect([{ collection: 'users' }])
)(SingleDetails);
