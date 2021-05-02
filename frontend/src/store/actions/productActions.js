import {FETCH_PRODUCT, CLEAR_CART, REMOVE_QUANTITY, ADD_PRODUCT, ADD_QUANTITY, ADD_TO_CART} from './types'
import axios from '../../helper/axios'


export const get_products = () => dispatch =>{

    axios.get('/products/get-products')
    .then(res => {
        dispatch({
            type : FETCH_PRODUCT,
            payload : res.data
        })
    })
    .catch(err => console.log(err))

}

export const add_to_cart = () => dispatch => {
    
}