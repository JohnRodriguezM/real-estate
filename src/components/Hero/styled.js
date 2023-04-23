import styled from 'styled-components';

export const HeroWrapper = styled.div`
color: #fff;
padding-bottom: 2rem;
//background-color: var(--black);
`;
export const HeroContainer = styled.div`
  justify-content: space-between;
  align-items: flex-end;
`;

export const ImageContainer = styled.div`
  width: 30rem;
  height: 35rem;
  overflow: hidden;
  border-radius: 15rem 15rem 0 0;
  border: 8px solid rgba(255,255,255,0.12);
  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroTitle = styled.div`
  
`;