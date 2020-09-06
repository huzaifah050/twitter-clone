import React from 'react';
import { Link } from 'react-router-dom';
import FirstModal from './auth/registeration/FirstModal';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function WelcomePage() {
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
              {/* <button className="sign-up" type="button">
                Sign up
              </button> */}
              <FirstModal />
              {/* <ParentRegisteration /> */}
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

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default WelcomePage;
