import React, { useState } from 'react';
import '.././designPort.css'
import CardComponent from '../../components/CardComponent';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import ExpandedVideography from '../../components/expandedVideography';
import { useSelector, useDispatch } from 'react-redux';
import {addVideo} from '../../Redux/actions';
import timeout from '../../components/helper';



const VideographyApp = () => {
    var [selectedSquare, updateSelectedSquare] = useState([])
    var state = useSelector(state => state.videographyReducer);
    console.log(state, '4839')
    var [inTransition, changeInTransition] = useState(false);
    const dispatch = useDispatch();

    const variant = {
        initialCards: {
            opacity: 0
        },
        showCard: {
            opacity: 1,
        },
        expandCard: {
            scale: 2
        },
        hideCards: {
            opacity: 0,
            transition: {
                duration: 2
            }
        },

        showBigCard: {
            opacity: 1,
            transition: {
                duration: 2
            }
        },
        expandedCard: {
            scale: 1.2,
            transition: {
                duration: 0.2,
                type:"spring",
                bounce: 0.2,
                ease: "easeOut"
            }
        },
        revealBox:{
            y:1000,
            transition:{
                delay: 1,
                duration:1.5,
                type: "tween",
                ease:'easeIn'
            }
        }
    }


    const data = [{
        title: "fancy work butt",
        purpose: "i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that",
        inspiration: "this project was inpired by seeing a lot of butts and being like 'wow look at all those butts never thought i'd see that many in a life'"
    },
    {
        title: "fancy work butt",
        purpose: "i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that",
        inspiration: "this project was inpired by seeing a lot of butts and being like 'wow look at all those butts never thought i'd see that many in a life'"
    },
    {
        title: "fancy work butt",
        purpose: "i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that",
        inspiration: "this project was inpired by seeing a lot of butts and being like 'wow look at all those butts never thought i'd see that many in a life'"
    },
    {
        title: "fancy work butt",
        purpose: "i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that",
        inspiration: "this project was inpired by seeing a lot of butts and being like 'wow look at all those butts never thought i'd see that many in a life'"
    },
    {
        title: "fancy work butt",
        purpose: "i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that",
        inspiration: "this project was inpired by seeing a lot of butts and being like 'wow look at all those butts never thought i'd see that many in a life'"
    },
    {
        title: "fancy work butt",
        purpose: "i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that",
        inspiration: "this project was inpired by seeing a lot of butts and being like 'wow look at all those butts never thought i'd see that many in a life'"
    }]

    const changeSquare = async (item) => {
        console.log("2384029349")
        dispatch(addVideo(item));
        console.log(state.selectedItems, "7938274983x")

    }

    return (
        <div className='designerContainer'>
            <div className='designerTitleContainer'>
                <div className='designerTitleText'>V I D E O G R A P H Y</div>
            </div>
            <LayoutGroup>
                {(state.selectedItems.length <= 0 ?
                    <div className='CardContainer'>
                        <motion.div  variants={variant} initial="initialCards" animate={"showCard"} className='inBetween'>

                        <AnimatePresence>
                                {data.map((item, index) => {
                                    console.log(index, "284234")
                                    return (
                                        <div style={{display: 'flex', width:'fit-content'}} onClick={() => dispatch(addVideo(index))}>
                                             <motion.div variants={variant} whileHover="expandedCard">
                                                <CardComponent />
                                            </motion.div>
                                        </div>
                                       
                                    )
                                })}
                            

                        </AnimatePresence>
                        </motion.div>
                    </div> :
                    <AnimatePresence>
                        <motion.div variants={variant} className='revealBox' animate="revealBox">
                        </motion.div>
                        <motion.div variants={variant} initial="initialCards" whileInView="showBigCard">
                            <ExpandedVideography />
                        </motion.div>
                    </AnimatePresence>



                )}
            </LayoutGroup>


        </div>
    )
}

export default VideographyApp;