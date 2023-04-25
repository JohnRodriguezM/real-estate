import styled from "styled-components";

export const RHead = styled.div`
margin-bottom: 2rem;

 `;

export const RCard = styled.div`
  gap: 0.6rem;
  padding: 1rem;
  min-width: 250px;
  border-radius: 0.5rem;
  max-width: max-content;
  margin: auto;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.025);
    filter: drop-shadow(
      0 0 0.5rem rgba(0, 0, 0, 0.1)
    );
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(136, 160, 255, 0.46) 217.91%
    );
    border-radius: 50px;
    box-shadow: 0px 72px 49px -51px rgba(136, 160, 255, 0.21);
  }
  &>img{
    width: 100%;
    height: 100%;
    max-width: 16rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  &>img:hover{
    transform: scale(1.001);
    filter: drop-shadow(
      0 0 0.5rem rgba(0, 0, 0, 0.1)
    )
  }
  &>:nth-child(2){
    font-size: 1.2rem;
    font-weight: 600;
  }
  &>:nth-child(3){
    text-align: center;
    font-size: 1.35rem;
    /*font-weight: 600;*/
  }
  &>:nth-child(4){
    font-size: .7rem;
    width: 15rem;
    text-align: center;
    /*font-weight: 600;*/
  }
 `;

 export const RButton = styled.div`


  gap:3rem;
  &>button{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid #E0E0E0;
    background: #fff;
    box-shadow: 0px 72px 49px -51px rgba(136, 160, 255, 0.21);
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
      filter: drop-shadow(
        0 0 0.5rem rgba(0, 0, 0, 0.1)

      )
    }
  }

  
 `