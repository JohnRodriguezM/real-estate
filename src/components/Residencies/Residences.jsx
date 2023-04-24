import React from 'react'
import { RCard, RHead } from './styled'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/swiper.min.css"
import "swiper/css"

import data from '../../../utils/slider.json'
import { sliderSettings } from '../../../utils/common'

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
          {...sliderSettings}
        >

          {
            data.map((item, index) => {
              return (
                <SwiperSlide key={index}

                >
                  <RCard className="flexColCenter">
                    <img src={item.image} alt="img-houses" />
                    <span className="secondaryText r-price">
                      <span style={{ color: "orange" }}>$</span><span>
                        {item.price}
                      </span>
                    </span>
                    <span className="primaryText">
                      {item.name}
                    </span>
                    <span className="secondaryText">
                      {item.detail}
                    </span>
                  </RCard>
                </SwiperSlide>
              )
            })
          }

        </Swiper>


      </div>
    </section>
  )
}
