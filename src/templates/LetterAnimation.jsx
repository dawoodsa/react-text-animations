/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import BoilerPlate from './BoilerPlate';
// import SetAnimationProperties from '../ui-components/SetAnimationProperties';



function LetterAnimation({ name, id, cname, target, text, animation, children }) {
    const { delay, duration, timingFunction } = animation;
    const wordWrapper = useRef(null);

    const [wordIndex, setWordIndex] = useState(0);
    const InitState = (index) => text.map((_, i) => (i == index) ? 'visible' : '')
    const [sizeState, setSizeState] = useState(InitState(0));
    const [opacity, setOpacity] = useState(0);

    const [letterState, setLetterState] = useState(() =>
        text.map((word, i) =>
            word.split('').map(() => (i == 0) ? 'in' : 'out')
        )
    );



    useEffect(() => {
        let start = setTimeout(play, delay);
        let opacity = setTimeout(setOpacity(1), delay);
        let increment = setTimeout(incrementIndex, delay);

        return () => {
            clearTimeout(increment)
            clearTimeout(start)
            clearTimeout(opacity)
        }
    }, [wordIndex])

    const setNextLetter = (word, letter, type) => {
        let newLetterState = letterState.concat();
        newLetterState[word][letter] = type;
        setLetterState(newLetterState);
    }

    const animateWord = (type, index) => {
        const lettersLength = letterState[index].length;

        wordWrapper.current.style.setProperty('--duration', duration + 'ms');
        wordWrapper.current.style.setProperty('--timingFunction', timingFunction);

        let i = 0;

        const animateLetter = setInterval(() => {
            setNextLetter(index, i, type);
            i++;
            if (i == lettersLength) clearInterval(animateLetter);
        }, 50)
    }

    const nextIndex = () => (wordIndex == letterState.length - 1) ? 0 : wordIndex + 1;

    const incrementIndex = () => {
        setTimeout(() => {
            setSizeState(InitState(nextIndex()));
        }, duration / 2);
        setWordIndex(nextIndex());
    }
    const play = () => {
        animateWord('out', wordIndex);
        animateWord('in', nextIndex());
    }
    return (
        <BoilerPlate
            name={name}
            id={id}
            cname={cname}
            target={target}
            sentence={children}
        >
            <span className="words-wrapper letter-ani" ref={wordWrapper}>
                {text.map((word, wordIndex) =>

                    <span
                        style={{ opacity: opacity }}
                        className={`word ${sizeState[wordIndex]}`}
                        key={wordIndex}
                    >
                        {word.split('').map((letter, letterIndex) =>

                            <i
                                className={letterState[wordIndex][letterIndex]}
                                key={letterIndex}
                            >
                                <em>{letter}</em>
                            </i>

                        )}
                    </span>

                )}
            </span>
        </BoilerPlate>
    )
}

export default LetterAnimation;