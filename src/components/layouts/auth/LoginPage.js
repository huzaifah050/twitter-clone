import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from '../formik/FormikControl';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginPage(props) {
  const initialValues = {
    email: '',
    password: '',
  };
  const auth = useSelector((state) => state.firebase.auth);
  const isLogged = useSelector((state) => state.auth.isLogged);
  console.log(isLogged);
  const history = useHistory();

  // useEffect(() => {
  //   if (auth.uid) return <Redirect to="/" />;
  //   console.log('test');
  // }, [auth.uid]);

  const toast = useToast();
  const fnToast = () => {
    toast({
      title: 'Logged in',
      description: 'Log in successful',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const toastFail = () => {
    toast({
      title: 'Logged in',
      description: 'Log in fail',
      status: 'warning',
      duration: 10000,
      isClosable: true,
    });
  };

  function checkToast() {
    if (auth.uid) {
      fnToast();
    } else {
      toastFail();
    }
  }

  const validationScheme = Yup.object({
    email: Yup.string()
      .email('Invalid email format 😔 ')
      .required('Email is required 😔 '),
    password: Yup.string()
      .required('Password is required 😔 ')
      .min(8, 'Password is too short - should be 8 characters minimum. 😔 '),
  });

  // const wait = () => {
  //   console.log('calling..');

  //   const time = setTimeout(() => {
  //     history.push('/');
  //   }, 3000);

  //   clearTimeout(time);

  //   console.log('wait..');
  // };

  const onsubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    props.login(values);
    console.log(isLogged);
    if (isLogged) {
      history.push('/');
      checkToast();
    }
    // wait();
    // fnToast();

    onSubmitProps.isSubmitting(false);
  };
  if (auth.uid) return <Redirect to="/" />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={onsubmit}
      validateOnMount={true}
    >
      {(formik) => {
        return (
          <div className="login-container">
            <h2 className="login-header">Log in to Twitter</h2>

            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                autoComplete="new-password"
              />
              {formik.isSubmitting ? (
                <button
                  className="log"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Logging in..
                </button>
              ) : (
                <button
                  className="log"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Log in
                </button>
              )}
              {/* <button
                className="log"
                type="submit"
                disabled={!formik.isValid && formik.isSubmitting}
              >
                Log in
              </button> */}
            </Form>

            <div className="forget-details">
              <a href="/">Forgot Password?</a>{' '}
              <span className="bull">&bull;</span>
              <a href="/register.html">Sign up for Twitter</a>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
