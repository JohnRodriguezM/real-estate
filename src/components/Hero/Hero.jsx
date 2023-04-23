import React, { useContext } from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import heroImage from "../../assets/img/hero-image.png";
import { HeroContainer, HeroWrapper, ImageContainer } from "./styled";
import CountUp from "react-countup";
import { LanguageContext } from "../../context/LanguageContext";

export const Hero = () => {
  const { infoLang } = useContext(LanguageContext);
  return (
    <HeroWrapper>
      <HeroContainer className="paddings innerWidth flexCenter">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="blue-circle" />
            <h1>
              {
                infoLang.hero.title
              } <br /> {
                infoLang.hero.titleOne
              } <br /> {
                infoLang.hero.titleTwo
              }
            </h1>
          </div>
          <div

            className="flexColStart hero-des">
            <span

              className="secondaryText"

            >
              {
                infoLang.hero.partOne
              }
            </span>
            <span
              className="secondaryText"
            >
              {
                infoLang.hero.partTwo
              }
            </span>
            <span
              className="secondaryText"
            >
              {
                infoLang.hero.partThree
              }
            </span>
          </div>
          <div className="ini-contact">
            <Link to="/form" className="btn btn-primary">
              {
                infoLang.hero.sendData
              }
            </Link>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={200} end={499} duration={4} /> <span>+</span>
              </span>
              <span
                style={{
                  margin: "0 0.5rem 0 0.5rem"
                }}
                className="secondaryText">
                {
                  infoLang.hero.premiumGoods
                }
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={200} duration={4} /> <span>+</span>
              </span>
              <span
                style={{
                  margin: "0 0.5rem 0 0.5rem"
                }}
                className="secondaryText">
                {
                  infoLang.hero.customesSatisfied
                }
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} /> <span>+</span>
              </span>
              <span
                style={{
                  margin: "0 0.5rem 0 0.5rem"
                }}
                className="secondaryText">
                {
                  infoLang.hero.yearsOfExperience
                }
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
