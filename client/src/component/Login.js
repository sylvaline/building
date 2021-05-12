import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signin} from '../store/actions/authActions'
import {Link, Redirect} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import axios from '../helper/axios'
import {GETTING_USER, AUTH_SUCCESS} from '../store/actions/types'


function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const {is_authenticated} = useSelector(state => state.auth)

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            email,
            password
        }

        dispatch(signin(user))  

    }

    const responseGoogle = (response) =>  {

        console.log(response)
    
        dispatch({
            type : GETTING_USER
        })
    
        const config = {
            url : '/auth/signup-with-google',
            method : 'POST',
            headers : {
                "Content-Type":"application/json"
            },
            data :  JSON.stringify(response) 
        }
    
        axios(config)
        .then(res => {
            dispatch({
                type : AUTH_SUCCESS,
                payload : res.data
            })
        })
        .catch(err => {
           
            console.log(err)
        })

    }

    if(is_authenticated){
        return <Redirect to={'/'}/>
    }

    return (
        <div className="auth">
            <div className="auth_title">
                <p>Sign In</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form_div">
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form_div">
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="more_info">
                    <p>Don't have an account yet? <span><Link to="/signup">Sign Up</Link></span> </p>
                </div>
                <button>Sign In</button>
            </form>

            <h1><span>---- Or ----</span></h1>
            <p>
            <GoogleLogin
                clientId="743257448199-6rnf0kv5bjuft36eapc6or8p0dar8sju.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </p>
        </div>
    )
}

export default Login
