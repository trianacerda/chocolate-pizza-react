import React, { Component } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import fbIcon from '../assets/fb-icon.png';
import twitIcon from '../assets/twit-icon.png';
import gpIcon from '../assets/gp-icon.png';
import instaIcon from '../assets/insta-icon.png';
import flicIcon from '../assets/flic-icon.png';
import pintIcon from '../assets/pint-icon.png';
import rssIcon from '../assets/rss-icon.png';
import mailIcon from '../assets/mail-icon.png';


class Header extends Component {
    render() { 
        return (  
            <header>
                <img className='big-fork-spoon' src={logo} alt='forkSpoon'/>
                <ButtonList/>
            </header>
        );
    }
}
 
export default Header;

class ButtonList extends Component {
    render() { 
        return (
            <section className='top-right-wrapper'>
                    <div className='top-right'>
                        <img className='facebook' src={fbIcon} alt='fbIcon'/>
                        <img className='twitter' src={twitIcon} alt='twitIcon'/>
                        <img className='google' src={gpIcon} alt='gpIcon'/>
                        <img className='instagram' src={instaIcon} alt='instaIcon'/>
                        <img className='flic' src={flicIcon} alt='flicIcon'/>
                        <img className='pinterest' src={pintIcon} alt='pintIcon'/>
                    </div>
                    <div className='top-upper-right'>
                        <img className='rss' src={rssIcon} alt='rssIcon'/>
                        <img className='mail' src={mailIcon} alt='mailIcon'/>
                    </div>
                </section>
          );
    }
}
