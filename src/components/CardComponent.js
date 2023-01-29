import './component.css'
import '../DesignPortfolio/Videography/Videography.css'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"



const CardComponent = (props) => {
    const [selfSelected, updateSelfSelected] = useState(false)
    const { v4: uuidv4 } = require('uuid');
    const variant = {
        expandCard:{
            scale:2,
            transition:{
                duration: 0.4
            }
        }
    }
    return(
        <div className='GraphicCard'>
        </div>
        
    )
}

export default CardComponent