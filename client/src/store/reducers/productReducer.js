import {FETCH_PRODUCT, PRODUCT_LOADING} from '../actions/types'

const initialState = {
    products : [],
    is_product_loading : false
}

export default function (state=initialState, action){

    switch(action.type){

        case PRODUCT_LOADING:
            return{
                is_product_loading : true
            }

        case FETCH_PRODUCT:
            return{
                product : action.payload,
                is_product_loading : false
            }
        default:
            return state
    }
    
}