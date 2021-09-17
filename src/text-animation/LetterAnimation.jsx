/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import AnimationTemplate from './AnimationTemplate';
import styled from 'styled-components';

const wordWrapper = styled.span`
    
`
function LetterAnimation({ name, id, cname, target, alternatingText, animation, children }) {
    const { delay, duration, timingFunction } = animation;
    const letterDelay = duration / alternatingText.length;
    const wordWrapper = useRef(null);
    const initLetterState = () => {
        return alternatingText.map((_, i) => {
            return _.split('').map((_) => (i == 0) ? 'in' : 'out');
        })
    }
    const [letterState, setLetterState] = useState(initLetterState());
    const [wordIndex, setWordIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const setAnimationProperties = () => {
        setOpacity(1)
        wordWrapper.current.style.setProperty('--duration', duration + 'ms')
        wordWrapper.current.style.setProperty('--timingFunction', timingFunction)
    }
    useEffect(() => {
        setTimeout(setAnimationProperties, delay);
    }, [])
    useEffect(() => {
        setTimeout(playNext, delay);
        setTimeout(incrementIndex, delay);
    }, [wordIndex])

    const setNextLetter = (word, letter, type) => {
        let newLetterState = letterState.concat();
        newLetterState[word][letter] = type;
        setLetterState(newLetterState);
    }
    const animateWord = (type, index) => {
        const lettersLength = letterState[index].length;
        let i = 0;

        const animateLetter = setInterval(() => {
            setNextLetter(index, i, type);
            i++;
            if (i == lettersLength) clearInterval(animateLetter);
        }, letterDelay)
    }

    const nextIndex = () => (wordIndex == letterState.length - 1) ? 0 : wordIndex + 1;

    const incrementIndex = () => {
        setWordIndex(nextIndex());
    }
    const playNext = () => {
        animateWord('out', wordIndex);
        animateWord('in', nextIndex());
    }
    return (
        <AnimationTemplate
            name={name}
            id={id}
            cname={cname}
            target={target}
            sentence={children}
        >
            <span className="words-wrapper letter-ani" ref={wordWrapper}>
                {alternatingText.map((word, i) => {
                    const visible = (i == 0) ? 'visible' : '';
                    return (
                        <span className={`word word-${i} ${visible}`} style={{ opacity: opacity }}>
                            {word.split('').map((letter, letterIndex) => {
                                return (
                                    <i className={letterState[i][letterIndex]}>
                                        <em>{letter}</em>
                                    </i>
                                )
                            })}
                        </span>
                    )
                })}
            </span>
        </AnimationTemplate>
    )
}

export default LetterAnimation;