import React, { useEffect } from 'react'
import { Redirect} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { signout} from '../store/actions/authActions'
import { clear_cart_total} from '../store/actions/cartActions'


function Signout() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(clear_cart_total()) 
        dispatch(signout()) 
    }, [])
    
    return <Redirect to={'/'} />
}

export default Signout
