/* eslint-disable */
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react'
import AnimationTemplate from '../AnimationTemplate';


function Clip({ id, className, target, alternatingText, animation, children }) {

    const [currentWord, setCurrentWord] = useState(alternatingText[0]);
    const [wrapperWidth, setWrapperWidth] = useState();
    const word = useRef(null);
    const cursor = useRef(null);

    useEffect(() => {
        minimizeWidth();
    }, [])
    useEffect(() => {
        if (wrapperWidth == cursor.current.offsetWidth) {
            setTimeout(updateWord, duration)
        } else {
            setTimeout(minimizeWidth, delay)
        }
    }, [wrapperWidth])

    useEffect(() => {
        maximizeWidth();
    }, [currentWord])

    const maximizeWidth = () => {
        setWrapperWidth(word.current.offsetWidth + 15);
    }
    const minimizeWidth = () => {
        setWrapperWidth(cursor.current.offsetWidth);
    }
    const updateWord = () => {
        const currentIndex = alternatingText.indexOf(currentWord);
        if (currentIndex === alternatingText.length - 1) {
            setCurrentWord(alternatingText[0])
        } else {
            setCurrentWord(alternatingText[currentIndex + 1])
        }
    }


    const { delay, duration, timingFunction } = animation;


    const wrapperStyle = {
        width: wrapperWidth,
        transition: `all ${duration / 1000}s ${timingFunction}`
    }

    return (
        <AnimationTemplate className={className} id={id} name="clip" target={target} sentence={children}>
            <span className="cd-words-wrapper" style={wrapperStyle}>
                <span ref={word}>
                    <span className="word">{currentWord}</span>
                    <span ref={cursor} className="cursor" />
                </span>
            </span>
        </AnimationTemplate>
    )


}

/**
   @param target A word, the animation will be applied to.
   @param alternatingText A array holding the alternating words
   @param animation the animation parameters
*/

Clip.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Clip.defaultProps = {
    id: '',
    className: 'text-animation-clip',
    animation: {
        delay: 3000,
        duration: 1000,
        timingFunction: 'linear'
    },
}

export default Clip;