import React, { useState } from 'react'
import Card from './Card'

function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div>
         <h1>Categories</h1>
            <button onClick={() => setSelectedCategory(null)}>All</button>
            <button onClick={() => setSelectedCategory('Lifestyle')}>Lifestyle</button>
            <button onClick={() => setSelectedCategory('Technology')}>Technology</button>
            <button onClick={() => setSelectedCategory('Travel')}>Travel</button>
            <button onClick={() => setSelectedCategory('Sports')}>Sports</button>
            <button onClick={() => setSelectedCategory('Entertainments')}>Entertainments</button>

            <Card category={selectedCategory} />
        
    </div>
  )
}

export default Category