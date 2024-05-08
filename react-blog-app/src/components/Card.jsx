import React, { useState } from 'react'
import"./Card.css"

function Card({ category }) {
    const [cards] = useState([
        {
            title: 'Blog-1',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`,
            category: 'Lifestyle',
            image: 'https://divineyouwellness.com/wp-content/uploads/2021/09/feature.jpg'
        },
        {
            title: 'Blog-2',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`,
            category: 'Technology',
            image: 'https://emeritus.org/wp-content/uploads/2023/11/tech.png.webp'
            
        },
        {
            title: 'Blog-3',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`,
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            title: 'Blog-4',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`,
            category: 'Sports',
            image: 'https://www.wada-ama.org/sites/default/files/styles/fullscreen_medium/public/2022-04/0721_LDN2017_N1223.jpg?h=2136ce96&itok=PIDYzd01'
        },
        {
            title: 'Blog-5',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`,
            category: 'Entertainments',
            image: 'https://unity.com/sites/default/files/styles/cards_16_9/public/2022-10/unity-02%202.jpg?itok=7MvyO4gO'
            
        },
        {
            title: 'Blog-6',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos rerum quaerat saepe est minus enim numquam, 
            vitae sequi eius sed ratione distinctio aliquam. Natus labore consectetur sed, rerum aliquam saepe.`,
            category: 'Entertainments',
            image: 'https://static1.gensler.com/uploads/image/88070/entertainment-video-1600x900_1695774897.jpg'
        },

    ])

    const filteredCards = category
    ? cards.filter(card => card.category === category)
    : cards;
  return (
    <div>
        <section>
            <div className='container'>
                <h1>All blog</h1>
                <div className='cards'>
                    {
                        cards.map((card, i) => (
                            <div key={i} className='card'>
                            <img src={card.image} alt={card.title} />
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