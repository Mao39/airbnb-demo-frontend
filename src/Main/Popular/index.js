import React from 'react';
import styled from 'styled-components';
import { Head, Caption, More } from '../Head';
import { Slider, SliderBtn } from '../Slider';
import Card from './Card';
import chumley from '../../UI/chumley.png';
import hanjan from '../../UI/hanjan.png';
import primeMeats from '../../UI/primeMeats.png';
import seaprice from '../../UI/seaprice.png';

const Popular = styled.section``;

const Arrow = SliderBtn.extend`
  margin-top: 8.5%;
`;

export default () => (
  <Popular>
    <div className="container">
      <Head>
        <div className="row">
          <div className="col-xs-9 col-sm-10">
            <Caption>Popular reservations around the world</Caption>
          </div>
          <div className="col-xs-3 col-sm-2">
            <More to="/">See all</More>
          </div>
        </div>
      </Head>
      <Slider>
        <div className="row">
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={chumley} place="Speakeasy" rate="60">
              Chumley’s
            </Card>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={hanjan} place="Korean gastropub" rate="60">
              Hanjan
            </Card>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={primeMeats} place="German american" rate="55">
              Prime Meats
            </Card>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Card imgSrc={seaprice} place="Fine seafood" rate="70">
              Seaprice
            </Card>
          </div>
          <Arrow />
        </div>
      </Slider>
    </div>
  </Popular>
);
