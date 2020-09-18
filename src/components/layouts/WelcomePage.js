import React from 'react';
import { Link } from 'react-router-dom';
import FirstModal from './auth/registeration/FirstModal';
import { useSelector, connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function WelcomePage({ users }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.isLoaded) return null;
  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="welcome-container">
      <div className="first-half">
        <div className="first-half-container">
          <div className="first-half-content">
            <div className="heading-icon">
              <span className="material-icons wel">search</span>
              <p>Follow your interests.</p>
            </div>
            <div className="heading-icon">
              <i className="fas fa-users wel"></i>
              <p>Hear what people are talking about.</p>
            </div>
            <div className="heading-icon">
              <i className="far fa-comment wel"></i>
              <p>Join the conversation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-half">
        <div className="second-half-container">
          <div className="second-half-content">
            <h2>See what’s happening in the world right now</h2>
            <p>Join Twitter today.</p>
            <div className="second-half-btns">
              <FirstModal users={users} />
              <Link to="/login">
                <button className="log-in" type="button">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.firestore.ordered.users,
});

// const mapDispatchToProps = {

// }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'users' }])
)(WelcomePage);
