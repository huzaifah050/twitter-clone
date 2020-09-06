import React from 'react';
import ControlPanel from '../ControlPanel';
import DetailsRight from './DetailsRight';

function SingleDetails(props) {
  // console.log(props);
  let id = props.match.params.tweet_id;
  return (
    <div>
      <div className="parent-container">
        <div className="control-panel col">
          <ControlPanel />
        </div>

        <div className="float-right">
          <DetailsRight id={id} />
        </div>
      </div>
    </div>
  );
}

export default SingleDetails;
