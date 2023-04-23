import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import heroImage from "../../assets/img/hero-image.png";
import { HeroContainer, HeroWrapper, ImageContainer } from "./styled";
import CountUp from "react-countup";

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer className="paddings innerWidth flexCenter">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="blue-circle" />
            <h1>
              Haciendo <br /> realidad casas <br /> soñadas
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span

              className="secondaryText"

            >
              Tu sueño, nuestra realidad
            </span>
            <span
              className="secondaryText"
            >
              Olvida todas las dificultades para encontrar un hogar
            </span>
            <span
              className="secondaryText"
            >
              Nosotros te ayudamos a encontrar la casa de tus sueños
            </span>
          </div>
          <div className="ini-contact">
            <Link to="/form" className="btn btn-primary">
              Envianos tus datos
            </Link>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={500} end={999} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">
                Bienes premium
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={100} end={400} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">
                Clientes satisfechos
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={30} /> <span>+</span>
              </span>
              <span className="secondaryText">
                Registros diarios
              </span>
            </div>

          </div>

        </div>
        <div className="flexCenter hero-right">
          <ImageContainer className="image-container">
            <img src={heroImage} />
          </ImageContainer>
        </div>
      </HeroContainer>
    </HeroWrapper>
  );
};
