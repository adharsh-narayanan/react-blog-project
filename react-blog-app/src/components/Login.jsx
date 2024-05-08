
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import '../components/Style.css'

function Login() {


    return (
        <form>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <FontAwesomeIcon icon={faUser} className='profile' />
                            </div>
                        </div>
                        <div>
                            <h1 className='LHeader'>Login</h1>
                            <div>

                                <FontAwesomeIcon icon={faEnvelope} className='email' />
                                <input type="email" placeholder='Enter Email-id' className='fill' />
                            </div>
                            <div className='second-input'>
                                <FontAwesomeIcon icon={faLock} className='email' />
                                <input type="password" placeholder='Enter Password' className='fill' />
                            </div>
                            {/* HERE WITH THE HELP OF LINK PROVIDED BY REACT-ROUTER WE CAN NAVIGATE TO OTHER PAGES 
                                IN LINK WE HAVE TO PASS LOCATION OF THE NAVIGATING PAGE AS PATH IS DEFINED IN THE APP.JS*/}
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="button">Login</button>
                                </Link>
                            </div>
                            <div className='reg-link'>
                                <Link className='link' to='/registration'>
                                    <li>Register Now</li>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login