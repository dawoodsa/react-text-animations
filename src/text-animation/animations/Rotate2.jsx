import React from 'react'
import PropTypes from 'prop-types';
import LetterAnimation from '../LetterAnimation';
function Rotate2(props) {
    props = Object.assign({ name: 'rotate2' }, props);
    return <LetterAnimation {...props}></LetterAnimation>
}
Rotate2.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Rotate2.defaultProps = {
    id: '',
    cname: 'text-animation-Rotate2',
    animation: {
        delay: 2000,
        duration: 400,
        timingFunction: 'forwards'
    },
}
export default Rotate2
