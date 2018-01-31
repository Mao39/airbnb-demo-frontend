import React from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';
import Card from '../Card';
import Pagination from './Pagination';

const Main = styled.main`
  padding-top: 137px;
`;

const requestURL = 'https://airbnb-demo-api.now.sh/v1/homes';

const getPolicyQuery = () => {
  if (matchMedia('(min-width: 968px)').matches) return 'x_medium';
  if (matchMedia('(min-width: 576px)').matches) return 'medium';
  return 'x_medium';
};

export default class Cards extends React.Component {
  state = { items: [] };

  componentWillMount() {
    fetch(requestURL)
      .then(response => response.json())
      .then((data) => {
        console.log('parsing ok', data);
        this.setState({ items: data.items });
      })
      .catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  render() {
    const responseData = this.state;

    return (
      <Main>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <div className="row">
                {responseData.items.map(data => (
                  <div className="col-xs-12 col-sm-6">
                    <Card
                      picture={`${data.images[0].picture}?aki_policy=${getPolicyQuery()}`}
                      price={data.price}
                      bedsCount={data.bedsCount}
                      homeType="Entrie house"
                      reviewsCount={data.reviewsCount}
                      isSuperhost={data.isSuperhost}
                    >
                      {data.name}
                    </Card>
                  </div>
                ))}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </Main>
    );
  }
}
