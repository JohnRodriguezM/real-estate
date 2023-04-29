import styled from "styled-components";
import { Accordion, AccordionItem, AccordionItemButton } from 'react-accessible-accordion';

export const VContainer = styled.div`
  & > .v-left > div > img {
    border: 8px solid rgba(232 232 232 / 93%);
  }
  & > div {
    flex: 1;
  }
  & > .v-right {
    gap: 0.5rem;
  }
  @media(max-width: 1024px) {
    flex-direction: column;
    & > div {
      width: 100%;
      align-items: center;
      
    }
    & > .v-left {
     text-align: center;
    }
   
  }
`;

export const Icon = styled.div`
padding: 0.5rem;
background-color: #eeeeff;
border-radius: 0.5rem;
& svg{
  fill: var(--blue)
}
`;

export const StyledAccordion = styled(Accordion)`
margin-top: 2rem;
border: none;
`;

export const StyledAccordionItem = styled(AccordionItem)`
  box-shadow: ${({ className }) => className === "expandend" ? `var(--shadow)` : "none"};
  background-color: #fff;
  border: .8px solid rgba(232 232 232 / 93%);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;

`;

export const StyledAccordionItemButton = styled(AccordionItemButton)`
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  &>.primaryText{
    font-size: 1.1rem;
    @media(max-width: 568px){
      font-size: .8rem;
    }
  }
`;
