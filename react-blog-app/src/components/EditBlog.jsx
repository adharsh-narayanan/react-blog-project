import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editBlogApi, getaBlogApi } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditBlog() {

   //To access the id parameter inside the EditBlog 
   const { id } = useParams()

   const [editblog, setEditblog] = useState({
      title: "",
      category: "",
      blogImage: "",
      description: ""
   })

   const navigate = useNavigate()

   const categories = ["Entertainment", "sports", "Travel", "Science", "Lifestyle"]
   const { title, category, blogImage, description } = editblog

   //function to get single blog based on id

   const getSingleBlog = async (id) => {
      const response = await getaBlogApi(id)
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
         setEditblog({ ...response.data });

      } else {
         alert('Something went wrong')
      }
      console.log(editblog);

   }


   //function to update blog

   const handleUpdate = async (e) => {
      e.preventDefault()
      const result = await editBlogApi(id, editblog)

      console.log(result);

      if (title && category && blogImage && description) {
         if (result.status === 200) {
            toast.success('blog updated succesfully')

            setTimeout(() => {

               navigate('/dashboard')
            }, 2000);

         }
         else {

            toast.error("hmm..something went wrong")
         }
      } else {
         toast.warning('fill the form completely')
      }


   }

   useEffect(() => {
      getSingleBlog(id)
   }, [])





   return (
      <>
         <div className='d-flex justify-content-center' >
            <div className='mt-5' style={{ width: '600px', height: '600px' }}>

               <div className='d-flex justify-content-center align-items-center mb-5'> <h2>Edit Blog</h2></div>


               <form action="">

                  <div className='mb-3'>
                     <label htmlFor="">Title</label>
                     <input className='form-control' value={title || ""} type="text" placeholder='Enter Title' onChange={(e) => setEditblog({ ...editblog, title: e.target.value })} />
                  </div>
                  <div className='mb-3'>
                     <label htmlFor="">Category</label>
                     <select className='form-control' onChange={(e) => setEditblog({ ...editblog, category: e.target.value })}  >
                        <option value={category || "select"}>
                           Select
                        </option>
                        {categories.map((items, index) => (<option key={index} value={items || ""}>
                           {items}
                        </option>))}

                     </select>
                  </div>
                  <div className='mb-3'>
                     <label htmlFor="">Image</label>
                     <input className='form-control' type="text" value={blogImage || ""} placeholder='enter image url' onChange={(e) => setEditblog({ ...editblog, blogImage: e.target.value })} />
                  </div>

                  <div className='mb-3'>
                     <label htmlFor="">Description</label>
                     <textarea style={{ height: '250px' }} value={description || ""} className='form-control' type="text" onChange={(e) => setEditblog({ ...editblog, description: e.target.value })} />
                  </div>



               </form>



               <div className='buttons d-flex gap-5 mt-5'>
                  <button className='btn btn-success ' onClick={(e) => handleUpdate(e)}>Update</button>
                  <Link to={'/dashboard'}><button className='btn btn-danger' >Cancel</button></Link>
               </div>

            </div>
         </div>
         <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </>
   )
}

export default EditBlog