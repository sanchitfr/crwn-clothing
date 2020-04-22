import firebase from 'firebase/app';
import 'firebase/firestore'; //for database
import 'firebase/auth'; // for authorisation

const config = {
    apiKey: "AIzaSyC8N41QQRtjcPJHftmiKNFUR5VKyUdBRvs",
    authDomain: "crwn-db-f6eb8.firebaseapp.com",
    databaseURL: "https://crwn-db-f6eb8.firebaseio.com",
    projectId: "crwn-db-f6eb8",
    storageBucket: "crwn-db-f6eb8.appspot.com",
    messagingSenderId: "987174963722",
    appId: "1:987174963722:web:a185873363353260086df3",
    measurementId: "G-RCX8VW40SR"
};

//method to save data in our firestore DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // userRef contains the documentReference object for the user that logged in, which is determined by the uid of the user.
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);

    //adding data to the DB
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        //creating data
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log("error adding data", error.message);
        }
        
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;