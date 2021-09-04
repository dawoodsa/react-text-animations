/* eslint-disable */
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react'
import AnimationTemplate from '../AnimationTemplate';


function Rotate1({ id, className, target, alternatingText, animation, children }) {
    const wordStateInit = () => {
        let initializer = ['visible'];
        for (let i = 0; i < alternatingText.length - 1; i++) {
            initializer.push('hidden');
        }
        return initializer;
    }

    const [wordState, setWordState] = useState(wordStateInit());
    const wordWrapper = useRef(null);
    const { delay, duration, timingFunction } = animation;

    useEffect(() => {
        setTimeout(() => {
            wordWrapper.current.style.setProperty('--duration', duration + 'ms')
            wordWrapper.current.style.setProperty('--timingFunction', timingFunction)
        }, delay);
    }, [])

    useEffect(() => {
        setTimeout(() => { next() }, delay);
    }, [wordState])

    const next = () => {
        let nextIndex;
        const currentIndex = wordState.indexOf('visible');
        (currentIndex == wordState.length - 1) ? nextIndex = 0 : nextIndex = currentIndex + 1;
        const newWordState = wordState.concat().map((_, i) => nextIndex == i ? 'visible' : 'hidden')
        setWordState(newWordState);

    }
    return (
        <AnimationTemplate className={className} id={id} name="rotate-1" target={target} sentence={children}>
            <span className="cd-words-wrapper" ref={wordWrapper}>
                {alternatingText.map((_, i) => {
                    return <span className={`word ${wordState[i]}`} key={i} >{_}</span>
                })}
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
    className: 'text-animation-rotate1',
    animation: {
        delay: 2000,
        duration: 1200,
        timingFunction: 'ease'
    },
}
export default Rotate1;