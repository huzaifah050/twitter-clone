import React from 'react';
import { connect } from 'react-redux';
import { addTweet } from '../store/actions/projectActions';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function AddTweet({ picture, userImg, ...props }) {
  const initialValues = {
    tweet: '',
  };

  const validationScheme = Yup.object({
    tweet: Yup.string().required().min(1),
  });

  const onsubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    props.addTweet(values.tweet);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  if (picture) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={onsubmit}
        validateOnMount={true}
      >
        {(formik) => {
          return (
            <div className="user-form-profile">
              <div className="user-form-profile-details">
                <div className="user-img">
                  <img src={picture.img} className="img" alt="" />
                </div>

                <div className="form-details">
                  <Form>
                    <Field
                      type="text"
                      name="tweet"
                      placeholder="What's happening?"
                      autoComplete="off"
                    />

                    <div className="down-controls">
                      <div className="inserts">
                        <span className="material-icons insert-icons">
                          insert_emoticon
                        </span>
                        <span className="material-icons insert-icons">gif</span>
                        <span className="material-icons insert-icons">
                          perm_media
                        </span>
                      </div>
                      <div className="count-tweet">
                        <div className="count-cirle ccol"></div>
                        <button
                          type="submit"
                          disabled={
                            !(formik.dirty && formik.isValid) ||
                            formik.isSubmitting
                          }
                          className="tweet-btn ccol"
                        >
                          Tweet
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  } else {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={onsubmit}
        validateOnMount={true}
      >
        {(formik) => {
          return (
            <div className="user-form-profile">
              <div className="user-form-profile-details">
                <div className="user-img">
                  <img src={userImg} className="img" alt="" />
                </div>

                <div className="form-details">
                  <Form>
                    <Field
                      type="text"
                      name="tweet"
                      placeholder="What's happening?"
                      autoComplete="off"
                    />

                    <div className="down-controls">
                      <div className="inserts">
                        <span className="material-icons insert-icons">
                          insert_emoticon
                        </span>
                        <span className="material-icons insert-icons">gif</span>
                        <span className="material-icons insert-icons">
                          perm_media
                        </span>
                      </div>
                      <div className="count-tweet">
                        <div className="count-cirle ccol"></div>
                        <button
                          type="submit"
                          disabled={
                            !(formik.dirty && formik.isValid) ||
                            formik.isSubmitting
                          }
                          className="tweet-btn ccol"
                        >
                          Tweet
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  addTweet,
};

export default connect(null, mapDispatchToProps)(AddTweet);
