import React from 'react';
import userImg from '../../../imgs/user.jpg';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addReply } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

function AddReply({ onClose, auth, t_id, addReply }) {
  console.log(t_id);
  const initialValues = {
    tweet: '',
  };

  const validationScheme = Yup.object({
    tweet: Yup.string().required().min(1),
  });

  const onsubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    addReply(values.tweet, t_id);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    onClose();
  };
  console.log(auth);
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
                {/* <img src={userImg} className="imgg" alt="" /> */}
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
                          Reply
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
  addReply,
};

export default connect(null, mapDispatchToProps)(AddReply);
