import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./DesignPortfolio.css"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"


const DesignPortfolioApp = () => {

    const variants = {
        initialSquares: {
            opacity: 0,
            scale: 0.8
        },
        showSquares: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: 'easeIn'
            }
        }

    }

    return (
        <div className='designPageOver'>
            <div className='designPageStyle'>
                <div className='designTitle'>
                    D E S I G N
                </div>
                <div className="boxesContainer">
                    <AnimatePresence>
                        <LayoutGroup>
                            <motion.a variants={variants} initial="initialSquares" animate="showSquares" className='boxItem' href={'design/graphics'}>
                                <div className='boxTextContainer'>
                                    <div className='boxText'>
                                        graphic
                                    </div>
                                </div>
                            </motion.a>
                            <motion.a className='boxItem' href='design/videography'>
                                <div className='boxTextContainer'>
                                    <div className='boxText'>
                                        videography
                                    </div>
                                </div>
                            </motion.a>
                        </LayoutGroup>
                    </AnimatePresence>


                </div>
            </div>
        </div>
    )
}

export default DesignPortfolioApp;