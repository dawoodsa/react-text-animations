/* eslint-disable */
import React, { useState, useEffect } from 'react'
import BoilerPlate from './BoilerPlate';
import SetAnimationProperties from '../ui-components/SetAnimationProperties';
function WordAnimation({ name, id, cname, target, text, animation, children }) {
    const { delay, duration } = animation;
    const   showClass = 'show',
            hideClass = 'hide',
            sizeClass = 'visible';
    const InitState = (index, showClass, hideClass) => text.map((_, i) => (i == index) ? showClass : hideClass)
    const [wordState, setWordState] = useState(InitState(0, showClass, hideClass));
    const [sizeState, setSizeState] = useState(InitState(0, sizeClass, ''))

    useEffect(() => {
        let start = setTimeout(playNext, delay);
        return () => clearTimeout(start);
    }, [wordState])

    const lastIndex = (i) => (i == wordState.length - 1) ? true : false;

    const getNextIndex = (i) => (lastIndex(i)) ? 0 : i + 1;

    const playNext = () => {
        const currentIndex = wordState.indexOf(showClass);
        const nextIndex = getNextIndex(currentIndex);

        const AnimationsThatNeedADelay = ['flip'];

        if (AnimationsThatNeedADelay.includes(name)) {
            setTimeout(() => {
                setSizeState(InitState(nextIndex, 'visible', ''))
            }, duration / 2)
        } else {
            setSizeState(InitState(nextIndex, 'visible', ''))
        }

        setWordState(InitState(nextIndex, showClass, hideClass));
    }

    return (
        <BoilerPlate
            name={name}
            target={target}
            sentence={children}

            id={id}
            cname={cname}
        >
            <SetAnimationProperties animationProps={animation} type="word-ani">
                {text.map((word, i) =>
                    <span
                        className={`word ${wordState[i]} ${sizeState[i]}`}
                        key={i}
                    >{word}</span>
                )}
            </SetAnimationProperties>
        </BoilerPlate>
    )
}

export default WordAnimation;