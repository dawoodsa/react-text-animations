/* eslint-disable */
import { useState, useEffect, useRef } from 'react'
import AnimationTemplate from './AnimationTemplate';

function CssAnimation({ name, id, cname, target, alternatingText, animation, children }) {
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
            name={name}
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

export default CssAnimation;