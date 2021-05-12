import {FETCH_PRODUCT, PRODUCT_LOADING, SEARCHED_INPUT} from '../actions/types'

const initialState = {
    products : [],
    is_product_loading : false,
    searched_input : ''
}

export default function (state=initialState, action){

    switch(action.type){

        case PRODUCT_LOADING:
            return{
                is_product_loading : true
            }

        case FETCH_PRODUCT:
            return{
                ...state,
                products : action.payload,
                is_product_loading : false
            }

        case  SEARCHED_INPUT:
            return{
                ...state,
                searched_input : action.payload
            }   
        default:
            return state
    }
    
}