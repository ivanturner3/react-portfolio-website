import React from 'react'
import './porfolio.css'
import image1 from '../../assets/phone-raised.jpg'
import image2 from '../../assets/phone-raised.jpg'
import image3 from '../../assets/phone-raised.jpg'
import image4 from '../../assets/phone-raised.jpg'
import image5 from '../../assets/phone-raised.jpg'
import image6 from '../../assets/phone-raised.jpg'

const data = [
  {
    id: 1,
    image: image1,
    title: 'title1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: image2,
    title: 'title2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: image3,
    title: 'title3',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: image4,
    title: 'title4',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: image5,
    title: 'title5',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: image6,
    title: 'title6',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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