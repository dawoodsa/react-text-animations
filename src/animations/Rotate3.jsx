import React from 'react'
import PropTypes from 'prop-types';
import LetterAnimation from '../templates/LetterAnimation';
function Rotate3(props) {
    props = Object.assign({ name: 'rotate3' }, props);
    return <LetterAnimation {...props}></LetterAnimation>
}
Rotate3.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Rotate3.defaultProps = {
    id: '',
    cname: 'text-animation-Rotate3',
    animation: {
        delay: 2000,
        duration: 400,
        timingFunction: 'forwards'
    },
}
export default Rotate3