import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/css/main.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Slider = ({ slides }) =>
 {
  
  return (
    <>
      <div className='swiperContainer'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          {slides.map((slide) => (
            <SwiperSlide key={slide.image} ><img className='swiper-img' src={slide.image} alt={slide.title} />

              <div className='sliderBck'></div>
              <div className='slider__text'>
              
                <h2 data-aos="fade-down" data-aos-duration="1000">{slide.greeting}</h2>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900"> {slide.title}</h3>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">Steak In has the perfect place to enjoy fine food and great cocktails with
                    excellent service, in comfortable atmospheric surroundings.</p>
                <button className='slider__text__button' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1700">BOOK YOUR TABLE NOW</button>
            </div>
              


            </SwiperSlide>


          )
          )}
        </Swiper>
      </div>

    </>
  );
}
