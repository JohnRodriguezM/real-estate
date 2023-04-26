import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../../utils/accordion';

import value from '../../assets/img/value.png'
import { ImageContainer } from '../Hero/styled';
import { Icon, StyledAccordion, StyledAccordionItem, StyledAccordionItemButton, VContainer } from './styled';
import { useState } from 'react';
export const Value = () => {
  return (
    <section className="v-wrapper">
      <VContainer className="paddings innerWidth flexCenter">
        {/*left side*/}
        <div className="v-left">
          <ImageContainer
            className="image-container">
            <img src={value} alt="" />
          </ImageContainer>
        </div>
        {/*right side*/}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className='primaryText'>Value we give to you</span>
          <span className='secondaryText'>
            We always ready to help by providing the best solution for you
            <br />
            We beliece a goood blace to live can make your life better
          </span>

          <StyledAccordion
            //classsName="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}>
            {
              data.map((item, index) => {
                const [className, setClassName] = useState(null)
                return (
                  <StyledAccordionItem
                    className={className}
                    //className="accordionItem"
                    key={index}
                    uuid={index}>
                    <AccordionItemHeading>
                      <StyledAccordionItemButton
                        className='flexCenter'
                      >
                        <AccordionItemState>
                          {({ expanded }) => (expanded ? setClassName("expandend") : setClassName("collapsed"))}
                        </AccordionItemState>

                        <Icon className="flexCenter">

                          {item.icon}
                        </Icon>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <Icon className="flexCenter">
                          <MdOutlineArrowDropDown
                            size={20} />
                        </Icon>

                      </StyledAccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </StyledAccordionItem>
                )
              })
            }
          </StyledAccordion>



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

