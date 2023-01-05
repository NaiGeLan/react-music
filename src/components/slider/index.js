import React from'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import { SliderContainer } from './style'
function Slider(props){
  const { bannerList } = props
  return(
    <SliderContainer>
      <div className='before'></div>
      <div className='slider-container'>
        <div className='swiper-wrapper'>
          <Swiper 
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{el:'.swiper-pagination', clickable: true}}
          >
            {
              bannerList.map((slider,index) => {
                
                return (
                  
                  <SwiperSlide key={index}>
                    
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
          
        </div>
        <div className='swiper-pagination'></div>
      
      </div>
    </SliderContainer>
    
  )
    
  

}

export default React.memo(Slider)
