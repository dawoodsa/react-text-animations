/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import BoilerPlate from './BoilerPlate';
import SetAnimationProperties from '../ui-components/SetAnimationProperties';
function WordAnimation({ name, id, cname, target, alternatingText, animation, children }) {
    const InitWordState = (index) => alternatingText.map((_, i) => (i == index) ? 'visible' : 'hidden')
    const [wordState, setWordState] = useState(InitWordState(0));

    useEffect(() => {
        setTimeout(playNext, animation.delay);
    }, [wordState])

    const lastIndex = (i) => (i == wordState.length - 1) ? true : false;

    const getNextIndex = (i) => (lastIndex(i)) ? 0 : i + 1;

    const playNext = () => {
        const nextIndex = getNextIndex(wordState.indexOf('visible'));
        setWordState(InitWordState(nextIndex));
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
                {alternatingText.map((word, i) =>
                    <span
                        className={`word ${wordState[i]}`}
                        key={i}
                    >{word}</span>
                )}
            </SetAnimationProperties>
        </BoilerPlate>
    )
}

export default WordAnimation;