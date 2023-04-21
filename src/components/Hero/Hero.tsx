import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import heroImage from "../../assets/img/hero-image.png";
import { HeroContainer, HeroWrapper, ImageContainer } from "./styled";

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer className="paddings innerWidth flexCenter">
        <div className="flexCenter hero-left">
          <div className="hero-title">
            <h1>
              Haciendo <br /> realidad casas <br /> soñadas
            </h1>
          </div>
          <div className="hero-des">
            <span>
              Tu sueño, nuestra realidad, encuentra una variedad de propiedades
            </span>
            <span>
              Olvida todas las dificultades para encontrar un hogar, nosotros te
              ayudamos a encontrar la casa de tus sueños
            </span>
          </div>
          <div className="ini-contact">
            <Link to="/form" className="btn btn-primary">
              Conéctemos
            </Link>
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
