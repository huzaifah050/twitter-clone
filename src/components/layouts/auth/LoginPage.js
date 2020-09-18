import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from '../formik/FormikControl';
import { connect } from 'react-redux';
import { login, clean } from '../../store/actions/authActions';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginPage({ loading, error, ...props }) {
  useEffect(() => {
    return () => {
      clean();
    };
  }, []);

  const initialValues = {
    email: '',
    password: '',
  };
  const auth = useSelector((state) => state.firebase.auth);

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

  const validationScheme = Yup.object({
    email: Yup.string()
      .email('Invalid email format 😔 ')
      .required('Email is required 😔 '),
    password: Yup.string()
      .required('Password is required 😔 ')
      .min(8, 'Password is too short - should be 8 characters minimum. 😔 '),
  });

  const onsubmit = (values) => {
    props.login(values, fnToast);
  };
  if (auth.uid) return <Redirect to="/" />;
  if (auth.uid && !auth.emailVerified) return <Redirect to="/verify_email" />;

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
            <p className="login-error">{error ? error : null}</p>

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

              <button
                className="log"
                type="submit"
                disabled={!formik.isValid || loading}
              >
                {loading ? 'Logging in..' : 'Log in'}
              </button>
            </Form>

            <div className="forget-details">
              <Link to="/recover_password">Forgot Password?</Link>
              <span className="bull">&bull;</span>
              <Link to="/welcome">Sign up for Twitter</Link>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.login.loading,
  error: auth.login.error,
});

const mapDispatchToProps = {
  login,
  clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
