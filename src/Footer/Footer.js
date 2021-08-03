import React, { Component } from 'react';
import './Footer.css';
import smallLogo from '../assets/small-logo.png';

class Footer extends Component {
    render() { 
        return ( 
            <footer className='footer-section' alt='footer-section'>
                <hr/>
                <img src={smallLogo} alt='small-logo'/>
                <p> 
                Delicious &copy; 2013 . All Rights Reserved.
                    <br/>
                Proudy published with Ghost
                </p>
            </footer>
         );
    }
}
 
export default Footer;