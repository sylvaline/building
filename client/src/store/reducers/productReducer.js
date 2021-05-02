import {FETCH_PRODUCT, CLEAR_CART, REMOVE_QUANTITY, ADD_PRODUCT, ADD_QUANTITY, ADD_TO_CART} from '../actions/types'

const initialState = {
    products : []
}

export default (state=initialState, action) => {

    switch(action.type){
        case FETCH_PRODUCT:
            return{
                product : action.payload
            }
        default:
            return state
    }
    
}