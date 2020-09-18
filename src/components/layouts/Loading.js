import React from 'react';
import spinner from '../../imgs/spinner.gif';

function Loading() {
  return (
    <div>
      <div class="display-loading">
        <img src={spinner} alt="" />
      </div>
    </div>
  );
}

export default Loading;
