import React from 'react';
import defaultClasses from './Slide.css';
// slider__slide
// backgroundImage
// slider__slide__text
// styleInRef
// textAnimation
const Slide = ( props ) => {
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
            style={slideStyle} 
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
  
  export default Slide;