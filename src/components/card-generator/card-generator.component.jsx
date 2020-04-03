import React,{lazy,useState, useEffect} from 'react';
import Card from '../card/card.component';
import './card-generator.styles.scss';

import PORTFOLIO_DATA from '../../assets/portfolio.data';
// const PORTFOLIO_DATA = lazy(() => import('../../assets/portfolio.data'));


function CardGenerator (props) {

  // const [cards, setCards] = useState(PORTFOLIO_DATA);
  // const [viewPort, setViewPort] = useState(0);


  // useEffect(() => {
    
  //   setCards(props.projects === 'personal' ? [PORTFOLIO_DATA.PERSONAL] : [PORTFOLIO_DATA.BOOTCAMP])

  //   const elem = document.querySelector('.portfolio-container');
  //   setViewPort(elem.offsetHeight + elem.scrollTop)
    
  //   elem.addEventListener('scroll',(e)=>{
  //     setViewPort(elem.offsetHeight + elem.scrollTop)
  //   })
  // }, []);
  
  // console.log(PORTFOLIO_DATA)

  return(
    <div className="cards-container-warapper">
      <div className="cards-container">
        {/* {
          cards ? 
          cards.map( ({id, ...restOfTheData}) => {
            return <Card viewPort={viewPort} key={id} id={id} {...restOfTheData} />
          }) 
          : null
        } */}
      </div>
    </div>
  )
}


export default CardGenerator;















// import React,{lazy} from 'react';
// import Card from '../card/card.component';
// import './card-generator.styles.scss';

// // import PORTFOLIO_DATA from '../../assets/portfolio.data';
// const PORTFOLIO_DATA = lazy(() => import('../../assets/portfolio.data'));


// class CardGenerator extends React.Component {


//   constructor(props){
//     super(props)

//     this.state={
//       cards: this.props.projects === 'personal' ? PORTFOLIO_DATA.PERSONAL : PORTFOLIO_DATA.BOOTCAMP,
//       viewPort : 0
//     }
//   }

//   componentDidMount(){
//     console.log(this.state)
//     const elem = document.querySelector('.portfolio-container');
//     this.setState({viewPort: elem.offsetHeight + elem.scrollTop })
    
//     elem.addEventListener('scroll',(e)=>{
//       this.setState({viewPort: elem.offsetHeight + elem.scrollTop })
//     })
//   }


//   render(){
//     return(
//       <div className="cards-container-warapper">
//         <div className="cards-container">
//           {
//             this.state.cards.map( ({id, ...restOfTheData}) => {
//               return <Card viewPort={this.state.viewPort} key={id} id={id} {...restOfTheData} />
//             })
//           }
//         </div>
//       </div>
//     )
//   }
// }


// export default CardGenerator;