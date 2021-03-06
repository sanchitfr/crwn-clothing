import { takeEvery, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsArrayToObject } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

import shopActionTypes from './shop.types';



function* fetchCollectionsStartAsync(){
    yield console.log('I am fired');

    try{

        const collectionRef = firestore.collection('collections');
    
        const snapshot = yield collectionRef.get();
    
        const  collectionsMap = yield call(convertCollectionsArrayToObject, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error));
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsync
    );
} 