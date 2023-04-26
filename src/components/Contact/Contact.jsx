import React from 'react'
import { ImageContainer } from '../Hero/styled'
import contactImage from '../../assets/img/contact.jpg'

import { CWrapper, CContainer, CLeft, CRight } from './styled'
import { Icon } from '../Value/styled'

import { MdCall } from 'react-icons/md'
import { AiFillVideoCamera, AiOutlineMessage, AiOutlineWechat } from 'react-icons/ai'


export const Contact = () => {
  return (
    <CWrapper>
      <CContainer className="paddings innerWidth flexCenter">
        {/*left side*/}
        <CLeft className="flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact Us</span>
          <span className="secondaryText"
          >
            We are always ready to help by providing the best service, believe a good place to live can make your life better


          </span>
          <div className="flexColStart contactMode">
            {/* first Row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <Icon className="flexCenter icon">
                    <MdCall size={24} />
                  </Icon>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>
                      <a
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                        href="tel:+57 3165348955">+57 3165348955</a>
                    </span>
                  </div>
                </div>
                <div className="flexCenter button">
                <a
  style={{
    textDecoration: 'none',
    color: 'inherit',
  }}
  href="tel:+57-312-688-7112">
  Llamar ahora
</a>
                </div>
                

              </div>
            </div>
          </div>
        </CLeft>
        {/*right side*/}
        <CRight>
          <ImageContainer>

            <img src={contactImage} alt="" />
          </ImageContainer>
        </CRight>
      </CContainer>
    </CWrapper>
  )
}


{/*

//////////
<a href="mailto:nombredestinatario@gmail.com?subject=Asunto del correo electrónico&body=Cuerpo del mensaje">Enviar correo electrónico</a>

En este ejemplo, se incluyen los parámetros "subject" y "body" para configurar el asunto y el cuerpo del mensaje. Recuerda que estos parámetros deben estar separados por el signo "&". También puedes usar el signo "+" para agregar espacios en blanco en el cuerpo del mensaje.

Ten en cuenta que al hacer clic en este enlace, se abrirá la aplicación de correo electrónico predeterminada del usuario, o se le pedirá que elija una si tiene varias aplicaciones de correo electrónico instaladas en su dispositivo.

///////////
<a href="https://wa.me/+573126887112?action=video&text=¡Hola!%20Me%20encantaría%20hablar%20contigo%20acerca%20de%20las%20propiedades%20en%20venta." target="_blank">Video llamada</a>

<a href="https://wa.me/+573126887112?action=video&text=Estoy%20interesado%20en%20conocer%20más%20acerca%20de%20las%20propiedades%20que%20tienes%20disponibles%20en%20la%20zona.%20¿Podrías%20brindarme%20más%20información%20y%20agendar%20una%20visita?%20¡Muchas%20gracias!">Enviar mensaje de WhatsApp</a>


*/}