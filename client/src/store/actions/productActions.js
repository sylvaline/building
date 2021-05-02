import {FETCH_PRODUCT} from './types'
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

