import React, { useEffect, useContext } from "react";

//@ts-ignore
import logo from "../../assets/img/house.jpg";

import { HeaderWrapper, HeaderMenu, HeaderContainer, Astyle } from "./styled";
import { NavDropdown } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";


export const Header = () => {
  const { setLanguage, infoLang } = useContext(LanguageContext);

  return (
    <HeaderWrapper>
      <HeaderContainer className="flexCenter paddings innerWidth ">
        <img
          style={{ borderRadius: "50%" }}
          src={logo} alt="" width={80} height={80} />
        <HeaderMenu className="flexCenter">
          <Astyle

            href="">
            {
              infoLang.header.goods
            }
          </Astyle>
          <Astyle

            href="">
            {
              infoLang.header.ourValues
            }
          </Astyle>
          <Astyle href="">
            {
              infoLang.header.contact
            }
          </Astyle>
          <Astyle href="">

            <NavDropdown
              style={{
                zIndex: 1000
              }}
              title={
                infoLang.header.language
              } id="basic-nav-dropdown">
              <NavDropdown.Item href="#"
                onClick={() => setLanguage('en')}
              >
                {
                  infoLang.header.english
                }
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => setLanguage('es')}
                href="#">
                {
                  infoLang.header.spanish
                }
              </NavDropdown.Item>
            </NavDropdown>

          </Astyle>
          <button className="button">
            <Astyle href="">
              {
                infoLang.header.contactUs
              }
            </Astyle>
          </button>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
