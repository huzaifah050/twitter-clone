import React from 'react';
import ControlPanel from './ControlPanel';
import RightContainer from './RightContainer';

function MainDisplay() {
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
