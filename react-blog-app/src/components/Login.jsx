import React from 'react'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import '../components/Style.css'

function Login() {


    return (
        <>
            <div id='body' >
                <div className='wrapper'>
                    <form action="">
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input type="text" placeholder='Username' required />
                            <FontAwesomeIcon icon={faUser} className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type="text" placeholder='Password' required />
                            <FontAwesomeIcon icon={faLock} className='icon' />
                        </div>
                        <div className='remember-forget'>
                            <label htmlFor=""><input type="checkbox" />Remember me</label>
                            <a href="#">Forget Password</a>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='register-link'>
                            <p>Don't have an account?<Link className='link' to='/registration'><li>Register</li></Link></p>

                        </div>
                     </form>
                </div>
            </div>
        </>
    )

  

}

export default Login