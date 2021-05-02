import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS, GETTING_USER, GET_USER, GET_USER_ERROR} from '../actions/types'

const initialState = {
    token : localStorage.getItem('token'),
    is_authenticated : false,
    user:localStorage.getItem('user'),
    is_loading : false

}

export default function (state=initialState, action){
    switch (action.type) {
            case GETTING_USER:
                return{
                    ...state,
                    is_loading : true
                }
            case GET_USER:
            localStorage.setItem('user', JSON.stringify(action.payload)) 
            return{
                ...state,
                user : action.payload,
                is_authenticated : true,
                is_loading : false
            }
            break;
            case LOGIN_SUCCESS:
            case SIGNUP_SUCCESS:  
            localStorage.setItem('token', action.payload.token)  
            localStorage.setItem('user', JSON.stringify(action.payload.user))  
            return{
                ...state,
                ...action.payload,
                is_authenticated : true,
                is_loading : false
            }
            break;
            case LOGIN_FAIL:
            case LOGOUT_SUCCESS:
            case GET_USER_ERROR:
            case SIGNUP_FAIL:
            localStorage.removeItem('token')
            localStorage.removeItem('user')
                return{
                    ...state,
                    token : {},
                    is_authenticated : false,
                    user : {},
                    is_loading : false
                }
                break;
    
        default:
            return state;
    }
}