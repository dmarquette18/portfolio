import React, { useState } from 'react';
import './Graphic.css'
import CardComponent from '../../components/CardComponent';
import CloseIcon from '@mui/icons-material/Close';


const GraphicApp = () => {
    var [selectedSquare, updateSelectedSquare] = useState([])

    const changeSquare = (item) => {
        updateSelectedSquare([item]);
    }

    return (
        <div className='GraphicContainer'>
            <div className='GraphicTitleContainer'>
                <div className='GraphicTitleText'>G R A P H I C</div>
            </div>

            {(selectedSquare.length <= 0 ?
                <div className='CardContainer'>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                    <div className='inBetween' onClick={function () { updateSelectedSquare([1]) }}>
                        <CardComponent />
                    </div>
                </div> :
                <div className='ExpandedGraphicCard'>
                    <div className='CloseIconHolder' onClick={function () { updateSelectedSquare([]) }}>
                        <CloseIcon className='closeIcon'/>
                    </div>
                    <div className='ExpandedGraphicCardCover' />
                    <div className='textContainerDesign'>
                        <div className='ExpandingGraphicCardProjTitleContainer'>
                            <div className='ExpandingGraphicCardProjTitleText'>Fancy Work #2</div>
                        </div>
                        <div className='overProjContainer'>
                            <div className='ExpandingGraphicCardProjContainer'>
                                <div className='ExpandingGraphicCardProjTitleSubText'>purpose</div>
                                <div className='ExpandingGraphicCardProjDescText'>i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that</div>
                            </div>
                            <div className='ExpandingGraphicCardProjContainer'>
                                <div className='ExpandingGraphicCardProjTitleSubText'>inspiration</div>
                                <div className='ExpandingGraphicCardProjDescText'>this project was inpired by seeing a lot of butts and being like "wow look at all those butts never thought i'd see that many in a life"</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default GraphicApp;