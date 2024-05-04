import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditProfile() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <input className='form-control rounded ' type="text" placeholder='Profile image url' />
          </div>


          <div className='mt-4 mb-3'>
            <input className='form-control rounded ' type="text" placeholder='Name' />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='Bio' />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='instagram url' />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='facebook url' />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='X url' />
          </div>
          <div className='mb-3'>
            <input className='form-control rounded ' type="text" placeholder='LinkdIn url' />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className='w-25' onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProfile