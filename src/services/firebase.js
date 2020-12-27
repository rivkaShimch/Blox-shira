import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
// import dotenv from 'dotenv'
// dotenv.config()
import { setLoginStatus } from '../redux/actions/componentsActions'

firebase.initializeApp({
    apiKey: "AIzaSyDsNZ5U-d4K3ixqwtvv_YJwN16XlCqBiGk",
    authDomain: "blox-firebase.firebaseapp.com",
    databaseURL: "https://blox-firebase.firebaseio.com",
    projectId: "blox-firebase",
    storageBucket: "blox-firebase.appspot.com",
    messagingSenderId: "483850488972",
    appId: "1:483850488972:web:4d7d5564dda13d72057fa9"
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
});


// firebase.initializeApp({
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     // measurementId: process.env.REACT_APP_MEASUREMENT_ID
// });

// firebase.auth.Auth.Persistence.LOCAL;


export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = (props) => {
    console.log(googleProvider);
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
        props.dispatch(setLoginStatus('success'))

        // const token = await auth?.currentUser?.getIdToken(true);
    }).catch((error) => {
        console.log(error.message)
        props.dispatch(setLoginStatus('error'))

    })
}


export const signUpUser = (props, name, email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {

            console.log("e/p ", user.user);
            user.user.username = name
            console.log("e/p username", user.user.username);

            props.dispatch(setLoginStatus('success'))


        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);

            props.dispatch(setLoginStatus('error'))

        });
}

export const signInWithEmailAndPassword = (props, email, password) => {

    auth.signInWithEmailAndPassword(email, password)

        .then((user) => {
            console.log("e/p ", user.user);
            props.dispatch(setLoginStatus('success'))
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            props.dispatch(setLoginStatus('error'))

        });
}


// ...
export const logOut = () => {

    auth.signOut().then(() => {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    })
}






