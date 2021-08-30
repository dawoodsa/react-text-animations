/* eslint-disable */
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react'
import AnimationTemplate from '../AnimationTemplate';


function Rotate1({ id, className, target, alternatingText, animation, style, children }) {

    const [currentWord, setCurrentWord] = useState(alternatingText[0]);
    const [currentAnimation, setCurrentAnimation] = useState('in');
    const { delay, duration, timingFunction } = animation;


    useEffect(() => {
        if (currentAnimation == 'in') {
            setTimeout(() => { setCurrentAnimation('out') }, duration)
        } else {
            setTimeout(() => { updateWord() }, delay)
        }
    }, [currentAnimation])

    useEffect(() => {
        setCurrentAnimation('in')
    }, [currentWord]);


    const updateWord = () => {
        const currentIndex = alternatingText.indexOf(currentWord);
        if (currentIndex === alternatingText.length - 1) {
            setCurrentWord(alternatingText[0])
        } else {
            setCurrentWord(alternatingText[currentIndex + 1])
        }
    }

    return (
        <AnimationTemplate className={className} id={id} name="rotate-1" target={target} string={children}>
            <span className="cd-words-wrapper">
                <span className="word" style={{ animation: `rotate-1-${currentAnimation} ${duration / 1000}s ${timingFunction}` }}>{currentWord}</span>
            </span>
        </AnimationTemplate>
    )
}

Rotate1.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Rotate1.defaultProps = {
    id: '',
    className: '',
    animation: {
        delay: 500,
        duration: 1200,
        timingFunction: 'ease'
    },
}
export default Rotate1;