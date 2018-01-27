import styled from 'styled-components';

import arrow from './arrowRight.svg';
import plus from '../../UI/plus.svg';
import cross from '../../UI/cross.svg';
import minus from '../../UI/minus.svg';
import check from '../../UI/check.svg';
import grayPlus from './../../UI/grayPlus.svg';
import checkBook from './../../UI/checkBook.svg';

export const Add = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  border-radius: 50%;
  background: url(${plus}) no-repeat center;
  background-size: 10px 10px;
  cursor: pointer;
`;

export const Age = styled.span`
  margin-top: 6px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: lighter;
  color: #383838;
`;

export const Amount = styled.span`
  margin-right: 18px;
  margin-left: 18px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: lighter;
  color: #383838;
`;

export const Apply = styled.button`
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #008489;
  background: transparent;
  cursor: pointer;
`;

export const Bottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 0 -1px #d5d5d5;

  @media (min-width: 576px) {
    padding: 26px;
    box-shadow: none;
  }
`;

export const Btn = styled.button`
  margin-right: 8px;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #383838;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;

  color: ${props => (props.isOpen ? '#fff' : '#383838')};
  background: ${props => (props.isOpen ? '#008489' : 'transparent')};

  &:hover {
    border-color: ${props => (props.isOpen ? 'rgba(72, 72, 72, 0.3)' : '#f2f2f2')};
    background: ${props => (props.isOpen ? '#008489' : '#f2f2f2')};
  }
`;

export const Cancel = styled.button`
  display: none;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #636363;
  background: transparent;
  cursor: pointer;

  @media (min-width: 576px) {
    display: inline-block;
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
`;

export const Caption = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #383838;
`;

export const Exit = styled.button`
  width: 16px;
  height: 16px;
  background: url(${cross}) no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

export const Filter = styled.aside`
  display: inline-block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 3;

  @media (min-width: 576px) {
    position: absolute;
    top: 40px;
    left: 0;
    height: 290px;
    width: 326px;
    padding: 32px 24px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  height: 48px;
  padding: 0 8px;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);

  @media (min-width: 576px) {
    display: none;
  }
`;

export const Man = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #383838;
  text-transform: capitalize;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 137px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
`;

export const People = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 8px;
`;

export const Reduce = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  border-radius: 50%;
  background: url(${minus}) no-repeat center;
  background-size: 10px 2px;

  opacity: ${props => (props.disabled ? '.5' : '1')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

export const Reset = styled.button`
  padding: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #0f7276;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Save = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: Bold;
  color: #fff;
  background: #ff5a5f;
  cursor: pointer;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const Characteristics = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
`;

export const Arrow = styled.span`
  display: inline-block;
  margin: 0 16px;
  width: 18px;
  height: 11px;
  background: url(${arrow}) no-repeat center;
  background-size: contain;
`;

export const CalendarRow = styled.div`
  position: relative;
  top: -12px;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  justify-content: space-between;
  padding-top: 40px;
  height: 48px;
  padding: 8px;

  @media (min-width: 576px) {
    display: flex;
  }
`;

export const DatesRange = styled.div`
  padding: 8px;
  padding-top: 30px;
  text-align: left;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const EndDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? '#0f7276' : '#636363')};
  border-bottom: ${props => (props.startDate ? '1px solid #008489' : 'none')};
`;

export const StartDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? '#636363' : '#0f7276')};
  border-bottom: ${props => (props.startDate ? 'none' : '1px solid #008489')};
`;

export const FiltersWrap = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  z-index: 3;
  padding: 12px 0;
  background: #fff;
  box-shadow: 0 0 0.5px rgba(72, 72, 72, 0.3);
`;

export const Checkbox = styled.label`
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  background: ${props => (props.check ? '#008489' : 'transparent')};
  background-image: url(${check});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 13px 9px;
  cursor: pointer;
`;

export const Description = styled.p`
  flex-basis: 70%;
  margin: 0;
  margin-top: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: lighter;
  color: #383838;
`;

export const Input = styled.input`
  width: 24px;
  height: 24px;
  opacity: 0;
  cursor: pointer;
`;

export const Premises = styled.label`
  display: flex;
  margin-bottom: 14px;
  background: url(${props => props.imgSrc}) no-repeat center right;
  background-size: 32px;
  cursor: pointer;
`;

export const Title = styled.p`
  margin: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: lighter;
  color: #383838;
`;

export const Type = styled.div`
  margin-left: 12px;
  padding-right: 56px;
  text-align: left;
`;

export const Column = styled.span`
  position: relative;
  bottom: -6px;
  display: inline-block;
  width: 6px;
  height: ${props => `${props.height}px`};
  background: rgba(118, 118, 118, 0.5);
`;

export const Histogram = styled.div`
  position: relative;
  margin-top: 32px;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
`;

export const Mark = styled.span`
  position: absolute;
  top: -1px;
  left: -1px;
  padding: 20px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 50%;
  background: #fff;
  transform: ${props => props.check && 'translateX(24px)'};
  transition: all 0.3s ease-in-out 0.1s;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.check && `url(${checkBook}) no-repeat center`};
    opacity: ${props => (props.check ? '1' : '0')};
    transition: opacity 0.15s ease-in-out 0.2s;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${grayPlus}) no-repeat center;
    transform: ${props => (props.check ? 'rotate(45deg)' : 'none')};
    opacity: ${props => (props.check ? '0' : '1')};
    transition: all 0.2s ease-out 0.1s;
  }
`;

export const Switch = styled.button`
  position: relative;
  margin-top: -12px;
  padding: 20px 32px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 24px;
  background: ${props => (props.check ? '#008489' : 'rgba(72, 72, 72, 0.08)')};
  transition: background-color 0.25s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 2px 2px #008489;
  }
`;
