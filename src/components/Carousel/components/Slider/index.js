/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    max-width:1000px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  .slick-slide a {
    transition: width .3s, opacity .3s;
  }
  .slick-slide a:hover {
    width: 260px;
    opacity: .5;
  }
  .slick-prev {
    left: -40px;
  }
  .slick-next {
    right: -26px;
  }
  .slick-next::before, .slick-prev::before {
	color: var(--corLogo);
  }
  @media (max-width: 800px) {
    .slick-prev {
      left: 5px;
    }
    .slick-next {
      right: 5px;
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 238.4px;
    height: 157.6px;
    object-fit: cover;
  }
`;

const Slider = ({ arrowColor, children }) => (
  <Container arrowColor={arrowColor}>
    <SlickSlider {...{
      dots: false,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      /*infinite: false,
      speed: 300,*/

      speed: 500,
      infinite: true,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

// const  Slider = ({ children })  => (
//   <Container >
//     <SlickSlider  {...{
//       dots: false,
//       infinite: false,
//       speed: 300,
//       centerMode: false,
//       variableWidth: true,
//       adaptiveHeight: true,
//     }}
//     >
//       {children}
//     </SlickSlider>
//   </Container>
// );

export default Slider; 