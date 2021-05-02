import {FETCH_PRODUCT} from '../actions/types'

const initialState = {
    products : []
}

export default function (state=initialState, action){

    switch(action.type){
        case FETCH_PRODUCT:
            return{
                product : action.payload
            }
        default:
            return state
    }
    
}