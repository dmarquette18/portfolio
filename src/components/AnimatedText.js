const AnimatedText = (words) => {
    const container = {
        hidden: { opacity: 0 },

        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y:-20 },
        show: { opacity: 1 }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
        >
            {words.map((letter)=>{
                return(<motion.div variants={item}>{letter}</motion.div>)
            })}
        </motion.div>
    )
}

export default AnimatedText;