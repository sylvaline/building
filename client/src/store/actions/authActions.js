import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS, GETTING_USER, GET_USER} from './types'

import axios from '../../helper/axios'
import Config from '../../helper/Config'


const get_user = () => (dispatch, getState) =>{

    dispatch({
        type : GETTING_USER
    })

    const config = Config(getState, '/auth/get-user', 'GET' )

    axios(config)
    .then(res => {
        dispatch({
            type : GET_USER,
            payload : res.data
        })
    })
    .catch(err => {
       
        console.log(err)
    })
   
}

export const signup = (value) => dispatch => {

    dispatch({
        type : GETTING_USER
    })

    const config = {
        url : '/auth/signup',
        method : 'POST',
        headers : {
            "Content-Type":"application/json"
        },
        data :  JSON.stringify(value) 
    }

    axios(config)
    .then(res => {
        dispatch({
            type : SIGNUP_SUCCESS,
            payload : res.data
        });
        dispatch(get_user())
    })
    .catch(err => {
        dispatch({type : SIGNUP_FAIL});
        console.log(err)
        
    })
}

export const signin = (value) => dispatch => {

    dispatch({
        type : GETTING_USER
    })

    const config = {
        url : '/auth/signin',
        method : 'POST',
        headers : {
            "Content-Type":"application/json"
        },
        data :  JSON.stringify(value) 
    }


    axios(config)
    .then(res => {
        dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
        });
        dispatch(get_user())
    })
    .catch(err => {
        dispatch({
            type : LOGIN_FAIL,
        });
        console.log(err.response.data)
    })
}

export const signout = () =>{
    return{
        type : LOGOUT_SUCCESS
    }
}


export {
    get_user
}


