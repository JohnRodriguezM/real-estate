import styled from "styled-components";

export const HeaderWrapper = styled.header`
 //  background-color: var(--black);
  color: #fff;
`;

export const HeaderContainer = styled.div`
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--secondary);
 `;

export const HeaderMenu = styled.nav`
z-index: 1000;
  gap:2rem;
  &>a{
    transition: all 0.3s ease-in-out;
  }
  &>a:hover{
    transform: scale(1.05);
    color: var(--primary);
  }
  @media(max-width: 852px){
   color: #000;
   position: absolute;
   top: 3rem;
   right: 18%;
   left: 18%;  
   text-align: center;
   ;
   max-width: 80%;
      background-color: #fff;
   flex-direction: column;
   font-weight: 500;
   padding: 2rem;
   border-radius: 10px;
   align-items: flex-start ;
   box-shadow: 0 0 10px rgba(0,0,0,.2); 
   gap: 2rem;
   &>button>a{
      color: white
   }
  }
`;

export const Astyle = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1rem;
  @media(max-width: 852px){
   color: #000;
  }
  `;