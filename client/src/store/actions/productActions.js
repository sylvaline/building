import {FETCH_PRODUCT, PRODUCT_LOADING} from './types'
import axios from '../../helper/axios'


export const get_products = () => dispatch =>{

    dispatch({type:PRODUCT_LOADING})

    axios.get('/products/get-products')
    .then(res => {
        dispatch({
            type : FETCH_PRODUCT,
            payload : res.data
        })
    })
    .catch(err => console.log(err))

}

