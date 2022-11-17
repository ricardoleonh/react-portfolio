import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title:'Movie App',
    github: 'https://github.com/ricardoleonh/Movie-App',
    demo: 'https://ricardoleonh.github.io/Movie-App/'
  }, 
  {
    id: 2,
    image: IMG2,
    title: 'Breaking Bad',
    github: 'https://github.com/ricardoleonh/breaking-bad',
    demo: 'https://ricardoleonh.github.io/breaking-bad/'
  },
  {
    id: 3,
    image: IMG3,
    title:'Dad Jokes',
    github: 'https://github.com/ricardoleonh/Dad-Jokes',
    demo: 'https://ricardoleonh.github.io/Dad-Jokes/'
  }, 
  {
    id: 4,
    image: IMG4,
    title:'Blurry Loading Image',
    github: 'https://github.com/ricardoleonh/Blurry-Img-Load',
    demo: 'https://ricardoleonh.github.io/Blurry-Img-Load/'
  }, 
  {
    id: 5,
    image: IMG5,
    title:'Delivery Status',
    github: 'https://github.com/ricardoleonh/Delivery-Status',
    demo: 'https://ricardoleonh.github.io/Delivery-Status/'
  }, 
  {
    id: 6,
    image: IMG6,
    title:'Split Landing Page',
    github: 'https://github.com/ricardoleonh/Split-Landing-Page',
    demo: 'https://ricardoleonh.github.io/Split-Landing-Page/'
  }

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio