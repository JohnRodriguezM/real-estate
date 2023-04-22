import React from "react";

//@ts-ignore
import logo from "../../assets/img/house.jpg";

import { HeaderWrapper, HeaderMenu, HeaderContainer, Astyle } from "./styled";


export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer className="flexCenter paddings innerWidth ">
        <img
          style={{ borderRadius: "50%" }}
          src={logo} alt="" width={80}height={80} />
        <HeaderMenu className="flexCenter">
          <Astyle

            href="">Residencias</Astyle>
          <Astyle

            href="">Nuestros valores</Astyle>
          <Astyle href="">Contacto</Astyle>
          <Astyle href="">Empecemos</Astyle>
          <button className="button">
            <Astyle href="">Contáctanos</Astyle>
          </button>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
