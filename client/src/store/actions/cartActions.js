import {CLEAR_CART, INCREASE_CART_QUANTITY, DECREASE_CART_QUANTITY, REMOVE_PRODUCT_FROM_CART, ADD_TO_CART, GET_CARTS, CART_TOTAL, CLEAR_CART_TOTAL} from './types'

import axios from '../../helper/axios'
import Config from '../../helper/Config'



export const add_to_cart = (data) => (dispatch, getState) => {

    const value = {
        post_id : data
    }
    console.log(value)
    const config = Config(getState, "/cart/add-to-cart", 'POST', value)

    axios(config)
    .then(res => {
        dispatch({
            type : ADD_TO_CART,
            payload : res.data
        });
        dispatch(get_cart_items())
    })
    .catch(err => console.log(err))
}

    const get_cart_items = () => (dispatch, getState) => {

    const config = Config(getState, '/cart/get-carts', 'GET' )

    axios(config)
    .then(res => {
        dispatch({
            type : GET_CARTS,
            payload : res.data
        });
    })
    .catch(err => console.log(err))
}

export const decrease_cart_quantity = (data) => (dispatch, getState) => {

    const value = {
        post_id : data
    }

    const config = Config(getState, '/cart/decrease-product-quantity-incart', 'POST', value )

    axios(config)
    .then(res => {
        dispatch({
            type : DECREASE_CART_QUANTITY,
            payload : res.data
        });
    })
    .catch(err => console.log(err.response.data))
}

export const increase_cart_quantity = (data) => (dispatch, getState) => {

    const value = {
        post_id : data
    }

    const config = Config(getState, '/cart/increase-product-quantity-incart', 'POST', value )

    axios(config)
    .then(res => {
        dispatch({
            type : INCREASE_CART_QUANTITY,
            payload : res.data
        });
    })
    .catch(err => console.log(err.response.data))
}

export const remove_product_from_cart = (data) => (dispatch, getState) => {

    const value = {
        post_id : data
    }

    const config = Config(getState, '/cart/remove-product-from-cart', 'POST', value )

    axios(config)
    .then(res => {
        dispatch({
            type : REMOVE_PRODUCT_FROM_CART,
            payload : res.data
        });
    })
    .catch(err => console.log(err.response.data))
}

export const clear_cart = () => (dispatch, getState) => {

    const config = Config(getState, '/cart/clear-cart', 'GET' )

    axios(config)
    .then(res => {
        dispatch({
            type : CLEAR_CART,
            payload : res.data
        });
        dispatch(get_cart_items)
        
    })
    .catch(err => console.log(err.response.data))
}


export const get_cart_total = () => (dispatch, getState) => {
    const config = Config(getState, '/cart/get-subtotal-on-user-cart', 'GET')
    axios(config)
    .then(res => {
        dispatch({
            type : CART_TOTAL,
            payload : res.data
        })
    })
    .catch(err=>console.log(err.response.data))
}

export const clear_cart_total = () => {
    return{
        type : CLEAR_CART_TOTAL
    }
}

export{
    get_cart_items
}