import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addBlogApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBlog() {

   const navigate = useNavigate()

   //state to store data from input 

   const [addBlog, setAddblog] = useState({
      title: "",
      category: "",
      blogImage: "",
      description: ""
   })


   //to store time



   const categories = ["Entertainment", "sports", "Travel", "Science", "Lifestyle"]

   //to get time
   let time = new Date();
   //Intl.DateTimeFormat() constructor 
   let timestamp = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(time)

   //console.log(timestamp);  

   //console.log(addBlog);






   //function to submit data
   const handleSubmit = async (e) => {
      e.preventDefault()






      const { title, category, blogImage, description } = addBlog

      if (!title, !category, !blogImage, !description) {
         toast.warning('completely enter the details')
      } else {
         //new object that includes all the key-value pairs from the addBlog object, along with an additional time key set to the value of timestamp. 
         const finalData = { ...addBlog, time: timestamp, name: 'gdr' }
         //api call for uploading data
         const result = await addBlogApi(finalData)

         console.log(result);


         if (result.status >= 200 && result.status < 300) {
            toast.success('New Blog added')

            setAddblog({
               title: "",
               category: "",
               blogImage: "",
               description: ""

            })

            setTimeout(() => {

               navigate('/dashboard')
            }, 2000);





         }
         else {
            //console.log(response);
            toast.error(`hm....something went wrong`)
         }





      }

   }





   return (
      <>
         <div className='d-flex justify-content-center p-3' >
            <div className='mt-5' style={{ width: '600px', height: '600px' }}>

               <div className='d-flex justify-content-center align-items-center mb-5'> <h2>Add Blog</h2></div>


               <form >

                  <div className='mb-3'>
                     <label htmlFor="">Title</label>
                     <input className='form-control' type="text" placeholder='Enter Title' onChange={(e) => setAddblog({ ...addBlog, title: e.target.value })} />
                  </div>
                  <div className='mb-3'>
                     <label htmlFor="">Category</label>
                     <select className='form-control' onChange={(e) => setAddblog({ ...addBlog, category: e.target.value })}  >
                        <option value="Select Category">
                           Select
                        </option>
                        {categories.map((items, index) => (<option key={index} value={items || ""}>
                           {items}
                        </option>))}

                     </select>
                  </div>
                  <div className='mb-3'>
                     <label htmlFor="">Image</label>
                     <input className='form-control' type="text" placeholder='enter image url' onChange={(e) => setAddblog({ ...addBlog, blogImage: e.target.value })} />
                  </div>

                  <div className='mb-3'>
                     <label htmlFor="">Description</label>
                     <textarea style={{ height: '250px' }} className='form-control' type="text" onChange={(e) => setAddblog({ ...addBlog, description: e.target.value })} />
                  </div>



               </form>



               <div className='buttons d-flex gap-5 mt-5'>
                  <button className='btn btn-success ' onClick={(e) => handleSubmit(e)}>Upload</button>
                  <Link to={"/dashboard"}> <button className='btn btn-danger' >Cancel</button></Link>

               </div>

            </div>
         </div>
         <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </>
   )
}

export default AddBlog