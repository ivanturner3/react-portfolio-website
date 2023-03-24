import React from 'react';
import './testimonials.css';
import avatar1 from '../../assets/robo-hand.jpg';
import avatar2 from '../../assets/robo-hand.jpg';
import avatar3 from '../../assets/robo-hand.jpg';
import avatar4 from '../../assets/robo-hand.jpg';
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avatar1,
    name: 'Client Name 1',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima distinctio aliquid ducimus corrupti iure excepturi? Facere modi explicabo dolor beatae recusandae quia a accusamus!'
  },
  {
    avatar: avatar2,
    name: 'Client Name 2',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima distinctio aliquid ducimus corrupti iure excepturi? Facere modi explicabo dolor beatae recusandae quia a accusamus!'
  },
  {
    avatar: avatar3,
    name: 'Client Name 3',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima distinctio aliquid ducimus corrupti iure excepturi? Facere modi explicabo dolor beatae recusandae quia a accusamus!'
  },
  {
    avatar: avatar4,
    name: 'Client Name 4',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima distinctio aliquid ducimus corrupti iure excepturi? Facere modi explicabo dolor beatae recusandae quia a accusamus!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />            
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials