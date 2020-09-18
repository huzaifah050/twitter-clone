import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core';
import BigBtnAddTweet from './BigBtnAddTweet';

function SendTweetModal({ auth }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button className="big-tweet-btn" onClick={onOpen}>
        Tweet
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BigBtnAddTweet onClose={onClose} auth={auth} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SendTweetModal;
