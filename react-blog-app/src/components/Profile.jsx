import React from 'react'
import EditProfile from './EditProfile'
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <>
            <div className='w-75 d-flex align-items-center justify-content-center flex-column m-3 p-3'>

                <div className='d-flex align-items-center justify-content-center flex-column '>
                    <img src="https://www.translitescaffolding.com/wp-content/uploads/2013/06/user-avatar.png" width={'150px'} height={'150px'} alt="profile" style={{ borderRadius: "50%" }} />

                    <h1>USERNAME</h1>
                </div>
                <div className=' w-100 mx-5 text-center mb-3'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta debitis dolore molestiae illum a</p>

                    <div className=' w-100 d-flex align-items-center justify-content-evenly mb-3 '>
                        <Link><FontAwesomeIcon style={{ cursor: "pointer", color: 'black' }} size='xl' icon={faInstagram} /></Link>
                        <Link><FontAwesomeIcon style={{ cursor: "pointer", color: 'black' }} size='xl' icon={faFacebook} /></Link>
                        <Link><FontAwesomeIcon style={{ cursor: "pointer", color: 'black' }} size='xl' icon={faSquareXTwitter} /></Link>
                        <Link><FontAwesomeIcon style={{ cursor: "pointer", color: 'black' }} size='xl' icon={faLinkedin} /> </Link>

                    </div>

                    <div className='d-flex  justify-content-between mt-3'>
                    <EditProfile />
                    <Link to={'/Add'}> <button className=' btn btn-primary w-100'>Add Blog</button></Link>
                </div>



                </div>

               

            </div>
        </>
    )
}

export default Profile