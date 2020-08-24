import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'twitter-clone-3b1f0.firebaseapp.com',
  databaseURL: 'https://twitter-clone-3b1f0.firebaseio.com',
  projectId: 'twitter-clone-3b1f0',
  storageBucket: 'twitter-clone-3b1f0.appspot.com',
  messagingSenderId: '1099496112611',
  appId: '1:1099496112611:web:c5e907c8789b1e433a60d6',
};

firebase.initializeApp(config);
firebase.firestore();

const storage = firebase.storage();

export { storage, firebase as default };
