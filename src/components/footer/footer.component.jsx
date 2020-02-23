import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer tabIndex='0' aria-label="created by dev kavian." className='footer'>
      <b>Built By</b> &nbsp; <a className='link-footer' aria-label="link to my github code repository" href='https://github.com/karanius'>DEV KAVIAN</a> &nbsp; <span className="footer-year">2020</span>
    </footer>
  )
}

export default Footer;