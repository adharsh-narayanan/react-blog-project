import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function EditBlog() {

   //useselector to get data from profile cards

   const cardData = useSelector((state)=>state.editreducer)
   console.log(cardData);

  


  return (
    <>
    <div className='d-flex justify-content-center' >
        <div className='mt-5'  style={{ width: '600px', height: '600px'}}>
    
           <div  className='d-flex justify-content-center align-items-center mb-5'> <h2>Edit Blog</h2></div>
    
           
                <form action="">
                    
                        <div className='mb-3'>
                            <label htmlFor="">Title</label>
                            <input className='form-control' type="text" placeholder='Enter Title' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="">Category</label>
                            <select className='form-control'>
                             <option value="Select Category">
                                Select
                             </option>
                             <option value="Entertainment">
                                Entertainment
                             </option>
                             <option value="technology">
                                Technology
                             </option>
                             <option value="Lifestyle">
                                Lifestyle
                             </option>
                             <option value="Travel">
                                Travel
                             </option>
                             <option value="Science">
                                Science
                             </option>
                             <option value="Sports">
                                Sports
                             </option>
                            </select>
                        </div>
                          <div className='mb-3'>
                            <label htmlFor="">Image</label>
                            <input  className='form-control' type="text" placeholder='enter image url' />
                        </div>
    
                        <div className='mb-3'>
                            <label htmlFor="">Description</label>
                            <textarea style={{height:'250px'}} className='form-control' type="text"  />
                        </div>
                      
                        
                   
                </form>
            
               
            
            <div className='buttons d-flex gap-5 mt-5'>
                <button className='btn btn-success ' type='submit'  >Upload</button>
            <Link to={'/dashboard'}><button className='btn btn-danger' >Cancel</button></Link>         
            </div>
            
        </div>
    </div>
        </>
  )
}

export default EditBlog