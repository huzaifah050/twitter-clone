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
import SingleReply from './SingleReply';
import AddReply from './AddReply';

function ReplyModal({ tweet, picture, auth }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <i onClick={onOpen} className="far fa-comment tweet-icons"></i>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reply Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SingleReply tweet={tweet} picture={picture} />
            <div className="line"></div>
            <AddReply onClose={onClose} auth={auth} t_id={tweet.id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ReplyModal;
