import {
  ADD_TODO,
  ADD_TODO_FAILURE,
  IMAGE_UPLOADED,
  WHICH_ROUTE,
  HOME_ROUTE,
  DELETE_TWEET_ERROR,
  DELETE_TWEET,
} from '../types';

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
        ppleLiked: [],
        ppleRetweeted: [],
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

export const liked = (tweet_id) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const id = getState().firebase.auth.uid;
    firestore
      .collection(`/tweets`)
      .doc(tweet_id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('retrived', doc.data());
          if (!doc.data().ppleLiked.includes(id)) {
            firestore
              .collection(`/tweets`)
              .doc(tweet_id)
              .update({
                ppleLiked: firebase.firestore.FieldValue.arrayUnion(id),
              });
          } else {
            firestore
              .collection(`/tweets`)
              .doc(tweet_id)
              .update({
                ppleLiked: firebase.firestore.FieldValue.arrayRemove(id),
              });
          }
          // console.log(doc.data().ppleLiked.length);
        } else return;
      });
  };
};

export const retweet = (tweet_id) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const id = getState().firebase.auth.uid;
    firestore
      .collection(`/tweets`)
      .doc(tweet_id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('retrived', doc.data());
          if (!doc.data().ppleRetweeted.includes(id)) {
            firestore
              .collection(`/tweets`)
              .doc(tweet_id)
              .update({
                ppleRetweeted: firebase.firestore.FieldValue.arrayUnion(id),
              });
          } else {
            firestore
              .collection(`/tweets`)
              .doc(tweet_id)
              .update({
                ppleRetweeted: firebase.firestore.FieldValue.arrayRemove(id),
              });
          }
          // console.log(doc.data().ppleLiked.length);
        } else return;
      });
  };
};

export const addReply = (tweet, t_id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const profile = getState().firebase.profile;
    console.log(getState().firebase);
    console.log(profile);

    const user = getFirebase().auth().currentUser;

    const id = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection(`/tweets/${t_id}/replies`)
      .add({
        tweet: tweet,
        date: new Date(),
        numLiked: 10,
        ppleLiked: [],
        ppleRetweeted: [],
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

export const likeReply = (tweet_id, reply_id) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const id = getState().firebase.auth.uid;
    firestore
      .collection(`/tweets/${tweet_id}/replies`)
      .doc(reply_id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('retrived', doc.data());
          if (!doc.data().ppleLiked.includes(id)) {
            firestore
              .collection(`/tweets/${tweet_id}/replies`)
              .doc(reply_id)
              .update({
                ppleLiked: firebase.firestore.FieldValue.arrayUnion(id),
              });
          } else {
            firestore
              .collection(`/tweets/${tweet_id}/replies`)
              .doc(reply_id)
              .update({
                ppleLiked: firebase.firestore.FieldValue.arrayRemove(id),
              });
          }
          // console.log(doc.data().ppleLiked.length);
        } else return;
      });
  };
};

export const replyRetweet = (tweet_id, reply_id) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const id = getState().firebase.auth.uid;
    firestore
      .collection(`/tweets/${tweet_id}/replies`)
      .doc(reply_id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('retrived', doc.data());
          if (!doc.data().ppleRetweeted.includes(id)) {
            firestore
              .collection(`/tweets/${tweet_id}/replies`)
              .doc(reply_id)
              .update({
                ppleRetweeted: firebase.firestore.FieldValue.arrayUnion(id),
              });
          } else {
            firestore
              .collection(`/tweets/${tweet_id}/replies`)
              .doc(reply_id)
              .update({
                ppleRetweeted: firebase.firestore.FieldValue.arrayRemove(id),
              });
          }
          // console.log(doc.data().ppleLiked.length);
        } else return;
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
            // .then(() => {
            //   console.log(uid);
            //   return firestore.collection(`users`).doc(uid).set({
            //     imgURl: url,
            //   });
            // });
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    );
  };
};

export const whichRoute = () => {
  return {
    type: WHICH_ROUTE,
  };
};

export const homeRoute = () => {
  return {
    type: HOME_ROUTE,
  };
};

export const deleteTweet = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('tweets')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_TWEET });
      })
      .catch((err) => {
        dispatch({ type: DELETE_TWEET_ERROR, err: err.message });
      });
  };
};

export const deleteReply = (tweet_id, reply_id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(`/tweets/${tweet_id}/replies`)
      .doc(reply_id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_TWEET });
      })
      .catch((err) => {
        dispatch({ type: DELETE_TWEET_ERROR, err: err.message });
      });
  };
};
