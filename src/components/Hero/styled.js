import styled from 'styled-components';

export const HeroWrapper = styled.div`
color: #fff;
padding-bottom: 2rem;
//background-color: var(--black);
`;
export const HeroContainer = styled.div`
  justify-content: space-between;
  align-items: flex-end;
  @media(max-width: 871px){
    justify-content: center;
    margin-top:2rem;
    ;
  }
`;

export const ImageContainer = styled.div`
  width: 24rem;
  height: 29rem;
  overflow: hidden;
  border-radius: 15rem 15rem 0 0;
  border: 8px solid rgba(255,255,255,0.12);
  &>img{
    width: 95%;
    height: 100%;
    object-fit: cover;
  }
  @media(max-width: 871px){
    width: 95%;
    height: 25rem;
  }
  @media(min-width: 641px ) and (max-width: 900px){
    width: 22rem;
  height: 27rem;
  }
`;

export const HeroTitle = styled.div`
  
`;