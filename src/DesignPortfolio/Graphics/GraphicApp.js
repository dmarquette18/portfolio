import React, { useState } from 'react';
import './Graphic.css'
import CardComponent from './components/CardComponent';


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

            {(selectedSquare.length > 0 ?
                <div className='CardContainer'>
                    <div onClick={function(){updateSelectedSquare([1])}}>
                        <CardComponent />
                    </div>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent /> 
                </div> :
                <div className='ExpandedGraphicCard'>
                    
                </div>
            )}


        </div>
    )
}

export default GraphicApp;