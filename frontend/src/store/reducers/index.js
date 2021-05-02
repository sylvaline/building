import {combineReducers} from 'redux'
import productReducer from './productReducer'
import auth from './authReducer'
import cart from './cartReducer'


export default combineReducers({
    product : productReducer,
    auth : auth,
    cart : cart
})