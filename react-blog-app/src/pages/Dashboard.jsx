import React from 'react'
import Profile from '../components/Profile'
import Profilecards from '../components/Profilecards'

function Dashboard() {
  return (
    <>
    <div className=''>
        <div className='p-2 m-3 d-flex justify-content-center align-items-center' style={{height:"",backgroundColor:"#A3E4D7"}}>  
 
             <Profile /> 
        </div>

        <div className='mt-5'>
          <div className='text-center'><h1>Your Blogs</h1></div>
            <Profilecards/>
        </div>


        
    </div>
    </>
  )
}

export default Dashboard