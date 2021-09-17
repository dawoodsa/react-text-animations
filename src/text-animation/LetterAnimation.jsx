/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import AnimationTemplate from './AnimationTemplate';
import WordWrapper from './WordsWrapper';



function LetterAnimation({ name, id, cname, target, alternatingText, animation, children }) {
    const delay = animation.delay
    const letterDelay = animation.duration / alternatingText.length;


    const [wordIndex, setWordIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [letterState, setLetterState] = useState(() =>
        alternatingText.map((word, i) =>
            word.split('').map(() => (i == 0) ? 'in' : 'out')
        )
    );



    useEffect(() => {
        setTimeout(setOpacity(1), delay);
        setTimeout(play, delay);
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
    const play = () => {
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
            <WordWrapper animationProps={animation} type="letter-ani">
                {alternatingText.map((word, wordIndex) =>

                    <span 
                        style={{ opacity: opacity }} 
                        className="word" 
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
            </WordWrapper>
        </AnimationTemplate>
    )
}

export default LetterAnimation;