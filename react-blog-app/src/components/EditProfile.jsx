import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditProfile() {
  const [profileData,setprofileData]=useState({
    profileImage:"",
    Bio:"",
    instagram:"",
    facebook:"",
    twitterX:"",
    linkdIn:""
  })

  //console.log(profileData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to get profile

  //function to edit profile
  const handleProfileUpdate =(e)=>{
    e.preventDefault()
    

  }


  return (
    <>
      <div>
        <Button variant="warning" onClick={handleShow}>
          Edit Profile

        </Button>
      </div>
      <Modal show={show} size='medium' centered onHide={handleClose}>

        <Modal.Body>

          <div className='mt-4 mb-3'>
            <input className='form-control rounded ' type="text" placeholder='Profile image url' onChange={(e)=>setprofileData({...profileData,profileImage:e.target.value})} />
          </div>          
          <div className='mb-3'>
            <input className='form-control rounded'type="text" placeholder='Bio'  onChange={(e)=>setprofileData({...profileData,Bio:e.target.value})} />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='instagram url'  onChange={(e)=>setprofileData({...profileData,instagram:e.target.value})} />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='facebook url'  onChange={(e)=>setprofileData({...profileData,facebook:e.target.value})} />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='X url'  onChange={(e)=>setprofileData({...profileData,twitterX:e.target.value})} />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='LinkdIn url'  onChange={(e)=>setprofileData({...profileData,linkdIn:e.target.value})} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className='w-25' onClick={(e)=>handleProfileUpdate(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProfile