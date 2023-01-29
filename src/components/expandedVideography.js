import React, { useState, useEffect } from 'react';
import '../DesignPortfolio/Videography/Videography.css'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { removeVideo } from '../Redux/actions';

const ExpandedVideography = () => {
    var open = true;
    const dispatch = useDispatch();
    const triggerClose = () => {
        dispatch(removeVideo());
    }
    return(
    <div className='ExpandedVideographyCard'>
        <div className='CloseIconHolder' onClick={() => triggerClose()}>
            <CloseIcon className='closeIcon' />
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
    </div>)
}

export default ExpandedVideography;