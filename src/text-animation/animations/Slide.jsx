/* eslint-disable */
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react'
import AnimationTemplate from '../AnimationTemplate';

function Slide({ id, className, target, alternatingText, animation, children }) {

    const wordWrapper = useRef(null);
    const { delay, duration, timingFunction } = animation;
    const InitWordState = (index) => {
        return alternatingText.map((_, i) => (i == index) ? 'visible' : 'hidden')
    }

    const [wordState, setWordState] = useState(InitWordState(0));


    useEffect(() => {
        setWrapperToMaxWidth();
        setTimeout(setAnimationProperties, delay);
    }, [])


    useEffect(() => {
        setTimeout(playNext, delay);
    }, [wordState])


    const getMaxWidth = (allWords) => {
        return Array.from(allWords).reduce((curWidth, word) => {
            if (word.offsetWidth > curWidth) curWidth = word.offsetWidth;
            return curWidth;
        }, 0)
    }
    const setWrapperToMaxWidth = () => {
        const allWords = wordWrapper.current.children;
        wordWrapper.current.style.width = getMaxWidth(allWords) + 'px';
    }
    const setAnimationProperties = () => {
        wordWrapper.current.style.setProperty('--duration', duration + 'ms')
        wordWrapper.current.style.setProperty('--timingFunction', timingFunction)
    }
    const lastIndex = (i) => (i == wordState.length - 1) ? true : false;

    const getNextIndex = (i) => (lastIndex(i)) ? 0 : i + 1;

    const playNext = () => {
        const nextIndex = getNextIndex(wordState.indexOf('visible'));
        setWordState(InitWordState(nextIndex));
    }


    return (
        <AnimationTemplate 
            name="slide" 
            target={target} 
            sentence={children}
            id={id} 
            className={className} 
        >
            <span className="cd-words-wrapper" ref={wordWrapper}>
                {alternatingText.map((_, i) => {
                    return <span className={`word ${wordState[i]}`} key={i} >{_}</span>
                })}
            </span>
        </AnimationTemplate>
    )
}

Slide.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Slide.defaultProps = {
    id: '',
    className: 'text-animation-slide',
    animation: {
        delay: 2500,
        duration: 2000,
        timingFunction: 'ease'
    },
}
export default Slide;