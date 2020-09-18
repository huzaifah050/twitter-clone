import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from '../formik/FormikControl';
import { connect } from 'react-redux';
import { recoverPassword, clean } from '../../store/actions/authActions';

function RecoverPassword({ recoverPassword, error, loading }) {
  useEffect(() => {
    return () => {
      clean();
    };
  }, []);

  const initialValues = {
    email: '',
  };

  const validationScheme = Yup.object({
    email: Yup.string()
      .email('Invalid email format 😔 ')
      .required('Email is required 😔 '),
  });

  const onsubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    recoverPassword(values);
    // console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
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
            <h2 className="login-header">Recover your password</h2>
            <p className="recover-text">
              Type your email to recover your password
            </p>

            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              {loading ? (
                <button
                  className="log"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                >
                  Sending recover email..
                </button>
              ) : (
                <button
                  className="log"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                >
                  Recover password
                </button>
              )}
            </Form>

            <div className="recover-error">
              <p>{error ? error : null}</p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error,
});

const mapDispatchToProps = {
  recoverPassword,
  clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
