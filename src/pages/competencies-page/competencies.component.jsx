
import React from 'react';
import './competencies.styles.scss';


class Competencies extends React.Component {

  constructor(){
    super()

    this.state={
        initialScrollExecuted: null,
    }
  }

  initialIntroScrol = () => { 
    let requestId;
    let top = 0;
    const scrollDown = async () => {
      console.log('~~')
      if (top <= 100) {
        window.scrollTo({
          top: top ,
          behavior:"smooth"
        })
        top = top + 10
        setTimeout(()=>requestAnimationFrame(scrollDown),30)
      }else {
        this.setState({initialScrollExecuted: true});
        cancelAnimationFrame(requestId);
      }
    }
    requestId = requestAnimationFrame(scrollDown)
  }


  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollAnimationFunciton);
  }

  componentDidMount(){
    this.initialIntroScrol();
    window.addEventListener('scroll', this.scrollAnimationFunciton);
  }

  scrollAnimationFunciton = (e) => {
    const distanceFromTop = window.scrollY;
    // console.log(distanceFromTop)

    //postion adjustments section:
      //right bracket - top postion
      document.querySelector('.right-bracket').style.top = ( 73 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
      // left bracket - top position
      document.querySelector('.left-bracket').style.top = ( 73 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
      // .msg-title - left position
      // document.querySelector('.msg-title').style.left = ((window.innerWidth / 2) -  (document.querySelector('.msg-title').offsetWidth / 2) )+ 'px'
      // .msg-title - bottom position
      // document.querySelector('.msg-title').style.bottom = ( 500 - document.querySelector('.middle-slash').offsetHeight ) + 'px'
      // .dev-kavian - height position
      document.querySelector('.dev-kavian').style.top = document.querySelector('.dev-kavian').style.top =  ((document.querySelector('.middle-slash').offsetTop) + ((document.querySelector('.middle-slash').offsetHeight - document.querySelector('.dev-kavian').offsetHeight ) / 2 ) ) + 'px'

    
    //logic section:
        if (distanceFromTop < 18 && this.state.initialScrollExecuted ) {
          document.querySelector('.dev-kavian').classList.remove("hide");
          document.querySelector('.dev-kavian').style.left = ((window.innerWidth / 2) - (document.querySelector('.dev-kavian').offsetWidth / 2) ) + 'px'
        }
        
      if (distanceFromTop < 100) {
          if (this.state.initialScrollExecuted){
            document.querySelector('.dev-kavian').style.opacity =  `${1 / ((distanceFromTop ) + 1) - 0.05}`;
          }
          
          document.querySelector('.middle-slash').style.opacity = distanceFromTop / 100;
          document.querySelector('.right-bracket').style.opacity = distanceFromTop / 100;
          document.querySelector('.left-bracket').style.opacity = distanceFromTop / 100;
          // document.querySelector('.msg-title').style.opacity = distanceFromTop / 100;
          document.querySelector('.left-bracket').style.transform = `translate(${distanceFromTop}px,0)`;
          document.querySelector('.right-bracket').style.transform = `translate(-${distanceFromTop}px,0)`;
      }     














  } 

  render(){
    return(
      <div className="comp-main-container">

        <div className="firstCard">
            
          <div className="dev-kavian hide" >
            DEV KAVIAN
          </div>

          <div className="developer-logo-container">
            <div className="left-bracket-container">
                <div className="left-bracket">{`<`}</div>
            </div>

            <div className="middle-slash-container">
              <div className="middle-slash">{`/`}</div>
            </div>

            <div className="right-bracket-container"> 
              <div className="right-bracket">{'>'}</div>
            </div>
          </div>

          <div className="msg-container">
            <div className="msg-title-container">
              <h1 className="msg-title">
                Full-Stack Design
              </h1>
            </div>

            <div className="skill-container">

              <div className="skill-logos">
                html - css - sass  - bootstrap - js - node - python - express - mongodb - jquery - react - react-redux - react-router - git
              </div>

            </div>
          </div>



              {/* <h3 className="point" >
              <ul>
                <li>
                  React & JavaScript Proficient.
                </li>
                <li>
                  Creative & Framework Friendly.
                </li>
              </ul>
              </h3> */}



        </div>


        
        <div className="testHeight" style={{height:"2000px"}}></div>




      </div>
    )
  }
}

export default Competencies;





















////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './competencies.styles.scss';


// class Competencies extends React.Component {
//   constructor(){
//     super()

//     this.state={
//         initialScrollExecuted: null,
//         rightBracket:-5,
//         bracketsComeIn: false
//     }
//   }

//   initialIntroScrol = () => { 
//     let requestId;
//     let top = 0;
//     const scrollDown = async () => {
//       console.log('running')
//       if (top <= 100) {
//         window.scrollTo({
//           top: top ,
//           behavior:"smooth"
//         })
//         top = top + 10
//         setTimeout(()=>requestAnimationFrame(scrollDown),30)
//       }else {
//         this.setState({initialScrollExecuted: true});
//         cancelAnimationFrame(requestId);
//       }
//     }
//     requestId = requestAnimationFrame(scrollDown)
//   }



//   componentDidMount(){
//     this.initialIntroScrol();
//     window.addEventListener('scroll', this.animationFnction);
//     // let maxD //max point from data
//     // let minD //min point from data    
//     // let maxN // max point of the range    
//     // let minN // min point of the range    
//     // let x//current point to be normalized
//     // // const outputY =( (x - minD * ( maxN - minN  ) / maxD - minD ) + minN
//     // // (((((x) - (minD)) *  ((maxN) - (minN)))   / ((maxD) - (minD)))  + (minN))

    

//   }

//   //for left bracket:
//   //start point = left 0 
//   //end point or max point = document.querySelector('.left-bracket-container').offsetWidth - document.querySelector('.left-bracket').offsetWidth;

//   // for right bracket :
//   // start point = right 0
//   // end point  or max point = document.querySelector('.right-bracket-container').offsetWidth - document.querySelector('.right-bracket').offsetWidth


//   scrollAdjuster = (top) => {
//     window.scrollTo({
//       top: top ,
//       behavior:"smooth"
//     })
//   }

//   animationFnction = (e) => {
//     const distanceFromTop = window.scrollY;
//     console.log(distanceFromTop)

//     //postion adjustments: ~~~
//       //right bracket:
//       document.querySelector('.right-bracket').style.top = (63 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
//       // left bracket:
//       document.querySelector('.left-bracket').style.top = (63 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
//       // .msg-title - left:
//       document.querySelector('.msg-title').style.left = ((window.innerWidth / 2) -  (document.querySelector('.msg-title').offsetWidth / 2) )+ 'px'
//       // .msg-title - bottom:
//       document.querySelector('.msg-title').style.bottom = ( 500 - document.querySelector('.middle-slash').offsetHeight ) + 'px'
//       // .dev-kavian
//       document.querySelector('.dev-kavian').style.top =  ( document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px'


//     if (distanceFromTop < 18 && this.state.initialScrollExecuted ) {
//       document.querySelector('.dev-kavian').classList.remove("hide");
//       document.querySelector('.dev-kavian').style.left = ((window.innerWidth / 2) - (document.querySelector('.dev-kavian').offsetWidth / 2) ) + 'px'
//     }
    
//     if (distanceFromTop < 100) {
//       if (this.state.initialScrollExecuted){
//         document.querySelector('.dev-kavian').style.opacity =  `${1 / ((distanceFromTop ) + 1)}`;
//       }
      
//       document.querySelector('.middle-slash').style.opacity = distanceFromTop / 100;
//       document.querySelector('.right-bracket').style.opacity = distanceFromTop / 100;
//       document.querySelector('.left-bracket').style.opacity = distanceFromTop / 100;
//       document.querySelector('.msg-title').style.opacity = distanceFromTop / 100;
//       document.querySelector('.left-bracket').style.transform = `translate(${distanceFromTop}px,0)`;
//       document.querySelector('.right-bracket').style.transform = `translate(-${distanceFromTop}px,0)`;



//     }

    

    



//   }

//   render(){
//     return(
//       <div className="comp-main-container">
        
//         <div className="dev-kavian hide" >
//           DEV KAVIAN
//         </div>


        // <div className='first-section'>
        //   <div className="dev-bracket-container">
        //     <div className="left-bracket-container">
        //         <div className="left-bracket">{`<`}</div>
        //     </div>

        //     <div className="middle-slash-container">
        //       <div className="middle-slash">{`/`}</div>
        //     </div>

        //     <div className="right-bracket-container"> 
        //       <div className="right-bracket">{'>'}</div>
        //     </div>
        //   </div>

        // </div>


//           <div className="msg-container">
//             <h1 className="msg-title">
//               FRONT END DESIGN
//             </h1>
//           </div>


//           <div style={{height:"2000px"}}></div>
//         <section className="content">
//           <article >
//             <h1>something</h1>
//             <hr/>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore delectus a ea quod voluptatem cumque sunt sed nulla facilis! Nihil nobis aliquam nam sed placeat earum ab libero optio.</p>
//           </article>
//         </section>
//       </div>
//     )
//   }
// }

// export default Competencies;