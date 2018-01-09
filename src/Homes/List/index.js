import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card";
import salentina from "../salentina.png";
import privateBed from "../privateBed.png";
import oldTown from "../oldTown.png";
import lussuoso from "../lussuoso.png";
import historical from "../historical.png";
import tropical from "../tropical.png";

const Main = styled.main`
  padding-top: 137px;
`;

export default function() {
  return (
    <Main>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Card
              imgSrc={salentina}
              price={82}
              numberBeds="9 beds"
              homeType="Entrie house"
              reviews={97}
              hostType="Superhost"
            >
              La Salentina, see, nature & relax
            </Card>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Card
              imgSrc={privateBed}
              price={82}
              numberBeds="5 beds"
              homeType="Entrie house"
              reviews={161}
              hostType="Superhost"
            >
              Your private 3 bedr. riad and exclusi…
            </Card>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Card
              imgSrc={tropical}
              price={200}
              numberBeds="1 bed"
              homeType="Entrie house"
              reviews={364}
              hostType="Superhost"
            >
              Dreamy Tropical Tree House
            </Card>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Card
              imgSrc={oldTown}
              price={110}
              numberBeds="1 bed"
              homeType="Entrie apartament"
              reviews={369}
              hostType="Superhost"
            >
              La Salentina, see, nature & relax
            </Card>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Card
              imgSrc={lussuoso}
              price={83}
              numberBeds="6 bed"
              homeType="Entrie apartament"
              reviews={105}
              hostType="Superhost"
            >
              Lussuoso. Vista incantevole.
            </Card>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Card
              imgSrc={historical}
              price={72}
              numberBeds="3 bed"
              homeType="Entrie house"
              reviews={221}
              hostType="Superhost"
            >
              In the historical center of Lecce
            </Card>
          </div>
        </div>
      </div>
    </Main>
  );
}
