import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { addBlogApi } from '../services/allAPI';

function AddBlog() {

   const navigate = useNavigate()

   //state to store data from input 

   const[addBlog,setAddblog] = useState({
      title:"",
      category:"",
      blogImage:"",
      description:""
   })
   console.log(addBlog);

   const categories =["Entertainment","sports","Travel","Science","Lifestyle"]


//function to submit data
   const handleSubmit=async(e)=>{
         e.preventDefault()

      const {title,category,blogImage,description}=addBlog

      if(!title,!category,!blogImage,!description){
         alert('completely enter the details')
      }else{
           //api call for uploading data

         const result = await addBlogApi(addBlog)

         console.log(result);


         if(result.status>=200 && result.status<300){
            alert('Data added')

            setAddblog({
               title:"",
               category:"",
               blogImage:"",
               description:""

            })

            navigate('/dashboard')

                     
      
           
    
          }
          else{
            //console.log(response);
            alert(`hm....something went wrong`)
          }

          



      }

   }




   
  return (
    <>
<div className='d-flex justify-content-center' >
    <div className='mt-5'  style={{ width: '600px', height: '600px'}}>

       <div  className='d-flex justify-content-center align-items-center mb-5'> <h2>Add Blog</h2></div>
 

            <form >
                
                    <div className='mb-3'>
                        <label htmlFor="">Title</label>
                        <input className='form-control' type="text" placeholder='Enter Title' onChange={(e)=>setAddblog({...addBlog,title: e.target.value})} /> 
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Category</label>
                        <select className='form-control' onChange={(e)=>setAddblog({...addBlog,category: e.target.value })}  >
                         <option value="Select Category">
                            Select
                         </option>
                         {categories.map((items,index)=>(<option key={index} value={items||""}>
                            {items}
                         </option>))}
                        
                        </select>
                    </div>
                      <div className='mb-3'>
                        <label htmlFor="">Image</label>
                        <input  className='form-control' type="text" placeholder='enter image url' onChange={(e)=>setAddblog({...addBlog,blogImage:e.target.value})} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="">Description</label>
                        <textarea style={{height:'250px'}} className='form-control' type="text" onChange={(e)=>setAddblog({...addBlog,description: e.target.value })}   />
                    </div>
                  
                    
               
            </form>
        
           
        
        <div className='buttons d-flex gap-5 mt-5'>
            <button className='btn btn-success ' onClick={(e)=>handleSubmit(e)}>Upload</button>
           <Link to={"/dashboard"}> <button className='btn btn-danger' >Cancel</button></Link>
        
        </div>
        
    </div>
</div>
    </>
  )
}

export default AddBlog