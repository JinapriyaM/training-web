// import * as firebase from 'firebase/app'
import 'firebase/database';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDo4rIVBI0FLP8DpVkaD6q5IjcNQq2jEyg",
  authDomain: "dear-diary-madushanka.firebaseapp.com",
  databaseURL: "https://dear-diary-madushanka.firebaseio.com",
  projectId: "dear-diary-madushanka",
  storageBucket: "dear-diary-madushanka.appspot.com",
  messagingSenderId: "1003291588029",
  appId: "1:1003291588029:web:5a67ea1e41e6d1d042ced4",
  measurementId: "G-920G95J3F2"
};

firebase.initializeApp(firebaseConfig);

// export default firebase.database().ref("Users/post")
export const collection = firebase.firestore().collection("/Users");