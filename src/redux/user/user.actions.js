import userActionTypes from './user.types'

//SIGN IN 
export const googleSignInStart = () => ({
    type : userActionTypes.GOOGLE_SIGNIN_START 
})

export const signInSuccess = user => ({
    type : userActionTypes.SIGNIN_SUCCESS,
    payload : user
});

export const signInFailure = error => ({
    type : userActionTypes.SIGNIN_FAILURE,
    payload : error
});

export const emailSignInStart = (emailAndPassword) => ({
    type : userActionTypes.EMAIL_SIGNIN_START,
    payload : emailAndPassword 
});


//SIGN OUT
export const signOutStart = () => ({
    type : userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type : userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type : userActionTypes.SIGN_OUT_FAILURE,
    payload : error
});


//SIGN UP
export const signUpStart = userCredentials => ({
    type : userActionTypes.SIGN_UP_START,
    payload : userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type : userActionTypes.SIGN_UP_SUCCESS,
    payload : {user, additionalData}
});

export const signUpFailure = error => ({
    type : userActionTypes.SIGN_UP_FAILURE,
    payload : error
});



//session persistence
export const checkUserSession = () => ({
    type : userActionTypes.CHECK_USER_SESSION
});

