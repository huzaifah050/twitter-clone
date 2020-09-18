import React, { useState } from 'react';
import SearchOutput from './SearchOutput';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import NoSearch from './NoSearch';
import Loading from './Loading';

function SearchContainer({ users, signOut, loading, error }) {
  const [state, setState] = useState('');
  const logout = () => {
    signOut();
  };

  const usersSearched = users
    ? users.filter((user) => {
        const handle = user.handle;
        if (handle.toLowerCase().indexOf(state.toLowerCase()) !== -1) {
          return user;
        }
      })
    : null;

  return (
    <div className="search-section col">
      <div className="top-search-bar">
        <div className="search-display">
          <div className="search-input">
            <input
              placeholder="Search by handle.."
              className="js-search"
              type="text"
              onChange={(e) => {
                setState(e.target.value);
              }}
              value={state}
            />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      {users ? (
        <div className="search-output">
          <div className="search-display">
            {usersSearched && usersSearched.length > 0 ? (
              usersSearched.map((user) => {
                return <SearchOutput user={user} key={user.id} />;
              })
            ) : (
              <NoSearch />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <button
        className="logout-btn"
        type="button"
        disabled={loading}
        onClick={logout}
      >
        {loading ? 'Logging out..' : 'Logout'}
      </button>
      {error ? (
        <div className="logout-error-container">
          <p className="error-logout">{error}</p>
        </div>
      ) : null}

      <div className="footer">
        <span className="rights">all rights cloned</span>|
        <span className="date">&copy;2020</span>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.logout.loading,
  error: auth.logout.error,
});

const mapDispatchToProps = {
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
