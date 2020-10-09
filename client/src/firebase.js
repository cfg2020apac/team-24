import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "",
    authDomain: "wolf-n-bunny-chat.firebaseapp.com",
    databaseURL: "https://wolf-n-bunny-chat.firebaseio.com",
    projectId: "wolf-n-bunny-chat",
    storageBucket: "wolf-n-bunny-chat.appspot.com",
    messagingSenderId: "277031010746",
    appId: "1:277031010746:web:a152bc32e7bc4932e71d83",
    measurementId: "G-XWT02XTJ61"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase