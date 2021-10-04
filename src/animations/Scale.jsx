import React from 'react'
import PropTypes from 'prop-types';
import LetterAnimation from '../templates/LetterAnimation';
function Scale(props) {
    props = Object.assign({ name: 'scale' }, props);
    return <LetterAnimation {...props}></LetterAnimation>
}
Scale.propTypes = {
    target: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
}

Scale.defaultProps = {
    id: '',
    cname: 'text-animation-Scale',
    animation: {
        delay: 1000,
        duration: 1000,
        timingFunction: 'ease',
    },
    loop: true,
}
export default Scale