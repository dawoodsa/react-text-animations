/* eslint-disable */
import React, { useState, useEffect } from 'react'
import BoilerPlate from './BoilerPlate';
import SetAnimationProperties from '../ui-components/SetAnimationProperties';
function WordAnimation({ name, id, cname, target, text, animation, loop, children }) {
    const { delay, duration } = animation;
    const showClass = 'show',
        hideClass = 'hide',
        widthClass = 'relative';
    const InitState = (index, showClass, hideClass) => text.map((_, i) => (i == index) ? showClass : hideClass || '')
    const [wordState, setWordState] = useState(InitState(0, showClass, hideClass));
    const [widthState, setWidthState] = useState(InitState(0, widthClass))

    useEffect(() => {
        let start = setTimeout(() => {
            if (!loop) {
                if (nextIndex() != 0) {
                    play();
                }
            } else {
                play();
            }
        }, delay);

        return () => clearTimeout(start);
    }, [wordState])

    const lastIndex = (i) => (i == wordState.length - 1) ? true : false;
    const nextIndex = () => {
        const currentIndex = wordState.indexOf(showClass);
        return (lastIndex(currentIndex) == true) ? 0 : currentIndex + 1
    }

    const updateWord = () => {
        setWordState(InitState(nextIndex(), showClass, hideClass));
    }
    const updateWidth = () => {
        const AnimationsThatNeedADelay = ['flip'];

        if (AnimationsThatNeedADelay.includes(name)) {
            setTimeout(() => {
                setWidthState(InitState(nextIndex(), widthClass))
            }, duration / 2)
        } else {
            setWidthState(InitState(nextIndex(), widthClass))
        }
    }
    const play = () => {
        updateWord();
        updateWidth();
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
                        className={`word ${wordState[i]} ${widthState[i]}`}
                        key={i}
                    >{word}</span>
                )}
            </SetAnimationProperties>
        </BoilerPlate>
    )
}

export default WordAnimation;