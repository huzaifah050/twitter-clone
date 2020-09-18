import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGIN_START,
  LOGOUT_FAILURE,
  LOGOUT_START,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  VERIFY_START,
  CLEAN,
  RECOVER_SUCCESS,
  RECOVER_START,
  RECOVER_FAILURE,
  HANDLE_ERROR,
} from '../types';

export const login = (values, toastSuccess) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: LOGIN_START });
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        dispatch({
          type: LOGIN_SUCCESS,
        });
        toastSuccess();
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: err.message,
        });
      });
  };
};

export const signUp = (values, onSuccess, onError) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: SIGN_UP_START });
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        console.log(res);
        return firestore.collection(`users`).doc(res.user.uid).set({
          name: values.name,
          handle: values.handle,
          dateJoined: new Date(),
          following: 0,
          followers: 0,
          bio: '',
          profileImg: '',
        });
      })
      .then(() => {
        dispatch({ type: SIGN_UP_SUCCESS });
      })
      .then(() => {
        const firebase = getFirebase();

        const user = firebase.auth().currentUser;
        user.sendEmailVerification();
        dispatch({ type: VERIFY_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGN_UP_FAILURE, payload: err.message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: LOGOUT_START });
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOGOUT_FAILURE, payload: err.message });
      });
  };
};

export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  dispatch({ type: VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: VERIFY_FAILURE, payload: err.message });
    console.log(err.message);
  }
};

export const clean = () => {
  return {
    type: CLEAN,
  };
};

export const handleError = () => {
  return {
    type: HANDLE_ERROR,
  };
};
export const recoverPassword = (data) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  dispatch({ type: RECOVER_START });
  try {
    await firebase.auth().sendPasswordResetEmail(data.email);

    dispatch({ type: RECOVER_SUCCESS });
  } catch (err) {
    dispatch({ type: RECOVER_FAILURE, payload: err.message });
  }
};
