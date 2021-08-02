import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';
import fbIcon from './fb-icon.png';
import twitIcon from './twit-icon.png';
import gpIcon from './gp-icon.png';
import instaIcon from './insta-icon.png';
import flicIcon from './flic-icon.png';
import pintIcon from './pint-icon.png';
import rssIcon from './rss-icon.png';
import mailIcon from './mail-icon.png';


class Header extends Component {
    render() { 
        return (  
            <header>
                <div className='top-left'>
                    <img className='big-fork-spoon' src={logo} alt='forkSpoon'/>
                </div>
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
            </header>
        );
    }
}
 
export default Header;