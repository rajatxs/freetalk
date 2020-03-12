import firebase from 'firebase'


import firebaseConfig from './firebase.config'

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

const firestore = firebase.firestore();

firestore.enablePersistence()
.catch(function(err) {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // console.error("Multiple tabs open, persistence can only be enabled");
  } else if (err.code == 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    // console.error("The current browser does not support all of the");
  }
});

export { firestore };