import React from 'react';
import Card from '../card/card.component';
import './card-generator.styles.scss';

import PORTFOLIO_DATA from '../../assets/portfolio.data';


class CardGenerator extends React.Component {


  constructor(props){
    super(props)
    this.state={
      cards: this.props.projects === 'personal' ? PORTFOLIO_DATA.PERSONAL : PORTFOLIO_DATA.BOOTCAMP,
      viewPort : 0
    }
  }

  componentDidMount(){
    const elem = document.querySelector('.portfolio-container');
    this.setState({viewPort: elem.offsetHeight + elem.scrollTop })

    elem.addEventListener('scroll',(e)=>{
      this.setState({viewPort: elem.offsetHeight + elem.scrollTop })
    })
  }


  render(){
    return(
      <div className="cards-container-warapper">
        <div className="cards-container">
          {
            this.state.cards.map( ({id, ...restOfTheData}) => {
              return <Card viewPort={this.state.viewPort} key={id} id={id} {...restOfTheData} />
            })
          }
        </div>
      </div>
    )
  }
}


export default CardGenerator;