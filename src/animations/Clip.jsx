/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react'
import BoilerPlate from '../templates/BoilerPlate';


function Clip({ id, cname, target, text, animation, children }) {
    const { delay, duration, timingFunction } = animation;
    const [currentWord, setCurrentWord] = useState(text[0]);
    const [wrapperWidth, setWrapperWidth] = useState();
    const word = useRef(null);
    const cursor = useRef(null);

    useEffect(() => {
        let x;
        if (isClipped()) {
            setTimeout(updateWord, duration)
        } else {
            x = setTimeout(minimizeWidth, delay)
        }
        return () => clearTimeout(x);
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
    const isLastWord = (i) => (i == text.length - 1) ? true : false;
    const updateWord = () => {
        const curIndex = text.indexOf(currentWord);
        if (isLastWord(curIndex)) {
            setCurrentWord(text[0])
        } else {
            setCurrentWord(text[curIndex + 1])
        }
    }

    const wrapperStyle = {
        width: wrapperWidth,
        transition: `all ${duration}ms ${timingFunction}`
    }

    return (
        <BoilerPlate
            name="clip"
            target={target}
            sentence={children}

            id={id}
            cname={cname}
        >
            <span className="words-wrapper" style={wrapperStyle}>
                <span ref={word}>
                    <span className="word visible">{currentWord}</span>
                    <span className="cursor" ref={cursor} />
                </span>
            </span>
        </BoilerPlate>
    )


}

Clip.propTypes = {
    target: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
}

Clip.defaultProps = {
    id: '',
    cname: 'text-animation-clip',
    animation: {
        delay: 1000,
        duration: 500,
        timingFunction: 'ease'
    },
}

export default Clip;