/* eslint-disable */
import React,{ useEffect,useRef } from 'react'

function WordWrapper({animationProps,type,children}) {
    
    const { delay, duration, timingFunction } = animationProps;
    const wordWrapper = useRef(null);

    useEffect(() => {
        setTimeout(()=>{
            wordWrapper.current.style.setProperty('--duration', duration + 'ms')
            wordWrapper.current.style.setProperty('--timingFunction', timingFunction)
        }, delay);
    }, [])

    return(
        <span className={`words-wrapper ${type}`} ref={wordWrapper}>
            {children}
        </span>
    )
}
export default WordWrapper