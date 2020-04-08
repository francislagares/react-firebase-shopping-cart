import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCW7f1JYfgvC19bhJxpLzTroqjSkfoS2ew',
  authDomain: 'react-firebase-shopping-cart.firebaseapp.com',
  databaseURL: 'https://react-firebase-shopping-cart.firebaseio.com',
  projectId: 'react-firebase-shopping-cart',
  storageBucket: 'react-firebase-shopping-cart.appspot.com',
  messagingSenderId: '974062318368',
  appId: '1:974062318368:web:2670167a704028d0fa5d45',
  measurementId: 'G-ZKTMT5218L',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
