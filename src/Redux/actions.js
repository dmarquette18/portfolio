export const addVideo = (num) => {
    console.log("heRE")
    return {
        type: 'ADD_VIDEO',
        payload: num
    }
}
export const removeVideo = () => {
    return {
        type: 'REMOVE_VIDEO'
    }
}


export const addGraphic = (num) => {
    return {
        type: 'ADD_GRAPHIC',
        payload: num
    }
}

export const removeGraphic = () => {
    return {
        type: 'REMOVE_GRAPHIC'
    }
}