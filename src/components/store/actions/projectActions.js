export const addTweet = (tweet) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('tweets')
      .add({
        tweet,
      })
      .then(() => {
        console.log('success');
        // dispatch({ type: 'ADD_TODO', tweet });
      })
      .catch((err) => {
        console.log(err);
        // dispatch({ type: 'ADD_TODO_ERROR', err });
      });
  };
};
