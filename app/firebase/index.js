import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyC4QlkCe94RQUc-ijJevfWY5rx9TDG_Q3o",
    authDomain: "toms-todo-app.firebaseapp.com",
    databaseURL: "https://toms-todo-app.firebaseio.com",
    storageBucket: "toms-todo-app.appspot.com",
    messagingSenderId: "409035447997"
  };

  firebase.initializeApp(config);
} catch (error) {
  throw error;
}

export const firebaseRef = firebase.database().ref();

export default firebase;