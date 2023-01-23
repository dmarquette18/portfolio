import React, { useState } from 'react';
import '../CodePortfolio.css'
import photoGalleryApp from './PhotoGallery';

const ProjectBubble = (props) => {
    const [clicked, updateClicked] = useState(false);

    const changeState = () =>{
        updateClicked(!clicked)
    }

    return(
        <>
            {(clicked ? 
            <div className='clickedContainer'>
                <div className='CircleItemPushed' onClick={changeState} >
                    <div className='CircleTextContainer'>
                        <div className='CircleText'>{props.name}</div>
                    </div>
                </div>
                <div className='infoBlock'>
                    <div className='itemContainer'>
                        <div className='ideaTitle'>idea</div>
                        <div className='ideaText'>{props.idea}</div>
                    </div>
                    <div className='sourceContainer'>
                        <div className='ideaTitle'>source</div>
                        <a className='ideaText' href={props.link} target="_blank">Github</a>
                    </div>
                    <div className='sourceContainer'>
                        <div className='ideaTitle'>
                            gallery
                        </div>
                        <a className='ideaText' href={props.galleryLink} target="_blank">find collection here</a>
                    </div>
                </div>
            </div>
            :
            <div className='CircleItem' onClick={changeState}>
                <div className='CircleTextContainer'>
                    <div className='CircleText'>{props.name}</div>
                </div>
            </div>)}
            
        </>
    )
}

export default ProjectBubble;