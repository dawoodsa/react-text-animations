/* eslint-disable */
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react'
import AnimationTemplate from '../AnimationTemplate';


function Rotate1({ id, cname, target, alternatingText, animation, children }) {

    const wordWrapper = useRef(null);
    const { delay, duration, timingFunction } = animation;
    const InitWordState = (index) => {
        return alternatingText.map((_, i) => (i == index) ? 'visible' : 'hidden')
    }

    const [wordState, setWordState] = useState(InitWordState(0));


    useEffect(() => {
        setTimeout(setAnimationProperties, delay);
    }, [])


    useEffect(() => {
        setTimeout(playNext, delay);
    }, [wordState])


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
            name="rotate1"
            target={target}
            sentence={children}

            id={id}
            cname={cname}
        >
            <span className="words-wrapper" ref={wordWrapper}>
                {alternatingText.map((_, i) =>
                    <span className={`word ${wordState[i]}`} key={i}>{_}</span>
                )}
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
    cname: 'text-animation-rotate1',
    animation: {
        delay: 2500,
        duration: 1000,
        timingFunction: 'ease'
    },
}
export default Rotate1;