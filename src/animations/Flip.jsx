/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import WordAnimation from '../templates/WordAnimation';

function Flip(props) {
    props = Object.assign({ name: 'flip' }, props);
    return <WordAnimation {...props} />
}

Flip.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Flip.defaultProps = {
    id: '',
    cname: 'text-animation-Flip',
    animation: {
        delay: 2500,
        duration: 1000,
        timingFunction: 'ease'
    },
}
export default Flip;