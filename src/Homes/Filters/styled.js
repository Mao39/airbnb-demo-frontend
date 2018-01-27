import styled from 'styled-components';
import { DayPickerRangeController } from 'react-dates';

import arrow from './arrowRight.svg';
import plus from '../../UI/plus.svg';
import cross from '../../UI/cross.svg';
import minus from '../../UI/minus.svg';

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

// export const Apply = styled.button`
//   width: 110px;
//   border: none;
//   font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 16px;
//   line-height: 19px;
//   font-weight: 600;
//   color: #008489;
//   background: transparent;
//   cursor: pointer;
// `;

export const Arrow = styled.span`
  display: inline-block;
  margin: 0 16px;
  width: 18px;
  height: 11px;
  background: url(${arrow}) no-repeat center;
  background-size: contain;
`;

// export const Bottom = styled.div`
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   display: flex;
//   justify-content: space-between;
//   height: 64px;
//   padding: 8px;
//   box-shadow: 0 -1px #d5d5d5;
//   z-index: 2;
//   background: #fff;

//   @media (min-width: 576px) {
//     display: none;
//     padding: 0;
//     box-shadow: none;
//     z-index: 1;
//     background: transparent;
//   }
// `;

// export const Btn = styled.button`
//   margin-right: 8px;
//   padding: 7px 16px;
//   border: 1px solid rgba(72, 72, 72, 0.3);
//   border-radius: 4px;
//   font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-weight: 600;
//   font-size: 14px;
//   color: #383838;
//   background: transparent;
//   cursor: pointer;
//   transition: all 0.3s;

//   color: ${props => (props.isOpen ? '#fff' : '#383838')};
//   background: ${props => (props.isOpen ? '#008489' : 'transparent')};

//   &:hover {
//     border-color: ${props => (props.isOpen ? 'rgba(72, 72, 72, 0.3)' : '#f2f2f2')};
//     background: ${props => (props.isOpen ? '#008489' : '#f2f2f2')};
//   }
// `;

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

// export const Cancel = styled.button`
//   width: 110px;
//   border: none;
//   font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 16px;
//   line-height: 19px;
//   font-weight: 600;
//   color: #636363;
//   background: transparent;
//   cursor: pointer;
// `;

// export const Caption = styled.span`
//   font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   line-height: 16px;
//   font-weight: 600;
//   color: #383838;
// `;

export const DatesRange = styled.div`
  padding: 8px;
  padding-top: 30px;
  text-align: left;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const DayPicker = styled(DayPickerRangeController)`
  position: relative;
  padding-bottom: 72px;
`;

export const EndDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? '#0f7276' : '#636363')};
  border-bottom: ${props => (props.startDate ? '1px solid #008489' : 'none')};
`;

// export const Exit = styled.button`
//   width: 16px;
//   height: 16px;
//   background: url(${cross}) no-repeat center;
//   background-size: contain;
//   border: none;
//   cursor: pointer;
// `;

// export const Filter = styled.aside`
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 3;
//   font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-weight: 600;
//   font-size: 14px;
//   color: #383838;
//   background: #fff;

//   @media (min-width: 576px) {
//     position: absolute;
//     top: 40px;
//     left: 0;
//     display: inline-block;
//   }
// `;

// export const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 48px;
//   padding: 0 8px;

//   @media (min-width: 576px) {
//     display: none;
//   }
// `;

// export const Overlay = styled.div`
//   position: fixed;
//   top: 137px;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 2;
//   background: rgba(255, 255, 255, 0.8);
// `;

// export const Reset = styled.button`
//   padding: 0;
//   font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   line-height: 16px;
//   font-weight: 600;
//   color: #0f7276;
//   border: none;
//   background: transparent;
//   cursor: pointer;
// `;

// export const Save = styled.button`
//   width: 100%;
//   padding: 12px;
//   border: none;
//   border-radius: 4px;
//   font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 18px;
//   line-height: 21px;
//   font-weight: Bold;
//   color: #fff;
//   background: #ff5a5f;
//   cursor: pointer;

//   &:hover {
//     background: #f53d43;
//   }

//   &:active,
//   &:focus {
//     background: #ed262c;
//   }

//   @media (min-width: 576px) {
//     display: none;
//   }
// `;

export const StartDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;

  color: ${props => (props.startDate ? '#636363' : '#0f7276')};
  border-bottom: ${props => (props.startDate ? 'none' : '1px solid #008489')};
`;

// export const Wrap = styled.div`
//   position: relative;
//   display: inline-block;
// `;

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
