import React, { useContext } from 'react'
import house from '../../assets/img/house.jpg'
import { LanguageContext } from '../../context/LanguageContext'
export const Footer = () => {
  const { infoLang } = useContext(LanguageContext)
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">

        {/* LEFT SIDE */}
        <div className="flexColStart f-left">
          <img
            style={{
              borderRadius: '50%',
              border: '1px solid #fff',
              marginBottom: '1rem'
            }}
            src={house} alt="" width={100} height={100} />
          <span className="secondaryText">
            {
              infoLang.footer.span1
            } <br />
            {
              infoLang.footer.span2
            }
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className='primaryText'>
            {
              infoLang.footer.span3
            }
          </span>
          <span className='secondaryText'>
            {
              infoLang.footer.span4
            }

          </span>

          <div className="flexCenter f-menu">
            <span>
              {
                infoLang.footer.span5
              }
            </span>
            <span>
              {
                infoLang.footer.span6
              }
            </span>
            <span>
              {
                infoLang.footer.span7
              }
            </span>
            <span>
              {
                infoLang.footer.span8
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
