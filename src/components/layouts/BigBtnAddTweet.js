import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import userImg from '../../imgs/user.jpg';
import { connect } from 'react-redux';
import { addTweet } from '../store/actions/projectActions';

function BigBtnAddTweet({ auth, addTweet, onClose }) {
  const initialValues = {
    tweet: '',
  };

  const validationScheme = Yup.object({
    tweet: Yup.string().required().max(140),
  });

  function close() {
    onClose();
  }

  const onsubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    addTweet(values.tweet, close);
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
          <div className="add-reply-container">
            <div className="reply-tweet-container">
              <div className="reply-img">
                {auth.photoURL ? (
                  <img src={auth.photoURL} className="imgg" alt="" />
                ) : (
                  <img src={userImg} className="imgg" alt="" />
                )}
              </div>
              <div className="reply-tweet">
                <div className="form-details">
                  <Form>
                    <Field
                      as="textarea"
                      type="text"
                      name="tweet"
                      placeholder="Tweet your reply"
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
          </div>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = {
  addTweet,
};

export default connect(null, mapDispatchToProps)(BigBtnAddTweet);
