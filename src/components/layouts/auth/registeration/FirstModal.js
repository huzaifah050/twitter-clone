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
import FormikControl from '../../formik/FormikControl';
import { signUp, handleError } from '../../../store/actions/authActions';
import { connect } from 'react-redux';

function FirstModal({
  users,
  handleError,
  registerError,
  loading,
  error,
  ...props
}) {
  console.log(users);
  console.log(registerError);
  const [scrollBehavior] = React.useState('outside');

  const userHandles = users ? users.map((user) => user.handle) : null;
  console.log(userHandles);

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

  const onsubmit = async (values) => {
    console.log('Form data', values);

    if (userHandles.includes(values.handle)) {
      handleError();
      return;
    }

    props.signUp(values);
    console.log('modal submit');
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

                      <div className="register-error">
                        {registerError ? (
                          <p className="handle-error">
                            Handle already taken, try another one !
                          </p>
                        ) : null}
                        {error ? <p className="handle-error">{error}</p> : null}
                      </div>
                      <ModalFooter>
                        <Button
                          type="submit"
                          mr={3}
                          disabled={!formik.isValid || loading}
                          style={{ background: '#1da1f2', color: '#f5f8fa' }}
                        >
                          {loading ? 'Registering..' : 'Sign up!'}
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

const mapStateToProps = ({ auth }) => ({
  registerError: auth.register.handleError,
  loading: auth.signUp.loading,
  error: auth.signUp.error,
});

const mapDispatchToProps = {
  signUp,
  handleError,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstModal);
