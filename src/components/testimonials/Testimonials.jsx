import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR2,
    name: 'Le Tri Dinh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto, necessitatibus illo, cum voluptatum perspiciatis temporibus sequi dolores itaque quisquam placeat tempore nam sapiente molestiae explicabo rem id accusantium voluptate.'
  },
  {
    avatar: AVTR1,
    name: 'Pham Ngoc Gia Han',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto, necessitatibus illo, cum voluptatum perspiciatis temporibus sequi dolores itaque quisquam placeat tempore nam sapiente molestiae explicabo rem id accusantium voluptate.'
  },
  {
    avatar: AVTR3,
    name: 'Nguyen Thanh Trung',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto, necessitatibus illo, cum voluptatum perspiciatis temporibus sequi dolores itaque quisquam placeat tempore nam sapiente molestiae explicabo rem id accusantium voluptate.'
  },
  {
    avatar: AVTR4,
    name: 'Nguyen Thi Anh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto, necessitatibus illo, cum voluptatum perspiciatis temporibus sequi dolores itaque quisquam placeat tempore nam sapiente molestiae explicabo rem id accusantium voluptate.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Tesimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials