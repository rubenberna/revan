import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "revan-1b368.firebaseapp.com",
    projectId: "revan-1b368"
  });
}

const db = firebase.firestore()

export {
  db
}