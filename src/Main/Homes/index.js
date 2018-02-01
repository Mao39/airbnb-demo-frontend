import React from 'react';
import Card from '../../Homes/Card';
import { Head, Caption, More } from '../Head';
import { Section, Slider } from '../Slider';

const Homes = Section.extend`
  &::after {
    transform: translateY(-45%);
  }
`;

const getPolicyQuery = () => {
  if (matchMedia('(min-width: 968px)').matches) return 'x_medium';
  if (matchMedia('(min-width: 576px)').matches) return 'medium';
  return 'x_medium';
};

const requestURL = 'https://airbnb-demo-api.now.sh/v1/homes?limit=6';

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
      <div className="container">
        <Homes>
          <Head>
            <div className="row">
              <div className="col-xs-9 col-sm-10 col-md-10">
                <Caption>Homes</Caption>
              </div>
              <div className="col-xs-3 col-sm-2">
                <More to="/homes">See all</More>
              </div>
            </div>
          </Head>
          <Slider>
            <div className="row">
              {responseData.items.map(data => (
                <div className="col-xs-8 col-sm-5 col-md-4">
                  <Card
                    picture={`${data.images[0].picture}?aki_policy=${getPolicyQuery()}`}
                    price={data.price}
                    bedsCount={data.bedsCount}
                    kind={data.kind}
                    rating={data.rating}
                    reviewsCount={data.reviewsCount}
                    isSuperhost={data.isSuperhost}
                  >
                    {data.name}
                  </Card>
                </div>
              ))}
            </div>
          </Slider>
        </Homes>
      </div>
    );
  }
}
