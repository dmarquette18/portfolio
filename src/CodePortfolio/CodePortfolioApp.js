import React, { useState } from 'react';
import './CodePortfolio.css'
import ProjectBubble from './components/ProjectBubble';


const CodePortfolioApp = () => {

    

    return(
        <div className='pageStyle'>
            <div className='TitleContainer'>
                <div className='TitleText'>C O D E</div>
            </div>
            <div className='ProjectBubbleContainer'>
                {//thoughtcloud
}
                <ProjectBubble idea={'to visuallualy and abstractly represent a characters thoughts during a theatrical performance, achieved using AI, p5 processing, and semantic relationships. the system listens to a performer and generates the force directed graph as a result.'} name={'Thought Cloud'} link={'https://github.com/dmarquette2022/Word-Relatedness-Graph'} galleryLink={'https://drive.google.com/file/d/1gt6QWiM2ghwda9BtB5J7ZsU0_t_vgK1S/view'} left={true}/>
                <ProjectBubble idea={'to visuallualy and abstractly represent a characters thoughts during a theatrical performance, achieved using AI, p5 processing, and semantic relationships. the system listens to a performer and generates the force directed graph as a result.'} name={'Thought Cloud'} link={'https://github.com/dmarquette2022/Word-Relatedness-Graph'} galleryLink={'https://drive.google.com/file/d/1gt6QWiM2ghwda9BtB5J7ZsU0_t_vgK1S/view'} left={false}/>
            </div>
            
        </div>
    )
}

export default CodePortfolioApp;