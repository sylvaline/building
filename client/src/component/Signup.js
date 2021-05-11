import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signup, responseGoogle} from '../store/actions/authActions'
import {Link, Redirect} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';



function Signup() {

    const {is_authenticated} = useSelector(state => state.auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            email,
            password,
            name
        }

        dispatch(signup(user))

    }
    if(is_authenticated){
        return < Redirect to={'/'} />
    }
    return (
        <div className="auth">
            <div className="auth_title">
                <p>Sign Up</p>
                <p className="is_free">It is 100% FREE</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form_div">
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form_div">
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form_div">
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="more_info">
                    <p> Already have an account?  <span><Link to="/login">Log In</Link></span> </p>
                </div>
                <button>Sign Up</button>
            </form>
            <h1><span>---- Or ----</span></h1>
            <p>
            <GoogleLogin
                clientId="743257448199-6rnf0kv5bjuft36eapc6or8p0dar8sju.apps.googleusercontent.com"
                buttonText="Sign with Google"
                onSuccess={()=>dispatch(responseGoogle())}
                onFailure={()=>dispatch(responseGoogle())}
                cookiePolicy={'single_host_origin'}
            />,
            </p>
        </div>
    )
}

export default Signup
