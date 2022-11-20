import firebase from 'firebase';
import 'firebase/auth'
import'firebase/database'
import 'firebase/app'


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCzg1bI6wZp_rkUUYfoTqqEQ1X6i1O6fV8",
  authDomain: "story-telling-app-94e37.firebaseapp.com",
  projectId: "story-telling-app-94e37",
  storageBucket: "story-telling-app-94e37.appspot.com",
  messagingSenderId: "1075983138598",
  appId: "1:1075983138598:web:bba09683039f66a57e4be7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);