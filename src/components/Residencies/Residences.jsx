import React, { useContext } from 'react'
import { RCard, RHead } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css"
import "swiper/css"
import { sliderSettings } from '../../utils/common'
import { SliderButtons } from './SliderButtons'
import { LanguageContext } from '../../context/LanguageContext'

import img1 from '../../assets/img/r1.png'
import img2 from '../../assets/img/r2.png'
import img3 from '../../assets/img/r3.png'


const data = [
  {
    "name": "Aliva Priva Jardin",
    "price": "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    "image": img1
  },
  {
    "name": "Asatti Garden City",
    "price": "66,353",
    "detail": "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    "image": img2
  },
  {
    "name": "Citralan Puri Serang",
    "price": "35,853",
    "detail": "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    "image": img3
  },
  {
    "name": "Aliva Priva Jardin",
    "price": "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    "image": img1
  },
  {
    "name": "Asatti Garden City",
    "price": "66,353",
    "detail": "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    "image": img2
  },
  {
    "name": "Citralan Puri Serang",
    "price": "35,853",
    "detail": "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    "image": img3
  }
]


export const Residences = () => {
  const { infoLang } = useContext(LanguageContext);
  return (
    <section className="r-wrapper"

    >
      <div className="paddings innewWidth r-container"
        style={
          {
            position: "relative",
            margin: "auto",
            maxWidth: "1250px",
            overflow: "hidden",
          }
        }
      >
        <RHead className="flexColStart">
          <span
            className='orangeText'
          >
            {infoLang.residences.bestOption}
          </span>
          <span
            className='primaryText'
          >
            {infoLang.residences.popular}
          </span>
        </RHead>

        <Swiper
          {...sliderSettings}
        >
          <SliderButtons />

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
