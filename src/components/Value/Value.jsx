import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../../utils/accordion';

import value from '../../assets/img/value.png'
import { ImageContainer } from '../Hero/styled';
import { VContainer } from './styled';
export const Value = () => {
  return (
    <section className="v-wrapper">
      <VContainer className="paddings innerWidth flexCenter">
        {/*left side*/}
        <div className="v-left">
          <ImageContainer
            style = {{
              border: "8px solid rgba(232 232 232 / 93%)"
            }}
           className="image-container">

            <img src={value} alt="" />
          </ImageContainer>
        </div>
        {/*right side*/}
        <div className="flexColStart v-right">
          <span>Our Value</span>
          <span>Value we give to you</span>
          <span>
            We always ready to help by providing the best solution for you
            <br />
            We beliece a goood blace to live can make your life better
          </span>
        </div>
      </VContainer>

      {/* {data.map((item, index) => {
        return (
          <Accordion allowZeroExpanded={true} key={index}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {item.icon}
                  <h3>{item.heading}</h3>
                  <MdOutlineArrowDropDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        )
      })
      }*/}
    </section>
  )
}

