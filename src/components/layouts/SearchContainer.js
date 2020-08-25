import React from 'react';
import SearchOutput from './SearchOutput';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

function SearchContainer(props) {
  const logout = () => {
    console.log(1);
    props.signOut();
  };

  return (
    <div className="search-section col">
      <div className="top-search-bar">
        <div className="search-display">
          <div className="search-input">
            <input
              placeholder="Search Twitter..."
              className="js-search"
              type="text"
            />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>

      <div className="search-output">
        <div className="search-display">
          <SearchOutput />
          <SearchOutput />
          <SearchOutput />
          <SearchOutput />
          <SearchOutput />
        </div>
      </div>

      <button className="logout-btn" type="button" onClick={logout}>
        Logout
      </button>

      <div className="footer">
        <span className="rights">all rights cloned</span>|
        <span className="date">&copy;2020</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  signOut,
};

export default connect(null, mapDispatchToProps)(SearchContainer);
