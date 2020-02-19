import React from 'react';
import Card from '../card/card.component';
import './card-generator.styles.scss';

import PORTFOLIO_DATA from '../../assets/portfolio.data';

class CardGenerator extends React.Component {
  constructor(){
    super()
    this.state={
      cards: PORTFOLIO_DATA
    }
  }
  render(){
    return(
      <div className="cards-container-warapper">
        <div className="cards-container">
          {
            this.state.cards.map( ({id, ...restOfTheData}) => {
              return <Card key={id} {...restOfTheData} />
            })
          }
        </div>
      </div>
    )
  }
}


export default CardGenerator;