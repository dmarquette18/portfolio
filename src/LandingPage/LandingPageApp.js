import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"




const LandingPageApp = () => {
    const variants = {
        initialLinks:{
            opacity:0,
            scale:0.8,
        },

        showLink:{
            opacity:1,
            scale:1,
            transition:{
                duration: 2,
                type:'spring',
                bounce:0.65
            }
        },
        linkHovered:{
            scale: 1.2,
            transition:{
                duration: 0.2,
                ease: 'easeIn'
            },
            fontWeight:700

        },

        initialTitle:{
            opacity:0,
            scale:0.7
        },
        shownTitle:{
            opacity:1,
            scale:1,
            transition:{
                duration: 4,
                type:'spring',
                bounce:0.4
            }
        }

    }



    return(
        <div className='pageStyle'>
            <div className='pageContainer'>
                <motion.div className='NameContainer'>
                    <motion.div className='NameTitleText' variants={variants} initial='initialTitle' animate='shownTitle'>
                        David Marquette
                    </motion.div>
                </motion.div>
                <motion.div className='SubtitleContainer'>
                    <motion.div className='SubtitleText'  variants={variants} initial='initialTitle' animate='shownTitle'>
                        technology is an art
                    </motion.div>
                </motion.div>
                <AnimatePresence>
                <motion.div className='LinksContainer' variants={variants} initial='initialLinks' whileInView='showLink'>
                    
                        <LayoutGroup>
                            <motion.a  variants={variants} className='LinkText' href="code" whileHover='linkHovered'>stuff i coded</motion.a>
                            <motion.a variants={variants} className='LinkText' href="design" whileHover='linkHovered'>stuff i designed</motion.a>
                        </LayoutGroup>

                    
                </motion.div>
                </AnimatePresence>
            </div>

        </div>
    )
}

export default LandingPageApp;