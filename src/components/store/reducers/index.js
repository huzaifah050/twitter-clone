import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import tweeterReducer from './tweeterReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tweeter: tweeterReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
