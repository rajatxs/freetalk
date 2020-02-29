const functions = require('firebase-functions');
const admin = require("firebase-admin");

const serviceAccount = require("./adminPrivateKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://freetalk-pro.firebaseio.com",
  storageBucket: "freetalk-pro.appspot.com"
});

// Execute once when user create or signin using their account.
exports.collectAuthInfo = functions.auth.user().onCreate((user) => {
  const { uid, email, displayName, photoURL, phoneNumber, emailVerified } = user;
  const { creationTime, lastSignInTime } = user.metadata;

  const userdoc = admin.firestore().collection("/userdata").doc(uid);

  return userdoc.set({
    uid, 
    email, 
    emailVerified, 
    displayName, 
    photoURL, 
    phoneNumber, 
    creationTime,
    lastSignInTime
  });
});