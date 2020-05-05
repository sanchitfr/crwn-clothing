import { takeLatest, put, all, call} from 'redux-saga/effects';


import userActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.actions';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

function* signInOperation(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id : userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
        yield put(signInFailure(error));
    }
};

export function* googleSignIn(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield signInOperation(user);
    }catch(error){
        yield put(signInFailure(error));
    }
}
export function* emailAndPasswordSignIn({ payload : {email, password} }){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield signInOperation(user);
    }catch(error){
        yield put(signInFailure(error));
    }
};

function* signUpStart({ payload : { email, password, displayName }}){
    
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData : {displayName}}));
    }catch(error){
        put(signUpFailure());
    }
}

function* signInAfterSignUp({ payload : { user, additionalData }}){
    yield signInOperation(user, additionalData)
}

function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());

    }catch(error){
        yield put(signOutFailure());
    }
}

function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield signInOperation(userAuth);
    }catch(error){
        signInFailure(error);
    }
        
}


export function* googleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignIn);
}

export function* emailSignInStart(){
    yield takeLatest( userActionTypes.EMAIL_SIGNIN_START, emailAndPasswordSignIn);
}

function* onSignUpStart(){
    yield takeLatest( userActionTypes.SIGN_UP_START, signUpStart )
}

function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp )
}

export function* userSignOutStart(){
    yield takeLatest( userActionTypes.SIGN_OUT_START, signOut )
}


export function* checkUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* userSagas(){
    yield all([
        call(googleSignInStart),
        call(emailSignInStart),
        call(checkUserSession),
        call(userSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}