import React from 'react'

export const GetStarted = () => {
  return (
    <section className='g-wrapper'>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Get Started with Inmuweb</span>
          <span className='secondaryText'>
            Suscribe and fin super deals and the latest news about our products
            <br />
            Find your residence soon and enjoy the best experience with us
          </span>
            <button className="button">
              <a 
                style = {{
                  color: 'white',
                  textDecoration: 'none'
                }}
              href="mailto:mimartica.2001@hotmail.com?subject=Consulta finca raíz, información de propiedades">Get Started</a>
            </button>
        </div>
      </div>
    </section>
  )
}


