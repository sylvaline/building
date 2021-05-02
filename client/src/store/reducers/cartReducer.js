import {CLEAR_CART, INCREASE_CART_QUANTITY, DECREASE_CART_QUANTITY, REMOVE_PRODUCT_FROM_CART, ADD_TO_CART, GET_CARTS, CART_TOTAL, CLEAR_CART_TOTAL} from '../actions/types'

const initialState = {
    carts : {},
    cartTotal : {}
}

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_CARTS:
            return{
                ...state,
                carts : action.payload
            }
            break;

        case ADD_TO_CART:
            return{
                ...state,
                carts : action.payload
            }
            break; 
            
        case INCREASE_CART_QUANTITY:
                return{
                    ...state,
                    carts : action.payload
                }
                break;
                
        case DECREASE_CART_QUANTITY:
            return{
                ...state,
                carts : action.payload
            }
            break;

        case REMOVE_PRODUCT_FROM_CART:
            return{
                ...state,
                carts : action.payload
            }
            break;

        case CLEAR_CART:
            return{
                ...state,
                carts : action.payload
            }
            break;

        case CART_TOTAL:
            return{
                    ...state,
                    cartTotal : action.payload
            }
            break;   
            
        case CLEAR_CART_TOTAL:
            return{
                ...state,
                cartTotal : {},
                carts : {}
            }    
    
        default:
            return state;
    }
}