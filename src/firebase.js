/** @format */

import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCUomOPfF1UPawgOED72QPfukSOx4WtCDk",
  authDomain: "danishpanditaportfolio.firebaseapp.com",
  projectId: "danishpanditaportfolio",
  storageBucket: "danishpanditaportfolio.appspot.com",
  messagingSenderId: "921258638933",
  appId: "1:921258638933:web:9b462f799d3b4e73c85edc",
  measurementId: "G-JKWDBJKQRL",
});

const db = app.firestore();
export { db };
