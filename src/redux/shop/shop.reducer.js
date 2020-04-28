import SHOP_DATA from './shopData'

const INTIAL_STATE = {
    collections : SHOP_DATA
}

const ShopReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        default :
            return state;
    }
}

export default ShopReducer;