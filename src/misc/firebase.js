import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCEuEcmkmR1ZoPXRIkr3yK9l0zGYz0769g',
  authDomain: 'chat-web-app-acb72.firebaseapp.com',
  projectId: 'chat-web-app-acb72',
  storageBucket: 'chat-web-app-acb72.appspot.com',
  messagingSenderId: '1020693482045',
  appId: '1:1020693482045:web:a48a640f266c22cab1b854',
};

export const app = firebase.initializeApp(config);
export const auth = app.auth();
