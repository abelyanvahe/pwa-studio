
import React, { Component, useState, useEffect } from 'react';
import defaultClasses from './Slideshows.css';
// import Slide from './Slide'


const Slide = (props) => {
  const { background, 
          text, 
          link, 
          active, 
          testStyle, 
          textAnimation, 
          icon
        } = props;
  let slideStyle = {
    background: 'url(' + background + ')'  
  }
  return (
    <div 
        className={defaultClasses.slider__slide}
        data-active={active}
      >
      <img 
          src={background}
          className={defaultClasses.backgroundImage}
        />
      <div 
        className={defaultClasses.slider__slide__text}
        style={testStyle}
      >
        {
          typeof text === 'object' ? (
            text.map(item => {
              return (
                <p 
                  key={item.id}
                  className={active ? defaultClasses[item.textAnimation]: ''}
                  style={item.textStyles}
                >
                  <a href="/">
                      {item.subject}
                  </a>
                </p>
              )
            })
          ): (
            <p 
              className={active ? defaultClasses[textAnimation]: ''}
              data-active={active} 
            >
              {icon ? <span>{icon} &#10084;</span>: ''}
             <a 
                href={link} target="blank"
                className={defaultClasses.styleInRef}
              >
              {text}
            </a>
            </p>   
          )
        }
      </div>
    </div>
  )
}


const Slideshows = ( props ) => {
  const [ activeSlide, setActiveSlide ] = useState(0);
  const { slides, autoplay, autoplayTimeout } = props;
  const nextSlide = () => {
    let slide = activeSlide + 1 < slides.length ?
                activeSlide + 1 : 0;
    setActiveSlide(slide)
  }
  const previousSlide = () => {
    let slide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1;
    setActiveSlide(slide)
  }
  (() => {
    if(autoplay === true) {
      setInterval(nextSlide, autoplayTimeout)
    }
  })()
  const handleChangePagination = (index) => {
    setActiveSlide(index)
  }
  return (
    <div className={defaultClasses.slider}> 
        {
          slides.map((slide, index) => (
            <Slide background={slide.background}
                  text={slide.text}
                  active={index === activeSlide} 
                  link={slide.link} 
                  testStyle={slide.testStyle}
                  textAnimation={slide.textAnimation}
                  icon={slide.icon}
                  key={slide.id}
                />  
              )
            )
          }

      <div className={defaultClasses.pagination}>
        {
          slides.map((item, index )=> (
            <span 
              key={item.id}
              onClick={() => handleChangePagination(index)}
              className={index === activeSlide ? defaultClasses.activePagination: ''}
            />
          ))
        }
      </div>

      <div className={defaultClasses.buttonContainer}>
        <div 
          className={defaultClasses.slider__next}
          onClick={nextSlide}
          >
          &#10095;
        </div>

        <div
          className={defaultClasses.slider__previous}
          onClick={previousSlide}
          >
          &#10094;
        </div>
      </div>
    </div>
  )
}
export default Slideshows;
