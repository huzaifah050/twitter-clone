import React from 'react';
import ControlPanel from './ControlPanel';
import RightContainer from './secondGrid/RightContainer';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MainDisplay() {
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) return <Redirect to="/welcome" />;
  // if (isLoaded && !auth.uid) return <Redirect to="/welcome" />;
  // if (isLoaded && isEmpty) return <Redirect to="/welcome" />;

  return (
    <div className="parent-container">
      <div className="control-panel col">
        <ControlPanel />
      </div>

      <div className="float-right">
        <RightContainer />
      </div>
    </div>
  );
}

export default MainDisplay;
