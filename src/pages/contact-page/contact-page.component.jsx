import React from 'react';
import './contact-page.styles.scss';
import FormInput from '../../components/form-input/form-input.component';

import LinkedInSvg from '../../animations/svgs/linkedin.svg'
import GithubSVG from '../../animations/svgs/github.svg'
import ResumeSVG from '../../animations/svgs/resume.svg'
import resumePDF from '../../assets/kd2020.pdf';

import SpeechBubble from '../../animations/assets.component/speech-bubble/speech-bubble.component';
import Character from '../../animations/assets.component/character/character.component';


class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      email: '',
      msg: '',
      msgSubmited:null,
      copiedToClipboard: null
    }
  }

  componentDidMount(){
    document.querySelector('.email').addEventListener('click',this.copyToClipboard)
  }
  componentWillUnmount(){
    document.querySelector('.email').removeEventListener('click',this.copyToClipboard)
  }
  
  copyToClipboard = (e) =>{
    const adress = document.querySelector('.emailAdress');
    adress.select()
    document.execCommand('copy');
    document.querySelector('.copied').style.top = 210 + 'px';
    document.querySelector('.copied').style.left = (e.x - 50) + 'px';
    setTimeout(()=>{
      this.setState({copiedToClipboard: "clicked"})
    },300)
    setTimeout(()=>{
      this.setState({copiedToClipboard: null});
      setTimeout(()=>{
        document.querySelector('.copied').style.left = (window.innerWidth + 400) + 'px';
      },200)
    },1000)
  }


  inputHandleChange = (x) => {
    const {name, value} = x.target
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const msg = {
      ...this.state,
    }
    const url = 'https://devkavianbackend.herokuapp.com/msg';
    const options = {
      method: 'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify(msg)
    };
    await fetch(url,options)
    .then(res=>{
      if (res.status === 202) {
        this.setState({name: '' , email: '' , msg: '' , msgSubmited: 'submited'});
      }
    })
    .catch(err=>console.log(err))
  }

  render(){

    return (
      <div className="contact-wrapper">
  

          <div className="title-cont">
            <p className="title-msg-cont">CONTACT</p>
          </div>
  
          <div className="clip-background-color">
            <div className="path-clip-border">
              <div className="path-clip"></div>
            </div>
          </div>
            
          <div className="image-wrapper">
            <img className='kavian-img' alt='kavian' src="https://avatars3.githubusercontent.com/u/22923211?s=460&v=4" />
          </div>
  

          <div className='msg-wrapper'>
          
            <div className={`copied ${this.state.copiedToClipboard ? "clicked" : null}`}>
              copied <br/> to <br/> clipboard
            </div>
            <div className='msg-container'>
              <h3 className='msg-title'>
                Connect with me
              </h3>
              <p className="msg-itself">
                I spend the majority of my time learning and building new things. So I am always in need of new projects! Feel free to connect with me by clicking on the channels below!
              </p>
              <span className='email'><i  className="far fa-envelope"></i><input className="emailAdress" value="kavian1991@gmail.com" readOnly /></span>
              <div className='logos-cont'>
                <span> 
                  <a targer="_blank" href="https://www.linkedin.com/in/kavian-darvish-10ba36181/"><img  className='link-svg ' alt='linkedin' src={LinkedInSvg} /></a>
                  <a href="https://github.com/karanius"><img className='link-svg lin' alt='github' src={GithubSVG} /></a>
                  <a href={resumePDF}><img className='link-svg lin' alt='resume' src={ResumeSVG} /></a>                  
                </span>
              </div>
            </div>
          </div>


          <div className='body-cont'>
     
            <div className={`form-wrapper ${this.state.msgSubmited}`}>
              <form onSubmit={this.handleSubmit} className={`form-itself ${this.state.msgSubmited}`} >
                <h1 className="form-title">Drop me a line</h1>
                <FormInput required label='Your Name' name="name" type="text" value={this.state.name} handleChange={this.inputHandleChange} />
                <FormInput required label='Your Email' name="email" type="email" value={this.state.email} handleChange={this.inputHandleChange} />
                <FormInput required label='Your Message' name="msg" type="text" value={this.state.msg} handleChange={this.inputHandleChange} />
                <div className="button-container">
                  <button  className="submit-button">Submit</button>
                </div>
              </form>
              {
                this.state.msgSubmited === 'submited' ? 
                (
                  <div className={`thanks ${this.state.msgSubmited}`}>
                    <SpeechBubble 
                      isActive={true} 
                      fontSize={2.3} 
                      top={200} 
                      stage={1} 
                      steps={['Thanks!', 2000 , "I like you" , 4000  , "A LOT!" , 4000 ]}

                      />
                    <div className='character-position' style={{
                      top: `${320}px`,
                      position:"absolute"
                    }}>
                      <Character 
                      characterDirection={'stand'}
                      scale={3.5}
                      />
                    </div>
                  </div> 
                ) :
                null
              }
            </div>
          </div>
            


  
          <div className="clip-background-color-two">
            <div className="path-clip-border-two">
              <div className="path-clip-two"></div>
            </div>
          </div>
  
          <div className='bottom-cont'></div>
  
          <footer className='comp-footer'>
            <b>Built By</b> &nbsp; <a className='link-footer' href='https://github.com/karanius'>DEV KAVIAN</a> &nbsp; <span className="footer-year">2020</span>
          </footer>
  
      </div>
    )
  }
}

export default ContactPage;