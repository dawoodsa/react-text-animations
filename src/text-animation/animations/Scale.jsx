import React from 'react'
import PropTypes from 'prop-types';
import LetterAnimation from '../LetterAnimation';
function Scale(props) {
    props = Object.assign({ name: 'scale' }, props);
    return <LetterAnimation {...props}></LetterAnimation>
}
Scale.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Scale.defaultProps = {
    id: '',
    cname: 'text-animation-Scale',
    animation: {
        delay: 2000,
        duration: 400,
        timingFunction: 'forwards'
    },
}
export default Scale