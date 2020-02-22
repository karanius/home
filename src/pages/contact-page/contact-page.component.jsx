import React from 'react';
import './contact-page.styles.scss';
import FormInput from '../../components/form-input/form-input.component';


import SpeechBubble from '../../animations/assets.component/speech-bubble/speech-bubble.component';
import Character from '../../animations/assets.component/character/character.component';

import TopMargin from '../../components/top-margin/top-margin-component';
import ContactPageMsg from '../../components//contact-page-msg/contact-page-msg.component'
import BottomMrgin from '../../components/bottom-margin/bottom-marign.components'
import Footer from '../../components/footer/footer.component';

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
    },50)
    setTimeout(()=>{
      this.setState({copiedToClipboard: null})
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
  
      <TopMargin open={'open-other'}>
        CONTACT
      </TopMargin>

            
      <div className="image-wrapper">
        <img className='kavian-img' alt='kavian' src="https://avatars3.githubusercontent.com/u/22923211?s=460&v=4" />
      </div>

      <ContactPageMsg copiedToClipboard={this.state.copiedToClipboard} />

      <BottomMrgin open={'open-other'} >
        <div className='body-cont'>
          <div className={`form-wrapper ${this.state.msgSubmited}`}>
            <form onSubmit={this.handleSubmit} className={`form-itself ${this.state.msgSubmited}`} >
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
      </BottomMrgin>

      <Footer />
  
      </div>
    )
  }
}

export default ContactPage;