import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../formik/FormikControl';

function ThirdModal(props) {
  // console.log(props);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { nextStep } = props;

  // const cont = (e) => {
  //   e.preventDefault();
  //   props.nextStep();
  // };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const initialValues = {
    name: '',
  };

  const validationScheme = Yup.object({
    name: Yup.string().required('Hey, alien, here on earth we have names 😔 '),
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
            <button className="sign-up" type="button" onClick={onOpen}>
              Sign up
            </button>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              closeOnOverlayClick={false}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                {/* <ModalCloseButton /> */}
                {/* <button type="submit" onClick={cont}>
                   Next
                   </button> */}

                <Form>
                  <ModalBody pb={6}>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Third"
                      name="name"
                    />
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      type="submit"
                      variantColor="blue"
                      mr={3}
                      disabled={!formik.isValid}
                    >
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </Form>
              </ModalContent>
            </Modal>
          </>
        );
      }}
    </Formik>
  );
}

export default ThirdModal;
