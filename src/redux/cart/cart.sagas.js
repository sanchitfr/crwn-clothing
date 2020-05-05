import { all, call, put, takeLatest } from 'redux-saga/effects';

import { clearCartOnSignOut } from './cart.actions';
import userActionTypes from '../user/user.types';

function* clearCart(){
        yield put(clearCartOnSignOut());
}

function* clearCartSignOut(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCart);
}

export function* cartSagas(){
    yield all([
        call(clearCartSignOut)
    ])
}