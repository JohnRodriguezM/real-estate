import React from 'react'
import house from '../../assets/img/house.jpg'
export const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">

        {/* LEFT SIDE */}
        <div className="flexColStart f-left">
          <img 
            style = {{
              borderRadius: '50%',
              border: '1px solid #fff',
              marginBottom: '1rem'
            }}
          src={house} alt="" width = {100} height = {100}/>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className='primaryText'>Information</span>
          <span className='secondaryText'>Villavicencio, CO </span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}
