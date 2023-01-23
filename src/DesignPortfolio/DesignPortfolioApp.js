import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./DesignPortfolio.css"

const DesignPortfolioApp = () =>{
    return(
        <div className='designPageOver'>
            <div className='designPageStyle'>
                <div className='designTitle'>
                    D E S I G N
                </div>
                <Link className='boxItem' to={'graphics'}>
                    <div className='boxTextContainer'>
                        <div className='boxText'>
                            graphic
                        </div>
                    </div>
                </Link>
                <a className='boxItem' href='design/videography'>
                    <div className='boxTextContainer'>
                        <div className='boxText'>
                            videography
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DesignPortfolioApp;