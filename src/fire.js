import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCNrC1QNRZMqyc7ixdKJ9sWzW-0JLKGYiU",
  authDomain: "buildingblock-52825.firebaseapp.com",
  databaseURL: "https://buildingblock-52825.firebaseio.com/",
  storageBucket: "buildingblock-52825.appspot.com",
  messagingSenderId: "736642169899"
};
var fire = firebase.initializeApp(config);
export default fire;