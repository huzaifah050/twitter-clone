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
import { editProfile } from '../store/actions/projectActions';
import { connect } from 'react-redux';
import UploadImg from './UploadImg';

function TestEditModal({ user, editProfile }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    name: user.name,
    handle: user.handle,
    bio: user.bio ? user.bio : '',
  };

  const validationScheme = Yup.object({
    name: Yup.string().required('Hey, alien, here on earth we have names 😔 '),
    bio: Yup.string('Tell us something about you?'),
    handle: Yup.string().required('Handles make it more fun 😔 '),
  });
  const close = () => {
    onClose();
  };

  const onsubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    console.log('modal submit');
    editProfile(user.id, values, close);
    onSubmitProps.resetForm(initialValues);
    // onClose();
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
            <button type="button" className="edit-profile" onClick={onOpen}>
              Edit Profile
            </button>
            <SlideIn in={isOpen}>
              {(styles) => (
                <Modal
                  isOpen={isOpen}
                  onClose={() => {
                    formik.resetForm(initialValues);
                    onClose();
                  }}
                  closeOnOverlayClick={false}
                  size="xl"
                >
                  <ModalOverlay opacity={styles.opacity} />
                  <ModalContent {...styles}>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />

                    <Form>
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
                          label="Handle"
                          name="handle"
                        />
                        <FormikControl
                          control="input"
                          type="text"
                          label="bio"
                          name="bio"
                          placeholder="short bio.."
                        />
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          type="submit"
                          mr={3}
                          disabled={!formik.isValid}
                          style={{ background: '#1da1f2', color: '#f5f8fa' }}
                        >
                          Update
                        </Button>

                        <Button
                          onClick={() => {
                            formik.resetForm(initialValues);
                            onClose();
                          }}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Form>
                  </ModalContent>
                </Modal>
              )}
            </SlideIn>
          </>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = {
  editProfile,
};

export default connect(null, mapDispatchToProps)(TestEditModal);
