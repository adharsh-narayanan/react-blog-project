

import {Link} from 'react-router-dom';
import mail from "./images/email.png";
import lock from "./images/lock.png";
import profile from "./images/icon.jpg";


function Register() {
    
    

    
       

    return (
        <form >
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1>Registration</h1>
                            <div>
                                <img src={profile} alt="emial" className='email' />
                                <input type="text" placeholder='Enter Name' className='fill' />
                            </div>
                            <div className='mail-id'>
                                <img src={mail} alt="emial" className='email' />
                                <input type="email" placeholder='Enter Email-id' className='fill' />
                            </div>
                            <div className='mail-id'>
                                <img src={lock} alt="emial" className='email' />
                                <input type="password" placeholder='Enter New Password' className='fill' />
                            </div>
                            <div className='select'>
                                {/* <label className='plist'>Intrest</label> */}
                                    <select >
                                        <option>Android Studio</option>
                                        <option>ReactJS</option>
                                        <option>Python</option>
                                        <option>Machine Learning</option>
                                    </select>
                            </div>
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="submit">Register</button>
                                </Link>
                            </div>
                            <div className='reg-link'>
                                <p>If Account exist then</p><Link className='link' to='/login'><li>Login!!!</li></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register