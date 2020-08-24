import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

function FormikContainer() {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
    console.log(1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <button type="submit" className="">
              Log in
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
