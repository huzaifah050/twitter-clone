import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from '../formik/FormikControl';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';

function LoginPage(props) {
  const initialValues = {
    email: '',
    password: '',
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
    console.log('Form data', values);
    props.login(values);
  };

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
              <button className="log" type="submit" disabled={!formik.isValid}>
                Log in
              </button>
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
