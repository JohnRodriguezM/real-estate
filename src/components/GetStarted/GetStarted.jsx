import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext';

export const GetStarted = () => {
  const { infoLang } = useContext(LanguageContext);
  return (
    <section className='g-wrapper'>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>
            {infoLang.getStarted.title}
          </span>
          <span className='secondaryText'>
           {
              infoLang.getStarted.text1
           }
            <br />
            {
              infoLang.getStarted.text2
            }
          </span>
          <button className="button">
            <a
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
              href="mailto:mimartica.2001@hotmail.com?subject=Consulta finca raíz, información de propiedades">
                {
                  infoLang.getStarted.button
                }
              </a>
          </button>
        </div>
      </div>
    </section>
  )
}


