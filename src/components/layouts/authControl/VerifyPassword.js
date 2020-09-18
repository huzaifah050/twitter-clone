import React, { useEffect } from 'react';
import { verifyEmail, clean } from '../../store/actions/authActions';
import { connect } from 'react-redux';

function VerifyPassword({ verifyEmail, loading, error, clean }) {
  useEffect(() => {
    return () => {
      clean();
    };
  }, [clean]);

  return (
    <div className="verify-container">
      <div className="verify-content">
        <h1>Verify your email</h1>
        <p>Go to your inbox and please verify your email.</p>
        <button
          className="log verify-btn"
          disabled={loading}
          onClick={() => verifyEmail()}
        >
          {loading
            ? 'Sending verification email..'
            : 'Re-send verification email'}
        </button>
        <div className="error-container">
          <p className="verify-error">{error ? error : null}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
  verifyEmail,
  clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPassword);
