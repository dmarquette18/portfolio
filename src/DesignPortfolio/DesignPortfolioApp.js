import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./DesignPortfolio.css"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"


const DesignPortfolioApp = () => {

    const variants = {
        initialSquares: {
            opacity: 0,
            scale: 0.8,
            transition:{
                duration:0.1
            }
        },
        showSquares: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 0.6
            }
        },
        showHovered:{
            scale:1.2,
            transition:{
                duration:0.1
            }
        },
        exitHovered:{
            scale:1,
            transition:{
                duration: 0.1
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
                            <motion.a variants={variants} initial="initialSquares" animate="showSquares" whileHover="showHovered" exit="exitHovered" className='boxItem' href={'design/graphics'}>
                                <div className='boxTextContainer'>
                                    <div className='boxText'>
                                        graphic
                                    </div>
                                </div>
                            </motion.a>
                            <motion.a variants={variants} initial="initialSquares" animate="showSquares" whileHover="showHovered" className='boxItem' href='design/videography'>
                                <div className='boxTextContainer'>
                                    <div className='boxText'>
                                        videography
                                    </div>
                                </div>
                            </motion.a>
                    </AnimatePresence>


                </div>
            </div>
        </div>
    )
}

export default DesignPortfolioApp;