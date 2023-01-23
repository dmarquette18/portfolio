import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'



const LandingPageApp = () => {
    return(
        <div className='pageStyle'>
            <div className='pageContainer'>
                <div className='NameContainer'>
                    <div className='NameTitleText'>
                        David Marquette
                    </div>
                </div>
                <div className='SubtitleContainer'>
                    <div className='SubtitleText'>
                        design code and code designs
                    </div>
                </div>
                <div className='LinksContainer'>
                    <a className = 'LinkText' href="code">stuff i coded</a> 
                    <a className = 'LinkText' href="design">stuff i designed</a> 
                </div>
            </div>

        </div>
    )
}

export default LandingPageApp;