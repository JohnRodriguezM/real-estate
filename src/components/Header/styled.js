import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--black);
  color: #fff;
`;

export const HeaderContainer = styled.div`
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--secondary);
 `;

export const HeaderMenu = styled.nav`
  gap:2rem;
  &>a{
    transition: all 0.3s ease-in-out;
  }
  &>a:hover{
    transform: scale(1.05);
    color: var(--primary);
  }
`;

export const Astyle = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  font-size: 1rem
  `;