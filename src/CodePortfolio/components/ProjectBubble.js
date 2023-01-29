import React, { useState } from 'react';
import '../CodePortfolio.css'
import photoGalleryApp from './PhotoGallery';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import timeout from '../../components/helper';
import { click } from '@testing-library/user-event/dist/click';

const ProjectBubble = (props, { isVisible }) => {
    const [clicked, updateClicked] = useState(false);

    const changeState = async () => {
        updateClicked(!clicked)
        
    }

    const variants = {
        inview: {
            opacity: [0, 0, 1],
            scale: 1,
            transition: { duration: 1, ease: "easeOut", times:[0, 0.5, 1] },
        },
        notinview: { opacity: 0, scale: 0.5 },
        theStagger: {
            delay: 1
        },
        whileHovered: {
            scale: 1.1
        },
        toPushedLeft: {
            transition: {
                duration: 1,
                times:[0, 0.8, 1],
                ease:'easeIn'
            },
            opacity: 1,
            scale: [1.1, 0.8, 1, 1, 1],
            x: [410, 410, 410, 0, 0]


        },
        pushedLeftExit:{
            transition: {
                duration: 1,
                times:[0, 0.4, 0.8, 1],
                ease: "easeIn"
            },
            opacity: 1,
            scale: [1, 1, 1, 1],
            x: [200, 410, 410, 410]

        },

        regularLeftEntrance:{
            transition: {
                duration: 0.7,
                type:"spring",
                bounce:0.7,
                stiffness:70
            },
            x:0
        },

        prePushedInital:{
            scale: 1.4,
            x:300
        },

        infoBoxShow:{
            transition: {
                duration: 0.1,
                times:[0, 0.2, 0.6, 1],
                ease: "easeIn",
                delay:1
            },
            opacity: [0, 0, 0.5, 1],

        },

        infoBoxExit:{
            opacity:0,

        },

        circle:{

        },
        offscreen: {
          x: -410,
          opacity: 20
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.6
          }
        }




    }


    return (
        <div style={{ display: 'flex' }}>
            
            <AnimatePresence>
            <LayoutGroup>
            {(clicked &&
                
                (<div className='clickedContainer'>
                    
                        <motion.div key="circleLeft" variants={variants} className='CircleItemPushed' onClick={changeState} animate='toPushedLeft' exit="pushedLeftExit">
                            <div className='CircleTextContainer'>
                                <div className='CircleText'>{props.name}</div>
                            </div>
                        </motion.div>

                    <motion.div className='infoBlock' variants={variants} animate="infoBoxShow">
                        <div className='itemContainer'>
                            <div className='ideaTitle'>idea</div>
                            <div className='ideaText'>{props.idea}</div>
                        </div>
                        <div className='sourceContainer'>
                            <div className='ideaTitle'>source</div>
                            {props.link.map((item)=><a className='ideaText' href={item} target="_blank">Github</a>)}
                        </div>
                        <div className='sourceContainer'>
                            <div className='ideaTitle'>
                                gallery
                            </div>
                            <a className='ideaText' href={props.galleryLink} target="_blank">find collection here</a>
                        </div>
                    </motion.div>
                </div>) )}
                {(!clicked &&
                    (
                        <motion.div onClick={changeState} initial="offscreen" whileInView="onscreen" whileHover='whileHovered' exit='infoBoxExit'  viewport={{ once: true, amount: 0.1 }}>
                            <motion.div key="circleRegular" variants={variants} className='CircleItem' >
                                <div className='CircleTextContainer'>
                                    <div className='CircleText'>{props.name}</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </LayoutGroup>
            </AnimatePresence>
            



        </div>
    )
}

export default ProjectBubble;