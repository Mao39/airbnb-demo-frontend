import styled from 'styled-components';
import arrow from '../UI/rightArrow.svg';

export const Slider = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: auto;

  & .row {
    flex-wrap: nowrap;
  }

  @media (min-width: 768px) {
    overflow: visible;
  }
`;

export const SliderBtn = styled.button`
  position: absolute;
  right: -16px;
  display: none;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 10px 18px;
  background-position: center center;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 1.3rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;
