/* eslint-disable */
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react'
import AnimationTemplate from '../AnimationTemplate';


function Clip({ id, className, target, alternatingText, animation, children }) {
    const { delay, duration, timingFunction } = animation;
    const [currentWord, setCurrentWord] = useState(alternatingText[0]);
    const [wrapperWidth, setWrapperWidth] = useState();
    const word = useRef(null);
    const cursor = useRef(null);

    useEffect(() => {
        if (isClipped()) {
            setTimeout(updateWord, duration)
        } else {
            setTimeout(minimizeWidth, delay)
        }
    }, [wrapperWidth])

    useEffect(() => {
        maximizeWidth();
    }, [currentWord])

    const isClipped = () => (wrapperWidth == cursor.current.offsetWidth) ? true : false

    const maximizeWidth = () => {
        setWrapperWidth(word.current.offsetWidth + 15);
    }
    const minimizeWidth = () => {
        setWrapperWidth(cursor.current.offsetWidth);
    }
    const isLastWord = (i) => (i == alternatingText.length - 1) ? true : false;
    const updateWord = () => {
        const curIndex = alternatingText.indexOf(currentWord);
        if (isLastWord(curIndex)) {
            setCurrentWord(alternatingText[0])
        } else {
            setCurrentWord(alternatingText[curIndex + 1])
        }
    }

    const wrapperStyle = {
        width: wrapperWidth,
        transition: `all ${duration}ms ${timingFunction}`
    }

    return (
        <AnimationTemplate
            name="clip"
            target={target}
            sentence={children}
            id={id}
            className={className}
        >
            <span className="words-wrapper" style={wrapperStyle}>
                <span ref={word}>
                    <span className="word">{currentWord}</span>
                    <span className="cursor" ref={cursor}/>
                </span>
            </span>
        </AnimationTemplate>
    )


}

Clip.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Clip.defaultProps = {
    id: '',
    className: 'text-animation-clip',
    animation: {
        delay: 2500,
        duration: 1000,
        timingFunction: 'ease'
    },
}

export default Clip;