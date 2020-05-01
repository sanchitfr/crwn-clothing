import shopActionTypes from './shop.types';

const INTIAL_STATE = {
    collections : null
}

const ShopReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case shopActionTypes.UPDATE_COLLECTIONS :
            return {
                ...state,
                collections : action.payload
            }
        default :
            return state;
    }
}

export default ShopReducer;