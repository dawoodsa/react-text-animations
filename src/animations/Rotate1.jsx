import React from 'react'
import PropTypes from 'prop-types';
import LetterAnimation from '../templates/LetterAnimation';
function Rotate1(props) {
    props = Object.assign({ name: 'rotate1' }, props);
    return <LetterAnimation {...props}></LetterAnimation>
}
Rotate1.propTypes = {
    target: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
}

Rotate1.defaultProps = {
    id: '',
    cname: 'text-animation-Rotate1',
    animation: {
        delay: 2000,
        duration: 400,
        timingFunction: 'ease',
    },
    loop:true,
}
export default Rotate1
