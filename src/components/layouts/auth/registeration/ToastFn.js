import React from 'react';
import { useToast } from '@chakra-ui/core';
function ToastFn() {
  const toast = useToast();

  const fnToast = () => {
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
}

export default ToastFn;
