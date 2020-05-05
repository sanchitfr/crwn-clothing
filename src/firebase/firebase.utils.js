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


    //adding data to the DB
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        console.log(displayName, email);
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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const convertCollectionsArrayToObject = collections => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return{
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

// export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });
//     return await batch.commit();
// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;