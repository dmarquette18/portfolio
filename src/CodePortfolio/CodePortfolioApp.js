import React, { useState } from 'react';
import './CodePortfolio.css'
import ProjectBubble from './components/ProjectBubble';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"


const CodePortfolioApp = () => {

    const container = {
        hidden: {
            opacity: 0, transition: {
                when: "afterChildren",
            },
        },

        show: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 5
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1 }
    }


    return (
        <AnimatePresence>
            <LayoutGroup>
                <div className='pageStyle' variants={container} initial="hidden" animate="show">
                    <div className='TitleContainer'>
                        <div className='TitleText'>C O D E</div>
                    </div>
                    <div className='ProjectBubbleContainer'>
                        {//thoughtcloud
                        }
                        <ProjectBubble key={1} variants={item} idea={'to visuallualy and abstractly represent a characters thoughts during a theatrical performance, achieved using AI, p5 processing, and semantic relationships. the system listens to a performer and generates the force directed graph as a result.'} name={'Thought Cloud'} link={['https://github.com/dmarquette2022/Word-Relatedness-Graph']} galleryLink={'https://drive.google.com/file/d/1gt6QWiM2ghwda9BtB5J7ZsU0_t_vgK1S/view'} left={true} />
                        <ProjectBubble key={2} variants={item} idea={'to quickly create a mobile optimized site to promote a live event with a focus on interactivity'} name={'Real Ones Site'} link={['https://github.com/dmarquette18/real-ones-show/']} galleryLink={'https://realonesshow.com/'} left={false} />
                        <ProjectBubble key={3} variants={item} idea={'to use technology to represent a clasical linguistic proposition, "if you put monkeys in front of a typewriter, would they eventually type out the works of shakespeare?". Generates random words and finds outputs similar to Shakespeare. Generated over 2 million views on TikTok.'} name={'Shakespeare Code Monkeys'} link={['https://github.com/dmarquette2022/Monkey-Shakespeare']} galleryLink={'https://drive.google.com/file/d/1gt6QWiM2ghwda9BtB5J7ZsU0_t_vgK1S/view'} left={true} />
                        <ProjectBubble key={4} variants={item} idea={'to use aspects of theatrical performance as variables in a algorithm to create 3D graphical representations. Uses physical distance and vocal volume to determiine output.'} name={'Stage Algorithms'} link={['https://github.com/dmarquette2022/Word-Relatedness-Graph', 'https://github.com/dmarquette2022/Flow-Field-Distance-Based']} galleryLink={'https://drive.google.com/file/d/1gt6QWiM2ghwda9BtB5J7ZsU0_t_vgK1S/view'} left={false} />
                        <ProjectBubble key={4} variants={item} idea={'to view a AIs intererpretation of a piece of art through the lense of poetry. An AI was fed poems and asked to write a response poem using it owns words that encapsulates and expands upon the original, and findings were recorded.'} name={'AI Poetry Readings'} link={['https://github.com/dmarquette2022/Word-Relatedness-Graph', 'https://github.com/dmarquette2022/Flow-Field-Distance-Based']} galleryLink={'https://drive.google.com/file/d/1gt6QWiM2ghwda9BtB5J7ZsU0_t_vgK1S/view'} left={false} />

                    </div>

                </div>
            </LayoutGroup>
        </AnimatePresence>
    )
}

export default CodePortfolioApp;