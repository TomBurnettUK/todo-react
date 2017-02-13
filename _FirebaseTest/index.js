import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC4QlkCe94RQUc-ijJevfWY5rx9TDG_Q3o",
  authDomain: "toms-todo-app.firebaseapp.com",
  databaseURL: "https://toms-todo-app.firebaseio.com",
  storageBucket: "toms-todo-app.appspot.com",
  messagingSenderId: "409035447997"
};

firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo app',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Tom',
    age: 33
  }
});

// todos array
// listen for todos added
// add 2 todos (text)

const todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todo added:', snapshot.val());
});

todosRef.push({ text: 'Walk the dog' });
todosRef.push({ text: 'Walk the cat' });