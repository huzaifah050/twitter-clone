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
  useToast,
} from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../formik/FormikControl';
import { signUp } from '../../../store/actions/authActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FirstModal(props) {
  const isLogged = useSelector((state) => state.auth.isLogged);

  const [scrollBehavior] = React.useState('outside');
  const toast = useToast();

  const fnToast = () => {
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const initialValues = {
    name: '',
    handle: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  const validationScheme = Yup.object({
    name: Yup.string().required('Hey, alien, here on earth we have names 😔 '),
    handle: Yup.string().required('Handles make it more fun 😔 '),
    email: Yup.string()
      .email('Invalid email format 😔 ')
      .required('Email is required 😔 '),
    password: Yup.string()
      .required('Password is required 😔 ')
      .min(8, 'Password is too short - should be 8 chars minimum. 😔 '),
    confirmedPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Work not done..!'),
  });

  const history = useHistory();

  const onsubmit = (values) => {
    console.log('Form data', values);
    props.signUp(values);

    // console.log(isLogged);
    console.log('modal submit');
    // history.push('/');
    // if (isLogged) {

    //   console.log(isLogged);
    // }
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
            <SlideIn in={isOpen}>
              {(styles) => (
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                  closeOnOverlayClick={false}
                  scrollBehavior={scrollBehavior}
                  size="xl"
                >
                  <ModalOverlay opacity={styles.opacity} />
                  <ModalContent {...styles}>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />

                    <Form>
                      <ModalBody pb={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Name"
                          name="name"
                          // ref={initialRef}
                        />
                        <FormikControl
                          control="input"
                          type="email"
                          label="Email"
                          name="email"
                        />
                        <FormikControl
                          control="input"
                          type="text"
                          label="Handle"
                          name="handle"
                        />

                        <FormikControl
                          control="input"
                          type="password"
                          label="Password"
                          name="password"
                        />

                        <FormikControl
                          control="input"
                          type="password"
                          name="confirmedPassword"
                          label="Confirm Password"
                        />
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          type="submit"
                          mr={3}
                          disabled={!formik.isValid}
                          style={{ background: '#1da1f2', color: '#f5f8fa' }}
                        >
                          Sign up!
                        </Button>

                        <Button onClick={onClose}>Cancel</Button>
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
  signUp,
};

export default connect(null, mapDispatchToProps)(FirstModal);
