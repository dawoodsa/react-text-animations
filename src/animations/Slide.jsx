/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import WordAnimation from '../templates/WordAnimation';
function Slide(props) {
    props = Object.assign({ name: 'slide' }, props);
    return <WordAnimation {...props} />
}

Slide.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Slide.defaultProps = {
    id: '',
    cname: 'text-animation-slide',
    animation: {
        delay: 2500,
        duration: 2000,
        timingFunction: 'ease'
    },
}
export default Slide;