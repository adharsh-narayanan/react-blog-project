import React, { useState } from 'react'
import Data from '../components/Data'
import Blog from '../components/Blog'
import Categories from '../components/Categories'

function AllBlogs() {
  const [item,setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]
  

  const filterItems =(cat) => {
    const newItems = Data.filter((newval) => newval.category === cat)
    setItems(newItems)
  }
   
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='text-center col-12 fw-bold mat-3 mb-5'>All Blogs</h1>
        <Categories 
        menuItems = {menuItems}
        filterItems={filterItems}
        setItems={setItems}
        />
        <Blog item={item} />

      </div>
     
    </div>
  )
}

export default AllBlogs