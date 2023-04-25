import React from 'react'
import { useSwiper } from 'swiper/react'
import { RButton } from './styled'

export const SliderButtons = () => {

  const swiper = useSwiper()
  return (
    <RButton className='flexCenter'>
      <button
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </RButton>
  )
}
