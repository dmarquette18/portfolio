import './component.css'
import '../DesignPortfolio/Videography/Videography.css'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';


const CardComponent = (props) => {
    const [selfSelected, updateSelfSelected] = useState(false)
    return(
        (!selfSelected ? 
            <div className='GraphicCard'>
            </div>
            :
            <div></div>
        )
        
    )
}

export default CardComponent