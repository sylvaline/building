import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signin} from '../store/actions/authActions'
import {Link, Redirect} from 'react-router-dom'

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
        </div>
    )
}

export default Login
