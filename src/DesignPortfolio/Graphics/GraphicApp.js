import React, { useState } from 'react';
import '.././designPort.css'
import CardComponent from '../../components/CardComponent';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import ExpandedGraphic from '../../components/expandedGraphicCard';
import { useSelector, useDispatch } from 'react-redux';
import { addGraphic } from '../../Redux/actions';
import timeout from '../../components/helper';
import { ContactSupportOutlined } from '@mui/icons-material';



const GraphicApp = () => {
    var [selectedSquare, updateSelectedSquare] = useState([])
    var graphicData = useSelector(state => state.graphicReducer);
    console.log(graphicData, "7489237")
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
        dispatch(addGraphic(item));
    }

    return (
        <div className='designerContainer'>
            <div className='designerTitleContainer'>
                <div className='designerTitleText'>G R A P H I C</div>
            </div>
            <LayoutGroup>
                {(graphicData.selectedItems.length <= 0 ?
                    <div className='CardContainer'>
                        <motion.div  variants={variant} initial="initialCards" animate={"showCard"} whileTap="hideCards"  className='inBetween'>

                        <AnimatePresence>
                                {data.map((item, index) => {
                                    return (
                                        <motion.div variants={variant} whileHover="expandedCard" onClick={() => changeSquare(index)}>
                                            <CardComponent />
                                        </motion.div>
                                    )
                                })}
                            

                        </AnimatePresence>
                        </motion.div>
                    </div> :
                    <AnimatePresence>
                        <motion.div variants={variant} initial="initialCards" whileInView="showBigCard">
                            <ExpandedGraphic />
                        </motion.div>
                    </AnimatePresence>



                )}
            </LayoutGroup>


        </div>
    )
}

export default GraphicApp;