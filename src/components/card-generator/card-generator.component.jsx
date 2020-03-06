import React from 'react';
import Card from '../card/card.component';
import './card-generator.styles.scss';

import PORTFOLIO_DATA from '../../assets/portfolio.data';


class CardGenerator extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cards: this.props.projects === 'personal' ? PORTFOLIO_DATA.PERSONAL : PORTFOLIO_DATA.BOOTCAMP,
    }
  }
  render(){
    return(
      <div className="cards-container-warapper">
        <div className="cards-container">
          {
            this.state.cards.map( ({id, ...restOfTheData}) => {
              return <Card key={id} id={id} {...restOfTheData} />
            })
          }
        </div>
      </div>
    )
  }
}


export default CardGenerator;