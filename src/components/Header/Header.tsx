import React from "react";

//@ts-ignore
import logo from "../../assets/img/house.jpg";

import { HeaderWrapper, HeaderMenu, HeaderContainer } from "./styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer className="flexCenter paddings innerWidth ">
        <img src={logo} alt="" width={100} />
        <HeaderMenu className="flexCenter">
          <a href="">Residencias</a>
          <a href="">Nuestros valores</a>
          <a href="">Contacto</a>
          <a href="">Empecemos</a>
          <button className="button">
            <a href="">Contáctanos</a>
          </button>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
