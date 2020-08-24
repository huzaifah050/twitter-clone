import React from 'react';
import { CircularProgress } from '@chakra-ui/core';

function Loading() {
  return (
    <div>
      <CircularProgress isIndeterminate color="blue"></CircularProgress>
    </div>
  );
}

export default Loading;
