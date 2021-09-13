import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyCdsmWoV9mYdQLIG7-worST7jXLnD7FCpM',
    authDomain: 'chat-web-app-1539f.firebaseapp.com',
    projectId: 'chat-web-app-1539f',
    storageBucket: 'chat-web-app-1539f.appspot.com',
    messagingSenderId: '695068757314',
    appId: '1:695068757314:web:52e56b37a374c190514cdb',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
