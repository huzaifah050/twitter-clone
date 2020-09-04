import { ADD_TODO, ADD_TODO_FAILURE, IMAGE_UPLOADED } from '../types';

export const addTweet = (tweet) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const profile = getState().firebase.profile;
    console.log(getState().firebase);
    console.log(profile);

    const user = getFirebase().auth().currentUser;

    const id = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection('tweets')
      .add({
        tweet: tweet,
        date: new Date(),
        numLiked: 10,
        numRetweeted: 10,
        name: profile.name,
        handle: profile.handle,
        p_id: id,
        photo: user.photoURL,
      })
      .then(() => {
        console.log('success');
        dispatch({ type: ADD_TODO, tweet });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_TODO_FAILURE, err });
      });
  };
};

export const uploadImg = (file) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const { image } = file;
    // console.log(image.name);
    const storageRef = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    storageRef.on(
      'state_changed',
      (snapshot) => {
        //progress
      },
      (error) => {
        //error
        console.log(error);
      },
      () => {
        //completed
        firebase
          .storage()
          .ref(`images`)
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            const state = getState();
            const uid = state.firebase.auth.uid;
            console.log(url);
            return firestore
              .collection(`pictures`)
              .doc(uid)
              .set({
                img: url,
              })
              .then(() => {
                const user = getFirebase().auth().currentUser;
                console.log(user);

                user.updateProfile({
                  photoURL: url,
                });
                console.log(user);

                dispatch({ type: IMAGE_UPLOADED, payload: url });
              });
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    );
  };
};
