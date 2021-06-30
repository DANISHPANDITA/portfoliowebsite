/** @format */

import firebase from "firebase";

const app = firebase.initializeApp({
  ///////security , hahaha /////
});

const db = app.firestore();
export { db };
