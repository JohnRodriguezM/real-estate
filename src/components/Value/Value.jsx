import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { data, dataSpanish } from '../../../utils/accordion';

import value from '../../assets/img/value.png'
import { ImageContainer } from '../Hero/styled';
import { Icon, StyledAccordion, StyledAccordionItem, StyledAccordionItemButton, VContainer } from './styled';
import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
export const Value = () => {
  const { infoLang, language } = useContext(LanguageContext);
  const [className, setClassName] = useState(null);



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
        <div
       
         className="flexColStart v-right">
          <span className="orangeText">
            {infoLang.values.ourValues}
          </span>
          <span

           className='primaryText'>
            {infoLang.values.valueGive}
          </span>
          <span className='secondaryText'>
           {
              infoLang.values.text
           }
          </span>

          <StyledAccordion
            //classsName="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}>
            {
              language === 'es' ?
                dataSpanish.map((item, index) => {
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
                : data.map((item, index) => {
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
    </section>
  )
}

