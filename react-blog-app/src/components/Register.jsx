import React from 'react'

import {Link} from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import '../components/Style.css'


function Register() {



    return (
       <form >
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1>Registration</h1>
                            <div>

                                
                                <FontAwesomeIcon icon={faUser} className='email'/>
                                <input type="text" placeholder='Enter Name' className='fill' />
                            </div>
                            
                            <div className='mail-id'>    
                                
                                <FontAwesomeIcon icon={faEnvelope} className='email'/>
                                <input type="email" placeholder='Enter Email-id' className='fill' />
                            </div>
                            <div className='mail-id'>
                                
                                <FontAwesomeIcon icon={faLock} className='email'/>

                                <input type="password" placeholder='Enter New Password' className='fill' />
                            </div>                   
                        
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="submit">Register</button>
                                </Link>
                            </div>
                            <div className='reg-link'>
                                <p>If Account exist then</p><Link className='link' to='/login'><li>Login!</li></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register