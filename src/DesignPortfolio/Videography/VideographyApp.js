import React, { useState } from 'react';
import './Videography.css'
import CardComponent from '../../components/CardComponent';
import CloseIcon from '@mui/icons-material/Close';


const VideographyApp = () => {
    var [selectedSquare, updateSelectedSquare] = useState([])

    const changeSquare = (item) => {
        updateSelectedSquare([item]);
    }

    return (
        <div className='VideographyContainer'>
            <div className='VideographyTitleContainer'>
                <div className='VideographyTitleText'>V I D E O G R A P H Y</div>
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
                <div className='ExpandedVideographyCard'>
                    <div className='CloseIconHolder' onClick={function () { updateSelectedSquare([]) }}>
                        <CloseIcon className='closeIcon'/>
                    </div>
                    <div className='ExpandedVideographyCardCover' />
                    <div className='textContainerDesign'>
                        <div className='ExpandingVideographyCardProjTitleContainer'>
                            <div className='ExpandingVideographyCardProjTitleText'>Fancy Work #2</div>
                        </div>
                        <div className='overProjContainer'>
                            <div className='ExpandingVideographyCardProjContainer'>
                                <div className='ExpandingVideographyCardProjTitleSubText'>purpose</div>
                                <div className='ExpandingVideographyCardProjDescText'>i did this to help out wiht a childrens orphanage in subsuharrean africa and got lice there and this is that</div>
                            </div>
                            <div className='ExpandingVideographyCardProjContainer'>
                                <div className='ExpandingVideographyCardProjTitleSubText'>inspiration</div>
                                <div className='ExpandingVideographyCardProjDescText'>this project was inpired by seeing a lot of butts and being like "wow look at all those butts never thought i'd see that many in a life"</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default VideographyApp;