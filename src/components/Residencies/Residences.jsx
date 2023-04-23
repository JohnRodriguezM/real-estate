import React from 'react'
import { RHead } from './styled'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/swiper.min.css"
import "swiper/css"

import data from '../../../utils/slider.json'

export const Residences = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innewWidth r-container">
        <RHead className="flexColStart">
          <span
            className='orangeText'
          >Mejores opciones</span>
          <span
            className='primaryText'
          >
            Populares
          </span>
        </RHead>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {
            data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="r-card">
                    <div className="r-card__img">
                      <img src={item.name} alt="" />
                    </div>
                    <div className="r-card__content">
                      <div className="r-card__content__title">
                        <span>{item.price}</span>
                      </div>
                      <div className="r-card__content__desc">
                        <span>{item.detail}</span>
                      </div>
                      <div className="r-card__content__price">
                        <span>{item.image}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>


      </div>
    </section>
  )
}
