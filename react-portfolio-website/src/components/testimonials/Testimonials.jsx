import React, { useRef } from 'react';
import './testimonials.css';
import avatar1 from '../../assets/kev.png';
import avatar2 from '../../assets/jill.png';
import avatar3 from '../../assets/lebron.png';
import avatar4 from '../../assets/zack.png';
import {Autoplay, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avatar1,
    name: 'Kevin Shay',
    review: "\"I've never met anyone who can eat more chicken wings than Ivan. He's a true wing-eating champion. Oh, and I guess he is pretty good with computers too.\""
  },
  {
    avatar: avatar2,
    name: 'Jillian Mondrone',
    review: "\"There's no one I know that is more trustworthy than Ivan... except maybe our dogs. At least I can hear them sneaking into the kitchen to eat all the bacon while I'm working.\""
  },
  {
    avatar: avatar3,
    name: 'LeBron James',
    review: "\"It's rare to see someone eat forty-seven jalapeños without crying. Taco Tuesdays at Ivan's house are the best!\""
  },
  {
    avatar: avatar4,
    name: 'Zack Hanna',
    review: "\"If you're ever in need of someone to dance the Macarena at your wedding, Ivan is your guy. Just don't ask him to do the Electric Slide.\""
  },
]

const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section id='testimonials'>
      <h5>Totally Real*</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Autoplay, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true}}
      onAutoplayTimeLeft={onAutoplayTimeLeft}>
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
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <h5 className='disclaimer'>*Disclaimer: The examples above are for illustrative purposes only. If you have a genuine testimonial to share, please use the contact form below to share it with me. I would be delighted to add it to this section.</h5>
    </section>
  )
}

export default Testimonials