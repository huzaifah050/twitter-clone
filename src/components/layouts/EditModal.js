import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  SlideIn,
} from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../layouts/formik/FormikControl';
import UploadImg from './UploadImg';

function EditModal({ user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let name = user.name;
  let handle = user.handle;
  // console.log(name);
  const initialValues = {
    name: name,
    bio: '',
    handle: handle,
  };
  // console.log(name);
  const validationScheme = Yup.object({
    name: Yup.string().required('Hey, alien, here on earth we have names 😔 '),
    bio: Yup.string('Tell us something about you?'),
    handle: Yup.string().required('Handles make it more fun 😔 '),
  });

  const onsubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={onsubmit}
    >
      {(formik) => {
        return (
          <>
            <button onClick={onOpen} className="edit-profile">
              Edit profile
            </button>

            <SlideIn in={isOpen}>
              {(styles) => (
                <Form>
                  <Modal
                    isOpen={isOpen}
                    onClose={() => {
                      formik.resetForm(initialValues);
                      onClose();
                    }}
                  >
                    <ModalOverlay opacity={styles.opacity} />
                    <ModalContent {...styles}>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <UploadImg />
                        <FormikControl
                          control="input"
                          type="text"
                          label="Name"
                          name="name"
                        />

                        <FormikControl
                          control="input"
                          type="text"
                          label="Short bio"
                          name="bio"
                          placeholder="short bio.."
                        />
                        <FormikControl
                          control="input"
                          type="text"
                          label="Handle"
                          name="handle"
                        />
                      </ModalBody>

                      <ModalFooter>
                        <Button variantColor="blue" mr={3}>
                          Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Form>
              )}
            </SlideIn>
          </>
        );
      }}
    </Formik>
  );
}

export default EditModal;
