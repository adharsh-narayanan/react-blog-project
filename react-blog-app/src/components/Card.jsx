import React, { useState } from 'react'
import"./Card.css"

function Card() {
    const [cards] = useState([
        {
            title: 'Blog-1',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`
        },
        {
            title: 'Blog-2',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`
        },
        {
            title: 'Blog-3',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`
        },
        {
            title: 'Blog-4',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`
        },
        {
            title: 'Blog-5',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`
        },
        {
            title: 'Blog-6',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`
        },

    ])
  return (
    <div>
        <section>
            <div className='container'>
                <h1>All blog</h1>
                <div className='cards'>
                    {
                        cards.map((card, i) => (
                            <div key={i} className='card'>
                            <h3>{card.title}</h3>
                            <p>{ card.text}</p>
                            <button className='btn'>Read more</button>
    
                        </div>    
                        ))
                    }
                    

                </div>

            </div>
        </section>

    </div>
  )
}

export default Card