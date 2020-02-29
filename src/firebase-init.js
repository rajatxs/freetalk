import firebase from 'firebase'

import firebaseConfig from './firebase.config'

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export const firestore = app.firestore();