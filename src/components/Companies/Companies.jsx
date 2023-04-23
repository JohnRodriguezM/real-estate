import React from 'react'
import { CompaniesWrapper, Img } from './styled'

import prologis from '../../assets/prologis.png'
import tower from '../../assets/img/tower.png'
import equinix from '../../assets/img/equinix.png'
import realty from '../../assets/img/realty.png'
export const Companies = () => {
  return (
    <CompaniesWrapper>
      <div className="paddings innerWidth flexCenter c-container">
        <Img src={prologis} alt="" />
        <Img src={tower} alt="" />
        <Img src={realty} alt="" />
        <Img src={equinix} alt="" />
      </div>
    </CompaniesWrapper>
  )
}
