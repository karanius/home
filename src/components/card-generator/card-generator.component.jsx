import React,{useState, useEffect} from 'react';
import Card from '../card/card.component';
import './card-generator.styles.scss';


function CardGenerator (props) {

  const [cards, setCards] = useState(null);
  const [viewPort, setViewPort] = useState(0);

  useEffect(() => {
    // import('../../assets/portfolio.data').then(
    //   res=>{
    //     setCards(props.projects === 'personal' ? res.default.PERSONAL : res.default.BOOTCAMP);

    //     const elem = document.querySelector('.portfolio-container');
    //     setViewPort(elem.offsetHeight + elem.scrollTop)
    
    //     elem.addEventListener('scroll',(e)=>{
    //       setViewPort(elem.offsetHeight + elem.scrollTop)
    //     })

    //   }
    // )
  }, []);

  return(
    <div className="cards-container-warapper">
      <div className="cards-container">
        {
          cards ? 
          cards.map( ({id, ...restOfTheData}) => {
            return 
            {/* <Card viewPort={viewPort} key={id} id={id} {...restOfTheData} /> */}
          }) 
          : null
        }
      </div>
    </div>
  )
}


export default CardGenerator;